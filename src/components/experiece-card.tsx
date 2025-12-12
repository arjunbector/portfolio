import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { ComponentType, SVGProps } from "react";

interface ExperienceCardProps {
  image: StaticImageData | ComponentType<SVGProps<SVGSVGElement>>;
  jobRole: string;
  startDate?: string;
  endDate?: string;
  description: string;
  imageClass?: string;
}

export default function ExperienceCard({
  description,
  endDate,
  image,
  jobRole,
  startDate,
  imageClass,
}: ExperienceCardProps) {
  const isStaticImage = typeof image !== "function";
  const IconComponent = image as ComponentType<SVGProps<SVGSVGElement>>;
  return (
    <div className="rounded-xl border border-zinc-500 p-10 text-white duration-200 ease-out hover:bg-zinc-800">
      <div className="mb-6 flex flex-wrap justify-between gap-8">
        <div className="flex items-center gap-8 text-xl font-semibold">
          {isStaticImage ? (
            <Image
              src={image}
              alt=""
              className={cn("h-6 w-auto md:h-8", imageClass)}
            />
          ) : (
            <IconComponent className="size-10" strokeWidth={2} />
          )}
          {jobRole}
        </div>
        {startDate && (
          <div className="font-semibold text-zinc-300">
            <span>{startDate}</span> - <span>{endDate}</span>
          </div>
        )}
      </div>
      <p className="text-sm text-zinc-300">{description}</p>
    </div>
  );
}
