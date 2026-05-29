import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductBreadcrumb } from "@/components/product-breadcrumb"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, LineChart, Presentation, Database, Upload, Target, BarChart3, PieChart } from "lucide-react"

export const metadata: Metadata = {
  title: "Explore | Audience Profiling Across 50+ Data Providers",
  description: "Explore brings 50+ data providers into one workspace so you can analyze, compare and visualize without logging into twelve platforms.",
  openGraph: {
    title: "Explore | Audience Profiling Across 50+ Data Providers",
    description: "Explore brings 50+ data providers into one workspace so you can analyze, compare and visualize without logging into twelve platforms.",
  },
}

const differentiators = [
  {
    title: "One workspace, not twelve",
    description: "50+ data providers in a single platform. No toggling, no reconciling formats, no manual merging.",
    icon: Layers,
  },
  {
    title: "Advanced analytics without coding",
    description: "Factor analysis, clustering, correspondence analysis — one click. No data science team required.",
    icon: LineChart,
  },
  {
    title: "Instant storytelling",
    description: "Custom visualizations, heatmaps and positioning maps in under 10 seconds. Built for stakeholder presentations, not analyst spreadsheets.",
    icon: Presentation,
  },
]

const capabilities = [
  {
    title: "300+ research releases",
    description: "Consumer, brand and media research from every major provider, searchable in seconds.",
    icon: Database,
  },
  {
    title: "First-party data ingestion",
    description: "Upload your own surveys and proprietary data. Combine with syndicated research, no coding.",
    icon: Upload,
  },
  {
    title: "Positioning maps",
    description: "See where your brand sits relative to competitors at a glance.",
    icon: Target,
  },
  {
    title: "One-click statistics",
    description: "CHAID, cluster, correspondence and audience effects — all accessible without programming.",
    icon: BarChart3,
  },
  {
    title: "Custom visualizations",
    description: "Charts and heatmaps in under 10 seconds.",
    icon: PieChart,
  },
  {
    title: "Direct segment transfer",
    description: "Audiences move from Explore to Plan without duplication. The segment you profiled is the segment you plan against.",
    icon: ArrowRight,
  },
]

export default function AudienceProfilingPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ProductBreadcrumb productName="Explore" categoryName="Audience Profiling" />
      
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
            profile and segment{" "}
            <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
              without the tab-switching.
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            You already subscribe to MRI Simmons, GWI, Kantar and others. Explore brings them into one workspace so you can analyze, compare and visualize without logging into twelve platforms.
          </p>
        </div>
      </section>
      
      {/* What Makes Different Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            What Makes Explore{" "}
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
      
      {/* Already Working Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Gradient background glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#F15E24]/15 blur-[100px]" />
          <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#C52F86]/15 blur-[80px]" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Already Working Directly in Provider Platforms?
          </h2>
          <div className="rounded-2xl border border-border/40 bg-card/50 p-6">
            <p className="text-muted-foreground leading-relaxed">
              GWI and MRI Simmons are great data sources. Explore lets you look across all of them at once, fuse first-party data with syndicated research, and run statistical analysis no single provider&apos;s interface supports. And the segments you build transfer directly into Plan — no rework.
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
            Start with a{" "}
            <Link href="/audience-intelligence" className="text-[#F15E24] hover:underline">Discover</Link> audience or build from scratch. Either way, segments transfer directly into{" "}
            <Link href="/media-planning" className="text-[#F15E24] hover:underline">Plan</Link>.
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border/40 bg-gradient-to-b from-background to-[#2B2D42]/30">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Get more from the research you already pay for.
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
