import { motion } from "framer-motion";
import { ChevronDown, Download, Github, Linkedin, Code, Trophy, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Majnu04", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/", label: "LinkedIn" },
    { icon: Code, href: "https://www.codechef.com/users/gouri_shanker", label: "CodeChef" },
    { icon: Trophy, href: "https://leetcode.com/u/gouri_shanker/", label: "LeetCode" },
    { icon: Globe, href: "https://www.elitedigitalsolutions.tech/", label: "Elite Digital Solutions" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
    >
      {/* Minimalist Background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(135deg, #F4F4F4 0%, #FFFFFF 100%)",
        }}
      />

      {/* Subtle Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.2, 0.05],
            x: [-25, 25, -25],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Minimal Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, -50, -10],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="mx-auto w-32 h-32 md:w-40 md:h-40 mb-8"
          >
            <Avatar className="top-15 w-full h-full border-4 border-blue-500/30 shadow-2xl">
              <AvatarImage 
                src="/lovable-uploads/c322735a-0fcc-4eb3-85b5-952111187057.png" 
                alt="Gowri Sankar Nelam"
                className="object-cover"
              />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                GS
              </AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>

        {/* Name and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-800"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            Gowri Sankar Nelam
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4"
          >
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.1, color: "#4A90E2" }}
            >
              Passionate Tech Enthusiast
            </motion.span>
            <span className="mx-2 text-blue-500">•</span>
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.1, color: "#4A90E2" }}
            >
              Full-Stack Developer
            </motion.span>
            <span className="mx-2 text-blue-500">•</span>
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.1, color: "#4A90E2" }}
            >
              Founder
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            From Visakhapatnam, Andhra Pradesh • Transforming ideas into digital reality through innovation and code
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 transform shadow-lg hover:shadow-xl"
            >
              <a href="/Gowri_Resume.pdf" download>
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 md:px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={scrollToAbout}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex justify-center space-x-4 md:space-x-6 mb-16"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-2 md:p-3 rounded-full bg-white border border-gray-300 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm hover:shadow-lg"
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + index * 0.1 }}
            >
              <social.icon size={20} className="md:w-6 md:h-6 text-gray-600 hover:text-blue-600 transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-gray-600 hover:text-blue-600 transition-colors"
            animate={{ 
              y: [0, 15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
