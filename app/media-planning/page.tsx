import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductBreadcrumb } from "@/components/product-breadcrumb"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Tv, Database, Globe, BarChart3, Layers, Gauge, Sparkles, PlusCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Plan | Cross-Channel Media Planning Across 70+ Media Types",
  description: "Plan uses the segments your team already built — so the audience you researched is the audience you reach. 70+ media types in 46 countries.",
  openGraph: {
    title: "Plan | Cross-Channel Media Planning Across 70+ Media Types",
    description: "Plan uses the segments your team already built — so the audience you researched is the audience you reach. 70+ media types in 46 countries.",
  },
}

const differentiators = [
  {
    title: "Flexible media modeling — no subscription required",
    description: "Not every campaign fits neatly inside a syndicated survey. Plan lets teams model digital and traditional media mixes with or without subscriptions, opening up planning flexibility most platforms can't support.",
    icon: Database,
  },
  {
    title: "Audience fidelity from insight to plan",
    description: "Custom audiences keep their full definition from research through planning. No approximation. No manual rebuild. The audience you build is the audience you optimize against.",
    icon: Users,
  },
  {
    title: "70+ touchpoints unified instantly",
    description: "Social, TV, Audio, Digital, Retail media, OOH, Print and more. Online and offline media are measured through one unified currency view, so fragmented channels finally plan like one campaign.",
    icon: Tv,
  },
]

const capabilities = [
  {
    title: "Flexible media modeling",
    description: "Model cross-channel media mixes with or without syndicated survey subscriptions.",
    icon: Database,
  },
  {
    title: "Dynamic reach curves",
    description: "See how channels work together before budget is committed. Reach and duplication modeled automatically across the mix.",
    icon: Gauge,
  },
  {
    title: "Cross-channel planning",
    description: "Reach, frequency and investment unified across 70+ touchpoints.",
    icon: Tv,
  },
  {
    title: "Multi-survey planning",
    description: "Combine channels from multiple surveys into one unified reach view.",
    icon: Layers,
  },
  {
    title: "Scenario testing",
    description: "Shift budgets. Test media mixes. Compare outcomes instantly.",
    icon: BarChart3,
  },
  {
    title: "Stanley planning intelligence",
    description: "From audience to optimized media mix in seconds. Stanley recommends channels, shapes media briefs and accelerates planning decisions.",
    icon: Sparkles,
  },
  {
    title: "Custom channel creation",
    description: "Create custom channels and planning scenarios around the campaign you need — not the limits of any data subscription.",
    icon: PlusCircle,
  },
]

export default function MediaPlanningPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ProductBreadcrumb productName="Plan" categoryName="Media Planning" />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-28">
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
            plan across every channel{" "}
            <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
              with one audience.
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Most planning tools make you rebuild your audience from scratch. Plan uses the segments your team already built — so the audience you researched is the audience you reach.
          </p>
        </div>
      </section>
      
      {/* What Makes Different Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            What Makes Plan{" "}
            <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-border/40 bg-card/50 p-8 transition-all hover:border-[#F15E24]/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F15E24] to-[#C52F86]">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Already Using Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Gradient background glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#F15E24]/15 blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#C52F86]/15 blur-[80px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Already Using Other Planning Tools?
          </h2>
          <div className="rounded-2xl border border-border/40 bg-card/50 p-6">
            <p className="text-muted-foreground leading-relaxed">
              Traditional planning tools were built for siloed media. Plan unifies online and offline channels into one currency view, making reach, frequency and duplication easier to measure across the entire media mix, with or without a data subscription.
            </p>
          </div>
        </div>
      </section>
      
      {/* Capabilities Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Capabilities
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-xl border border-border/40 bg-card/50 p-6 transition-all hover:border-[#F15E24]/40"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#F15E24] to-[#C52F86]">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Flow Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Plan completes the workflow. Audiences from{" "}
            <Link href="/audience-intelligence" className="text-[#F15E24] hover:underline">Discover</Link> and{" "}
            <Link href="/audience-analysis" className="text-[#F15E24] hover:underline">Explore</Link> arrive ready to plan against — no translation, no rebuilt segments.
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border/40 bg-gradient-to-b from-background to-[#2B2D42]/30">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Plan against the audience you actually researched.
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
