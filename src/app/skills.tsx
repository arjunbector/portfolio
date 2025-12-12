import {
  CSSIcon,
  ExpressJSIcon,
  GitHubIcon,
  GitIcon,
  HTMLIcon,
  JavaScriptIcon,
  MongoDBIcon,
  NextJSIcon,
  NodeJSIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactIcon,
} from "@/components/icons/icons";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import SkillBox from "@/components/skill-box";
import { ComponentType, SVGProps } from "react";

const SKILLS: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  showOnSmall: boolean;
}[] = [
  { icon: JavaScriptIcon, label: "JavaScript", showOnSmall: true },
  { icon: HTMLIcon, label: "HTML", showOnSmall: false },
  { icon: CSSIcon, label: "CSS", showOnSmall: false },
  { icon: ReactIcon, label: "ReactJS", showOnSmall: true },
  { icon: NextJSIcon, label: "Next.js", showOnSmall: true },
  { icon: NodeJSIcon, label: "Node.js", showOnSmall: true },
  { icon: PostgreSQLIcon, label: "PostgreSQL", showOnSmall: true },
  { icon: MongoDBIcon, label: "MongoDB", showOnSmall: false },
  { icon: PrismaIcon, label: "Prisma", showOnSmall: false },
  { icon: GitIcon, label: "Git", showOnSmall: true },
];

export default function Skills() {
  return (
    <MaxWidthWrapper className="my-20">
      <h1 className="text-center text-5xl font-light mb-20  ">
        My <span className="font-bold">Skills</span>
      </h1>
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-10">
        {SKILLS.map((skill) => (
          <SkillBox {...skill} key={skill.label} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
