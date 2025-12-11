import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
  className?: string;
}
export default function MaxWidthWrapper({
  children,
  className,
}: MaxWidthWrapperProps) {
  return (
    <div className={cn("container mx-auto px-4 sm:px-10 ", className)}>
      {children}
    </div>
  );
}
