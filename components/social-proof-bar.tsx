"use client"

export function SocialProofBar() {
  // Placeholder logos - in production, replace with actual client logos
  const logos = [
    "Global Agency",
    "MediaCorp",
    "BrandX",
    "AdNetwork",
    "InsightCo",
    "DataFirst",
  ]

  return (
    <section className="border-t border-border/40 bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Trusted by leading brands and agencies worldwide
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex h-10 min-w-[140px] items-center justify-center rounded-lg border border-border/30 bg-card/50 px-6"
              >
                <span className="text-sm font-medium text-muted-foreground/70 whitespace-nowrap">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
