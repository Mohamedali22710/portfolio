import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ExternalLink, Activity, Layers } from 'lucide-react';
import { SectionHeader, Badge } from '../ui';
import { Project, ProjectCategory } from '../../types';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useLanguage } from '../../context/LanguageContext';

const CATEGORIES: ProjectCategory[] = ['All', 'Backend', 'Full Stack', 'APIs', 'GIS', 'Other'];

// Map real project preview screenshots
const PROJECT_PREVIEWS: Record<string, string> = {
  'mersal-delivery': '/Image/project/MERSAL/Screenshot 2026-11-07 002749.png',
  'insighto': '/Image/project/Insigto/WhatsApp Image 2026-06-10 at 2.25.40 PM.jpeg',
  'coffee-store': '/Image/project/coffe store/Screenshot 2026-11-02 201059.png',
};

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const prefersReducedMotion = useReducedMotion();
  const { t, data, language, isRTL } = useLanguage();
  const { PROJECTS } = data;

  const filteredProjects: Project[] = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p: Project) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionHeader
            tag="02"
            eyebrow={t.projects.eyebrow}
            title={t.projects.title}
            description={t.projects.subtitle}
            className="mb-0"
          />

          {/* Filter Tabs with animated indicator */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-btn bg-surface border border-border self-start md:self-auto">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'relative px-3 py-1.5 rounded-sm font-mono text-xs uppercase tracking-wider transition-colors focus-ring',
                    isSelected ? 'text-white font-semibold' : 'text-text-muted hover:text-text-primary'
                  )}
                  aria-pressed={isSelected}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCategoryIndicator"
                      className="absolute inset-0 bg-accent rounded-sm -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {cat === 'All' && language === 'ar' ? 'الكل' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project: Project, index: number) => {
              // Bento layout: First 2 projects in All view take 7 and 5 cols; subsequent take 4 or 6
              const isLarge = (index === 0 || index === 1) && activeCategory === 'All';
              const colSpan = isLarge
                ? index === 0
                  ? 'md:col-span-12 lg:col-span-7'
                  : 'md:col-span-12 lg:col-span-5'
                : 'md:col-span-6 lg:col-span-4';

              const previewImg = PROJECT_PREVIEWS[project.id];

              return (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className={cn(
                    'group relative rounded-card bg-surface border border-border p-6 flex flex-col justify-between overflow-hidden',
                    'hover:border-accent hover:bg-surface-elevated/70 transition-all duration-200',
                    'hover:-translate-y-1 hover:shadow-accent',
                    colSpan
                  )}
                >
                  <div>
                    {/* Top Meta Strip */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Badge variant="accent">{project.category}</Badge>
                        {project.featured && (
                          <Badge variant="success" size="sm">
                            {language === 'ar' ? 'مميز' : 'Featured'}
                          </Badge>
                        )}
                      </div>

                      {/* Performance Metric Pill */}
                      {project.metrics && (
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-text-muted">
                          <Activity className="w-3.5 h-3.5 text-accent" />
                          <span>{project.metrics.split('//')[0]}</span>
                        </div>
                      )}
                    </div>

                    {/* Screenshot Preview thumbnail */}
                    {previewImg && (
                      <div className="mb-4 rounded-sm overflow-hidden border border-border-strong aspect-[16/9] max-h-48 bg-surface-elevated">
                        <img
                          src={previewImg}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}

                    {/* Title & Tagline */}
                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-text-primary group-hover:text-accent transition-colors leading-snug">
                      <Link to={`/projects/${project.slug}`} className="focus-ring rounded-sm">
                        {project.title}
                      </Link>
                    </h3>

                    <p className="font-mono text-xs text-text-muted mt-2 tracking-wide leading-relaxed">
                      // {project.tagline}
                    </p>

                    <p className="text-sm text-text-secondary mt-3 leading-relaxed line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  {/* Bottom Footer: Tech Stack Chips + Direct Action Links */}
                  <div className="pt-5 mt-5 border-t border-border/70 flex flex-col gap-4">
                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, isLarge ? 6 : 4).map((tech: string) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-sm bg-surface-elevated border border-border text-[11px] font-mono text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > (isLarge ? 6 : 4) && (
                        <span className="px-1.5 py-0.5 text-[11px] font-mono text-text-muted">
                          +{project.stack.length - (isLarge ? 6 : 4)}
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-1">
                      <Link
                        to={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent hover:text-accent-hover tracking-wider uppercase focus-ring rounded-sm"
                      >
                        {t.projects.viewProject}{' '}
                        <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-90' : ''}`} />
                      </Link>

                      <div className="flex items-center gap-2">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-text-muted hover:text-text-primary hover:bg-surface-elevated rounded-sm transition-colors focus-ring"
                            title={t.projects.sourceCode}
                            aria-label={`GitHub Repository for ${project.title}`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-text-muted hover:text-accent hover:bg-surface-elevated rounded-sm transition-colors focus-ring"
                            title={t.projects.demoVideo}
                            aria-label={`Demo for ${project.title}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
