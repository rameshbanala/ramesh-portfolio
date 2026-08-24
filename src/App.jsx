import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Snapshot from "./components/Snapshot";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechnicalDepth from "./components/TechnicalDepth";
import Skills from "./components/Skills";
import CareerEducation from "./components/CareerEducation";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Snapshot />
        <About />
        <Experience />
        <Projects />
        <TechnicalDepth />
        <Skills />
        <CareerEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
