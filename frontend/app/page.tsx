import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "./home/home";
import About from "./about/about";
import Project from "./projects/project";
import Contact from "./contact/contact";

export default function Page() {
  return (
    <div className="flex flex-col size-full pl-[50px] pr-[50px]">
      <Navbar />
      <main className="flex flex-col h-full">
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
