"use client"

import Image from "next/image"

export function SocialProofBar() {
  const logos = [
    { src: "https://telmarhelixa.com/hubfs/collab%20logo.png", alt: "Collab" },
    { src: "https://telmarhelixa.com/hubfs/OMG.jpg", alt: "OMG" },
    { src: "https://telmarhelixa.com/hubfs/ITV.jpg", alt: "ITV" },
    { src: "https://telmarhelixa.com/hubfs/%C6%B5avemaker.jpg", alt: "Wavemaker" },
    { src: "https://telmarhelixa.com/hubfs/rauxa%20logo.png", alt: "Rauxa" },
    { src: "https://telmarhelixa.com/hubfs/logo-testimonial.jpg", alt: "Partner" },
    { src: "https://telmarhelixa.com/hubfs/vm.jpg", alt: "VM" },
  ]

  return (
    <section className="border-t border-border/40 bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Trusted by leading brands and agencies worldwide
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll items-center gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex h-14 min-w-[140px] items-center justify-center rounded-lg bg-white px-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 w-auto max-w-[120px] object-contain"
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
