"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState, type ReactNode } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

import { ProjectNavLinks } from "@/components/project-nav-links"

const SCENE_LINKS = [
  { href: "#cosmos-pay", label: "Cosmos Pay" },
  { href: "#runa", label: "Runa" },
  { href: "#medflow", label: "MedFlow" },
  { href: "#argentina-dev", label: "Argentina.dev" },
] as const

export function shouldUse3DFallback() {
  if (typeof window === "undefined") return true
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true
  const nav = navigator as Navigator & {
    deviceMemory?: number
    connection?: { saveData?: boolean }
  }
  if (nav.connection?.saveData) return true
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) return true
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) return true
  return false
}

function goTo(href: string) {
  const id = href.replace("#", "")
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" })
    history.replaceState(null, "", href)
  } else {
    window.location.hash = href
  }
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

function Clickable({ href, children }: { href: string; children: ReactNode }) {
  return (
    <group
      onClick={(e) => {
        e.stopPropagation()
        goTo(href)
      }}
      onPointerOver={() => {
        document.body.style.cursor = "pointer"
      }}
      onPointerOut={() => {
        document.body.style.cursor = ""
      }}
    >
      {children}
      {/* Invisible hit sphere — easier taps, almost no cost */}
      <mesh visible={false}>
        <sphereGeometry args={[1.35, 8, 8]} />
        <meshBasicMaterial />
      </mesh>
    </group>
  )
}

function Planet() {
  return (
    <Clickable href="#cosmos-pay">
      <mesh>
        <sphereGeometry args={[0.72, 16, 12]} />
        <meshBasicMaterial color="#2F81F7" />
      </mesh>
      <mesh rotation={[Math.PI / 2.6, 0.2, 0]}>
        <torusGeometry args={[1.05, 0.06, 6, 24]} />
        <meshBasicMaterial color="#FFC224" />
      </mesh>
      <mesh position={[0.15, 1.05, 0.2]}>
        <sphereGeometry args={[0.16, 8, 8]} />
        <meshBasicMaterial color="#F5D0C5" />
      </mesh>
      <mesh position={[0.15, 0.78, 0.2]}>
        <cylinderGeometry args={[0.14, 0.18, 0.32, 8]} />
        <meshBasicMaterial color="#0B0B0B" />
      </mesh>
    </Clickable>
  )
}

function RunaHero() {
  const [object, setObject] = useState<THREE.Object3D | null>(null)

  useEffect(() => {
    let cancelled = false
    const loader = new GLTFLoader()
    loader.load(
      "/models/runa-heroe.min.glb",
      (gltf) => {
        if (cancelled) return
        gltf.scene.traverse((child) => {
          const mesh = child as THREE.Mesh
          if (!mesh.isMesh) return
          const prevs = (Array.isArray(mesh.material) ? mesh.material : [mesh.material]) as THREE.MeshStandardMaterial[]
          const map = prevs[0]?.map ?? null
          mesh.material = new THREE.MeshBasicMaterial({ map, color: map ? 0xffffff : 0x2f81f7 })
          mesh.castShadow = false
          mesh.receiveShadow = false
          for (const prev of prevs) {
            if (prev && prev !== mesh.material) prev.dispose()
          }
        })
        const box = new THREE.Box3().setFromObject(gltf.scene)
        const size = box.getSize(new THREE.Vector3())
        const scale = 1.7 / Math.max(size.x, size.y, size.z)
        gltf.scene.scale.setScalar(scale)
        const center = box.getCenter(new THREE.Vector3())
        gltf.scene.position.sub(center.multiplyScalar(scale))
        setObject(gltf.scene)
      },
      undefined,
      () => {
        if (!cancelled) setObject(null)
      },
    )
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <Clickable href="#runa">
      {object ? (
        <primitive object={object} />
      ) : (
        <mesh>
          <capsuleGeometry args={[0.35, 0.7, 4, 8]} />
          <meshBasicMaterial color="#2F81F7" />
        </mesh>
      )}
    </Clickable>
  )
}

function Cross() {
  return (
    <Clickable href="#medflow">
      <mesh>
        <boxGeometry args={[0.38, 1.35, 0.28]} />
        <meshBasicMaterial color="#E11D48" />
      </mesh>
      <mesh>
        <boxGeometry args={[1.15, 0.38, 0.28]} />
        <meshBasicMaterial color="#E11D48" />
      </mesh>
    </Clickable>
  )
}

function Train() {
  return (
    <Clickable href="#argentina-dev">
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[1.5, 0.55, 0.6]} />
        <meshBasicMaterial color="#10B981" />
      </mesh>
      <mesh position={[-0.55, 0.55, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.6]} />
        <meshBasicMaterial color="#0B0B0B" />
      </mesh>
      <mesh position={[0.45, 0.42, 0]}>
        <boxGeometry args={[0.55, 0.22, 0.62]} />
        <meshBasicMaterial color="#FFC224" />
      </mesh>
      {[-0.45, 0.45].map((x) =>
        [-0.32, 0.32].map((z) => (
          <mesh key={`${x}-${z}`} position={[x, -0.22, z]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.14, 0.14, 0.12, 8]} />
            <meshBasicMaterial color="#0B0B0B" />
          </mesh>
        )),
      )}
    </Clickable>
  )
}

