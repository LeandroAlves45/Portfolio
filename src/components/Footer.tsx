// COMPONENT: Footer.tsx
//

import { useState, useEffect } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Europe/Lisbon",
        }),
      );
    };
    tick(); // Set initial time immediately
    const id = setInterval(tick, 1000); // Update every second
    return () => clearInterval(id); // Cleanup on unmount
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <span className={styles.inner}>
          <span className={styles.copy}>
            © {new Date().getFullYear()} Leandro Alves. All rights reserved.
          </span>
          <span className={styles.copy}>
            Porto, PT{time ? ` - ${time}` : ""}
          </span>
        </span>
      </div>
    </footer>
  );
}
