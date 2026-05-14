"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BrandReveal } from "@/components/brand-reveal"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient glows - Orange and Magenta */}
      <div className="absolute top-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[#F15E24]/25 blur-[120px]" />
      <div className="absolute bottom-1/3 left-1/4 h-[450px] w-[450px] rounded-full bg-[#C52F86]/20 blur-[100px]" />
      <div className="absolute top-1/2 right-1/3 h-[300px] w-[300px] rounded-full bg-[#5EC4B6]/15 blur-[80px]" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <BrandReveal />
        
        <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl font-[family-name:var(--font-display)] lowercase">
          Global Audience Intelligence,{" "}
          <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
            Harmonized.
          </span>
        </h1>
        
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] text-white hover:opacity-90 gap-2 px-8 border-0">
            Book a Demo
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-accent/60 text-foreground hover:bg-accent/10 hover:border-accent">
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  )
}
