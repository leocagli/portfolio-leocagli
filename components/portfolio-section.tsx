"use client"

import { ArrowRight, ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"
import { MediaCarousel, type MediaSlide } from "@/components/media-carousel"

type ProjectLink = {
  href: string
  label: string
}

type Project = {
  title: string
  category: string
  description: string
  tags: string[]
  bgColor: string
  tagColor: string
  logo?: string
  href?: string
  links?: ProjectLink[]
  media?: MediaSlide[]
}

const projects: Project[] = [
  {
    title: "Cosmos Pay",
    category: "Fintech · USDC payments",
    description:
      "Non-custodial USDC payments for LATAM. SEP-7 payment links. About 200 weekly active users and a team of 2. The CosmosPay skill was merged into stellar/stellar-dev-skill (PR #138). Won US$10k at Instawards, no equity.",
    tags: ["Stellar", "USDC", "SEP-7", "Fintech", "LATAM"],
    bgColor: "bg-[#2F81F7]",
    tagColor: "bg-[#FF6B7A]",
    logo: "/logos/cosmos-icon.jpeg",
    href: "https://cosmospay.lat",
  },
  {
    title: "Argentina.dev",
    category: "Developer Community",
    description:
      "Developer community I founded in Argentina. About 3,000 members in total, across Salta Dev, Jujuy Dev and Formosa Dev. On 22 Nov 2026 I was mentor and judge at Cursor Hackathon Jujuy on the Tren Solar de la Quebrada, departing Estación Volcán, organized with jujuy.dev / Argentina.dev, Cursor, SpaceXAI community, Nodo and Argentina Space. 70 attendees.",
    tags: ["Community", "Hackathons", "Argentina", "Developers"],
    bgColor: "bg-[#10B981]",
    tagColor: "bg-[#0B0B0B]",
  },
  {
    title: "Runa",
    category: "Game",
    description:
      "An ASCII RPG for the terminal, with a 3D city you can play in the browser. Every 3D model was generated with Tripo. Submitted to the Tripo Agentic Canvas Workflow Challenge (13 Nov 2026). Best Game at Tripothon S1 in São Paulo.",
    tags: ["Game", "Tripo", "Tripothon", "RPG"],
    bgColor: "bg-[#0B0B0B]",
    tagColor: "bg-[#2F81F7]",
    logo: "/images/runa-project.jpeg",
    href: "https://playruna.vercel.app",
    links: [
      { href: "https://playruna.vercel.app", label: "Play Runa" },
      { href: "https://github.com/Bitcoindefi/runa", label: "View on GitHub" },
    ],
    media: [
      {
        src: "/images/runa-3d-city-gameplay.webp",
        alt: "Runa 3D city gameplay.",
      },
      {
        src: "/images/runa-landing-tripothon.webp",
        alt: "Runa landing page for Tripothon S1 Demo Day at playruna.vercel.app.",
      },
      {
        src: "/images/tripothon-winner-runa.webp",
        alt: "Runa winning Best Game at Tripothon S1 in São Paulo.",
      },
    ],
  },
  {
    title: "Agentic City",
    category: "AI Agents",
    description: "A gamified orchestrator for AI agents. Submitted to Superteam Earn / Colosseum (Oct 2026).",
    tags: ["AI Agents", "Superteam", "Colosseum"],
    bgColor: "bg-[#6366F1]",
    tagColor: "bg-[#FFC224]",
    href: "https://github.com/Bitcoindefi/agentic-city",
  },
]

const moreProjects: { title: string; href: string }[] = [
  { title: "Passpay", href: "https://github.com/Bitcoindefi/Passpay" },
  { title: "Open Stellar", href: "https://github.com/Bitcoindefi/Open-Stellar" },
  { title: "Open Stellar Passport", href: "https://github.com/Bitcoindefi/open-stellar-passport" },
  { title: "Agente Smith", href: "https://github.com/Bitcoindefi/agente-smith" },
  { title: "Stellar Game Studio", href: "https://github.com/Bitcoindefi/Stellar-Game-Studio" },
  { title: "Human vs Bots", href: "https://github.com/Bitcoindefi/Human-vs-bots" },
  { title: "PlatanPay", href: "https://github.com/Bitcoindefi/Platan-pay" },
  { title: "Tralala Contracts", href: "https://tralala-contracts-gray.vercel.app" },
]

export function PortfolioSection() {
  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <br />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">projects</span>
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
                  <div className="absolute top-4 right-4 w-16 h-16 md:w-20 md:h-20 rounded-2xl border-[3px] border-white shadow-lg overflow-hidden bg-white">
                    <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-cover" />
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-[28px] font-bold mb-3 leading-tight text-[#0B0B0B]">{project.title}</h3>

                <p className="text-base md:text-[16px] text-[#393939] mb-6 leading-relaxed font-medium">
                  {project.description}
                </p>

                {project.media && project.media.length > 0 && (
                  <div className="mb-6">
                    <MediaCarousel items={project.media} />
                  </div>
                )}

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

                {project.links && project.links.length > 0 ? (
                  <div className="flex flex-col gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base group-hover:text-[#2F81F7]"
                      >
                        {link.label}
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                ) : (
                  project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm md:text-base group-hover:text-[#2F81F7]"
                    >
                      Visit project
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* More projects */}
        <motion.div
          className="bg-[#0B0B0B] border-[3px] border-black rounded-[32px] p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-bold text-white">More projects</h3>
            <a
              href="https://github.com/Bitcoindefi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full border-[3px] border-black hover:bg-[#FFC224] transition-colors self-start"
            >
              <Github className="w-5 h-5" />
              See more on GitHub
            </a>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {moreProjects.map((project) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 bg-white/10 hover:bg-white/20 rounded-xl p-4 transition-colors"
              >
                <span className="text-white text-sm font-semibold">{project.title}</span>
                <ArrowUpRight className="w-4 h-4 text-[#FFC224] flex-shrink-0" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
