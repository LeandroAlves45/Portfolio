# Leandro Alves — Portfolio

Personal developer portfolio built with **React 18**, **TypeScript**, and **Vite**. A single-page application featuring scroll-reveal animations, active section tracking, and a fully responsive dark-themed layout.

Live: _[add your Vercel URL here]_

---

## Tech Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Framework  | React 18                                  |
| Language   | TypeScript 5                              |
| Build tool | Vite 7                                    |
| Styling    | CSS Modules + CSS Custom Properties       |
| Fonts      | Syne · Space Mono · Outfit (Google Fonts) |
| Deployment | Vercel                                    |

---

## Project Structure

```text
src/
├── main.tsx                    # Application entry point
├── App.tsx                     # Root layout — composes all sections
├── index.css                   # Global styles and design tokens
├── types/
│   └── index.ts                # Centralized TypeScript interfaces
├── data/                       # Edit here to update all content
│   ├── personal.ts             # Name, bio, email, GitHub, LinkedIn, availability
│   ├── projects.ts             # Portfolio projects and links
│   ├── skills.ts               # Skill categories and proficiency levels
│   └── experience.ts           # Work experience and certifications
├── hooks/
│   └── useIntersection.ts      # IntersectionObserver hook for scroll-reveal
└── components/                 # UI components — each paired with .module.css
    ├── Nav.tsx                  # Sticky navbar with active section tracking and mobile menu
    ├── Hero.tsx                 # Landing section with stats and CTA
    ├── About.tsx                # Bio, photo, and personal details table
    ├── Skills.tsx               # Skill categories with proficiency bars
    ├── Projects.tsx             # Project cards with GitHub and Live Demo links
    ├── Experience.tsx           # Work experience timeline and certifications
    ├── Contact.tsx              # Contact section
    └── Footer.tsx               # Footer
```

---

## Sections

### Nav

Sticky navigation bar with two behaviors driven by `IntersectionObserver`:

- Highlights the active section link as the user scrolls through the page.
- Applies a border/shadow on scroll via a `scrolled` state.

Includes a hamburger menu for mobile that locks background scroll while open.

### Hero

Full-viewport landing section displaying name, role, and a quick-stats panel:

- **3+ Projects**
- **1+ Years Experience**
- **1+ AWS Certified**

Shows an "Available for opportunities" indicator when `personalInfo.available` is `true`. A radial gradient glow is rendered as a pure CSS decorative element.

### About

Two-column layout with:

- Biography rendered from `personalInfo.bio` — supports HTML markup (`<strong>`, etc.) via `dangerouslySetInnerHTML`.
- Profile photo from `public/assets/photo.jpeg`.
- A key-value details table (location, tech stack, cloud certification, availability), with availability highlighted in the accent color.

Both columns use the `useIntersection` hook for staggered scroll-reveal.

### Skills

Three skill categories with visual proficiency bars, all data-driven from `src/data/skills.ts`:

| Category         | Skills                                                                                                     |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| Backend          | Python, FastAPI, Flask, C#, ASP.NET Core, Entity Framework, Docker, Swagger, Postman, SQLModel, REST APIs  |
| Frontend         | React, TypeScript, Tailwind CSS, Vite, HTML/CSS                                                            |
| Cloud & Database | AWS (CLF-C02), PostgreSQL, SQLite, Railway, Vercel, Git & GitHub                                           |

### Projects

Card grid where each card shows:

- Zero-padded index number
- "In Development" status badge (when applicable)
- Description (supports HTML markup)
- Tech stack tags
- Conditional links: GitHub (backend / frontend / single repo), Back End Live Demo, Front End Live Demo

**Featured projects:**

**1. Client Management SaaS — PT Manager** _(In Development)_
A full-stack SaaS platform for personal trainers. Modular FastAPI backend with PostgreSQL and Docker, deployed on Railway. React + TypeScript + Tailwind CSS frontend, deployed on Vercel. Secured with JWT Authentication and RBAC.
Tags: FastAPI · React · TypeScript · Docker · PostgreSQL · JWT · RBAC · Vite · Tailwind CSS · Railway · Vercel · Python

