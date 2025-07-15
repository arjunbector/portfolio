"use client";
import React from "react";
import { motion } from "framer-motion";
import NavLink from "./header/NavLink";
import SocialLinks from "./header/SocialLinks";
import MenuButton from "./header/MenuButtton";
import MobileMenu from "./header/MobileMenu";
import MaxWidthWrapper from "./ui/MaxWidthWrapper";
import { useNavbar } from "./header/HeaderContext";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { changeColor } = useNavbar();

  return (
    <header
      className={cn(
        "fixed z-50 w-full shadow-sm backdrop-blur-md bg-opacity-80",
        changeColor === "dark" ? "bg-[#121212]" : "bg-white",
      )}
    >
      <MaxWidthWrapper>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex h-16 items-center justify-between",
              changeColor === "dark" ? "text-gray-100" : "text-gray-900",
            )}
          >
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/" className="text-2xl font-bold">
                AB
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden space-x-8 md:flex"
            >
              <NavLink href="/#">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </motion.nav>

            <SocialLinks />

            {/* Mobile menu button */}
            <MenuButton
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenu isOpen={isMenuOpen} />
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
