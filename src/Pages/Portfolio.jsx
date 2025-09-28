import { useState } from "react";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function Portfolio() {
  const [isDark, setIsDark] = useState(false);
  const navLinks = ['Home', 'About', 'Skills', 'Certifications', 'Projects', 'Contact'];

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} transition-colors duration-300`}>
      <Header isDark={isDark} toggleTheme={toggleTheme} navLinks={navLinks} />
      <Home isDark={isDark} />
      <About isDark={isDark} />
      <Skills isDark={isDark} />
      <Certifications isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} navLinks={navLinks} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Portfolio;