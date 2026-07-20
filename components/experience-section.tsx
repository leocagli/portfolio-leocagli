"use client"

import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const experienceStyles: { company: string; color: string; logo?: string }[] = [
  { company: "Bitcoin.defi", color: "bg-[#2F81F7]", logo: "/logos/bitcoin-defi.jpeg" },
  { company: "Cosmos Pay", color: "bg-[#FF6B7A]", logo: "/logos/cosmos-icon.jpeg" },
  { company: "El Depo", color: "bg-[#10B981]" },
  { company: "Food Packaging", color: "bg-[#FFC224]" },
  { company: "Congress Rental", color: "bg-[#6366F1]" },
  { company: "Nature & Fitness", color: "bg-[#EC4899]" },
]

const content = {
  en: {
    headingPre: "Take a look at my",
    headingHighlight: "experience",
    subtitle: "A hybrid profile spanning finance, operations, crypto, AI and Web3 ecosystem building across 14+ years of professional experience.",
    resumeButton: "See full resume",
    experiences: [
      {
        period: "2017 - Present",
        title: "Founder / AI & Web3 Product Strategist",
        description: "Public AI/Web3 experimentation lab and personal brand focused on fintech infrastructure, programmable trust systems, ecosystem content and live prototypes.",
      },
      {
        period: "2025 - Present",
        title: "Founder & CEO",
        description: "Non-custodial USDC payment gateway on Stellar for LATAM: fiat on/off-ramps in six currencies, integrated KYC/KYB, SEP-7 payment links, QR and alias-based payments, plus a developer SDK. Winner of the Stellar Pulso Instaward and Codigo Alebrije accelerator grants.",
      },
      {
        period: "2026 - Present",
        title: "Founder / Retail Multicategory Store",
        description: "Multicategory retail business focused on technology, gadgets, bazaar products, tools and office supplies.",
      },
      {
        period: "2023 - 2024",
        title: "Logistics Analyst / Supervisor",
        description: "Distribution route control, logistics reporting, KPI analysis and process optimization.",
      },
      {
        period: "2022 - 2023",
        title: "Financial Analyst / Payments",
        description: "Payment orders, tax withholdings, VAT, banking reconciliations, ERP systems and external audits.",
      },
      {
        period: "2017 - Present",
        title: "Retail Business Owner",
        description: "Retail operations, supplier coordination, customer-facing commerce and business administration.",
      },
    ],
  },
  es: {
    headingPre: "Mirá mi",
    headingHighlight: "experiencia",
    subtitle: "Un perfil híbrido que abarca finanzas, operaciones, cripto, IA y construcción de ecosistemas Web3 a lo largo de más de 14 años de experiencia profesional.",
    resumeButton: "Ver CV completo",
    experiences: [
      {
        period: "2017 - Actualidad",
        title: "Fundador / Estratega de producto en IA y Web3",
        description: "Laboratorio público de experimentación en IA/Web3 y marca personal enfocada en infraestructura fintech, sistemas de confianza programables, contenido de ecosistema y prototipos en vivo.",
      },
      {
        period: "2025 - Actualidad",
        title: "Fundador & CEO",
        description: "Gateway de pagos USDC no custodial sobre Stellar para LATAM: rampas fiat en seis monedas, KYC/KYB integrado, links de pago SEP-7, QR y pagos por alias, más un SDK para desarrolladores. Ganador del Instaward de Stellar Pulso y de los grants del acelerador Código Alebrije.",
      },
      {
        period: "2026 - Actualidad",
        title: "Fundador / Tienda minorista multirrubro",
        description: "Negocio minorista multirrubro enfocado en tecnología, gadgets, artículos de bazar, herramientas e insumos de oficina.",
      },
      {
        period: "2023 - 2024",
        title: "Analista / Supervisor de logística",
        description: "Control de rutas de distribución, reportes logísticos, análisis de KPIs y optimización de procesos.",
      },
      {
        period: "2022 - 2023",
        title: "Analista financiero / Pagos",
        description: "Órdenes de pago, retenciones impositivas, IVA, conciliaciones bancarias, sistemas ERP y auditorías externas.",
      },
      {
        period: "2017 - Actualidad",
        title: "Dueño de comercio minorista",
        description: "Operaciones de retail, coordinación con proveedores, atención al cliente y administración del negocio.",
      },
    ],
  },
} as const

export function ExperienceSection() {
  const { lang } = useLang()
  const t = content[lang]
  const experiences = t.experiences.map((exp, index) => ({
    ...exp,
    ...experienceStyles[index],
  }))

  return (
    <section id="experience" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              {t.headingPre} <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">{t.headingHighlight}</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
              {t.subtitle}
            </p>
            <Button className="bg-white text-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]">
              <FileText className="w-5 h-5" />
              {t.resumeButton}
            </Button>
          </motion.div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  {exp.logo ? (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className={`${exp.color} w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{exp.company.slice(0, 2).toUpperCase()}</span>
                    </div>
                  )}
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[24px] leading-tight md:leading-[32px] font-bold text-[#0B0B0B] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#2F81F7] font-bold mb-2">{exp.company}</p>
                  <p className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[28px]">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
