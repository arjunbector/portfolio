import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "./hero-section";
import Skills from "./skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills/>
    </>
  );
}
