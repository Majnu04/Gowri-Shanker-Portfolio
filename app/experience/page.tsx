import { ExperienceSection } from "@/components/experience-section"
import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <Navigation />
      <div className="pt-20">
        <ExperienceSection />
      </div>
    </main>
  )
}
