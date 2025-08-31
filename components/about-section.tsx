"use client"

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-primary animate-fade-in-up">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main About Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-border transform transition-all duration-700 hover:shadow-xl hover:scale-105 animate-slide-in-up">
              <div className="text-sm sm:text-base md:text-lg leading-relaxed space-y-4 sm:space-y-6">
                <p className="text-balance transform transition-all duration-500 hover:text-primary">
                  I am <span className="text-primary font-semibold">Gowri Sankar Nelam</span>, a passionate{" "}
                  <span className="text-secondary font-semibold">Computer Science Engineering student</span> from Visakhapatnam, Andhra Pradesh, currently pursuing my B.Tech at Vignan Institute of Information Technology. With a strong foundation in full-stack development, data analytics, and machine learning, I'm dedicated to creating innovative technological solutions that make a meaningful impact.
                </p>

                <p className="text-balance transform transition-all duration-500 delay-100 hover:text-primary">
                  My journey in technology began during my diploma studies, where I achieved 82% and discovered my passion for programming. Since then, I've been committed to continuous learning and skill development. As a <span className="text-accent font-semibold">MERN Stack Developer</span>, I specialize in building scalable web applications using React.js, Node.js, Express.js, and MongoDB, with additional expertise in Python for data science and automation.
                </p>

                <p className="text-balance transform transition-all duration-500 delay-200 hover:text-primary">
                  I gained valuable industry experience through my <span className="text-secondary font-semibold">Software Development Internship</span> at <span className="text-accent font-semibold">Symbiosis Technologies</span>, where I developed automated web scraping applications that improved data extraction efficiency by 40%. This experience enhanced my skills in data processing, ETL pipelines, and workflow automation.
                </p>

                <p className="text-balance transform transition-all duration-500 delay-300 hover:text-primary">
                  Currently serving as the <span className="text-primary font-semibold">Founder Technical Lead</span> of the Matrix Programming Club and <span className="text-secondary font-semibold">Lead Developer</span> for Vignan's College Website, I actively contribute to the tech community by organizing hackathons, technical workshops, and mentoring junior developers. I believe in collaborative learning and knowledge sharing to foster innovation.
                </p>

                <p className="text-balance transform transition-all duration-500 delay-400 hover:text-primary">
                  Beyond coding, I'm an <span className="text-accent font-semibold">entrepreneur at heart</span>, having founded Elite Digital Solutions and contributed to various startup ventures. I'm passionate about leveraging technology to solve real-world problems and create sustainable business solutions that benefit society.
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-border transform transition-all duration-700 hover:shadow-xl hover:scale-105 animate-slide-in-up delay-200">
              <h3 className="text-2xl font-bold text-secondary mb-6">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all duration-300">
                  <h4 className="font-semibold text-primary mb-2">🚀 Full-Stack Development</h4>
                  <p className="text-sm text-muted-foreground">Building end-to-end web applications with modern frameworks and best practices</p>
                </div>
                <div className="p-4 rounded-lg border border-secondary/20 bg-secondary/5 hover:bg-secondary/10 transition-all duration-300">
                  <h4 className="font-semibold text-secondary mb-2">📊 Data Analytics</h4>
                  <p className="text-sm text-muted-foreground">Extracting insights from data using Python, machine learning, and visualization tools</p>
                </div>
                <div className="p-4 rounded-lg border border-accent/20 bg-accent/5 hover:bg-accent/10 transition-all duration-300">
                  <h4 className="font-semibold text-accent mb-2">🤖 AI/ML Solutions</h4>
                  <p className="text-sm text-muted-foreground">Developing intelligent systems and automation solutions using machine learning</p>
                </div>
                <div className="p-4 rounded-lg border border-chart-2/20 bg-chart-2/5 hover:bg-chart-2/10 transition-all duration-300">
                  <h4 className="font-semibold text-chart-2 mb-2">👥 Leadership & Mentoring</h4>
                  <p className="text-sm text-muted-foreground">Leading technical teams and mentoring aspiring developers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stats & Info */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border transform transition-all duration-700 hover:shadow-xl hover:scale-105 animate-slide-in-right">
              <h3 className="text-xl font-bold text-primary mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-semibold text-secondary">2+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold text-primary">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Current CGPA</span>
                  <span className="font-semibold text-accent">9.0/10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Coding Competitions</span>
                  <span className="font-semibold text-chart-2">10+</span>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border transform transition-all duration-700 hover:shadow-xl hover:scale-105 animate-slide-in-right delay-200">
              <h3 className="text-xl font-bold text-secondary mb-4">Core Values</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-primary">💡</span>
                  <span className="text-sm">Innovation & Creativity</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-secondary">🤝</span>
                  <span className="text-sm">Collaboration & Teamwork</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-accent">📚</span>
                  <span className="text-sm">Continuous Learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-chart-2">🎯</span>
                  <span className="text-sm">Quality & Excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-chart-4">🌱</span>
                  <span className="text-sm">Sustainable Solutions</span>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border transform transition-all duration-700 hover:shadow-xl hover:scale-105 animate-slide-in-right delay-400">
              <h3 className="text-xl font-bold text-accent mb-4">Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Web3 & Blockchain</span>
                <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-xs">AI & Machine Learning</span>
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs">Open Source</span>
                <span className="px-3 py-1 bg-chart-2/20 text-chart-2 rounded-full text-xs">Startups</span>
                <span className="px-3 py-1 bg-chart-4/20 text-chart-4 rounded-full text-xs">Tech Communities</span>
                <span className="px-3 py-1 bg-chart-5/20 text-chart-5 rounded-full text-xs">Digital Innovation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to collaborate on innovative projects and explore new opportunities. Whether you have a startup idea, need technical consultation, or want to discuss the latest in tech, I'd love to connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold"
              >
                Get In Touch
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 font-semibold"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
