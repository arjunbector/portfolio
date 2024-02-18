"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <main className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <motion.h1
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn("md:text-4xl text-3xl text-white relative z-20")}
      >
        Hi, I am Arjun Bector
      </motion.h1>
      <motion.p
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{delay:0.5}}
        className="text-center mt-2 text-neutral-300 relative z-20 tracking-[0.3em] sm:tracking-[0.5em] md:tracking-[0.7em]"
      >
        Frontend Developer
      </motion.p>
    </main>
  );
};

export default Intro;
