"use client"

// Lives in the main page graph (imported by page.tsx) but pulls three ONLY
// through next/dynamic with ssr:false, so three never enters the main bundle.
// On reduced-motion / Save-Data / low-end devices it renders nothing.

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { shouldUseMotion } from "./env"

const SiteBackground = dynamic(() => import("./site-background"), { ssr: false })

export function SiteBackgroundMount() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(shouldUseMotion())
  }, [])

  if (!enabled) return null
  return <SiteBackground />
}
