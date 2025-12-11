import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import image from "@/../public/hero-vector.svg";
import smallImage from "@/../public/hero-vector-mobile.svg";
import SocialHoverBoxes from "@/components/social-hover-boxes";

export default function HeroSection() {
  return (
    <MaxWidthWrapper className="md:px-20!">
      <div className="relative h-full flex flex-col-reverse lg:flex-col min-h-[calc(100vh-8rem)] justify-center gap-8">
        <div className="flex flex-col gap-8">
          <div className="text-3xl text-left md:text-5xl space-y-3 md:space-y-4">
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
          <p className="max-w-150 text-justify text-zinc-500">
            I'm Arjun Bector Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to specimen book.
          </p>
          <SocialHoverBoxes />
        </div>

        <Image
          loading="lazy"
          aria-hidden
          className="hidden lg:block md:absolute right-0 md:h-96 lg:h-120 xl:h-160 w-auto"
          src={image}
          height={500}
          width={500}
          alt="hero-section-image"
        />
        <Image
          loading="lazy"
          aria-hidden
          className="lg:hidden h-96 right-0 w-auto"
          src={smallImage}
          height={500}
          width={500}
          alt="hero-section-image"
        />
      </div>
    </MaxWidthWrapper>
  );
}
