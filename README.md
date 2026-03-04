# Leandro Alves — Portfolio

Personal developer portfolio built with **React 18**, **TypeScript**, and **Vite**.

Live: _[add your Vercel/Netlify URL here]_

---

## Tech Stack

| Layer      | Technology                                |
| ---------- | ----------------------------------------- |
| Framework  | React 18                                  |
| Language   | TypeScript 5                              |
| Build tool | Vite 5                                    |
| Styling    | CSS Modules + CSS custom properties       |
| Fonts      | Syne · Space Mono · Outfit (Google Fonts) |
| Forms      | Formspree                                 |
| Deployment | Vercel / Netlify                          |

---

## Project Structure

```
portfolio/
├── index.html                  # Entry HTML — Vite injects the bundle here
├── vite.config.ts              # Vite configuration with @ alias
├── tsconfig.json               # TypeScript configuration
├── src/
│   ├── main.tsx                # Application entry point
│   ├── App.tsx                 # Root layout component
│   ├── index.css               # Global styles & design tokens
│   ├── types/
│   │   └── index.ts            # Shared TypeScript interfaces
│   ├── data/                   # ← Edit your content here
│   │   ├── personal.ts         # Name, bio, contact info
│   │   ├── projects.ts         # Portfolio projects
│   │   ├── skills.ts           # Technical skills & levels
│   │   └── experience.ts       # Work history & certifications
│   ├── hooks/
│   │   └── useIntersection.ts  # Scroll-reveal Intersection Observer hook
│   └── components/
│       ├── Nav.tsx / .module.css
│       ├── Hero.tsx / .module.css
│       ├── About.tsx / .module.css
│       ├── Skills.tsx / .module.css
│       ├── Projects.tsx / .module.css
│       ├── Experience.tsx / .module.css
│       ├── Contact.tsx / .module.css
│       └── Footer.tsx / .module.css
└── public/
    └── favicon.svg
```

---

## Local Setup

**Requirements:** Node.js 20+ · npm 10+

```bash
# Clone the repository
git clone https://github.com/LeandroAlves45/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev
```

---

## Customisation

All content is centralised in `src/data/`. You never need to touch component logic to update the portfolio.

| File            | What to update                               |
| --------------- | -------------------------------------------- |
| `personal.ts`   | Name, bio, email, GitHub, LinkedIn, location |
| `projects.ts`   | Add / remove projects, update GitHub links   |
| `skills.ts`     | Adjust skills and proficiency levels         |
| `experience.ts` | Work history and certifications              |

### Contact form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint ID
3. In `src/components/Contact.tsx`, replace `YOUR_FORM_ID` with your ID:
   ```ts
   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', ...)
   ```

---

## Available Scripts

Run from the project root:

```bash
npm run dev       # Start development server
npm run build     # Type-check and build for production → dist/
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## Deployment

### Vercel (recommended)

```json
// vercel.json — handles client-side routing
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Netlify

Add `public/_redirects`:

```
/* /index.html 200
```

---

## Pre-launch Checklist

```bash
npm run lint
npm run build
npm audit --audit-level=moderate
```

- [ ] Replace placeholder email in `src/data/personal.ts`
- [ ] Add Formspree endpoint in `src/components/Contact.tsx`
- [ ] Update project GitHub URLs in `src/data/projects.ts`
- [ ] Add AWS credential URL in `src/data/experience.ts`
- [ ] Add `favicon.svg` to `/public`
- [ ] Set live URL in this README

---

## Security Notes

- No secrets or API keys are stored in source
- External links use `rel="noopener noreferrer"`
- `dangerouslySetInnerHTML` is used only for bio text sourced from `data/personal.ts` (controlled, not user input)
- Keep dependencies updated: `npm audit`, `npm update`
