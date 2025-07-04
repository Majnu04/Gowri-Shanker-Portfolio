
import { motion } from "framer-motion";
import { GraduationCap, Award, Briefcase, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "B.Tech CSE Student",
      subtitle: "Vignan Institute of Information Technology",
      detail: "CGPA: 9.07",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Diploma in Computer Engineering",
      subtitle: "KIET, Kakinada",
      detail: "85.2%",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Briefcase,
      title: "Founder & CEO",
      subtitle: "Elite Digital Solutions",
      detail: "Web & Digital Innovation",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Based in",
      subtitle: "Visakhapatnam, Andhra Pradesh",
      detail: "Available for Remote Work",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                I'm a <span className="text-blue-400 font-semibold">passionate tech enthusiast</span> and 
                <span className="text-purple-400 font-semibold"> aspiring full-stack developer</span> currently 
                in my final year of B.Tech Computer Science Engineering at Vignan Institute of Information Technology.
              </p>
              
              <p>
                As a <span className="text-green-400 font-semibold">self-taught web developer</span> and 
                <span className="text-pink-400 font-semibold"> digital innovator</span>, I've built a strong 
                foundation in both academic excellence and practical technical skills. My journey has been 
                driven by curiosity and a constant desire to learn and create.
              </p>
              
              <p>
                I'm the <span className="text-yellow-400 font-semibold">founder of Elite Digital Solutions</span>, 
                a startup focused on web and digital innovation. Through this venture, I'm not just building 
                solutions but also running <span className="text-cyan-400 font-semibold">Elite Tech Solutions</span>, 
                helping businesses transform their digital presence.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm mb-1">{item.subtitle}</p>
                    <p className="text-blue-400 text-xs font-medium">{item.detail}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">Check out my ventures:</p>
          <a
            href="https://elitetechsolutions-eta.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <span>Elite Tech Solutions Platform</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
