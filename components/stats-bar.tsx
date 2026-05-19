"use client"

import { useEffect, useState, useRef } from "react"

function useCountUp(end: number, duration: number = 1500, startOnView: boolean = true) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted, startOnView])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Ease out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  return { count, ref }
}

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ''))
  const suffix = value.includes('+') ? '+' : ''
  const { count, ref } = useCountUp(numericValue, 1200)

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl font-bold bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent">
        {count}{suffix}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function StatsBar() {
  const stats = [
    { value: "50+", label: "Data Providers" },
    { value: "46", label: "Countries" },
    { value: "50+", label: "Media Types" },
  ]

  return (
    <section className="border-y border-border/40 bg-card/30">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="flex items-center gap-8">
              <AnimatedStat value={stat.value} label={stat.label} />
              {index < stats.length - 1 && (
                <div className="hidden sm:block h-8 w-px bg-border/60" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
