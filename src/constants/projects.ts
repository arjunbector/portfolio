// import ecell from "@/../public/projects/ecell.png";
import caseCobra from "@/../public/projects/casecobra.png";
import contactManager from "@/../public/projects/contactmanager.png";
import moviePulse from "@/../public/projects/moviepulse.png";

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
            "Typescript",
            "Framer Motion",
            "Uploadthing",
            "MongoDB",
            "Stripe",
            "Shadcn UI"
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
    {
        title: "Contact Manager",
        description:
            "Contact Manager App Backend provides a backend server for managing contacts. It includes authentication features and CRUD operations for contacts.",
        img: contactManager,
        github: "https://github.com/arjunbector/Contact-Manager-Backend",
        technologies: ["Express", "MongoDB", "JWT", "Mongoose", "Bcrypt", "Cors", "Dotenv", "Nodemon"],
    },
    {
        title: "Movie Pulse",
        description:
            "A Next.js project that allows users to search for different movies and retrieve detailed information about them.",
        img: moviePulse,
        github: "https://github.com/arjunbector/MoviesPulse",
        deployedLink:"https://arjunbector-moviespulse.netlify.app/",
        technologies: ["Next.js", "Tailwind CSS", "OMDb API", "Framre Motion"],
    },
];