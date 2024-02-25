"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 300,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mouseInside, setMouseInside] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const containerRef = useRef(null);
  const updateMousePosition = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  useEffect(() => {
    containerRef.current.addEventListener("mousemove", updateMousePosition);
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mousemove",
          updateMousePosition
        );
      }
    };
  }, []);
  let maskSize = mouseInside ? (isHovered ? revealSize : size) : 0;

  return (
    <motion.div
      ref={containerRef}
      className={cn("h-screen relative", className)}
      onMouseEnter={() => {
        setMouseInside(true);
      }}
      onMouseLeave={() => {
        setMouseInside(false);
      }}
    >
      <motion.div
        className="w-full h-full flex items-center justify-center text-6xl absolute bg-orange-600 bg-grid-white/[0.2] text-black [mask-image:url(/mask.svg)] [mask-size:40px] [mask-repeat:no-repeat]"
        animate={{
          WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${
            mousePosition.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.25 }}
      >
        <div className="absolute inset-0 bg-white h-full w-full z-0 opacity-50" />
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className="max-w-full px-20 mx-auto text-center text-black text-5xl font-bold relative z-20"
        >
          {children}
        </div>
      </motion.div>

      <div className="w-full h-full flex items-center justify-center  text-white">
        {revealText}
      </div>
    </motion.div>
  );
};
