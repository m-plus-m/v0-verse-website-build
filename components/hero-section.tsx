"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Subtle gradient glow */}
      <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[100px]" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-accent" />
          <span>Powered by 50+ years of audience intelligence</span>
        </div>
        
        <h1 className="text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
          Know your audience.{" "}
          <span className="text-muted-foreground">Reach them effectively.</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
          Verse puts AI at the heart of audience intelligence—helping you identify 
          ideal consumers and craft campaigns that truly connect.
        </p>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 gap-2 px-8">
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-border/60 text-foreground hover:bg-secondary">
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  )
}
