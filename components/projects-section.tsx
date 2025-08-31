"use client"

export function ProjectsSection() {
  const projects = [
    {
      title: "AI-Powered Resume Skill Analyzer",
      description:
        "Web platform to analyze resumes and provide career insights using NLP and OpenAI APIs with job-role matching engine",
      tech: ["React", "Django", "OpenAI API", "NLP"],
      image: "/ai-resume-analyzer-dashboard.png",
      link: "#",
      github: "https://github.com/gowrisankar22",
    },
    {
      title: "Vignan College Website",
      description:
        "Official college website with 120+ interactive components, 435+ academic PDFs, and admin panel for content management",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      image: "/modern-college-website.png",
      link: "#",
      github: "https://github.com/gowrisankar22",
    },
    {
      title: "Food Exchange Web Platform",
      description:
        "Full-stack platform enabling surplus food sharing with 500+ active user registrations and real-time notifications",
      tech: ["React", "Firebase", "Node.js"],
      image: "/food-sharing-platform.png",
      link: "#",
      github: "https://github.com/gowrisankar22",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary animate-fade-in-up">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card/50 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out group transform animate-fade-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-secondary transform transition-all duration-300 group-hover:text-primary">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed transform transition-all duration-300 group-hover:text-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-md border border-accent/30 transform transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:scale-105"
                      style={{ animationDelay: `${techIndex * 100}ms` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-primary/20 text-primary border border-primary/30 rounded-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105">
                    View Project
                  </button>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-secondary/20 text-secondary border border-secondary/30 rounded-md hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 transform hover:scale-105"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
