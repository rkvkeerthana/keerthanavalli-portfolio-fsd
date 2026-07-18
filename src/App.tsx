/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ATSResume from './components/ATSResume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAtsView, setIsAtsView] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Synchronize theme with html element class
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  // Monitor section scroll positions to update navbar links actively
  useEffect(() => {
    if (isAtsView) return;

    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAtsView]);

  return (
    <div className="bg-bg-1 text-text-primary font-sans min-h-screen selection:bg-amber-400 selection:text-slate-950 transition-colors duration-300">
      {/* Universal Nav Header */}
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isAtsView={isAtsView}
        setIsAtsView={setIsAtsView}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Main Container Switch */}
      {isAtsView ? (
        <ATSResume />
      ) : (
        <main className="flex flex-col">
          <Hero setIsAtsView={setIsAtsView} setActiveSection={setActiveSection} />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}
