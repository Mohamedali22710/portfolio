import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2 } from 'lucide-react';
import { Project } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

const PROJECT_IMAGE_MAP: Record<string, string> = {
  'mersal-delivery': '/Image/project/MERSAL/Screenshot 2026-11-07 002749.png',
  'insighto': '/Image/project/Insigto/WhatsApp Image 2026-06-10 at 2.25.40 PM.jpeg',
  'coffee-store': '/Image/project/coffe store/Screenshot 2026-11-02 201059.png',
};

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { language, isRTL } = useLanguage();
  const imageSrc =
    project.images && project.images.length > 0
      ? project.images[0]
      : PROJECT_IMAGE_MAP[project.id];

  const maxVisibleChips = 3;
  const visibleTech = project.stack.slice(0, maxVisibleChips);
  const remainingCount = project.stack.length - maxVisibleChips;

  return (
    <article className="group rounded-2xl bg-surface border border-border-strong overflow-hidden flex flex-col justify-between hover-glow transition-all">
      <div>
        {/* 16:9 Image container with overlaid category pill and blue "Featured" pill */}
        <div className="relative aspect-[16/9] w-full bg-surface-elevated overflow-hidden border-b border-border/70">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={project.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            /* Branded placeholder */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#141821] grid-pattern">
              <Code2 className="w-8 h-8 text-[#3E8EFF] mb-2 opacity-80" />
              <span className="font-mono text-sm font-bold text-text-primary">
                {project.title}
              </span>
              <span className="font-mono text-[11px] text-text-muted mt-1">
                // {project.category}
              </span>
            </div>
          )}

          {/* Overlaid Category Pill (Top-Left) */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 rounded-full bg-bg/85 backdrop-blur-md border border-border text-[11px] font-medium text-text-primary shadow-md">
              {project.category}
            </span>
          </div>

          {/* Blue "Featured" Pill (Top-Right) */}
          {project.featured && (
            <div className="absolute top-3 right-3 z-10">
              <span className="px-3 py-1 rounded-full bg-accent text-white text-[11px] font-semibold shadow-md shadow-blue-500/30">
                {language === 'ar' ? 'مميز' : 'Featured'}
              </span>
            </div>
          )}
        </div>

        {/* Card Content Body */}
        <div className="p-5 sm:p-6">
          {/* Title */}
          <h3 className="font-bold text-lg sm:text-xl text-text-primary group-hover:text-accent transition-colors mb-2 leading-snug">
            <Link to={`/projects/${project.slug}`} className="focus-ring rounded-sm">
              {project.title}
            </Link>
          </h3>

          {/* 2-line Description */}
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2 mb-4 font-sans">
            {project.overview}
          </p>

          {/* Outlined Tech Chips with +N More */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            {visibleTech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-full bg-surface-elevated border border-border-strong text-[11px] font-mono text-text-secondary"
              >
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="px-2.5 py-1 rounded-full bg-surface-elevated border border-border-strong text-[11px] font-mono text-text-muted">
                +{remainingCount} {language === 'ar' ? 'أخرى' : 'more'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer: Blue "View Project →" link */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-border/60 flex items-center justify-between">
        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-accent hover:text-accent-hover tracking-wider uppercase group-hover:translate-x-1 transition-all focus-ring rounded-sm"
        >
          <span>{language === 'ar' ? 'عرض دراسة الحالة' : 'View Project'}</span>
          <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
        </Link>
      </div>
    </article>
  );
};

