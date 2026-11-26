"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

type LatestLink = {
  href: string
  label: string
}

type LatestItem = {
  date: string
  text: string
  color: string
  href?: string
  linkLabel?: string
  links?: LatestLink[]
}

const latest: LatestItem[] = [
  {
    date: "22 Nov 2026",
    text: "Hosted the Argentina.dev hackathon on the Tren Solar.",
    color: "bg-[#FF6B7A]",
  },
  {
    date: "13 Nov 2026",
    text: "Submitted Runa to the Tripo Agentic Canvas Workflow Challenge in Japan.",
    color: "bg-[#2F81F7]",
    href: "https://github.com/Bitcoindefi/runa",
    linkLabel: "View Runa on GitHub",
  },
  {
    date: "Nov 2026",
    text: "Took part in the Claude Code Hackathon in Madrid.",
    color: "bg-[#6366F1]",
  },
  {
    date: "Nov 2026",
    text: "GMI Cloud Clouder ambassador.",
    color: "bg-[#10B981]",
  },
  {
    date: "Oct 2026",
    text: "Submitted Agentic City to Superteam Earn / Colosseum.",
    color: "bg-[#F59E0B]",
    href: "https://github.com/Bitcoindefi/agentic-city",
    linkLabel: "View Agentic City on GitHub",
  },
  {
    date: "25–26 Oct 2026",
    text: "Mentor and judge, HackMeridian 2026 (Stellar), Lisbon, Oct 25–26 2026: mentored Scale-track teams for Cosmos Pay and helped judge 165 projects from 350+ builders.",
    color: "bg-[#EC4899]",
    links: [
      {
        href: "https://es.linkedin.com/posts/leocagli_fui-mentor-y-juez-en-hack-meridian-de-stellar-activity-7525497358118313985-FKo6",
        label: "LinkedIn post",
      },
      {
        href: "https://www.hackmeridian.com/2026",
        label: "Event recap",
      },
    ],
  },
  {
    date: "9 Oct 2026",
    text: "CosmosPay skill merged into stellar/stellar-dev-skill (PR #138).",
    color: "bg-[#FFC224]",
    href: "https://github.com/stellar/stellar-dev-skill/pull/138",
    linkLabel: "View PR #138",
  },
  {
    date: "17 Sep 2026",
    text: "With Cosmos Pay, gave the kick-off of the SDF + BAF Buildathon, explained NearX Stellar Apex, and mentored SaltaDev and jujuy.dev with Emanuel Guzman.",
    color: "bg-[#2F81F7]",
    href: "https://es.linkedin.com/posts/leocagli_con-cosmos-pay-wallet-payments-gateway-activity-7506175864540200960-PD7w",
    linkLabel: "LinkedIn post",
  },
]

export function LatestSection() {
  return (
    <section id="latest" className="bg-[#F5F5F5] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Latest</span> work
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium">Recent builds, events and milestones.</p>
          </motion.div>

          <div className="space-y-4">
            {latest.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border-[3px] border-black rounded-[24px] p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <span
                  className={`${item.color} text-black border-2 border-black text-sm font-bold px-3 py-1.5 rounded-full self-start whitespace-nowrap`}
                >
                  {item.date}
                </span>
                <p className="text-[#0B0B0B] text-base md:text-lg font-semibold flex-1">{item.text}</p>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 font-semibold text-[#2F81F7] hover:gap-2 transition-all text-sm whitespace-nowrap self-start sm:self-auto"
                  >
                    {item.linkLabel ?? "View"}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
                {item.links && (
                  <div className="flex flex-col gap-2 self-start sm:self-auto">
                    {item.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-semibold text-[#2F81F7] hover:gap-2 transition-all text-sm whitespace-nowrap"
                      >
                        {link.label}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
