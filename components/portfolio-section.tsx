"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useLang } from "@/lib/i18n"

const projectStyles: { title: string; bgColor: string; tagColor: string; logo?: string; link?: string }[] = [
  { title: "Cosmos Pay", bgColor: "bg-[#2F81F7]", tagColor: "bg-[#FF6B7A]", logo: "/logos/cosmos-icon.jpeg", link: "https://cosmospay.lat" },
  { title: "Passpay", bgColor: "bg-[#22C55E]", tagColor: "bg-[#0B0B0B]", link: "https://passpay-one.vercel.app" },
  { title: "Sereno", bgColor: "bg-[#0EA5E9]", tagColor: "bg-[#0B0B0B]", link: "https://sereno-kappa-eight.vercel.app" },
  { title: "Open Stellar Passport", bgColor: "bg-[#8B5CF6]", tagColor: "bg-[#FFC224]", link: "https://bitcoindefi.github.io/open-stellar-passport/" },
  { title: "Open Stellar", bgColor: "bg-[#6366F1]", tagColor: "bg-[#FFC224]", logo: "/logos/open-stellar.jpeg", link: "https://v0-open-stellar.vercel.app" },
  { title: "Nomos", bgColor: "bg-[#10B981]", tagColor: "bg-[#FF6B7A]", logo: "/logos/nomos.jpeg", link: "https://nomos-ten.vercel.app" },
  { title: "Nomos Data", bgColor: "bg-[#14B8A6]", tagColor: "bg-[#FF6B7A]", link: "https://nomosdata.vercel.app" },
  { title: "Shield Stellar", bgColor: "bg-[#FF6B7A]", tagColor: "bg-[#2F81F7]", link: "https://shield-stellar.onrender.com/" },
  { title: "Tralala Contracts", bgColor: "bg-[#FFC224]", tagColor: "bg-[#0B0B0B]", logo: "/logos/tralala-contracts.jpeg", link: "https://tralala-contracts-gray.vercel.app" },
  { title: "PlatanPay", bgColor: "bg-[#F59E0B]", tagColor: "bg-[#2F81F7]", logo: "/logos/platanpay-mascot.jpeg", link: "https://github.com/leocagli/platanpay-integrated-demo" },
  { title: "En Masa", bgColor: "bg-[#F97316]", tagColor: "bg-[#2F81F7]", link: "https://github.com/leocagli/en-masa-hackathon" },
  { title: "Bridjet", bgColor: "bg-[#0B0B0B]", tagColor: "bg-[#2F81F7]", logo: "/logos/bridjet.jpeg", link: "https://github.com/Emanuel250YT/bridjet-dev-preview" },
  { title: "Open Vinito", bgColor: "bg-[#EC4899]", tagColor: "bg-[#FFC224]", logo: "/logos/open-vinito.jpeg", link: "https://v0-open-vinito.vercel.app/" },
  { title: "Human vs Bots", bgColor: "bg-[#EF4444]", tagColor: "bg-[#FFC224]", link: "https://github.com/Bitcoindefi/Human-vs-bots" },
  { title: "Agente Smith", bgColor: "bg-[#0B3D2E]", tagColor: "bg-[#22C55E]", link: "https://github.com/Bitcoindefi/agente-smith" },
  { title: "Piggy City", bgColor: "bg-[#EC4899]", tagColor: "bg-[#FFC224]", link: "https://v0-piggy-city.vercel.app" },
  { title: "Predicción Mundial 2026", bgColor: "bg-[#3B82F6]", tagColor: "bg-[#10B981]", link: "https://github.com/Bitcoindefi/prediccion-mundial-2026-ml" },
]

