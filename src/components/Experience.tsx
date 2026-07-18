/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { experienceData, educationData } from '../data';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  ChevronRight 
} from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');

  return (
    <section id="experience" className="py-24 md:py-32 bg-bg-1 border-t border-border-main relative overflow-hidden transition-colors duration-300">
      {/* Visual backgrounds */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
            04. Experience
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary transition-colors duration-300">
              Career Journey
            </h2>
            <div className="h-[1px] flex-grow bg-border-main md:mx-10 hidden md:block" />
            <p className="font-mono text-xs text-text-secondary md:w-80 transition-colors duration-300">
              A chronological timeline of professional experience and academic milestones.
            </p>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-start gap-4 mb-16 border-b border-border-main pb-6">
          <button
            onClick={() => setActiveTab('work')}
            className={`flex items-center gap-2.5 pb-4 px-2 font-sans text-sm font-semibold tracking-wide relative cursor-pointer transition-colors duration-300 ${
              activeTab === 'work' ? 'text-amber-400' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <Briefcase size={16} />
            <span>Employment History</span>
            {activeTab === 'work' && (
              <motion.div
                layoutId="expActiveBar"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2.5 pb-4 px-2 font-sans text-sm font-semibold tracking-wide relative cursor-pointer transition-colors duration-300 ${
              activeTab === 'education' ? 'text-amber-400' : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            <GraduationCap size={16} />
            <span>Academic Milestones</span>
            {activeTab === 'education' && (
              <motion.div
                layoutId="expActiveBar"
                className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        </div>

        {/* Tab Contents */}
        <div className="min-h-[300px] text-left">
          <AnimatePresence mode="wait">
            {/* 1. Work Experience */}
            {activeTab === 'work' && (
              <motion.div
                key="work-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative border-l-2 border-border-main ml-3 md:ml-6 pl-6 md:pl-10 space-y-12"
              >
                {experienceData.map((exp, idx) => (
                  <div key={exp.id} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-bg-1 border-2 border-amber-400/80 group-hover:bg-amber-400 group-hover:scale-125 transition-all duration-300 shadow shadow-amber-500/10" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Left: Metadata */}
                      <div className="lg:col-span-4 flex flex-col gap-1">
                        <span className="font-mono text-xs font-bold text-amber-500">
                          {exp.period}
                        </span>
                        <h3 className="font-sans text-lg font-black text-text-primary group-hover:text-amber-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-text-secondary text-xs font-medium">
                          <span>{exp.company}</span>
                          <span className="text-border-main font-bold">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>

                      {/* Right: Bullet summary */}
                      <div className="lg:col-span-8 flex flex-col gap-3">
                        <ul className="space-y-2">
                          {exp.description.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-text-secondary text-xs leading-relaxed transition-colors">
                              <span className="text-amber-400 mt-1 select-none font-bold text-sm leading-none">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Skills acquired */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {exp.skillsAcquired.map((skill) => (
                            <span
                              key={skill}
                              className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-bg-card border border-border-main text-text-secondary group-hover:border-amber-500/10 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 2. Education */}
            {activeTab === 'education' && (
              <motion.div
                key="edu-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="relative border-l-2 border-border-main ml-3 md:ml-6 pl-6 md:pl-10 space-y-12"
              >
                {educationData.map((edu) => (
                  <div key={edu.id} className="relative group">
                    {/* Circle Node */}
                    <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-bg-1 border-2 border-amber-400/80 group-hover:bg-amber-400 group-hover:scale-125 transition-all duration-300 shadow shadow-amber-500/10" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      {/* Left: Metadata */}
                      <div className="lg:col-span-4 flex flex-col gap-1">
                        <span className="font-mono text-xs font-bold text-amber-500">
                          {edu.period}
                        </span>
                        <h3 className="font-sans text-lg font-black text-text-primary group-hover:text-amber-400 transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-text-secondary text-xs font-medium">
                          {edu.institutionUrl ? (
                            <a
                              href={edu.institutionUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-amber-500/90 hover:text-amber-400 hover:underline font-semibold"
                            >
                              {edu.institution}
                            </a>
                          ) : (
                            <span>{edu.institution}</span>
                          )}
                          <span className="text-border-main font-bold">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={11} />
                            <span>{edu.location}</span>
                          </span>
                        </div>
                        {edu.grade && (
                          <div className="mt-2 text-xs text-emerald-400 font-semibold uppercase tracking-wider bg-emerald-500/5 border border-emerald-500/10 self-start px-2 py-0.5 rounded">
                            {edu.grade}
                          </div>
                        )}
                      </div>

                      {/* Right: Academic details */}
                      <div className="lg:col-span-8 flex flex-col gap-3">
                        <div className="mb-2">
                          <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider font-bold block mb-1">
                            Specialization Curriculum Focus
                          </span>
                          <span className="font-sans text-xs text-text-secondary">
                            {edu.specialization}
                          </span>
                        </div>

                        <ul className="space-y-2">
                          {edu.highlights.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2.5 text-text-secondary text-xs leading-relaxed transition-colors">
                              <span className="text-amber-400 mt-1 select-none font-bold text-sm leading-none">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}


          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
