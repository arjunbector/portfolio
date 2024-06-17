import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto h-full w-full", className)}>
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
