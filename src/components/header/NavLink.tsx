import React from 'react';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isMobile?: boolean;
  delay?: number;
}

const NavLink = ({ href, children, isMobile, delay = 0 }: NavLinkProps) => {
  const baseClasses = "text-gray-700 hover:text-gray-900 transition-colors";
  const mobileClasses = "block px-3 py-2";
  const desktopClasses = "";

  return (
    <motion.a
      href={href}
      className={`${baseClasses} ${isMobile ? mobileClasses : desktopClasses}`}
      initial={isMobile ? { x: -20, opacity: 0 } : {}}
      animate={isMobile ? { x: 0, opacity: 1 } : {}}
      transition={{ delay: delay * 0.1, duration: 0.3 }}
    >
      {children}
    </motion.a>
  );
};

export default NavLink;