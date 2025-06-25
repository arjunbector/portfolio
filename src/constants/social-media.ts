import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { TbBrandLeetcode } from "react-icons/tb";

export const SOCIAL_MEDIA_HANDLES = [
  {
    name: "Github",
    url: "https://github.com/arjunbector/",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/arjun-bector",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:arjunbector@gmail.com",
    icon: Mail,
  },
  {
    name: "Resume",
    url: "https://drive.google.com/file/d/12rnPIo26_Ckb82db2_d57UhanU0JLs5I/view?usp=sharing",
    icon: FileText
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/arjunbector/",
    icon: TbBrandLeetcode
  }
];