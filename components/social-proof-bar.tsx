"use client"

import Image from "next/image"

export function SocialProofBar() {
  const logos = [
    { src: "https://telmarhelixa.com/hubfs/collab%20logo.png", alt: "Collab" },
    { src: "https://telmarhelixa.com/hubfs/OMG.jpg", alt: "OMG" },
    { src: "https://telmarhelixa.com/hubfs/ITV.jpg", alt: "ITV" },
    { src: "https://cdn.cookielaw.org/logos/64853de7-0f2c-4b42-b99c-a04da5e8e2de/2d50c8ed-7aa7-4013-88ef-8f468fb07d80/030caa30-1171-4a0b-92a3-fef772aec019/WM_Logo_RGB_(2).png", alt: "Wavemaker" },
    { src: "https://telmarhelixa.com/hubfs/rauxa%20logo.png", alt: "Rauxa" },
    { src: "https://telmarhelixa.com/hubfs/logo-testimonial.jpg", alt: "Partner" },
    { src: "https://telmarhelixa.com/hubfs/vm.jpg", alt: "VM" },
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
