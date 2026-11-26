"use client"

import { Award, Trophy, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { TiltCard } from "@/components/three-ux/tilt-card"

type AwardItem = {
  title: string
  description: string
  icon: typeof Trophy
  color: string
  image?: string
  href?: string
  linkLabel?: string
}

const awards: AwardItem[] = [
  {
    title: "Tripothon S1, São Paulo",
    description: "Best Game — Runa. Live game at playruna.vercel.app.",
    icon: Trophy,
    color: "bg-[#FF6B7A]",
    image: "/images/tripothon-winner-runa.webp",
    href: "https://playruna.vercel.app",
    linkLabel: "Play Runa",
  },
  {
    title: "ETHGlobal Buenos Aires",
    description: "3rd place — Yellow Track with Previate · US$3k",
    icon: Trophy,
    color: "bg-[#FFC224]",
  },
  {
    title: "Stellar Give Hackathon",
    description: "1st place · US$2k",
    icon: Trophy,
    color: "bg-[#2F81F7]",
  },
  {
    title: "Meridian Rio",
    description: "Top 5 with Tralala Contracts",
    icon: Award,
    color: "bg-[#6366F1]",
  },
  {
    title: "Instawards",
    description: "US$10k, no equity — with Cosmos Pay",
    icon: Trophy,
    color: "bg-[#10B981]",
  },
  {
    title: "Y-Hat Hackathon UBA Exactas",
    description: "3rd place — AI Track with Provi.ia",
    icon: Award,
    color: "bg-[#EC4899]",
    image: "/images/y-hat-provi-certificate.jpeg",
  },
  {
    title: "Pulso Hackathon by Stellar",
    description: "Winner with Cosmos Pay",
    icon: Trophy,
    color: "bg-[#F59E0B]",
  },
  {
    title: "Aleph Hackathon",
    description: "Winner — General Track with Runa",
    icon: Trophy,
    color: "bg-[#8B5CF6]",
  },
]

export function AwardsSection() {
  return (
    <section id="awards" className="container mx-auto px-4 py-14 md:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3 text-on-terrain">
            Hackathons, grants &amp;{" "}
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">awards</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => {
            const IconComponent = award.icon
            return (
              <TiltCard key={award.title} className="h-full card-frame rounded-[24px]" max={7}>
              <motion.article
                className="card-glass rounded-[23px] p-6 text-center h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
              >
                <div
                  className={`w-16 h-16 ${award.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <IconComponent className="w-8 h-8 text-black" />
                </div>
                {award.image && (
                  <img
                    src={award.image}
                    alt={`${award.title}`}
                    className="w-full h-28 object-cover object-center border border-white/20 rounded-xl mb-4"
                  />
                )}
                <h3 className="text-lg font-bold text-white mb-1">{award.title}</h3>
                <p className="text-slate-300 text-sm font-medium">{award.description}</p>
                {award.href && (
                  <a
                    href={award.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 mt-3 font-semibold text-[#2F81F7] text-sm"
                  >
                    {award.linkLabel ?? "View"}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </motion.article>
              </TiltCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
