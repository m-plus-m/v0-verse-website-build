export function DemoHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/15682102_1280_720_30fps-A6Ovhq3xP1RFIdF5FV6l7aoXZ2F3KO.mp4"
          type="video/mp4"
        />
      </video>
      
      {/* Dark base overlay */}
      <div className="absolute inset-0 bg-[#2B2D42]/90" />
      
      {/* Gradient glows - Orange and Magenta */}
      <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#F15E24]/25 blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/4 h-[350px] w-[350px] rounded-full bg-[#C52F86]/20 blur-[100px]" />
      <div className="absolute top-1/2 right-1/3 h-[250px] w-[250px] rounded-full bg-[#2EC4B6]/15 blur-[80px]" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center py-16">
        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-[family-name:var(--font-display)] lowercase text-foreground">
          meet{" "}
          <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
            verse
          </span>
          . start doing more than your headcount should allow
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80">
          See how teams use Discover, Explore and Plan to cover audience discovery, analysis and media planning in one contract.
        </p>
      </div>
    </section>
  )
}
