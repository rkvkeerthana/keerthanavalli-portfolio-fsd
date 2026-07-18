/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { skillsData } from '../data';
import { Skill } from '../types';
import { 
  Code2, 
  Database, 
  Wrench, 
  Cpu, 
  Sparkles, 
  Server, 
  Layout, 
  GitBranch, 
  Layers, 
  Brain, 
  MessageSquare, 
  Clock,
  Terminal,
  Activity
} from 'lucide-react';

const categoryTabs = [
  { id: 'all', label: 'All Technologies', icon: Layers },
  { id: 'Frontend', label: 'Frontend Architecture', icon: Layout },
  { id: 'Backend & DB', label: 'Backend & Databases', icon: Server },
  { id: 'Tools & Platforms', label: 'Tools & Cloud', icon: Wrench },
  { id: 'Soft Skills', label: 'Professional Strengths', icon: Brain },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'Frontend' | 'Backend & DB' | 'Tools & Platforms' | 'Soft Skills'>('all');

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  const getIcon = (iconName: string, category: string) => {
    switch (iconName) {
      case 'React': return <Layout className="text-amber-400" size={18} />;
      case 'TypeScript': return <Code2 className="text-blue-400" size={18} />;
      case 'NextJS': return <Cpu className="text-slate-100" size={18} />;
      case 'JS': return <Code2 className="text-amber-300" size={18} />;
      case 'Tailwind': return <Layers className="text-teal-400" size={18} />;
      case 'Motion': return <Sparkles className="text-pink-400" size={18} />;
      case 'Node': return <Server className="text-emerald-500" size={18} />;
      case 'Express': return <Terminal className="text-slate-200" size={18} />;
      case 'Mongo': return <Database className="text-emerald-600" size={18} />;
      case 'API': return <Activity className="text-blue-500" size={18} />;
      case 'SQL': return <Database className="text-blue-300" size={18} />;
      case 'Git': return <GitBranch className="text-orange-500" size={18} />;
      case 'Docker': return <Layers className="text-blue-500" size={18} />;
      case 'Postman': return <Activity className="text-orange-400" size={18} />;
      case 'Deploy': return <Wrench className="text-teal-500" size={18} />;
      case 'Brain': return <Brain className="text-amber-400" size={18} />;
      case 'Message': return <MessageSquare className="text-blue-400" size={18} />;
      case 'Clock': return <Clock className="text-teal-400" size={18} />;
      default:
        return category === 'Frontend' ? <Layout size={18} /> : <Database size={18} />;
    }
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-bg-1 relative overflow-hidden transition-colors duration-300">
      {/* Visual backgrounds */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 text-left">
          <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
            02. Core Capabilities
          </span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-text-primary transition-colors duration-300">
              Technical Skillset
            </h2>
            <div className={`h-[1px] flex-grow md:mx-10 hidden md:block bg-border-main`} />
            <p className="font-mono text-xs text-text-secondary md:w-80 transition-colors duration-300">
              Structured catalog of software frameworks, engineering tools, and core values.
            </p>
          </div>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-start mb-12 border-b border-border-main pb-6">
          {categoryTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wide border cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/40 shadow-sm'
                    : 'bg-bg-card text-text-secondary border-border-main hover:text-text-primary'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="relative group p-6 rounded-2xl bg-bg-card border border-border-main hover:border-amber-500/30 transition-all duration-300 shadow-lg flex flex-col justify-between"
              >
                {/* Upper Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-bg-1 flex items-center justify-center border border-border-main shadow-inner group-hover:border-amber-500/20 transition-colors">
                      {getIcon(skill.iconName, skill.category)}
                    </div>
                    {/* Level Indicator */}
                    <div className="flex flex-col items-end">
                      <span className="font-mono text-xs font-extrabold text-amber-400 tracking-wider">
                        {skill.level}%
                      </span>
                      <span className="font-mono text-[9px] text-text-secondary/60 font-bold tracking-widest uppercase">
                        proficiency
                      </span>
                    </div>
                  </div>

                  {/* Name and Description */}
                  <h3 className="font-sans text-base font-bold text-text-primary mb-2 tracking-tight group-hover:text-amber-400 transition-colors">
                    {skill.name}
                  </h3>
                  <p className="font-sans text-xs text-text-secondary leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Lower Level Bar */}
                <div className="mt-6">
                  <div className="h-1 w-full bg-bg-3 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                    />
                  </div>
                </div>

                {/* Corner highlight */}
                <div className="absolute top-0 right-0 w-[4px] h-[4px] bg-amber-400/0 rounded-tr-2xl group-hover:bg-amber-400/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
