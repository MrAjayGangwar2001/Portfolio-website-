import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app-dark">
      <Navbar />
      <section id="about"   className="about-section">   <About />   </section>
      <section id="skills"  className="skills-section">  <Skills />  </section>
      <section id="projects"className="projects-section"><Project /></section>
      <section id="contact" className="contact-section"> <Contact /> </section>
      <Footer />
    </div>
  );
}

export default App;