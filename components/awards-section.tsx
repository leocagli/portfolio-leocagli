"use client"

import { Trophy, Award, MapPin, Mic } from "lucide-react"
import { motion } from "framer-motion"

export function AwardsSection() {
  const awards = [
    {
      title: "ETHGlobal Buenos Aires",
      description: "3er lugar — Yellow Track con Previate · $3k USD",
      icon: Trophy,
      color: "bg-[#FFC224]",
    },
    {
      title: "Stellar Give Hackathon",
      description: "1er lugar · $2k USD",
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
      description: "Winner with Cosmos — $15k USD ($5k/month × 3 months) + 2 trips to Mexico",
      icon: Trophy,
      color: "bg-[#10B981]",
      href: "#cosmos-pay",
    },
    {
      title: "Y-Hat Hackathon UBA Exactas",
      description: "3er puesto — AI Track with Provi.ia",
      icon: Award,
      color: "bg-[#EC4899]",
    },
    {
      title: "Stellar / Nearx Pulso Hackathon",
      description: "Instawards $15k USD + viaje a São Paulo Stellar Summit",
      icon: Trophy,
      color: "bg-[#F59E0B]",
    },
  ]

  const ecosystem = [
    "Codigo Alebrije / Stellar ecosystem",
    "Stellar House Mexico City",
    "Anthropic + Kaszek AI Hackathon",
    "Harvard Health Systems Innovation Lab Hackathon",
    "IBM Dev Day: AI Demystified",
    "PunaTech Salta / Arkiv Network hackathon — mentor & co-organizer (opening & closing)",
    "Descentralizar / Bitcoin Argentina speaker",
    "Travel grants: Mexico City, Buenos Aires, Rio de Janeiro",
  ]

  return (
    <section className="bg-white py-16 md:py-24">
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
              Hackathons, grants & <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">ecosystem</span>
            </h2>
          </motion.div>

          {/* Awards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {awards.map((award, index) => {
              const IconComponent = award.icon
              const cardContent = (
                <>
                  <div className={`w-16 h-16 ${award.color} border-2 border-black rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0B0B] mb-1">{award.title}</h3>
                  <p className="text-[#393939] text-sm font-medium">{award.description}</p>
                </>
              )
              return (
                <motion.div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[24px] p-6 text-center hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-y-[-4px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {award.href ? (
                    <a href={award.href} className="block">
                      {cardContent}
                    </a>
                  ) : (
                    cardContent
                  )}
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
            <h3 className="text-2xl font-bold text-white mb-6">Ecosystem Participation</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
