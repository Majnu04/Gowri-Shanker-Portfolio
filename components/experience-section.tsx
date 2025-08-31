"use client"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Symbiosis Technologies",
      location: "Visakhapatnam, AP",
      period: "Jun 2024 - Jul 2024",
      description:
        "Developed automated web scraping application using ReactJS and Python, improving data extraction efficiency by 40%. Implemented data processing workflows and ETL pipelines for HTML file automation. Collaborated with senior developers on optimizing backend performance and database queries.",
      achievements: [
        "Built scalable web scraping solutions handling 10K+ data points daily",
        "Reduced manual data processing time by 65%",
        "Implemented error handling and logging mechanisms",
        "Created documentation for future team members"
      ],
      technologies: ["ReactJS", "Python", "BeautifulSoup", "Selenium", "MongoDB"],
      type: "internship",
    },
    {
      title: "Founder & Technical Lead",
      company: "Elite Digital Solutions",
      location: "Visakhapatnam, AP",
      period: "Mar 2024 - Present",
      description:
        "Founded and scaled digital agency startup specializing in web development and digital marketing solutions. Led a team of 5+ developers and designers, managing end-to-end project delivery for 15+ clients across various industries.",
      achievements: [
        "Successfully delivered 15+ client projects with 100% satisfaction rate",
        "Generated ₹2L+ revenue in first 6 months",
        "Built long-term partnerships with 8+ recurring clients",
        "Established efficient project management workflows"
      ],
      technologies: ["MERN Stack", "Next.js", "WordPress", "Digital Marketing", "Project Management"],
      type: "entrepreneurship",
    },
    {
      title: "Founder Technical Lead",
      company: "Matrix Programming Club",
      location: "Vignan Institute, Visakhapatnam",
      period: "Nov 2023 - Present",
      description:
        "Established and led the premier programming club at Vignan Institute with 200+ active members. Organized hackathons, coding competitions, technical workshops, and industry guest lectures. Mentored 50+ junior students in programming fundamentals and advanced development practices.",
      achievements: [
        "Organized 5+ major hackathons with 500+ participants",
        "Conducted 20+ technical workshops and coding bootcamps",
        "Facilitated 10+ industry expert sessions",
        "Increased club membership by 300% in first year"
      ],
      technologies: ["Event Management", "Technical Mentoring", "Community Building", "Public Speaking"],
      type: "leadership",
    },
    {
      title: "Lead Developer",
      company: "Vignan's Official College Website",
      location: "Vignan Institute, Visakhapatnam",
      period: "Jul 2024 - Present",
      description:
        "Led development as the main architect and developer for the official college website serving 5000+ students and faculty. Designed and implemented 120+ interactive components with responsive UI/UX, integrated with college management systems.",
      achievements: [
        "Developed comprehensive website with 120+ interactive components",
        "Integrated 435+ academic PDFs with search functionality",
        "Implemented admin panel for dynamic content management",
        "Achieved 98% uptime with optimized performance"
      ],
      technologies: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Express.js"],
      type: "leadership",
    },
    {
      title: "Technical Volunteer",
      company: "Various Tech Events & Hackathons",
      location: "Andhra Pradesh",
      period: "2023 - Present",
      description:
        "Active participant and volunteer in regional and national coding competitions, hackathons, and tech conferences. Contributed to open-source projects and collaborated with developer communities.",
      achievements: [
        "Participated in HackWithInfy 2024 (Top 1000)",
        "Volunteer at 8+ major tech events",
        "Contributed to 5+ open-source projects",
        "Mentored participants in multiple hackathons"
      ],
      technologies: ["Open Source", "Community Engagement", "Competitive Programming", "Hackathons"],
      type: "volunteer",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "leadership":
        return "text-primary border-primary/30 bg-primary/10"
      case "internship":
        return "text-secondary border-secondary/30 bg-secondary/10"
      case "entrepreneurship":
        return "text-accent border-accent/30 bg-accent/10"
      case "volunteer":
        return "text-chart-2 border-chart-2/30 bg-chart-2/10"
      default:
        return "text-muted-foreground border-border bg-card"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "leadership":
        return "👑"
      case "internship":
        return "💼"
      case "entrepreneurship":
        return "🚀"
      case "volunteer":
        return "🤝"
      default:
        return "💻"
    }
  }

  return (
    <section id="experience" className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary animate-fade-in-up">Experience & Leadership</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out group transform animate-slide-in-up`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{getTypeIcon(exp.type)}</span>
                    <h3 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-xl font-semibold text-accent group-hover:text-secondary transition-colors duration-300 mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    📍 {exp.location}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4 lg:mt-0">
                  <span className="text-sm text-muted-foreground bg-muted/20 px-3 py-1 rounded-full group-hover:text-foreground transition-colors duration-300">
                    📅 {exp.period}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm border font-semibold transform transition-all duration-300 hover:scale-105 ${getTypeColor(exp.type)}`}>
                    {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">Key Achievements:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all duration-300">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold text-secondary mb-3">Technologies & Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-md border border-secondary/20 hover:bg-secondary/20 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">Experience Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-chart-2 mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Events Organized</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
