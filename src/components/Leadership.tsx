import { motion } from "framer-motion";
import { Users, Trophy, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Leadership = () => {
  const achievements = [
    {
      icon: Users,
      title: "Founder & Tech Lead",
      subtitle: "Matrix Programming Club",
      description: "Leading a community of passionate programmers and tech enthusiasts",
      stats: "50+ Members",
      color: "from-emerald-400 to-teal-400",
    },
    {
      icon: Trophy,
      title: "Event Organizer",
      subtitle: "Coding Contests & Hackathons",
      description: "Organized multiple programming competitions and technical events",
      stats: "10+ Events",
      color: "from-emerald-400 to-teal-400",
    },
    {
      icon: Target,
      title: "Technical Mentor",
      subtitle: "DSA & Development",
      description: "Mentoring peers in Data Structures, Algorithms, and Web Development",
      stats: "30+ Students",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Workshop Conductor",
      subtitle: "Technical Lectures",
      description: "Conducting workshops on programming concepts and industry trends",
      stats: "15+ Sessions",
      color: "from-orange-500 to-red-500",
    },
  ];

  const initiatives = [
    "Organized inter-college coding competitions with 200+ participants",
    "Conducted weekly DSA problem-solving sessions",
    "Led hackathon teams to multiple victories",
    "Created mentorship programs for junior students",
    "Established coding culture in the institute",
    "Collaborated with industry professionals for guest lectures",
  ];

  return (
    <section id="leadership" className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Leadership & Community
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building communities, mentoring peers, and driving innovation through collaborative leadership
          </p>
        </motion.div>

        {/* Leadership Roles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 w-full">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="w-full flex justify-center"
            >
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full group w-full max-w-md mx-auto">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon size={28} className="text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <h4 className="text-lg text-blue-400 mb-4">{achievement.subtitle}</h4>
                    <p className="text-gray-300 mb-6 leading-relaxed">{achievement.description}</p>
                    <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${achievement.color} text-white font-semibold text-sm`}>
                      {achievement.stats}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Initiatives */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600/50 w-full max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center text-white mb-8">
                Key Initiatives & Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {initiatives.map((initiative, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 group text-left md:text-left text-center md:text-inherit"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-200 mx-auto md:mx-0" />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 break-words">
                      {initiative}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <div className="text-center group cursor-pointer w-full">
              <motion.div 
                className="text-4xl font-bold text-blue-400 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                200+
              </motion.div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Students Reached</div>
            </div>
            <div className="text-center group cursor-pointer w-full">
              <motion.div 
                className="text-4xl font-bold text-purple-400 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                25+
              </motion.div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Events Organized</div>
            </div>
            <div className="text-center group cursor-pointer w-full">
              <motion.div 
                className="text-4xl font-bold text-green-400 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                50+
              </motion.div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Club Members</div>
            </div>
            <div className="text-center group cursor-pointer w-full">
              <motion.div 
                className="text-4xl font-bold text-orange-400 mb-2"
                whileHover={{ scale: 1.1 }}
              >
                3+
              </motion.div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors">Years Leadership</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
