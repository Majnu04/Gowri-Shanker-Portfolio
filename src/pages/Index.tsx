import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown, Mail, Phone, MapPin, Download, Github, Linkedin, Code, Trophy, ExternalLink, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-900 text-slate-100">
      <Navigation />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Leadership />
        <Certifications />
        <Contact />
      </main>
      
      <ScrollToTop />
    </div>
  );
};

export default Index;