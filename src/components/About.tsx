/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { ArrowUpRight, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-2 border-t border-border-main relative overflow-hidden transition-colors duration-300">
      {/* Visual backgrounds */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16 md:mb-20 text-left">
          <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
            01. Background
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary transition-colors duration-300">
              About Keerthanavalli
            </h2>
            <div className={`h-[1px] flex-grow md:mx-10 hidden md:block bg-border-main`} />
            <p className="font-mono text-xs text-text-secondary md:w-80 transition-colors duration-300">
              Passionate developer specializing in building clean, responsive user interfaces and backend services.
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block - Personal Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="font-sans text-xl md:text-2xl font-bold text-text-primary tracking-tight leading-snug transition-colors duration-300">
              Bridging robust client interfaces with securely scalable databases.
            </h3>
            
            <p className="font-sans text-sm md:text-base text-text-secondary leading-relaxed transition-colors duration-300">
              {personalInfo.aboutDetailed}
            </p>

            <p className="font-sans text-sm md:text-base text-text-secondary/80 leading-relaxed transition-colors duration-300">
              My engineering philosophy revolves around creating <strong>performant, maintainable, and standards-compliant solutions</strong>. I design database collections with fast retrieval in mind, build modular routes, and program user environments to trigger interactive visual pleasure without loading latency.
            </p>

            {/* Strengths / Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
              {personalInfo.strengths.map((strength, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl bg-bg-card border border-border-main hover:border-amber-500/30 transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 mb-3">
                    <CheckCircle2 size={16} />
                  </div>
                  <h4 className="font-sans text-sm font-semibold text-text-primary mb-1 transition-colors duration-300">
                    {strength.title}
                  </h4>
                  <p className="font-sans text-[11px] text-text-secondary leading-relaxed transition-colors duration-300">
                    {strength.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Block - KPI Dashboard / Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-24"
          >
            {/* KPI Container */}
            <div className="relative p-6 md:p-8 rounded-2xl bg-bg-card border border-border-main shadow-xl overflow-hidden group transition-all duration-300">
              {/* Outer decorative gold mesh */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,168,128,0.05),transparent_60%)] pointer-events-none" />
              
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] text-amber-500 font-bold uppercase tracking-widest">
                  Core Summary Stats
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" title="Ready to Contribute" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {personalInfo.quickStats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col border-b border-border-main/60 pb-4 transition-colors">
                    <span className={`font-sans font-extrabold text-amber-400 mb-1 tracking-tight ${
                      stat.value.length > 10 ? 'text-lg sm:text-xl' : stat.value.length > 5 ? 'text-xl sm:text-2xl' : 'text-3xl'
                    }`}>
                      {stat.value}
                    </span>
                    <span className="font-sans text-xs font-semibold text-text-secondary tracking-wide transition-colors">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Career Objectives Quick Summary */}
              <div className="mt-8 pt-6 border-t border-border-main flex flex-col gap-3 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-blue-500/10 flex items-center justify-center text-blue-400 mt-0.5">
                    <Briefcase size={12} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">Target Domain</span>
                    <span className="font-sans text-xs text-text-primary font-semibold transition-colors">Full-Stack / Frontend / React & PHP Roles</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-md bg-amber-500/10 flex items-center justify-center text-amber-400 mt-0.5">
                    <GraduationCap size={12} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] text-text-secondary uppercase tracking-wider">Highest Education</span>
                    <span className="font-sans text-xs text-text-primary font-semibold transition-colors">M.E. Communication Systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Call-out Mini Box */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-bg-card border border-border-main hover:bg-bg-1 transition-colors duration-300">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <Award size={18} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-sans text-xs font-bold text-text-primary transition-colors">Agni College of Technology</span>
                  <span className="font-mono text-[10px] text-text-secondary transition-colors">M.E. & B.E. Graduate</span>
                </div>
              </div>
              <span className="text-text-secondary hover:text-amber-400 transition-colors">
                <ArrowUpRight size={16} />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
