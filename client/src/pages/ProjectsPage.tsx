import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { Navbar } from '../components/sections/Navbar';
import { Footer } from '../components/sections/Footer';
import { ProjectCard } from '../components/ui/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';

export const ProjectsPage: React.FC = () => {
  const { language, data } = useLanguage();
  const { PROJECTS } = data;

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Categories list matching reference: All Projects, Backend, Full Stack, APIs, GIS
  const CATEGORIES = [
    { id: 'All', labelEn: 'All Projects', labelAr: 'كل المشاريع' },
    { id: 'Backend', labelEn: 'Backend Development', labelAr: 'تطوير Backend' },
    { id: 'Full Stack', labelEn: 'Full Stack', labelAr: 'Full Stack' },
    { id: 'APIs', labelEn: 'APIs & Services', labelAr: 'واجهات APIs' },
    { id: 'GIS', labelEn: 'GIS & Spatial', labelAr: 'نظم المعلومات الجغرافية' },
  ];

  // Calculate live counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: PROJECTS.length,
      Backend: 0,
      'Full Stack': 0,
      APIs: 0,
      GIS: 0,
      Other: 0,
    };

    PROJECTS.forEach((p: Project) => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      } else {
        counts['Other'] = (counts['Other'] || 0) + 1;
      }
    });

    return counts;
  }, [PROJECTS]);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project: Project) => {
      const matchesCategory =
        selectedCategory === 'All' || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.overview.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.stack.some((tech: string) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [PROJECTS, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-bg text-text-primary antialiased selection:bg-accent/25 selection:text-accent flex flex-col justify-between">
      {/* Simple Header matching project.png */}
      <Navbar />

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-32 pb-24 w-full flex-1">
        {/* Page Title & Search Bar matching project.png */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-3">
            {language === 'ar' ? 'معرض المشاريع والأنظمة' : 'Production Projects & Architectures'}
          </h1>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-8">
            {language === 'ar'
              ? 'مجموعة من أنظمة الـ Backend وتطبيقات الويب المتكاملة ومشاريع نظم المعلومات الجغرافية المبنية بأعلى معايير الانضباط والأداء.'
              : 'A curated showcase of real-world backend architectures, high-concurrency APIs, and full-stack platforms built for production load.'}
          </p>

          {/* Large Rounded Search Bar matching project.png */}
          <div className="relative w-full max-w-2xl">
            <div className="relative flex items-center">
              <Search className="absolute left-4 sm:left-5 w-4 h-4 text-text-muted pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'ar'
                    ? 'ابحث بالاسم، أو التقنية، أو التصنيف...'
                    : 'Search projects by title, technology, or category...'
                }
                className="w-full pl-11 sm:pl-12 pr-11 py-3.5 rounded-full bg-surface border border-border-strong text-sm text-text-primary placeholder:text-text-muted focus-ring transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 p-1 text-text-muted hover:text-text-primary rounded-full transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Chips with Live Counts matching project.png */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = categoryCounts[cat.id] ?? 0;
            const label = language === 'ar' ? cat.labelAr : cat.labelEn;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-mono text-xs transition-all focus-ring flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-accent text-white font-bold shadow-md shadow-blue-500/25'
                    : 'bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-border-strong'
                }`}
              >
                <span>{label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-surface-elevated text-text-muted'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid with Animated Reflow */}
        {filteredProjects.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          >
            <AnimatePresence>
              {filteredProjects.map((project: Project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 rounded-2xl bg-surface border border-border max-w-md mx-auto">
            <p className="font-mono text-sm text-text-muted mb-4">
              {language === 'ar'
                ? 'لا توجد مشاريع تطابق بحثك حالياً.'
                : 'No projects found matching your search criteria.'}
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-4 py-2 rounded-full bg-accent text-white text-xs font-mono font-medium hover:bg-accent-hover transition-colors"
            >
              {language === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset Filters'}
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};
