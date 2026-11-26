import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import { Space_Grotesk, DM_Sans } from "next/font/google"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://leocagli.com"),
  title: "Leonardo Cagliero | Product, Data and AI Automation",
  description:
    "Leonardo Cagliero, from Salta, Argentina. I build products, analyze data and automate work with AI. Founder of Cosmos Pay and Argentina.dev. Open to junior Product, Data Analyst and AI Automation roles.",
  authors: [{ name: "Leonardo Cagliero", url: "https://github.com/leocagli" }],
  openGraph: {
    title: "Leonardo Cagliero | Product, Data and AI Automation",
    description:
      "I build products, analyze data and automate work with AI. Founder of Cosmos Pay and Argentina.dev. Open to junior Product, Data Analyst and AI Automation roles.",
    url: "https://leocagli.com",
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
    <html lang="en" className="bg-[#0a1020] scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans antialiased overflow-x-hidden`}>{children}</body>
    </html>
  )
}
