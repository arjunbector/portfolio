"use client";
import React from "react";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <>
      <Intro />
      <About/>
      <Projects/>
    </>
  );
}
