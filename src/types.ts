/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend & DB' | 'Tools & Platforms' | 'Soft Skills';
  level: number; // Percentage, e.g., 90
  iconName: string; // Used to dynamically map Lucide icons
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: 'Full-Stack' | 'Frontend' | 'UI/UX (Figma)' | 'Admin / CRM';
  liveUrl?: string;
  githubUrl?: string;
  stats?: { label: string; value: string }[];
  keyFeatures: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skillsAcquired: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  period: string;
  grade?: string;
  specialization: string;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}
