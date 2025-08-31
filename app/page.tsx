import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </main>
  )
}
