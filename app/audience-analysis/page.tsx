import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductBreadcrumb } from "@/components/product-breadcrumb"
import { Button } from "@/components/ui/button"
import { ArrowRight, Layers, LineChart, Presentation, Database, Upload, BarChart3, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Explore | Audience Analysis, Market Segmentation & Cross Channel Intelligence",
  description: "Explore transforms fragmented research into clear, strategic audience intelligence through advanced segmentation, visual analytics and intuitive statistical exploration.",
  openGraph: {
    title: "Explore | Audience Analysis, Market Segmentation & Cross Channel Intelligence",
    description: "Explore transforms fragmented research into clear, strategic audience intelligence through advanced segmentation, visual analytics and intuitive statistical exploration.",
  },
}

const differentiators = [
  {
    title: "Complexity in. Clarity out.",
    description: "Explore transforms complex datasets, fragmented cross-tabs and overwhelming research outputs into audience intelligence teams can actually use.",
    icon: Layers,
  },
  {
    title: "Advanced analytics without the friction",
    description: "Clustering, segmentation and statistical exploration no longer need specialist analysts or weeks of manual work. Explore simplifies the path from question to insight.",
    icon: LineChart,
  },
  {
    title: "Visualization built for understanding",
    description: "Heatmaps, dynamic charting and visual audience analysis surface patterns instantly. Complex data becomes easier to interpret, share and act on.",
    icon: Presentation,
  },
]

const capabilities = [
  {
    title: "Audience segmentation",
    description: "Surface meaningful audience groups hidden inside complex datasets.",
    icon: Layers,
  },
  {
    title: "Data ingestion to insight",
    description: "Bring first-party and third-party research into one code-free workflow.",
    icon: Upload,
  },
  {
    title: "Instant visual storytelling",
    description: "Turn complex research into heatmaps, comparisons and custom visuals in seconds. Patterns surface faster. Strategy gets sharper.",
    icon: Presentation,
  },
  {
    title: "Global restech data hub",
    description: "Access 300+ consumer, brand and media research releases from 50+ data providers globally, including MRI Simmons, GWI and Kantar, all in one data-neutral environment.",
    icon: Database,
  },
  {
    title: "Statistical exploration",
    description: "Advanced analytics without the specialist dependency. Explore simplifies complex statistical workflows so more teams can move from data to direction faster.",
    icon: LineChart,
  },
  {
    title: "Advanced analytics. No coding needed.",
    description: "Surface correlations, patterns and decision drivers with intuitive statistical tools that put deeper analysis in more hands.",
    icon: BarChart3,
  },
  {
    title: "One-step segmentation to planning",
    description: "Move saved audience groups directly from Explore into Plan, preserving audience logic, fidelity and structure from insight to activation.",
    icon: ArrowRight,
  },
  {
    title: "AI query builder (Stanley)",
    description: "Surface relevant variables, summarize audience findings and shape strategic narratives on demand.",
    icon: Sparkles,
  },
]

export default function AudienceAnalysisPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ProductBreadcrumb productName="Explore" categoryName="Audience Analysis" />
      
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
            Make sense of complex audiences.{" "}
            <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
              Faster.
            </span>
          </h1>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore transforms fragmented research into clear, strategic audience intelligence through advanced segmentation, visual analytics and intuitive statistical exploration — eliminate the bottlenecks of traditional analysis workflows. Advanced analytics. Without the complexity trap.
              </p>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/explore-data-scale.png"
                alt="Explore data scale — 45+ countries, 20 years of global surveys, 32 global data partnerships and 700 data sets loaded annually visualized with audience charts"
                width={700}
                height={530}
                className="w-full"
              />
            </div>
          </div>
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
        
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-foreground mb-8">
            Already Using Consumer Research Tools?
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-center gap-10">
            <div className="lg:w-1/2 flex flex-col gap-6">
              <div className="rounded-2xl border border-border/40 bg-card/50 p-6">
                <p className="text-muted-foreground leading-relaxed">
                  If you use MRI Simmons, GWI, Kantar or any of the 50+ data providers connected to TelmarHelixa, Explore helps you move beyond static cross-tabs and spreadsheet chaos. Faster segmentation. Clearer visualization. Audience intelligence at the speed strategy now moves.
                </p>
              </div>
              <div className="rounded-2xl border border-border/40 bg-card/50 p-6">
                <p className="text-muted-foreground leading-relaxed">
                  If your teams still rely on manual cross-tabbing, Explore turns slow, fragmented analysis into clear audience intelligence. Less spreadsheet wrangling. More strategic clarity.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/images/explore-data-providers.png"
                alt="Explore at the center of leading research and measurement providers including MRI Simmons, Kantar, Nielsen, GWI, Ipsos, YouGov, comscore, Barb and more"
                width={600}
                height={600}
                className="w-full max-w-md mx-auto"
              />
            </div>
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
      
      {/* From Insight to Activation Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-2xl font-semibold leading-relaxed text-foreground text-balance">
            Audiences from Explore flow directly into{" "}
            <Link
              href="/media-planning"
              className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent hover:opacity-80"
            >
              Plan
            </Link>{" "}
            for media planning and activation. The audience you built is the audience you optimize against.
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
