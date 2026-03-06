// DATA - experience.ts

import { Experience, Certification } from "@/types";

export const experience: Experience[] = [
  {
    period: "Dez/2025 - Fev/2026",
    type: "Internship",
    role: "Software Developer",
    company: "NIDGROUP",
    description:
      "Contributed to the development of modular back-end solutions using the .NET ecosystem and Python. I focused on building secure, scalable APIs and automating data workflows within an Agile team. Key contributions included implementing Clean Architecture and optimizing database interactions through Entity Framework Core.",
    tags: [
      ".NET",
      "Python",
      "Clean Architecture",
      "Entity Framework Core",
      "Agile",
    ],
  },
  {
    period: "Jan/2024 - Nov/2025",
    type: "Education",
    role: "Python Programming Student",
    company: "Tokio School",
    description:
      "Comprehensive Python program focused on Object-Oriented Programming (OOP) and data structures. Developed a Car Rental Management System as a Capstone Project, engineering both a Flask web platform and a Tkinter desktop application with SQLite persistence to simulate real-world fleet transactions.",
    tags: [
      "Python",
      "OOP",
      "Data Structures",
      "Flask",
      "Tkinter",
      "SQLite",
      "Software Architecture",
    ],
  },
];

export const certifications: Certification[] = [
  {
    issuer: "Amazon Web Services",
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    date: "Fev/2026",
    credentialUrl:
      "https://www.credly.com/badges/56a6e4db-c1ef-4b67-8dd6-f3beb668cd73/public_url",
    badgeUrl:
      "https://images.credly.com/size/220x220/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
  },
  {
    issuer: "Tokio School",
    name: "Python Programming Certificate",
    date: "Nov/2025",
    credentialUrl: "",
    badgeUrl: "",
  },
  {
    issuer: "IBM / Coursera",
    name: "IBM Full Stack Software Developer",
    date: "in progress · 2026",
  },
];
