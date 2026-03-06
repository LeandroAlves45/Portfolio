//COMPONENT - Projects.tsx

import { projects } from "@/data/projects";
import { useIntersection } from "@/hooks/useIntersection";
import type { Project } from "@/types";
import styles from "./Projects.module.css";

// Sub-component for rendering individual project items
function ProjectCard({
  project,
  delay = 0,
}: {
  project: Project;
  delay?: number;
}) {
  const [ref, visible] = useIntersection<HTMLDivElement>({ threshold: 0.1 });
  const index = String(project.id).padStart(3, "0");

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "visible" : ""} ${styles.card}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Decorative index number */}
      <span className={styles.index}>{index}</span>

      {/* "In Development" badge - only shown when applicable */}
      {project.status === "In Development" && (
        <span className={styles.badge}>In Development</span>
      )}

      <h3 className={styles.title}>{project.title}</h3>

      <p
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: project.description }}
      />

      {/* Tech tags */}
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Links - only shown if URLs are provided */}
      <div className={styles.links}>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub <span className={styles.arrow}>↗</span>
          </a>
        )}

        {project.githubBackEndUrl && (
          <a
            href={project.githubBackEndUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Backend <span className={styles.arrow}>↗</span>
          </a>
        )}
        {project.githubFrontEndUrl && (
          <a
            href={project.githubFrontEndUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Frontend <span className={styles.arrow}>↗</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Back End Live Demo <span className={styles.arrow}>↗</span>
          </a>
        )}
        {project.liveUrlFrontEnd && (
          <a
            href={project.liveUrlFrontEnd}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Front End Live Demo <span className={styles.arrow}>↗</span>
          </a>
        )}
      </div>
    </div>
  );
}

// Main Projects component
export default function Projects() {
  const [titleRef, titleVisible] = useIntersection<HTMLHeadingElement>();

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <div className="section-label">03 / Projects</div>
            <h2
              ref={titleRef}
              className={`section-title reveal ${titleVisible ? "visible" : ""}`}
            >
              What I've Built
            </h2>
          </div>

          {/* Link to GitHub profile */}
          <a
            href="https://github.com/LeandroAlves45"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub ↗
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
