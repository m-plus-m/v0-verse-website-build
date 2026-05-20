import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "FAQ | Verse",
  description: "Frequently asked questions about Verse, the AI-powered audience intelligence platform.",
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15682102_1280_720_30fps-A6Ovhq3xP1RFIdF5FV6l7aoXZ2F3KO.mp4"
            type="video/mp4"
          />
        </video>
        
        {/* Dark base overlay */}
        <div className="absolute inset-0 bg-[#2B2D42]/90" />
        
        {/* Gradient glows */}
        <div className="absolute top-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-[#F15E24]/20 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 h-[250px] w-[250px] rounded-full bg-[#C52F86]/15 blur-[80px]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-16 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-[family-name:var(--font-display)] lowercase">
            Frequently Asked Questions
          </h1>
        </div>
      </section>
      
      {/* FAQ Content Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-center text-muted-foreground text-lg">
            FAQ content coming soon. Please check back later.
          </p>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
