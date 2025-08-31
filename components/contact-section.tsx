"use client"

import type React from "react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gowri-sankar-nelam-0555771b6/",
      icon: "💼",
      color: "text-blue-600",
      description: "Connect professionally"
    },
    {
      name: "GitHub",
      url: "https://github.com/gourishanker0408",
      icon: "💻",
      color: "text-slate-300",
      description: "View my repositories"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/gowrisankar_nelam",
      icon: "📸",
      color: "text-pink-500",
      description: "Follow my journey"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/gowrisankar_dev",
      icon: "🐦",
      color: "text-blue-400",
      description: "Tech updates & thoughts"
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/gowrisankar22",
      icon: "🏆",
      color: "text-orange-600",
      description: "Competitive programming"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/gowrisankar22",
      icon: "🔥",
      color: "text-yellow-600",
      description: "Problem solving"
    },
  ]

  const contactMethods = [
    {
      type: "Email",
      value: "gourishanker0408@gmail.com",
      icon: "📧",
      link: "mailto:gourishanker0408@gmail.com",
      description: "For professional inquiries"
    },
    {
      type: "Phone",
      value: "+91-7893804498",
      icon: "📱",
      link: "tel:+917893804498",
      description: "Available 9 AM - 9 PM IST"
    },
    {
      type: "Location",
      value: "Visakhapatnam, Andhra Pradesh",
      icon: "📍",
      link: "#",
      description: "Open to remote work"
    },
    {
      type: "WhatsApp",
      value: "+91-7893804498",
      icon: "💬",
      link: "https://wa.me/917893804498",
      description: "Quick messages"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground animate-fade-in-up">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-foreground mb-6 transform transition-all duration-300">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                {contactMethods.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-border hover:border-foreground/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {contact.icon}
                    </span>
                    <div className="flex-1">
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {contact.value}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {contact.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Connect With Me</h3>

              <div className="space-y-4 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Ready to collaborate on your next big project? Whether you need a
                  <span className="text-foreground font-semibold"> web application</span>,
                  <span className="text-foreground font-semibold"> digital strategy</span>, or
                  <span className="text-foreground font-semibold"> technical consultation</span>, I'm here to help bring
                  your vision to life.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Passionate about creating innovative digital experiences that drive results and solve real-world
                  problems. Let's build something extraordinary together!
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card/50 rounded-lg border border-border hover:border-foreground/20 hover:shadow-md transition-all duration-300 group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </span>
                    <div className="flex-1">
                      <span className={`font-medium ${link.color} group-hover:text-foreground transition-colors duration-300`}>
                        {link.name}
                      </span>
                      <div className="text-sm text-muted-foreground">
                        {link.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">Available for Projects</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Ready to Innovate?</h4>
              <p className="text-muted-foreground mb-4">
                Currently accepting new projects and opportunities. Let's discuss how we can work together!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <span className="text-sm text-muted-foreground">⚡ Quick Response Time</span>
                <span className="text-sm text-muted-foreground">🌍 Remote Friendly</span>
                <span className="text-sm text-muted-foreground">🤝 Collaborative Approach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
