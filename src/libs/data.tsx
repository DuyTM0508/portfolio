import { ImageSources } from "@/assets";
import { FaBriefcase, FaCode, FaGraduationCap, FaTrophy } from "react-icons/fa";
import { Link, Experience, Project, Skill } from "./types";

export const links: Link[] = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData: Experience[] = [
  {
    title: "Bachelor in Software Engineering",
    location: "FPT University, Hà Nội",
    description:
      "Pursued a degree in Software Engineering with a GPA of 3.2/4. Gained foundational knowledge in frontend development, API integration, and collaborative projects.",
    icon: FaGraduationCap,
    date: "08/2021 - 08/2025",
  },
  {
    title: "Good Student Semester Spring 2023",
    location: "FPT University, Hà Nội",
    description:
      "Awarded for outstanding academic performance during the Spring 2023 semester.",
    icon: FaTrophy,
    date: "06/2023",
  },
  {
    title: "Good Student Semester Summer 2023",
    location: "FPT University, Hà Nội",
    description:
      "Awarded for outstanding academic performance during the Summer 2023 semester.",
    icon: FaTrophy,
    date: "10/2023",
  },
  {
    title: "Good Student Semester Fall 2023",
    location: "FPT University, Hà Nội",
    description:
      "Awarded for outstanding academic performance during the Fall 2023 semester.",
    icon: FaTrophy,
    date: "02/2024",
  },
  {
    title: "Frontend Developer",
    location: "Next Level Solution, Hà Nội",
    description:
      "Integrated APIs for Pharma project with authentication and error handling. Developed responsive UI for ShopWithMe (https://mlm.shopwithme.biz/). Handled API integration for Kumology sprints, focusing on data mapping and performance.",
    icon: FaBriefcase,
    date: "05/2024 - 11/2024",
  },
  {
    title: "Blog Platform (MERN Stack)",
    location: "Personal Project",
    description:
      "Built a full-featured blogging platform using MongoDB, Express.js, React, Node.js, Cloudinary, and Postman. Implemented responsive UI, user authentication, rich text editor, comments, and SEO optimizations. GitHub: github.com/DuyTM0508/blog.",
    icon: FaCode,
    date: "09/2024 - 11/2024",
  },
  {
    title: "Good Student Semester Fall 2024",
    location: "FPT University, Hà Nội",
    description:
      "Awarded for outstanding academic performance during the Fall 2024 semester.",
    icon: FaTrophy,
    date: "02/2025",
  },
  {
    title: "Frontend Developer - Second-Hand E-commerce Platform",
    location: "FPT University, Hà Nội",
    description:
      "Built a responsive e-commerce frontend for second-hand products using React, TypeScript, PayOS, Azure Blob Storage, and RESTful APIs. Integrated secure payments, managed product images, and ensured mobile-first design. Live at shopping.2handshop.id.vn.",
    icon: FaCode,
    date: "01/2025 - 04/2025",
  },
  {
    title: "Frontend Developer - GreenHappy Eco-friendly E-commerce Platform",
    location: "FPT University, Hà Nội",
    description:
      "Developed a responsive e-commerce site for plantable greeting cards using React, TypeScript, Tailwind CSS, RESTful APIs, and Azure Blob Storage. Emphasized sustainability storytelling and fast-loading visuals. Live at greenhappy.id.vn.",
    icon: FaCode,
    date: "01/2025 - 04/2025",
  },
  {
    title: "Personal Portfolio Website",
    location: "Personal Project",
    description:
      "Designed and developed a modern, responsive portfolio using Next.js, TypeScript, Tailwind CSS, and Framer Motion. Focused on performance, accessibility, SEO, and smooth animations. Live at https://portfolioduytrann.vercel.app/.",
    icon: FaCode,
    date: "08/2025",
  },
  {
    title:
      "Frontend Developer - AKTS AI Kiosk Testing System (Graduation Project)",
    location: "FPT University, Hà Nội",
    description:
      "Developed the frontend of an AI-powered online examination system using React.js, TypeScript, Vite, Tailwind CSS, Formik, ESLint, and Husky. Built responsive UI, integrated real-time webcam monitoring with AI emotion recognition API, handled dynamic question types, and focused on performance optimization and code quality.",
    icon: FaCode,
    date: "06/2025 - 09/2025",
  },
];

export const projectsData: Project[] = [
  {
    title: "AKTS – AI Kiosk Testing System (Frontend)",
    description:
      "Built a responsive and user-friendly frontend for a second-hand e-commerce platform using React and TypeScript.",
    tags: ["React.Js", "TypeScript", "Vite", "Tailwind CSS,", "Git", "ESLint"],
    imageUrl: ImageSources.akts,
  },
  {
    title: "Blog Platform",
    description:
      "Developed a full-featured online blogging platform supporting post creation, media uploads. Focused on a smooth content creation experience and modern UI/UX.",
    tags: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Cloudinary",
      "Git",
      "Postman",
    ],
    imageUrl: ImageSources.blog,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a modern, responsive personal portfolio to showcase projects, technical skills,...",
    tags: [
      "TypeScript",
      "Next.js",
      "SQL",
      "Tailwind CSS",
      "Framer Motion",
      "Git",
    ],
    imageUrl: ImageSources.porfolio,
  },
  {
    title: "Second-Hand E-commerce Platform",
    description:
      "Built a fully responsive, user-friendly e-commerce frontend tailored for,...",
    tags: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Git",
      "ESLint",
      "RESTful APIs",
      "PayOS",
      "Zustand",
    ],
    imageUrl: ImageSources.handshop,
  },
  {
    title: "GreenHappy – Eco-friendly E-commerce Platform",
    description:
      "Developed a visually appealing and responsive e-commerce website for selling plantable greeting cards,...",
    tags: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Git",
      "ESLint",
      "RESTful APIs",
      "PayOS",
      "Zustand",
    ],
    imageUrl: ImageSources.greenHappy,
  },
];

export const skillsData: Skill[] = [
  "API Integration",
  "Bootstrap",
  "CSS3",
  "Express",
  "HTML5",
  "JavaScript",
  "Material UI",
  "MongoDB",
  "Next.js",
  "Node.js",
  "Performance Optimization",
  "React.js",
  "Responsive Design",
  "SQL Server",
  "Tailwind CSS",
  "TypeScript",
  "Chrome DevTools",
  "Git",
  "GitHub/GitLab",
  "Postman",
  "VS Code",
];
