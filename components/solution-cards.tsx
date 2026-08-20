import Link from "next/link"
import Image from "next/image"
import { Search, Users, LayoutGrid } from "lucide-react"
import { ScrollFadeIn } from "@/components/scroll-fade-in"

const solutions = [
  {
    icon: Search,
    title: "Discover",
    description: "Find audiences from behavioral signals — social, search, browsing — without being tied to any one data source.",
    href: "/audience-intelligence",
  },
  {
    icon: Users,
    title: "Explore",
    description: "Validate with syndicated behavioral and media intelligence ecosystems across 50+ global data partners.",
    href: "/audience-analysis",
  },
  {
    icon: LayoutGrid,
    title: "Plan",
    description: "Move segments directly into media plans across 70+ media types and 46 countries. No exporting. No rebuilding.",
    href: "/media-planning",
  },
]

export function SolutionCards() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution) => (
            <Link
              key={solution.title}
              href={solution.href}
              className="group relative rounded-2xl border border-border/40 bg-card/50 p-8 transition-all hover:border-[#F15E24]/40"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F15E24]/0 to-[#C52F86]/0 opacity-0 group-hover:opacity-5 transition-opacity" />
              
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F15E24] to-[#C52F86]">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-[#F15E24] transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <ScrollFadeIn className="mt-16 flex justify-center">
          <Image
            src="/images/verse-workflow-diagram-v2.png"
            alt="Verse workflow diagram showing how Discover, Explore and Plan connect — surrounding brands, influencers, geotargeting, datasets, segments, frequency, mediamix, reach and trends around a central audience."
            width={1500}
            height={1000}
            className="h-auto w-full max-w-3xl rounded-2xl"
          />
        </ScrollFadeIn>
      </div>
    </section>
  )
}
