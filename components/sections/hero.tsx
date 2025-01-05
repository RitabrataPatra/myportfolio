'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight,GithubIcon, Linkedin, Mail } from 'lucide-react';


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
            Hi, I&apos;m <span className="text-primary">Ritabrata 👋</span>
          </h1>

          <div className='bg-neutral-600 bg-opacity-60 p-4 rounded-lg mt-8 border border-neutral-500'>
          <p className="text-lg leading- text-gray-200 text-left">
 
          As a child, my fascination with computers and technology began with gaming. I spent countless hours immersed in virtual worlds, but over time, my curiosity grew beyond just playing games. I started exploring how they were made, which led me to <span className='text-primary font-bold underline'>programming and software development</span>. What began as a casual interest soon became a deeper pursuit, and I&apos;ve loved <span className='text-primary font-bold underline'>coding</span> ever since 💖.
          </p>
          </div>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild className="bg-white text-black hover:bg-gray-100">
              <a href="https://www.linkedin.com/in/ritabratapatra">
                Contact me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20" asChild>
                <a href={mylinkgithub} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20" asChild>
                <a href={mylinklinkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              {/* <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20" asChild>
                <a href="mailto:ritabratapatra35@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}