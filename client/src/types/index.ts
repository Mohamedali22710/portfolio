export type ProjectCategory = 'All' | 'Backend' | 'Full Stack' | 'APIs' | 'GIS' | 'Other';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  stack: string[];
  challenges: string;
  learnings: string;
  githubUrl: string;
  liveUrl?: string;
  metrics: string;
  featured: boolean;
  order: number;
  images?: string[];
}

export interface SkillItem {
  name: string;
  level: 'Advanced' | 'Working Knowledge';
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location: string;
  category: 'work' | 'education' | 'certification';
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface MessageInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface MessageResponse {
  success: boolean;
  message: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
}

export interface CapabilityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  highlights: string[];
}

