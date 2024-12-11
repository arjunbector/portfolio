import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
  id,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={cn("mx-auto h-full w-full max-w-screen-xl", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
