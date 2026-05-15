export function FeatureCallouts() {
  const features = [
    {
      title: "Feature One",
      description: "Placeholder description for feature one. This explains the key benefit and value proposition of this feature.",
    },
    {
      title: "Feature Two", 
      description: "Placeholder description for feature two. This explains the key benefit and value proposition of this feature.",
    },
    {
      title: "Feature Three",
      description: "Placeholder description for feature three. This explains the key benefit and value proposition of this feature.",
    },
    {
      title: "Feature Four",
      description: "Placeholder description for feature four. This explains the key benefit and value proposition of this feature.",
    },
  ]

  return (
    <section className="relative overflow-hidden py-24">
      {/* Gradient glows - matching hero section */}
      <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-[#F15E24]/20 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[450px] w-[450px] rounded-full bg-[#C52F86]/15 blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] rounded-full bg-[#2EC4B6]/10 blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-24">
          {features.map((feature, index) => {
            const isEven = index % 2 === 0
            
            return (
              <div 
                key={index}
                className={`flex flex-col gap-8 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Text content */}
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-bold font-[family-name:var(--font-display)] lowercase sm:text-4xl">
                    <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
                      {feature.title}
                    </span>
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Image placeholder */}
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 flex items-center justify-center">
                    <span className="text-muted-foreground">Image Placeholder</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
