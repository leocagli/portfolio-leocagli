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
    },
    {
      title: "Open Stellar",
      category: "Agentic AI Payments",
      description: "Visual coordination layer where AI agents interact through programmable micropayments, escrow workflows and wallet-based actions.",
      tags: ["AI Agents", "x402", "Stellar", "Soroban", "Micropayments"],
      bgColor: "bg-[#6366F1]",
      tagColor: "bg-[#FFC224]",
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
    },
    {
      title: "Tralala Contracts",
      category: "Developer Tooling",
      description: "Visual smart-contract abstraction layer inspired by block-based programming to simplify blockchain onboarding and contract creation.",
      tags: ["Soroban", "Smart Contracts", "Education", "DevTooling"],
      bgColor: "bg-[#FFC224]",
      tagColor: "bg-[#0B0B0B]",
    },
    {
      title: "ReFinance",
      category: "Social Impact DeFi",
      description: "Programmable transparency system for NGOs and social impact organizations using decentralized financial flows.",
      tags: ["DeFi", "NGOs", "Transparency", "Impact"],
      bgColor: "bg-[#8B5CF6]",
      tagColor: "bg-[#10B981]",
    },
    {
      title: "Vinay",
      category: "Blockchain Traceability",
      description: "Wine traceability and geolocation verification platform for blockchain-based supply-chain transparency.",
      tags: ["Hedera", "Traceability", "Wine", "Real-World Assets"],
      bgColor: "bg-[#EC4899]",
      tagColor: "bg-[#FFC224]",
    },
    {
      title: "PlatanPay",
      category: "Agentic Commerce",
      description: "AI payment orchestration prototype where users delegate shopping tasks to agents with approval flows and programmable commerce logic.",
      tags: ["AI Commerce", "Payments", "Scraping", "Approval Flows"],
      bgColor: "bg-[#F59E0B]",
      tagColor: "bg-[#2F81F7]",
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
              className="group bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-y-[-4px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={`${project.bgColor} p-6 md:p-8`}>
                <span className={`${project.tagColor} text-white text-xs font-semibold px-4 py-1.5 rounded-full`}>
                  {project.category}
                </span>
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
                  href="#"
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base group-hover:text-[#2F81F7]"
                >
                  View case study
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
