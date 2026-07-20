"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const projectStyles: { title: string; bgColor: string; tagColor: string; logo?: string; link?: string }[] = [
  { title: "Cosmos Pay", bgColor: "bg-[#2F81F7]", tagColor: "bg-[#FF6B7A]", logo: "/logos/cosmos-icon.jpeg", link: "https://cosmospay.lat" },
  { title: "Open Stellar", bgColor: "bg-[#6366F1]", tagColor: "bg-[#FFC224]", logo: "/logos/open-stellar.jpeg", link: "https://v0-open-stellar.vercel.app" },
  { title: "Shield Stellar", bgColor: "bg-[#FF6B7A]", tagColor: "bg-[#2F81F7]", link: "https://shield-stellar.onrender.com/" },
  { title: "Nomos", bgColor: "bg-[#10B981]", tagColor: "bg-[#FF6B7A]", logo: "/logos/nomos.jpeg", link: "https://nomos-ten.vercel.app" },
  { title: "Tralala Contracts", bgColor: "bg-[#FFC224]", tagColor: "bg-[#0B0B0B]", logo: "/logos/tralala-contracts.jpeg", link: "https://tralala-contracts-gray.vercel.app" },
  { title: "Bridjet", bgColor: "bg-[#0B0B0B]", tagColor: "bg-[#2F81F7]", logo: "/logos/bridjet.jpeg", link: "https://github.com/Emanuel250YT/bridjet-dev-preview" },
  { title: "Open Vinito", bgColor: "bg-[#EC4899]", tagColor: "bg-[#FFC224]", logo: "/logos/open-vinito.jpeg", link: "https://v0-open-vinito.vercel.app/" },
  { title: "PlatanPay", bgColor: "bg-[#F59E0B]", tagColor: "bg-[#2F81F7]", logo: "/logos/platanpay-mascot.jpeg", link: "https://github.com/leocagli/platanpay-integrated-demo" },
]

