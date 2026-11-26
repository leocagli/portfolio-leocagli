// Shared, three-free helpers for the 2.5D UX layer.
// This module must NEVER import three / @react-three/fiber so it can live in the
// main page graph. The WebGL code lives in site-background.tsx (dynamic-only).

// Returns false for prefers-reduced-motion, Save-Data, and low-end devices
// (deviceMemory <= 2 or hardwareConcurrency <= 2). Those users get the flat,
// non-animated fallback: no canvas, no tilt, no spinning carousel.
export function shouldUseMotion() {
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

// devicePixelRatio capped at 1.5 on desktop and 1 on mobile.
export function backgroundDpr(isMobile: boolean) {
  if (isMobile) return 1
  if (typeof window === "undefined") return 1
  return Math.min(1.5, window.devicePixelRatio || 1)
}
