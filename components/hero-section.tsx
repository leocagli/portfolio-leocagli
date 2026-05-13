"use client"

import { Mail, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[38px] leading-[46px] md:text-[64px] font-bold md:leading-[76px]">
            I&apos;m <span className="bg-[#FF6B7A] text-white px-3 py-1 inline-block">Leonardo Cagliero</span>, an{" "}
            <span className="bg-[#2F81F7] text-white px-3 py-1 inline-block">AI & Web3 Product Strategist</span> from{" "}
            <span className="bg-[#FFC224] text-black px-3 py-1 inline-block">LATAM</span>
          </h1>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            I build and prototype programmable coordination systems using AI agents, stablecoin payments, smart contracts and Web3 infrastructure for emerging market use cases.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-7 pt-4">
            <Button 
              asChild
              className="bg-[#0B0B0B] text-white hover:bg-black/90 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
            >
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white border-[3px] border-black hover:bg-gray-50 rounded-lg py-5 px-8 md:py-[22px] md:px-[62px] text-base md:text-lg font-semibold h-auto w-full sm:w-auto sm:min-w-[240px]"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <FolderOpen className="w-5 h-5" />
              View portfolio
            </Button>
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square bg-[#2F81F7] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <img 
              src="/images/profile.jpeg" 
              alt="Leonardo Cagliero speaking at a blockchain conference"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
