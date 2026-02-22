import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "./home/home";
import About from "./about/about";
import Project from "./projects/project";
import Contact from "./contact/contact";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="project">
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
