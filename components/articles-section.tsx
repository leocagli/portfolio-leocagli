"use client"

import { ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useLang } from "@/lib/i18n"

const articleColors = ["bg-[#2F81F7]", "bg-[#10B981]", "bg-[#FF6B7A]", "bg-[#FFC224]", "bg-[#6366F1]", "bg-[#EC4899]"]

const content = {
  en: {
    headingPre: "Lab",
    headingHighlight: "notes",
    browseAll: "Browse all notes",
    readMore: "Read more",
    articles: [
      {
        title: "Why hackathons are public R&D environments",
        excerpt: "Exploring how hackathons serve as rapid experimentation grounds for emerging technologies and ecosystem validation.",
        tag: "Ecosystem",
      },
      {
        title: "Programmable payments for emerging markets",
        excerpt: "Building stablecoin infrastructure and escrow systems designed for LATAM commerce and logistics.",
        tag: "Fintech",
      },
      {
        title: "AI agents and human approval flows",
        excerpt: "Designing human-in-the-loop systems for autonomous payment governance and transaction safety.",
        tag: "AI",
      },
      {
        title: "Stablecoins, escrow and operational trust",
        excerpt: "How programmable trust systems can transform marketplace coordination in emerging economies.",
        tag: "Web3",
      },
      {
        title: "Making smart contracts understandable",
        excerpt: "Visual abstraction layers and block-based programming to simplify blockchain onboarding.",
        tag: "Education",
      },
      {
        title: "Web3 beyond speculation: traceability, logistics and NGOs",
        excerpt: "Real-world applications of blockchain technology for supply chain transparency and social impact.",
        tag: "Impact",
      },
    ],
  },
  es: {
    headingPre: "Notas de",
    headingHighlight: "laboratorio",
    browseAll: "Ver todas las notas",
    readMore: "Leer más",
    articles: [
      {
        title: "Por qué los hackathons son entornos de I+D pública",
        excerpt: "Cómo los hackathons funcionan como espacios de experimentación rápida para tecnologías emergentes y validación de ecosistemas.",
        tag: "Ecosistema",
      },
      {
        title: "Pagos programables para mercados emergentes",
        excerpt: "Construyendo infraestructura de stablecoins y sistemas de escrow diseñados para el comercio y la logística de LATAM.",
        tag: "Fintech",
      },
      {
        title: "Agentes de IA y flujos de aprobación humana",
        excerpt: "Diseñando sistemas con supervisión humana para la gobernanza de pagos autónomos y la seguridad transaccional.",
        tag: "IA",
      },
      {
        title: "Stablecoins, escrow y confianza operativa",
        excerpt: "Cómo los sistemas de confianza programables pueden transformar la coordinación de marketplaces en economías emergentes.",
        tag: "Web3",
      },
      {
        title: "Hacer entendibles los contratos inteligentes",
        excerpt: "Capas de abstracción visual y programación por bloques para simplificar el onboarding blockchain.",
        tag: "Educación",
      },
      {
        title: "Web3 más allá de la especulación: trazabilidad, logística y ONGs",
        excerpt: "Aplicaciones reales de la tecnología blockchain para la transparencia de la cadena de suministro y el impacto social.",
        tag: "Impacto",
      },
    ],
  },
} as const

export function ArticlesSection() {
  const { lang } = useLang()
  const t = content[lang]
  const articles = t.articles.map((article, index) => ({
    ...article,
    color: articleColors[index],
  }))

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.headingPre} <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">{t.headingHighlight}</span>
          </h2>
          <Button
            variant="outline"
            className="border-[3px] border-black rounded-xl px-4 md:px-6 py-4 md:py-6 hover:bg-gray-50 bg-white font-semibold text-sm md:text-base w-full sm:w-auto"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            {t.browseAll}
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="group bg-white border-[3px] border-black rounded-[24px] overflow-hidden hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:translate-y-[-4px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className={`${article.color} p-4`}>
                <span className="inline-block bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  {article.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#0B0B0B] group-hover:text-[#2F81F7] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[#393939] text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <a
                  href="https://x.com/leocagli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-semibold text-[#0B0B0B] hover:gap-3 transition-all text-sm group-hover:text-[#2F81F7]"
                >
                  {t.readMore}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
