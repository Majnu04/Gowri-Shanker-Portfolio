import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      date: "2024",
      description: "Comprehensive Python programming fundamentals and best practices",
      logo: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop",
      color: "from-emerald-400 to-teal-400",
      skills: ["Python", "Programming Fundamentals", "Data Structures"],
    },
    {
      title: "Python for Data Science",
      issuer: "EDX",
      date: "2024",
      description: "Advanced data analysis, visualization, and machine learning with Python",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
      color: "from-emerald-400 to-teal-400",
      skills: ["Data Science", "Machine Learning", "Data Visualization"],
    },
    {
      title: "Frontend Developer",
      issuer: "Infosys Springboard",
      date: "2024",
      description: "Modern frontend development with React, HTML5, CSS3, and JavaScript",
      logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop",
      color: "from-purple-500 to-pink-500",
      skills: ["React", "JavaScript", "Frontend Development"],
    },
    {
      title: "Prompt Engineering",
      issuer: "GCP Vertex AI",
      date: "2024",
      description: "Advanced AI prompt engineering and optimization techniques",
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop",
      color: "from-orange-500 to-red-500",
      skills: ["AI", "Prompt Engineering", "Machine Learning"],
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Certifications & Learning
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8" />
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Continuous learning journey validated by industry-recognized certifications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="w-full flex justify-center"
            >
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full group overflow-hidden relative w-full max-w-md mx-auto">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <CardContent className="p-8 relative w-full">
                  <div className="flex items-start space-x-4 mb-6 w-full">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Award size={24} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300 break-words">
                        {cert.title}
                      </h3>
                      <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                        <p className="text-blue-400 font-medium break-words">{cert.issuer}</p>
                        <Badge variant="outline" className="border-green-500/50 text-green-400">
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed break-words">
                    {cert.description}
                  </p>

                  <div className="mb-6 w-full">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Skills Gained
                    </h4>
                    <div className="flex flex-wrap gap-2 w-full">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className={`bg-gradient-to-r ${cert.color} text-white border-0 hover:shadow-lg transition-all duration-300 break-words`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-blue-400/50 text-blue-400 hover:bg-blue-400 hover:text-white group-hover:border-blue-400 transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Extras Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Additional Achievements & Recognition
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">Event Management</h4>
                  <p className="text-gray-300 text-sm">Successfully hosted multiple coding contests and technical workshops</p>
                </div>
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">Team Leadership</h4>
                  <p className="text-gray-300 text-sm">Led diverse teams in hackathons and collaborative projects</p>
                </div>
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-400 mb-2">Brand Transformation</h4>
                  <p className="text-gray-300 text-sm">Blog: "How Elite Digital Solutions is Transforming Brands"</p>
                </div>
              </div>

              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
              >
                Read My Blog
                <ExternalLink size={16} className="ml-2" />
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
