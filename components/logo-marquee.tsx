"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const content = {
  en: {
    items: [
      "AI Agents",
      "Web3",
      "Fintech",
      "Stablecoins",
      "Soroban",
      "Stellar",
      "Strategy",
      "Hackathons",
      "Product",
      "Ecosystem",
      "Payments",
      "Smart Contracts",
      "LATAM",
    ],
  },
  es: {
    items: [
      "Agentes IA",
      "Web3",
      "Fintech",
      "Stablecoins",
      "Soroban",
      "Stellar",
      "Estrategia",
      "Hackathons",
      "Producto",
      "Ecosistema",
      "Pagos",
      "Contratos inteligentes",
      "LATAM",
    ],
  },
} as const

export function LogoMarquee() {
  const { lang } = useLang()
  const t = content[lang]
  const items = t.items

  return (
    <div className="overflow-hidden">
      <motion.div 
        className="relative overflow-hidden bg-black py-6 -rotate-[3deg] mt-24 mb-16 min-w-[120vw] -mx-[10vw] left-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap">
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <span key={index} className="text-white text-xl md:text-2xl font-bold flex items-center gap-8">
              {item}
              <span className="text-[#FFC224]">·</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
