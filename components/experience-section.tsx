"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type Experience = {
  period: string
  title: string
  company: string
  description: string
  color: string
  logo?: string
}

const experiences: Experience[] = [
  {
    period: "Mar 2025 - Present",
    title: "Founder",
    company: "Cosmos Pay",
    description:
      "Non-custodial USDC payments for LATAM. SEP-7 payment links. About 200 weekly active users. Team of 2. The CosmosPay skill was merged into stellar/stellar-dev-skill (PR #138). Won US$10k at Instawards, no equity.",
    color: "bg-[#FF6B7A]",
    logo: "/logos/cosmos-icon.jpeg",
  },
  {
    period: "2026 - Present",
    title: "Founder / Retail Multicategory Store",
    company: "El Depo",
    description:
      "Multicategory retail business focused on technology, gadgets, bazaar products, tools and office supplies.",
    color: "bg-[#10B981]",
  },
  {
    period: "2023 - 2024",
    title: "Logistics Analyst / Supervisor",
    company: "Food Packaging",
    description: "Distribution route control, logistics reporting, KPI analysis and process optimization.",
    color: "bg-[#FFC224]",
  },
  {
    period: "2022 - 2023",
    title: "Financial Analyst / Payments",
    company: "Congress Rental",
    description: "Payment orders, tax withholdings, VAT, banking reconciliations, ERP systems and external audits.",
    color: "bg-[#6366F1]",
  },
  {
    period: "2017 - Present",
    title: "Retail Business Owner",
    company: "Nature & Fitness",
    description: "Retail operations, supplier coordination, customer-facing commerce and business administration.",
    color: "bg-[#EC4899]",
  },
]

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="experience" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="text-white pt-0 md:pt-12 md:sticky md:top-12 self-start"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8 leading-[1.3]">
              Take a look at my <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">experience</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-base md:text-lg">
              About 5 years of work experience in finance, payments and logistics, plus founding work in payments and
              retail.
            </p>
            <p className="text-white font-semibold text-base md:text-lg">
              Open to junior Product, Data Analyst and AI Automation roles.
            </p>
          </motion.div>

          <div className="space-y-6">
            {(showAll ? experiences : experiences.slice(0, 3)).map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white border-4 border-black rounded-3xl min-h-[220px] md:min-h-[240px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-4 md:mb-6 pt-6 md:pt-8 px-6 md:px-8">
                  <div className="text-base md:text-[22px] leading-tight md:leading-[34px] font-bold text-[#0B0B0B]">
                    {exp.period}
                  </div>
                  {exp.logo ? (
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                      <img src={exp.logo} alt={`${exp.company} logo`} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div
                      className={`${exp.color} w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center`}
                    >
                      <span className="text-white text-xs font-bold">{exp.company.slice(0, 2).toUpperCase()}</span>
                    </div>
                  )}
                </div>

                <div className="border-t-[3px] border-black mb-4 md:mb-6"></div>

                <div className="px-6 md:px-8 pb-6 md:pb-8">
                  <h3 className="text-xl md:text-[24px] leading-tight md:leading-[32px] font-bold text-[#0B0B0B] mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-[#2F81F7] font-bold mb-2">{exp.company}</p>
                  <p className="text-[#393939] text-base md:text-[18px] leading-relaxed md:leading-[28px]">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-[#0B0B0B] text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-full border-[3px] border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                {showAll ? "Show less" : "See full history"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
