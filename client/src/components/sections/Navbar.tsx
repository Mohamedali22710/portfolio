import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Terminal, Globe, MessageSquare } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { WhatsAppIcon } from '../ui';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/LanguageContext';

interface NavbarProps {
  onOpenTerminal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language, toggleLanguage, data, isRTL } = useLanguage();
  const { PERSONAL_INFO } = data;

  const isProjectsSubpage = location.pathname.startsWith('/projects');

  const HOME_NAV_LINKS = [
    { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '#home', id: 'home' },
    { label: language === 'ar' ? 'عني' : 'About', href: '#about', id: 'about' },
    { label: language === 'ar' ? 'التعليم' : 'Education', href: '#education', id: 'education' },
    { label: language === 'ar' ? 'الخدمات' : 'Services', href: '#services', id: 'services' },
    { label: language === 'ar' ? 'المهارات' : 'Skills', href: '#skills', id: 'skills' },
    { label: language === 'ar' ? 'المشاريع' : 'Projects', href: '#projects', id: 'projects' },
    { label: language === 'ar' ? 'المنهجية' : 'Process', href: '#how-i-build', id: 'how-i-build' },
    { label: language === 'ar' ? 'نظم GIS' : 'GIS', href: '#gis', id: 'gis' },
    { label: language === 'ar' ? 'الخبرات' : 'Experience', href: '#experience', id: 'experience' },
    { label: language === 'ar' ? 'تواصل' : 'Contact', href: '#contact', id: 'contact' },
  ];

  const PROJECTS_PAGE_LINKS = [
    { label: language === 'ar' ? 'الرئيسية' : 'Home', href: '/' },
    { label: language === 'ar' ? 'المشاريع' : 'Projects', href: '/projects' },
    { label: language === 'ar' ? 'عني' : 'About', href: '/#about' },
    { label: language === 'ar' ? 'تواصل' : 'Contact', href: '/#contact' },
  ];

  const activeId = useScrollSpy(HOME_NAV_LINKS.map((link) => link.id), 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + href);
        return;
      }
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/#')) {
      navigate(href.substring(1));
    } else {
      navigate(href);
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 border-b',
        isScrolled
          ? 'h-[68px] bg-bg/95 backdrop-blur-md border-border-strong shadow-lg'
          : 'h-[76px] bg-bg/85 backdrop-blur-sm border-border/80'
      )}
    >
      <div className="max-w-[1240px] mx-auto h-full px-4 sm:px-6 md:px-8 flex items-center justify-between">
        {/* Left: Avatar + Name + Subtitle (or simple Name on /projects) */}
        <Link
          to="/"
          className="flex items-center gap-3 group focus-ring rounded-lg shrink-0"
          aria-label="Mohamed Ali portfolio home"
        >
          <div className="w-9 h-9 rounded-lg overflow-hidden border border-border-strong group-hover:border-accent transition-colors bg-surface shrink-0 shadow-sm">
            <img
              src="/assets/mohamed.jpg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-sm font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="font-mono text-[11px] text-text-muted leading-none">
              {language === 'ar' ? 'مطوّر Backend' : 'Full-Stack Developer'}
            </span>
          </div>
        </Link>

        {/* Center: Reference Header Nav */}
        {!isProjectsSubpage ? (
          /* hero.png: Centered one rounded-full outlined container with nav pills */
          <nav className="hidden lg:flex items-center gap-1 bg-surface-elevated/90 border border-border-strong px-2 py-1.5 rounded-full shadow-inner">
            {HOME_NAV_LINKS.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={cn(
                    'px-3.5 py-1 text-xs font-medium rounded-full transition-all focus-ring',
                    isActive
                      ? 'bg-accent text-white font-semibold shadow-sm'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface'
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        ) : (
          /* project.png: Plain links center */
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {PROJECTS_PAGE_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  'transition-colors font-medium focus-ring rounded-sm',
                  link.href === '/projects' && location.pathname === '/projects'
                    ? 'text-accent border-b-2 border-accent pb-1'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Right Section */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-surface border border-border hover:border-accent font-mono text-xs text-text-secondary hover:text-accent transition-all focus-ring"
            title={language === 'en' ? 'التحويل للغة العربية' : 'Switch to English'}
            aria-label="Toggle language"
          >
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span className="font-semibold">{language === 'en' ? 'عربي' : 'EN'}</span>
          </button>

          {!isProjectsSubpage ? (
            /* hero.png Right: Green-dot "Available" pill + square theme/terminal toggle */
            <>
              <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium">
                  {language === 'ar' ? 'متاح للعمل' : 'Available'}
                </span>
              </div>

              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="w-8 h-8 rounded-lg bg-surface border border-border-strong flex items-center justify-center text-text-muted hover:text-accent hover:border-accent transition-colors focus-ring"
                  title="Open CLI Shell (Ctrl + `)"
                  aria-label="Terminal"
                >
                  <Terminal className="w-4 h-4" />
                </button>
              )}
            </>
          ) : (
            /* project.png Right: Theme toggle + green outlined "Contact via WhatsApp" button */
            <>
              {PERSONAL_INFO.whatsapp && (
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 transition-colors font-mono text-xs"
                >
                  <WhatsAppIcon size={14} />
                  <span>{language === 'ar' ? 'تواصل عبر واتساب' : 'Contact via WhatsApp'}</span>
                </a>
              )}
            </>
          )}

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden text-text-secondary hover:text-text-primary hover:bg-surface-elevated rounded-lg transition-colors focus-ring"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface-elevated border-b border-border shadow-2xl px-6 py-5 animate-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-2">
            {(isProjectsSubpage ? PROJECTS_PAGE_LINKS : HOME_NAV_LINKS).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 text-sm font-medium rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-border flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{language === 'ar' ? 'متاح للعمل' : 'Available'}</span>
              </div>

              {PERSONAL_INFO.whatsapp && (
                <a
                  href={PERSONAL_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-mono"
                >
                  <WhatsAppIcon size={14} />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
