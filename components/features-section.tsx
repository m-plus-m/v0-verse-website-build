import { Brain, Target, Zap, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Intelligent audience analysis built on decades of research.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Identify and reach your ideal consumers with confidence.",
  },
  {
    icon: Zap,
    title: "Instant Intelligence",
    description: "Transform complex data into actionable strategies.",
  },
  {
    icon: BarChart3,
    title: "Global Reach",
    description: "Access audience insights across markets worldwide.",
  },
]

export function FeaturesSection() {
  return (
    <section className="relative border-t border-border/40 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-border/40 bg-card/50 p-6 transition-all hover:border-border hover:bg-card"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <feature.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
