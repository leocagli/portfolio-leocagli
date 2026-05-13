"use client"

import { GraduationCap, BookOpen, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export function EducationSection() {
  const education = [
    {
      title: "Bachelor's Degree in Business Administration",
      institution: "UCASAL",
      period: "2018 - Present",
      status: "45/49 courses completed",
      inProgress: true,
    },
    {
      title: "Machine Learning",
      institution: "Talento Tech / Buenos Aires City Government",
      period: "2026 - Present",
      status: "Python, scikit-learn, model evaluation, data preprocessing, applied ML workflows",
      inProgress: true,
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

  return (
    <section className="bg-[#F5F5F5] py-16 md:py-24">
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
              Education & <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">Training</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                className={`bg-white border-[3px] border-black rounded-[24px] p-6 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 ${item.inProgress ? 'ring-2 ring-[#2F81F7] ring-offset-2' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${item.inProgress ? 'bg-[#2F81F7]' : 'bg-[#10B981]'} border-2 border-black rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {item.inProgress ? (
                      <BookOpen className="w-6 h-6 text-white" />
                    ) : (
                      <CheckCircle className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#0B0B0B] mb-1">{item.title}</h3>
                    <p className="text-[#2F81F7] font-semibold text-sm mb-1">{item.institution}</p>
                    {item.period && (
                      <p className="text-[#393939] text-sm mb-2">{item.period}</p>
                    )}
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${item.inProgress ? 'bg-[#2F81F7]/10 text-[#2F81F7]' : 'bg-[#10B981]/10 text-[#10B981]'}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
