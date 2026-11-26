import React, { createContext, useContext, useState, useEffect } from 'react';
import * as enData from '../data/mockData.en';
import * as arData from '../data/mockData.ar';
import { Project, SkillCategory, ExperienceItem, StatItem, CapabilityItem } from '../types';

export type Language = 'en' | 'ar';

export interface PortfolioData {
  PERSONAL_INFO: typeof enData.PERSONAL_INFO;
  STATS: StatItem[];
  PROJECTS: Project[];
  SKILL_CATEGORIES: SkillCategory[];
  HOW_I_BUILD_STEPS: typeof enData.HOW_I_BUILD_STEPS;
  BACKEND_CAPABILITIES: CapabilityItem[];
  GIS_PIPELINE_STEPS: typeof enData.GIS_PIPELINE_STEPS;
  EXPERIENCES: ExperienceItem[];
  // CODE_METRICS: typeof enData.CODE_METRICS;
  GITHUB_REPOS: typeof enData.GITHUB_REPOS;
}

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    methodology: string;
    capabilities: string;
    gis: string;
    experience: string;
    contact: string;
  };
  hero: {
    directChannels: string;
    viewProjects: string;
    letsConnect: string;
    cliShell: string;
    coreStack: string;
    engId: string;
    activeSession: string;
    togglePhoto: string;
    credibility: {
      arch: string;
      archSub: string;
      sql: string;
      sqlSub: string;
      gis: string;
      gisSub: string;
      reliability: string;
      reliabilitySub: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    badge: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    subtitle: string;
    allFilter: string;
    viewProject: string;
    sourceCode: string;
    demoVideo: string;
    keyFeatures: string;
    architectureTitle: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    subtitle: string;
    advanced: string;
    workingKnowledge: string;
  };
  howIBuild: {
    eyebrow: string;
    title: string;
    subtitle: string;
    deliverableLabel: string;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  gis: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    pipelineTitle: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    subtitle: string;
    workTab: string;
    educationTab: string;
    certificationTab: string;
  };
 
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    successToast: string;
    directContact: string;
  };
  footer: {
    rights: string;
    systemNormal: string;
    backToTop: string;
  };
}

