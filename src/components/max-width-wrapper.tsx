import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWidthWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function MaxWidthWrapper({
  children,
  className,
  ...props
}: MaxWidthWrapperProps) {
  return (
    <div
      className={cn("container mx-auto px-4 md:px-10", className)}
      {...props}
    >
      {children}
    </div>
  );
}
