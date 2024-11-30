'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';


export const mylinkgithub = "https://github.com/RitabrataPatra";
export const mylinklinkedin = "https://www.linkedin.com/in/ritabratapatra/";
export function Hero() {
  return (
    <section id="home" className="relative pt-24 lg:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I'm <span className="text-primary">Ritabrata Patra</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A passionate full-stack developer crafting beautiful and functional web experiences.
              Let's build something amazing together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild>
                <a href="#contact">
                  Contact me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <a href={mylinkgithub} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={mylinklinkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}