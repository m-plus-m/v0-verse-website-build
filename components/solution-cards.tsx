import { Search, Users, LayoutGrid } from "lucide-react"

const solutions = [
  {
    icon: Search,
    title: "Discover",
    description: "Find audiences from behavioral signals — social, search, browsing — without being tied to any one data source.",
  },
  {
    icon: Users,
    title: "Explore",
    description: "Profile and segment across 45+ data providers in one workspace instead of twelve browser tabs.",
  },
  {
    icon: LayoutGrid,
    title: "Plan",
    description: "Move segments directly into media plans across 70+ media types across 46 countries. No exporting. No rebuilding.",
  },
]

export function SolutionCards() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group relative rounded-2xl border border-border/40 bg-card/50 p-8 transition-all hover:border-[#F15E24]/40"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F15E24]/0 to-[#C52F86]/0 opacity-0 group-hover:opacity-5 transition-opacity" />
              
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F15E24] to-[#C52F86]">
                  <solution.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
