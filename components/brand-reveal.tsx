"use client"

import { useEffect, useState } from "react"

const prefixes = ["audience", "story", "media", ""]
const HOLD_DURATION = 2000
const FADE_DURATION = 600

export function BrandReveal() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (currentIndex >= prefixes.length - 1) {
      setIsComplete(true)
      return
    }

    const holdTimer = setTimeout(() => {
      setIsFading(true)
      
      const fadeTimer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1)
        setIsFading(false)
      }, FADE_DURATION)

      return () => clearTimeout(fadeTimer)
    }, HOLD_DURATION)

    return () => clearTimeout(holdTimer)
  }, [currentIndex])

  const currentPrefix = prefixes[currentIndex]
  const showPrefix = currentPrefix !== ""

  return (
    <div className="mb-8 flex items-center justify-center">
      <div 
        className={`
          relative flex items-baseline justify-center font-sans text-3xl font-extrabold lowercase tracking-tight
          sm:text-4xl lg:text-5xl
          transition-all duration-500
          ${isComplete ? 'scale-105' : ''}
        `}
      >
        {/* Prefix that fades */}
        <span
          className={`
            bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent
            transition-all ease-in-out
            ${isFading ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'}
            ${!showPrefix ? 'w-0 overflow-hidden' : ''}
          `}
          style={{ 
            transitionDuration: `${FADE_DURATION}ms`,
          }}
        >
          {showPrefix ? currentPrefix : ''}
        </span>
        
        {/* "verse" stays anchored */}
        <span 
          className={`
            bg-gradient-to-r from-[#F15E24] to-[#C52F86] bg-clip-text text-transparent
            transition-all duration-500
          `}
        >
          verse
        </span>
      </div>
    </div>
  )
}
