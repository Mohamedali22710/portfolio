import React from 'react';
import { SectionHeader } from '../ui';
import { SkillCategory, SkillItem } from '../../types';
import { Server, Database, MapPin, Cpu, Layout, GitBranch } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/LanguageContext';

export const TechExpertiseSection: React.FC = () => {
  const { t, data, language } = useLanguage();
  const { SKILL_CATEGORIES } = data;

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-accent" />;
      case 'Database':
        return <Database className="w-5 h-5 text-accent" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-accent" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-accent" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-accent" />;
      case 'GitBranch':
      default:
        return <GitBranch className="w-5 h-5 text-accent" />;
    }
  };

  const formatLevel = (level: 'Advanced' | 'Working Knowledge') => {
    if (language === 'ar') {
      return level === 'Advanced' ? t.skills.advanced : t.skills.workingKnowledge;
    }
    return level;
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="03"
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category: SkillCategory) => (
            <div
              key={category.id}
              className={cn(
                'rounded-card bg-surface border border-border p-6 flex flex-col justify-between',
                'hover:border-border-strong hover:bg-surface-elevated/60 transition-all duration-200'
              )}
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-btn bg-accent/10 border border-accent/20">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-base text-text-primary">
                      {category.title}
                    </h3>
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                      {category.skills.length} {language === 'ar' ? 'مهارة' : 'Capabilities'}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-text-secondary mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills List without progress bars */}
                <ul className="flex flex-col gap-2.5">
                  {category.skills.map((skill: SkillItem) => (
                    <li
                      key={skill.name}
                      className="flex items-center justify-between py-1.5 px-2.5 rounded-sm bg-surface-elevated border border-border/60 hover:border-border transition-colors"
                    >
                      <span className="font-sans text-xs text-text-primary font-medium">
                        {skill.name}
                      </span>
                      <span
                        className={cn(
                          'font-mono text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded-sm',
                          skill.level === 'Advanced'
                            ? 'bg-accent/15 text-accent border border-accent/30 font-semibold'
                            : 'bg-surface-elevated text-text-muted border border-border/50'
                        )}
                      >
                        {formatLevel(skill.level)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Status */}
              <div className="pt-4 mt-5 border-t border-border/60 flex items-center justify-between font-mono text-[11px] text-text-muted">
                <span>{language === 'ar' ? 'مجال معتمد' : 'INDEXED DOMAIN'}</span>
                <span className="text-text-secondary">{language === 'ar' ? 'جاهز للتنفيذ' : 'READY'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
