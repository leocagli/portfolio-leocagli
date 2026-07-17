"use client"

import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const content = {
  en: {
    newsletterTitle: "Subscribe to my newsletter",
    newsletterText: "Get updates on AI, Web3, and fintech infrastructure",
    emailPlaceholder: "Enter your email address",
    subscribe: "Subscribe",
    brandText: "AI/Web3 product strategy, fintech infrastructure and programmable coordination systems from LATAM.",
    navTitle: "Navigation",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navExperience: "Experience",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    credit: "Built with systems thinking from Argentina - Powered by V0",
  },
  es: {
    newsletterTitle: "Suscribite a mi newsletter",
    newsletterText: "Recibí novedades sobre IA, Web3 e infraestructura fintech",
    emailPlaceholder: "Ingresá tu email",
    subscribe: "Suscribirme",
    brandText: "Estrategia de producto en IA/Web3, infraestructura fintech y sistemas de coordinación programables desde LATAM.",
    navTitle: "Navegación",
    navHome: "Inicio",
    navAbout: "Sobre mí",
    navServices: "Servicios",
    navPortfolio: "Portfolio",
    navExperience: "Experiencia",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto",
    credit: "Construido con pensamiento sistémico desde Argentina - Impulsado por V0",
  },
} as const

export function Footer() {
  const { lang } = useLang()
  const t = content[lang]
  return (
    <footer id="contact" className="bg-black text-white py-12 md:py-16 border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter Section */}
          <motion.div 
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full bg-white border-4 border-black rounded-3xl py-6 px-6 md:py-8 md:px-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-black">{t.newsletterTitle}</h3>
                <p className="text-[#393939] text-sm mt-1">{t.newsletterText}</p>
              </div>

              <div className="relative w-full md:w-auto md:min-w-[400px] lg:min-w-[480px]">
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="border-4 border-black rounded-xl px-4 md:px-6 h-14 md:h-16 pr-32 md:pr-44 text-base md:text-lg placeholder:text-gray-500"
                />
                <Button className="absolute right-2 top-2 bottom-2 bg-black text-white hover:bg-black/90 rounded-[10px] px-6 md:px-10 text-sm md:text-base font-semibold whitespace-nowrap h-auto">
                  {t.subscribe}
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">B.D</span>
                </div>
                <span className="text-lg md:text-xl font-bold">Bitcoin.defi</span>
              </div>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {t.brandText}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/leocagli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/leocagli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0B0B0B] border-2 border-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/leocagli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0B0B0B] border-2 border-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="X/Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:leocagli@gmail.com"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t.navTitle}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    {t.navHome}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    {t.navAbout}
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    {t.navServices}
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    {t.navPortfolio}
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white transition-colors">
                    {t.navExperience}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t.projectsTitle}</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Cosmos Pay
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Open Stellar
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Shield Stellar
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    Tralala Contracts
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="hover:text-white transition-colors">
                    PlatanPay
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">{t.contactTitle}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:leocagli@gmail.com" className="hover:text-white transition-colors">
                    leocagli@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a href="https://linkedin.com/in/leocagli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    /in/leocagli
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a href="https://github.com/leocagli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    @leocagli
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Twitter className="w-4 h-4" />
                  <a href="https://x.com/leocagli" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    @leocagli
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>{t.credit}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
