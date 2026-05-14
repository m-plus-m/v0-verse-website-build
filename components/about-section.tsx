export function AboutSection() {
  return (
    <section className="relative border-t border-border/40 overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#F15E24] via-[#C52F86] to-[#5EC4B6]" />
      
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
              The Heritage
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
              Built on 50+ years of audience understanding
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              TelmarHelixa is a B2B audience intelligence and media planning company 
              with over five decades of heritage in understanding audiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Verse is powered by TelmarHelixa&apos;s robust data infrastructure, 
              research partnerships, and global platform—now enhanced with an 
              AI layer that makes insights instantly accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
