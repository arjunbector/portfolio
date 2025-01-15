import AnimatedProjects from "@/components/sections/AnimatedProjects";
import Connect from "@/components/sections/Connect";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";

export default function Home() {

  return (
    <main>
     <HeroSection/>
     <IntroSection/>
     <AnimatedProjects/>
     <Connect/>
    </main>
  );
}
