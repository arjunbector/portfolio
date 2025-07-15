import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import { useNavbar } from "./HeaderContext";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
}

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const { changeColor } = useNavbar();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="overflow-hidden md:hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div
            className={cn(
              "space-y-1 px-2 pb-3 pt-2 sm:px-3",
              changeColor === "dark" ? "bg-[#121212] text-white" : "bg-white text-gray-900",
            )}
          >
            <NavLink href="/#" isMobile delay={1}>
              About
            </NavLink>
            <NavLink href="/projects" isMobile delay={2}>
              Projects
            </NavLink>
            <NavLink href="/#contact" isMobile delay={4}>
              Contact
            </NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
