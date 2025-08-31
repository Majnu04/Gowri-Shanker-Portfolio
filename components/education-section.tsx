"use client"

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary animate-fade-in-up">Education</h2>

        <div className="space-y-6">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out group transform animate-slide-in-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">Bachelor of Technology</h3>
                <p className="text-accent font-medium group-hover:text-secondary transition-colors duration-300">Computer Science & Engineering</p>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Vignan Institute of Information Technology, Visakhapatnam</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-right">
                  <div className="text-primary font-semibold text-lg group-hover:scale-110 transition-transform duration-300">CGPA: 9/10</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Aug 2023 - Present</div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
              Pursuing comprehensive education in computer science with focus on software development, algorithms, data
              structures, and emerging technologies. Active participation in technical clubs and coding competitions.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out group transform animate-slide-in-right" style={{ animationDelay: '200ms' }}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">Diploma</h3>
                <p className="text-accent font-medium group-hover:text-secondary transition-colors duration-300">Computer Engineering</p>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Kakinada Institute of Engineering and Technology, Kakinada</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-right">
                  <div className="text-primary font-semibold text-lg group-hover:scale-110 transition-transform duration-300">82%</div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Dec 2020 - Jun 2023</div>
                </div>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
              Strong foundation in computer engineering principles with excellent academic performance. Developed
              problem-solving skills and technical expertise that laid the groundwork for my career in technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
