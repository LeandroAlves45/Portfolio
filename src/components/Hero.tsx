// COMPONENT - Hero.tsx

import { personalInfo } from "@/data/personal";
import styles from "./Hero.module.css";

//Quick stats rendered in the right column of the hero section
const STATS = [
  { value: "3", suffix: "+", label: "Projects" },
  { value: "1", suffix: "+", label: "Years Experience" },
  { value: "1", suffix: "+", label: "AWS Certified" },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* Radial gradient glow - pure css */}
      <div className={styles.glow} aria-hidden="true" />

      <div className="container">
        <div className={styles.grid}>
          {/* Left column - main content */}
          <div className={styles.content}>
            {/* Available indicator */}
            {personalInfo.available && (
              <div className={styles.status}>
                <span className={styles.dot} />
                Available for opportunities
              </div>
            )}

            {/* Name */}
            <h1 className={styles.name}>
              {personalInfo.name.split(" ")[0]}
              <br />
              <span className={styles.accent}>
                {personalInfo.name.split(" ")[1]}
              </span>
            </h1>

            <p className={styles.role}>{personalInfo.role}</p>

            <p className={styles.description}>
              Building modern web applications with a focus on performance,
              scalability, and user experience. Passionate about learning new
              technologies and solving complex problems. Based in{" "}
              {personalInfo.location}.
            </p>

            {/* Call to action button */}
            <div className={styles.cta}>
              <a href="#contact" className="btn">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right column - quick stats */}
          <div className={styles.stats}>
            {STATS.map(({ value, suffix, label }) => (
              <div key={label} className={styles.statItem}>
                <div className={styles.statNumber}>
                  {value}
                  <span>{suffix}</span>
                </div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint} aria-hidden="true">
        {" "}
        scroll{" "}
      </div>
    </section>
  );
}
