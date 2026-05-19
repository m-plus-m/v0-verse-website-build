import type { Metadata } from "next"
import { Header } from "@/components/header"
import { EarlyAccessHero } from "@/components/early-access-hero"
import { EarlyAccessForm } from "@/components/early-access-form"
import { SocialProofBar } from "@/components/social-proof-bar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Get Early Access | Verse",
  description: "Be first to use Verse AI. Get a hands-on preview of the Verse AI workflow before launch and direct input into how the product works for your team.",
  openGraph: {
    title: "Get Early Access to Verse AI",
    description: "Join the limited beta and help shape the future of audience intelligence.",
  },
}

export default function EarlyAccessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <EarlyAccessHero />
      <EarlyAccessForm />
      <SocialProofBar />
      <Footer />
    </main>
  )
}
