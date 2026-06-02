import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductBreadcrumb } from "@/components/product-breadcrumb"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Database, RefreshCw, Users, Sparkles, MessageSquare, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Discover | Audience Intelligence Built on Real Human Data",
  description: "Discover builds audiences from observed human behavior fused with gold-standard consumer research. Real audiences, not AI guesswork.",
  openGraph: {
    title: "Discover | Audience Intelligence Built on Real Human Data",
    description: "Discover builds audiences from observed human behavior fused with gold-standard consumer research. Real audiences, not AI guesswork.",
  },
}

const differentiators = [
  {
    title: "Observed, not inferred",
    description: "We track what real people search, browse, watch and engage with. Surveys capture the aspirational self. We capture the authentic self.",
    icon: Eye,
  },
  {
    title: "Data you can't get from a chatbot",
    description: "Proprietary behavioral data fused with MRI Simmons, GWI and Kantar — the only direct fusion in the market. Census-weighted across 20+ countries.",
    icon: Database,
  },
  {
    title: "Updated weekly",
    description: "Surveys release every 6–12 months. LLMs freeze at training time. Discover refreshes weekly.",
    icon: RefreshCw,
  },
]

const capabilities = [
  {
    title: "Micro-segmentation",
    description: "K-means clustering surfaces niche communities hidden inside broad audiences. Seconds, not weeks.",
    icon: Users,
  },
  {
    title: "90 psychographic traits",
    description: "ML-derived lifestyle profiles — from \"Citizen Sleuths\" to \"Professional Tech Lovers\" — that surveys can't surface.",
    icon: Sparkles,
  },
  {
    title: "Influencer identification",
    description: "Ranked by audience quality and alignment, not follower count.",
    icon: Users,
  },
  {
    title: "Data fusion",
    description: "The only direct fusion of social behavioral data with MRI Simmons, GWI and Kantar.",
    icon: Database,
  },
  {
    title: "Conversation monitoring",
    description: "Track cultural trends in real time. Build audiences from keywords, hashtags and mentions as engagement forms.",
    icon: MessageSquare,
  },
  {
    title: "AI query builder (Stanley)",
    description: "10 hours of cross-tabbing in 10 minutes. Audience recommendations, proxy suggestions and psychographic summaries on demand.",
    icon: Zap,
  },
]

export default function AudienceIntelligencePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <ProductBreadcrumb productName="Discover" categoryName="Audience Intelligence" />
      
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
            real audiences.{" "}
            <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
              not AI guesswork.
            </span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover builds audiences from observed human behavior fused with gold-standard consumer research.
          </p>
        </div>
      </section>
      
      {/* AI Differently Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            We Use AI Too —{" "}
            <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
              Differently
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Machine learning powers our segmentation and psychographic modeling. Our AI query builder, Stanley, surfaces audiences and generates strategic profiles in seconds. The difference: our AI analyzes real behavioral data, normalized to reflect the actual population. No synthetic audiences or assumptions made from publicly available information. AI is the engine, not the source.
          </p>
        </div>
      </section>
      
      {/* What Makes Different Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            What Makes Discover{" "}
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
            Already Using Research or Social Tools?
          </h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/40 bg-card/50 p-6">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">If you use MRI Simmons, GWI or Kantar:</span>{" "}Discover doesn&apos;t replace them — it supercharges them. Surveys tell you they buy Tide. Discover tells you why — they&apos;re sustainably minded parents who follow eco-influencers and engage in parenting communities.
              </p>
            </div>
            <div className="rounded-2xl border border-border/40 bg-card/50 p-6">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">If you use social listening tools:</span> those tools track what people say. Discover tells you who they are, why they act, and where to find them — grounded in census-weighted panel data, not platform-dependent social graphs.
              </p>
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
      
      {/* Flow Section */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Audiences from Discover flow directly into{" "}
            <Link href="/media-planning" className="text-[#F15E24] hover:underline">Plan</Link> for media planning.{" "}
            <span className="text-foreground font-semibold">The audience you built is the audience you optimize against.</span>
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="border-t border-border/40 bg-gradient-to-b from-background to-[#2B2D42]/30">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            See the difference real data makes.
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
