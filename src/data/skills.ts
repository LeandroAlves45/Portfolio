// DATA - skills.ts

import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    skills: [
      { name: "Python", level: 90 },
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 85 },
      { name: "C#", level: 90 },
      { name: "ASP.NET Core", level: 85 },
      { name: "Entity Framework", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Swagger", level: 80 },
      { name: "Postman", level: 80 },
      { name: "SQLModel", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Vite", level: 80 },
      { name: "HTML/CSS", level: 85 },
    ],
  },
  {
    title: "Cloud & Database",
    skills: [
      { name: "AWS (CLF)", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "SQLite", level: 80 },
      { name: "Railway", level: 80 },
      { name: "Vercel", level: 80 },
      { name: "Git & GitHub", level: 85 },
    ],
  },
];
