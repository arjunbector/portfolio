import ecell from "@/../public/projects/ecell.png";
import caseCobra from "@/../public/projects/casecobra.png";

export const PROJECTS = [
    {
        title: "Case Cobra",
        description:
            "Developed a full-stack phone case e-commerce website, featuring secure user authentication, dynamic product management, and a seamless shopping cart and checkout experience.",
        img: caseCobra,
        github: "https://github.com/arjunbector/phone-case-ecommerce",
        deployedLink: "https://phone-case-ecommerce.vercel.app",
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "Framer Motion",
            "Uploadthing",
            "MongoDB",
            "Stripe",
            "Next-Themes",
            "Shadcn UI"
        ],
    },
    {
        title: "E-CELL Website",
        description:
            "Explore E-Cell VIT Vellore’s official website, showcasing club's vibrant entrepreneurial activities and initiatives with Captivating animations and user-friendly navigation.",
        img: ecell,
        github: "https://github.com/arjunbector/ECell-Website",
        deployedLink: "https://e-cell-website-mauve.vercel.app/",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Uploadthing"],
    },
];