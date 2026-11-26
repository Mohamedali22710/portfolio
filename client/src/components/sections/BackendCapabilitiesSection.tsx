import React from 'react';
import { SectionHeader } from '../ui';
import { CapabilityItem } from '../../types';
import {
  Database,
  Network,
  Map,
  Zap,
  ShieldAlert,
  Activity,
  Check,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/LanguageContext';

export const BackendCapabilitiesSection: React.FC = () => {
  const { t, data, language } = useLanguage();
  const { BACKEND_CAPABILITIES } = data;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5 text-accent" />;
      case 'Network':
        return <Network className="w-5 h-5 text-accent" />;
      case 'Map':
        return <Map className="w-5 h-5 text-accent" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-accent" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-accent" />;
      case 'Activity':
      default:
        return <Activity className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="capabilities" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="05"
          eyebrow={t.capabilities.eyebrow}
          title={t.capabilities.title}
          description={t.capabilities.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BACKEND_CAPABILITIES.map((cap: CapabilityItem) => (
            <div
              key={cap.id}
              className={cn(
                'rounded-card bg-surface border border-border p-6 flex flex-col justify-between',
                'hover:border-accent hover:bg-surface-elevated/70 transition-all duration-200'
              )}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-btn bg-accent/10 border border-accent/20">
                    {getIcon(cap.iconName)}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-base text-text-primary">
                      {cap.title}
                    </h3>
                    <span className="font-mono text-[10px] text-accent uppercase tracking-wider">
                      SPEC // {cap.id.toUpperCase()}
                    </span>
                  </div>
                </div>

                <p className="font-mono text-xs text-text-muted mb-2 tracking-wide">
                  // {cap.tagline}
                </p>

                <p className="text-xs text-text-secondary leading-relaxed mb-5">
                  {cap.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-border/60">
                <ul className="flex flex-col gap-2">
                  {cap.highlights.map((item: string) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 font-mono text-xs text-text-primary"
                    >
                      <Check className="w-3.5 h-3.5 text-success shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
