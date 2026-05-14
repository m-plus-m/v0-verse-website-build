import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { PositioningSection } from "@/components/positioning-section"
import { SolutionCards } from "@/components/solution-cards"
import { VerseAIBlock } from "@/components/verse-ai-block"
import { WhoItsFor } from "@/components/who-its-for"
import { SocialProofBar } from "@/components/social-proof-bar"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsBar />
      <PositioningSection />
      <SolutionCards />
      <VerseAIBlock />
      <WhoItsFor />
      <SocialProofBar />
      <CTASection />
      <Footer />
    </main>
  )
}
