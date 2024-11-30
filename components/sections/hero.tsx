'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';


export const mylinkgithub = "https://github.com/RitabrataPatra";
export const mylinklinkedin = "https://www.linkedin.com/in/ritabratapatra/";
export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="hero-background" />
      <div className="hero-overlay" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 hero-content pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
            Hi, I'm <span className="text-primary">Ritabrata Patra</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            A passionate full-stack developer crafting beautiful and functional web experiences.
            Let's build something amazing together.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild className="bg-white text-black hover:bg-gray-100">
              <a href="#contact">
                Contact me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20" asChild>
                <a href="mailto:contact@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}