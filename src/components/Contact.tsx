import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Code, Trophy, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gourishanker0408@gmail.com",
      href: "mailto:gourishanker0408@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-7893804498",
      href: "tel:+917893804498",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Visakhapatnam, Andhra Pradesh",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", href: "https://github.com/Majnu04", color: "hover:text-gray-400" },
    { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/", color: "hover:text-blue-400" },
    { icon: Code, name: "CodeChef", href: "https://www.codechef.com/users/gouri_shanker", color: "hover:text-orange-400" },
    { icon: Trophy, name: "LeetCode", href: "https://leetcode.com/u/gouri_shanker/", color: "hover:text-yellow-400" },
    { icon: Globe, name: "Elite Digital", href: "https://www.elitedigitalsolutions.tech/", color: "hover:text-green-400" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to bring your ideas to life? Let's discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full justify-center items-center text-center lg:text-left">
          {/* Left Column - Contact Form & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Form */}
            <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name
                      </label>
                      <Input
                        placeholder="Enter your name"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      placeholder="What's this about?"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3"
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Cards - Improved Layout */}
            <div className="space-y-6 w-full">
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`block w-full ${contact.href === '#' ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  <Card className="bg-slate-800/50 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 w-full">
                    <CardContent className="p-6 w-full">
                      <div className="flex items-center space-x-4 w-full">
                        <div className={`min-w-[48px] min-h-[48px] w-12 h-12 rounded-full bg-gradient-to-r ${contact.color} flex items-center justify-center shadow-md`}>
                          <contact.icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0 text-left">
                          <h4 className="text-lg font-semibold text-white mb-0.5">{contact.label}</h4>
                          <p className="text-gray-300 text-sm break-all">{contact.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Social Links & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Social Links */}
            <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border-slate-600/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 text-center">Follow Me Online</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className={`flex items-center space-x-3 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-gray-300 ${social.color}`}
                    >
                      <social.icon size={20} />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                onClick={() => window.open('mailto:gourishanker0408@gmail.com', '_blank')}
              >
                <Mail size={20} className="mr-2" />
                Email Me Directly
              </Button>
            </div>

            {/* Add some visual balance with a motivational card */}
            <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border-blue-500/30">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-white mb-3">Let's Build Something Great!</h3>
                <p className="text-gray-300 text-sm">
                  I'm always excited to work on innovative projects. Whether it's a startup idea, 
                  enterprise solution, or creative experiment - let's turn your vision into reality.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-slate-700/50 text-center"
        >
          <p className="text-gray-400 mb-4">
            © {new Date().getFullYear()} Gowri Sankar Nelam. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mb-2">
            "Transforming ideas into digital reality through innovation and code"
          </p>
          <p className="text-sm text-gray-500">
            Developed with ❤️ by 
            <a 
              href="https://www.elitedigitalsolutions.tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:underline ml-1"
            >
              Elite Digital Solutions
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
