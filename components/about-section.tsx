export function AboutSection() {
  return (
    <section className="relative border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">
              The Heritage
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
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
