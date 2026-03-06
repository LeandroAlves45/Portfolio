// Component - Experience.tsx - Work history list + certifications

import { experience, certifications } from "@/data/experience";
import { useIntersection } from "@/hooks/useIntersection";
import type { Experience as ExperienceType, Certification } from "@/types";
import styles from "./Experience.module.css";

// Sub-component for rendering individual experience items
function ExperienceCard({
  exp,
  delay = 0,
}: {
  exp: ExperienceType;
  delay?: number;
}) {
  const [ref, visible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${styles.expItem}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Left meta column */}
      <div className={styles.expMeta}>
        <div className={styles.period}>{exp.period}</div>
        <div className={styles.type}>{exp.type}</div>
      </div>

      {/* Right content column */}
      <div className={styles.expContent}>
        <div className={styles.role}>{exp.role}</div>
        <div className={styles.company}>{exp.company}</div>
        <div className={styles.expDesc}>{exp.description}</div>
        <div className={styles.expTags}>
          {exp.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Sub-component for rendering individual certifications
function CertCard({
  cert,
  delay = 0,
}: {
  cert: Certification;
  delay?: number;
}) {
  const [ref, visible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${styles.certCard}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className={styles.certIssuer}>{cert.issuer}</div>
      <div className={styles.certName}>{cert.name}</div>
      <div className={styles.certDate}>{cert.date}</div>

      {/* Link to certificate */}
      {cert.credentialUrl && (
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certLink}
        >
          View Certificate ↗
        </a>
      )}
    </div>
  );
}

// Main component
export default function Experience() {
  const [titleRef, titleVisible] = useIntersection<HTMLDivElement>();

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        {/* Section label */}
        <div className="section-label">04 / Experience</div>

        <h2
          ref={titleRef}
          className={`section-title reveal ${titleVisible ? "visible" : ""}`}
        >
          Background
        </h2>

        {/* Experience list */}
        <div className={styles.expList}>
          {experience.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} delay={i * 0.1} />
          ))}
        </div>

        {/* Certifications */}
        <div className="section-label" style={{ marginTop: "72px" }}>
          Certifications
        </div>

        <div className={styles.certsGrid}>
          {certifications.map((cert, i) => (
            <CertCard key={i} cert={cert} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
