import chessImg from "@/public/projects/chess.png";
import dllImg from "@/public/projects/dll.png";
import frodyImg from "@/public/projects/frody.png";

import armyImg from "@/public/experiences/army.png";
import dickinsonImg from "@/public/experiences/dickinson.png";
import lumberImg from "@/public/experiences/lumber.png";
import naeilImg from "@/public/experiences/naeil.png";

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    num: 1,
    date: "2023 - Present",
    company: "84 Lumber",
    imageUrl: lumberImg,
    location: "Carlisle, PA",
    title: ["Solutions Architect Intern (Volunteer)"],
    description:
      [
        ["Design a service to enhance system performance and scalability"]
      ],
  },
  {
    num: 1,
    date: "2023 Summer",
    company: "NAEIL Consulting",
    imageUrl: naeilImg,
    location: "Seoul, Korea",
    title: ["Software Engineering Intern"],
    description:
      [
        ["Engineered an automated Natural Language Processing (NLP) translation pipeline of marketing documents using Python, FastAPI, OpenAI API, and AWS Sagemaker, replacing manual translation and saving $2,000 monthly"],
      ],
  },
  {
    num: 1,
    date: "2021 - 2023",
    company: "South Korea Army Intelligence",
    imageUrl: armyImg,
    location: "Paju, Korea",
    title: ["Data Engineer for the Tunnel Neutralization Team"],
    description:
      [
        [" Implemented a scalable PostgreSQL database system to store reconnaissance mission logs, reducing average data entry time from 50 to 10 minutes per mission through streamlined data management"," Identified and located over 30 North Korean underground activities by processing geological sound data with Fast Fourier Transformation and Spectral Analysis techniques using SQL, Excel, and proprietary military tools"],
      ],
  },
  {
    date: "2020 - 2021",
    company: "Dickinson College",
    imageUrl: dickinsonImg,
    location: "Carlisle, PA",
    title: ["Computer Vision Research Intern","Bioinformatics Research Assistant","Teaching Assistant", "Resident Advisor"],
    description:
      [
        [" Developed Convolutional Neural Network visualization pipelines using Deconvolution, Filter Visualization, and Activation Maximization techniques written in Tensorflow for easier interpretability"],
        ["Designed an end-to-end Machine Learning pipeline for analyzing cancer relapse rates based on 20,000 gene map samples using Python scikit-learn"],
        ["Data Structure and Algorithms, Intro to Python, Multivariable Calculus"],
        ["Freshman Resident Advisor (2020 ~ Present)"],
      ],
  },
] as const;

export const projectsData = [
  {
    title: "Frody",
    description:
      'Real-time credit card fraud detection system. PennApps 2023 "Most Technically Complex" and "Best Distributed Systems" winner',
    tags: ["Google Cloud", "Tensorflow", "Spring Boot", "React", "Firebase", "dbt"],
    link: "https://devpost.com/software/temptemp",
    github: "https://github.com/PennApps-XXIV-Team",
    imageUrl: frodyImg,
  },
  {
    title: "AI Implementations",
    description:
      "My Deep Learning paper implementations from scratch.",
    tags: ["Python", "PyTorch"],
    link: "https://boosungkim.com/dllab/",
    github: "https://github.com/boosungkim/Paper-Implementations",
    imageUrl: dllImg,
  },
  {
    title: "Chess for Army Soldiers",
    description:
      "Custom chess enginer made for soldiers without internet access.",
    tags: ["Python", "C++", "MySQL", "Django"],
    link: "https://github.com/boosungkim/custom-chess-engine",
    github: "https://github.com/boosungkim/custom-chess-engine",
    imageUrl: chessImg,
  },
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Redux",
//   "GraphQL",
//   "Apollo",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;

export const skillsData = [
  {
    title: "Backend",
    skills: ["Python", "JavaScript", "Django", "Flask", "Node.js", "MySQL", "Postgres", "MongoDB"],
  },
  {
    title: "Deep Learning",
    skills: ["PyTorch", "Tensorflow", "Scikit-Learn"],
  },
  {
    title: "DevOps",
    skills: ["Git", "Linux", "Docker", "AWS", "CI/CD"],
  },
] as const;

