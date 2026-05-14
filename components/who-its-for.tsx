import { Palette, BarChart3, Building2, Radio } from "lucide-react"

const audiences = [
  {
    icon: Palette,
    title: "Creative Agencies",
    description: "Win more pitches with data-driven strategies that make your creative work harder.",
  },
  {
    icon: BarChart3,
    title: "Media Agencies",
    description: "Build dynamic audiences and plan cross-media campaigns that grow market share.",
  },
  {
    icon: Building2,
    title: "Brands",
    description: "One audience definition from research through activation. No version-of-the-truth debates.",
  },
  {
    icon: Radio,
    title: "Media Owners",
    description: "Respond to briefs faster with profiling depth that goes beyond demographics.",
  },
]

export function WhoItsFor() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
            Who it&apos;s for
          </h2>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group rounded-xl border border-border/40 bg-card/30 p-6 transition-all hover:border-accent/50 hover:bg-card/50"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                <audience.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{audience.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
