import Connect from "@/components/sections/Connect";
import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import Projects from "@/components/sections/Projects";

export default function Home() {

  return (
    <main>
     <HeroSection/>
     <IntroSection/>
     <Projects/>
     <Connect/>
    </main>
  );
}
