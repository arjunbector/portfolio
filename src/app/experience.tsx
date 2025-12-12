import MaxWidthWrapper from "@/components/max-width-wrapper";
import kshamImage from "@/../public/companies/ksham.png";
import ExperienceCard from "@/components/experiece-card";
import { StaticImageData } from "next/image";
import { ComponentType, SVGProps } from "react";
import { FreelanceIcon } from "@/components/icons/icons";
const EXPERIENCES: {
  image: StaticImageData | ComponentType<SVGProps<SVGSVGElement>>;
  jobRole: string;
  startDate?: string;
  endDate?: string;
  description: string;
  imageClass?: string;
}[] = [
  {
    image: FreelanceIcon,
    jobRole: "Freelance Web Developer",
    description:
      "I’ve delivered full-stack web applications for clients in domains like insurance and healthcare, building reliable, scalable systems designed to handle real user traffic. My work focuses on creating clean, modern interfaces supported by well-structured backend architecture. I collaborate closely with clients to understand their requirements, refine workflows, and deliver end-to-end solutions that are efficient, maintainable, and built for long-term growth.",
  },
  {
    image: kshamImage,
    jobRole: "Full Stack Developer at Ksham Innovation",
    startDate: "June 2024",
    endDate: "Oct 2024",
    description:
      "At Ksham Innovations, I built and launched the company's corporate website with a modern, responsive design and smooth animations to enhance the user experience. I integrated third-party APIs into a React-based hiring workflow to streamline internal processes, and developed a custom CMS with an admin dashboard that made blog management and content updates significantly more efficient.",
    imageClass: "invert",
  },
];

export default function Experience() {
  return (
    <section className="bg-black py-20">
      <MaxWidthWrapper>
        <h1 className="mb-20 text-center text-5xl font-light text-white">
          My <span className="font-bold">Experience</span>
        </h1>
        <div className="space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <ExperienceCard {...exp} key={idx} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
