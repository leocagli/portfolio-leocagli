"use client"

import {
  useEffect,
  useState,
  type CSSProperties,
  type ElementType,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react"
import { shouldUseMotion } from "./env"

// A thin CSS-3D wrapper that adds a gentle perspective tilt on pointer hover.
// It uses no WebGL. When the device/user should not get motion it renders a
// plain pass-through wrapper (no handlers, no transform), so the existing flat
// card is untouched. The card markup/copy passed as children is never changed.
export function TiltCard({
  as: Tag = "div",
  className = "",
  children,
  max = 6,
}: {
  as?: ElementType
  className?: string
  children: ReactNode
  max?: number
}) {
  const [enabled, setEnabled] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setEnabled(shouldUseMotion())
  }, [])

  // Server + first client render share this branch (enabled === false), so no
  // hydration mismatch. The inner card still fills the cell via h-full.
  if (!enabled) {
    return <Tag className={className}>{children}</Tag>
  }

  const onMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: py * -max, y: px * max })
  }

  const reset = () => setTilt({ x: 0, y: 0 })

  // At rest we drop the transform entirely (transform: none) so cards don't each
  // hold a permanent compositing layer; the layer only exists mid-tilt.
  const atRest = tilt.x === 0 && tilt.y === 0
  const outerStyle: CSSProperties = { perspective: "1000px" }
  const innerStyle: CSSProperties = {
    height: "100%",
    transform: atRest ? undefined : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    transition: "transform 180ms ease-out",
  }

  return (
    <Tag className={className} style={outerStyle} onPointerMove={onMove} onPointerLeave={reset}>
      <div style={innerStyle}>{children}</div>
    </Tag>
  )
}
