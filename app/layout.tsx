import type React from "react"
import type { Metadata } from "next"

import "./globals.css"

import localFont from "next/font/local"

// Vendored so the production build does not depend on the Google Fonts API
// (next/font/google failed on Vercel with a loader TypeError).
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-latin.woff2",
  weight: "500 700",
  variable: "--font-space-grotesk",
  display: "swap",
})

const dmSans = localFont({
  src: "./fonts/DMSans-latin.woff2",
  weight: "400 600",
  variable: "--font-dm-sans",
  display: "swap",
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
