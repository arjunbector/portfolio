"use client";
import { PROJECTS } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { buttonVariants } from "../ui/button";

type projectType = {
  title: string;
  description: string;
  img: StaticImageData;
  github: string;
  deployedLink: string;
  technologies: string[];
};


const TechnologyBadge = ({ tech }: { tech: string }) => {
  return (
    <span className="bg-zinc-100 text-black rounded-md p-1.5 font-semibold text-xs">
      {tech}
    </span>
  );
};
const ProjectCard = ({ project }: { project: projectType }) => {
  return (
    <div className="border-2 rounded-md flex flex-col overflow-hidden h-[30rem] w-80 sm:h-[30rem] md:w-[30rem] p-3">
      <div className="h-52">
        <Image
          src={project.img}
          alt=""
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-between h-full">
        <div>
          <h1 className="text-xl font-semibold mt-2 mb-1">{project.title}</h1>
          <p className="text-zinc-700 text-sm">{project.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechnologyBadge key={tech} tech={tech} />
            ))}
          </div>
          <div className="flex space-x-2">
            <Link
            target="_blank"
              className={cn(
                buttonVariants({
                  size: "sm",
                })
              )}
              href={project.deployedLink}
            >
              <Globe className="h-4 w-4 mr-2" /> Webite
            </Link>
            <Link
            target="_blank"
              className={cn(
                buttonVariants({
                  size: "sm",
                })
              )}
              href={project.github}
            >
              <BsGithub className="h-4 w-4 mr-2" /> Source
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <MaxWidthWrapper className="pb-20 flex flex-col">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="text-5xl text-center font-bold"
      >
        Check out my latest work
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-prose mx-auto my-2.5 text-zinc-500"
      >
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </motion.p>
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;
