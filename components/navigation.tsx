"use client"

import { Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">B.D</span>
        </div>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            About
          </a>
          <a href="#services" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Services
          </a>
          <a href="#portfolio" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Portfolio
          </a>
          <a href="#experience" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity">
            Experience
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Button 
            className="md:hidden bg-transparent hover:bg-gray-100 text-black p-2 h-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
          <Button className="bg-black text-white hover:bg-black/90 rounded-sm px-5 h-12 min-w-[48px] flex-shrink-0">
            <Mail className="w-6 h-6" strokeWidth={2.5} />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-4 border-black rounded-xl p-4 max-w-2xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4">
            <a href="#about" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#services" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="#portfolio" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>
              Portfolio
            </a>
            <a href="#experience" className="text-[18px] font-bold leading-[20px] hover:opacity-70 transition-opacity" onClick={() => setIsMenuOpen(false)}>
              Experience
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
