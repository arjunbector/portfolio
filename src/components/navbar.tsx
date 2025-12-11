import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <MaxWidthWrapper>
      <nav className="flex justify-between my-6 font-semibold text-xl h-20">
        <div>
          <Link href="/">AB</Link>
        </div>
        <div>
          <ul className="flex gap-10">
            <li>
              <Link href="">About Me</Link>
            </li>
            <li>
              <Link href="/#skills">Skills</Link>
            </li>
            <li>
              <Link href="/#projects">Project</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button>Contact Me</Button>
        </div>
      </nav>
    </MaxWidthWrapper>
  );
}
