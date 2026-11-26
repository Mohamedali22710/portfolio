import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../ui';
import { HardDrive, Cpu, Database, Globe, MapPin, Activity } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useLanguage } from '../../context/LanguageContext';

export const GisPipelineSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const { t, data, language, isRTL } = useLanguage();
  const { GIS_PIPELINE_STEPS } = data;

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'HardDrive':
        return <HardDrive className="w-5 h-5 text-accent" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-accent" />;
      case 'Database':
        return <Database className="w-5 h-5 text-accent" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-accent" />;
      case 'MapPin':
      default:
        return <MapPin className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="gis" className="py-16 md:py-24 bg-surface-elevated border-b border-border relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            tag="06"
            eyebrow={t.gis.eyebrow}
            title={t.gis.title}
            description={t.gis.subtitle}
            className="mb-0"
          />

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-btn bg-surface border border-border font-mono text-xs text-text-secondary self-start md:self-auto">
            <Activity className="w-3.5 h-3.5 text-success animate-pulse" />
            <span>{language === 'ar' ? 'نظام بيانات PostGIS: نشط' : 'PostGIS MVT Pipeline: Operational'}</span>
          </div>
        </div>

        {/* SVG Pipeline Visualization (Desktop Horizontal / Mobile Vertical) */}
        <div className="relative mt-8">
          {/* Animated Connecting Flow (Desktop) */}
          <div className="hidden xl:block absolute top-[44px] left-[10%] right-[10%] h-[4px] -z-0">
            <svg className="w-full h-8 overflow-visible">
              <line
                x1="0"
                y1="2"
                x2="100%"
                y2="2"
                stroke="#2E3644"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              {!prefersReducedMotion && (
                <line
                  x1="0"
                  y1="2"
                  x2="100%"
                  y2="2"
                  stroke="#3E8EFF"
                  strokeWidth="2"
                  strokeDasharray="12 18"
                  className="animate-[dash_15s_linear_infinite]"
                />
              )}
            </svg>
          </div>

          {/* Pipeline Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
            {GIS_PIPELINE_STEPS.map((step: any, index: number) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                className="group relative rounded-card bg-surface border border-border p-5 flex flex-col justify-between hover:border-accent hover:shadow-accent transition-all duration-200"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-btn bg-surface-elevated border border-border-strong flex items-center justify-center text-accent group-hover:border-accent transition-colors">
                      {getStepIcon(step.icon)}
                    </div>
                    <span className="font-mono text-xs font-bold text-text-muted">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-sm text-text-primary mb-1">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[11px] text-accent block mb-2">
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-text-secondary leading-relaxed">
                    {step.detail}
                  </p>
                </div>

                <div className="pt-3 mt-4 border-t border-border/50 flex items-center justify-between font-mono text-[10px] text-text-muted">
                  <span>STAGE_NODE</span>
                  <span className="text-success font-semibold">VALIDATED</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
