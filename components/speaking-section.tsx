"use client"

import { Play, Mic, Video, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function SpeakingSection() {
  const speaking = [
    {
      title: "DeFi Workshop",
      venue: "Descentralizar / ONG Bitcoin Argentina",
      type: "Workshop",
      icon: Mic,
    },
    {
      title: "The Power of Decentralization",
      venue: "Panel Debate",
      type: "Debate",
      icon: Mic,
    },
    {
      title: "Stellar Ecosystem Presentations",
      venue: "Various Events",
      type: "Talk",
      icon: Mic,
    },
    {
      title: "Public AI/Web3 Demos",
      venue: "Hackathons & Events",
      type: "Demo",
      icon: Video,
    },
  ]

  const media = [
    { platform: "TikTok", label: "Highlights" },
    { platform: "YouTube", label: "Demos" },
    { platform: "LinkedIn", label: "Content" },
  ]

  return (
    <section className="bg-[#6366F1] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Speaking, workshops & <span className="bg-white text-[#6366F1] px-3 py-1 inline-block">public demos</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {speaking.map((item, index) => {
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
                  <div className="w-12 h-12 bg-[#6366F1] border-2 border-black rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <span className="inline-block bg-[#6366F1]/10 text-[#6366F1] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B0B0B] mb-1">{item.title}</h3>
                  <p className="text-[#393939] text-sm font-medium">{item.venue}</p>
                </motion.div>
              )
            })}
          </div>

          {/* Media Placeholder Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
            {media.map((item, index) => (
              <motion.div
                key={index}
                className="bg-black border-[3px] border-black rounded-[24px] aspect-video flex items-center justify-center relative overflow-hidden group cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/20 to-transparent"></div>
                <div className="text-center z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-white font-bold">{item.platform}</p>
                  <p className="text-white/70 text-sm">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
