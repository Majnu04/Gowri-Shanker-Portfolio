"use client"

import { useEffect, useRef } from "react"

export function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const chars = "01"

    const createChar = () => {
      const char = document.createElement("div")
      char.className = "absolute text-muted-foreground/20 text-sm font-mono animate-pulse"
      char.textContent = chars[Math.floor(Math.random() * chars.length)]
      char.style.left = Math.random() * 100 + "%"
      char.style.top = "-20px"
      char.style.animationDelay = Math.random() * 3 + "s"
      char.style.animationDuration = Math.random() * 3 + 2 + "s"
      container.appendChild(char)

      // Animate falling
      let position = -20
      const fall = setInterval(() => {
        position += 2
        char.style.top = position + "px"
        if (position > window.innerHeight) {
          clearInterval(fall)
          if (container.contains(char)) {
            container.removeChild(char)
          }
        }
      }, 50)
    }

    const interval = setInterval(() => {
      if (Math.random() < 0.05) {
        createChar()
      }
    }, 200)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden" />
}
