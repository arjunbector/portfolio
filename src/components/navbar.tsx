import Link from "next/link";
import MaxWidthWrapper from "./max-width-wrapper";
import { Button } from "./ui/button";

const NAV_ITEMS = [
  {
    href: "/#about",
    label: "About Me",
  },
  {
    href: "/#skills",
    label: "Skills",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
] as const;

export default function NavBar() {
  return (
    <MaxWidthWrapper>
      <nav className="flex h-20 items-center justify-between text-xl font-semibold">
        <Link href="/" className="transition-opacity hover:opacity-70">
          AB
        </Link>

        <ul className="flex gap-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavItem href={item.href} label={item.label} />
            </li>
          ))}
        </ul>

        <Button asChild>
          <Link href="/#contact">Contact Me</Link>
        </Button>
      </nav>
    </MaxWidthWrapper>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <div className="group relative">
      <Link href={href} className="transition-opacity hover:opacity-70">
        {label}
      </Link>
      <div className="absolute left-0 h-px w-0 bg-black transition-all duration-500 ease-out group-hover:w-full" />
    </div>
  );
}