const content = {
  en: {
    headingPre: "Take a look at my",
    headingHighlight: "project portfolio",
    caseStudy: "View case study",
    seeMore: "See all projects",
    seeLess: "Show less",
    projects: [
      {
        category: "Fintech Infrastructure",
        description: "Non-custodial USDC wallet and payment gateway on Stellar, with fiat on/off-ramps in six currencies, built-in KYC/KYB and escrow rails for LATAM commerce. Operating under Argentina's virtual asset regulatory framework (Ley 27.739).",
        tags: ["Stellar", "USDC", "Escrow", "Fintech", "LATAM"],
      },
      {
        category: "Payment Orchestration",
        description: "Charge in pesos, save in dollars: connects Argentina's Transferencias 3.0 interoperable QR rail with Stellar, settling merchant payments on-chain in USDC within seconds.",
        tags: ["Stellar", "Transferencias 3.0", "USDC", "QR", "Argentina"],
      },
      {
        category: "Private Payments",
        description: "Private remittance rails with accountable edges on Midnight Network: shielded transfers with selective disclosure for compliance-aware cross-border payments.",
        tags: ["Midnight", "ZK", "Remittances", "Privacy", "Compliance"],
      },
      {
        category: "ZK Identity",
        description: "ZK-gated AI-agent payments on Stellar: a zero-knowledge passport that proves agent authorization without revealing identity, enabling trusted autonomous transactions.",
        tags: ["ZK", "AI Agents", "Stellar", "Identity", "Payments"],
      },
      {
        category: "Agentic AI Payments",
        description: "Visual coordination layer where AI agents interact through programmable micropayments, escrow workflows and wallet-based actions.",
        tags: ["AI Agents", "x402", "Stellar", "Soroban", "Micropayments"],
      },
      {
        category: "AI Agent Marketplace",
        description: "Marketplace concept for coordinating specialized AI agent teams using local and distributed models to reduce costs and improve workflow execution.",
        tags: ["AI Agents", "Marketplace", "LLMs", "Routing"],
      },
      {
        category: "AI Infrastructure",
        description: "Queryable execution receipts for AI agent teams on Arkiv: verifiable records of what agents did, when and why, for auditable multi-agent workflows.",
        tags: ["Arkiv", "AI Agents", "Auditability", "Data"],
      },
      {
        category: "AI Payment Security",
        description: "Human approval firewall for AI-driven financial actions, autonomous payment governance and programmable transaction safety.",
        tags: ["Human-in-the-loop", "AI Safety", "Payments", "Governance"],
      },
      {
        category: "Developer Tooling",
        description: "Visual smart-contract abstraction layer inspired by block-based programming to simplify blockchain onboarding and contract creation.",
        tags: ["Soroban", "Smart Contracts", "Education", "DevTooling"],
      },
      {
        category: "Agentic Commerce",
        description: "AI payment orchestration prototype where users delegate shopping tasks to agents with approval flows and programmable commerce logic.",
        tags: ["AI Commerce", "Payments", "Scraping", "Approval Flows"],
      },
      {
        category: "Agentic B2B Commerce",
        description: "B2B food-service procurement MVP with agentic AI: purchasing mandates that let AI agents source and coordinate restaurant supply orders.",
        tags: ["AI Agents", "B2B", "Procurement", "Commerce"],
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
        category: "Web3 Gaming",
        description: "Turn-based hex-map strategy game on Stellar with ZK, where humans battle LLM opponents — or watch LLM vs LLM simulations — with visible difficulty profiles.",
        tags: ["Godot", "Stellar", "ZK", "LLMs", "Gaming"],
      },
      {
        category: "Legal AI",
        description: "Generalist AI lawyer for Argentine law built on Claude Code, covering 11 practice areas with live access to 899K+ SAIJ legal documents across multiple jurisdictions.",
        tags: ["Claude Code", "Legal Tech", "Argentina", "AI Agents"],
      },
      {
        category: "Consumer Fintech",
        description: "Consumer wallet concept exploring savings and everyday payments UX for LATAM users, prototyped and deployed as an interactive web experience.",
        tags: ["Wallet", "Savings", "UX", "LATAM"],
      },
      {
        category: "Machine Learning",
        description: "Supervised 1X2 classification model trained on real international matches to forecast remaining 2026 World Cup games, weighing recent team and player performance.",
        tags: ["Python", "scikit-learn", "Classification", "Football"],
      },
    ],
  },
  es: {
    headingPre: "Mirá mi",
    headingHighlight: "portfolio de proyectos",
    caseStudy: "Ver caso de estudio",
    seeMore: "Ver todos los proyectos",
    seeLess: "Ver menos",
    projects: [
      {
        category: "Infraestructura fintech",
        description: "Wallet USDC no custodial y gateway de pagos sobre Stellar, con rampas fiat en seis monedas, KYC/KYB integrado y rieles de escrow para el comercio en LATAM. Opera bajo el marco regulatorio argentino de activos virtuales (Ley 27.739).",
        tags: ["Stellar", "USDC", "Escrow", "Fintech", "LATAM"],
      },
      {
        category: "Orquestación de pagos",
        description: "Cobrá en pesos, ahorrá en dólares: conecta el rail interoperable de Transferencias 3.0 de Argentina con Stellar, liquidando los cobros del comercio on-chain en USDC en segundos.",
        tags: ["Stellar", "Transferencias 3.0", "USDC", "QR", "Argentina"],
      },
      {
        category: "Pagos privados",
        description: "Rieles de remesas privadas con bordes auditables sobre Midnight Network: transferencias protegidas con revelación selectiva para pagos transfronterizos compatibles con compliance.",
        tags: ["Midnight", "ZK", "Remesas", "Privacidad", "Compliance"],
      },
      {
        category: "Identidad ZK",
        description: "Pagos de agentes IA con acceso ZK sobre Stellar: un pasaporte de conocimiento cero que prueba la autorización del agente sin revelar identidad, habilitando transacciones autónomas confiables.",
        tags: ["ZK", "Agentes IA", "Stellar", "Identidad", "Pagos"],
      },
      {
        category: "Pagos agénticos con IA",
        description: "Capa de coordinación visual donde agentes de IA interactúan mediante micropagos programables, flujos de escrow y acciones basadas en wallets.",
        tags: ["Agentes IA", "x402", "Stellar", "Soroban", "Micropagos"],
      },
      {
        category: "Marketplace de agentes IA",
        description: "Concepto de marketplace para coordinar equipos de agentes de IA especializados usando modelos locales y distribuidos, reduciendo costos y mejorando la ejecución de flujos de trabajo.",
        tags: ["Agentes IA", "Marketplace", "LLMs", "Ruteo"],
      },
      {
        category: "Infraestructura IA",
        description: "Receipts de ejecución consultables para equipos de agentes IA sobre Arkiv: registros verificables de qué hicieron los agentes, cuándo y por qué, para flujos multiagente auditables.",
        tags: ["Arkiv", "Agentes IA", "Auditabilidad", "Datos"],
      },
      {
        category: "Seguridad en pagos con IA",
        description: "Firewall de aprobación humana para acciones financieras impulsadas por IA, gobernanza de pagos autónomos y seguridad transaccional programable.",
        tags: ["Human-in-the-loop", "Seguridad IA", "Pagos", "Gobernanza"],
      },
      {
        category: "Herramientas para desarrolladores",
        description: "Capa visual de abstracción de contratos inteligentes inspirada en la programación por bloques para simplificar el onboarding blockchain y la creación de contratos.",
        tags: ["Soroban", "Contratos inteligentes", "Educación", "DevTooling"],
      },
      {
        category: "Comercio agéntico",
        description: "Prototipo de orquestación de pagos con IA donde los usuarios delegan compras a agentes con flujos de aprobación y lógica de comercio programable.",
        tags: ["Comercio IA", "Pagos", "Scraping", "Flujos de aprobación"],
      },
      {
        category: "Comercio B2B agéntico",
        description: "MVP de abastecimiento B2B gastronómico con IA agentic: mandatos de compra que permiten a agentes de IA cotizar y coordinar pedidos de insumos para restaurantes.",
        tags: ["Agentes IA", "B2B", "Abastecimiento", "Comercio"],
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
        category: "Gaming Web3",
        description: "Juego de estrategia por turnos en mapa hexagonal sobre Stellar con ZK, donde humanos enfrentan a oponentes LLM — o miran simulaciones LLM vs LLM — con perfiles de dificultad visibles.",
        tags: ["Godot", "Stellar", "ZK", "LLMs", "Gaming"],
      },
      {
        category: "IA Legal",
        description: "Abogado generalista de IA para el derecho argentino construido sobre Claude Code, cubriendo 11 áreas de práctica con acceso en vivo a más de 899 mil documentos legales de SAIJ en múltiples jurisdicciones.",
        tags: ["Claude Code", "Legal Tech", "Argentina", "Agentes IA"],
      },
      {
        category: "Fintech de consumo",
        description: "Concepto de wallet de consumo que explora la UX de ahorro y pagos cotidianos para usuarios de LATAM, prototipado y deployado como experiencia web interactiva.",
        tags: ["Wallet", "Ahorro", "UX", "LATAM"],
      },
      {
        category: "Machine Learning",
        description: "Modelo de clasificación supervisada 1X2 entrenado con partidos internacionales reales para pronosticar los partidos restantes del Mundial 2026, ponderando el rendimiento reciente de equipos y jugadores.",
        tags: ["Python", "scikit-learn", "Clasificación", "Fútbol"],
      },
    ],
  },
} as const

export function PortfolioSection() {
  const { lang } = useLang()
  const t = content[lang]
  const [showAll, setShowAll] = useState(false)
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
          {(showAll ? projects : projects.slice(0, 6)).map((project, index) => (
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

        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-[#0B0B0B] text-white font-semibold px-8 py-3 rounded-full border-[3px] border-black hover:bg-white hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            {showAll ? t.seeLess : t.seeMore}
          </button>
        </div>
      </div>
    </section>
  )
}
