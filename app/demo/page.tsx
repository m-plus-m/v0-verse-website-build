import { Metadata } from "next"
import { Header } from "@/components/header"
import { DemoHero } from "@/components/demo-hero"
import { SocialProofBar } from "@/components/social-proof-bar"
import { DemoForm } from "@/components/demo-form"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Book a Demo | Verse",
  description: "See how teams are using Discover, Explore and Plan to get from audience insight to media plan faster. Request a demo of Verse today.",
  openGraph: {
    title: "Book a Demo | Verse",
    description: "See how teams are using Discover, Explore and Plan to get from audience insight to media plan faster. Request a demo of Verse today.",
  },
}

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <DemoHero />
      <SocialProofBar />
      <DemoForm />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
