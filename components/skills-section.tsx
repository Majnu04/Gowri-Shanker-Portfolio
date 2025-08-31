"use client"

import { motion } from "framer-motion"
// Importing specific logos from the 'react-icons' library
import {
  DiPython,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiMongodb,
  DiGit,
} from "react-icons/di"
import { SiFirebase, SiAmazon, SiMysql } from "react-icons/si"
import { BsFiletypeSql } from "react-icons/bs";
import { AiOutlineCloudServer } from "react-icons/ai";


export function SkillsSection() {
  // Fallback: some react-icons versions may not export SiAmazonaws; use cloud server icon instead
  const AwsIcon: any = SiAmazon

  const skills = [
    { name: "Python", icon: <DiPython size="48" className="text-blue-400" />, color: "#3776AB" },
    { name: "JavaScript", icon: <DiJavascript1 size="48" className="text-yellow-400" />, color: "#F7DF1E" },
    { name: "ReactJS", icon: <DiReact size="48" className="text-cyan-400" />, color: "#61DAFB" },
    { name: "Node.js", icon: <DiNodejsSmall size="48" className="text-green-400" />, color: "#339933" },
    { name: "HTML5", icon: <DiHtml5 size="48" className="text-orange-500" />, color: "#E34F26" },
    { name: "CSS3", icon: <DiCss3 size="48" className="text-blue-500" />, color: "#1572B6" },
    { name: "MongoDB", icon: <DiMongodb size="48" className="text-green-500" />, color: "#47A248" },
    { name: "SQL", icon: <BsFiletypeSql size="48" className="text-indigo-400" />, color: "#4479A1" },
    { name: "Git & GitHub", icon: <DiGit size="48" className="text-slate-400" />, color: "#F05033" },
    { name: "Firebase", icon: <SiFirebase size="48" className="text-amber-400" />, color: "#FFCA28" },
  { name: "AWS / Cloud", icon: <AwsIcon size="48" className="text-orange-400" />, color: "#FF9900" },
  ]

  const certifications = [
    "Python Essentials 1 - Cisco",
    "Data Analytics with Python - NPTEL",
    "Frontend Web Developer - Infosys",
    "ServiceNow CSA",
    "ServiceNow CAD",
  ]

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const hexagonVariants: any = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  }

  return (
    <motion.section
      id="skills"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted/10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 sm:mb-16 text-foreground"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technologies & Skills
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-4"
          variants={sectionVariants}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="group relative"
              variants={hexagonVariants}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div
                className="hexagon w-32 h-36 sm:w-36 sm:h-40 bg-card/80 border border-border flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {skill.icon}
                </div>
                <p className="font-semibold text-sm text-foreground mt-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {skill.name}
                </p>
              </div>
              <div
                className="hexagon absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  boxShadow: `0 0 25px 8px ${skill.color}`,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-foreground">
            Certifications & Achievements
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {certifications.map((cert, index) => (
              <motion.span
                key={cert}
                className="bg-card/60 backdrop-blur-sm border border-border px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-foreground hover:bg-card hover:border-primary transition-all duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                {cert}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}