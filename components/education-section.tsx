"use client"

import { BookOpen, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

type Education = {
  title: string
  institution: string
  period: string
  status: string
  inProgress: boolean
}

const education: Education[] = [
  {
    title: "Bachelor's Degree in Business Administration",
    institution: "UCASAL",
    period: "Mar 2018 - 2027",
    status: "45/49 courses completed",
    inProgress: true,
  },
  {
    title: "Machine Learning",
    institution: "Talento Tech / Buenos Aires City Government",
    period: "Completed July 2026",
    status: "Python, scikit-learn, model evaluation, data preprocessing, applied ML workflows",
    inProgress: false,
  },
  {
    title: "Back Office for Capital Markets",
    institution: "Bolsa de Comercio de Buenos Aires",
    period: "",
    status: "Completed",
    inProgress: false,
  },
  {
    title: "Excel Advanced + Power BI + SQL",
    institution: "BA Multiplica / UTN",
    period: "",
    status: "Completed",
    inProgress: false,
  },
  {
    title: "Big Data",
    institution: "Gob.ar",
    period: "",
    status: "Completed",
    inProgress: false,
  },
  {
    title: "Python",
    institution: "UTN",
    period: "",
    status: "Completed",
    inProgress: false,
  },
  {
    title: "Ethereum Developer Pack",
    institution: "ETH Kipu / UCEMA / Ethereum Argentina",
    period: "",
    status: "Completed",
    inProgress: false,
  },
  {
    title: "0 to dApp with Stellar + Rust",
    institution: "Odisea Labs / Stellar ecosystem",
    period: "",
    status: "Completed",
    inProgress: false,
  },
]

export function EducationSection() {
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="education" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4 text-on-terrain">
              Education &amp; <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">certificates</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(showAll ? education : education.slice(0, 3)).map((item, index) => (
              <motion.div
                key={index}
                className={`card-glass rounded-[24px] p-6 transition-all duration-300 ${item.inProgress ? "ring-2 ring-[#2F81F7]" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 ${item.inProgress ? "bg-[#2F81F7]" : "bg-[#10B981]"} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    {item.inProgress ? (
                      <BookOpen className="w-6 h-6 text-white" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-[#2F81F7] font-semibold text-sm mb-1">{item.institution}</p>
                    {item.period && <p className="text-slate-300 text-sm mb-2">{item.period}</p>}
                    <span
                      className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${item.inProgress ? "bg-[#2F81F7]/10 text-[#2F81F7]" : "bg-[#10B981]/10 text-[#10B981]"}`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-white text-[#0a1020] hover:bg-[#FFC224] font-semibold px-8 py-3 rounded-full transition-all"
            >
              {showAll ? "Show less" : "See all education"}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
