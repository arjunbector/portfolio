import Link from "next/link";
import { GitHubIcon, LinkedinIcon, MailIcon } from "./icons/icons";
import type { ComponentType, SVGProps } from "react";
import SocialBox from "./social-box";

const SOCIAL_LINKS: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
}[] = [
  {
    icon: GitHubIcon,
    href: "https://github.com/arjunbector/",
  },
  {
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/arjun-bector",
  },
  {
    icon: MailIcon,
    href:"mailto:arjunbector@gmail.com"
  }
];

export default function SocialHoverBoxes() {
  return (
    <div className="flex gap-4 mx-auto md:mx-0">
      {SOCIAL_LINKS.map((social) => (
        <SocialBox {...social} key={social.href}/>
      ))}
    </div>
  );
}
