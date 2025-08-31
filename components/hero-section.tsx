"use client"

import { useEffect, useState } from "react"

export function HeroSection() {
  const [text, setText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  
  const texts = [
    "Software Developer",
    "Computer Science Student", 
    "Full-Stack Engineer",
    "Problem Solver",
    "Tech Enthusiast"
  ]

  useEffect(() => {
    setIsVisible(true)
    
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)

    // Typewriter effect
    const typewriterInterval = setInterval(() => {
      const currentText = texts[currentIndex]
      
      if (!isDeleting) {
        setText(currentText.substring(0, text.length + 1))
        if (text === currentText) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setText(currentText.substring(0, text.length - 1))
        if (text === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? 50 : 150)

    return () => {
      clearInterval(cursorInterval)
      clearInterval(typewriterInterval)
    }
  }, [text, currentIndex, isDeleting])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className={`text-center z-10 max-w-5xl mx-auto transition-all duration-1500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary leading-tight group">
            <span className="inline-block transform transition-all duration-700 hover:scale-105 hover:text-accent animate-fade-in-down">
              Gowri
            </span>
            <span className="inline-block transform transition-all duration-700 delay-200 hover:scale-105 hover:text-secondary animate-fade-in-down mx-4">
              Sankar
            </span>
            <span className="inline-block transform transition-all duration-700 delay-400 hover:scale-105 hover:text-accent animate-fade-in-down">
              Nelam
            </span>
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-2 font-mono transform transition-all duration-700 delay-600 animate-fade-in-up">
            📍 Visakhapatnam, Andhra Pradesh
          </div>
        </div>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 h-12 sm:h-14 font-medium transform transition-all duration-700 delay-800">
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent font-bold">
            {text}
          </span>
          <span className={`text-primary ml-1 transition-opacity duration-150 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>
            |
          </span>
        </div>

        <p className="text-muted-foreground text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 delay-1000 animate-fade-in-up">
          Computer Science Engineering student at{" "}
          <span className="text-primary font-semibold">Vignan Institute of Information Technology</span>{" "}
          with expertise in{" "}
          <span className="text-accent font-semibold">MERN Stack development</span>,{" "}
          <span className="text-secondary font-semibold">data analytics</span>, and{" "}
          <span className="text-primary font-semibold">machine learning</span>.
          <br className="hidden md:block" />
          Passionate about creating innovative solutions and driving technological advancement.
        </p>

        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transform transition-all duration-700 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-xl hover:-translate-y-2 hover:shadow-2xl transform transition-all duration-300 ease-out font-semibold text-base sm:text-lg overflow-hidden"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-gradient-to-r from-primary to-accent opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
          </button>
          
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative w-full sm:w-auto px-8 sm:px-10 py-4 border-2 border-secondary text-secondary rounded-xl hover:bg-secondary hover:text-secondary-foreground transform transition-all duration-300 ease-out text-base sm:text-lg font-semibold overflow-hidden"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        <div className={`mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-base text-muted-foreground transform transition-all duration-700 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="mailto:gourishanker0408@gmail.com" 
            className="group flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 transform p-2 rounded-lg hover:bg-primary/10"
          >
            <span className="text-lg">📧</span>
            <span>gourishanker0408@gmail.com</span>
          </a>
          <span className="hidden sm:inline text-muted-foreground/50">•</span>
          <a 
            href="tel:+917893804498" 
            className="group flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105 transform p-2 rounded-lg hover:bg-primary/10"
          >
            <span className="text-lg">📱</span>
            <span>+91-7893804498</span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-16 flex justify-center animate-bounce transform transition-all duration-700 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
