"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function VerseAIBlock() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F15E24]/10 via-[#C52F86]/10 to-[#5EC4B6]/10" />
      
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#F15E24]/40 bg-[#F15E24]/10 px-4 py-1.5 text-sm font-medium text-[#F15E24]">
          <Sparkles className="h-3.5 w-3.5" />
          Coming Soon
        </div>
        
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-6">
          One brief in.{" "}
          <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
            One plan out.
          </span>
        </h2>
        
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed mb-8">
          Verse AI routes your work across all three engines and gets you from 
          insight to activation in a single workflow.
        </p>
        
        <Button 
          size="lg" 
          variant="outline" 
          className="border-[#F15E24]/60 text-foreground hover:bg-[#F15E24]/10 hover:border-[#F15E24]"
        >
          Get Early Access
        </Button>
      </div>
    </section>
  )
}
