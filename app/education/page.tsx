import { EducationSection } from "@/components/education-section"
import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"

export default function EducationPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <Navigation />
      <div className="pt-20">
        <EducationSection />
      </div>
    </main>
  )
}
