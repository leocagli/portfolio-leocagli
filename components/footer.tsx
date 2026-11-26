"use client"

import { Linkedin, Github, Twitter, Mail } from "lucide-react"
import { motion } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#latest", label: "Latest" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#talks", label: "Talks" },
  { href: "#education", label: "Education" },
]

const projectLinks = [
  { href: "https://cosmospay.lat", label: "cosmospay.lat" },
  { href: "https://cosmosapp.lat", label: "cosmosapp.lat" },
  { href: "#projects", label: "Argentina.dev" },
  { href: "https://github.com/Bitcoindefi/runa", label: "Runa" },
  { href: "https://github.com/Bitcoindefi/agentic-city", label: "Agentic City" },
  { href: "https://github.com/Bitcoindefi", label: "More on GitHub" },
]

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 border-t-4 border-black">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <span className="text-xl font-bold block mb-4">Leonardo Cagliero</span>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Product, Data and AI Automation. From Salta, Argentina. Open to junior Product, Data Analyst and AI
                Automation roles.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/leocagli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#2F81F7] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/leocagli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0B0B0B] border-2 border-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/leocagli"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#0B0B0B] border-2 border-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="X/Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="mailto:leocagli@gmail.com"
                  className="w-10 h-10 bg-[#FF6B7A] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Navigation</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Projects</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {projectLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:leocagli@gmail.com" className="hover:text-white transition-colors">
                    leocagli@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <a
                    href="https://linkedin.com/in/leocagli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    /in/leocagli
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <a
                    href="https://github.com/leocagli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @leocagli
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Twitter className="w-4 h-4" />
                  <a
                    href="https://x.com/leocagli"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @leocagli
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <motion.div
            className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>Built from Salta, Argentina.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
