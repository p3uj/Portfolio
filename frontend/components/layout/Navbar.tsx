"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [isActive, setActive] = useState<string | null>(null);

  return (
    <nav className={styles.navbar}>
      <section className={styles.logo}>
        <h1>Bengie Villesco</h1>
      </section>
      <section className={styles.links}>
        <Link
          href="/#home"
          className={isActive === "home" ? styles.active : ""}
          onClick={() => setActive("home")}
        >
          Home
        </Link>
        <Link
          href="/#about"
          className={isActive === "about" ? styles.active : ""}
          onClick={() => setActive("about")}
        >
          About
        </Link>
        <Link
          href="/#project"
          className={isActive === "project" ? styles.active : ""}
          onClick={() => setActive("project")}
        >
          Project
        </Link>
        <Link
          href="/#contact"
          className={isActive === "contact" ? styles.active : ""}
          onClick={() => setActive("contact")}
        >
          Contact
        </Link>
      </section>
    </nav>
  );
}
