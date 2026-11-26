"use client"

import { ArrowRight, ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"
import { MediaCarousel, YouTubeEmbed, type MediaSlide } from "@/components/media-carousel"
import { TiltCard } from "@/components/three-ux/tilt-card"

type ProjectLink = {
  href: string
  label: string
}

type Project = {
  id: string
  title: string
  category: string
  paragraphs: string[]
  tags: string[]
  bgColor: string
  tagColor: string
  logo?: string
  href?: string
  links?: ProjectLink[]
  media?: MediaSlide[]
  youtubeId?: string
  youtubeTitle?: string
}

const projects: Project[] = [
  {
    id: "cosmos-pay",
    title: "Cosmos Pay",
    category: "Wallet · P2P marketplace",
    paragraphs: [
      "A simpler way to move your digital world.",
      "Cosmos Pay is a crypto wallet and P2P marketplace for LatAm (USDT and USDC on Stellar). Started March 2025. Won US$10k at the Stellar Instawards, with no equity. Team of 2, with co-founder Emanuel Guzmán.",
      "At HackMeridian 2026 (Stellar) in Lisbon, 25–26 Oct 2026, I mentored Scale-track teams for Cosmos Pay and helped judge 165 projects from 350+ builders.",
      "On 17 Sep 2026, with Cosmos Pay, I gave the kick-off of the SDF + BAF Buildathon, explained NearX Stellar Apex, and mentored SaltaDev and jujuy.dev with Emanuel Guzmán.",
    ],
    tags: ["Stellar", "USDT", "USDC", "Wallet", "LatAm"],
    bgColor: "bg-[#2F81F7]",
    tagColor: "bg-[#FF6B7A]",
    logo: "/logos/cosmos-icon.jpeg",
    href: "https://cosmospay.lat",
    links: [
      { href: "https://cosmospay.lat", label: "cosmospay.lat" },
      { href: "https://cosmosapp.lat", label: "cosmosapp.lat" },
      {
        href: "https://es.linkedin.com/posts/leocagli_fui-mentor-y-juez-en-hack-meridian-de-stellar-activity-7525497358118313985-FKo6",
        label: "HackMeridian LinkedIn post",
      },
      { href: "https://www.hackmeridian.com/2026", label: "HackMeridian recap" },
      {
        href: "https://es.linkedin.com/posts/leocagli_con-cosmos-pay-wallet-payments-gateway-activity-7506175864540200960-PD7w",
        label: "SDF + BAF Buildathon LinkedIn post",
      },
    ],
    media: [
      {
        src: "/images/cosmos-pay-banner.webp",
        alt: "Official Cosmos Pay banner: A simpler way to move your digital world.",
      },
      {
        src: "/images/hackmeridian-mentor-judge.webp",
        alt: "Leonardo Cagliero mentoring at HackMeridian 2026 in Lisbon. A laptop sign reads Ask for feedback here, Cosmos Pay, Mentor.",
      },
      {
        src: "/images/hackmeridian-stellar-ceo.webp",
        alt: "Leonardo Cagliero with the CEO of the Stellar Development Foundation at HackMeridian.",
        caption: "With the SDF CEO at HackMeridian",
      },
    ],
  },
  {
    id: "ba-protege-plus",
    title: "BA Protege Plus",
    category: "Current work",
    paragraphs: [
      "Building BA Protege Plus with Innova Labs, the innovation lab of the City of Buenos Aires, and working with LOTBA (Lotería de la Ciudad de Buenos Aires).",
      "This is the app to prevent gambling addiction in children and adolescents.",
    ],
    tags: ["Innova Labs", "LOTBA", "Buenos Aires"],
    bgColor: "bg-[#10B981]",
    tagColor: "bg-[#334155]",
    youtubeId: "roGEFiwATeI",
    youtubeTitle: "BA Protege plus",
    links: [{ href: "https://youtu.be/roGEFiwATeI", label: "Watch on YouTube" }],
  },
  {
    id: "medflow",
    title: "MedFlow",
    category: "Health",
    paragraphs: [
      "In Buenos Aires, presented MedFlow at NAVES IAE Business School and an app to prevent gambling addiction in children and adolescents, together with the Government of the City of Buenos Aires and LOTBA. MedFlow is a health project that started at the HSIL hackathon. It continued in NAVES (IAE) with a scholarship. I was a NAVES finalist.",
    ],
    tags: ["Health", "NAVES IAE", "HSIL"],
    bgColor: "bg-[#8B5CF6]",
    tagColor: "bg-[#FFC224]",
    logo: "/images/medflow-logo.webp",
    links: [
      {
        href: "https://www.linkedin.com/posts/leocagli_ayer-estuve-mentoreando-equipos-en-el-hackath%C3%B3n-activity-7512542004531204097-qVDo",
        label: "LinkedIn post",
      },
    ],
    media: [
      {
        src: "/images/medflow-logo.webp",
        alt: "MedFlow logo.",
      },
    ],
  },
  {
    id: "runa",
    title: "Runa",
    category: "Game",
    paragraphs: [
      "An ASCII RPG for the terminal, with a 3D city you can play in the browser. Every 3D model was generated with Tripo. Best Game at Tripothon S1 in São Paulo (Demo Day).",
    ],
    tags: ["Game", "Tripo", "Tripothon", "RPG"],
    bgColor: "bg-[#334155]",
    tagColor: "bg-[#2F81F7]",
    logo: "/images/runa-project.jpeg",
    href: "https://playruna.vercel.app",
    links: [
      { href: "https://playruna.vercel.app", label: "Play Runa" },
      { href: "https://github.com/Bitcoindefi/runa", label: "View on GitHub" },
    ],
    media: [
      {
        src: "/images/tripothon-winner-runa.webp",
        alt: "Runa winning Best Game at Tripothon S1 in São Paulo.",
      },
      {
        src: "/images/runa-3d-city-gameplay.webp",
        alt: "Runa 3D city gameplay.",
      },
      {
        src: "/images/runa-landing-tripothon.webp",
        alt: "Runa landing page for Tripothon S1 Demo Day at playruna.vercel.app.",
      },
    ],
  },
  {
    id: "agentic-city",
    title: "Agentic City",
    category: "AI Agents",
    paragraphs: [
      "A gamified orchestrator for AI agents. Submitted to Superteam Earn / Colosseum (Oct 2026).",
    ],
    tags: ["AI Agents", "Superteam", "Colosseum"],
    bgColor: "bg-[#6366F1]",
    tagColor: "bg-[#FFC224]",
    href: "https://github.com/Bitcoindefi/agentic-city",
    links: [{ href: "https://github.com/Bitcoindefi/agentic-city", label: "View on GitHub" }],
  },
  {
    id: "argentina-dev",
    title: "Argentina.dev",
    category: "Developer Community",
    paragraphs: [
      "Developer community I founded in Argentina. About 3,000 members in total, across Salta Dev, Jujuy Dev and Formosa Dev.",
      "On 22 Nov 2026 I was mentor and judge at Cursor Hackathon Jujuy on the Tren Solar de la Quebrada, departing Estación Volcán, organized with jujuy.dev / Argentina.dev, Cursor, SpaceXSI Community, Nodo and Argentina Space. 70 attendees.",
      "I organized Cabildo Tech in Jujuy, a tech event with 150 attendees. I also spoke there.",
      "At Puna Tech 2026 in Salta I organized the Arkiv Network hackathon track (Arkiv x Puna Tech). I also hosted the closing sunset event on 30 May 2026, with Cerveza Salta. The congress had more than 1,500 attendees, per press.",
    ],
    tags: ["Community", "Hackathons", "Argentina", "Developers"],
    bgColor: "bg-[#10B981]",
    tagColor: "bg-[#334155]",
    media: [
      {
        src: "/images/tren-solar-mentor-pass.webp",
        alt: "Boarding-pass card for Cursor Hackathon Jujuy on the Tren Solar de la Quebrada. Passenger Leo Cagliero Shictong, role Mentor, 22 Nov 2026, Estación Volcán.",
      },
      {
        type: "video",
        src: "/video/tren-solar.mp4",
        poster: "/images/tren-solar-poster.webp",
        alt: "Video from Cursor Hackathon Jujuy on the Tren Solar de la Quebrada.",
      },
      {
        type: "video",
        src: "/video/cabildo-tech-jujuy.mp4",
        poster: "/images/cabildo-tech-poster.webp",
        alt: "Leonardo Cagliero speaking at Cabildo Tech in Jujuy.",
      },
    ],
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
    <section id="projects" className="container mx-auto px-4 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 text-on-terrain">
            Featured <br className="hidden md:block" />
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">projects</span>
          </h2>
          <p className="text-slate-100 text-base md:text-lg font-medium max-w-2xl mx-auto text-on-terrain">
            Each project lives in one place, with its story, photos and links.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {projects.map((project, index) => (
            <TiltCard key={project.id} className="h-full card-frame rounded-[32px]">
            <motion.article
              id={project.id}
              className="group card-glass rounded-[31px] overflow-hidden transition-shadow scroll-mt-28 h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
            >
              <div className={`${project.bgColor} p-6 md:p-8 relative min-h-[88px]`}>
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
                <h3 className="text-xl md:text-[28px] font-bold mb-3 leading-tight text-white">{project.title}</h3>

                <div className="space-y-3 mb-6">
                  {project.paragraphs.map((p) => (
                    <p key={p.slice(0, 48)} className="text-base text-slate-300 leading-relaxed font-medium">
                      {p}
                    </p>
                  ))}
                </div>

                {project.youtubeId && project.youtubeTitle && (
                  <div className="mb-6">
                    <YouTubeEmbed videoId={project.youtubeId} title={project.youtubeTitle} />
                  </div>
                )}

                {project.media && project.media.length > 0 && (
                  <div className="mb-6">
                    <MediaCarousel items={project.media} />
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/10 text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15"
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
                        className="flex items-center gap-2 font-semibold text-white hover:gap-3 transition-all text-sm md:text-base"
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
                      className="flex items-center gap-2 font-semibold text-white hover:gap-3 transition-all text-sm md:text-base"
                    >
                      Visit project
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )
                )}
              </div>
            </motion.article>
            </TiltCard>
          ))}
        </div>

        <motion.div
          className="card-glass rounded-[32px] p-8 md:p-10 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl font-bold text-white">More projects</h3>
            <a
              href="https://github.com/Bitcoindefi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0a1020] font-semibold px-6 py-3 rounded-full hover:bg-[#FFC224] transition-colors self-start"
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
