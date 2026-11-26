"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { MediaCarousel, type MediaSlide } from "@/components/media-carousel"
import { TiltCard } from "@/components/three-ux/tilt-card"

type TalkLink = { href: string; label: string }

type Talk = {
  title: string
  detail: string
  color: string
  media?: MediaSlide[]
  links?: TalkLink[]
}

const talks: Talk[] = [
  {
    title: "NASA Space Apps Salta",
    detail:
      "Workshop “IA para llegar al MVP” (AI to reach your MVP). Friday 6 Nov 2026, 14:00–16:00, UCASAL, Aula 6, Edificio 9.",
    color: "bg-[#6366F1]",
    media: [
      {
        src: "/images/nasa-space-apps-salta-taller.webp",
        alt: "Flyer for the workshop IA para llegar al MVP at NASA Space Apps Salta, Friday 6 November, 14–16h, UCASAL.",
      },
    ],
  },
  {
    title: "BNB Agent Studio Workshop",
    detail:
      "Gave the BNB Agent Studio Workshop at BNB Builder Session: Salta, organized by BNB Chain LatAm. Saturday 26th, starting at 11:30.",
    color: "bg-[#FFC224]",
    media: [
      {
        src: "/images/bnb-workshop-salta.webp",
        alt: "Leonardo Cagliero giving the BNB Agent Studio Workshop at BNB Builder Session: Salta.",
      },
    ],
  },
  {
    title: "Código Alerta — UCASAL",
    detail:
      "Taller N°2, “Fake news theory and information verification.” Extension project of UCASAL Facultad de Ciencias Jurídicas. Virtual, 8 Oct 2026. I spoke as Product Manager, Salta Dev.",
    color: "bg-[#2F81F7]",
    media: [
      {
        src: "/images/codigo-alerta-ucasal-speaker.webp",
        alt: "Leonardo Cagliero speaking at the Código Alerta workshop.",
      },
      {
        src: "/images/codigo-alerta-ucasal-taller.webp",
        alt: "Código Alerta workshop on fake news theory and information verification.",
      },
    ],
  },
  {
    title: "Talk at UTN Córdoba — “Cómo descentralizamos”",
    detail: "Panel on stage with the NGO Bitcoin Argentina. Title: “Cómo descentralizamos” (How do we decentralize?).",
    color: "bg-[#334155]",
    media: [
      {
        src: "/images/utn-cordoba-bitcoin-argentina-talk.webp",
        alt: "Leonardo Cagliero on a panel at UTN Córdoba with Bitcoin Argentina.",
      },
      {
        type: "video",
        src: "/video/utn-cordoba-talk.mp4",
        poster: "/images/utn-cordoba-poster.webp",
        alt: "Short clip from the talk Cómo descentralizamos at UTN Córdoba.",
      },
    ],
  },
  {
    title: "Solana IRL hackathon, Salta",
    detail: "Mentored teams, 4 Oct 2026.",
    color: "bg-[#10B981]",
    links: [
      {
        href: "https://www.linkedin.com/posts/leocagli_ayer-estuve-mentoreando-equipos-en-el-hackath%C3%B3n-activity-7512542004531204097-qVDo",
        label: "LinkedIn post",
      },
    ],
  },
  {
    title: "GMI Cloud Clouder ambassador",
    detail: "Ambassador program, Nov 2026.",
    color: "bg-[#10B981]",
  },
]

export function TalksSection() {
  return (
    <section id="talks" className="bg-transparent py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-3">
              Talks &amp; <span className="bg-[#6366F1] text-white px-3 py-1 inline-block">workshops</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg font-medium">
              Mentoring, talks and workshops that are not tied to a single project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {talks.map((talk, index) => (
              <TiltCard key={talk.title} className="h-full card-frame rounded-[32px]" max={5}>
              <motion.article
                className="card-glass rounded-[31px] overflow-hidden h-full hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
              >
                <div className={`${talk.color} h-2`} />
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{talk.title}</h3>
                  <p className="text-slate-300 font-medium leading-relaxed mb-4">{talk.detail}</p>
                  {talk.media && talk.media.length > 0 && (
                    <div className="mb-4">
                      <MediaCarousel items={talk.media} />
                    </div>
                  )}
                  {talk.links?.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-[#2F81F7] text-sm"
                    >
                      {link.label}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </motion.article>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
