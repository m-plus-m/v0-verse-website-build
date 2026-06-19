"use client"

export function EarlyAccessHero() {
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
      
      {/* Gradient glows */}
      <div className="absolute top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#F15E24]/20 blur-[100px]" />
      <div className="absolute bottom-1/3 left-1/4 h-[350px] w-[350px] rounded-full bg-[#C52F86]/15 blur-[90px]" />
      
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center py-16">
        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-[family-name:var(--font-display)] lowercase text-foreground">
          Be first to use{" "}
          <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
            Verse AI.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80">
          Audience discovery to media plan and activation — in one AI-powered workflow.
        </p>
      </div>
    </section>
  )
}
