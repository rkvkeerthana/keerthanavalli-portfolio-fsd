/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, Sparkles, Sun, Moon } from 'lucide-react';
import { personalInfo } from '../data';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isAtsView: boolean;
  setIsAtsView: (view: boolean) => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
}

export default function Navbar({
  activeSection,
  setActiveSection,
  isAtsView,
  setIsAtsView,
  theme,
  setTheme,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsAtsView(false);
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? theme === 'dark'
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-slate-950/20 py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 shadow-lg shadow-slate-200/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-2.5 cursor-pointer group select-none min-w-0"
        >
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-200 p-[1px] shadow-md shadow-amber-500/10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
            <div className={`w-full h-full rounded-[11px] flex items-center justify-center transition-colors duration-300 ${
              theme === 'dark' ? 'bg-slate-950' : 'bg-slate-100'
            }`}>
              <span className="font-mono text-xs md:text-sm font-black text-amber-400 group-hover:text-amber-300 transition-colors">RKV</span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-xl border border-dashed border-amber-400/30 pointer-events-none"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className={`font-sans text-xs md:text-sm lg:text-base font-bold tracking-tight truncate leading-tight group-hover:text-amber-400 transition-colors duration-300 ${
              theme === 'dark' ? 'text-slate-100' : 'text-slate-900'
            }`}>
              {personalInfo.fullName}
            </span>
            <span className="font-mono text-[8px] md:text-[9px] lg:text-[10px] text-amber-500/80 tracking-widest uppercase truncate leading-none">
              Full Stack
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`font-sans text-sm font-medium tracking-wide relative py-1 cursor-pointer transition-colors duration-300 ${
                  activeSection === link.id && !isAtsView
                    ? 'text-amber-400'
                    : theme === 'dark'
                      ? 'text-slate-400 hover:text-slate-100'
                      : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.label}
                {activeSection === link.id && !isAtsView && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-amber-400 to-amber-200 rounded-full"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className={`h-6 w-[1px] transition-colors duration-300 ${
            theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
          }`} />

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-xl text-amber-400 transition-colors cursor-pointer border border-transparent ${
              theme === 'dark'
                ? 'hover:bg-slate-800/50 hover:text-amber-300 hover:border-slate-800'
                : 'hover:bg-slate-100 hover:text-amber-500 hover:border-slate-200'
            }`}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Toggle ATS Mode */}
          <button
            onClick={() => {
              setIsAtsView(!isAtsView);
              setIsOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
              isAtsView
                ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-lg shadow-amber-400/20 font-bold'
                : theme === 'dark'
                  ? 'bg-slate-900 text-amber-400 border border-amber-500/30 hover:border-amber-400/60 hover:bg-slate-800'
                  : 'bg-slate-100 text-slate-900 border border-slate-200 hover:border-amber-400/60 hover:bg-slate-50'
            }`}
          >
            {isAtsView ? (
              <>
                <FileText size={15} />
                <span>Interactive View</span>
              </>
            ) : (
              <>
                <FileText size={15} />
                <span>View Resume</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Theme Toggle Button Mobile */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`p-2 rounded-lg text-amber-400 transition-colors cursor-pointer ${
              theme === 'dark' ? 'hover:bg-slate-900' : 'hover:bg-slate-100'
            }`}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => {
              setIsAtsView(!isAtsView);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`p-2 rounded-lg transition-colors border ${
              isAtsView
                ? 'bg-amber-400 text-slate-950 border-amber-400'
                : theme === 'dark'
                  ? 'bg-slate-900 text-amber-400 border-amber-500/20'
                  : 'bg-slate-100 text-slate-900 border-slate-200'
            }`}
            title={isAtsView ? 'Switch to Interactive Portfolio' : 'View Printable Resume'}
          >
            <FileText size={18} />
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-lg transition-colors cursor-pointer ${
              theme === 'dark' ? 'text-slate-300 hover:text-amber-400 hover:bg-slate-900' : 'text-slate-600 hover:text-amber-500 hover:bg-slate-100'
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-b absolute w-full top-full left-0 overflow-hidden shadow-2xl ${
              theme === 'dark'
                ? 'bg-slate-950/95 border-slate-900 shadow-slate-950/50'
                : 'bg-white/95 border-slate-200 shadow-slate-200/50'
            }`}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-sans text-base font-medium py-1 transition-colors duration-200 ${
                    activeSection === link.id && !isAtsView
                      ? 'text-amber-400 pl-2 border-l-2 border-amber-400'
                      : theme === 'dark'
                        ? 'text-slate-400 hover:text-slate-200'
                        : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className={`h-[1px] my-1 ${
                theme === 'dark' ? 'bg-slate-900' : 'bg-slate-200'
              }`} />
              
              <button
                onClick={() => {
                  setIsAtsView(!isAtsView);
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isAtsView
                    ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                    : theme === 'dark'
                      ? 'bg-slate-900 text-amber-400 border border-amber-500/20'
                      : 'bg-slate-100 text-slate-900 border border-slate-200'
                }`}
              >
                {isAtsView ? (
                  <>
                    <FileText size={15} />
                    <span>Interactive View</span>
                  </>
                ) : (
                  <>
                    <FileText size={15} />
                    <span>View Resume</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
