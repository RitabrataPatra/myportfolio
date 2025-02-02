"use client";
import axios from 'axios';
import Image from "next/image";
import React, { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { set } from 'mongoose';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { toast } = useToast()
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    image: "",
    github: "",
    demo: "",
  });
  
  const getProjects = async () => {
    try {
      const payload = await axios.get("/api");
      const response = payload.data;
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {  
    getProjects();
  }, []);

 

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    const data = await axios.post("/api", {
      name: formData.title,
      description: formData.description,
      image: formData.image,
      githuburl: formData.github,
      demourl: formData.demo,
    });

    // console.log(data);
    if (data) {
      toast({
        title: "Success",
        description: "Project added successfully",
        variant: "default",
      })
      setFormData({
        title: "",
        description: "",
        image: "",
        github: "",
        demo: "",
      });
      router.refresh();
    }
  } catch (error) {
    console.log(error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen p-8 gap-8 bg-gray-900 text-white">
      {/* Form Section */}
      <section className="flex flex-col gap-8 bg-gray-800 p-6 rounded-xl shadow-lg">
        <header>
          <h1 className="text-4xl font-semibold text-center">Add Project</h1>
        </header>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Project Title"
            onChange={handleOnChange}
            value={formData.title}
            name="title"
            className="p-3 rounded-md border-none bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <Textarea
            placeholder="Project Description"
            onChange={handleOnChange}
            value={formData.description}
            name="description"
            className="p-3 rounded-md border-none bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <Input
            name="image"
            type="text"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleOnChange}
            className="p-3 rounded-md border-none bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <Input
            type="text"
            placeholder="GitHub URL"
            value={formData.github}
            onChange={handleOnChange}
            name="github"
            className="p-3 rounded-md border-none bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <Input
            type="text"
            placeholder="Project Demo URL"
            value={formData.demo}
            onChange={handleOnChange}
            name="demo"
            className="p-3 rounded-md border-none bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            required
          />
          <Button type="submit" className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg font-medium place-self-center mt-4" disabled={isLoading}>
            {
              isLoading ? "Submitting..." : "Submit"
            }
          </Button>
        </form>
      </section>

      {/* Preview Section */}
      <section className="flex flex-col items-center justify-center gap-6 bg-gray-800 p-6 rounded-xl shadow-lg">
        <div className="w-full flex justify-center">
          {formData.image ? (
            <Image
              src={formData.image}
              alt="Project Preview"
              width={300}
              height={200}
              className="rounded-xl border border-gray-700 p-2 shadow-md"
            />
          ) : (
            <div className="w-[300px] h-[200px] flex items-center justify-center text-gray-500 border border-gray-700 rounded-xl">
              No Image Preview
            </div>
          )}
        </div>
        <div className="text-left flex flex-col gap-2 w-full">
          <h2 className="text-lg font-semibold">Title: <span className="font-normal">{formData.title || "N/A"}</span></h2>
          <h2 className="text-lg font-semibold">Description: <span className="font-normal">{formData.description || "N/A"}</span></h2>
          <h2 className="text-lg font-semibold">GitHub: <span className="text-blue-400">{formData.github || "N/A"}</span></h2>
          <h2 className="text-lg font-semibold">Demo: <span className="text-blue-400">{formData.demo || "N/A"}</span></h2>
        </div>
      </section>
    </div>
  );
};

export default Page;
