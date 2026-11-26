import React from 'react';
import { Server, Globe, MapPin, Check, ArrowRight, Zap, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const ServicesSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const SERVICES = [
    {
      id: 'backend',
      popular: true,
      icon: Server,
      gradient: 'from-[#3E8EFF] to-[#2563EB]',
      title: language === 'ar' ? 'تطوير الـ Backend وواجهات الـ APIs' : 'Backend & API Development',
      description:
        language === 'ar'
          ? 'بناء واجهات REST APIs قوية وقابلة للتوسع وأنظمة Backend مستقرة باستخدام Node.js وExpress وTypeScript مع آليات مصادقة وأمان مشددة.'
          : 'Robust, scalable RESTful APIs and backend architectures built with Node.js, Express, and TypeScript with secure authentication and high concurrency.',
      features: [
        language === 'ar' ? 'معمارية RESTful APIs منظمة' : 'RESTful API Architecture',
        language === 'ar' ? 'المصادقة والصلاحيات (JWT & RBAC)' : 'JWT & Role-Based Access Control',
        language === 'ar' ? 'تصميم قواعد البيانات PostgreSQL وMongoDB' : 'PostgreSQL & MongoDB Database Design',
        language === 'ar' ? 'تحسين الاستعلامات والعمليات المتزامنة' : 'High Concurrency & Query Optimization',
      ],
    },
    {
      id: 'fullstack',
      popular: false,
      icon: Globe,
      gradient: 'from-[#38BDF8] to-[#0284C7]',
      title: language === 'ar' ? 'تطوير تطبيقات الويب Full-Stack' : 'Full-Stack Web Development',
      description:
        language === 'ar'
          ? 'تطبيقات ويب متكاملة من الصفر بواجهات تفاعلية سريعة مبنية بـ React وTypeScript، متصلة بسلاسة مع الـ Backend.'
          : 'End-to-end modern web applications with responsive React/TypeScript frontends seamlessly connected to robust, maintainable backends.',
      features: [
        language === 'ar' ? 'تطبيقات React وTypeScript حديثة' : 'Modern React & TypeScript SPA',
        language === 'ar' ? 'إدارة الحالة والتحقق عبر Zod' : 'State Management & Zod Validation',
        language === 'ar' ? 'تدفقات عمل تفاعلية وغير متزامنة' : 'Asynchronous API & Data Workflows',
        language === 'ar' ? 'واجهات متجاوبة ومتوافقة مع الهواتف' : 'Responsive Dark-First UI Design',
      ],
    },
    {
      id: 'gis',
      popular: false,
      icon: MapPin,
      gradient: 'from-[#3E8EFF] to-[#38BDF8]',
      title: language === 'ar' ? 'نظم المعلومات الجغرافية وخرائط الويب' : 'GIS & Web Mapping',
      description:
        language === 'ar'
          ? 'معالجة البيانات المكانية المعقدة، وربط محركات الخرائط التفاعلية مع قواعد بيانات PostGIS وتحويلات GeoJSON.'
          : 'Specialized spatial data pipelines, GeoJSON processing, PostGIS spatial queries, and interactive map visualizations for full-stack platforms.',
      features: [
        language === 'ar' ? 'نمذجة قواعد البيانات المكانية (PostGIS)' : 'Spatial Database Modeling (PostGIS)',
        language === 'ar' ? 'مسارات بيانات GeoJSON والـ Vector Tiles' : 'GeoJSON & Spatial Data Pipelines',
        language === 'ar' ? 'خرائط تفاعلية بـ Leaflet وGoogle Maps' : 'Interactive Leaflet & Map Integrations',
        language === 'ar' ? 'أنظمة الإحداثيات والتحليلات المكانية' : 'Coordinate Systems & Spatial Queries',
      ],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header matching serv.png / serves.png */}
        <div className="flex flex-col items-center text-center mb-16">
          {/* Small pill badge "Services I Offer" */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-xs mb-4">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span>{language === 'ar' ? 'الخدمات التي أقدمها' : 'Services I Offer'}</span>
          </div>

          {/* Big gradient heading "Professional Services" */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
            {language === 'ar' ? (
              <>
                خدمات هندسية{' '}
                <span className="bg-gradient-to-r from-[#3E8EFF] to-[#38BDF8] bg-clip-text text-transparent">
                  احترافية
                </span>
              </>
            ) : (
              <>
                Professional{' '}
                <span className="bg-gradient-to-r from-[#3E8EFF] to-[#38BDF8] bg-clip-text text-transparent">
                  Services
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-text-secondary max-w-2xl leading-relaxed">
            {language === 'ar'
              ? 'خدمات تطوير برمجيات شاملة لتحويل فكرتك إلى نظام رقمي قابل للتوسع بمعمارية حديثة وتقنيات متقدمة.'
              : 'Comprehensive development services to bring your digital vision to life with cutting-edge technology and modern architecture.'}
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="relative rounded-2xl bg-surface border border-border-strong p-6 sm:p-7 flex flex-col justify-between hover-glow transition-all"
              >
                {/* "Popular" Badge for the first card */}
                {service.popular && (
                  <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#3E8EFF] to-[#38BDF8] text-white font-mono text-[11px] font-bold shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{language === 'ar' ? 'الأكثر طلباً' : 'Popular'}</span>
                  </div>
                )}

                <div>
                  {/* Tinted icon square */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${service.gradient} flex items-center justify-center text-white mb-5 shadow-md shadow-blue-500/15`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xl text-text-primary mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Green-check list */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Divider & Full-width "Discuss Your Project →" Button (NO PRICES) */}
                <div className="pt-6 border-t border-border/80">
                  <button
                    onClick={scrollToContact}
                    className="w-full py-2.5 px-4 rounded-xl bg-surface-elevated hover:bg-[#202633] border border-border-strong hover:border-accent text-text-primary text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 group focus-ring"
                  >
                    <span>{language === 'ar' ? 'ناقش مشروعك' : 'Discuss Your Project'}</span>
                    <ArrowRight className={`w-3.5 h-3.5 text-accent group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

