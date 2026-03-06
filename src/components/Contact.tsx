// Component - Contact.tsx
// two-column layout: CTA + social links on the left contact form on the right
// Form submission uses Formspree, a service that allows you to handle form submissions without needing a backend. It provides a simple API to send form data and receive notifications when a form is submitted.

import { useState } from "react";
import { personalInfo } from "@/data/personal";
import { useIntersection } from "@/hooks/useIntersection";
import styles from "./Contact.module.css";

// Form state type
interface FormState {
  name: string;
  email: string;
  message: string;
}

// social / contact link list
const CONTACT_LINKS = [
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    display: personalInfo.email,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    display: "www.linkedin.com/in/leandro-alves-developer",
  },
  {
    label: "GitHub",
    href: personalInfo.github,
    display: "github.com/LeandroAlves45",
  },
];

export default function Contact() {
  const [titleRef, titleVisible] = useIntersection<HTMLHeadingElement>();
  const [formRef, formVisible] = useIntersection<HTMLDivElement>({
    threshold: 0.1,
  });

  //Controlled form state
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Update form state on input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xkoqwrpq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className="section-label">05 / Contact</div>

        <div className={styles.grid}>
          {/* CTA and links */}
          <div>
            <h2
              ref={titleRef}
              className={`section-title reveal ${titleVisible ? "visible" : ""} ${styles.title}`}
            >
              Let's Work!
              <span className={styles.accent}> together.</span>
            </h2>

            <p className={styles.sub}>
              Available for full-stack roles, freelance projects or
              collaborations. Feel free to reach out through the form or connect
              with me on LinkedIn and GitHub.
            </p>

            <div className={styles.links}>
              {CONTACT_LINKS.map(({ label, href, display }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={styles.linkItem}
                >
                  <span>{display}</span>
                  <span className={styles.linkLabel}>{label} ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div
            ref={formRef}
            className={`reveal ${formVisible ? "visible" : ""}`}
            style={{ transitionDelay: "0.15s" }}
          >
            {submitted ? (
              //success state shown after form submission
              <div className={styles.successMsg}>
                <span>✓</span>
                <p>Message received. I'll get back to you shortly.</p>
              </div>
            ) : (
              // Contact form
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={styles.input}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Hi, I'd like to..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn--primary ${styles.submitBtn}`}
                >
                  Send Message →{" "}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
