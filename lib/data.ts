import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import  RoyaleTouche from "@/public/Royaletouche.png";
import InteriorMaata from "@/public/InteriorMaata.png";
import RaajSolar from "@/public/raajSolar.png";
import SiddhGuru from "@/public/Siddhguru.png"
import { LuGraduationCap } from "react-icons/lu";

export const links = [
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
] as const;

export const experiencesData = [
  {
    title: "B.tech, CSE",
    location: "SRM University Delhi Ncr, Delhi",
    description:
      "I completed my engineering in 2022 and started my passion for Coding.",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Web Developer Intern",
    location: "Elpixala, Delhi",
    description:
      "Created prototypes with new technologies, added features, and customized HTML, CSS, and JavaScript for existing sites and applications, while revising website content.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2022",
  },
  {
    title: "UI Developer Trainee",
    location: "I2e consulting pvt.ltd, Mumbai",
    description:
      "Collaborated with senior developers and designers to create responsive, interactive layouts with consistent performance across browsers and devices. Actively engaged in training sessions to stay current with front-end coding trends.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },

  {
    title: "Web Developer",
    location: "Humbee Studio, Ahmedabad",
    description:
      "Experienced in diverse client projects using React and Next.js, including real estate and business sectors. Mentored junior developers, improving code quality by 40%, and collaborated with clients to deliver feature-rich, interactive websites.",
    icon: React.createElement(SiNextdotjs),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Royale touche",
    description:
      "Royale Touche, a plywood manufacturer, offers an online marketplace with 3D factory tours for an interactive experience.",
    tags: ["React", "Next.js", "Framer motion", "React Bootstrap", "Nodemailer", "Gsap"],
    imageUrl:RoyaleTouche,
    projectLink: "https://plywood.royaletouche.com/",
  },
  {
    title: "Interiormaata",
    description:
      "Interiormaata, a renowned interior designer, showcases her minimalist style through interactive 3D elements on this visually stunning website.",
    tags: ["React", "Next.js", "Tailwind", "Wordpress Api", "Redux", "Gsap"],
    imageUrl: InteriorMaata,
    projectLink: "https://interiormaata.com/",
  },
  {
    title: "Raaj Solar",
    description:
      "Raaj Solar, India’s leading solar panel manufacturer, unveils a sleek, mobile-optimized website built with React ",
    tags: ["React", "Nodemailer", "SCSS", "Framer motion" ,"Gsap"],
    imageUrl: RaajSolar,
    projectLink: "https://raajsolar.com",
  },
  {
    title:"Siddhguru",
    description:"Siddhguru is a front-end site built with React, SCSS, and GSAP, providing seamless animations and a user-friendly experience for thousands daily.",
    tags:["React", "SCSS", "Nodemailer","Wordpress Api", "Redux", "Gsap"],
    imageUrl:SiddhGuru,
    projectLink: "https://sribrahmrishiashram.org/",
    
  }

  

  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Npm",
  "CI/CD",
  "Tailwind",
  "Bootstrap",
  "Material UI",
  "JSON",
  "Styled Components",
  "Docker",
  "Authentication",
  "ShadCN",
  "Postman",
  "MongoDB",
  "Redux",
  "Bun",
  "Axios",
  "TanStack Query",
  "Wordpress API",
  "GSAP",
  "Framer Motion",
] as const;
