'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Palette, Rocket } from 'lucide-react';

const skills = [
  {
    name: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces with modern frameworks.',
    icon: Code2,
  },
  {
    name: 'UI/UX Design',
    description: 'Designing intuitive and beautiful user experiences.',
    icon: Palette,
  },
  {
    name: 'Performance Optimization',
    description: 'Building fast and efficient applications that scale.',
    icon: Rocket,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I'm a software developer with a passion for creating elegant solutions to complex problems.
              With expertise in modern web technologies, I build applications that make a difference.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {skills.map((skill) => (
                <Card key={skill.name} className="p-6">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold">
                    <skill.icon className="h-5 w-5 flex-none text-primary" />
                    {skill.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{skill.description}</p>
                  </dd>
                </Card>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}