// Use useFrame from r3f for the slow spin
function Spin({ children, x }: { children: ReactNode; x: number }) {
  const ref = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.elapsedTime * 0.35
  })
  return (
    <group ref={ref} position={[x, 0, 0]}>
      {children}
    </group>
  )
}

function Scene() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const gap = isMobile ? 1.7 : 2.35
  const xs = [-1.5, -0.5, 0.5, 1.5].map((i) => i * gap)

  return (
    <>
      <Spin x={xs[0]}>
        <Planet />
      </Spin>
      <Spin x={xs[1]}>
        <RunaHero />
      </Spin>
      <Spin x={xs[2]}>
        <Cross />
      </Spin>
      <Spin x={xs[3]}>
        <Train />
      </Spin>
    </>
  )
}

export function Hero3DNav() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [mode, setMode] = useState<"fallback" | "3d">("fallback")
  const [visible, setVisible] = useState(false)
  const [tabHidden, setTabHidden] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setMode(shouldUse3DFallback() ? "fallback" : "3d")
    setIsMobile(window.innerWidth < 768)
    setTabHidden(document.hidden)

    const el = wrapRef.current
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 })
    if (el) io.observe(el)
    const onVis = () => setTabHidden(document.hidden)
    document.addEventListener("visibilitychange", onVis)
    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", onVis)
      document.body.style.cursor = ""
    }
  }, [])

  const dpr = isMobile ? 1 : Math.min(1.5, typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1)

  return (
    <div ref={wrapRef} className="mt-12 md:mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Explore projects</h2>
      <p className="text-[#393939] text-sm md:text-base font-medium text-center mb-5 max-w-xl mx-auto">
        {mode === "3d"
          ? "Tap a 3D object or a name to open that project."
          : "Open a project to read the full story in one place."}
      </p>
      {mode === "3d" && (
        <div className="relative w-full h-[220px] md:h-[300px] mb-5 rounded-[24px] border-[3px] border-black bg-[#F5F5F5] overflow-hidden">
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
            camera={{ position: [0, 0.4, isMobile ? 7.2 : 8.2], fov: 40, near: 0.1, far: 30 }}
            onCreated={({ gl }) => {
              gl.shadowMap.enabled = false
            }}
            aria-hidden="true"
          >
            <DemandLoop enabled={visible && !tabHidden} fps={30} />
            <Scene />
          </Canvas>
          <ul className="absolute bottom-3 left-0 right-0 flex justify-center gap-4 md:gap-10 pointer-events-none px-2">
            {SCENE_LINKS.map((link) => (
              <li key={link.href} className="text-[11px] md:text-xs font-bold bg-white/90 border border-black rounded-full px-2 py-0.5">
                {link.label}
              </li>
            ))}
          </ul>
        </div>
      )}
      <ProjectNavLinks />
    </div>
  )
}
