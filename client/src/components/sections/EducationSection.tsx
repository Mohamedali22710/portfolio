import React from 'react';
import { SectionHeader } from '../ui';
import { GraduationCap, Award, Calendar, MapPin, Code2, Database, Layers, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const EducationSection: React.FC = () => {
  const { language } = useLanguage();

  const SKILL_CHIPS = [
    'Node.js & Express.js',
    'PostgreSQL & PostGIS',
    'MongoDB & Atlas Vector Search',
    'LangChain & RAG Pipelines',
    'React & React Native',
    'TypeScript & Zod',
    'RESTful API Design & RBAC',
    'Docker & Linux',
  ];

  return (
    <section id="education" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="03"
          eyebrow={language === 'ar' ? 'التعليم والتأهيل المهني' : 'ACADEMIC & PROFESSIONAL CREDENTIALS'}
          title={language === 'ar' ? 'التعليم والمؤهلات الأكاديمية' : 'Education & Qualifications'}
          description={
            language === 'ar'
              ? 'الأسس الأكاديمية والتدريب التقني المتخصص في معهد ITI وهندسة النظم المكانية والبرمجيات.'
              : 'Rigorous academic foundations combined with intensive specialized engineering training in software development, AI, and GIS.'
          }
        />

        {/* 2-Column Layout matching Screenshot_2026-11-07_000303.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Card: Institution details + Gradient Info Box (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-[#12161D] border border-[#232A35] p-6 sm:p-7 shadow-xl hover:border-border transition-all flex flex-col justify-between">
            <div>
              {/* Institution Header with Gradient Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#3E8EFF] to-[#38BDF8] flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-text-primary leading-snug">
                    {language === 'ar' ? 'معهد تكنولوجيا المعلومات (ITI)' : 'Information Technology Institute (ITI)'}
                  </h3>
                  <p className="font-mono text-xs text-[#38BDF8] mt-0.5">
                    {language === 'ar' ? 'جامعة أسوان — قسم نظم المعلومات الجغرافية' : 'Aswan University — GIS Department'}
                  </p>
                </div>
              </div>

              {/* Attributes List */}
              <div className="space-y-3.5 mb-6 text-sm">
                <div className="flex items-center gap-2.5 text-text-secondary">
                  <Award className="w-4 h-4 text-accent shrink-0" />
                  <span>
                    <strong className="text-text-primary">
                      {language === 'ar' ? 'التخصص:' : 'Specialization:'}
                    </strong>{' '}
                    {language === 'ar'
                      ? 'تطوير الويب والموبايل والذكاء الاصطناعي ونظم GIS'
                      : 'Full Stack & Mobile Dev with Gen AI Integration'}
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-text-secondary">
                  <Calendar className="w-4 h-4 text-accent shrink-0" />
                  <span>
                    <strong className="text-text-primary">
                      {language === 'ar' ? 'سنة التخرج:' : 'Graduation Year:'}
                    </strong>{' '}
                    2024 (جامعة أسوان) / 2026 (ITI)
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-text-secondary">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>
                    <strong className="text-text-primary">
                      {language === 'ar' ? 'الموقع:' : 'Location:'}
                    </strong>{' '}
                    {language === 'ar' ? 'القاهرة / أسوان، مصر' : 'Cairo / Aswan, Egypt'}
                  </span>
                </div>
              </div>
            </div>

            {/* Gradient Info Box at Bottom strictly matching reference */}
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-[#3E8EFF]/20 via-[#38BDF8]/15 to-[#1A1F28] border border-[#3E8EFF]/40 shadow-inner">
              <h4 className="font-sans font-bold text-sm text-text-primary mb-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                {language === 'ar' ? 'برنامج التدريب المكثف — ITI' : 'Intensive Training Program — ITI'}
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed">
                {language === 'ar'
                  ? 'برنامج تدريبي مكثف يركز على أحدث تقنيات الويب والموبايل (React, React Native, Node.js) ودمج الذكاء الاصطناعي التوليدي عبر LangChain ونماذج LLM مع مشاريع تطبيقية واقعية.'
                  : 'Intensive professional training program focusing on modern web & cross-platform mobile technologies, coupled with generative AI integration (LangChain) and real-world production projects.'}
              </p>
            </div>
          </div>

          {/* Right Column: Grid of Skill Chips + 2 Feature Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Grid of Skill Chips strictly matching Screenshot_2026-11-07_000303.png */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3">
              {SKILL_CHIPS.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-3 rounded-xl bg-[#12161D] border border-[#232A35] hover:border-[#3E8EFF]/50 text-xs sm:text-sm font-mono text-text-secondary hover:text-text-primary text-center transition-all hover-card-lift flex items-center justify-center shadow-sm"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* 2 Feature Cards with Icons */}
            <div className="space-y-4 pt-1">
              {/* Feature Card 1 */}
              <div className="rounded-2xl bg-[#12161D] border border-[#232A35] p-5 hover:border-border-strong hover-card-lift transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3E8EFF]/10 border border-[#3E8EFF]/30 flex items-center justify-center text-[#3E8EFF] shrink-0 mt-0.5">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-text-primary mb-1">
                    {language === 'ar' ? 'تطوير وتكامل الذكاء الاصطناعي التوليدي' : 'Full Stack & Gen AI Integration'}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {language === 'ar'
                      ? 'بناء أنظمة ذكية تجمع بين React وTypeScript في الواجهة، وNode.js في الخوادم، وتكامل RAG مع Groq وOpenAI لمعالجة وتحليل المستندات وتوليد خطط التطوير.'
                      : 'Designing intelligent architectures combining React and TypeScript frontends with modular Node.js backends and RAG pipelines via LangChain and Groq.'}
                  </p>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="rounded-2xl bg-[#12161D] border border-[#232A35] p-5 hover:border-border-strong hover-card-lift transition-all flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] shrink-0 mt-0.5">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-text-primary mb-1">
                    {language === 'ar' ? 'الأنظمة المكانية وقواعد البيانات الجغرافية' : 'Spatial Systems & GIS Databases'}
                  </h4>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {language === 'ar'
                      ? 'خبرة متخصصة مستمدة من دراسة نظم GIS: فهرسة أشجار GiST R-Trees في PostGIS، ومعالجة المضلعات والتحويلات المكانية وخرائط الويب التفاعلية بـ Leaflet.'
                      : 'Specialized spatial foundation from GIS degree: GiST R-Trees in PostGIS, topological boundary analysis, polygon decomposition, and interactive web mapping.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
