import { ContactSection } from "@/components/contact-section"
import { MatrixBackground } from "@/components/matrix-background"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <MatrixBackground />
      <Navigation />
      <div className="pt-20">
        <ContactSection />
      </div>
    </main>
  )
}
