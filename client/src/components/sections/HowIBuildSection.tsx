import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionHeader } from '../ui';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useLanguage } from '../../context/LanguageContext';

export const HowIBuildSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { t, data, language, isRTL } = useLanguage();
  const { HOW_I_BUILD_STEPS } = data;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 70%'],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="how-i-build" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="04"
          eyebrow={t.howIBuild.eyebrow}
          title={t.howIBuild.title}
          description={t.howIBuild.subtitle}
        />

        <div ref={containerRef} className="relative mt-12">
          {/* Desktop Connecting Horizontal Line */}
          <div className="hidden lg:block absolute top-[28px] left-[4%] right-[4%] h-[2px] bg-border-strong -z-10">
            <motion.div
              style={{ width: prefersReducedMotion ? '100%' : lineWidth }}
              className="h-full bg-accent"
            />
          </div>

          {/* Mobile Connecting Vertical Line */}
          <div
            className={`lg:hidden absolute top-[28px] bottom-[28px] ${
              isRTL ? 'right-[27px]' : 'left-[27px]'
            } w-[2px] bg-border-strong -z-10`}
          >
            <motion.div
              style={{ height: prefersReducedMotion ? '100%' : lineHeight }}
              className="w-full bg-accent"
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {HOW_I_BUILD_STEPS.map((item: any, index: number) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: index * 0.1 }}
                className="flex lg:flex-col items-start gap-5 lg:gap-0"
              >
                {/* Step Number Badge */}
                <div className="shrink-0 w-14 h-14 rounded-btn bg-surface-elevated border-2 border-border-strong flex items-center justify-center font-mono font-bold text-base text-accent shadow-md z-10">
                  {item.step}
                </div>

                {/* Step Content */}
                <div className="flex-1 lg:mt-6 p-5 rounded-card bg-surface border border-border flex flex-col justify-between w-full h-full">
                  <div>
                    <span className="font-mono text-[10px] text-accent uppercase tracking-widest font-semibold block mb-1">
                      {item.eyebrow}
                    </span>
                    <h3 className="font-sans font-bold text-lg text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Artifact / Deliverable */}
                  <div className="pt-3 border-t border-border/60">
                    <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider block mb-0.5">
                      {t.howIBuild.deliverableLabel}:
                    </span>
                    <span className="font-mono text-xs text-text-primary">
                      {item.deliverable}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