const content = {
  en: {
    headingPre: "Take a look at my",
    headingHighlight: "project portfolio",
    caseStudy: "View case study",
    projects: [
      {
        category: "Fintech Infrastructure",
        description: "Non-custodial USDC wallet and payment gateway on Stellar, with fiat on/off-ramps in six currencies, built-in KYC/KYB and escrow rails for LATAM commerce. Operating under Argentina's virtual asset regulatory framework (Ley 27.739).",
        tags: ["Stellar", "USDC", "Escrow", "Fintech", "LATAM"],
      },
      {
        category: "Agentic AI Payments",
        description: "Visual coordination layer where AI agents interact through programmable micropayments, escrow workflows and wallet-based actions.",
        tags: ["AI Agents", "x402", "Stellar", "Soroban", "Micropayments"],
      },
      {
        category: "AI Payment Security",
        description: "Human approval firewall for AI-driven financial actions, autonomous payment governance and programmable transaction safety.",
        tags: ["Human-in-the-loop", "AI Safety", "Payments", "Governance"],
      },
      {
        category: "AI Agent Marketplace",
        description: "Marketplace concept for coordinating specialized AI agent teams using local and distributed models to reduce costs and improve workflow execution.",
        tags: ["AI Agents", "Marketplace", "LLMs", "Routing"],
      },
      {
        category: "Developer Tooling",
        description: "Visual smart-contract abstraction layer inspired by block-based programming to simplify blockchain onboarding and contract creation.",
        tags: ["Soroban", "Smart Contracts", "Education", "DevTooling"],
      },
      {
        category: "Cross-Chain Bridge",
        description: "Hackathon project for simplified cross-chain asset transfers with streamlined UX for blockchain interoperability.",
        tags: ["Bridge", "Cross-Chain", "DeFi", "UX"],
      },
      {
        category: "Blockchain Traceability",
        description: "Wine traceability and geolocation verification platform for blockchain-based supply-chain transparency.",
        tags: ["Hedera", "Traceability", "Wine", "Real-World Assets"],
      },
      {
        category: "Agentic Commerce",
        description: "AI payment orchestration prototype where users delegate shopping tasks to agents with approval flows and programmable commerce logic.",
        tags: ["AI Commerce", "Payments", "Scraping", "Approval Flows"],
      },
    ],
  },
  es: {
    headingPre: "Mirá mi",
    headingHighlight: "portfolio de proyectos",
    caseStudy: "Ver caso de estudio",
    projects: [
      {
        category: "Infraestructura fintech",
        description: "Wallet USDC no custodial y gateway de pagos sobre Stellar, con rampas fiat en seis monedas, KYC/KYB integrado y rieles de escrow para el comercio en LATAM. Opera bajo el marco regulatorio argentino de activos virtuales (Ley 27.739).",
        tags: ["Stellar", "USDC", "Escrow", "Fintech", "LATAM"],
      },
      {
        category: "Pagos agénticos con IA",
        description: "Capa de coordinación visual donde agentes de IA interactúan mediante micropagos programables, flujos de escrow y acciones basadas en wallets.",
        tags: ["Agentes IA", "x402", "Stellar", "Soroban", "Micropagos"],
      },
      {
        category: "Seguridad en pagos con IA",
        description: "Firewall de aprobación humana para acciones financieras impulsadas por IA, gobernanza de pagos autónomos y seguridad transaccional programable.",
        tags: ["Human-in-the-loop", "Seguridad IA", "Pagos", "Gobernanza"],
      },
      {
        category: "Marketplace de agentes IA",
        description: "Concepto de marketplace para coordinar equipos de agentes de IA especializados usando modelos locales y distribuidos, reduciendo costos y mejorando la ejecución de flujos de trabajo.",
        tags: ["Agentes IA", "Marketplace", "LLMs", "Ruteo"],
      },
      {
        category: "Herramientas para desarrolladores",
        description: "Capa visual de abstracción de contratos inteligentes inspirada en la programación por bloques para simplificar el onboarding blockchain y la creación de contratos.",
        tags: ["Soroban", "Contratos inteligentes", "Educación", "DevTooling"],
      },
      {
        category: "Puente cross-chain",
        description: "Proyecto de hackathon para transferencias de activos entre cadenas simplificadas, con una UX ágil para la interoperabilidad blockchain.",
        tags: ["Bridge", "Cross-Chain", "DeFi", "UX"],
      },
      {
        category: "Trazabilidad blockchain",
        description: "Plataforma de trazabilidad de vinos y verificación por geolocalización para transparencia de la cadena de suministro basada en blockchain.",
        tags: ["Hedera", "Trazabilidad", "Vino", "Activos del mundo real"],
      },
      {
        category: "Comercio agéntico",
        description: "Prototipo de orquestación de pagos con IA donde los usuarios delegan compras a agentes con flujos de aprobación y lógica de comercio programable.",
        tags: ["Comercio IA", "Pagos", "Scraping", "Flujos de aprobación"],
      },
    ],
  },
} as const

export function PortfolioSection() {
  const { lang } = useLang()
  const t = content[lang]
  const projects = t.projects.map((project, index) => ({
    ...project,
    ...projectStyles[index],
  }))

  return (
    <section id="portfolio" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.headingPre} <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">{t.headingHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              id={project.title === "Cosmos Pay" ? "cosmos-pay" : undefined}
              className="group bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-y-[-4px] scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={`${project.bgColor} p-6 md:p-8 relative`}>
                <span className={`${project.tagColor} text-white text-xs font-semibold px-4 py-1.5 rounded-full`}>
                  {project.category}
                </span>
                {project.logo && (
                  <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl border-3 border-white shadow-lg overflow-hidden bg-white">
                    <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-[28px] font-bold mb-3 leading-tight text-[#0B0B0B]">
                  {project.title}
                </h3>

                <p className="text-base md:text-[16px] text-[#393939] mb-6 leading-relaxed font-medium">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-gray-100 text-[#393939] text-xs font-semibold px-3 py-1.5 rounded-full border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link ?? "#"}
                  target={project.link ? "_blank" : undefined}
                  rel={project.link ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base group-hover:text-[#2F81F7]"
                >
                  {t.caseStudy}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
