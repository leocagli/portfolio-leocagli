import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Onest, Geist_Mono as V0_Font_Geist_Mono } from "next/font/google"

// Initialize fonts
const _geistMono = V0_Font_Geist_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Initialize Onest font with weights 500 and 700
const onest = Onest({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-onest",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-leocagli.vercel.app"),
  title: "Leonardo Cagliero | AI & Web3 Product Strategist",
  description: "AI & Web3 Product Strategist, Fintech Infrastructure Builder, and Ecosystem Contributor from LATAM. Building programmable coordination systems using AI agents, stablecoin payments, and smart contracts.",
  keywords: ["Web3", "AI agents", "Stellar", "Soroban", "stablecoins", "fintech", "LATAM", "smart contracts", "hackathons"],
  authors: [{ name: "Leonardo Cagliero", url: "https://github.com/leocagli" }],
  openGraph: {
    title: "Leonardo Cagliero | AI & Web3 Product Strategist",
    description: "Building programmable coordination systems using AI agents, stablecoin payments, and smart contracts. Hackathon winner across the Stellar ecosystem.",
    url: "https://portfolio-leocagli.vercel.app",
    siteName: "Leonardo Cagliero",
    images: [{ url: "/images/profile.jpeg", width: 800, height: 800, alt: "Leonardo Cagliero" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Leonardo Cagliero | AI & Web3 Product Strategist",
    description: "AI & Web3 Product Strategist, Fintech Infrastructure Builder, and Ecosystem Contributor from LATAM.",
    creator: "@leocagli",
    images: ["/images/profile.jpeg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
