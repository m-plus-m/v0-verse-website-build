"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative border-t border-border/40 overflow-hidden">
      {/* Gradient background glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-[#F15E24]/15 blur-[100px]" />
        <div className="absolute top-1/2 right-1/3 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] rounded-full bg-[#C52F86]/15 blur-[80px]" />
      </div>
      
      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          Ready to transform your{" "}
          <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
            audience strategy?
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Join leading brands using Verse to discover, understand, 
          and reach their ideal consumers.
        </p>
        
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
