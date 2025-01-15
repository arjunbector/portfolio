"use client";
import { PROJECTS } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import BlurFade from "../ui/blur-fade";
import { inView } from "framer-motion";

type projectType = {
  title: string;
  description: string;
  img: StaticImageData;
  github?: string;
  deployedLink?: string;
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
    <Link href={project.deployedLink || project.github!} target="_blank">
        <div className="flex h-[30rem] w-80 flex-col overflow-hidden rounded-md bg-neutral-900 p-3 sm:h-[30rem] md:w-[30rem]">
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
            <h1 className="mb-1 mt-2 text-xl font-semibold text-white">{project.title}</h1>
            <p className="text-sm text-zinc-200">{project.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechnologyBadge key={tech} tech={tech} />
              ))}
            </div>
            <div className="flex space-x-2">
              {project.deployedLink && (
                <Link
                  target="_blank"
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "secondary",
                    }),
                  )}
                  href={project.deployedLink}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  Website
                </Link>
              )}
              {project.github && (
                <Link
                  target="_blank"
                  className={cn(
                    buttonVariants({
                      size: "sm",
                      variant: "secondary",
                    }),
                  )}
                  href={project.github}
                >
                  <BsGithub className="mr-2 h-4 w-4" /> Source
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <div className="bg-[#121212]">
      <MaxWidthWrapper className="flex flex-col pb-20">
        <BlurFade inView>
          <h1 className="mx-5 text-center text-4xl font-bold text-white sm:text-5xl">
            Check out my latest work
          </h1>
          <p className="mx-auto my-2.5 max-w-prose px-4 text-center text-sm text-zinc-300 sm:text-base">
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </BlurFade>
        <div className="mx-auto my-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <BlurFade
              key={project.title}
              delay={0.25 + idx * 0.05}
              inView
              inViewMargin="-50px"
            >
              <ProjectCard key={project.title} project={project} />
            </BlurFade>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Projects;
