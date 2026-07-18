/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, FileText, ChevronDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

interface HeroProps {
  setIsAtsView: (view: boolean) => void;
  setActiveSection: (section: string) => void;
}

export default function Hero({ setIsAtsView, setActiveSection }: HeroProps) {
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);
  
  // Mouse coordinates for parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Scroll parallax
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacityFade = useTransform(scrollY, [0, 400], [1, 0]);

  // Typing Effect
  useEffect(() => {
    const currentFullText = personalInfo.typingTexts[textIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 80);
    }

    // Handle typing state transitions
    if (!isDeleting && charIndex === currentFullText.length) {
      // Pause at completion
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % personalInfo.typingTexts.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  // Track mouse movement for 3D parallax background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientWidth, clientHeight } = containerRef.current;
      const x = (e.clientX / clientWidth - 0.5) * 30; // Tilt range -15 to +15
      const y = (e.clientY / clientHeight - 0.5) * 30;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      id="hero"
      ref={containerRef}
      className="relative w-full bg-bg-1 pt-28 pb-16 md:pt-36 md:pb-20 lg:min-h-screen lg:flex lg:items-center lg:justify-center lg:py-0 overflow-hidden transition-colors duration-300"
    >
      {/* Parallax Background Grid / Dots */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,32,55,0.4)_1px,transparent_1px)] bg-[size:32px_32px]"
          style={{
            transform: `translate3d(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px, 0)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[150px]" />
      </motion.div>
 
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Side Content */}
        <motion.div
          style={{ y: isDesktop ? textY : 0, opacity: isDesktop ? opacityFade : 1 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col text-left gap-4 md:gap-6 lg:gap-8"
        >
          {/* Heading */}
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs font-bold text-text-secondary uppercase tracking-widest mb-1 block">
              Hi, my name is
            </span>
            <h1 className="font-sans text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--header-gradient-from)] to-[var(--header-gradient-to)] leading-[1.1] pb-1">
              {personalInfo.fullName}
            </h1>
            
            {/* Animated Typing Role */}
            <div className="min-h-[40px] md:min-h-[48px] flex items-center flex-wrap mt-1 py-1">
              <span className="font-mono text-base sm:text-xl md:text-3xl font-black text-amber-400 leading-tight">
                {typedText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'steps(2)' }}
                className="inline-block w-[3px] h-6 md:h-8 bg-amber-400 ml-1.5"
              />
            </div>
          </div>

          {/* Short Bio */}
          <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed max-w-xl transition-colors duration-300">
            {personalInfo.bio}
          </p>

          {/* Core Stack Preview */}
          <div className="flex flex-wrap items-center gap-3 mt-2">
            <span className="font-mono text-[10px] font-bold text-text-secondary uppercase tracking-widest mr-2">
              Core Stack
            </span>
            {['React.js', 'TypeScript', 'PHP', 'Laravel', 'MySQL', 'Tailwind'].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs font-medium px-2.5 py-1 rounded-md bg-bg-card border border-border-main text-text-secondary hover:text-text-primary transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 px-6 py-3 rounded-xl font-semibold text-sm tracking-wide shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={16} />
            </button>
            
            <button
              onClick={() => {
                setIsAtsView(true);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 bg-bg-card hover:bg-bg-2 border border-border-main hover:border-amber-500/20 text-text-primary px-6 py-3 rounded-xl font-semibold text-sm tracking-wide hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <FileText size={16} className="text-amber-400" />
              <span>View Printable Resume</span>
            </button>
          </div>

          {/* Social Icons Visibility */}
          <div className="flex items-center gap-5 mt-6 border-t border-border-main pt-6 transition-colors duration-300">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-amber-400 transition-colors duration-300"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-amber-400 transition-colors duration-300"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-text-secondary hover:text-amber-400 transition-colors duration-300"
              title="Email Keerthana"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Side - Interactive 3D CSS Cube & Nodes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center h-[350px] lg:h-[450px] relative pointer-events-auto"
          style={{
            transform: `translate3d(${mousePosition.x * -0.2}px, ${mousePosition.y * -0.2}px, 0)`,
            transition: 'transform 0.15s ease-out'
          }}
        >
          {/* Animated Halo Glow Background */}
          <div className="absolute w-[250px] h-[250px] bg-amber-500/10 rounded-full blur-[60px] animate-pulse" />
          <div className="absolute w-[180px] h-[180px] bg-blue-500/10 rounded-full blur-[50px] animate-pulse [animation-delay:1s]" />

          {/* 3D Rotating Stack Box Container */}
          <div className="w-64 h-64 perspective-1000 flex items-center justify-center">
            <motion.div
              style={{
                rotateX: mousePosition.y * 0.8,
                rotateY: mousePosition.x * 0.8,
              }}
              className="w-40 h-40 relative transform-style-3d animate-spin-slow cursor-grab active:cursor-grabbing group"
            >
              {/* Cube Faces */}
              {/* Front: React */}
              <div className="absolute inset-0 bg-slate-900/90 border-2 border-amber-400/60 rounded-xl flex flex-col items-center justify-center transform translate-z-[80px] shadow-2xl shadow-amber-500/10 backdrop-blur-md">
                <span className="font-mono text-[10px] text-amber-500 font-bold uppercase tracking-widest">FRONTEND</span>
                <span className="font-sans text-xl font-black text-slate-100 mt-1">REACT</span>
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 animate-ping" />
              </div>
              {/* Back: PHP */}
              <div className="absolute inset-0 bg-slate-900/90 border-2 border-blue-400/40 rounded-xl flex flex-col items-center justify-center transform rotate-y-180 translate-z-[80px] shadow-2xl shadow-blue-500/10 backdrop-blur-md">
                <span className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-widest">BACKEND</span>
                <span className="font-sans text-xl font-black text-slate-100 mt-1">PHP</span>
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
              </div>
              {/* Left: Laravel */}
              <div className="absolute inset-0 bg-slate-900/90 border-2 border-slate-700/60 rounded-xl flex flex-col items-center justify-center transform -rotate-y-90 translate-z-[80px] shadow-2xl backdrop-blur-md">
                <span className="font-mono text-[10px] text-slate-400 font-bold uppercase tracking-widest">FRAMEWORK</span>
                <span className="font-sans text-xl font-black text-slate-100 mt-1">LARAVEL</span>
              </div>
              {/* Right: MySQL */}
              <div className="absolute inset-0 bg-slate-900/90 border-2 border-emerald-500/40 rounded-xl flex flex-col items-center justify-center transform rotate-y-90 translate-z-[80px] shadow-2xl shadow-emerald-500/10 backdrop-blur-md">
                <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest">DATABASE</span>
                <span className="font-sans text-xl font-black text-slate-100 mt-1">MYSQL</span>
              </div>
              {/* Top: API */}
              <div className="absolute inset-0 bg-slate-900/90 border-2 border-amber-400/40 rounded-xl flex flex-col items-center justify-center transform rotate-x-90 translate-z-[80px] shadow-2xl backdrop-blur-md">
                <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-widest">DATA</span>
                <span className="font-sans text-base font-black text-slate-100 mt-1">REST APIs</span>
              </div>
              {/* Bottom: Available */}
              <div className="absolute inset-0 bg-slate-900/90 border-2 border-amber-400/40 rounded-xl flex flex-col items-center justify-center transform -rotate-x-90 translate-z-[80px] shadow-2xl backdrop-blur-md px-3 text-center">
                <span className="font-mono text-[9px] text-amber-400 font-bold uppercase tracking-widest">STATUS</span>
                <span className="font-sans text-[11px] font-black text-slate-100 mt-1 uppercase tracking-wider leading-snug">
                  Available for full-time opportunities
                </span>
              </div>
            </motion.div>
          </div>

          {/* Floating Orbit Nodes */}
          <div className="absolute top-10 right-10 px-3.5 py-2 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-center shadow-lg animate-float">
            <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">Frontend</span>
          </div>
          <div className="absolute bottom-12 left-6 px-3.5 py-2 bg-slate-900/80 border border-slate-800 rounded-lg flex items-center justify-center shadow-lg animate-float-delayed">
            <span className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-wider">Backend</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Indicator for Next Section */}
      <motion.div
        style={{ opacity: opacityFade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase group-hover:text-amber-400 transition-colors duration-300">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-2 text-slate-500 group-hover:text-amber-400 transition-colors duration-300"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </div>
  );
}
