import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Verse Products | Consumer Insights, Audience Analysis & Media Planning",
  description: "Three engines, one workflow. Discover, Explore and Plan keep your audience fidelity from insights to plan and activation.",
  openGraph: {
    title: "Verse Products | Consumer Insights, Audience Analysis & Media Planning",
    description: "Three engines, one workflow. Discover, Explore and Plan keep your audience fidelity from insights to plan and activation.",
  },
}

const workflowSteps = [
  {
    number: "01",
    title: "Build Your Audience",
    description: "Define segments from observed behavior, psychographics and cultural signals.",
    href: "/audience-intelligence",
  },
  {
    number: "02",
    title: "Validate with Fused Data",
    description: <>Validate with syndicated behavioral and media intelligence ecosystems across <a href="https://telmarhelixa.com/datahub" target="_blank" rel="noopener noreferrer" className="text-[#F15E24] hover:underline">50+ global data partners</a>.</>,
    href: "/audience-analysis",
  },
  {
    number: "03",
    title: "Optimize Your Media Plan",
    description: "Activate audiences across 70+ media types with unified reach and frequency.",
    href: "/media-planning",
  },
]

const productCards = [
  {
    name: "Discover",
    description: "Real audiences from real behavior. Social, search, browsing and app signals — fused with gold-standard consumer research. Not AI guesswork.",
    href: "/audience-intelligence",
  },
  {
    name: "Explore",
    description: "50+ data providers in one workspace. Profile, segment and visualize without the tab-switching.",
    href: "/audience-analysis",
  },
  {
    name: "Plan",
    description: "Cross-channel media planning across 70+ media types in 46 countries. The audience you researched is the audience you reach.",
    href: "/media-planning",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
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
        <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#F15E24]/20 blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 h-[350px] w-[350px] rounded-full bg-[#C52F86]/15 blur-[80px]" />
        
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center py-20">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-[family-name:var(--font-display)] lowercase">
            meet{" "}
            <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
              verse
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            The only platform that keeps audiences at full definition from insight to plan. For pitches that win and campaigns that land.
          </p>
        </div>
      </section>
      
      {/* Workflow Section */}
      <section className="border-t border-border/40 bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3 relative">
            {/* Connecting line - desktop only */}
            <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-gradient-to-r from-[#F15E24] via-[#C52F86] to-[#F15E24]" />
            
            {workflowSteps.map((step, index) => (
              <Link 
                key={step.number} 
                href={step.href}
                className="group relative text-center"
              >
                {/* Step number */}
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#F15E24] to-[#C52F86] text-white font-bold text-xl transition-transform group-hover:scale-105">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[#F15E24] transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                {/* Arrow between steps - mobile only */}
                {index < workflowSteps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <ArrowRight className="h-6 w-6 text-[#F15E24] rotate-90" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Product Cards Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-8 md:grid-cols-3">
            {productCards.map((product) => (
              <Link 
                key={product.name} 
                href={product.href}
                className="group relative rounded-2xl border border-border/40 bg-card/50 p-8 transition-all hover:border-[#F15E24]/40 hover:shadow-lg hover:shadow-[#F15E24]/5"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F15E24]/0 to-[#C52F86]/0 opacity-0 group-hover:opacity-5 transition-opacity" />
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-[#F15E24] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mt-6 flex items-center text-[#F15E24] font-medium">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Connecting Line / Pull Quote */}
      <section className="relative py-16 overflow-hidden">
        {/* Gradient background glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#F15E24]/15 blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#C52F86]/15 blur-[80px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
            The audience your strategist builds is the audience your planner optimizes against.{" "}
            <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
              No lossy handoffs between tools.
            </span>
          </h2>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border/40 bg-gradient-to-b from-background to-[#2B2D42]/30">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Ready to see it in action?
          </h2>
          <div className="mt-10">
            <Link href="/demo">
              <Button size="lg" className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] text-white hover:opacity-90 gap-2 px-8 border-0">
                Book a Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
