/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg-1 border-t border-border-main py-12 md:py-16 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="font-sans text-sm font-bold tracking-tight text-text-primary transition-colors">
              {personalInfo.fullName}
            </span>
            <span className="text-text-secondary/40">|</span>
            <span className="font-mono text-[10px] text-amber-500 font-bold uppercase tracking-wider">
              {personalInfo.professionalTitle}
            </span>
          </div>
          <p className="font-sans text-[11px] text-text-secondary leading-relaxed transition-colors">
            All rights reserved. &copy; 2026.
          </p>
        </div>

        {/* Right Side - Actions & Socials */}
        <div className="flex items-center gap-6">
          {/* Socials */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-amber-400 transition-colors duration-300"
              title="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-text-secondary hover:text-amber-400 transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-text-secondary hover:text-amber-400 transition-colors duration-300"
              title="Email"
            >
              <Mail size={16} />
            </a>
          </div>

          <span className="text-border-main font-bold">|</span>

          {/* Scroll To Top button */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-bg-card hover:bg-bg-2 border border-border-main text-text-secondary hover:text-amber-400 transition-colors cursor-pointer"
            title="Scroll To Top"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
