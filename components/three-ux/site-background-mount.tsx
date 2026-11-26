"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { shouldUseMotion } from "./env"

const SiteBackground = dynamic(() => import("./site-background"), { ssr: false })

export function SiteBackgroundMount() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    setEnabled(shouldUseMotion())
  }, [])

  return (
    <>
      <div className="site-bg-fallback" aria-hidden="true" />
      {enabled ? <SiteBackground /> : null}
      <div className="site-readability-overlay" aria-hidden="true" />
    </>
  )
}
