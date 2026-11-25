import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LatestSection } from "@/components/latest-section"
import { ExperienceSection } from "@/components/experience-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { EducationSection } from "@/components/education-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <LatestSection />
      <ExperienceSection />
      <PortfolioSection />
      <EducationSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
