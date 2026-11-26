import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Mail, Terminal, Database, Server, RefreshCw } from 'lucide-react';
import { StatusPill, Button, GitHubIcon, LinkedInIcon, WhatsAppIcon } from '../ui';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useLanguage } from '../../context/LanguageContext';

interface HeroSectionProps {
  onOpenTerminal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTerminal }) => {
  const prefersReducedMotion = useReducedMotion();
  const { t, data, language, isRTL } = useLanguage();
  const { PERSONAL_INFO } = data;

  // Real photos state: allow toggling between ME1.jpg and ME2.jpg
  const [activePhotoIndex, setActivePhotoIndex] = useState<0 | 1>(0);
  const photos = [
    { src: '/Image/me/ME1.jpg', label: 'ME-01', caption: 'Portrait 01' },
    { src: '/Image/me/ME2.jpg', label: 'ME-02', caption: 'Portrait 02' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
      {/* Subtle single radial glow strictly adhering to DESIGN.md section 0 */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-accent/5 rounded-full blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (55% on desktop: 7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start gap-6"
          >
            {/* System Status Pill */}
            <motion.div variants={itemVariants}>
              <StatusPill statusText={PERSONAL_INFO.status} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-text-primary tracking-tight leading-[1.12]"
            >
              {language === 'ar' ? (
                <>
                  مهندس Backend يبني{' '}
                  <span className="text-accent underline decoration-accent/30 underline-offset-8">
                    أنظمة رقمية قابلة للتوسع
                  </span>
                </>
              ) : (
                <>
                  Backend Engineer Building{' '}
                  <span className="text-accent underline decoration-accent/30 underline-offset-8">
                    Scalable Digital Systems
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subtitle / Lead Paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              {PERSONAL_INFO.summary}
            </motion.p>

            {/* Primary Action CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo('projects')}
                rightIcon={<ArrowDownRight className={`w-4 h-4 ${isRTL ? 'rotate-90' : ''}`} />}
                className="font-mono text-xs uppercase tracking-wider font-semibold w-full sm:w-auto"
              >
                {t.hero.viewProjects}
              </Button>

              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollTo('contact')}
                leftIcon={<Mail className="w-4 h-4 text-accent" />}
                className="font-mono text-xs uppercase tracking-wider font-medium w-full sm:w-auto"
              >
                {t.hero.letsConnect}
              </Button>

              {onOpenTerminal && (
                <Button
                  size="lg"
                  variant="outline"
                  onClick={onOpenTerminal}
                  leftIcon={<Terminal className="w-4 h-4 text-text-muted" />}
                  className="font-mono text-xs uppercase tracking-wider font-medium hidden sm:inline-flex"
                >
                  {t.hero.cliShell}
                </Button>
              )}
            </motion.div>

            {/* Social Icons & Direct Contact Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-2 border-t border-border/80 w-full"
            >
              <span className="font-mono text-xs text-text-muted uppercase tracking-wider">
                {t.hero.directChannels}
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-btn transition-colors focus-ring"
                  aria-label="GitHub profile"
                >
                  <GitHubIcon size={18} />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-btn transition-colors focus-ring"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon size={18} />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2 text-text-secondary hover:text-accent hover:bg-surface-elevated rounded-btn transition-colors focus-ring"
                  aria-label="Email"
                >
                  <Mail className="w-[18px] h-[18px]" />
                </a>
                {PERSONAL_INFO.whatsapp && (
                  <a
                    href={PERSONAL_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-text-secondary hover:text-success hover:bg-surface-elevated rounded-btn transition-colors focus-ring"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column (45% on desktop: 5 cols): Rectangular Profile Frame with real photos me1 / me2 */}
          <motion.div
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient rectangular container strictly complying with Rule 4 */}
            <div className="relative w-full max-w-[360px] sm:max-w-[390px] aspect-[4/5] rounded-card overflow-hidden bg-surface border border-border-strong shadow-2xl group">
              {/* Engineering Blueprint Background Grid Texture */}
              <div className="absolute inset-0 grid-pattern opacity-30 -z-10" />

              {/* Developer Real Photo - No artificial distortion or face alteration */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={photos[activePhotoIndex].src}
                  src={photos[activePhotoIndex].src}
                  alt={`${PERSONAL_INFO.name} — ${photos[activePhotoIndex].caption}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </AnimatePresence>

              {/* Very subtle bottom vignette for text legibility only */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent pointer-events-none" />

              {/* Top Photo Switcher Pill allowing switching between me1 and me2 */}
              <div className="absolute top-3.5 right-3.5 z-10 flex items-center bg-surface/90 backdrop-blur-sm border border-border-strong rounded-btn p-1 font-mono text-[11px] shadow-sm">
                <button
                  type="button"
                  onClick={() => setActivePhotoIndex(0)}
                  className={`px-2 py-0.5 rounded-sm transition-colors ${
                    activePhotoIndex === 0
                      ? 'bg-accent text-white font-bold'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  aria-label="View photo 1"
                >
                  ME-1
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhotoIndex(1)}
                  className={`px-2 py-0.5 rounded-sm transition-colors ${
                    activePhotoIndex === 1
                      ? 'bg-accent text-white font-bold'
                      : 'text-text-muted hover:text-text-primary'
                  }`}
                  aria-label="View photo 2"
                >
                  ME-2
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhotoIndex((prev) => (prev === 0 ? 1 : 0))}
                  title={t.hero.togglePhoto}
                  className="ml-1 p-1 text-text-muted hover:text-accent transition-colors"
                >
                  <RefreshCw className="w-3 h-3" />
                </button>
              </div>

              {/* Monospace bottom status bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between font-mono text-[11px] text-text-muted bg-surface/95 px-3 py-1.5 rounded-sm border border-border shadow-sm">
                <span className="text-text-secondary">{t.hero.engId}</span>
                <span className="text-success font-semibold flex items-center gap-1.5">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-success animate-pulse-dot" />
                  {t.hero.activeSession}
                </span>
              </div>
            </div>

            {/* Exactly 2 Tech Chips as strictly specified in DESIGN.md */}
            {/* Tech Chip 1: Node.js (Bottom-Left) */}
            <div
              className={`absolute ${
                isRTL ? '-right-3 sm:-right-6' : '-left-3 sm:-left-6'
              } bottom-14 bg-surface-elevated border border-border-strong px-3 py-2 rounded-btn shadow-lg flex items-center gap-2.5 font-mono text-xs text-text-primary z-20`}
              aria-label="Core stack: Node.js"
            >
              <div className="w-5 h-5 rounded-sm bg-[#339933]/15 text-[#339933] flex items-center justify-center">
                <Server className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold">Node.js</span>
              <span className="text-[10px] text-text-muted uppercase">Backend</span>
            </div>

            {/* Tech Chip 2: PostgreSQL (Top-Right) */}
            <div
              className={`absolute ${
                isRTL ? '-left-3 sm:-left-6' : '-right-3 sm:-right-6'
              } top-14 bg-surface-elevated border border-border-strong px-3 py-2 rounded-btn shadow-lg flex items-center gap-2.5 font-mono text-xs text-text-primary z-20`}
              aria-label="Core stack: PostgreSQL"
            >
              <div className="w-5 h-5 rounded-sm bg-[#336791]/20 text-[#63A6FF] flex items-center justify-center">
                <Database className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold">PostgreSQL</span>
              <span className="text-[10px] text-accent uppercase">PostGIS</span>
            </div>
          </motion.div>
        </div>

        {/* Credibility Strip */}
        <div className="mt-16 md:mt-24 py-5 border-y border-border grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center justify-center">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {t.hero.credibility.arch}
            </span>
            <span className="font-mono text-[10px] text-text-muted mt-0.5">
              {t.hero.credibility.archSub}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center md:border-l md:border-border">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {t.hero.credibility.sql}
            </span>
            <span className="font-mono text-[10px] text-text-muted mt-0.5">
              {t.hero.credibility.sqlSub}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center border-t border-border sm:border-t-0 md:border-l md:border-border pt-3 sm:pt-0">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {t.hero.credibility.gis}
            </span>
            <span className="font-mono text-[10px] text-text-muted mt-0.5">
              {t.hero.credibility.gisSub}
            </span>
          </div>
          <div className="flex flex-col items-center justify-center border-t border-border sm:border-t-0 md:border-l md:border-border pt-3 sm:pt-0">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {t.hero.credibility.reliability}
            </span>
            <span className="font-mono text-[10px] text-text-muted mt-0.5">
              {t.hero.credibility.reliabilitySub}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
