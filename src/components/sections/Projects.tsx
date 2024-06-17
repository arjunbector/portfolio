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
    <span className="rounded-md bg-zinc-100 p-1.5 text-xs font-semibold text-black">
      {tech}
    </span>
  );
};
const ProjectCard = ({ project }: { project: projectType }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ delay:0.5}}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="flex h-[30rem] w-80 flex-col overflow-hidden rounded-md border-2 p-3 sm:h-[30rem] md:w-[30rem]"
    >
      <div className="h-52">
        <Image
          src={project.img}
          alt=""
          placeholder="blur"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex h-full flex-col justify-between">
        <div>
          <h1 className="mb-1 mt-2 text-xl font-semibold">{project.title}</h1>
          <p className="text-sm text-zinc-700">{project.description}</p>
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
                }),
              )}
              href={project.deployedLink}
            >
              <Globe className="mr-2 h-4 w-4" /> Webite
            </Link>
            <Link
              target="_blank"
              className={cn(
                buttonVariants({
                  size: "sm",
                }),
              )}
              href={project.github}
            >
              <BsGithub className="mr-2 h-4 w-4" /> Source
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <MaxWidthWrapper className="flex flex-col pb-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="mx-5 text-center text-4xl font-bold sm:text-5xl"
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
        className="mx-auto my-2.5 max-w-prose text-center text-sm text-zinc-500 sm:text-base"
      >
        I&apos;ve worked on a variety of projects, from simple websites to
        complex web applications. Here are a few of my favorites.
      </motion.p>
      <div className="mx-auto my-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;
