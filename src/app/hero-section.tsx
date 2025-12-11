import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import image from "@/../public/hero-vector.svg";
import SocialHoverBoxes from "@/components/social-hover-boxes";

export default function HeroSection() {
  return (
    <MaxWidthWrapper className="px-20!">
      <div className="relative h-full flex flex-col min-h-[calc(100vh-8rem)] justify-center gap-8">
        <div className="text-5xl space-y-4">
          <h1>
            Hello I'am{" "}
            <span className="font-bold tracking-tight">Arjun Bector.</span>
          </h1>
          <h1 className="font-bold">
            Software{" "}
            <span className="text-white [-webkit-text-stroke:6px_black] [paint-order:stroke_fill] tracking-tight">
              Developer
            </span>
          </h1>
          <h1>
            Based In <span className="font-bold tracking-tight">India</span>
          </h1>
        </div>
        <p className="max-w-prose text-zinc-500">
          I'm Arjun Bector Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to specimen book.
        </p>
        <SocialHoverBoxes />

        <Image
          loading="lazy"
          aria-hidden
          className="absolute right-0 h-160 w-auto"
          src={image}
          height={500}
          width={500}
          alt="hero-section-image"
        />
      </div>
    </MaxWidthWrapper>
  );
}
