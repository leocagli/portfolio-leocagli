import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LatestSection } from "@/components/latest-section"
import { ExperienceSection } from "@/components/experience-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { AwardsSection } from "@/components/awards-section"
import { TalksSection } from "@/components/talks-section"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"
import { SiteBackgroundMount } from "@/components/three-ux/site-background-mount"

export default function Home() {
  return (
    <>
      <SiteBackgroundMount />
      <main className="relative z-10 min-h-screen">
      <Navigation />
      <HeroSection />
      <LatestSection />
      <ExperienceSection />
      <PortfolioSection />
      <AwardsSection />
      <TalksSection />
      <EducationSection />
      <Footer />
    </main>
    </>
  )
}
