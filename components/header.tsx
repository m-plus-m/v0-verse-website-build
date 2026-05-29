"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Header() {
  const [productsOpen, setProductsOpen] = useState(false)

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
          <a href="https://telmarhelixa.com" target="_blank" rel="noopener noreferrer" className="hidden text-sm text-muted-foreground hover:text-accent transition-colors md:block">
            by TelmarHelixa
          </a>
        </div>

        <div className="flex items-center gap-3">
          <div 
            className="relative hidden sm:block"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link href="/products">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
                Products
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
              </Button>
            </Link>
            
            {productsOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="w-56 rounded-lg border border-border/40 bg-background/95 backdrop-blur-lg shadow-lg py-2">
                  <Link 
                    href="/audience-intelligence" 
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                  >
                    <span className="font-medium text-foreground">Discover</span>
                    <span className="text-muted-foreground"> / Audience Intelligence</span>
                  </Link>
                  <Link 
                    href="/audience-profiling" 
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                  >
                    <span className="font-medium text-foreground">Explore</span>
                    <span className="text-muted-foreground"> / Audience Profiling</span>
                  </Link>
                  <Link 
                    href="/media-planning" 
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-colors"
                  >
                    <span className="font-medium text-foreground">Plan</span>
                    <span className="text-muted-foreground"> / Media Planning</span>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/faq">
            <Button variant="ghost" size="sm" className="hidden text-muted-foreground hover:text-foreground sm:inline-flex">
              FAQ
            </Button>
          </Link>
          <Link href="/early-access">
            <Button variant="outline" size="sm" className="border-accent/60 text-foreground hover:bg-accent/10 hover:border-accent">
              Get Early Access
            </Button>
          </Link>
          <Link href="/demo">
            <Button size="sm" className="bg-gradient-to-r from-[#F15E24] to-[#C52F86] text-white hover:opacity-90 border-0">
              Book a Demo
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Login
          </Button>
        </div>
      </div>
    </header>
  )
}
