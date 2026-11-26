"use client"

import { ArrowRight, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import dynamic from "next/dynamic"
import { ProjectNavLinks } from "@/components/project-nav-links"

const HeroProjectNav = dynamic(
  () => import("@/components/hero-project-nav").then((m) => m.HeroProjectNav),
  {
    ssr: false,
    loading: () => (
      <div className="mt-12 md:mt-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">Explore projects</h2>
        <p className="text-slate-100 text-sm md:text-base font-medium text-center mb-5 text-on-terrain">
          Open a project to read the full story in one place.
        </p>
        <ProjectNavLinks />
      </div>
    ),
  },
)

const profilePhotos = [
  {
    src: "/images/profile.jpeg",
    alt: "Leonardo Cagliero speaking at a blockchain conference",
  },
  {
    src: "/images/profile-puna-tech.jpeg",
    alt: "Leonardo Cagliero speaking as staff at PunaTech 2026 in Salta, Argentina",
  },
]

const statusItems = [
  "Open to work",
  "Remote",
  "UTC-3",
  "Spanish native",
  "English professional",
  "Portuguese conversational",
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index: number) => {
    setCurrent((index + profilePhotos.length) % profilePhotos.length)
  }, [])

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % profilePhotos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="top" className="container mx-auto px-4 py-10 md:py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          className="relative space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[40px] leading-[46px] md:text-[68px] font-bold md:leading-[74px] text-white tracking-tight text-on-terrain">
            I build <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">products</span>, analyze{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">data</span> and automate work with{" "}
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">AI</span>.
          </h1>

          <p className="text-slate-100 text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl text-on-terrain">
            I&apos;m Leonardo Cagliero, from Salta, Argentina. I founded Cosmos Pay and Argentina.dev. About 5 years of
            work experience in finance, payments and logistics. Open to junior Product, Data Analyst and AI Automation
            roles. Remote, LatAm or global.
          </p>

          <div className="flex flex-wrap gap-2">
            {statusItems.map((item, index) => (
              <span
                key={item}
                className={`text-sm font-semibold px-3 py-1.5 rounded-full border border-white/20 ${
                  index === 0 ? "bg-[#10B981] text-white" : "bg-white/10 text-white"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 pt-4">
            <Button
              asChild
              className="bg-white text-[#0a1020] hover:bg-[#FFC224] rounded-full py-5 px-8 md:py-[22px] md:px-[48px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto"
            >
              <a href="#latest">
                <ArrowRight className="w-5 h-5" />
                See latest work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-transparent border border-white/40 text-white hover:bg-white/10 rounded-full py-5 px-8 md:py-[22px] md:px-[48px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto"
            >
              <a href="#experience">
                <Briefcase className="w-5 h-5" />
                View experience
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            <div className="relative aspect-square bg-[#2F81F7] border border-white/20 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={profilePhotos[current].src}
                  alt={profilePhotos[current].alt}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              <button
                type="button"
                onClick={() => goTo(current - 1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/90 border border-white/30 rounded-full shadow-lg hover:translate-y-[calc(-50%-2px)] transition-transform"
              >
                <ChevronLeft className="w-5 h-5 text-[#0a1020]" />
              </button>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/90 border border-white/30 rounded-full shadow-lg hover:translate-y-[calc(-50%-2px)] transition-transform"
              >
                <ChevronRight className="w-5 h-5 text-[#0a1020]" />
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-4">
              {profilePhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Go to photo ${index + 1}`}
                  aria-current={index === current}
                  className={`h-3 rounded-full border border-white/30 transition-all ${
                    index === current ? "w-8 bg-[#FFC224]" : "w-3 bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <HeroProjectNav />
      </div>
    </section>
  )
}
