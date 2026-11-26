"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectNavLinks } from "@/components/project-nav-links"
import * as THREE from "three"

const PROJECTS = [
  {
    href: "#cosmos-pay",
    label: "Cosmos Pay",
    src: "/images/cosmos-pay-banner.webp",
    alt: "Official Cosmos Pay banner: A simpler way to move your digital world.",
  },
  {
    href: "#ba-protege-plus",
    label: "BA Protege Plus",
    src: "/images/ba-protege-plus-thumb.webp",
    alt: "BA Protege Plus app: blocking a site and sending a suggestion, from the project video.",
  },
  {
    href: "#medflow",
    label: "MedFlow",
    src: "/images/medflow-logo.webp",
    alt: "MedFlow logo.",
  },
  {
    href: "#runa",
    label: "Runa",
    src: "/images/tripothon-winner-runa.webp",
    alt: "Runa winning Best Game at Tripothon S1 in São Paulo.",
  },
  {
    href: "#agentic-city",
    label: "Agentic City",
    src: "/images/agentic-city-scene.webp",
    alt: "A neon city scene from Agentic City.",
  },
  {
    href: "#argentina-dev",
    label: "Argentina.dev",
    src: "/images/tren-solar-mentor-pass.webp",
    alt: "Boarding-pass card for Cursor Hackathon Jujuy on the Tren Solar de la Quebrada.",
  },
] as const

const N = PROJECTS.length

function shouldUseMotion() {
  if (typeof window === "undefined") return false
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false
  const nav = navigator as Navigator & {
    deviceMemory?: number
    connection?: { saveData?: boolean }
  }
  if (nav.connection?.saveData) return false
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) return false
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) return false
  return true
}

function wrapIndex(i: number) {
  return ((i % N) + N) % N
}

function shortestOffset(i: number, active: number) {
  let d = i - active
  while (d > N / 2) d -= N
  while (d < -N / 2) d += N
  return d
}

function DemandLoop({ enabled, fps }: { enabled: boolean; fps: number }) {
  const invalidate = useThree((s) => s.invalidate)
  useEffect(() => {
    if (!enabled) return
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
  }, [enabled, fps, invalidate])
  return null
}

function LowPolyBackdrop() {
  const terrain = useRef<THREE.Mesh>(null)
  const group = useRef<THREE.Group>(null)
  const geometry = useRef<THREE.PlaneGeometry | null>(null)
  if (!geometry.current) {
    const g = new THREE.PlaneGeometry(16, 7, 18, 9)
    const pos = g.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i)
      const y = pos.getY(i)
      pos.setZ(i, Math.sin(x * 0.55) * 0.28 + Math.cos(y * 0.7) * 0.18)
    }
    geometry.current = g
  }

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    if (terrain.current) {
      terrain.current.position.y = -1.35 + Math.sin(t * 0.2) * 0.06
    }
    if (group.current) {
      group.current.rotation.y = Math.sin(t * 0.12) * 0.08
    }
  })

  return (
    <group ref={group}>
      <mesh
        ref={terrain}
        geometry={geometry.current}
        rotation={[-0.72, 0, 0]}
        position={[0, -1.35, -2.2]}
      >
        <meshBasicMaterial color="#d7e4f7" transparent opacity={0.85} />
      </mesh>
      {[
        { p: [-4.2, 0.4, -3] as const, c: "#2F81F7", s: 0.35 },
        { p: [3.6, 0.7, -3.4] as const, c: "#FFC224", s: 0.28 },
        { p: [-1.2, 1.1, -3.8] as const, c: "#FF6B7A", s: 0.22 },
        { p: [1.8, 0.2, -3.1] as const, c: "#10B981", s: 0.26 },
      ].map((item) => (
        <mesh key={item.c} position={item.p} rotation={[0.4, 0.5, 0.2]}>
          <icosahedronGeometry args={[item.s, 0]} />
          <meshBasicMaterial color={item.c} wireframe transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  )
}

function BackgroundCanvas({ enabled }: { enabled: boolean }) {
  const [isMobile, setIsMobile] = useState(true)
  useEffect(() => setIsMobile(window.innerWidth < 768), [])
  const dpr = isMobile ? 1 : Math.min(1.5, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1)

  if (!enabled) return null

  return (
    <Canvas
      frameloop="demand"
      dpr={dpr}
      flat
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
        stencil: false,
        depth: true,
      }}
      camera={{ position: [0, 0.2, 6.5], fov: 40, near: 0.1, far: 30 }}
      onCreated={({ gl }) => {
        gl.shadowMap.enabled = false
      }}
      className="absolute inset-0 !h-full !w-full"
      aria-hidden="true"
    >
      <DemandLoop enabled={enabled} fps={30} />
      <LowPolyBackdrop />
    </Canvas>
  )
}

function ProjectGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {PROJECTS.map((project) => (
        <a
          key={project.href}
          href={project.href}
          className="group bg-white border-[3px] border-black rounded-2xl overflow-hidden hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-shadow"
        >
          <img src={project.src} alt={project.alt} className="w-full h-28 md:h-32 object-cover object-center" />
          <p className="text-sm font-bold text-center py-2 px-2">{project.label}</p>
        </a>
      ))}
    </div>
  )
}

