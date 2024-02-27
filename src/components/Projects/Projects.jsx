import React from "react";
import Card from "./Card";
// import weather from "./weather.png";
import projects from "@/app/constants/projects";

const Projects = () => {
  const cards = projects.map((project) => {
    return (
      <Card
        key={project.id}
        cardDetails={{
          projectName: project.name,
          imgSrc: project.src,
          description: project.description,
          githubLink: project.githubLink,
          websiteLink: project.websiteLink,
        }}
      />
    );
  });
  const reversedCards = cards.reverse();
  return (
    <main className="min-h-screen w-full bg-[#0F172A] text-slate-200">
      <div className="grid grid-cols-3 items-center gap-10"> {reversedCards}</div>
    </main>
  );
};

export default Projects;
