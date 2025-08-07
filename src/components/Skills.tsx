
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C", "SQL"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Frontend Development",
      skills: ["ReactJS", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap5", "Responsive Design"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Firebase", "MongoDB", "REST APIs"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Data & Machine Learning",
      skills: ["Web Scraping", "Data Analysis", "Tableau", "Machine Learning"],
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Agile", "SDLC"],
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit built through continuous learning and hands-on experience
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4 relative inline-block">
                  {category.title}
                  <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500" />
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Badge
                      variant="secondary"
                      className="px-6 py-3 text-base font-medium cursor-pointer bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg border-0 transition-all duration-300 relative overflow-hidden group"
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Programming Languages</div>
            </div>
            <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
            <div className="p-6 rounded-lg bg-white border border-gray-200 shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
