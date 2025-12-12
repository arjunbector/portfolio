"use client";

import Link from "next/link";

interface ScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

export function ScrollLink({ targetId, children, className }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block:"center"});
    }
  };

  return (
    <Link href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
