import { StaticImageData } from "next/image";

import ecell from "@/../public/projects/ecell.png";
import caseCobra from "@/../public/projects/casecobra.png";
import contactManager from "@/../public/projects/contactmanager.png";
import moviePulse from "@/../public/projects/moviepulse.png";
import ksham from "@/../public/projects/ksham.png";
import lingo from "@/../public/projects/lingo.png";
import techTribe from "@/../public/projects/tech-tribe.png";
import neorocv from "@/../public/projects/neurocv.png";
import mumbai from "@/../public/projects/mumbai-house-estimator.png";

export interface ProjectInterface {
    title: string;
    img: StaticImageData;
    description: string;
    longDescription?: string;
    deployedLink?: string;
    github?: string;
    technologies: string[];
}

export const PROJECTS: ProjectInterface[] = [
    {
        title: "NeuroCV - AI-Powered Resume Builder",
        img: neorocv,
        description: "AI-integrated resume builder with Google GenAI, real-time preview, drag-and-drop (DND Kit), and Razorpay payments.",
        longDescription: "NeuroCV is a modern resume builder that leverages Google GenAI to provide intelligent resume suggestions and auto-generation. The app supports real-time resume preview, a drag-and-drop interface using DND Kit for layout customization, and secure payment integration through Razorpay. Built with a robust tech stack, it ensures a smooth and interactive user experience while offering seamless resume exports and customization.",
        deployedLink: "https://neurocv.arjunbector.in",
        github: "https://github.com/arjunbector/neurocv",
        technologies: [
            "Next.js",
            "TypeScript",
            "Prisma",
            "Clerk",
            "Google GenAI",
            "Zustand",
            "TailwindCSS",
            "Razorpay",
            "DND Kit"
        ]
    },
    {
        title: "Tech Tribe",
        description: " A social hub where tech enthusiasts connect, collaborate, and share the latest in innovation and tech trends, or memes sometimes.",
        longDescription: "Tech Tribe is a community-driven social platform built for developers, engineers, and tech lovers to post updates, share project ideas, network, and engage in meaningful tech discussions—or just have fun with tech memes. With features like post creation, comments, user authentication via Lucia Auth, and a beautiful UI powered by Shadcn UI and TailwindCSS, the platform is full-stack and production-ready.",
        img: techTribe,
        github: "https://github.com/arjunbector/Tech-Tribe",
        deployedLink: "https://techtribe.arjunbector.in",
        technologies: ["Next.js", "Tailwind CSS", "Typescript", "PostgreSQL", "Shadcn UI", "Lucia Auth", "Prisma", "React-Query", "Uploadthing"]
    },
    {
        title: "Ksham Innovation",
        description: "At Ksham Innovation, the goal is to enhance the hearing aid adoption rate in India by offering affordable, fashionable Smart Aid Glasses. The website showcases the company's products and services.",
        longDescription: "This is the official website for Ksham Innovation, designed to reflect the brand's mission of improving accessibility to hearing aids in India through smart, wearable solutions. The site includes detailed product pages, animations using Framer Motion, and a responsive UI optimized for performance and accessibility. It also includes integrations with AWS S3 for hosting product assets and MongoDB for scalable backend support.",
        img: ksham,
        deployedLink: "https://www.kshaminnovation.in",
        technologies: ["Next.js", "Tailwind CSS", "Typescript", "Framer Motion", "Shadcn UI", "MongoDB", "AWS S3"],
    },
    {
        title: "Lingo - Duolingo Clone",
        description: "Lingo is a language learning platform that uses spaced repetition to help users learn new languages. The app provides a seamless learning experience with a clean and intuitive UI.",
        longDescription: "Lingo mimics Duolingo by implementing a gamified approach to language learning using spaced repetition. It features custom lessons, AI-generated voice pronunciations, personalized avatars, authentication with Clerk, and a visually rich interface. The backend is managed through MongoDB, and the app uses Shadcn UI and TailwindCSS to provide a clean, mobile-friendly interface.",
        img: lingo,
        github: "https://github.com/arjunbector/Lingo",
        deployedLink: "https://lingo.arjunbector.in",
        technologies: ["Next.js", "Tailwind CSS", "Typescript", "MongoDB", "Shadcn UI", "Clerk"]
    },
    {
        title: "Case Cobra",
        description: "Case Cobra is an e-commerce platform that sells premium phone cases. The website is built with Next.js and Tailwind CSS, and features a clean and modern UI.",
        longDescription: "Case Cobra is a fully functional e-commerce platform where users can explore and customize phone cases with their own images before purchasing. It supports secure payments through Stripe, real-time uploads via Uploadthing, and modern UI design using Framer Motion and Shadcn UI. Backend operations are powered by MongoDB, and authentication is handled with Kinde.",
        img: caseCobra,
        github: "https://github.com/arjunbector/phone-case-ecommerce",
        deployedLink: "https://phone-case-ecommerce.arjunbector.in",
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
    {
        title: "Mumbai House Price Estimator",
        description: "A web app that predicts house prices in Mumbai based on various features like location, size, and property time.",
        img: mumbai,
        technologies: ["Flask",
            "Numpy",
            "Pandas",
            "Scikit-learn",
            "Pickle",
            "Next.js",],
        deployedLink: "https://mumbai-price-estimator.arjunbector.in",
        github: "https://github.com/arjunbector/real-estate-price-estimator",
        longDescription: "This web application uses machine learning to predict house prices in Mumbai based on user inputs such as location, size, and property type. It features a user-friendly interface built with Next.js and TailwindCSS, and integrates with a Python backend for model inference. The app provides real-time predictions and visualizations of estimated prices.",
    },
    {
        title: "E-CELL Website",
        description: "Explore E-Cell VIT Vellore’s official website, showcasing club's vibrant entrepreneurial activities and initiatives with Captivating animations and user-friendly navigation.",
        longDescription: "Built for E-Cell VIT Vellore, this website highlights events, workshops, and startup initiatives from the club. The site features animated transitions using Framer Motion, media uploads via Uploadthing, and a modern frontend built with Next.js and TailwindCSS. It serves as both an informational hub and event portal for students.",
        img: ecell,
        deployedLink: "https://e-cell-website-mauve.vercel.app/",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Uploadthing"],
    },
    {
        title: "Contact Manager",
        description: "Contact Manager App Backend provides a backend server for managing contacts. It includes authentication features and CRUD operations for contacts.",
        longDescription: "This backend project serves as the API layer for a contact management application. It features full user authentication with JWT, secure password handling with bcrypt, and supports CRUD operations on contacts. Built with Express and MongoDB, it follows RESTful conventions and is ideal for integration with frontend clients.",
        img: contactManager,
        github: "https://github.com/arjunbector/Contact-Manager-Backend",
        technologies: ["Express", "MongoDB", "JWT", "Mongoose", "Bcrypt", "Cors", "Dotenv", "Nodemon"],
    },
    {
        title: "Movie Pulse",
        description: "A Next.js project that allows users to search for different movies and retrieve detailed information about them.",
        longDescription: "Movie Pulse is a movie search engine that fetches data from the OMDb API to display information like cast, plot, release year, and ratings. It includes a responsive UI built with TailwindCSS and animations using Framer Motion. Ideal for exploring the world of cinema quickly and interactively.",
        img: moviePulse,
        github: "https://github.com/arjunbector/MoviesPulse",
        deployedLink: "https://arjunbector-moviespulse.netlify.app/",
        technologies: ["Next.js", "Tailwind CSS", "OMDb API", "Framer Motion"],
    },
];
