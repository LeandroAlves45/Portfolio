// TYPES - centralized type definitions for the application

/** A single experience item  with a proficiency percentage */
export interface Skill {
  name: string;
  level: number; // 0-100
}

/** A category of skills */
export interface SkillCategory {
  title: string;
  skills: Skill[];
}

/** Tech tag used on project and experience cards */
export type Tag = string;

/** Status badge displayed on project and experience cards */
export type ProjectStatus = "In Development" | "Completed" | "Archived";

/** A portfolio project */
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: Tag[];
  status: ProjectStatus;
  githubBackEndUrl?: string;
  githubFrontEndUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  liveUrlFrontEnd?: string;
}

/** A professional experience */
export interface Experience {
  period: string;
  type: "Internship" | "Full-time" | "Freelance" | "Education";
  role: string;
  company: string;
  description: string;
  tags: Tag[];
}

/** A professional certification */
export interface Certification {
  issuer: string;
  name: string;
  date: string;
  credentialUrl?: string;
  badgeUrl?: string;
}

/** Personal / contact information */
export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  available: boolean;
  bio: string[];
}
