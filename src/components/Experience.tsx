import { motion } from "framer-motion";
import { Calendar, MapPin, TrendingUp, Users, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto mb-8" />
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Real-world experience building impactful solutions and driving results
          </p>
        </motion.div>

        <div className="relative flex flex-col items-start">
          {/* Timeline Line on the left */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" style={{ minHeight: '100%' }} />

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-start w-full"
          >
            {/* Timeline Dot on the left */}
            <div className="absolute left-6 top-0 w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-slate-900 z-10" />
            <div className="w-full flex md:pl-24 pl-16">
              <Card className="mt-4 w-full md:w-1/2 bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                    <div className="flex items-center space-x-2 text-blue-400">
                      <Calendar size={20} />
                      <span className="font-medium">Jun 2024 - Jul 2024</span>
                    </div>
                    <Badge variant="outline" className="border-green-500/50 text-green-400">
                      Internship
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">Web Development Intern</h3>
                  <div className="flex items-center space-x-2 text-gray-400 mb-6">
                    <MapPin size={16} />
                    <span>Symbiosis Technologies</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-400 mb-3">Key Projects & Achievements</h4>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span>Developed a comprehensive <strong className="text-white">web scraping application</strong> using React and Python</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                          <span>Improved data processing efficiency by <strong className="text-green-400">40%</strong> through optimization techniques</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0" />
                          <span>Built robust <strong className="text-white">HTML ETL pipelines</strong> for automated data transformation</span>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                          <span>Collaborated effectively using <strong className="text-white">Agile methodologies</strong> in team environment</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                      <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                        <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <div className="text-xl font-bold text-green-400">40%</div>
                        <div className="text-xs text-gray-400">Efficiency Gain</div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/30 rounded-lg">
                        <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-xl font-bold text-blue-400">5+</div>
                        <div className="text-xs text-gray-400">ETL Pipelines</div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/30 rounded-lg col-span-2 md:col-span-1">
                        <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-xl font-bold text-purple-400">Agile</div>
                        <div className="text-xs text-gray-400">Team Workflow</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Python", "Web Scraping", "HTML", "ETL", "Agile"].map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-slate-700/50 text-gray-300 hover:bg-blue-500/20 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
