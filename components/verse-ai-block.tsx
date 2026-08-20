"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function VerseAIBlock() {
  return (
    <section className="relative overflow-hidden py-8">
      {/* Gradient glows - matching hero and CTA sections */}
      <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-[#F15E24]/20 blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[350px] w-[350px] rounded-full bg-[#C52F86]/15 blur-[90px]" />
      <div className="absolute top-1/2 right-1/2 h-[250px] w-[250px] rounded-full bg-[#2EC4B6]/10 blur-[70px]" />
      
      <div className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#F15E24]/40 bg-[#F15E24]/10 px-6 py-2.5 text-base font-medium text-[#F15E24]">
          <Sparkles className="h-5 w-5" />
          Coming Soon
        </div>
        
        <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-6">
          One brief in.{" "}
          <span className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
            One plan out.
          </span>
        </h2>
        
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed mb-8">
          Verse AI routes your work across three agents with a single prompt. Join the waitlist to get early access.
        </p>
        
        <Button 
          asChild
          size="lg" 
          variant="outline" 
          className="border-[#F15E24]/60 text-foreground hover:bg-[#F15E24]/10 hover:border-[#F15E24]"
        >
          <Link href="/early-access">Get Early Access</Link>
        </Button>
      </div>
    </section>
  )
}
