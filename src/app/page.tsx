import HeroSection from "@/components/sections/HeroSection";
import IntroSection from "@/components/sections/IntroSection";
import Projects from "@/components/sections/Projects";

export default function Home() {

  return (
    <main className="min-h-screen">
     <HeroSection/>
     <IntroSection/>
     <Projects/>
     <div className="h-px w-full bg-zinc-200"/>
    </main>
  );
}
