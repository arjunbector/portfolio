"use client";
import { PROJECTS } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { Button, buttonVariants } from "../ui/button";
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

export const TechnologyBadge = ({ tech }: { tech: string }) => {
  return (
    <span className="rounded-md bg-secondary p-1.5 text-xs font-semibold text-secondary-foreground shadow-sm">
      {tech}
    </span>
  );
};
export const ShortProjectCard = ({
  project,
  className,
}: {
  project: projectType;
  className?: string;
}) => {
  return (
    <Link href={project.deployedLink || project.github!} target="_blank">
      <div
        className={cn(
          "flex h-[30rem] w-80 flex-col overflow-hidden rounded-md border p-3 shadow-md sm:h-[30rem] md:w-[30rem]",
          className,
        )}
      >
        <div className="h-52">
          <Image
            src={project.img}
            alt=""
            placeholder="blur"
            className="h-full w-full border object-cover"
          />
        </div>
        <div className="flex h-full flex-col justify-between">
          <div>
            <h1 className="mb-1 mt-2 text-xl font-semibold">{project.title}</h1>
            <p className="text-sm text-zinc-800">{project.description}</p>
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
    <div>
      <MaxWidthWrapper
        className="flex scroll-mt-24 flex-col pb-20"
        id="projects"
      >
        <BlurFade inView>
          <h1 className="mx-5 text-center text-4xl font-bold sm:text-5xl">
            Check out my latest work
          </h1>
          <p className="mx-auto my-2.5 max-w-prose px-4 text-center text-sm text-zinc-500 sm:text-base">
            I&apos;ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </BlurFade>
        <div className="mx-auto my-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {PROJECTS.slice(0, 4).map((project, idx) => (
            <BlurFade
              key={project.title}
              delay={0.25 + idx * 0.05}
              inView
              inViewMargin="-50px"
            >
              <ShortProjectCard key={project.title} project={project} />
            </BlurFade>
          ))}
        </div>
        <div className="flex w-full justify-center">
          <BlurFade>
            <Button variant="ghost" size="lg" className="mx-auto" asChild>
              <Link href="/projects">Show More</Link>
            </Button>
          </BlurFade>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default Projects;
