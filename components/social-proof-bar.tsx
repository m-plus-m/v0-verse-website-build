"use client"

export function SocialProofBar() {
  // Logos mixed up (not alphabetical)
  const logos = [
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ITV_logo_2013.svg-C57uImq5n31hii7v0iEYWJJGy4tf27.png", alt: "ITV" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Amazon_Studios_logo-83wq0SH6eStgTU7fPDySedCH3UICEX.png", alt: "Amazon Studios" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Johnson_and_Johnson_Logo.svg-gnVio9PLuwq3un5GyVDbgYrOlWfDgN.png", alt: "Johnson & Johnson" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WPP_Logo_RGB_Navy-pqDZV7Hs4G7JMLstWrbJngigKH4WS4.png", alt: "WPP" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hulu_logo_%282018%29.svg-ROQQydbfyppEyufmj43JXkE4zLJaFS.png", alt: "Hulu" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Publicis_logo.svg-uHE4SkLcajwaJ0ctWB6gTxrZyLBlmB.png", alt: "Publicis Groupe" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FOX_Sports_logo.svg-1AmhmEV95wzN2XpPnaAsReKcUNHpnM.png", alt: "Fox Sports" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/havas-XnPRiupjm6yU0Isx9inoaoKSibpAnN.png", alt: "Havas" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple-Logo-vdbaxfVO9GFEJE8NP6DqoixZZwWudo.png", alt: "Apple" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Octagon_New-vIP1E85rkrPDdURYhxEsbROhXppwtH.png", alt: "Octagon" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sP4VdbyMFGCo6Yy1bjgVdx43LbROxH0b-j7xuGtNoYfYkbPgWKRFh1GS5sRFXve.png", alt: "Wieden+Kennedy" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AMC_Networks_2021_logo-Bk062o9qhxOxzmgK6DBIPGOlHVJNnG.png", alt: "AMC Networks" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fusion92-Logo_blue2x-cZA9RRe1kmeUgCCAkNPcwTxqcJQSO7.png", alt: "Fusion92" },
  ]

  return (
    <section className="border-t border-border/40 bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Powered by TelmarHelixa. Trusted by leading agencies, media companies and brands worldwide.
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll items-center gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex h-20 min-w-[180px] items-center justify-center rounded-lg bg-white px-6"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 w-auto max-w-[160px] object-contain"
                />
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
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  )
}
