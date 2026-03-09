// DATA - projects.ts

import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Client Management SaaS",
    description:
      "A full-stack SaaS solution for personal trainers, engineering a modular backend with <strong>FastAPI</strong> and <strong>Docker</strong> to ensure scalability. The platform features a responsive <strong>React</strong> and <strong>TypeScript</strong> interface, providing secure data management through <strong>JWT Authentication</strong> and <strong>RBAC</strong>.",
    longDescription:
      "Developed an end-to-end SaaS platform designed to streamline client management for personal trainers, covering 100% of the <strong>Software Development Life Cycle (SDLC)</strong>. <strong>Backend Architecture:</strong> Built a modular and high-performance API using <strong>FastAPI</strong>, integrated with <strong>PostgreSQL (SQLModel)</strong> and containerized with <strong>Docker</strong> for seamless deployment and growth. Managed the full deployment pipeline on <strong>Railway</strong>, ensuring continuous integration and delivery. <strong>Frontend Experience:</strong> Designed a responsive and intuitive user interface using <strong>React</strong>, <strong>Vite</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong> to simplify complex data management for end-users. Deployed the frontend on <strong>Vercel</strong> for optimal performance and scalability. <strong>Security & Infrastructure:</strong> Implemented robust security protocols, including JWT Authentication and Role-Based Access Control (RBAC), while managing the full deployment pipeline on <strong>Railway</strong>.",
    tags: [
      "FastAPI",
      "React",
      "TypeScript",
      "Docker",
      "PostgreSQL",
      "JWT Authentication",
      "RBAC",
      "Vite",
      "Tailwind CSS",
      "Railway",
      "Vercel",
      "Python",
    ],
    status: "In Development",
    githubBackEndUrl:
      "https://github.com/LeandroAlves45/Project_pt_manager.git",
    githubFrontEndUrl:
      "https://github.com/LeandroAlves45/Pt_manager_Front_End.git",
    liveUrl: "https://ptmanagerbackend-production.up.railway.app",
    liveUrlFrontEnd:
      "https://vercel.com/leandro-alves-projects-ebc170c0/pt-manager-front-end/GFodxUZjLdFbDaBm7eDVRLeRZStM",
  },
  {
    id: 2,
    title: "Victorious Jiu-Jitsu Academy Website",
    description:
      "Institutional website for a Jiu-Jitsu academy, featuring class schedules, instructor profiles and a contact form. Built with a focus on <strong>responsive design</strong> and clean UI.",
    longDescription:
      "Designed and developed a responsive institutional website for Victorious Jiu-Jitsu Academy, showcasing class schedules, instructor profiles, and a contact form. The project emphasized clean UI/UX principles to create an engaging online presence for the academy. Technologies used include <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, with a focus on ensuring accessibility and mobile responsiveness.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    status: "Completed",
    githubUrl:
      "https://github.com/LeandroAlves45/Site_Victorious_Jiu_jitsu.git",
    liveUrl: "https://portfolio-three-gules-a83qb4ujlo.vercel.app/",
  },
  {
    id: 3,
    title: "Car Rental Management System",
    description:
      "A comprehensive fleet and booking management platform featuring a <strong>Flask</strong> web application and a synchronized <strong>Tkinter</strong> desktop version. The system handles real-world transaction simulations with centralized data persistence using <strong>SQLite</strong>.",
    longDescription:
      "Developed as a Capstone Project, this system provides a centralized solution for fleet management and booking transactions. <strong>Web Platform:</strong> Built using <strong>Python</strong> and <strong>Flask</strong>, utilizing responsive HTML/CSS templates for an intuitive user experience. <strong>Desktop Integration:</strong> Engineered a full-featured desktop version using <strong>Tkinter</strong> that replicates all core functionalities of the web application. <strong>Data Management:</strong> Implemented robust data persistence with <strong>SQLite</strong>, ensuring reliable storage for simulated real-world transactions. <strong>Versatility:</strong> Demonstrated the ability to bridge different environments (Web and Desktop) while maintaining a consistent backend logic.",
    tags: [
      "Flask",
      "Tkinter",
      "SQLite",
      "Python",
      "Web Development",
      "Desktop Application",
    ],
    status: "Completed",
    githubUrl:
      "https://github.com/LeandroAlves45/Projeto_final_curso_python.git",
  },
];
