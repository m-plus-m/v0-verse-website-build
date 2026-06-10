import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Login | Verse",
  description: "Access your Verse products. Login to Discover, Explore, Plan and supporting tools.",
  openGraph: {
    title: "Login | Verse",
    description: "Access your Verse products. Login to Discover, Explore, Plan and supporting tools.",
  },
}

const featuredProducts = [
  {
    label: "Audience Intelligence",
    title: "Discover",
    description:
      "Understand what audiences care about, what influences them and how cultural forces shape their decisions.",
    loginUrl: "https://home.helixa.ai/login",
  },
  {
    label: "Audience Analysis",
    title: "Explore",
    description:
      "Analyze thousands of psychographic, behavioural, product, lifestyle and media variables to transform consumer data complexity into strategic clarity.",
    loginUrl: "https://explore.telmar.com/login",
  },
  {
    label: "Media Planning",
    title: "Plan",
    description:
      "Bring fragmented media planning into one optimization workflow to model reach, compare scenarios and optimize cross-channel media mixes in seconds.",
    loginUrl: "https://plan.telmar.com/login",
  },
]

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Page Header */}
      <section className="relative overflow-hidden pt-32 pb-12">
        {/* Gradient glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#F15E24]/15 blur-[120px]" />
          <div className="absolute top-10 left-1/4 h-[350px] w-[350px] rounded-full bg-[#C52F86]/15 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl font-[family-name:var(--font-display)] lowercase">
            Login
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Existing customers, please select your product login
          </p>
        </div>
      </section>

      {/* Top Tier — Featured Products */}
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-12">
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <div
                key={product.title}
                className="relative flex flex-col overflow-hidden rounded-2xl border border-border/40 bg-card/50 p-8 transition-all hover:border-[#F15E24]/40"
              >
                {/* Gradient top accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#F15E24] to-[#C52F86]" />
                <p className="text-sm font-medium uppercase tracking-wide text-[#F15E24]">
                  {product.label}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-foreground">{product.title}</h2>
                <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={product.loginUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className="w-full bg-gradient-to-r from-[#F15E24] to-[#C52F86] text-white hover:opacity-90 border-0">
                      Login
                    </Button>
                  </a>
                  <Link href="https://verse.telmarhelixa.com/demo" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Request Access
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Tier — Supporting Tools */}
      <section className="border-t border-border/40">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Data Loader */}
            <div className="flex flex-col rounded-xl border border-border/40 bg-card/30 p-5 transition-all hover:border-border">
              <h3 className="text-lg font-semibold text-foreground">Data Loader</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                Unlock the full potential of your data by bridging the gap between data loading and data analysis.
                Effortlessly load your proprietary data and instantly run any insights analysis in{" "}
                <Link href="/audience-analysis" className="text-[#F15E24] hover:underline">
                  Explore
                </Link>
                .
              </p>
              <a
                href="https://dataloader.telmar.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-medium text-[#F15E24] hover:underline"
              >
                Login
              </a>
            </div>

            {/* US Audio */}
            <div className="flex flex-col rounded-xl border border-border/40 bg-card/30 p-5 transition-all hover:border-border">
              <h3 className="text-lg font-semibold text-foreground">US Audio</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                Optimize your audio plans and fine tune media strategies for targeted reach and maximum engagement.
              </p>
              <a
                href="https://usaudio.telmar.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-medium text-[#F15E24] hover:underline"
              >
                Login
              </a>
            </div>

            {/* US OOH */}
            <div className="flex flex-col rounded-xl border border-border/40 bg-card/30 p-5 transition-all hover:border-border">
              <h3 className="text-lg font-semibold text-foreground">US OOH</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
                Create tailored OOH media plans and strategies for specific locations with multi-market data and
                analysis.
              </p>
              <a
                href="https://usooh.telmar.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-medium text-[#F15E24] hover:underline"
              >
                Login
              </a>
            </div>

            {/* eTelmarAccess */}
            <div className="flex flex-col rounded-xl border border-border/40 bg-card/30 p-5 transition-all hover:border-border">
              <h3 className="text-lg font-semibold text-foreground">eTelmarAccess</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">Regional platform access</p>
              <div className="mt-4 flex flex-col gap-2">
                <a
                  href="https://et221.etelmar.net/vpn/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#F15E24] hover:underline"
                >
                  North America
                </a>
                <a
                  href="https://et211.etelmar.net/vpn/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#F15E24] hover:underline"
                >
                  Europe
                </a>
                <a
                  href="https://et201.etelmar.net/vpn/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#F15E24] hover:underline"
                >
                  Africa
                </a>
                <a
                  href="https://et221.etelmar.net/vpn/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-[#F15E24] hover:underline"
                >
                  APAC
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
