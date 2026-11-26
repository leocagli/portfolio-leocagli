"use client"

// Single page-level WebGL background. Only module that imports three.
// Loaded exclusively via next/dynamic (ssr:false) from site-background-mount.tsx.

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useMemo, useRef, useState } from "react"
import * as THREE from "three"
import { backgroundDpr } from "./env"

const PALETTE = [
  new THREE.Color("#2563eb"),
  new THREE.Color("#4f46e5"),
  new THREE.Color("#7c3aed"),
  new THREE.Color("#0d9488"),
  new THREE.Color("#0369a1"),
  new THREE.Color("#db2777"),
  new THREE.Color("#d97706"),
  new THREE.Color("#1e3a8a"),
]

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

function makeTerrain() {
  const geo = new THREE.PlaneGeometry(56, 36, 24, 16)
  const pos = geo.attributes.position
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    const y = pos.getY(i)
    pos.setZ(
      i,
      Math.sin(x * 0.2) * 1.8 + Math.cos(y * 0.16) * 1.5 + Math.sin((x + y) * 0.12) * 1.1,
    )
  }
  const faceted = geo.toNonIndexed()
  geo.dispose()
  const p = faceted.attributes.position
  const colors = new Float32Array(p.count * 3)
  for (let i = 0; i < p.count; i += 3) {
    const z = (p.getZ(i) + p.getZ(i + 1) + p.getZ(i + 2)) / 3
    const cx = p.getX(i)
    const idx = Math.abs(Math.floor(cx * 2.2 + p.getY(i) * 1.7 + z * 3.1)) % PALETTE.length
    const col = PALETTE[idx]
    for (let k = 0; k < 3; k++) {
      colors[(i + k) * 3] = col.r
      colors[(i + k) * 3 + 1] = col.g
      colors[(i + k) * 3 + 2] = col.b
    }
  }
  faceted.setAttribute("color", new THREE.BufferAttribute(colors, 3))
  return faceted
}

function Scene({ scroll }: { scroll: { current: number } }) {
  const group = useRef<THREE.Group>(null)
  const terrain = useRef<THREE.Mesh>(null)
  const baseZ = useRef<Float32Array | null>(null)

  const geometry = useMemo(() => {
    const g = makeTerrain()
    baseZ.current = new Float32Array(g.attributes.position.count)
    const pos = g.attributes.position
    for (let i = 0; i < pos.count; i++) baseZ.current[i] = pos.getZ(i)
    return g
  }, [])

  useEffect(() => () => geometry.dispose(), [geometry])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    const s = scroll.current
    if (group.current) {
      group.current.position.y = s * 4.2
      group.current.rotation.z = Math.sin(t * 0.08) * 0.04
    }
    if (terrain.current && baseZ.current) {
      const pos = terrain.current.geometry.attributes.position
      const bases = baseZ.current
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i)
        const y = pos.getY(i)
        pos.setZ(i, bases[i] + Math.sin(t * 0.35 + x * 0.2 + y * 0.15) * 0.18)
      }
      pos.needsUpdate = true
    }
  })

  return (
    <group ref={group}>
      <mesh
        ref={terrain}
        geometry={geometry}
        rotation={[-0.95, 0, 0]}
        position={[0, -4.2, -6]}
      >
        <meshBasicMaterial vertexColors={true} />
      </mesh>
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

    const onVisibility = () => setActive(!document.hidden)
    const onScroll = () => {
      updateScroll()
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", updateScroll)
    document.addEventListener("visibilitychange", onVisibility)
    setActive(!document.hidden)
    return () => {
      window.removeEventListener("scroll", onScroll)
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
          alpha: false,
          powerPreference: "low-power",
          stencil: false,
          depth: true,
        }}
        camera={{ position: [0, 0.6, 9], fov: 48, near: 0.1, far: 60 }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = false
          gl.setClearColor(0x0a1020, 1)
        }}
        className="!h-full !w-full"
      >
        {active && <DemandLoop fps={30} />}
        <Scene scroll={scroll} />
      </Canvas>
    </div>
  )
}
