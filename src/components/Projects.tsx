//COMPONENT - Projects.tsx

import { useState, useEffect, useCallback } from "react";
import { projects } from "@/data/projects";
import { useIntersection } from "@/hooks/useIntersection";
import type { Project } from "@/types";
import styles from "./Projects.module.css";

// Modal
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Close modal on Escape key press
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden"; // Prevent background scroll
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "auto"; // Restore background scroll
    };
  }, [onClose]);

  return (
    // Overlay dark - clicking it will close the modal
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        {/* Header of modal */}
        <div className={styles.modalHeader}>
          <div>
            <span className={styles.modalIndex}>
              {String(project.id).padStart(3, "0")}
            </span>
            {project.status === "In Development" && (
              <span className={styles.badge}>In Development</span>
            )}
          </div>
          {/* Close button */}
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Title */}
        <h3 className={styles.modalTitle}>{project.title}</h3>

        {/* Long description (with HTML) */}
        <p
          className={styles.modalDesc}
          dangerouslySetInnerHTML={{
            __html: project.longDescription || project.description,
          }}
        />

        {/* Tags */}
        <div className={styles.modalTags}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className={styles.modalLinks}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub ↗
            </a>
          )}
          {project.githubBackEndUrl && (
            <a
              href={project.githubBackEndUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Backend ↗
            </a>
          )}
          {project.githubFrontEndUrl && (
            <a
              href={project.githubFrontEndUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Frontend ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// Sub-component for rendering individual project items
function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div
      className={styles.card}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className={styles.cardInner}>
        <span className={styles.index}>
          {String(project.id).padStart(3, "0")}
        </span>

        {project.status === "In Development" && (
          <span className={styles.badge}>In Development</span>
        )}

        <h3 className={styles.title}>{project.title}</h3>

        <p
          className={styles.description}
          dangerouslySetInnerHTML={{ __html: project.description }}
        />

        <div className={styles.tags}>
          {project.tags.slice(0, 4).map(
            (
              tag, // mostra só 4 no card
            ) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ),
          )}
          {project.tags.length > 4 && (
            <span className="tag">+{project.tags.length - 4}</span>
          )}
        </div>

        {/* Hint para abrir o modal */}
        <div className={styles.viewMore}>View details →</div>
      </div>
    </div>
  );
}

// Main Projects component
export default function Projects() {
  const [titleRef, titleVisible] = useIntersection<HTMLHeadingElement>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const total = projects.length;

  //Navigate to the previous project
  const prev = useCallback(() => {
    setActiveIndex((index) => (index - 1 + total) % total);
  }, [total]);

  //Navigate to the next project
  const next = useCallback(() => {
    setActiveIndex((index) => (index + 1) % total);
  }, [total]);

  // Navigato to keyboard arrows
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedProject) return; // Only navigate if no modal is open
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, selectedProject]);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <div className="section-label">03 / Projects</div>
            <h2
              ref={titleRef}
              className={`section-title reveal ${titleVisible ? "visible" : ""}`}
            >
              What I've built
            </h2>
          </div>
          <a
            href="https://github.com/LeandroAlves45"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            GitHub ↗
          </a>
        </div>

        {/* Carousel */}
        <div className={styles.carouselWrapper}>
          {/* Left Arrow*/}
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prev}
            aria-label="Previous project"
          >
            ←
          </button>

          {/* Track — only the active card is visible */}
          <div className={styles.track}>
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`${styles.slide} ${i === activeIndex ? styles.slideActive : ""}`}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={next}
            aria-label="Next project"
          >
            →
          </button>
        </div>

        {/* Indicators (dots) */}
        <div className={styles.dots}>
          {projects.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal — rendered outside the container to cover the entire page */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
