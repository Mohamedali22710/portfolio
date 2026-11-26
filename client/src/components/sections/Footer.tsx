import React from 'react';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from '../ui';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t, data, language } = useLanguage();
  const { PERSONAL_INFO } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-surface border-t border-border-strong py-12 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-8">
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-border/60">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-sm bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-mono font-bold text-sm">
              MA
            </div>
            <div>
              <span className="font-mono text-xs font-bold text-text-primary tracking-tight block">
                {language === 'ar' ? 'محمد علي' : 'MOHAMED ALI'}
              </span>
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                {language === 'ar' ? 'مهندس برمجيات Backend' : 'Backend Systems Engineer'}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs text-text-secondary">
            <a href="#about" className="hover:text-text-primary transition-colors focus-ring rounded-sm">
              // {t.nav.about}
            </a>
            <a href="#projects" className="hover:text-text-primary transition-colors focus-ring rounded-sm">
              // {t.nav.projects}
            </a>
            <a href="#skills" className="hover:text-text-primary transition-colors focus-ring rounded-sm">
              // {t.nav.skills}
            </a>
            <a href="#capabilities" className="hover:text-text-primary transition-colors focus-ring rounded-sm">
              // {t.nav.capabilities}
            </a>
            <a href="#gis" className="hover:text-text-primary transition-colors focus-ring rounded-sm">
              // {t.nav.gis}
            </a>
            <a href="#experience" className="hover:text-text-primary transition-colors focus-ring rounded-sm">
              // {t.nav.experience}
            </a>
            <a href="#contact" className="hover:text-text-primary transition-colors focus-ring rounded-sm">
              // {t.nav.contact}
            </a>
          </nav>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-text-primary hover:bg-surface-elevated rounded-btn transition-colors focus-ring"
              aria-label="GitHub Profile"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-muted hover:text-text-primary hover:bg-surface-elevated rounded-btn transition-colors focus-ring"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon size={18} />
            </a>
            {PERSONAL_INFO.whatsapp && (
              <a
                href={PERSONAL_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text-muted hover:text-success hover:bg-surface-elevated rounded-btn transition-colors focus-ring"
                aria-label="WhatsApp Contact"
              >
                <WhatsAppIcon size={18} />
              </a>
            )}
            <button
              onClick={scrollToTop}
              className="p-2 text-text-muted hover:text-accent hover:bg-surface-elevated rounded-btn transition-colors focus-ring ml-2 border border-border"
              title={t.footer.backToTop}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Monospace System Status Strip & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-muted">
          <div className="text-text-secondary text-center sm:text-left">
            © 2026 Mohamed Ali. {t.footer.rights}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span className="flex items-center gap-1.5 text-success">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              STATUS: OPERATIONAL
            </span>
            <span className="hidden sm:inline text-border-strong">|</span>
            <span>LATENCY: 22ms</span>
            <span className="hidden sm:inline text-border-strong">|</span>
            <span>UPTIME: 99.98%</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
