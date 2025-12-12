import AboutMe from "./about";
import Experience from "./experience";
import HeroSection from "./hero-section";
import Skills from "./skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <Experience />
      <AboutMe />
    </>
  );
}
