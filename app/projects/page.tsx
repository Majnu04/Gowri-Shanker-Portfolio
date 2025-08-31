import { ProjectsSection } from "@/components/projects-section"
import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <Navigation />
      <div className="pt-20">
        <ProjectsSection />
      </div>
    </main>
  )
}
