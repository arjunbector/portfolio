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
        "group relative flex size-46 items-center justify-center overflow-hidden rounded-lg border-2 border-black",
        { "hidden md:flex": !showOnSmall },
      )}
    >
      <div className="absolute bottom-0 left-0 h-0 w-full bg-black transition-all duration-500 ease-out group-hover:h-full" />
      <div className="relative z-10 flex flex-col items-center justify-center gap-4">
        <Icon
          className="size-12 text-black transition-colors duration-500 ease-out group-hover:text-white"
          strokeWidth={2}
        />
        <p className="font-bold text-black transition-colors duration-500 ease-out group-hover:text-white">
          {label}
        </p>
      </div>
    </div>
  );
}
