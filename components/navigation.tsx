"use client"

import { Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navLinks = [
  { href: "#latest", label: "Latest" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#talks", label: "Talks" },
  { href: "#education", label: "Education" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm container mx-auto px-4 pt-3 pb-3 md:pt-4 md:pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-4 md:px-5 py-3 max-w-4xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <a href="/" className="text-lg md:text-xl font-bold leading-none flex-shrink-0">
          Leonardo Cagliero
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-5 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[16px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            className="md:hidden bg-transparent hover:bg-gray-100 text-black p-2 h-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          <Button
            asChild
            className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0"
          >
            <a href="mailto:leocagli@gmail.com" aria-label="Email Leonardo">
              <Mail className="w-6 h-6" strokeWidth={2.5} />
            </a>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-4 border-black rounded-xl p-4 max-w-3xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
