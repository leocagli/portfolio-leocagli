"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function PortfolioSection() {
  const projects = [
    {
      title: "Cosmos Pay",
      category: "Fintech Infrastructure",
      description: "Stablecoin-based payment and escrow infrastructure for LATAM commerce, logistics and marketplace coordination.",
      tags: ["Stellar", "USDC", "Escrow", "Fintech", "LATAM"],
      bgColor: "bg-[#2F81F7]",
      tagColor: "bg-[#FF6B7A]",
      logo: "/logos/cosmos-icon.jpeg",
    },
    {
      title: "Passpay",
      category: "Stellar · Fintech Infrastructure",
      description: "Capa de pagos para Argentina que conecta Transferencias 3.0 con Stellar: cobra en pesos por QR y liquida el valor on-chain en USDC o XLM.",
      tags: ["Stellar", "USDC", "Transferencias 3.0", "Fintech", "Argentina"],
      bgColor: "bg-[#0B1F3A]",
      tagColor: "bg-[#2F81F7]",
      logo: "/images/passpay-project.jpeg",
      href: "https://github.com/Bitcoindefi/Passpay",
    },
    {
      title: "RUNA",
      category: "ASCII RPG · Aleph Hackathon 2026",
      description: "Un RPG ASCII para terminal donde exploras una ciudad, recorres la pradera y escribes las reglas de combate de tu personaje.",
      tags: ["Aleph", "ASCII RPG", "Terminal", "Bare", "bare-tui"],
      bgColor: "bg-[#0B0B0B]",
      tagColor: "bg-[#2F81F7]",
      logo: "/images/runa-project.jpeg",
      href: "https://github.com/Bitcoindefi/runa",
    },
    {
      title: "Agente Smith",
      category: "LegalTech · AI Agent",
      description: "Agente abogado generalista para el derecho argentino, con búsqueda en vivo en SAIJ, análisis de casos y cómputo de plazos por jurisdicción.",
      tags: ["Claude Code", "SAIJ", "LegalTech", "Argentina", "AI Agent"],
      bgColor: "bg-[#0B3D2E]",
      tagColor: "bg-[#10B981]",
      logo: "/images/agente-smith-project.jpeg",
      href: "https://github.com/Bitcoindefi/agente-smith",
    },
    {
      title: "Stellar Game Studio",
      category: "Web3 Game Development",
      description: "Development tool for building web3 games on Stellar.",
      tags: ["Stellar", "Web3", "Game Development", "Tooling"],
      bgColor: "bg-[#10B981]",
      tagColor: "bg-[#0B0B0B]",
      href: "https://github.com/Bitcoindefi/Stellar-Game-Studio",
    },
    {
      title: "Open Stellar Passport",
      category: "ZK · AI Agent Payments",
      description: "ZK-gated AI-agent payments on Stellar with a zero-knowledge passport for human backing, anti-Sybil protection and solvency proofs.",
      tags: ["Stellar", "ZK", "AI Agents", "Anti-Sybil"],
      bgColor: "bg-[#6366F1]",
      tagColor: "bg-[#FFC224]",
      href: "https://github.com/Bitcoindefi/open-stellar-passport",
    },
    {
      title: "OpenAO",
      category: "Browser MMORPG · Web3",
      description: "Argentum Online jugable desde el navegador, con API, servidor WebSocket y cliente Next.js/PixiJS.",
      tags: ["Next.js", "PixiJS", "WebSocket", "MMORPG"],
      bgColor: "bg-[#2F81F7]",
      tagColor: "bg-[#FF6B7A]",
      href: "https://github.com/Bitcoindefi/OpenAO",
    },
    {
      title: "Human vs Bots",
      category: "Web3 Game · ZK",
      description: "Arena en tiempo real sobre Stellar donde pruebas tus habilidades estratégicas contra agentes, con tecnología ZK.",
      tags: ["Stellar", "ZK", "Web3 Game", "Real-time"],
      bgColor: "bg-[#FF6B7A]",
      tagColor: "bg-[#0B0B0B]",
      href: "https://github.com/Bitcoindefi/Human-vs-bots",
    },
    {
      title: "Predicción Mundial 2026 ML",
      category: "Machine Learning · Sports",
      description: "Predicción del Mundial 2026 con Machine Learning, clasificación 1X2 y énfasis en el rendimiento reciente.",
      tags: ["Python", "Machine Learning", "Football", "Prediction"],
      bgColor: "bg-[#FFC224]",
      tagColor: "bg-[#0B0B0B]",
      href: "https://github.com/Bitcoindefi/prediccion-mundial-2026-ml",
    },
    {
      title: "Piggy City",
      category: "Web3 Game",
      description: "Experiencia de juego web3 creada para explorar nuevas formas de interacción y economía digital.",
      tags: ["Web3", "Game", "Vercel"],
      bgColor: "bg-[#EC4899]",
      tagColor: "bg-[#2F81F7]",
      href: "https://github.com/Bitcoindefi/v0-piggy-city",
    },
    {
      title: "Open Stellar",
      category: "Agentic AI Payments",
      description: "Visual coordination layer where AI agents interact through programmable micropayments, escrow workflows and wallet-based actions.",
      tags: ["AI Agents", "x402", "Stellar", "Soroban", "Micropayments"],
      bgColor: "bg-[#6366F1]",
      tagColor: "bg-[#FFC224]",
      logo: "/logos/open-stellar.jpeg",
      href: "https://github.com/Bitcoindefi/Open-Stellar",
    },
    {
      title: "Shield Stellar",
      category: "AI Payment Security",
      description: "Human approval firewall for AI-driven financial actions, autonomous payment governance and programmable transaction safety.",
      tags: ["Human-in-the-loop", "AI Safety", "Payments", "Governance"],
      bgColor: "bg-[#FF6B7A]",
      tagColor: "bg-[#2F81F7]",
    },
    {
      title: "Nomos",
      category: "AI Agent Marketplace",
      description: "Marketplace concept for coordinating specialized AI agent teams using local and distributed models to reduce costs and improve workflow execution.",
      tags: ["AI Agents", "Marketplace", "LLMs", "Routing"],
      bgColor: "bg-[#10B981]",
      tagColor: "bg-[#FF6B7A]",
      logo: "/logos/nomos.jpeg",
    },
    {
      title: "Tralala Contracts",
      category: "Developer Tooling",
      description: "Visual smart-contract abstraction layer inspired by block-based programming to simplify blockchain onboarding and contract creation.",
      tags: ["Soroban", "Smart Contracts", "Education", "DevTooling"],
      bgColor: "bg-[#FFC224]",
      tagColor: "bg-[#0B0B0B]",
      logo: "/logos/tralala-contracts.jpeg",
    },
    {
      title: "Bridjet",
      category: "Cross-Chain Bridge",
      description: "Hackathon project for simplified cross-chain asset transfers with streamlined UX for blockchain interoperability.",
      tags: ["Bridge", "Cross-Chain", "DeFi", "UX"],
      bgColor: "bg-[#0B0B0B]",
      tagColor: "bg-[#2F81F7]",
      logo: "/logos/bridjet.jpeg",
    },
    {
      title: "Open Vinito",
      category: "Blockchain Traceability",
      description: "Wine traceability and geolocation verification platform for blockchain-based supply-chain transparency.",
      tags: ["Hedera", "Traceability", "Wine", "Real-World Assets"],
      bgColor: "bg-[#EC4899]",
      tagColor: "bg-[#FFC224]",
      logo: "/logos/open-vinito.jpeg",
    },
    {
      title: "PlatanPay",
      category: "Agentic Commerce",
      description: "AI payment orchestration prototype where users delegate shopping tasks to agents with approval flows and programmable commerce logic.",
      tags: ["AI Commerce", "Payments", "Scraping", "Approval Flows"],
      bgColor: "bg-[#F59E0B]",
      tagColor: "bg-[#2F81F7]",
      logo: "/logos/platanpay-mascot.jpeg",
      href: "https://github.com/Bitcoindefi/Platan-pay",
    },
  ]

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
            Take a look at my <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">project portfolio</span>
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
                  href={"href" in project ? project.href : "#"}
                  target={"href" in project ? "_blank" : undefined}
                  rel={"href" in project ? "noreferrer" : undefined}
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base group-hover:text-[#2F81F7]"
                >
                  {"href" in project ? "View on GitHub" : "View case study"}
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
