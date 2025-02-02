"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import CarouselComp from "../CarouselComp";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const projects = [
  {
    title: "Store-It",
    description:
      "StoreIt is a user-friendly cloud storage platform designed to keep your files secure and accessible from anywhere. With seamless file uploads, sharing, and organization, it’s perfect for individuals.",
    image:
      "https://github.com/RitabrataPatra/storeit/raw/main/public/assets/storeit.png",
    githuburl: "https://github.com/RitabrataPatra/storeit",
    demourl: "https://store-it-here.vercel.app/",
  },
  {
    title: "Catalog",
    description:
      "A catalog of products with a user-friendly interface ,pagination and secure AuthJS authentication.You can easily add, edit, and delete products.",
    image:
      "https://img.freepik.com/premium-vector/book-logo-design-icon-vector_9850-5081.jpg?semt=ais_hybrid",
    githuburl: "https://github.com/RitabrataPatra/productcatalog",
    demourl: "https://productcatalog-pc.vercel.app/",
  },
  {
    title: "Project Three",
    description: "TBD",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsJlYVm2170FPd4T0PFjuFz5ljvaTy7MLdQ&s",
    githuburl: "https://github.com/RitabrataPatra/",
    demourl: "",
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Here are some of my recent projects that showcase my skills and
              expertise.
            </p>
          </div>
          <div className="flex flex-row justify-center items-center mt-4">
            <Carousel
              opts={{
                align : "center",
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/1 lg:basis-1/3">
                  <div className="p-1">
                  <Card key={project.title} className="overflow-hidden ">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="h-44 w-full object-cover"
                />
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className='line-clamp-3'>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githuburl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Details
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demourl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
                  </div>
                </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
