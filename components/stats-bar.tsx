export function StatsBar() {
  const stats = [
    { value: "45+", label: "Data Providers" },
    { value: "17", label: "Countries" },
    { value: "30+", label: "Media Types" },
  ]

  return (
    <section className="border-y border-border/40 bg-card/30">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
              {index < stats.length - 1 && (
                <div className="hidden sm:block h-8 w-px bg-border/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
