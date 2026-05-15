"use client"

export function SocialProofBar() {
  const logos = [
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dla-sUQ2yaT8FejXIqGp3LrsywiJQJybZ0.png", alt: "DLA Piper" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hulu-gplWC3WJ20BmnMXdzvqhKVQ2m1tKGC.png", alt: "Hulu" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22squared-vlHwZMjYbYNT5IdUBGMzYydeoNPsX5.png", alt: "22squared" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple-UojpnIX693uv7dXNIaPcuYs2JDXxma.png", alt: "Apple" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/caa-AMXknxzB9rjzLlg0PIGnfrTvcWT82j.png", alt: "CAA" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/johnson-and-johnson-oN6SWQjWUf4MwfS20Zdr7TR7YIIK4p.png", alt: "Johnson & Johnson" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ipg-mediabrands-304EDjL7j8zhRMlgsSVxgWaafp0ALx.png", alt: "IPG Mediabrands" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fox-sports-W1YZna8PzsYdX7wfca7naPlkWDOp7P.png", alt: "Fox Sports" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fusion92-6FEr490TwBMKHatlJNQZzDbHAzEfhq.png", alt: "Fusion92" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amazon-studios-xMvZ2OXxWFAvfmDTVwb7Q7OQZFBc3J.png", alt: "Amazon Studios" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mediacom-HurLzLOP56kGAN6jLa0tYw9PeXyPdl.png", alt: "Mediacom" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itv-WKFM0xDQq1tTfMkYf7NV81N1Sl8c9u.png", alt: "ITV" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/havas-HXjW1ySx4Rg54P6fQD09sMlGsxrOP7.png", alt: "Havas" },
    { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/amc-networks-DpUnkcj4RDqTugf1WzOvNIzw24X8Ah.png", alt: "AMC Networks" },
  ]

  return (
    <section className="border-t border-border/40 bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <p className="mb-8 text-center text-sm text-muted-foreground">
          Powered by TelmarHelixa. Trusted by leading agencies, media companies and brands worldwide.
        </p>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll items-center gap-12">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex h-16 min-w-[140px] items-center justify-center px-4"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto max-w-[140px] object-contain opacity-80 hover:opacity-100 transition-opacity"
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
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  )
}
