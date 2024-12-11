import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLink from './NavLink';

interface MobileMenuProps {
  isOpen: boolean;
}

const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren"
    }
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="md:hidden overflow-hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <NavLink href="#" isMobile delay={1}>About</NavLink>
            <NavLink href="#projects" isMobile delay={2}>Projects</NavLink>
            <NavLink href="#contact" isMobile delay={4}>Contact</NavLink>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;