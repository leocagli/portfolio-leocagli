"use client"

// Single page-level WebGL background. This is the ONLY module that imports
// three / @react-three/fiber, and it is only ever reached through next/dynamic
// (see site-background-mount.tsx), so three stays out of the main bundle.
//
// Performance contract:
// - frameloop="demand": nothing renders unless we invalidate
// - 30fps cap via DemandLoop
// - dpr 1 on mobile, max 1.5 desktop
// - no shadows, no postprocessing, flat tone mapping, low-power GL, low poly
// - rendering pauses when the tab is hidden or when every section that can
//   reveal the background (hero / projects / awards) is scrolled off-screen.

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"
import { backgroundDpr } from "./env"

const PALETTE = {
  terrain: "#dbe7fb",
  blue: "#2F81F7",
  yellow: "#FFC224",
  pink: "#FF6B7A",
  green: "#10B981",
} as const

function DemandLoop({ fps }: { fps: number }) {
  const invalidate = useThree((s) => s.invalidate)
  useEffect(() => {
    let raf = 0
    let last = 0
    const tick = (now: number) => {
      if (now - last >= 1000 / fps) {
        last = now
        invalidate()
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [fps, invalidate])
  return null
}

// Low-poly solids scattered toward the edges so they stay clear of headline text.
// Keep solids in the far corners so they don't sit on headline or body text.
const SOLIDS = [
  { kind: "ico", color: PALETTE.blue, pos: [-6.4, 2.8, -3.2] as const, size: 0.55, opacity: 0.2 },
  { kind: "octa", color: PALETTE.yellow, pos: [6.6, 3.0, -3.4] as const, size: 0.62, opacity: 0.2 },
  { kind: "tetra", color: PALETTE.pink, pos: [6.2, -3.2, -3] as const, size: 0.58, opacity: 0.18 },
  { kind: "dodeca", color: PALETTE.green, pos: [-6.0, -3.4, -3.2] as const, size: 0.48, opacity: 0.2 },
] as const

function Scene({ scroll }: { scroll: { current: number } }) {
  const group = useRef<THREE.Group>(null)
  const terrain = useRef<THREE.Mesh>(null)
  const solids = useRef<THREE.Group>(null)

  const terrainGeo = useMemo(() => {
    const g = new THREE.PlaneGeometry(28, 16, 18, 10)
    const pos = g.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      pos.setZ(i, Math.sin(x * 0.5) * 0.45 + Math.cos(y * 0.6) * 0.32)
    }
    return g
  }, [])

  useEffect(() => () => terrainGeo.dispose(), [terrainGeo])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const s = scroll.current // 0..1 across the page
    if (group.current) {
      // Gentle parallax: the whole scene drifts up a little as you scroll.
      group.current.position.y = s * 3.2
      group.current.rotation.z = Math.sin(t * 0.05) * 0.025
    }
    if (terrain.current) {
      terrain.current.rotation.z = t * 0.012
    }
    if (solids.current) {
      solids.current.rotation.y = t * 0.05 + s * 0.8
      solids.current.children.forEach((child, i) => {
        child.rotation.x = t * (0.08 + i * 0.01) * (i % 2 ? 1 : -1)
        child.rotation.y = t * 0.07
      })
    }
  })

  return (
    <group ref={group}>
      <mesh ref={terrain} geometry={terrainGeo} rotation={[-1.05, 0, 0]} position={[0, -3.4, -4]}>
        <meshBasicMaterial color={PALETTE.terrain} wireframe transparent opacity={0.4} />
      </mesh>
      <group ref={solids}>
        {SOLIDS.map((item, i) => (
          <mesh key={i} position={item.pos}>
            {item.kind === "ico" && <icosahedronGeometry args={[item.size, 0]} />}
            {item.kind === "octa" && <octahedronGeometry args={[item.size, 0]} />}
            {item.kind === "tetra" && <tetrahedronGeometry args={[item.size, 0]} />}
            {item.kind === "dodeca" && <dodecahedronGeometry args={[item.size, 0]} />}
            <meshBasicMaterial color={item.color} wireframe transparent opacity={item.opacity} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

export default function SiteBackground() {
  const scroll = useRef(0)
  const [active, setActive] = useState(true)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scroll.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    }
    updateScroll()

    // Only run the loop while the background can actually be seen: the tab is
    // visible AND at least one revealing section is near the viewport.
    const revealers = ["top", "latest", "projects", "awards", "talks"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    const onScreen = new Set<Element>()
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target)
          else onScreen.delete(entry.target)
        }
        setActive(!document.hidden && onScreen.size > 0)
      },
      { rootMargin: "100px" },
    )
    revealers.forEach((el) => io.observe(el))

    const onVisibility = () => setActive(!document.hidden && onScreen.size > 0)

    window.addEventListener("scroll", updateScroll, { passive: true })
    window.addEventListener("resize", updateScroll)
    document.addEventListener("visibilitychange", onVisibility)
    return () => {
      io.disconnect()
      window.removeEventListener("scroll", updateScroll)
      window.removeEventListener("resize", updateScroll)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        frameloop="demand"
        dpr={backgroundDpr(isMobile)}
        flat
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0, 8], fov: 45, near: 0.1, far: 40 }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = false
        }}
        className="!h-full !w-full"
      >
        {active && <DemandLoop fps={30} />}
        <Scene scroll={scroll} />
      </Canvas>
    </div>
  )
}
