// COMPONENT - Skills.tsx

import { skillCategories } from "@/data/skills";
import { useIntersection } from "@/hooks/useIntersection";
import type { SkillCategory } from "@/types";
import styles from "./Skills.module.css";

// Sub-component for rendering individual skill categories
function SkillCard({
  category,
  delay = 0,
}: {
  category: SkillCategory;
  delay?: number;
}) {
  const [ref, visible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${styles.card}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Category title */}
      <div className={styles.cardTitle}>{category.title}</div>

      {/* List of skills */}
      <ul className={styles.list}>
        {category.skills.map(({ name, level }) => (
          <li key={name} className={styles.item}>
            <span className={styles.skillName}>{name}</span>

            {/* Progress bar representing skill level */}
            <div className={styles.bar} aria-label={`${name}: ${level}%`}>
              <div
                className={styles.barFill}
                style={{ width: visible ? `${level}%` : "0%" }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main component for the Skills section
export default function Skills() {
  const [titleRef, titleVisible] = useIntersection<HTMLHeadingElement>({
    threshold: 0.1,
  });

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        {/* Section label */}
        <div className="section-label">02 / Skills</div>

        <h2
          ref={titleRef}
          className={`section-title reveal ${titleVisible ? "visible" : ""}`}
        >
          Technical Stack
        </h2>

        {/* Grid of skill categories */}
        <div className={styles.grid}>
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
