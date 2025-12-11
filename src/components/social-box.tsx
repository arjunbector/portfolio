import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

interface SocialBoxProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  filled?: boolean;
  href: string;
}
export default function SocialBox({
  icon: Icon,
  filled = false,
  href,
}: SocialBoxProps) {
  return (
    <Link
      href={href}
      className="relative size-16 border-2 border-black rounded-lg overflow-hidden cursor-pointer group"
      target="_blank"
    >
      {/* Background fill animation */}
      <div className="absolute bottom-0 left-0 w-full h-0 bg-black transition-all duration-500 ease-out group-hover:h-full" />

      {/* Icon */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        <Icon
          className={`w-7 h-7 transition-colors duration-500 ease-out ${
            filled ? "text-white" : "text-black group-hover:text-white"
          }`}
          strokeWidth={2}
        />
      </div>

      {/* Filled background for first box */}
      {filled && <div className="absolute inset-0 bg-black -z-10" />}
    </Link>
  );
}