const translationsEn: Translations = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    methodology: 'Methodology',
    capabilities: 'Capabilities',
    gis: 'GIS',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    directChannels: 'Direct Channels:',
    viewProjects: 'View My Projects',
    letsConnect: "Let's Connect",
    cliShell: 'CLI Shell',
    coreStack: 'Core Stack',
    engId: 'ENG_ID: MA-8492',
    activeSession: 'ACTIVE_SESSION',
    togglePhoto: 'Switch Photo',
    credibility: {
      arch: 'BACKEND ARCHITECTURE',
      archSub: 'High-Throughput APIs',
      sql: 'RELATIONAL SQL',
      sqlSub: 'PostgreSQL & Index Tuning',
      gis: 'POSTGIS & SPATIAL',
      gisSub: 'Spatial Data & Web Mapping',
      reliability: 'SYSTEM RELIABILITY',
      reliabilitySub: 'Clean Code & RBAC Security',
    },
  },
  about: {
    eyebrow: 'ENGINEERING WITH PURPOSE',
    title: 'Designing systems that perform under load and remain easy to maintain.',
    badge: 'SYSTEM OVERVIEW',
  },
  projects: {
    eyebrow: 'PRODUCTION SYSTEMS',
    title: 'Featured Projects',
    subtitle: 'Real-world platforms engineered with disciplined architecture, robust APIs, and clear workflows.',
    allFilter: 'All Projects',
    viewProject: 'View Case Study',
    sourceCode: 'Source Code',
    demoVideo: 'Demo Walkthrough',
    keyFeatures: 'Key Capabilities',
    architectureTitle: 'System Architecture',
  },
  skills: {
    eyebrow: 'TECHNICAL EXPERTISE',
    title: 'Technologies & Tools',
    subtitle: 'Specialized toolkit honed through building production web applications and database architectures.',
    advanced: 'Advanced',
    workingKnowledge: 'Working Knowledge',
  },
  howIBuild: {
    eyebrow: 'ENGINEERING METHODOLOGY',
    title: 'How I Build',
    subtitle: 'A disciplined four-step execution process from problem definition to hardened deployment.',
    deliverableLabel: 'Deliverable',
  },
  capabilities: {
    eyebrow: 'CORE COMPETENCIES',
    title: 'Backend Engineering Capabilities',
    subtitle: 'Architectural disciplines applied across every project to guarantee reliability and performance.',
  },
  gis: {
    eyebrow: 'SPATIAL ENGINEERING',
    title: 'Where Software Meets Geography',
    subtitle: 'Bridging backend engineering with Geographic Information Systems (GIS) for spatial intelligence.',
    description: 'Specialized experience integrating spatial databases, GeoJSON transformations, and map engines into full-stack web platforms.',
    pipelineTitle: 'End-to-End Spatial Data Pipeline',
  },
  experience: {
    eyebrow: 'CAREER & LEARNING',
    title: 'Experience & Qualifications',
    subtitle: 'My journey through software engineering, continuous learning, and foundational education.',
    workTab: 'Experience',
    educationTab: 'Education',
    certificationTab: 'Certifications',
  },
  contact: {
    eyebrow: 'LET\'S BUILD SOMETHING GREAT',
    title: 'Initiate a Conversation',
    subtitle: 'Available for backend and full-stack engineering roles, freelance contracts, or technical collaboration.',
    nameLabel: 'Your Name',
    namePlaceholder: 'Alex Mercer',
    emailLabel: 'Email Address',
    emailPlaceholder: 'alex@example.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Backend Project Collaboration',
    messageLabel: 'Project Details / Message',
    messagePlaceholder: 'Tell me about the problem you are solving, your timeline, and stack requirements...',
    sendButton: 'Send Message',
    sending: 'Transmitting...',
    successToast: 'Message transmitted successfully. I will get back to you shortly.',
    directContact: 'Direct Inquiries',
  },
  footer: {
    rights: 'All rights reserved. Systematic Engineering.',
    systemNormal: 'SYS_STATUS: NORMAL // UPTIME 99.98%',
    backToTop: 'Back to Top ↑',
  },
};

