// import ecell from "@/../public/projects/ecell.png";
import caseCobra from "@/../public/projects/casecobra.png";
import contactManager from "@/../public/projects/contactmanager.png";
import moviePulse from "@/../public/projects/moviepulse.png";
import ksham from "@/../public/projects/ksham.png";
import lingo from "@/../public/projects/lingo.png";
import techTribe from "@/../public/projects/tech-tribe.png";

export const PROJECTS = [
    {
        title: "Tech Tribe",
        description: " A social hub where tech enthusiasts connect, collaborate, and share the latest in innovation and tech trends, or memes sometimes.",
        img: techTribe,
        github: "https://github.com/arjunbector/Tech-Tribe",
        deployedLink: "https://techtribe.arjunbector.live",
        technologies: ["Next.js", "Tailwind CSS", "Typescript", "PostgreSQL", "Shadcn UI", "Lucia Auth", "Prisma", "React-Query", "Uploadthing"]
    },
    {
        title: "Ksham Innovation",
        description: "At Ksham Innovation, the goal is to enhance the hearing aid adoption rate in India by offering affordable, fashionable Smart Aid Glasses. The website showcases the company's products and services.",
        img: ksham,
        deployedLink: "https://www.kshaminnovation.in",
        technologies: ["Next.js", "Tailwind CSS", "Typescript", "Framer Motion", "Shadcn UI", "MongoDB", "AWS S3"],
    },
    {
        title: "Lingo - Duolingo Clone",
        description: "Lingo is a language learning platform that uses spaced repetition to help users learn new languages. The app provides a seamless learning experience with a clean and intuitive UI.",
        img: lingo,
        github: "https://github.com/arjunbector/Lingo",
        deployedLink: "https://lingo.arjunbector.live",
        technologies: ["Next.js", "Tailwind CSS", "Typescript", "MongoDB", "Shadcn UI", "Clerk",]
    },
    {
        title: "Case Cobra",
        description: "Case Cobra is an e-commerce platform that sells premium phone cases. The website is built with Next.js and Tailwind CSS, and features a clean and modern UI.",
        img: caseCobra,
        github: "https://github.com/arjunbector/phone-case-ecommerce",
        deployedLink: "https://phone-case-ecommerce.vercel.app",
        technologies: [
            "Next.js",
            "Tailwind CSS",
            "Typescript",
            "Framer Motion",
            "Uploadthing",
            "MongoDB",
            "Stripe",
            "Shadcn UI",
            "Kinde"
        ],
    },
    // {
    //     title: "E-CELL Website",
    //     description:
    //         "Explore E-Cell VIT Vellore’s official website, showcasing club's vibrant entrepreneurial activities and initiatives with Captivating animations and user-friendly navigation.",
    //     img: ecell,
    //     github: "https://github.com/arjunbector/ECell-Website",
    //     deployedLink: "https://e-cell-website-mauve.vercel.app/",
    //     technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Uploadthing"],
    // },
    // {
    //     title: "Contact Manager",
    //     description:
    //         "Contact Manager App Backend provides a backend server for managing contacts. It includes authentication features and CRUD operations for contacts.",
    //     img: contactManager,
    //     github: "https://github.com/arjunbector/Contact-Manager-Backend",
    //     technologies: ["Express", "MongoDB", "JWT", "Mongoose", "Bcrypt", "Cors", "Dotenv", "Nodemon"],
    // },
    // // {
    //     title: "Movie Pulse",
    //     description:
    //         "A Next.js project that allows users to search for different movies and retrieve detailed information about them.",
    //     img: moviePulse,
    //     github: "https://github.com/arjunbector/MoviesPulse",
    //     deployedLink: "https://arjunbector-moviespulse.netlify.app/",
    //     technologies: ["Next.js", "Tailwind CSS", "OMDb API", "Framer Motion"],
    // },
];