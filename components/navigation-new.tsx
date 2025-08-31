"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navigation() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "hero", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/#about" },
    { id: "skills", label: "Skills", href: "/#skills" },
    { id: "projects", label: "Projects", href: "/projects" },
    { id: "experience", label: "Experience", href: "/experience" },
    { id: "education", label: "Education", href: "/education" },
    { id: "achievements", label: "Achievements", href: "/achievements" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const sectionId = href.substring(2)
      if (pathname === "/") {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      } else {
        window.location.href = href
      }
    }
    setIsMobileMenuOpen(false)
  }

  const getActiveSection = () => {
    if (pathname === "/") return "hero"
    if (pathname === "/projects") return "projects"
    if (pathname === "/experience") return "experience"
    if (pathname === "/education") return "education"
    if (pathname === "/achievements") return "achievements"
    if (pathname === "/contact") return "contact"
    return "hero"
  }

  const activeSection = getActiveSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('nav') && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("click", handleClickOutside)
    document.addEventListener("keydown", handleKeyPress)
    
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [isMobileMenuOpen])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-sm sm:text-lg">GS</span>
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Gouri Shankar
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.href.startsWith("/#") ? (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10 shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? "text-primary bg-primary/10 shadow-lg"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 w-10 h-10 rounded-lg bg-card/80 backdrop-blur-sm border border-border flex flex-col justify-center items-center space-y-1 transition-all duration-300 hover:bg-card hover:scale-105"
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`w-5 h-0.5 bg-foreground transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`} />
          </button>
        </div>
      </div>

      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
        
        <div className="relative pt-20 pb-8 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <div key={item.id} className="relative">
                  {item.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`w-full text-left py-4 px-6 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                        activeSection === item.id
                          ? "text-primary bg-primary/10 shadow-lg border border-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/20 hover:shadow-md"
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeSection === item.id ? 'bg-primary' : 'bg-transparent'
                        }`} />
                      </div>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block w-full py-4 px-6 rounded-xl text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                        activeSection === item.id
                          ? "text-primary bg-primary/10 shadow-lg border border-primary/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/20 hover:shadow-md"
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeSection === item.id ? 'bg-primary' : 'bg-transparent'
                        }`} />
                      </div>
                    </Link>
                  )}
                  {activeSection === item.id && (
                    <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-primary rounded-full animate-pulse" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-border">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 px-4 text-center text-muted-foreground hover:text-foreground transition-all duration-300 rounded-lg hover:bg-muted/20"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
