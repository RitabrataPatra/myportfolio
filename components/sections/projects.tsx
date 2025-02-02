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
import { ExternalLink, Github, Loader2Icon } from "lucide-react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import axios from "axios";


export function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    try {
      const payload = await axios.get("/api");
      console.log(payload.data);
      setProjects(payload.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    {isLoading ? <Loader2Icon className="animate-spin place-self-center py-4" /> :  
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
                  align: "center",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {projects.map((project: any, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/1 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <Card key={project.name} className="overflow-hidden ">
                          <Image
                            src={
                              project.image
                                ? project.image
                                : "https://img.freepik.com/premium-vector/book-logo-design-icon-vector_9850-5081.jpg?semt=ais_hybrid"
                            }
                            alt="projectImage"
                            width={400}
                            height={400}
                            className="h-44 w-full object-cover"
                          />
                          <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription className="line-clamp-3">
                              {project.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex space-x-4">
                              <Button variant="outline" size="sm" asChild>
                                <a
                                  href={project.githuburl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Github className="mr-2 h-4 w-4" />
                                  Details
                                </a>
                              </Button>
                              <Button size="sm" asChild>
                                <a
                                  href={project.demourl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
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


}
</>)
}
