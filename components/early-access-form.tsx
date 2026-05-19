"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export function EarlyAccessForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - will be replaced with HubSpot form
    console.log("Early access form submitted:", formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (isSubmitted) {
    return (
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#F15E24] to-[#C52F86]">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-4">
            {"You're"} on the list.
          </h2>
          <p className="text-muted-foreground">
            {"We'll"} reach out soon to schedule your preview of Verse AI.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {"We're"} opening early beta access to a limited group of teams who want to help shape the product. Get a preview from our team and a seat at the table before general release.
          </p>
          
          <div className="text-left max-w-md mx-auto mb-10">
            <h3 className="text-lg font-semibold text-foreground mb-4">What you get:</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F15E24] to-[#C52F86] shrink-0" />
                <span>A hands-on preview of the Verse AI workflow before launch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F15E24] to-[#C52F86] shrink-0" />
                <span>Direct input into how the product works for your team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#F15E24] to-[#C52F86] shrink-0" />
                <span>First access when beta opens</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Placeholder form - will be replaced with HubSpot */}
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
                className="bg-card border-border focus:border-accent focus:ring-accent"
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
                className="bg-card border-border focus:border-accent focus:ring-accent"
                placeholder="you@company.com"
              />
            </div>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company" className="text-foreground">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                required
                value={formData.company}
                onChange={handleChange}
                className="bg-card border-border focus:border-accent focus:ring-accent"
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
                className="bg-card border-border focus:border-accent focus:ring-accent"
                placeholder="Your role"
              />
            </div>
          </div>
          
          <div className="pt-4">
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-[#F15E24] to-[#C52F86] text-white hover:opacity-90 border-0"
            >
              Get Early Access
            </Button>
          </div>
          
          <p className="text-center text-sm text-muted-foreground">
            Limited spots. {"We'll"} reach out to schedule your preview.
          </p>
        </form>
      </div>
    </section>
  )
}
