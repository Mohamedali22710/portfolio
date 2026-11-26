import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
} from 'lucide-react';
import { Navbar } from '../components/sections/Navbar';
import { Footer } from '../components/sections/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Project } from '../types';

const PROJECT_GALLERY_MAP: Record<string, string[]> = {
  'mersal-delivery': [
    '/Image/project/MERSAL/1.png',
    '/Image/project/MERSAL/2.png',
    '/Image/project/MERSAL/3.png',
    '/Image/project/MERSAL/4.png',
    '/Image/project/MERSAL/5.png',
    '/Image/project/MERSAL/6.png',
  ],
  'insighto': [
    '/Image/project/Insigto/1.png',
    '/Image/project/Insigto/2.png',
    '/Image/project/Insigto/3.png',
    '/Image/project/Insigto/4.png',
    '/Image/project/Insigto/5.jpeg',
    '/Image/project/Insigto/6.jpeg',
  ],
  'coffee-store': [
    '/Image/project/coffe store/Screenshot 2026-11-02 201059.png',
  ],
};

export const ProjectCaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, data, isRTL } = useLanguage();
  const { PROJECTS } = data;

  const [project, setProject] = useState<Project | null>(null);
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);

  const currentIndex = PROJECTS.findIndex((p: Project) => p.slug === slug);
  const prevProject =
    currentIndex !== -1
      ? PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length]
      : null;
  const nextProject =
    currentIndex !== -1
      ? PROJECTS[(currentIndex + 1) % PROJECTS.length]
      : null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (slug) {
      const found = PROJECTS.find((p: Project) => p.slug === slug);
      setProject(found || null);
      setFullscreenIndex(null);
    }
  }, [slug, PROJECTS]);

  if (!project) {
    return (
      <div className="min-h-screen bg-bg text-text-primary flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto my-auto p-8 rounded-2xl bg-surface border border-border text-center">
          <div className="font-mono text-xs text-error uppercase mb-2">404 // NOT_FOUND</div>
          <h1 className="text-2xl font-bold mb-4">
            {language === 'ar' ? 'المشروع غير موجود' : 'Project Not Found'}
          </h1>
          <button
            onClick={() => navigate('/projects')}
            className="px-5 py-2.5 rounded-full bg-accent text-white font-mono text-xs font-semibold"
          >
            {language === 'ar' ? 'العودة للمشاريع' : 'Return to Projects'}
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : PROJECT_GALLERY_MAP[project.id] || [];

  const handleNextFullscreen = () => {
    if (fullscreenIndex !== null && galleryImages.length > 0) {
      setFullscreenIndex((prev) => (prev! + 1) % galleryImages.length);
    }
  };

  const handlePrevFullscreen = () => {
    if (fullscreenIndex !== null && galleryImages.length > 0) {
      setFullscreenIndex((prev) => (prev! - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text-primary antialiased selection:bg-accent/25 selection:text-accent flex flex-col justify-between">
      <Navbar />

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 pb-24 w-full flex-1">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
            <span>{language === 'ar' ? 'العودة لجميع المشاريع' : 'Back to All Projects'}</span>
          </Link>

          <span className="font-mono text-xs text-[#3E8EFF] bg-[#3E8EFF14] px-3 py-1 rounded-full border border-[#3E8EFF33]">
            {project.category}
          </span>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Details Sidebar Card (Sticky on desktop, above on mobile) */}
          <aside className="order-1 lg:order-2 lg:col-span-4 lg:sticky lg:top-28">
            <div className="rounded-2xl bg-[#12161D] border border-[#232A35] p-6 shadow-xl space-y-6">
              <h2 className="font-bold text-lg text-text-primary border-b border-border/80 pb-3">
                {language === 'ar' ? 'تفاصيل المشروع' : 'Project Details'}
              </h2>

              {/* Category */}
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted block mb-1.5">
                  {language === 'ar' ? 'التصنيف' : 'CATEGORY'}
                </span>
                <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-medium text-xs">
                  {project.category}
                </span>
              </div>

              {/* Technologies Used */}
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-muted block mb-2">
                  {language === 'ar' ? 'التقنيات المستخدمة' : 'TECHNOLOGIES USED'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-[#1A1F28] border border-[#2E3644] text-xs font-mono text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-500/25 focus-ring"
                  >
                    <span>{language === 'ar' ? 'معاينة المشروع مباشرة' : 'View Live Demo'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#1A1F28] hover:bg-[#202633] border border-[#2E3644] text-text-primary font-medium text-sm transition-all flex items-center justify-center gap-2 focus-ring"
                  >
                    <Github className="w-4 h-4" />
                    <span>{language === 'ar' ? 'عرض الكود المصدري' : 'View Source Code'}</span>
                  </a>
                )}
              </div>
            </div>
          </aside>

          {/* Left Column (Main Content) */}
          <div className="order-2 lg:order-1 lg:col-span-8 space-y-10">
            {/* Header: Title + Tagline */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-3">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Project Media Grid (طلب المستخدم: خلى صور بنظام جريد) */}
            {galleryImages.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-border/60">
                  <div className="flex items-center gap-2 font-mono text-xs text-text-secondary">
                    <Sparkles className="w-4 h-4 text-accent" />
                    <span className="font-bold text-text-primary text-sm">
                      {language === 'ar' ? 'وسائط ومعرض المشروع' : 'Project Media Gallery'}
                    </span>
                    <span className="text-text-muted">
                      ({galleryImages.length} {language === 'ar' ? 'لقطات' : 'screenshots'})
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-text-muted">
                    {language === 'ar' ? 'اضغط لتكبير الصورة' : 'Click to inspect fullscreen'}
                  </span>
                </div>

                {/* Grid Layout for Project Images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {galleryImages.map((imgSrc, idx) => (
                    <div
                      key={idx}
                      onClick={() => setFullscreenIndex(idx)}
                      className="group relative aspect-[16/10] rounded-xl bg-[#12161D] border border-[#232A35] hover:border-accent overflow-hidden cursor-pointer shadow-md hover-card-lift transition-all"
                    >
                      <img
                        src={imgSrc}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />

                      {/* Image Number Badge (Top-Left) */}
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#0F1319]/85 backdrop-blur-md border border-white/10 font-mono text-[11px] text-[#38BDF8] font-bold">
                        0{idx + 1}
                      </div>

                      {/* Zoom Indicator (Top-Right) */}
                      <div className="absolute top-3 right-3 p-1.5 rounded-md bg-[#0F1319]/85 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#12161D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                        <span className="font-mono text-[11px] text-text-primary">
                          {language === 'ar' ? 'عرض بكامل الشاشة' : 'Open Fullscreen'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview Section */}
            <div className="rounded-2xl bg-[#12161D] border border-[#232A35] p-6 sm:p-7 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                {language === 'ar' ? '// نظرة عامة على النظام' : '// SYSTEM OVERVIEW'}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="rounded-2xl bg-[#12161D] border border-error/25 p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-error font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>{language === 'ar' ? 'المشكلة الأساسية' : 'THE ARCHITECTURAL PROBLEM'}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="rounded-2xl bg-[#12161D] border border-success/30 p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-success font-semibold">
                  <Lightbulb className="w-4 h-4" />
                  <span>{language === 'ar' ? 'الحل الهندسي' : 'ENGINEERING SOLUTION'}</span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* System Architecture */}
            {project.architecture && project.architecture.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  {language === 'ar' ? '// معمارية النظام والطبقات' : '// SYSTEM ARCHITECTURE & TOPOLOGY'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.architecture.map((layer, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#12161D] border border-[#232A35] text-xs font-mono text-text-secondary leading-relaxed"
                    >
                      <span className="text-[#38BDF8] font-bold block mb-1">
                        LAYER 0{idx + 1}
                      </span>
                      {layer}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-4">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold">
                  {language === 'ar' ? '// أبرز إمكانيات وميزات النظام' : '// CORE SYSTEM CAPABILITIES'}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#12161D] border border-[#232A35] flex items-start gap-3 text-xs text-text-secondary"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges & Learnings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-[#12161D] border border-[#232A35] p-6 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#FBBF24] font-semibold block">
                  {language === 'ar' ? 'التحديات التقنية' : 'HARD PROBLEMS & CHALLENGES'}
                </span>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.challenges}
                </p>
              </div>

              <div className="rounded-2xl bg-[#12161D] border border-[#232A35] p-6 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold block">
                  {language === 'ar' ? 'الدروس المستفادة' : 'KEY LEARNINGS & TAKEAWAYS'}
                </span>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {project.learnings}
                </p>
              </div>
            </div>

            {/* Next / Previous Project Navigation Buttons (طلب المستخدم: ويكوفي زرار نكست للبروجيكت للبعد ورزر برفيوس) */}
            <div className="pt-8 border-t border-[#232A35] grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevProject && (
                <Link
                  to={`/projects/${prevProject.slug}`}
                  className="group flex flex-col p-5 rounded-xl bg-[#12161D] border border-[#232A35] hover:border-accent hover-card-lift transition-all"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-1.5 group-hover:text-accent transition-colors">
                    <ChevronLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                    <span>{language === 'ar' ? 'المشروع السابق' : 'Previous Project'}</span>
                  </div>
                  <span className="font-bold text-base text-text-primary group-hover:text-accent transition-colors">
                    {prevProject.title}
                  </span>
                  <span className="font-mono text-[11px] text-text-muted mt-1">
                    {prevProject.category}
                  </span>
                </Link>
              )}

              {nextProject && (
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="group flex flex-col p-5 rounded-xl bg-[#12161D] border border-[#232A35] hover:border-accent hover-card-lift transition-all sm:text-right"
                >
                  <div className="flex items-center sm:justify-end gap-2 text-xs font-mono text-text-muted mb-1.5 group-hover:text-accent transition-colors">
                    <span>{language === 'ar' ? 'المشروع التالي' : 'Next Project'}</span>
                    <ChevronRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                  </div>
                  <span className="font-bold text-base text-text-primary group-hover:text-accent transition-colors">
                    {nextProject.title}
                  </span>
                  <span className="font-mono text-[11px] text-text-muted mt-1">
                    {nextProject.category}
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Fullscreen Lightbox Modal */}
      {fullscreenIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md animate-in fade-in">
          <button
            onClick={() => setFullscreenIndex(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {galleryImages.length > 1 && (
            <>
              <button
                onClick={handlePrevFullscreen}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextFullscreen}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="flex flex-col items-center max-w-5xl max-h-[90vh]">
            <img
              src={galleryImages[fullscreenIndex]}
              alt={`Fullscreen preview ${fullscreenIndex + 1}`}
              className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-3 font-mono text-xs text-text-muted">
              {fullscreenIndex + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};
