import React, { useState } from 'react';
import { SectionHeader } from '../ui';
import { ExperienceItem } from '../../types';
import { Briefcase, GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/LanguageContext';

export const ExperienceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'work' | 'education' | 'certification'>('all');
  const { t, data, language, isRTL } = useLanguage();
  const { EXPERIENCES } = data;

  const filteredItems = filter === 'all'
    ? EXPERIENCES
    : EXPERIENCES.filter((item: ExperienceItem) => item.category === filter);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'work':
        return <Briefcase className="w-4 h-4 text-accent" />;
      case 'education':
        return <GraduationCap className="w-4 h-4 text-accent" />;
      case 'certification':
      default:
        return <Award className="w-4 h-4 text-accent" />;
    }
  };

  const getTabLabel = (tab: 'all' | 'work' | 'education' | 'certification') => {
    if (tab === 'all') return language === 'ar' ? 'الكل' : 'All';
    if (tab === 'work') return t.experience.workTab;
    if (tab === 'education') return t.experience.educationTab;
    return t.experience.certificationTab;
  };

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag="07"
            eyebrow={t.experience.eyebrow}
            title={t.experience.title}
            description={t.experience.subtitle}
            className="mb-0"
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-btn bg-surface border border-border self-start md:self-auto font-mono text-xs">
            {(['all', 'work', 'education', 'certification'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={cn(
                  'px-3 py-1.5 rounded-sm uppercase tracking-wider transition-colors focus-ring',
                  filter === tab
                    ? 'bg-accent text-white font-semibold'
                    : 'text-text-muted hover:text-text-primary'
                )}
              >
                {getTabLabel(tab)}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div
          className={cn(
            'relative space-y-10',
            isRTL
              ? 'pr-6 sm:pr-8 border-r-2 border-border-strong mr-2 sm:mr-4'
              : 'pl-6 sm:pl-8 border-l-2 border-border-strong ml-2 sm:ml-4'
          )}
        >
          {filteredItems.map((item: ExperienceItem) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div
                className={cn(
                  'absolute top-1.5 w-6 h-6 rounded-sm bg-surface-elevated border-2 border-border-strong group-hover:border-accent flex items-center justify-center transition-colors shadow-sm',
                  isRTL ? '-right-[31px] sm:-right-[39px]' : '-left-[31px] sm:-left-[39px]'
                )}
              >
                {getCategoryIcon(item.category)}
              </div>

              {/* Card surface */}
              <div className="rounded-card bg-surface border border-border p-6 hover:border-border-strong hover:bg-surface-elevated/60 transition-all duration-200">
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-sm bg-accent/10 border border-accent/25 text-accent uppercase">
                      {item.category}
                    </span>
                    <span className="font-mono text-xs text-text-muted flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  {item.location && (
                    <span className="font-mono text-xs text-text-muted flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  )}
                </div>

                {/* Role & Org */}
                <h3 className="text-lg sm:text-xl font-bold font-sans text-text-primary mb-1">
                  {item.role}
                </h3>
                <h4 className="font-mono text-xs text-text-secondary uppercase tracking-wider mb-4">
                  // {item.organization}
                </h4>

                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {item.summary}
                </p>

                {/* Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {item.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Skills tags */}
                {item.skills && item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/50">
                    {item.skills.map((skill: string) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded-sm bg-surface-elevated text-[11px] font-mono text-text-muted border border-border"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
