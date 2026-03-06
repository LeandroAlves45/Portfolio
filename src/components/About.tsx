// Component - About.tsx
// Componente que exibe informações com duas colunas de layout

import { personalInfo } from "@/data/personal";
import { useIntersection } from "@/hooks/useIntersection";
import styles from "./About.module.css";

// Keys- value rows rendered in the about section
const DETAILS = [
  { key: "Location", value: "Maia, Porto - Portugal" },
  { key: "Focus", value: "Full Stack Development" },
  {
    key: " Backend",
    value: "FastAPI, Flask, PostgreSQL, Python, C#, Swagger, Postman, Docker",
  },
  { key: "Frontend", value: "React, TypeScript, Tailwind CSS, Vite" },
  { key: "Cloud", value: "AWS Certified Cloud Practitioner (CLF-C02)" },
  { key: "Languages", value: "Portuguese, English" },
  {
    key: "Available",
    value: personalInfo.available ? "Yes" : "No",
    accent: personalInfo.available,
  },
];

export default function About() {
  // Hook retorna uma referência e um boolean indicando se o elemento está visível na viewport
  const [sectionRef, isVisible] = useIntersection<HTMLDivElement>();
  const [detailsRef, detailsVisible] = useIntersection<HTMLDivElement>();

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        {/* Section label */}
        <div className="section-label">01 / About Me</div>

        <div className={styles.grid}>
          {/* Biografia */}
          <div
            ref={sectionRef}
            className={`reveal ${isVisible ? "visible" : ""} ${styles.text}`}
          >
            <h2 className="section-title"> Who Am I </h2>

            {/* Parágrafo de introdução */}
            {personalInfo.bio.map((paragraph, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          <img
            src="/assets/photo.jpeg"
            alt="Leandro Alves - Full Stack Developer"
            className={styles.photo}
          />

          {/* Detalhes pessoais */}
          <div
            ref={detailsRef}
            className={`reveal ${detailsVisible ? "visible" : ""} ${styles.details}`}
            style={{ transitionDelay: "0.15s" }}
          >
            {DETAILS.map(({ key, value, accent }) => (
              <div key={key} className={styles.row}>
                <span className={styles.rowKey}>{key}</span>
                <span
                  className={styles.rowValue}
                  style={{ color: accent ? "var(--accent)" : undefined }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
