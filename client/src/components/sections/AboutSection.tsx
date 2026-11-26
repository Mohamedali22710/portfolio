import React from 'react';
import { SectionHeader, StatCard } from '../ui';
import { Terminal, ShieldCheck, Database, Layers } from 'lucide-react';
import { StatItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

export const AboutSection: React.FC = () => {
  const { t, data, language } = useLanguage();
  const { STATS } = data;

  return (
    <section id="about" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="01"
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={
            language === 'ar'
              ? 'الأنظمة البرمجية يجب أن تكون واضحة وقابلة للقياس ومبنية لتتحمل ضغط التشغيل الحقيقي دون توقف مفاجئ.'
              : 'Software systems must be predictable, observable, and built to survive production load without constant firefighting.'
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative (6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-5 text-text-secondary leading-relaxed font-sans text-sm sm:text-base">
            {language === 'ar' ? (
              <>
                <p>
                  أنا مهندس برمجيات متخصص في الـ Backend وتطوير الـ Full-Stack، أتعامل مع هندسة البرمجيات
                  كمنهج عمل منضبط قائم على الدقة والتصميم المسبق قبل كتابة أول سطر كود. تركيزي الدائم
                  ينصب على بناء بنية تحتية قوية، ومخططات قواعد بيانات محكمة، وعقود API متسقة.
                </p>
                <p>
                  بجانب تخصصي في نظم المعلومات الجغرافية (GIS)، أتعامل مع التحديات البرمجية بمنظور يجمع بين
                  الدقة المكانية والتنظيم الهيكلي. سواء كان الأمر يتعلق بتحسين استعلامات قواعد البيانات، أو إدارة
                  جلسات المصادقة والصلاحيات (RBAC)، أو معالجة البيانات المكانية المعقدة، فإنني أبني حلولاً
                  تبقى سريعة ومستقرة تحت ضغط الاستخدام.
                </p>
              </>
            ) : (
              <>
                <p>
                  I am a backend-focused systems engineer who treats software engineering as an exact,
                  disciplined trade rather than arbitrary code assembly. My focus lies in constructing
                  durable backend infrastructures, clean relational schemas, and deterministic API contracts.
                </p>
                <p>
                  With an academic foundation in Geographic Information Systems (GIS) and Computer Science,
                  I approach software problems with spatial precision and structural rigor. Whether
                  optimizing deep database cursor queries, resolving race conditions across distributed
                  workers, or streaming vector geometries via PostGIS, I design systems that remain
                  lean under high traffic.
                </p>
              </>
            )}

            {/* Core Tenets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-3.5 rounded-card bg-surface border border-border flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider">
                    {language === 'ar' ? 'سلامة البيانات والمعاملات' : 'ACID Integrity'}
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    {language === 'ar'
                      ? 'عمليات ذرية دون تكرار أو فقدان للبيانات.'
                      : 'Atomic state transitions with zero phantom reads.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-card bg-surface border border-border flex items-start gap-3">
                <Database className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider">
                    {language === 'ar' ? 'انضباط الاستعلامات' : 'Query Discipline'}
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    {language === 'ar'
                      ? 'فهرسة دقيقة، وتحليل EXPLAIN واستعلامات سريعة.'
                      : 'Indexing, EXPLAIN analysis, and keyset cursors.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-card bg-surface border border-border flex items-start gap-3">
                <Layers className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider">
                    {language === 'ar' ? 'فصل المسؤوليات' : 'Clean Boundaries'}
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    {language === 'ar'
                      ? 'فصل نظيف بين الـ routes والـ controllers والـ services.'
                      : 'Separation between routes, controllers, and domain models.'}
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-card bg-surface border border-border flex items-start gap-3">
                <Terminal className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-xs font-semibold text-text-primary uppercase tracking-wider">
                    {language === 'ar' ? 'المراقبة والسجلات' : 'Observability'}
                  </h4>
                  <p className="text-xs text-text-muted mt-0.5">
                    {language === 'ar'
                      ? 'سجلات تشغيل مفصّلة ومتابعة دقيقة للأداء.'
                      : 'Structured telemetry, p99 metrics, and audit logs.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Stat Cards with Count-up (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STATS.map((stat: StatItem) => (
              <StatCard
                key={stat.id}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
