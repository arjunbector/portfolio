import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL_MEDIA_HANDLES } from "@/constants/social-media";
import Link from "next/link";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  delay?: number;
  title: string;
}

const SocialLink = ({ href, icon, delay = 0, title }: SocialLinkProps) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: delay * 0.1, duration: 0.2 }}
  >
    <Link
      href={href}
      className="text-gray-700 transition-colors hover:text-gray-900"
      target="_blank"
      rel="noopener noreferrer"
      title={title}
    >
      {icon}
    </Link>
  </motion.div>
);

const SocialLinks = () => {
  return (
    <div className="hidden items-center space-x-4 md:flex">
      {SOCIAL_MEDIA_HANDLES.map((handle, idx) => (
        <SocialLink
          key={handle.name}
          href={handle.url}
          icon={<handle.icon size={20} />}
          delay={idx + 1}
          title={handle.name}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