export function HeroProjectNav() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [motionOn, setMotionOn] = useState(false)
  const [visible, setVisible] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const [target, setTarget] = useState(0)
  const angleRef = useRef(0)
  const [angle, setAngle] = useState(0)
  const tiltRef = useRef({ x: 0, y: 0 })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const drag = useRef<{ startX: number; startTarget: number; moved: boolean } | null>(null)

  useEffect(() => {
    setMotionOn(shouldUseMotion())
    setTabHidden(document.hidden)
    const el = wrapRef.current
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 })
    if (el) io.observe(el)
    const onVis = () => setTabHidden(document.hidden)
    document.addEventListener("visibilitychange", onVis)
    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  const animating = motionOn && visible && !tabHidden

  useEffect(() => {
    if (!animating) {
      angleRef.current = target
      setAngle(target)
      return
    }
    let raf = 0
    let last = 0
    const tick = (now: number) => {
      if (now - last >= 1000 / 30) {
        last = now
        const cur = angleRef.current
        let diff = target - cur
        while (diff > N / 2) diff -= N
        while (diff < -N / 2) diff += N
        const next = Math.abs(diff) < 0.002 ? target : cur + diff * 0.18
        angleRef.current = next
        setAngle(next)
        const tx = tiltRef.current
        setTilt({ x: tx.x * 0.85, y: tx.y * 0.85 })
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [animating, target])

  const go = useCallback((i: number) => setTarget(wrapIndex(i)), [])

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!motionOn || drag.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    tiltRef.current = {
      x: ((e.clientY - rect.top) / rect.height - 0.5) * -6,
      y: ((e.clientX - rect.left) / rect.width - 0.5) * 8,
    }
  }

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!motionOn || e.button !== 0) return
    drag.current = { startX: e.clientX, startTarget: target, moved: false }
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current) return
    const dx = e.clientX - drag.current.startX
    if (Math.abs(dx) > 8) drag.current.moved = true
    const raw = drag.current.startTarget - dx / 220
    setTarget(raw)
  }

  const onPointerUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current) return
    const moved = drag.current.moved
    drag.current = null
    setTarget((t) => wrapIndex(Math.round(t)))
    if (moved) e.preventDefault()
  }

  const bgEnabled = animating

  return (
    <div ref={wrapRef} className="mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Explore projects</h2>
      <p className="text-[#393939] text-sm md:text-base font-medium text-center mb-5 max-w-xl mx-auto">
        {motionOn
          ? "Browse the cards, then open a project to read the full story."
          : "Open a project to read the full story in one place."}
      </p>

      {motionOn ? (
        <div className="relative mb-5">
          <div
            className="relative h-[250px] md:h-[320px] rounded-[24px] border-[3px] border-black bg-[#F5F5F5] overflow-hidden touch-pan-y"
            onPointerMove={(e) => {
              onPointerMove(e)
              onPointerDrag(e)
            }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onPointerLeave={() => {
              tiltRef.current = { x: 0, y: 0 }
            }}
          >
            <BackgroundCanvas enabled={bgEnabled} />
            <div
              className="absolute inset-0"
              style={{
                perspective: "900px",
                perspectiveOrigin: "50% 48%",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {PROJECTS.map((project, i) => {
                  const offset = shortestOffset(i, angle)
                  const x = offset * (typeof window !== "undefined" && window.innerWidth < 768 ? 148 : 200)
                  const z = -Math.abs(offset) * 90
                  const rotY = offset * -28
                  const scale = 1 - Math.min(Math.abs(offset), 2) * 0.12
                  const opacity = Math.abs(offset) > 2.2 ? 0 : 1 - Math.abs(offset) * 0.18
                  const focused = Math.abs(offset) < 0.45
                  return (
                    <a
                      key={project.href}
                      href={project.href}
                      onClick={(e) => {
                        if (drag.current?.moved) {
                          e.preventDefault()
                          return
                        }
                        if (!focused) {
                          e.preventDefault()
                          go(i)
                        }
                      }}
                      className="absolute left-1/2 top-[46%] w-[190px] md:w-[250px] -ml-[95px] md:-ml-[125px] -mt-[70px] md:-mt-[88px] bg-white border-[3px] border-black rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,0.12)]"
                      style={{
                        transform: `translate3d(${x}px, 0, ${z}px) rotateY(${rotY}deg) scale(${scale})`,
                        opacity,
                        zIndex: Math.round(20 - Math.abs(offset) * 4),
                        pointerEvents: opacity < 0.15 ? "none" : "auto",
                      }}
                      aria-current={focused ? "true" : undefined}
                    >
                      <img
                        src={project.src}
                        alt={project.alt}
                        className="w-full h-[132px] md:h-[168px] object-cover object-center pointer-events-none"
                        draggable={false}
                      />
                      <p className="text-sm md:text-base font-bold text-center py-2 px-2 bg-white">{project.label}</p>
                    </a>
                  )
                })}
              </div>
            </div>
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => go(Math.round(target) - 1)}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-white border-2 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => go(Math.round(target) + 1)}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-white border-2 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {PROJECTS.map((project, i) => (
              <button
                key={project.href}
                type="button"
                aria-label={`Show ${project.label}`}
                aria-current={wrapIndex(Math.round(target)) === i}
                onClick={() => go(i)}
                className={`h-2.5 rounded-full border-2 border-black transition-all ${
                  wrapIndex(Math.round(target)) === i ? "w-7 bg-[#FFC224]" : "w-2.5 bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="mb-5">
          <ProjectGrid />
        </div>
      )}

      <ProjectNavLinks />
    </div>
  )
}
