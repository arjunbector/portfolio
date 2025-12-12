import { cn } from "@/lib/utils";
import { ComponentType, SVGProps } from "react";

interface SkillBoxProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  showOnSmall: boolean;
}

export default function SkillBox({
  icon: Icon,
  label,
  showOnSmall,
}: SkillBoxProps) {
  return (
    <div
      className={cn(
        "group relative flex size-35 items-center justify-center overflow-hidden rounded-lg border-2 border-black md:size-46",
        { "hidden md:flex": !showOnSmall },
      )}
    >
      <div className="absolute bottom-0 left-0 h-0 w-full bg-black transition-all duration-500 ease-out group-hover:h-full" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <Icon
          className="size-8 text-black transition-colors duration-500 ease-out group-hover:text-white md:size-12"
          strokeWidth={2}
        />
        <p className="text-sm font-bold text-black transition-colors duration-500 ease-out group-hover:text-white md:text-lg">
          {label}
        </p>
      </div>
    </div>
  );
}
