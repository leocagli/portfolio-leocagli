"use client"

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectNavLinks } from "@/components/project-nav-links"
import { shouldUseMotion } from "@/components/three-ux/env"

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

function wrapIndex(i: number) {
  return ((i % N) + N) % N
}

function shortestOffset(i: number, active: number) {
  let d = i - active
  while (d > N / 2) d -= N
  while (d < -N / 2) d += N
  return d
}

function ProjectGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {PROJECTS.map((project) => (
        <a
          key={project.href}
          href={project.href}
          className="group card-glass rounded-2xl overflow-hidden hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)] transition-shadow"
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

  return (
    <div ref={wrapRef} className="mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-white text-on-terrain">Explore projects</h2>
      <p className="text-slate-100 text-sm md:text-base font-medium text-center mb-5 max-w-xl mx-auto text-on-terrain">
        {motionOn
          ? "Browse the cards, then open a project to read the full story."
          : "Open a project to read the full story in one place."}
      </p>

      {motionOn ? (
        <div className="relative mb-5">
          <div
            className="relative h-[250px] md:h-[320px] rounded-[24px] border border-white/15 bg-white/5 overflow-hidden touch-pan-y"
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
                      className="absolute left-1/2 top-[46%] w-[190px] md:w-[250px] -ml-[95px] md:-ml-[125px] -mt-[70px] md:-mt-[88px] card-glass rounded-2xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)]"
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
                      <p className="text-sm md:text-base font-bold text-center py-2 px-2 bg-black/40 text-white">{project.label}</p>
                    </a>
                  )
                })}
              </div>
            </div>
            <button
              type="button"
              aria-label="Previous project"
              onClick={() => go(Math.round(target) - 1)}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-white/90 border border-white/30 rounded-full shadow-lg"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              aria-label="Next project"
              onClick={() => go(Math.round(target) + 1)}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-white/90 border border-white/30 rounded-full shadow-lg"
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
                className={`h-2.5 rounded-full border border-white/30 transition-all ${
                  wrapIndex(Math.round(target)) === i ? "w-7 bg-[#FFC224]" : "w-2.5 bg-white/70"
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
