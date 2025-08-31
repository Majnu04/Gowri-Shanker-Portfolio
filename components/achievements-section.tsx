"use client"

export function AchievementsSection() {
  const achievements = [
    {
      title: "HackWithInfy Participation",
      description: "Selected for Infosys prestigious coding competition",
      icon: "🏆",
      category: "Competition",
    },
    
    {
      title: "Event Organization Excellence",
      description: "Organized multiple coding contests and guest lectures",
      icon: "🎯",
      category: "Leadership",
    },
    {
      title: "Matrix Club Leadership",
      description: "Led technical club activities and community building",
      icon: "👥",
      category: "Community",
    },
    {
      title: "Multiple Startup Ventures",
      description: "Founded and contributed to various tech startups",
      icon: "💡",
      category: "Innovation",
    },
    {
      title: "Academic Excellence",
      description: "Maintained high academic standards with 81.2% in Diploma",
      icon: "📚",
      category: "Academic",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Competition":
        return "text-primary border-primary/30 bg-primary/10"
      case "Entrepreneurship":
        return "text-secondary border-secondary/30 bg-secondary/10"
      case "Leadership":
        return "text-accent border-accent/30 bg-accent/10"
      case "Community":
        return "text-chart-4 border-chart-4/30 bg-chart-4/10"
      case "Innovation":
        return "text-chart-5 border-chart-5/30 bg-chart-5/10"
      case "Academic":
        return "text-chart-2 border-chart-2/30 bg-chart-2/10"
      default:
        return "text-muted-foreground border-border bg-card"
    }
  }

  return (
    <section id="achievements" className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground animate-fade-in-up">Achievements & Recognition</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-card/80 backdrop-blur-sm border border-border rounded-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out group transform animate-fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 animate-bounce">
                {achievement.icon}
              </div>

              <div className="mb-3">
                <span className={`px-3 py-1 rounded-full text-xs border transform transition-all duration-300 hover:scale-105 ${getCategoryColor(achievement.category)}`}>
                  {achievement.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-3 transform transition-all duration-300 group-hover:text-primary">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed transform transition-all duration-300 group-hover:text-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
