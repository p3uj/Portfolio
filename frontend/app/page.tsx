import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./Home.module.css";
import About from "./about/about";
import Project from "./projects/project";
import Contact from "./contact/contact";

export default function Home() {
  return (
    <div className={styles["page-layout"]}>
      <Navbar />
      <main>
        <section className={styles["home-section"]} id="home">
          <h1>Bengie Villesco</h1>
          <h2>Frontend Developer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, quod, quia, quae voluptatem quibusdam.
          </p>
          <a href="#project">
            <button>View My Work</button>
          </a>
        </section>
        <section className={styles["about-section"]} id="about">
          <About />
        </section>
        <section className={styles["project-section"]} id="project">
          <Project />
        </section>
        <section className={styles["contact-section"]} id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
