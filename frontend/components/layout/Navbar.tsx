import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <section className={styles.logo}>
        <h1>Bengie Villesco</h1>
      </section>
      <section className={styles.links}>
        <Link href="/#home">Home</Link>
        <Link href="/#about">About</Link>
        <Link href="/#project">Project</Link>
        <Link href="/#contact">Contact</Link>
      </section>
    </nav>
  );
}
