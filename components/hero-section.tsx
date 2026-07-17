"use client"

import { Mail, FolderOpen, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { useLang } from "@/lib/i18n"

const content = {
  en: {
    headingPre: "I'm",
    headingRole: "AI & Web3 Product Strategist",
    headingConnector: ", an",
    headingFrom: "from",
    intro:
      "I build and prototype programmable coordination systems using AI agents, stablecoin payments, smart contracts and Web3 infrastructure for emerging market use cases.",
    getInTouch: "Get in touch",
    viewPortfolio: "View portfolio",
    prevPhoto: "Previous photo",
    nextPhoto: "Next photo",
    goToPhoto: "Go to photo",
  },
  es: {
    headingPre: "Soy",
    headingRole: "estratega de producto en IA y Web3",
    headingConnector: ",",
    headingFrom: "desde",
    intro:
      "Construyo y prototipo sistemas de coordinación programables con agentes de IA, pagos con stablecoins, contratos inteligentes e infraestructura Web3 para casos de uso de mercados emergentes.",
    getInTouch: "Contactame",
    viewPortfolio: "Ver portfolio",
    prevPhoto: "Foto anterior",
    nextPhoto: "Foto siguiente",
    goToPhoto: "Ir a la foto",
  },
} as const

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

export function HeroSection() {
  const [current, setCurrent] = useState(0)
  const { lang } = useLang()
  const t = content[lang]

  const goTo = useCallback((index: number) => {
    setCurrent((index + profilePhotos.length) % profilePhotos.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % profilePhotos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[38px] leading-[46px] md:text-[64px] font-bold md:leading-[76px]">
            {t.headingPre} <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Leonardo Cagliero</span>
            {t.headingConnector}{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">{t.headingRole}</span> {t.headingFrom}{" "}
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">LATAM</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            {t.intro}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button 
              asChild
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <a href="#contact">
                <Mail className="w-5 h-5" />
                {t.getInTouch}
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FolderOpen className="w-5 h-5" />
              {t.viewPortfolio}
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
            <div className="relative aspect-square bg-[#2F81F7] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
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
                aria-label={t.prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white border-2 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[calc(-50%-2px)] transition-transform"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
              <button
                type="button"
                onClick={() => goTo(current + 1)}
                aria-label={t.nextPhoto}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white border-2 border-black rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[calc(-50%-2px)] transition-transform"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-4">
              {profilePhotos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`${t.goToPhoto} ${index + 1}`}
                  aria-current={index === current}
                  className={`h-3 rounded-full border-2 border-black transition-all ${
                    index === current ? "w-8 bg-[#FFC224]" : "w-3 bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
