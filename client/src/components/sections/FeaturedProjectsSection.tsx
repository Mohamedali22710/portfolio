import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Github, Code, Layers } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { Project, ProjectCategory } from '../../types';

export const FeaturedProjectsSection: React.FC = () => {
  const { language, data, isRTL } = useLanguage();
  const { PROJECTS } = data;

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: language === 'ar' ? 'الكل' : 'All' },
    { id: 'backend', label: language === 'ar' ? 'خوادم (Backend)' : 'Backend' },
    { id: 'fullstack', label: language === 'ar' ? 'فل ستاك (Full Stack)' : 'Full Stack' },
    { id: 'gis', label: language === 'ar' ? 'نظم جغرافية (GIS)' : 'GIS' },
  ];

  const filteredProjects = PROJECTS.filter((p: Project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'backend') {
      return (
        p.category === 'Backend' ||
        p.stack.includes('Node.js') ||
        p.stack.includes('Express')
      );
    }
    if (activeFilter === 'fullstack') {
      return p.category === 'Full Stack';
    }
    if (activeFilter === 'gis') {
      return (
        p.category === 'GIS' ||
        p.stack.some((s) => ['PostGIS', 'Leaflet', 'GeoJSON', 'GIS'].includes(s)) ||
        p.id === 'mersal-delivery'
      );
    }
    return true;
  });

  // Pick first project as big bento (8 cols), second as 4 cols, and rest as row 2 (4 cols each)
  const bigProject = filteredProjects[0];
  const secondProject = filteredProjects[1];
  const row2Projects = filteredProjects.slice(2, 5);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        {/* Section Eyebrow & Header with Pill-shaped Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#3E8EFF] mb-3">
              03 · {language === 'ar' ? 'أعمال برمجية مختارة' : 'SELECTED WORK'}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-2">
              {language === 'ar' ? 'المشاريع الهندسية' : 'Featured Projects'}
            </h2>
            <p className="text-sm md:text-base text-text-secondary max-w-2xl">
              {language === 'ar'
                ? 'أنظمة خوادم حقيقية، وخدمات موزعة، وتطبيقات ويب وأنظمة جغرافية عالية الأداء.'
                : 'Production-grade backend architectures, distributed services, and high-performance applications.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2" role="tablist">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs font-medium transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#3E8EFF14] text-[#3E8EFF] border border-[#3E8EFF]/40 shadow-sm'
                    : 'text-text-secondary hover:text-text-primary hover:bg-[#12161D] border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#12161D] border border-[#232A35] text-xs font-mono text-text-secondary hover:text-[#3E8EFF] hover:border-[#3E8EFF]/40 transition-all ml-auto md:ml-2"
            >
              <span>{language === 'ar' ? 'جميع المشاريع' : 'All Projects'}</span>
              <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>

        {/* Bento Grid Container (12-column grid matching stitch 15) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card #1: Large Card (8 columns) */}
          {bigProject && (
            <div className="md:col-span-8 bg-[#12161D] border border-[#232A35] rounded-xl overflow-hidden hover-card-lift flex flex-col group">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0B0E14] border-b border-[#232A35]">
                {bigProject.images && bigProject.images.length > 0 ? (
                  <img
                    src={bigProject.images[0]}
                    alt={bigProject.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#12161D] to-[#1A1F28] p-8 text-center">
                    <span className="font-mono text-xl font-bold text-text-muted">{bigProject.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161D] via-transparent to-transparent opacity-85" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12161D]/90 border border-primary/30 backdrop-blur-md font-mono text-xs text-[#3E8EFF] font-semibold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3E8EFF]" />
                  {bigProject.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors mb-2.5">
                    {bigProject.title}
                  </h3>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                    {bigProject.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {bigProject.stack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#1A1F28] border border-[#2E3644] text-xs font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <div className="flex items-center gap-3">
                    {bigProject.githubUrl && (
                      <a
                        href={bigProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-lg bg-[#1A1F28] border border-[#2E3644] flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {bigProject.liveUrl && (
                      <a
                        href={bigProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1.5 rounded-lg bg-[#1A1F28] border border-[#2E3644] flex items-center gap-1.5 text-xs font-mono text-text-primary hover:border-accent hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>

                  <Link
                    to={`/projects/${bigProject.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold text-[#3E8EFF] hover:text-[#38BDF8] transition-colors group/link px-3 py-1.5 rounded-md hover:bg-[#3E8EFF14]"
                  >
                    <span>{language === 'ar' ? 'دراسة الحالة' : 'Case Study'}</span>
                    <span className="transition-transform group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Bento Card #2: Medium Card (4 columns) */}
          {secondProject && (
            <div className="md:col-span-4 bg-[#12161D] border border-[#232A35] rounded-xl overflow-hidden hover-card-lift flex flex-col group">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0B0E14] border-b border-[#232A35]">
                {secondProject.images && secondProject.images.length > 0 ? (
                  <img
                    src={secondProject.images[0]}
                    alt={secondProject.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#12161D] to-[#1A1F28] p-6 text-center">
                    <span className="font-mono text-base font-bold text-text-muted">{secondProject.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161D] via-transparent to-transparent opacity-85" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12161D]/90 border border-primary/30 backdrop-blur-md font-mono text-xs text-[#38BDF8] font-semibold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                  {secondProject.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors mb-2.5">
                    {secondProject.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {secondProject.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {secondProject.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#1A1F28] border border-[#2E3644] text-xs font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <div className="flex items-center gap-2">
                    {secondProject.githubUrl && (
                      <a
                        href={secondProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#1A1F28] border border-[#2E3644] flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {secondProject.liveUrl && (
                      <a
                        href={secondProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-[#1A1F28] border border-[#2E3644] flex items-center gap-1 text-xs font-mono text-text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <Link
                    to={`/projects/${secondProject.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#3E8EFF] hover:text-[#38BDF8] transition-colors"
                  >
                    <span>{language === 'ar' ? 'التفاصيل' : 'Details'}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Row 2: 3 Cards (4 columns each) */}
          {row2Projects.map((proj) => (
            <div
              key={proj.id}
              className="md:col-span-4 bg-[#12161D] border border-[#232A35] rounded-xl overflow-hidden hover-card-lift flex flex-col group"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#0B0E14] border-b border-[#232A35]">
                {proj.images && proj.images.length > 0 ? (
                  <img
                    src={proj.images[0]}
                    alt={proj.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#12161D] to-[#1A1F28] p-6 text-center">
                    <Code className="w-8 h-8 text-[#3E8EFF]/60 mb-2" />
                    <span className="font-mono text-sm font-bold text-text-muted">{proj.title}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#12161D] via-transparent to-transparent opacity-85" />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12161D]/90 border border-primary/30 backdrop-blur-md font-mono text-xs text-[#34D399] font-semibold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                  {proj.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                <div>
                  <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed line-clamp-2">
                    {proj.tagline}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#1A1F28] border border-[#2E3644] text-[11px] font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/60">
                  <div className="flex items-center gap-2">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-[#1A1F28] border border-[#2E3644] flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-[#1A1F28] border border-[#2E3644] flex items-center gap-1 text-xs font-mono text-text-primary hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <Link
                    to={`/projects/${proj.slug}`}
                    className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#3E8EFF] hover:text-[#38BDF8] transition-colors"
                  >
                    <span>{language === 'ar' ? 'التفاصيل' : 'Details'}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
