import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "./home/home";
import About from "./about/about";
import Project from "./projects/project";
import Contact from "./contact/contact";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-red-500">
      <Navbar />
      <main className="flex flex-col h-full bg-blue-500">
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
