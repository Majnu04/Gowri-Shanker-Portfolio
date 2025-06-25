import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Sales Data Mining Platform",
      description: "Advanced data mining platform with machine learning capabilities for sales forecasting and customer analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Machine Learning", "Data Analysis", "Tableau"],
      highlights: [
        { icon: TrendingUp, text: "85% Forecasting Accuracy", color: "text-green-400" },
        { icon: Users, text: "Customer Segmentation", color: "text-blue-400" },
        { icon: Zap, text: "Association Rule Mining", color: "text-purple-400" },
      ],
      gradient: "from-blue-500 to-purple-600",
      github: "https://github.com/Majnu04/ecommerce-data-mining.git",
    },
    {
      title: "Food Exchange Web Platform",
      description: "Community-based food sharing platform connecting people to reduce waste and help those in need.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "Firebase", "Real-time Notifications"],
      highlights: [
        { icon: Users, text: "500+ Active Users", color: "text-green-400" },
        { icon: Zap, text: "Real-time Notifications", color: "text-yellow-400" },
        { icon: TrendingUp, text: "Secure Authentication", color: "text-blue-400" },
      ],
      gradient: "from-green-500 to-emerald-600",
      github: "https://github.com/Majnu04/food-management.git",
    },
    {
      title: "AI-Powered Resume & Skill Analyzer",
      description: "Intelligent resume parsing system with career insights powered by OpenAI API and Django backend.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop",
      technologies: ["React", "Django", "OpenAI API", "REST APIs"],
      highlights: [
        { icon: Zap, text: "AI-Powered Analysis", color: "text-purple-400" },
        { icon: TrendingUp, text: "Career Insights", color: "text-blue-400" },
        { icon: Users, text: "Resume Parsing", color: "text-green-400" },
      ],
      gradient: "from-purple-500 to-pink-600",
      github: "https://github.com/Majnu04/insightify.git",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-slate-900/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of innovative solutions that demonstrate technical expertise and real-world impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 w-full">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group w-full"
            >
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 w-full max-w-3xl mx-auto">
                <CardContent className="p-0 overflow-hidden w-full">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden w-full ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Image Section */}
                    <div className={`relative overflow-hidden w-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="aspect-video lg:aspect-square relative overflow-hidden w-full">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 max-w-full"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-80 group-hover:opacity-60 transition-opacity duration-300`} />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex flex-wrap gap-2 justify-center">
                            <Button
                              size="sm"
                              variant="secondary"
                              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github size={16} className="mr-2" />
                                Code
                              </a>
                            </Button>
                            <Button
                              size="sm"
                              variant="secondary"
                              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                            >
                              <ExternalLink size={16} className="mr-2" />
                              Demo
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className={`p-6 sm:p-8 lg:p-12 flex flex-col justify-center w-full max-w-full ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="space-y-6 w-full">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 break-words">
                            {project.title}
                          </h3>
                          <p className="text-gray-300 text-lg leading-relaxed break-words">
                            {project.description}
                          </p>
                        </div>

                        {/* Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
                          {project.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center space-x-2 w-full">
                              <highlight.icon size={20} className={highlight.color} />
                              <span className="text-sm text-gray-300 break-words">{highlight.text}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2 w-full">
                            {project.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-slate-700/50 text-gray-300 hover:bg-blue-500/20 transition-colors break-words"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full">
                          <Button
                            variant="outline"
                            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white flex-1 min-w-0"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github size={16} className="mr-2" />
                              View Code
                            </a>
                          </Button>
                          <Button
                            className={`bg-gradient-to-r ${project.gradient} hover:opacity-90 text-white flex-1 min-w-0`}
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Live Demo
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
