import MaxWidthWrapper from "@/components/max-width-wrapper";
import Image from "next/image";
import image from "@/../public/about-vector.svg";

export default function AboutMe() {
  return (
    <MaxWidthWrapper className="my-10 flex gap-10 py-10" id="about">
      <div className="w-2/5">
        <Image
          src={image}
          alt="vector"
          aria-hidden
          className="mx-auto h-full w-auto"
        />
      </div>
      <div className="w-3/5">
        <h1 className="mb-10 text-5xl font-light">
          About <span className="font-bold">Me</span>
        </h1>
        <div className="max-w-prose space-y-5 text-zinc-500">
          <p>
            I'm a developer who enjoys building digital products that feel
            clean, intuitive, and visually engaging. I focus on blending strong
            product sense with smooth interfaces and subtle animations, making
            every project both functional and enjoyable to use.
          </p>
          <p>
            My journey in web development began in 2023. Since then, I've grown
            from experimenting with simple frontends to building full-stack,
            production-ready applications across Next.js, TypeScript, and modern
            tooling. What drives me is the satisfaction of shaping ideas into
            interfaces that users instantly connect with.
          </p>
          <p>
            In the long run, I'm aiming to grow into a product-focused
            engineer—someone who understands both what to build and how to build
            it well. When I'm not developing, you'll probably find me watching
            cricket, playing cricket, or trying to squeeze in a good badminton
            session.
          </p>
          <p>
            Outside work, I love exploring new tech products, keeping up with
            the latest tools and trends, and diving into how great products are
            designed. When I'm not in that mode, you'll usually find me on a
            badminton court unwinding with a good match.
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
