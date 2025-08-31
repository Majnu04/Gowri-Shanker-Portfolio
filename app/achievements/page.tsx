import { AchievementsSection } from "@/components/achievements-section"
import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"

export default function AchievementsPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <Navigation />
      <div className="pt-20">
        <AchievementsSection />
      </div>
    </main>
  )
}
