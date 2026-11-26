"use client"

import { Award, Cloud, Flag, Mic, Trophy, Users, MapPin, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

type CommunityLink = {
  href: string
  label: string
}

type CommunityItem = {
  title: string
  detail: string
  icon: typeof Award
  color: string
  links?: CommunityLink[]
}

const community: CommunityItem[] = [
  {
    title: "Mentor & judge — HackMeridian 2026 (Stellar)",
    detail:
      "Lisbon, 25–26 Oct 2026. Mentored Scale-track teams for Cosmos Pay and helped judge 165 projects from 350+ builders.",
    icon: Award,
    color: "bg-[#6366F1]",
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
    title: "Argentina.dev hackathon on the Tren Solar",
    detail: "Hosted the hackathon on 22 Nov 2026.",
    icon: Users,
    color: "bg-[#FF6B7A]",
  },
  {
    title: "GMI Cloud Clouder ambassador",
    detail: "Ambassador program, Nov 2026.",
    icon: Cloud,
    color: "bg-[#10B981]",
  },
  {
    title: "PunaTech Salta / Arkiv Network hackathon",
    detail: "Mentor and co-organizer, opening and closing.",
    icon: Flag,
    color: "bg-[#F59E0B]",
  },
  {
    title: "DeFi workshop — Descentralizar / Bitcoin Argentina",
    detail: "Ran a workshop for the Bitcoin Argentina community.",
    icon: Mic,
    color: "bg-[#2F81F7]",
  },
]

type AwardItem = {
  title: string
  description: string
  icon: typeof Trophy
  color: string
  image?: string
}

const awards: AwardItem[] = [
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

const ecosystem = [
  "Codigo Alebrije / Stellar ecosystem",
  "Stellar House Mexico City",
  "Anthropic + Kaszek AI Hackathon",
  "Harvard Health Systems Innovation Lab Hackathon",
  "IBM Dev Day: AI Demystified",
  "Travel grants: Mexico City, Buenos Aires, Rio de Janeiro",
]

export function CommunitySection() {
  return (
    <section id="community" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Community &amp; <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">teaching</span>
            </h2>
          </motion.div>

          {/* Community / teaching cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {community.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[24px] p-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-y-[-4px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className={`w-12 h-12 ${item.color} border-2 border-black rounded-xl flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0B0B] mb-1">{item.title}</h3>
                  <p className="text-[#393939] text-sm font-medium">{item.detail}</p>
                  {item.links && (
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                      {item.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 font-semibold text-[#2F81F7] hover:gap-2 transition-all text-sm"
                        >
                          {link.label}
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Hackathons, grants &amp;{" "}
              <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">ecosystem</span>
            </h3>
          </motion.div>

          {/* Awards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {awards.map((award, index) => {
              const IconComponent = award.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[24px] p-6 text-center hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-y-[-4px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div
                    className={`w-16 h-16 ${award.color} border-2 border-black rounded-2xl flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  {award.image && (
                    <img
                      src={award.image}
                      alt={`${award.title} certificate`}
                      className="w-full h-28 object-cover object-center border-2 border-black rounded-xl mb-4"
                    />
                  )}
                  <h3 className="text-lg font-bold text-[#0B0B0B] mb-1">{award.title}</h3>
                  <p className="text-[#393939] text-sm font-medium">{award.description}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Ecosystem Participation */}
          <motion.div
            className="bg-[#0B0B0B] border-[3px] border-black rounded-[32px] p-8 md:p-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ecosystem participation</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {ecosystem.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 bg-white/10 rounded-xl p-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <MapPin className="w-5 h-5 text-[#FFC224] flex-shrink-0 mt-0.5" />
                  <span className="text-white text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
