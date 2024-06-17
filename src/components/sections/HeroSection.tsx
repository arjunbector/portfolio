import OrbitingCircles from "@/components/ui/orbiting-circles";
import { BiLogoAws } from "react-icons/bi";
import { FaFigma, FaGithub } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import MaxWidthWrapper from "../ui/MaxWidthWrapper";
import { FlipWords } from "../ui/flip-words";
const WORDS = [
  "Frontend Frameworks",
  "Backend Development",
  "Javascript Libraries",
  "UI/UX Designs",
];
const HeroSection = () => {
  return (
    <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 items-center min-h-screen">
      <div className="sm:ml-8">
        <h1 className="text-5xl font-semibold mb-2">Hi, I'm Arjun Bector 👋</h1>
        <p className="max-w-prose text-xl">
          I'm a passionate software engineer with an interest in
          <br />
          <FlipWords duration={2000} words={WORDS} />
        </p>
      </div>
      <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg bg-background">
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={60}
        >
          <FaGithub className="h-8 w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[30px] w-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={60}
        >
          <RiTailwindCssFill className="h-8 w-8" />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          reverse
        >
          <RiNextjsFill className="h-8 w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          delay={20}
          reverse
        >
          <BiLogoAws className="h-8 w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          delay={30}
          reverse
        >
          <FaFigma className="h-8 w-8" />
        </OrbitingCircles>
        <OrbitingCircles
          className="h-[50px] w-[50px] border-none bg-transparent"
          radius={120}
          duration={40}
          delay={40}
          reverse
        >
          <SiMongodb className="h-8 w-8" />
        </OrbitingCircles>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
