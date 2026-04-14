// DATA - projects.ts

import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal Trainer Management SaaS",
    description:
      "A full stack SaaS platform built to help personal trainers centralize " +
      "client management, streamline daily operations, and scale their " +
      "business through a single, secure, and intuitive system.",
    longDescription:
      "Developed an end to end SaaS platform designed to solve one of the " +
      "most common problems in the personal training industry: fragmented " +
      "workflows spread across spreadsheets, messaging apps, manual notes, " +
      "and disconnected tools. The platform centralizes client management, " +
      "training plans, nutrition plans, check-ins, and session tracking into " +
      "a single system, allowing personal trainers to reduce administrative " +
      "overhead, improve service consistency, and manage a growing client " +
      "base more efficiently. On the backend, the application was engineered " +
      "with FastAPI, PostgreSQL, and SQLModel using a modular and scalable " +
      "architecture focused on maintainability, performance, and clean " +
      "separation of concerns. Docker was used to containerize the " +
      "application and support consistent deployment workflows, while Railway " +
      "handled infrastructure and delivery. On the frontend, React, " +
      "TypeScript, Vite, and Tailwind CSS were used to build a responsive " +
      "and intuitive interface that simplifies complex data management for " +
      "end users. Security was implemented with JWT authentication and role " +
      "based access control, ensuring protected access to sensitive client " +
      "data. The project was developed across the full software development " +
      "life cycle, from architecture and implementation to deployment, with a " +
      "strong focus on clean code, scalability, and real business impact.",
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
      "https://vercel.com/leandro-alves-projects-ebc170c0/" +
      "pt-manager-front-end/GFodxUZjLdFbDaBm7eDVRLeRZStM",
  },
  {
    id: 2,
    title: "Collabwave",
    description:
      "A real time collaborative task management SaaS built to help teams " +
      "organize work, coordinate faster, and stay synchronized through shared " +
      "workspaces, live task updates, and low latency collaboration.",
    longDescription:
      "CollabWave is a full stack SaaS platform designed to solve a common " +
      "problem in team productivity: fragmented collaboration across " +
      "disconnected tools, delayed task updates, and lack of real time " +
      "visibility into team activity. The platform enables teams to create " +
      "shared workspaces, manage tasks on interactive Kanban boards, and " +
      "instantly see changes made by other members without page refreshes. It " +
      "includes role based workspace membership, invite based collaboration, " +
      "live presence indicators, real time task synchronization, and in app " +
      "notifications for assignments and mentions. Architecturally, the " +
      "system was designed with a clear separation between the REST API and " +
      "WebSocket layers, using Node.js, Express, Socket.io, Redis, and " +
      "PostgreSQL to support scalable real time communication and persistent " +
      "task management. Redis pub sub enables horizontal scaling of the " +
      "WebSocket layer, while JWT authentication secures both HTTP requests " +
      "and socket connections. The frontend was built with React, Vite, " +
      "TypeScript, Zustand, and React Router to deliver a responsive and " +
      "efficient user experience, including drag and drop task workflows and " +
      "optimistic UI updates. The project also includes Docker based local " +
      "and production environments, CI pipelines with GitHub Actions, " +
      "automated testing across multiple layers, and deployment planning for " +
      "Railway and AWS, reflecting a production oriented engineering approach.",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Socket.io",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],
    status: "In Development",
    githubUrl: "https://github.com/LeandroAlves45/Collabwave.git",
  },
  {
    id: 3,
    title: "Victorious Jiu-Jitsu Academy Website",
    description:
      "Institutional website for a Jiu-Jitsu academy, featuring class " +
      "schedules, instructor profiles and a contact form. Built with a focus " +
      "on <strong>responsive design</strong> and clean UI.",
    longDescription:
      "Designed and developed a responsive institutional website for " +
      "Victorious Jiu-Jitsu Academy, showcasing class schedules, instructor " +
      "profiles, and a contact form. The project emphasized clean UI/UX " +
      "principles to create an engaging online presence for the academy. " +
      "Technologies used include <strong>HTML</strong>, " +
      "<strong>CSS</strong>, and <strong>JavaScript</strong>, with a focus on " +
      "ensuring accessibility and mobile responsiveness.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX"],
    status: "Completed",
    githubUrl:
      "https://github.com/LeandroAlves45/Site_Victorious_Jiu_jitsu.git",
    liveUrl: "https://sitevictoriousjiujitsu.vercel.app/",
  },
  {
    id: 4,
    title: "Car Rental Management System",
    description:
      "A comprehensive fleet and booking management platform featuring a " +
      "<strong>Flask</strong> web application and a synchronized " +
      "<strong>Tkinter</strong> desktop version. The system handles " +
      "real-world transaction simulations with centralized data persistence " +
      "using <strong>SQLite</strong>.",
    longDescription:
      "Developed as a Capstone Project, this system provides a centralized " +
      "solution for fleet management and booking transactions. " +
      "<strong>Web Platform:</strong> Built using <strong>Python</strong> " +
      "and <strong>Flask</strong>, utilizing responsive HTML/CSS templates " +
      "for an intuitive user experience. " +
      "<strong>Desktop Integration:</strong> Engineered a full-featured " +
      "desktop version using <strong>Tkinter</strong> that replicates all " +
      "core functionalities of the web application. " +
      "<strong>Data Management:</strong> Implemented robust data persistence " +
      "with <strong>SQLite</strong>, ensuring reliable storage for simulated " +
      "real-world transactions. <strong>Versatility:</strong> Demonstrated " +
      "the ability to bridge different environments (Web and Desktop) while " +
      "maintaining a consistent backend logic.",
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
