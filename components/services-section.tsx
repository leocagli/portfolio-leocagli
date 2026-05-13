"use client"

import { Mail, Brain, Wallet, Building2, Trophy, GraduationCap, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ServicesSection() {
  const services = [
    {
      title: "AI & Web3 Product Strategy",
      description: "Product direction for emerging technologies, translating complex infrastructure into usable systems, narratives and MVPs.",
      icon: Brain,
      bgColor: "bg-[#2F81F7]",
    },
    {
      title: "Agentic Payment Systems",
      description: "Concepts and prototypes for AI agents, programmable payments, approval flows, micropayments and human-in-the-loop financial actions.",
      icon: Wallet,
      bgColor: "bg-[#FF6B7A]",
    },
    {
      title: "Fintech & Stablecoin Infrastructure",
      description: "Payment flows, escrow logic, USDC rails, marketplace coordination and operational trust systems for LATAM use cases.",
      icon: Building2,
      bgColor: "bg-[#FFC224]",
    },
    {
      title: "Ecosystem & Hackathon Execution",
      description: "Rapid prototyping, live demos, team coordination and ecosystem validation through international hackathons and accelerator programs.",
      icon: Trophy,
      bgColor: "bg-[#6366F1]",
    },
    {
      title: "Blockchain Onboarding & Education",
      description: "Workshops, talks and tooling concepts to make smart contracts, DeFi and Web3 infrastructure more accessible.",
      icon: GraduationCap,
      bgColor: "bg-[#10B981]",
    },
    {
      title: "Technical Communication",
      description: "Speaking, content, demos and public documentation for AI/Web3 projects, communities and ecosystem initiatives.",
      icon: MessageSquare,
      bgColor: "bg-[#F59E0B]",
    },
  ]

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              My broad <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">set of services</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              Strategy, prototyping and ecosystem execution across AI, fintech and Web3 infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={index}
                  className="bg-white border-[3px] border-black rounded-[32px] overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 min-h-[320px] flex flex-col group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={`${service.bgColor} p-6 flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white border-3 border-black rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="px-8 py-6 flex-1 flex flex-col">
                    <h3 className="text-[24px] leading-[32px] font-bold mb-3 text-[#0B0B0B]">{service.title}</h3>
                    <p className="text-[16px] leading-[26px] font-medium text-[#393939]">{service.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div 
            className="mt-8 bg-[#0B0B0B] border-[3px] border-black rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[8px_8px_0px_0px_rgba(107,107,107,0.3)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center md:text-left">
              <h3 className="text-[28px] leading-[40px] font-bold mb-2 text-white">Looking for another service?</h3>
              <p className="text-[18px] leading-[30px] font-medium text-gray-300">
                Get in touch with me, there is a high chance that I will be able to help!
              </p>
            </div>
            <Button asChild className="bg-white text-black hover:bg-gray-100 rounded-[16px] px-12 py-6 font-medium text-[18px] h-[64px] flex-shrink-0">
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