**2. Car Rental Management System** _(Completed)_
Capstone project from Tokio School. Full fleet and booking management system with a Flask web platform and a synchronized Tkinter desktop application, both backed by SQLite.
Tags: Flask · Tkinter · SQLite · Python · Web Development · Desktop Application

### Experience

Timeline of professional experience and education, followed by a certifications block.

**Work & Education:**

| Period | Type | Role | Company |
| --- | --- | --- | --- |
| Dez/2025 – Fev/2026 | Internship | Software Developer | NIDGROUP |
| Jan/2024 – Nov/2025 | Education | Python Programming Student | Tokio School |

At **NIDGROUP**: contributed to modular back-end solutions using .NET and Python. Built secure, scalable APIs with Clean Architecture and Entity Framework Core within an Agile team.

At **Tokio School**: comprehensive Python program covering OOP and data structures, culminating in the Car Rental Management System capstone project.

**Certifications:**

| Certification | Issuer | Date |
| --- | --- | --- |
| AWS Certified Cloud Practitioner (CLF-C02) | Amazon Web Services | Fev/2026 |
| Python Programming Certificate | Tokio School | Nov/2025 |
| IBM Full Stack Software Developer | IBM / Coursera | In progress · 2026 |

---

## Design System

All tokens are defined as CSS custom properties in `src/index.css`:

| Token              | Value       | Usage                        |
| ------------------ | ----------- | ---------------------------- |
| `--bg`             | `#080808`   | Page background              |
| `--bg-card`        | `#111111`   | Card backgrounds             |
| `--bg-hover`       | `#181818`   | Hover card state             |
| `--border`         | `#222222`   | Borders and dividers         |
| `--text-primary`   | `#f0f0f0`   | Main text                    |
| `--text-secondary` | `#888888`   | Labels and muted text        |
| `--accent`         | `#a3e635`   | Lime green highlight color   |
| `--font-display`   | Syne        | Section headings             |
| `--font-mono`      | Space Mono  | Labels, tags, buttons        |
| `--font-body`      | Outfit      | Body text                    |
| `--max-w`          | `1100px`    | Max container width          |
| `--section-gap`    | `120px`     | Vertical spacing per section |

A subtle SVG noise texture overlay (`body::after`) adds tactile depth to the dark background.

---

## Scroll-Reveal Animation

The `useIntersection` hook wraps the native `IntersectionObserver` API:

```ts
export function useIntersection<T extends HTMLElement = HTMLElement>(
  options: Options = {},
): [React.RefObject<T>, boolean]
```

Returns a `[ref, isVisible]` tuple. By default, the observer unobserves the element after the first intersection (`keepWatching: false`). Elements animate in via the `.reveal` / `.reveal.visible` utility classes defined in `index.css`.

```tsx
const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

<div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
```

---

## Path Aliases

The `@` alias maps to `./src`, configured in `vite.config.ts`:

```ts
import { personalInfo } from "@/data/personal";
import { useIntersection } from "@/hooks/useIntersection";
```

---

## Local Setup

**Requirements:** Node.js 20+ · npm 10+

```bash
# Clone the repository
git clone https://github.com/LeandroAlves45/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev
```

---

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Type-check and build for production → dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## Updating Content

All content is data-driven. Edit the files below — no component logic needs to change:

| File                       | What to update                                     |
| -------------------------- | -------------------------------------------------- |
| `src/data/personal.ts`     | Name, bio, email, GitHub, LinkedIn, availability   |
| `src/data/projects.ts`     | Add/remove projects, update URLs and descriptions  |
| `src/data/skills.ts`       | Adjust skill categories and proficiency levels     |
| `src/data/experience.ts`   | Work experience, education, and certifications     |

---

## Deployment

Deployed on **Vercel**. The `vercel.json` at the root handles client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## Security Notes

- No secrets or API keys in source code.
- All external links use `rel="noopener noreferrer"`.
- `dangerouslySetInnerHTML` is used only for bio and project description text sourced from controlled `src/data/` files, not from user input.

---

## Links

- **GitHub:** [github.com/LeandroAlves45](https://github.com/LeandroAlves45)
- **LinkedIn:** [linkedin.com/in/leandro-alves-developer](https://www.linkedin.com/in/leandro-alves-developer/)
