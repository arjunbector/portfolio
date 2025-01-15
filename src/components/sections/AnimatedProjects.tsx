"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Projects from "./Projects";
import { useNavbar } from "../header/HeaderContext";

export default function AnimatedProjects() {
  const { setChangeColor } = useNavbar();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 500]);

  const letterSpacing = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5],
    ["normal", "0.2em", "0.3em"],
  );

  const yOffset = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-5%", "-100%"],
  );

  const xOffset = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "-3%", "-3%"],
  );

  // Listen to scrollYProgress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setChangeColor("dark");
    } else {
      setChangeColor("light");
    }
  });

  const letters = "PROJECTS".split("");

  return (
    <div className="relative" id="projects">
      <div className="overflow-hidden">
        <div ref={containerRef} className="relative h-[250vh]">
          <motion.div
            style={{
              scale,
              y: yOffset,
            }}
            className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-white"
          >
            <motion.div
              style={{ letterSpacing, x: xOffset }}
              className="mx-auto flex items-center justify-center overflow-hidden px-4"
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-6xl font-extrabold text-[#121212] md:text-8xl"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Projects />
    </div>
  );
}
