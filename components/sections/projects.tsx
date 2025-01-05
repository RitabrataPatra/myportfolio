'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Store-It',
    description: 'StoreIt is a user-friendly cloud storage platform designed to keep your files secure and accessible from anywhere. With seamless file uploads, sharing, and organization, it’s perfect for individuals.',
    image: 'https://github.com/RitabrataPatra/storeit/raw/main/public/assets/storeit.png',
    github: 'https://github.com/RitabrataPatra/storeit',
    demo: 'https://store-it-here.vercel.app/',
  },
  {
    title: 'Catalog',
    description: 'A catalog of products with a user-friendly interface.You can easily add, edit, and delete products with AuthJS secure authentication',
    image: 'https://files.oaiusercontent.com/file-CFFDhb2Pndtknhy9UyebPS?se=2025-01-05T09%3A53%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D696fece4-31aa-4643-93d0-7a215b0d4c65.webp&sig=xLffuA0N1j8KTpKrZK1in%2BRV5SdPMOL82skDIPb0dXA%3D',
    github: 'https://github.com/RitabrataPatra/productcatalog',
    demo: 'https://productcatalog-pc.vercel.app/',
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
                <Image
                  src={project.image}
                  alt={project.title}
                  width={100}
                  height={100}
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
                        Live Demo
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