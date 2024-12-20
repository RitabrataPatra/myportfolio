'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Store-It',
    description: 'StoreIt is a user-friendly cloud storage platform designed to keep your files secure and accessible from anywhere. With seamless file uploads, sharing, and organization, it’s perfect for individuals.',
    image: 'https://github.com/RitabrataPatra/storeit/raw/main/public/assets/storeit.png',
    github: 'https://github.com/RitabrataPatra/storeit',
    demo: 'https://store-it-here.vercel.app/',
  },
  {
    title: 'Project Two',
    description: 'Real-time chat application using WebSocket and React.',
    image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&q=80',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Project Three',
    description: 'AI-powered content management system.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
    github: 'https://github.com',
    demo: '',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Here are some of my recent projects that showcase my skills and expertise.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title} className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className='line-clamp-3'>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Details
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}