const translationsAr: Translations = {
  nav: {
    home: 'الرئيسية',
    about: 'عن المهندس',
    projects: 'المشاريع',
    skills: 'المهارات',
    methodology: 'طريقة البناء',
    capabilities: 'القدرات',
    gis: 'نظم الجغرافيا',
    experience: 'الخبرات',
    contact: 'تواصل معي',
  },
  hero: {
    directChannels: 'قنوات التواصل المباشر:',
    viewProjects: 'استعراض المشاريع',
    letsConnect: 'تواصل معي',
    cliShell: 'طرفية الأوامر',
    coreStack: 'التقنيات الأساسية',
    engId: 'معرّف_المهندس: MA-8492',
    activeSession: 'جلسة_نشطة',
    togglePhoto: 'تبديل الصورة',
    credibility: {
      arch: 'معمارية الـ BACKEND',
      archSub: 'واجهات برمجة عالية الأداء',
      sql: 'قواعد بيانات علائقية',
      sqlSub: 'PostgreSQL وفهرسة متقدمة',
      gis: 'نظم معلومات جغرافية',
      gisSub: 'بيانات مكانية وخرائط ويب',
      reliability: 'موثوقية الأنظمة',
      reliabilitySub: 'كود نظيف وحماية RBAC',
    },
  },
  about: {
    eyebrow: 'هندسة برمجية هادفة',
    title: 'تصميم وبناء أنظمة برمجية تتحمل ضغط العمل وتبقى سهلة الصيانة والتطوير.',
    badge: 'نظرة عامة على النظام',
  },
  projects: {
    eyebrow: 'أنظمة قيد التشغيل',
    title: 'المشاريع المميزة',
    subtitle: 'منصات واقعية تم بناؤها بمعمارية منضبطة وواجهات APIs متينة ومسارات عمل واضحة.',
    allFilter: 'كل المشاريع',
    viewProject: 'عرض دراسة الحالة',
    sourceCode: 'كود المشروع',
    demoVideo: 'فيديو توضيحي للمشروع',
    keyFeatures: 'أبرز القدرات',
    architectureTitle: 'معمارية النظام',
  },
  skills: {
    eyebrow: 'الخبرات والمهارات التقنية',
    title: 'التقنيات والأدوات',
    subtitle: 'أدوات متخصصة صُقلت من خلال بناء تطبيقات ويب حقيقية ومعماريات قواعد بيانات متقدمة.',
    advanced: 'متقدم',
    workingKnowledge: 'معرفة عملية',
  },
  howIBuild: {
    eyebrow: 'منهجية العمل الهندسية',
    title: 'طريقة البناء والتنفيذ',
    subtitle: 'مسار عمل منضبط من 4 مراحل يبدأ بتعريف المشكلة الحقيقية وينتهي بالنشر الآمن والمستقر.',
    deliverableLabel: 'المخرجات',
  },
  capabilities: {
    eyebrow: 'القدرات الهندسية الأساسية',
    title: 'قدرات الـ Backend الأساسية',
    subtitle: 'قواعد ومعايير معمارية تُطبّق في كل مشروع لضمان أقصى درجات الموثوقية والأمان والأداء.',
  },
  gis: {
    eyebrow: 'الهندسة المكانية ونظم المعلومات',
    title: 'حيث تلتقي البرمجيات مع الجغرافيا',
    subtitle: 'الربط بين هندسة الـ Backend ونظم المعلومات الجغرافية (GIS) لتقديم حلول مكانية متقدمة.',
    description: 'خبرة متخصصة في دمج قواعد البيانات المكانية وتحويلات GeoJSON ومحركات الخرائط داخل تطبيقات الويب المتكاملة.',
    pipelineTitle: 'مسار معالجة البيانات المكانية المتكامل',
  },
  experience: {
    eyebrow: 'المسار المهني والتعلّم المستمر',
    title: 'الخبرات والمؤهلات',
    subtitle: 'رحلتي في هندسة البرمجيات والتعلّم المستمر والتعليم الأكاديمي.',
    workTab: 'الخبرات العملية',
    educationTab: 'التعليم',
    certificationTab: 'الشهادات',
  },
 
  contact: {
    eyebrow: 'تواصل معي لبدء العمل',
    title: 'لنبدأ محادثة عمل',
    subtitle: 'متاح للعمل في أدوار Backend وFull-Stack، ومشاريع التعاقد الحر، والتعاون التقني.',
    nameLabel: 'الاسم الكريم',
    namePlaceholder: 'أحمد محمود',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'ahmed@example.com',
    subjectLabel: 'الموضوع',
    subjectPlaceholder: 'بناء نظام Backend جديد',
    messageLabel: 'تفاصيل المشروع / الرسالة',
    messagePlaceholder: 'اكتب تفاصيل النظام، المشكلة التي تريد حلها، والجدول الزمني المقترح...',
    sendButton: 'إرسال الرسالة',
    sending: 'جاري الإرسال...',
    successToast: 'تم إرسال رسالتك بنجاح. سأتواصل معك في أقرب وقت ممكن.',
    directContact: 'تواصل مباشر',
  },
  footer: {
    rights: 'جميع الحقوق محفوظة. هندسة منهجية.',
    systemNormal: 'حالة_النظام: طبيعي // وقت التشغيل 99.98%',
    backToTop: 'العودة للأعلى ↑',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  data: PortfolioData;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'ar' || saved === 'en') return saved;
      // Default to English as standard, user can switch instantly to Arabic
      return 'en';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      if (isRTL) {
        document.documentElement.classList.add('font-arabic');
      } else {
        document.documentElement.classList.remove('font-arabic');
      }
    }
  }, [language, isRTL]);

  const activeData: PortfolioData = language === 'ar' ? (arData as any) : (enData as any);
  const activeTranslations: Translations = language === 'ar' ? translationsAr : translationsEn;

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: activeTranslations,
        data: activeData,
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

