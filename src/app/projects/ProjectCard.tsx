import { TechnologyBadge } from "@/components/sections/Projects";
import { buttonVariants } from "@/components/ui/button";
import { ProjectInterface } from "@/constants/projects";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const ProjectCard = ({
  project,
  className,
  index
}: {
  project: ProjectInterface;
  className?: string;
  index: number;
}) => {
  return (
    <Link
      href={project.deployedLink || project.github!}
      target="_blank"
      className={cn(
        "group flex h-72 w-full gap-4 rounded-md border p-4 shadow-lg transition-shadow duration-300 even:flex-row-reverse hover:shadow-xl",
        index % 2 === 1 ? "flex-row-reverse" : "",
        className,
      )}
    >
      <div className="w-[50rem] overflow-hidden rounded-md">
        <Image
          src={project.img}
          alt={project.title}
          className="h-full w-full scale-[1.02] transition-all group-hover:scale-100"
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div className="flex w-full flex-col">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">
          {project.longDescription}
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project?.technologies.length > 0 &&
            project.technologies.map((tech) => (
              <TechnologyBadge tech={tech} key={tech} />
            ))}
        </div>
        <div className="mt-4 flex space-x-2">
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
    </Link>
  );
};
export default ProjectCard;
