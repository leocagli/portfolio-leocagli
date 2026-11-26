"use client"

// Single page-level WebGL background. Only module that imports three.
// Loaded exclusively via next/dynamic (ssr:false) from site-background-mount.tsx.

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useMemo, useRef, useState } from "react"
import type { MutableRefObject } from "react"
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

const vertexShader = /* glsl */ `
  attribute vec3 color;
  varying vec3 vColor;
  uniform float uTime;

  void main() {
    float t = uTime;
    float wave =
      sin(position.x * 0.32 + position.y * 0.1 + t * 0.9) * 0.7
      + cos(position.y * 0.26 - t * 0.62) * 0.5
      + sin((position.x - position.y) * 0.18 + t * 0.4) * 0.38;
    vec3 pos = position;
    pos.z += wave;
    vColor = color;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`

const fragmentShader = /* glsl */ `
  varying vec3 vColor;
  uniform float uHue;

  vec3 hueShift(vec3 color, float hue) {
    const vec3 k = vec3(0.57735026919);
    float cosA = cos(hue);
    return color * cosA + cross(k, color) * sin(hue) + k * dot(k, color) * (1.0 - cosA);
  }

  void main() {
    gl_FragColor = vec4(hueShift(vColor, uHue), 1.0);
  }
`

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
  const geo = new THREE.PlaneGeometry(56, 36, 32, 20)
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

type MotionRefs = {
  scroll: MutableRefObject<number>
  mouse: MutableRefObject<{ x: number; y: number }>
}

function Scene({ scroll, mouse }: MotionRefs) {
  const group = useRef<THREE.Group>(null)
  const smoothMouse = useRef({ x: 0, y: 0 })
  const smoothScroll = useRef(0)

  const geometry = useMemo(() => makeTerrain(), [])
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uHue: { value: 0 },
        },
        vertexShader,
        fragmentShader,
      }),
    [],
  )

  useEffect(
    () => () => {
      geometry.dispose()
      material.dispose()
    },
    [geometry, material],
  )

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    material.uniforms.uTime.value = t
    material.uniforms.uHue.value = t * 0.18

    const sm = smoothMouse.current
    sm.x += (mouse.current.x - sm.x) * 0.06
    sm.y += (mouse.current.y - sm.y) * 0.06
    smoothScroll.current += (scroll.current - smoothScroll.current) * 0.08

    if (group.current) {
      group.current.position.x = sm.x * 0.85
      group.current.position.y = smoothScroll.current * 4.4 + sm.y * 0.45
      group.current.rotation.x = -sm.y * 0.12
      group.current.rotation.y = sm.x * 0.2
      group.current.rotation.z = Math.sin(t * 0.14) * 0.06
    }
  })

  return (
    <group ref={group}>
      <mesh
        geometry={geometry}
        material={material}
        rotation={[-0.95, 0, 0]}
        position={[0, -4.2, -6]}
      />
    </group>
  )
}

export default function SiteBackground() {
  const scroll = useRef(0)
  const mouse = useRef({ x: 0, y: 0 })
  const wrapRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(true)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const mobile = window.innerWidth < 768
    setIsMobile(mobile)

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scroll.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    }
    updateScroll()

    const onPointer = (e: PointerEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1)
    }

    let visibleInViewport = true
    const syncActive = () => setActive(!document.hidden && visibleInViewport)
    const onVisibility = () => syncActive()

    const io = new IntersectionObserver(
      ([entry]) => {
        visibleInViewport = entry.isIntersecting
        syncActive()
      },
      { threshold: 0 },
    )
    if (wrapRef.current) io.observe(wrapRef.current)

    window.addEventListener("scroll", updateScroll, { passive: true })
    window.addEventListener("resize", updateScroll)
    window.addEventListener("pointermove", onPointer, { passive: true })
    document.addEventListener("visibilitychange", onVisibility)
    syncActive()

    return () => {
      io.disconnect()
      window.removeEventListener("scroll", updateScroll)
      window.removeEventListener("resize", updateScroll)
      window.removeEventListener("pointermove", onPointer)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    >
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
        <Scene scroll={scroll} mouse={mouse} />
      </Canvas>
    </div>
  )
}
