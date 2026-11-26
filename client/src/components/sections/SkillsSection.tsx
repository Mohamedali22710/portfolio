import React from 'react';
import { SectionHeader } from '../ui';
import {
  Server,
  Database,
  Code2,
  Cpu,
  Layers,
  MapPin,
  GitBranch,
  CheckCircle2,
  Globe,
  Terminal,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface SkillDisplayItem {
  id: string;
  name: string;
  category: string;
  description: string;
  level: 'Advanced' | 'Working Knowledge';
  icon: React.ComponentType<{ className?: string }>;
}

export const SkillsSection: React.FC = () => {
  const { language } = useLanguage();

  const SKILLS: SkillDisplayItem[] = [
    {
      id: 'nodejs',
      name: 'Node.js & Express',
      category: 'BACKEND & RUNTIMES',
      description: language === 'ar' ? 'معمارية خوادم غير متزامنة وواجهات REST APIs عالية الأداء.' : 'Asynchronous I/O, event loops, and high-throughput REST APIs.',
      level: 'Advanced',
      icon: Server,
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      category: 'LANGUAGES & ARCHITECTURE',
      description: language === 'ar' ? 'أنظمة قوية بأنماط بيانات محددة وواجهات برمجية صارمة.' : 'Strict typing, generics, interfaces, and deterministic data contracts.',
      level: 'Advanced',
      icon: Code2,
    },
    {
      id: 'postgresql',
      name: 'PostgreSQL',
      category: 'RELATIONAL DATABASES',
      description: language === 'ar' ? 'مخططات علائقية، استعلامات متقدمة وفهرسة واستعلامات مكانية.' : 'Relational schema design, indexes, transactions, and PostGIS queries.',
      level: 'Advanced',
      icon: Database,
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      category: 'DOCUMENT DATABASES',
      description: language === 'ar' ? 'خطوط أنابيب التجميع (Aggregation) ونمذجة المستندات المرنة.' : 'Aggregation pipelines, document modeling, and vector search indexing.',
      level: 'Advanced',
      icon: Database,
    },
    {
      id: 'rest-apis',
      name: 'RESTful API Architecture',
      category: 'API DESIGN & SECURITY',
      description: language === 'ar' ? 'تصميم واجهات برمجية قياسية مع تحقق Zod وحماية RBAC.' : 'Resource boundaries, Zod validation, JWT authentication, and RBAC.',
      level: 'Advanced',
      icon: Terminal,
    },
    {
      id: 'react',
      name: 'React.js',
      category: 'FRONTEND CLIENTS',
      description: language === 'ar' ? 'واجهات مستخدم تفاعلية، إدارة الحالة وتكامل سلس مع الـ APIs.' : 'Functional components, custom hooks, state management, and API consumption.',
      level: 'Advanced',
      icon: Globe,
    },
    {
      id: 'postgis-gis',
      name: 'PostGIS & Web GIS',
      category: 'SPATIAL ENGINEERING',
      description: language === 'ar' ? 'بيانات مكانية، تحويلات GeoJSON ومحركات خرائط تفاعلية.' : 'Spatial SQL, coordinate systems, GeoJSON pipelines, and Leaflet maps.',
      level: 'Working Knowledge',
      icon: MapPin,
    },
    {
      id: 'docker-devops',
      name: 'Docker & DevOps',
      category: 'CONTAINERS & CI/CD',
      description: language === 'ar' ? 'حاويات Docker، بيئات Linux وخطوط نشر GitHub Actions.' : 'Containerization, Linux environments, Nginx, and GitHub Actions.',
      level: 'Working Knowledge',
      icon: GitBranch,
    },
  ];

  // Helper for Circular Progress Ring (no percentage text, filled by level)
  const renderProgressRing = (level: 'Advanced' | 'Working Knowledge') => {
    const size = 38;
    const strokeWidth = 3;
    const center = size / 2;
    const radius = center - strokeWidth;
    const circumference = 2 * Math.PI * radius;
    // Advanced = 95% filled, Working Knowledge = 80% filled
    const percentage = level === 'Advanced' ? 0.94 : 0.82;
    const strokeDashoffset = circumference - percentage * circumference;
    const strokeColor = level === 'Advanced' ? '#38BDF8' : '#34D399';

    return (
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#232A35"
          strokeWidth={strokeWidth}
        />
        {/* Level ring fill */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
    );
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-b border-border/70 relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        <SectionHeader
          tag="04"
          eyebrow={language === 'ar' ? 'المهارات والقدرات التقنية' : 'TECHNICAL SKILLS & PROFICIENCY'}
          title={language === 'ar' ? 'التقنيات والأدوات الأساسية' : 'Technical Expertise'}
          description={
            language === 'ar'
              ? 'مجموعة الأدوات والتقنيات الأساسية المستخدمة في بناء بيئات الإنتاج والأنظمة الرقمية المستقرة.'
              : 'Core technologies and frameworks used across production environments with disciplined engineering.'
          }
        />

        {/* 4-Column Responsive Grid matching skills.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.id}
                className="group rounded-2xl bg-surface border border-border-strong p-5 flex flex-col justify-between hover-glow transition-all"
              >
                <div>
                  {/* Top Row: Icon Square (top-left) + Ring Indicator (top-right) */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-border-strong flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:border-accent transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Circular SVG Progress Ring (No percentage text) */}
                    <div className="shrink-0" title={`Proficiency: ${skill.level}`}>
                      {renderProgressRing(skill.level)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-base text-text-primary group-hover:text-[#38BDF8] transition-colors mb-1.5 leading-snug">
                    {skill.name}
                  </h3>

                  {/* One-line description */}
                  <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                {/* Divider + Bottom Row: Uppercase Category (left) + Level Pill (right) */}
                <div className="pt-3 border-t border-border/70 flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider truncate">
                    {skill.category}
                  </span>

                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/25 text-accent font-mono text-[10px] font-semibold shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-accent" />
                    <span>{skill.level === 'Advanced' && language === 'ar' ? 'متقدم' : skill.level}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

