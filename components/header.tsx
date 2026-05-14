"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-[#F15E24] to-[#C52F86] flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">verse</span>
            </div>
          </Link>
          <span className="hidden text-sm text-muted-foreground md:block">
            by TelmarHelixa
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden text-muted-foreground hover:text-foreground sm:inline-flex">
            About
          </Button>
          <Button variant="outline" size="sm" className="border-accent/60 text-foreground hover:bg-accent/10 hover:border-accent">
            Get Early Access
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] text-white hover:opacity-90 border-0">
            Book a Demo
          </Button>
        </div>
      </div>
    </header>
  )
}
