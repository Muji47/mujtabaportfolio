import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Stats />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Services />
      <Divider />
      <Testimonials />
      <Divider />
      <Blog />
      <Divider />
      <Contact />
      <Footer />
    </main>
  );
}
