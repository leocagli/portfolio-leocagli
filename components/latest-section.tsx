"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { TiltCard } from "@/components/three-ux/tilt-card"

type LatestItem = {
  date: string
  text: string
  color: string
  href: string
  linkLabel: string
  external?: boolean
}

const latest: LatestItem[] = [
  {
    date: "Present",
    text: "Building BA Protege Plus with Innova Labs and LOTBA.",
    color: "bg-[#10B981]",
    href: "#ba-protege-plus",
    linkLabel: "See project",
  },
  {
    date: "22 Nov 2026",
    text: "Mentor and judge at Cursor Hackathon Jujuy on the Tren Solar.",
    color: "bg-[#FF6B7A]",
    href: "#argentina-dev",
    linkLabel: "See Argentina.dev",
  },
  {
    date: "6 Nov 2026",
    text: "Workshop “IA para llegar al MVP” at NASA Space Apps Salta.",
    color: "bg-[#6366F1]",
    href: "#talks",
    linkLabel: "See talks",
  },
  {
    date: "Nov 2026",
    text: "GMI Cloud Clouder ambassador.",
    color: "bg-[#10B981]",
    href: "#talks",
    linkLabel: "See talks",
  },
  {
    date: "25–26 Oct 2026",
    text: "Mentor and judge at HackMeridian 2026 in Lisbon, for Cosmos Pay.",
    color: "bg-[#EC4899]",
    href: "#cosmos-pay",
    linkLabel: "See Cosmos Pay",
  },
  {
    date: "Oct 2026",
    text: "Submitted Agentic City to Superteam Earn / Colosseum.",
    color: "bg-[#F59E0B]",
    href: "#agentic-city",
    linkLabel: "See project",
  },
  {
    date: "11 Oct 2026",
    text: "Runa won Best Game at Tripothon S1 in São Paulo (Demo Day).",
    color: "bg-[#2F81F7]",
    href: "#runa",
    linkLabel: "See Runa",
  },
  {
    date: "8 Oct 2026",
    text: "Código Alerta workshop at UCASAL.",
    color: "bg-[#2F81F7]",
    href: "#talks",
    linkLabel: "See talks",
  },
  {
    date: "4 Oct 2026",
    text: "Presented MedFlow at NAVES IAE Business School.",
    color: "bg-[#8B5CF6]",
    href: "#medflow",
    linkLabel: "See MedFlow",
  },
  {
    date: "4 Oct 2026",
    text: "Mentored teams at the Solana IRL hackathon in Salta.",
    color: "bg-[#10B981]",
    href: "#talks",
    linkLabel: "See talks",
  },
  {
    date: "17 Sep 2026",
    text: "SDF + BAF Buildathon kick-off with Cosmos Pay.",
    color: "bg-[#2F81F7]",
    href: "#cosmos-pay",
    linkLabel: "See Cosmos Pay",
  },
]

export function LatestSection() {
  return (
    <section id="latest" className="bg-[#F5F5F5] py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Latest</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium">
              A short timeline. Open a project or talk to read the full story.
            </p>
          </motion.div>

          <ol className="space-y-3">
            {latest.map((item, index) => (
              <TiltCard as="li" key={`${item.date}-${item.href}-${item.text}`} max={4}>
              <motion.div
                className="bg-white border-[3px] border-black rounded-2xl p-4 md:px-5 md:py-4 flex flex-col sm:flex-row sm:items-center gap-3 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-shadow"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
              >
                <span
                  className={`${item.color} text-black border-2 border-black text-xs md:text-sm font-bold px-3 py-1 rounded-full self-start whitespace-nowrap`}
                >
                  {item.date}
                </span>
                <p className="text-[#0B0B0B] text-sm md:text-base font-semibold flex-1">{item.text}</p>
                <a
                  href={item.href}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-1 font-semibold text-[#2F81F7] text-sm whitespace-nowrap self-start sm:self-center"
                >
                  {item.linkLabel}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.div>
              </TiltCard>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
