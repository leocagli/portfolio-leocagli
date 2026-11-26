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
  title: "Leonardo Cagliero | Product, Data and AI Automation",
  description:
    "Leonardo Cagliero, from Salta, Argentina. I build products, analyze data and automate work with AI. Founder of Cosmos Pay and Argentina.dev. Open to junior Product, Data Analyst and AI Automation roles.",
  authors: [{ name: "Leonardo Cagliero", url: "https://github.com/leocagli" }],
  openGraph: {
    title: "Leonardo Cagliero | Product, Data and AI Automation",
    description:
      "I build products, analyze data and automate work with AI. Founder of Cosmos Pay and Argentina.dev. Open to junior Product, Data Analyst and AI Automation roles.",
    url: "https://portfolio-leocagli.vercel.app",
    siteName: "Leonardo Cagliero",
    images: [{ url: "/images/profile.jpeg", width: 800, height: 800, alt: "Leonardo Cagliero" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Leonardo Cagliero | Product, Data and AI Automation",
    description:
      "I build products, analyze data and automate work with AI. Founder of Cosmos Pay and Argentina.dev.",
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
    <html lang="en" className="bg-[#eef3fb] scroll-smooth">
      <body className={`${onest.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
