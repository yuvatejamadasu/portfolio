import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { portfolioData } from './data/portfolioData';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#0f172a] min-h-screen">
      <Navbar />
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Contact data={portfolioData} />
      </main>
      <footer className="py-12 border-t border-white/10 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
