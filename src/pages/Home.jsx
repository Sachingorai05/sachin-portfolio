import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Certifications from "../components/Certifications/Certifications";
import GitHub from "../components/GitHub/GitHub";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {/* Temporary sections.
            We will replace these with real components one by one. */}

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Education />

        <Certifications />

        <GitHub />

        <Contact />

        <Footer />
        

        
      </main>
    </>
  );
}

export default Home;