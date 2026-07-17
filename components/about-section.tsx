"use client"

import { motion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const statColors = ["bg-[#6366F1]", "bg-[#FF6B7A]", "bg-[#FFC224]", "bg-[#2F81F7]", "bg-[#10B981]"]

const content = {
  en: {
    headingPre: "Who's behind all this",
    headingHighlight: "great work?",
    bio: "Leonardo Cagliero is an Argentina-based AI/Web3 product strategist, builder and ecosystem contributor with a background in business administration, capital markets, operations, crypto and fintech. Through Bitcoin.defi, he explores programmable payments, AI coordination systems, smart contracts and emerging market infrastructure through public R&D, hackathons, talks and startup experiments.",
    stats: [
      "14+ years across finance, operations and crypto",
      "2017 Bitcoin.defi public brand",
      "Multiple hackathon awards and ecosystem grants",
      "Speaker at Web3 and crypto education events",
      "Builder across Stellar, Ethereum, Hedera and AI ecosystems",
    ],
  },
  es: {
    headingPre: "¿Quién está detrás de todo este",
    headingHighlight: "gran trabajo?",
    bio: "Leonardo Cagliero es un estratega de producto de IA/Web3, builder y contribuidor de ecosistemas radicado en Argentina, con formación en administración de empresas, mercado de capitales, operaciones, cripto y fintech. A través de Bitcoin.defi explora pagos programables, sistemas de coordinación con IA, contratos inteligentes e infraestructura para mercados emergentes mediante I+D pública, hackathons, charlas y experimentos de startups.",
    stats: [
      "Más de 14 años entre finanzas, operaciones y cripto",
      "Marca pública Bitcoin.defi desde 2017",
      "Múltiples premios en hackathons y grants de ecosistemas",
      "Orador en eventos de Web3 y educación cripto",
      "Builder en los ecosistemas Stellar, Ethereum, Hedera e IA",
    ],
  },
} as const

export function AboutSection() {
  const { lang } = useLang()
  const t = content[lang]
  const stats = t.stats.map((label, index) => ({ label, color: statColors[index] }))

  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.headingPre} <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">{t.headingHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div 
            className="bg-[#FF6B7A] border-4 border-black rounded-[32px] p-8 md:p-10 shadow-[-8px_8px_0px_0px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white text-lg md:text-xl leading-relaxed font-medium">
              {t.bio}
            </p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="flex gap-4 items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div className={`w-5 h-5 ${stat.color} border-2 border-black rounded-[5px] flex-shrink-0 mt-1`}></div>
                <p className="text-[#0B0B0B] text-lg md:text-xl font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
