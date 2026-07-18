/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projectsData } from '../data';
import { Project } from '../types';
import { 
  Github, 
  ExternalLink, 
  Search, 
  ArrowUpRight, 
  CheckCircle2, 
  X, 
  Activity, 
  Cpu, 
  ShieldCheck 
} from 'lucide-react';

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Full-Stack' | 'Frontend' | 'UI/UX (Figma)' | 'Admin / CRM'>('All');
  const [activeProjectDetail, setActiveProjectDetail] = useState<Project | null>(null);
  const [isRestrictedModalOpen, setIsRestrictedModalOpen] = useState(false);

  const restrictedProjectTitles = [
    'Mortoplux CRM Platform',
    'ServiceApp',
    'HallBooky & ShineStays Booking Platform',
    'Dealer Inventory Management System',
    'Studios Web Application',
    'SaaS Analytics Dashboard UI',
    'E-Commerce Mobile App Experience'
  ];

  const isProjectRestricted = (projectTitle: string) => {
    return restrictedProjectTitles.includes(projectTitle);
  };

  // Filter and Search Logic
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 md:py-32 bg-bg-2 border-t border-border-main relative overflow-hidden transition-colors duration-300">
      {/* Visual backgrounds */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
            03. Creative Engineering
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary transition-colors duration-300">
              Featured Work
            </h2>
            <div className="h-[1px] flex-grow bg-border-main md:mx-10 hidden md:block" />
            <p className="font-mono text-xs text-text-secondary md:w-80 transition-colors duration-300">
              Filtered directory of full-stack implementations, RESTful backends, and modular frontends.
            </p>
          </div>
        </div>

        {/* Search and Category Control Bar */}
        <div className="flex flex-col md:flex-row items-center gap-6 justify-between mb-12 bg-bg-card p-5 rounded-2xl border border-border-main transition-colors duration-300">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-start">
            {(['All', 'Full-Stack', 'Frontend', 'UI/UX (Figma)', 'Admin / CRM'] as const).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-300 w-full md:w-auto ${
                  selectedCategory === category
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-lg shadow-amber-500/10'
                    : 'bg-bg-card text-text-secondary border-border-main hover:border-slate-700/60 hover:text-text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={16} />
            <input
              type="text"
              placeholder="Search tech stack, database, or keywords (e.g., PHP)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-bg-1 text-text-primary placeholder-slate-500 text-xs font-medium border border-border-main focus:border-amber-500/50 focus:outline-none transition-colors duration-300"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-bg-card border border-border-main hover:border-amber-500/20 shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Project Category and Links */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-amber-500 font-bold uppercase tracking-widest px-2.5 py-1 bg-amber-500/5 rounded-md border border-amber-500/10">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <a
                          href={isProjectRestricted(project.title) ? '#' : project.githubUrl}
                          onClick={(e) => {
                            if (isProjectRestricted(project.title)) {
                              e.preventDefault();
                              setIsRestrictedModalOpen(true);
                            }
                          }}
                          target={isProjectRestricted(project.title) ? undefined : "_blank"}
                          rel="noreferrer"
                          className="text-text-secondary hover:text-amber-400 transition-colors cursor-pointer"
                          title="View Repository"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={isProjectRestricted(project.title) ? '#' : project.liveUrl}
                          onClick={(e) => {
                            if (isProjectRestricted(project.title)) {
                              e.preventDefault();
                              setIsRestrictedModalOpen(true);
                            }
                          }}
                          target={isProjectRestricted(project.title) ? undefined : "_blank"}
                          rel="noreferrer"
                          className="text-text-secondary hover:text-amber-400 transition-colors cursor-pointer"
                          title="Launch Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="font-sans text-lg font-bold text-text-primary group-hover:text-amber-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[11px] font-semibold text-text-secondary uppercase tracking-wider mb-3">
                    {project.subtitle}
                  </p>
                  
                  {/* Short description */}
                  <p className="font-sans text-xs text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Lower Technologies and Detail Trigger */}
                <div>
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] px-2 py-0.5 rounded bg-bg-1 border border-border-main text-text-secondary transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-bg-1 border border-border-main text-amber-500 font-semibold transition-colors">
                        +{project.technologies.length - 4} More
                      </span>
                    )}
                  </div>

                  {/* Spec deep-dive trigger */}
                  <button
                    onClick={() => setActiveProjectDetail(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold bg-bg-1 text-amber-400 hover:bg-bg-2 border border-border-main hover:border-amber-500/20 transition-all duration-300 cursor-pointer"
                  >
                    <span>Analyze Specifications</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-2">No Projects Match Your Search</span>
            <p className="font-sans text-sm text-slate-400 max-w-sm">
              We couldn't find any items matching "{searchQuery}" under {selectedCategory}. Try clear criteria.
            </p>
          </div>
        )}

        {/* Specifications Drawer Overlay Modal */}
        <AnimatePresence>
          {activeProjectDetail && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProjectDetail(null)}
                className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative bg-bg-card border border-border-main rounded-3xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col justify-between transition-colors duration-300"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveProjectDetail(null)}
                  className="absolute right-6 top-6 p-2 rounded-xl bg-bg-2 hover:bg-bg-3 border border-border-main text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>

                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[9px] text-amber-500 font-extrabold uppercase tracking-widest px-2.5 py-1 bg-amber-500/5 rounded border border-amber-500/15">
                      {activeProjectDetail.category}
                    </span>
                    <span className="font-mono text-[9px] text-text-secondary font-bold uppercase tracking-widest">
                      PROJECT PROFILE
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl font-black text-text-primary transition-colors">
                    {activeProjectDetail.title}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-text-secondary uppercase tracking-wide transition-colors">
                    {activeProjectDetail.subtitle}
                  </p>
                </div>

                {/* Scrollable content block */}
                <div className="space-y-6 text-left">
                  {/* Detailed Description */}
                  <div className="space-y-2">
                    <h4 className="font-mono text-[10px] text-text-secondary font-bold uppercase tracking-wider">
                      Executive Summary
                    </h4>
                    <p className="font-sans text-sm text-text-secondary leading-relaxed transition-colors">
                      {activeProjectDetail.longDescription}
                    </p>
                  </div>

                  {/* Benchmark Performance stats */}
                  {activeProjectDetail.stats && (
                    <div className="space-y-2">
                      <h4 className="font-mono text-[10px] text-text-secondary font-bold uppercase tracking-wider">
                        Core Benchmarks
                      </h4>
                      <div className="grid grid-cols-3 gap-3">
                        {activeProjectDetail.stats.map((stat, idx) => (
                          <div key={idx} className="p-3 bg-bg-card rounded-xl border border-border-main flex flex-col transition-colors">
                            <span className="font-sans text-base font-extrabold text-amber-400 tracking-tight">
                              {stat.value}
                            </span>
                            <span className="font-sans text-[10px] text-text-secondary font-medium transition-colors">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features Bullet checklist */}
                  <div className="space-y-2">
                    <h4 className="font-mono text-[10px] text-text-secondary font-bold uppercase tracking-wider">
                      Technical Architecture & Scope
                    </h4>
                    <ul className="space-y-2">
                      {activeProjectDetail.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary leading-relaxed transition-colors">
                          <CheckCircle2 size={14} className="text-amber-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Complete Tech stack used */}
                  <div className="space-y-2">
                    <h4 className="font-mono text-[10px] text-text-secondary font-bold uppercase tracking-wider">
                      Full Technology Stack Blueprint
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProjectDetail.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2.5 py-1 rounded bg-bg-1 text-text-secondary border border-border-main transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="mt-8 pt-6 border-t border-border-main flex items-center gap-4 justify-end transition-colors">
                  {activeProjectDetail.githubUrl && (
                    <a
                      href={isProjectRestricted(activeProjectDetail.title) ? '#' : activeProjectDetail.githubUrl}
                      onClick={(e) => {
                        if (isProjectRestricted(activeProjectDetail.title)) {
                          e.preventDefault();
                          setIsRestrictedModalOpen(true);
                        }
                      }}
                      target={isProjectRestricted(activeProjectDetail.title) ? undefined : "_blank"}
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-bg-1 hover:bg-bg-2 text-text-secondary border border-border-main transition-all cursor-pointer"
                    >
                      <Github size={14} />
                      <span>Source Repository</span>
                    </a>
                  )}
                  {activeProjectDetail.liveUrl && (
                    <a
                      href={isProjectRestricted(activeProjectDetail.title) ? '#' : activeProjectDetail.liveUrl}
                      onClick={(e) => {
                        if (isProjectRestricted(activeProjectDetail.title)) {
                          e.preventDefault();
                          setIsRestrictedModalOpen(true);
                        }
                      }}
                      target={isProjectRestricted(activeProjectDetail.title) ? undefined : "_blank"}
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-lg shadow-amber-400/10 transition-colors cursor-pointer"
                    >
                      <ExternalLink size={14} />
                      <span>Launch Showcase</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Restricted Access Modal */}
        <AnimatePresence>
          {isRestrictedModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Blur backdrop overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsRestrictedModalOpen(false)}
                className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative bg-bg-card border border-red-500/20 rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl flex flex-col transition-colors duration-300 z-10"
              >
                {/* Close Icon button in top-right */}
                <button
                  onClick={() => setIsRestrictedModalOpen(false)}
                  className="absolute right-6 top-6 p-2 rounded-xl bg-bg-2 hover:bg-bg-3 border border-border-main text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>

                <div className="text-center mt-4">
                  {/* Lock Icon */}
                  <div className="mx-auto w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-full flex items-center justify-center mb-5 text-amber-500 text-2xl">
                    🔒
                  </div>

                  <h3 className="font-sans text-xl font-black text-text-primary mb-3">
                    Access Restricted
                  </h3>

                  <p className="font-sans text-xs text-text-secondary leading-relaxed mb-6">
                    This project contains confidential client data and protected business workflows.
                  </p>

                  <div className="p-4 bg-bg-1/60 rounded-2xl border border-border-main text-left mb-6">
                    <span className="font-mono text-[9px] text-amber-500 font-extrabold uppercase tracking-widest block mb-1">
                      Privacy & Policy Notice
                    </span>
                    <p className="font-sans text-[11px] text-text-secondary leading-relaxed mb-3">
                      Due to client privacy policies and security agreements, detailed project content is restricted from public view.
                    </p>
                    <p className="font-sans text-[11px] text-text-secondary leading-relaxed">
                      Some portfolio projects are intentionally hidden to protect client-sensitive information, internal dashboards, and proprietary workflows.
                    </p>
                  </div>

                  <p className="font-sans text-xs text-text-secondary leading-relaxed mb-6">
                    For further enquiries or a guided walkthrough, please contact the administrator.
                  </p>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button
                      onClick={() => setIsRestrictedModalOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-bg-1 hover:bg-bg-2 text-text-secondary border border-border-main transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setIsRestrictedModalOpen(false);
                        setActiveProjectDetail(null);
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-lg shadow-amber-400/10 transition-colors cursor-pointer"
                    >
                      Contact Admin
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
