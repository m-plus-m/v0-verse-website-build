"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Placeholder for HubSpot form integration
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-2xl">
        <p className="text-center text-lg text-muted-foreground mb-12 leading-relaxed">
          Find out how teams are using Discover, Explore and Plan to get from audience insight to media plan faster — without stitching together five tools to get there.
        </p>
        
        {isSubmitted ? (
          <div className="text-center py-12 px-6 rounded-2xl border border-border/40 bg-card/50">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#F15E24] to-[#C52F86]">
              <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">Thank you!</h3>
            <p className="text-muted-foreground">We&apos;ll be in touch within one business day.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-card/50 border-border/60 focus:border-accent"
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Work Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-card/50 border-border/60 focus:border-accent"
                  placeholder="you@company.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-card/50 border-border/60 focus:border-accent"
                  placeholder="Your company"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="role" className="text-foreground">Role</Label>
                <Input
                  id="role"
                  name="role"
                  type="text"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="bg-card/50 border-border/60 focus:border-accent"
                  placeholder="Your role"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#F15E24] to-[#C52F86] text-white hover:opacity-90 border-0"
              >
                {isSubmitting ? "Submitting..." : "Request a Demo"}
              </Button>
            </div>
            
            <p className="text-center text-sm text-muted-foreground">
              We&apos;ll be in touch within one business day.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
