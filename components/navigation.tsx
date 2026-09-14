"use client"

import { Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useLang, type Lang } from "@/lib/i18n"

const content = {
  en: {
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    experience: "Experience",
  },
  es: {
    about: "Sobre mí",
    services: "Servicios",
    portfolio: "Portfolio",
    experience: "Experiencia",
  },
} as const

function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <div className="flex items-center border-2 border-black rounded-lg overflow-hidden flex-shrink-0">
      {(["en", "es"] as Lang[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          aria-label={code === "en" ? "Switch to English" : "Cambiar a español"}
          className={`px-2.5 py-1.5 text-sm font-bold uppercase transition-colors ${
            lang === code ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang } = useLang()
  const t = content[lang]

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">B.D</span>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            {t.about}
          </a>
          <a href="#services" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            {t.services}
          </a>
          <a href="#portfolio" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            {t.portfolio}
          </a>
          <a href="#experience" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            {t.experience}
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LangToggle />
          </div>
          <Button
            className="md:hidden bg-transparent hover:bg-gray-100 text-black p-2 h-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          <Button
            asChild
            className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0"
          >
            <a href="#contact">
              <Mail className="w-6 h-6" strokeWidth={2.5} />
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-4 border-black rounded-xl p-4 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4">
            <a href="#about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>
              {t.about}
            </a>
            <a href="#services" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>
              {t.services}
            </a>
            <a href="#portfolio" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>
              {t.portfolio}
            </a>
            <a href="#experience" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>
              {t.experience}
            </a>
            <div className="pt-2 border-t-2 border-black">
              <LangToggle />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
