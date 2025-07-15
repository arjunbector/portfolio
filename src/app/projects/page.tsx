import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "./ProjectCard";
import { ShortProjectCard } from "@/components/sections/Projects";
import BlurFade from "@/components/ui/blur-fade";

const Page = () => {
  return (
    <MaxWidthWrapper className="py-20">
      <h1 className="my-2 text-center text-3xl font-extrabold md:my-4 md:text-5xl">
        Projects
      </h1>
      <p className="mb-8 text-balance text-center text-sm text-muted-foreground">
        Here's a curated list of projects I've worked on — blending clean code,
        modern tech, and thoughtful design.{" "}
        <span className="hidden md:inline">
          Each one reflects my growth as a developer and my passion for building
          things that work and look great.
        </span>
      </p>
      <div className="flex flex-col items-center gap-8">
        {PROJECTS.map((project, index) => (
          <BlurFade
            key={project.title}
            delay={0.1 + index * 0.05}
            inView
            inViewMargin="-50px"
          >
            <ProjectCard
              project={project}
              key={index}
              className="hidden lg:flex"
              index={index}
            />
          </BlurFade>
        ))}
      </div>
      <div className="flex flex-col items-center gap-8 lg:hidden">
        {PROJECTS.map((project, index) => (
          <BlurFade
            key={project.title}
            delay={0.1 + index * 0.05}
            inView
            inViewMargin="-50px"
          >
            <ShortProjectCard project={project} key={index} />
          </BlurFade>
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
