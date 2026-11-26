import { Project, SkillCategory, ExperienceItem, StatItem, CapabilityItem } from '../types';

/**
 * ARABIC DATA (النسخة العربية)
 * مصدر الحقيقة: السيرة الذاتية لـ محمد علي والمشاريع الواقعية المعتمدة.
 */

export const PERSONAL_INFO = {
  name: 'محمد علي',
  fullName: 'محمد علي عبد الحكيم',
  title: 'مطوّر Full Stack',
  headline: 'مهندس Full Stack يبني أنظمة خوادم قابلة للتوسع وتطبيقات ويب حديثة',
  status: 'متاح لفرص العمل في الـ Backend والـ Full Stack',
  location: 'القاهرة، مصر',
  email: 'moh74amedali@gmail.com',
  phone: '01140562085',
  github: 'https://github.com/Mohamedali22710',
  linkedin: 'https://www.linkedin.com/in/mohamedali74/',
  whatsapp: 'https://wa.me/201140562085',
  summary:
    'مطوّر Full Stack محترف في JavaScript وTypeScript وReact وNode.js، مع خبرة عملية قوية في تصميم واجهات REST API وقواعد البيانات (MongoDB وPostgreSQL وMySQL). ملتزم بكتابة كود نظيف وسهل الصيانة ومعالجة المشاكل في بيئات الإنتاج، مع خلفية أكاديمية متخصصة في نظم المعلومات الجغرافية (GIS).',
};

export const STATS: StatItem[] = [
  {
    id: 'projects-showcased',
    label: 'مشاريع مميزة',
    value: 5,
    suffix: '+',
    description: 'أنظمة إنتاج حقيقية ومنصات ذكاء اصطناعي ونظم جغرافية',
  },
  {
    id: 'years',
    label: 'سنوات من الخبرة',
    value: 2,
    suffix: '+',
    description: 'في تطوير برمجيات الـ Backend والـ Full Stack',
  },
  {
    id: 'technologies',
    label: 'تقنيات أساسية',
    value: 12,
    suffix: '+',
    description: 'Node.js وTypeScript وReact وPostGIS وMongoDB وDocker',
  },
  {
    id: 'clean-code',
    label: 'التزام بالكود النظيف',
    value: 100,
    suffix: '%',
    description: 'بناء معياري وموثوق ومتحقَّق منه بالكامل افتراضياً',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'mersal-delivery',
    slug: 'mersal-delivery',
    title: 'نظام مرسال لإدارة الشحن والتوصيل',
    category: 'Full Stack',
    tagline: 'واجهات API ولوحة تحكم لإدارة الشحنات وتتبّع مناديب التوصيل في الوقت الفعلي',
    overview:
      'نظام متكامل لإدارة عمليات الشحن والتوصيل اللوجستية. يتيح للعملاء إرسال طلبات الشحن عبر بوابة عامة مع التحقق الكامل، بينما يدير مسؤولو التشغيل الشحنات ويعينون المناديب من خلال لوحة تحكم إدارية، ويحدّث المناديب حالات الطلبات لحظياً من خلال تطبيق موبايل مخصص.',
    problem:
      'كانت العمليات تسجّل يدوياً وتُدار بمكالمات هاتفية متفرقة، مع انعدام وجود مكان مركزي لمتابعة دورة حياة الطرود أو توزيع المناديب ومعرفة الحالات اللحظية.',
    solution:
      'بناء منصة متكاملة مدفوعة بالأحداث مع صلاحيات دقيقة قائمة على الأدوار (RBAC)، ودورة حياة للشحنات تتكون من 8 حالات (من جديد حتى مسلّم أو مرتجع)، ونقاط نهاية برمجية مخصصة لتطبيق المندوب.',
    architecture: [
      'واجهة React + Tailwind CSS سريعة الاستجابة للوحة تحكم الإدارة وبوابة استقبال الطلبات',
      'API متين بـ Node.js + Express مع مصادقة JWT وتحكم بالأدوار (Admin مقابل Driver)',
      'مخططات قواعد بيانات MongoDB باستخدام Mongoose للشحنات والمناديب وسجلات التتبع',
      'تطبيق موبايل بـ React Native للمناديب للتحديث الفوري لحالات التسليم',
    ],
    keyFeatures: [
      'نموذج استقبال طلبات عام ومتحقّق منه بالكامل دون الحاجة لتسجيل حساب مسبق',
      'تتبّع لحظي للشحنات عبر دورة حياة دقيقة من 8 حالات متتالية',
      'إدارة أسطول المناديب: تسجيل وتعيين وإعادة توجيه ومتابعة الجاهزية',
      'مؤشرات قياس لوحة التحكم: الحجم الإجمالي، قيد التوصيل، نسب النجاح، والاستثناءات',
      'أمان قوي ومصادقة مشفّرة بـ JWT مع حماية المسارات',
      'واجهة كاملة مصممة أصلاً باللغة العربية لتلائم بيئة العمل المحلية',
    ],
    stack: ['Node.js', 'Express', 'React', 'MongoDB', 'JWT', 'RBAC', 'React Native', 'Tailwind CSS'],
    challenges:
      'ضمان استقرار مزامنة البيانات بين تطبيق المندوب والسيرفر عند انقطاع شبكة الهاتف أثناء التوصيل الميداني.',
    learnings:
      'نمذجة النطاق الصارمة واستخدام آلة الحالات (State Machine) تمنع تعارض البيانات وتسهّل إدارة حالات المناديب والطلبات.',
    githubUrl: 'https://github.com/Mohamedali22710',
    metrics: 'دورين (أدمن، مندوب) // 8 حالات شحن // تطبيق موبايل مخصص',
    featured: true,
    order: 1,
    images: [
      '/Image/project/MERSAL/1.png',
      '/Image/project/MERSAL/2.png',
      '/Image/project/MERSAL/3.png',
      '/Image/project/MERSAL/4.png',
      '/Image/project/MERSAL/5.png',
      '/Image/project/MERSAL/6.png',
    ],
  },
  {
    id: 'insighto',
    slug: 'insighto',
    title: 'InsightO — منصة تقييم وتحليلات 360° بالذكاء الاصطناعي',
    category: 'Full Stack',
    tagline: 'منصة تقييم ذكية للمؤسسات تجمع بين الاستبيانات وتحليل الأداء بـ LLM',
    overview:
      'منصة تقييم متطورة وظيفية تدمج الآراء الوصفية (الاستبيانات) مع تقييمات الأداء الرقمية في تقارير كفاءة مؤسسية موحدة. تنشئ ملفات تحليلية للطلاب والمدرسين والأقسام وتولد خطط عمل وتطوير تفاعلية بالذكاء الاصطناعي.',
    problem:
      'تجمع المؤسسات التعليمية كميات ضخمة من الاستبيانات والتسليمات دون القدرة على استخراج قرارات عملية، بسبب تشتت البيانات والتصحيح اليدوي غير الموحد.',
    solution:
      'هندسة نظام تقييم شامل يتميز بمنشئ استبيانات ديناميكي، ومحرك تصحيح ذكي، مع طبقة LLM مرنة تدعم مزودين متعددين مع حماية ميزانية الـ Tokens.',
    architecture: [
      'واجهة React 19 + TypeScript + Vite حديثة مع Redux Toolkit وZustand وShadcn/UI',
      'واجهة برمجية API معيارية بـ Express + TypeScript مع فصل كامل للمسؤوليات',
      'قاعدة بيانات MongoDB مع خطوط تجميع Aggregation وبحث متجهي Vector Search بالـ RAG',
      'طبقة ذكاء اصطناعي بـ LangChain تدمج بين Groq API وOpenAI ونماذج محلية كبديل طوارئ',
    ],
    keyFeatures: [
      'منشئ نماذج وأسئلة ديناميكي لإنشاء استبيانات التقييم متعددة الأقسام والمعايير',
      'محرك تحليل إجابات بالذكاء الاصطناعي يستخرج نقاط القوة والضعف وخطط التطوير',
      'تتبع حصص الـ Tokens لكل مستخدم مع حظر الميزات آلياً عند نفاد الحصة المخصصة',
      'نظام بدائل 3-Tier يضمن استمرار خدمات الذكاء الاصطناعي حتى عند تعطل أحد المزودين',
      'تحكم بصلاحيات الوصول لـ 4 أدوار: المسؤولين، رؤساء الأقسام، المدرسين، والطلاب',
      'توليد تقارير PDF وتحليلات مؤسسية شاملة قابلة للتصدير والطباعة',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'LangChain', 'Groq API', 'Tailwind CSS'],
    challenges:
      'معالجة الطلبات المتزامنة لتصحيح التقييمات وفرض حدود الـ Tokens دون حظر الـ Event Loop في Node.js.',
    learnings:
      'تجريد مزودي الذكاء الاصطناعي في Factory مركزي يمنح ثباتاً وموثوقية في تكرار المحاولات وضبط التكاليف وسهولة التبديل.',
    githubUrl: 'https://github.com/3mrNour/InsightO',
    liveUrl: 'https://youtu.be/8bQ2izNfzR4',
    metrics: 'نظام بدائل ثلاثي // 4 أدوار صلاحيات // بحث متجهي RAG',
    featured: true,
    order: 2,
    images: [
      '/Image/project/Insigto/1.png',
      '/Image/project/Insigto/2.png',
      '/Image/project/Insigto/3.png',
      '/Image/project/Insigto/4.png',
      '/Image/project/Insigto/5.jpeg',
      '/Image/project/Insigto/6.jpeg',
    ],
  },
  {
    id: 'ai-chatgpt-clone',
    slug: 'ai-chatgpt-clone',
    title: 'نظام محاكاة شات جي بي تي ومعمارية البث المباشر للـ AI',
    category: 'Backend',
    tagline: 'سيرفر عالي الأداء مع تكامل OpenAI API وبث لحظي بـ SSE',
    overview:
      'نظام خادم متكامل يحاكي وظائف ChatGPT الأساسية مع دعم البث المباشر للكلمات باستخدام تقنية Server-Sent Events (SSE)، ومعالجة معيارية للذاكرة الحوارية، وإدارة ذكية للأخطاء وحدود الـ Tokens.',
    problem:
      'بناء واجهات محادثة سريعة الاستجابة يتطلب تدفقاً مستمراً للردود بزمن استجابة فائق، مع حماية السيرفر من تجاوز ميزانية الـ Tokens أو انقطاع الاتصال.',
    solution:
      'هندسة خدمة Express نظيفة ومعيارية تبث استجابات الذكاء الاصطناعي لحظياً مع حفظ سياق الجلسة وفرض حدود استهلاك الـ Tokens ومعالجة مركزية للأخطاء.',
    architecture: [
      'خدمة Node.js + Express معمارية بفصل منظم بين وحدات التحكم والخدمات والـ Middlewares',
      'تكامل مع OpenAI API مع دعم تقنية البث المباشر SSE',
      'مدير ذاكرة السياق للحفاظ على أطراف المحادثة ضمن حدود النموذج',
      'طبقات Middleware لتحديد معدل الطلبات وحماية واجهات الـ API',
    ],
    keyFeatures: [
      'بث لحظي للردود عبر Server-Sent Events بزمن وصول أولي أقل من 50 مللي ثانية',
      'ذاكرة حوارية تحافظ على تسلسل المحادثات المتعددة ضمن حدود الـ Tokens المسموحة',
      'معالجة استباقية للأخطاء وقيود معدل الطلبات (Rate Limits) وانقطاع الشبكة',
      'واجهات RESTful لاسترجاع سجل المحادثات وإنهاء الجلسات وتعديل إعدادات التوليد',
    ],
    stack: ['Node.js', 'Express', 'OpenAI API', 'REST APIs', 'SSE', 'JavaScript'],
    challenges:
      'إلغاء الطلبات المتجهة للـ API فور إغلاق العميل للمتصفح لحفظ تكلفة الـ Tokens وموارد الخادم.',
    learnings:
      'المعمارية القائمة على البث تتطلب ربطاً وثيقاً بين أحداث اتصال HTTP وإنهاء المقابس لتجنب تسريب الذاكرة.',
    githubUrl: 'https://github.com/Mohamedali22710',
    metrics: 'بث لحظي SSE // ذاكرة حوارية // حماية ميزانية الـ Tokens',
    featured: true,
    order: 3,
    images: [],
  },
  {
    id: 'book-app',
    slug: 'book-app',
    title: 'تطبيق BookApp — اكتشاف وإدارة الكتب عبر المنصات',
    category: 'Other',
    tagline: 'تطبيق موبايل بـ React Native لتنظيم وتتبّع قراءة الكتب على أندرويد وiOS',
    overview:
      'تطبيق موبايل متعدد المنصات تم تطويره باستخدام React Native لاكتشاف وتنسيق وتتبع الكتب ومجموعات القراءة الشخصية للأجهزة الذكية.',
    problem:
      'يحتاج القراء إلى أداة سريعة وسلسة لتنظيم مكتباتهم الشخصية وتتبع تقدم قراءاتهم اليومية دون تعقيدات أو بطء.',
    solution:
      'تطوير تطبيق موبايل بأداء أصيل وتنقل سلس وإدارة حالة تفاعلية وتكامل انسيابي مع واجهات الـ API.',
    architecture: [
      'قاعدة كود موحدة بـ React Native تستهدف كلاً من أندرويد وiOS',
      'مكتبة React Navigation لتطبيق أنماط التنقل المتعددة (Stack & Tabs)',
      'إدارة مركزية لحالة التطبيق والبيانات المخزنة محلياً',
      'طبقة خدمات API غير متزامنة مع ميزة تأخير الاستعلامات (Debounce) والصفحات',
    ],
    keyFeatures: [
      'واجهة مستخدم متناسقة وسلسة مهيأة للهواتف والأجهزة اللوحية',
      'بحث فوري وتصفية حسب التصنيف مع تحسين استهلاك الاستعلامات',
      'قوائم قراءة شخصية: أريد قراءته، أقرأه حالياً، وتمت القراءة',
      'نافذة تفاصيل متكاملة لكل كتاب مع بيانات الكاتب والغلاف والتقييم',
    ],
    stack: ['React Native', 'JavaScript', 'React Navigation', 'REST APIs', 'AsyncStorage'],
    challenges:
      'ضمان تناسق حركات الانتقال وسرعة الاستجابة اللمسية عبر مختلف أجهزة وأبعاد الأندرويد.',
    learnings:
      'بناء عناصر واجهة مستخدم أصيلة قابلة لإعادة الاستخدام وتحسين تخزين الصور المؤقت يزيد من سرعة واستجابة التطبيق.',
    githubUrl: 'https://github.com/Mohamedali22710',
    metrics: 'أندرويد وiOS // كود موحد // تخزين محلي غير متصل',
    featured: false,
    order: 4,
    images: [],
  },
  {
    id: 'coffee-store',
    slug: 'coffee-store',
    title: 'متجر القهوة والمشروبات التفاعلي',
    category: 'Full Stack',
    tagline: 'متجر إلكتروني سريع الاستجابة بسلة شراء ديناميكية ونظام فلترة لحظي',
    overview:
      'تطبيق ويب للتجارة الإلكترونية يتميز بتصفح ديناميكي للمنتجات، وحساب فوري لسلة المشتريات، وفلترة حسب الفئة والأسعار، وتجربة شراء سلسة.',
    problem:
      'تحتاج المتاجر الإلكترونية الحديثة إلى سرعة فائقة في فلترة المنتجات وسلة شراء فورية دون الحاجة لإعادة تحميل الصفحات.',
    solution:
      'بناء متجر إلكتروني متكامل وقائم على المكونات مع إدارة فورية لحالة السلة وتنسيق تجاوبي أنيق.',
    architecture: [
      'واجهة معيارية مبنية بـ HTML5 الدلالي وCSS3 وJavaScript وTailwind CSS',
      'محرك سلة تسوق ديناميكي مع تعديل الكميات وحساب الإجمالي لحظياً',
      'نظام فلترة متعدد المعايير في جانب العميل (القسم، درجة التحميص، والأسعار)',
    ],
    keyFeatures: [
      'عرض منتجات بتصميم جذاب وصور عالية الجودة مع تفاصيل كل نوع',
      'سلة تسوق جانبية منزلقة مع تحديث فوري للكميات والأسعار الإجمالية',
      'فلترة مباشرة حسب الأقسام ونطاق السعر دون أي تأخير في العرض',
      'تصميم متجاوب بالكامل يتكيف بدقة من أصغر الهواتف حتى شاشات سطح المكتب',
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
    challenges:
      'الحفاظ على تزامن كميات السلة والمخزون المعروض عبر الجلسات المتعددة.',
    learnings:
      'كتابة دوال تقليل حالة (State Reducers) متوقعة يجعل منطق التجارة الإلكترونية قابلاً للاختبار وموثوقاً.',
    githubUrl: 'https://github.com/Mohamedali22710',
    metrics: 'سلة تفاعلية // تصميم متجاوب // فلترة متعددة',
    featured: false,
    order: 5,
    images: ['/Image/project/coffe store/Screenshot 2026-11-02 201059.png'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'الخوادم والـ APIs',
    icon: 'Server',
    description: 'بيئات تشغيل الخوادم، وواجهات RESTful، والمعماريات الموزعة',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'Express.js', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'REST APIs', level: 'Advanced' },
      { name: 'PHP / Laravel', level: 'Working Knowledge' },
      { name: 'JWT & RBAC', level: 'Advanced' },
    ],
  },
  {
    id: 'frontend',
    title: 'الواجهات والموبايل',
    icon: 'Layout',
    description: 'واجهات ويب تفاعلية حديثة وتطبيقات موبايل متعددة المنصات',
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'Next.js', level: 'Working Knowledge' },
      { name: 'React Native', level: 'Working Knowledge' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'HTML5 & CSS3', level: 'Advanced' },
    ],
  },
  {
    id: 'database',
    title: 'قواعد البيانات والتخزين',
    icon: 'Database',
    description: 'المخططات العلائقية وقواعد NoSQL والبحث المتجهي Vector Search',
    skills: [
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'MySQL', level: 'Working Knowledge' },
      { name: 'Redis', level: 'Working Knowledge' },
      { name: 'Vector Search', level: 'Working Knowledge' },
    ],
  },
  {
    id: 'gis',
    title: 'النظم المكانية والـ GIS',
    icon: 'MapPin',
    description: 'الخوارزميات الجغرافية، والفهرسة المكانية، وخرائط الويب التفاعلية',
    skills: [
      { name: 'PostGIS', level: 'Advanced' },
      { name: 'Leaflet.js', level: 'Advanced' },
      { name: 'GeoJSON', level: 'Advanced' },
      { name: 'ArcGIS / QGIS', level: 'Working Knowledge' },
      { name: 'Spatial SQL', level: 'Advanced' },
    ],
  },
  {
    id: 'ai-llm',
    title: 'الذكاء الاصطناعي وLLM',
    icon: 'Cpu',
    description: 'تنسيق النماذج، خطوط RAG، وتوليد التقارير الذكية الآلية',
    skills: [
      { name: 'LangChain.js', level: 'Working Knowledge' },
      { name: 'Groq API', level: 'Advanced' },
      { name: 'OpenAI API', level: 'Working Knowledge' },
      { name: 'RAG Pipelines', level: 'Working Knowledge' },
    ],
  },
  {
    id: 'devops',
    title: 'الـ DevOps والأدوات',
    icon: 'GitBranch',
    description: 'التحكم بالإصدارات، والحاويات، وخطوط الأتمتة والنشر',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'Docker', level: 'Working Knowledge' },
      { name: 'Linux', level: 'Working Knowledge' },
      { name: 'CI/CD Pipelines', level: 'Working Knowledge' },
      { name: 'Postman', level: 'Advanced' },
    ],
  },
];

export const HOW_I_BUILD_STEPS = [
  {
    step: '01',
    title: 'الفهم والتحليل',
    eyebrow: 'المشكلة أولاً',
    description:
      'تفكيك متطلبات العمل، ونمذجة كيانات النطاق، وتحديد عقود واجهات الـ API وتدفق البيانات بدقة قبل كتابة أي سطر كود.',
    deliverable: 'نمذجة النطاق · مواصفات OpenAPI / Swagger · مخططات الكيانات',
  },
  {
    step: '02',
    title: 'التصميم المعماري',
    eyebrow: 'التخطيط يسبق التنفيذ',
    description:
      'تصميم وحدات الخدمات واختيار محركات التخزين المثالية (PostgreSQL وMongoDB وRedis) وتأمين حدود النظام.',
    deliverable: 'طوبولوجيا النظام · اختيار قواعد البيانات · نمذجة التهديدات والأمان',
  },
  {
    step: '03',
    title: 'البناء المعياري',
    eyebrow: 'كود نظيف ومنظم',
    description:
      'تنفيذ منطق برمجي صارم وخالي من العشوائية مع اختبارات قياسية ونمط تعافي من الأعطال وتسجيل أحداث منظم.',
    deliverable: 'كود آمن بالأنواع · اختبارات شاملة · تسجيل ومراقبة منظمة',
  },
  {
    step: '04',
    title: 'التحسين والتوسع',
    eyebrow: 'المتانة والإطلاق',
    description:
      'تجهيز الحاويات بـ Docker، وأتمتة النشر عبر CI/CD، ومراقبة أزمنة الاستجابة والتحسين الدوري لنقاط الاختناق.',
    deliverable: 'حاويات Docker وCI/CD · مراقبة الأداء والكمون · تحسين الاستعلامات',
  },
];

export const BACKEND_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'api-architecture',
    title: 'معمارية الـ API والتصميم المعياري',
    tagline: 'واجهات متوقعة ومنتظمة',
    description:
      'تصميم واجهات برمجة RESTful مع حدود واضحة للموارد، والتحقق بـ Zod، ومعالجة مركزية للأخطاء واستجابات موحدة.',
    iconName: 'Network',
    highlights: ['التحقق الصارم بـ Zod', 'معالجة أخطاء مركزية', 'مسارات برمجية معيارية'],
  },
  {
    id: 'database-design',
    title: 'تصميم قواعد البيانات والاستعلام المكاني',
    tagline: 'مخططات تلائم منطق العمل',
    description:
      'نمذجة البيانات في PostgreSQL وMongoDB، وتنفيذ استعلامات مكانية فائقة السرعة بزمن استجابة أقل من 20 مللي ثانية عبر PostGIS.',
    iconName: 'Database',
    highlights: ['نمذجة علائقية وNoSQL', 'فهرسة PostGIS GiST', 'بحث متجهي Atlas Vector Search'],
  },
  {
    id: 'auth',
    title: 'المصادقة وضوابط الأمان الصارمة',
    tagline: 'وصول قائم على الصلاحيات وحماية الموارد',
    description:
      'مصادقة بـ JWT وتحكم قائم على الأدوار (أدمن، مندوب، مدرس، طالب)، مع حماية ميزانية الـ Tokens لنقاط الذكاء الاصطناعي.',
    iconName: 'ShieldAlert',
    highlights: ['رموز JWT وتحديثها', 'صلاحيات أدوار دقيقة RBAC', 'تحديد معدل استهلاك الـ Tokens'],
  },
  {
    id: 'ai-integration',
    title: 'تنسيق الذكاء الاصطناعي ونماذج LLM',
    tagline: 'خطوط ذكاء اصطناعي مرنة ومتعددة النماذج',
    description:
      'بناء مسارات RAG للمؤسسات ونظام بدائل متعدد للمزودين ومحركات استخراج التقارير والتقييم بـ LangChain وGroq.',
    iconName: 'Cpu',
    highlights: ['نظام بدائل للمزودين', 'تكامل Groq وOpenAI', 'معالجة وتضمين البيانات بالـ RAG'],
  },
];

export const GIS_PIPELINE_STEPS = [
  {
    id: 'gis-data',
    title: 'مصادر البيانات الجغرافية',
    subtitle: 'RAW INGEST',
    detail: 'ملفات Shapefiles، وصور GeoTIFF، وإحداثيات GPS، والبيانات المساحية الخام.',
    icon: 'HardDrive',
  },
  {
    id: 'backend-api',
    title: 'واجهة API الجغرافية (GeoJSON)',
    subtitle: 'REST / SSE',
    detail: 'التحقق وتوحيد المخططات وبث مجموعات بيانات GeoJSON دون تعطيل السيرفر.',
    icon: 'Cpu',
  },
  {
    id: 'spatial-db',
    title: 'قاعدة البيانات المكانية (PostGIS)',
    subtitle: 'INDEXED',
    detail: 'فهرسة أشجار GiST R-Trees، والتحويل بين نظم الإسقاط، والاستعلام الهندسي.',
    icon: 'Database',
  },
  {
    id: 'processing',
    title: 'المعالجة والتجميع المكاني',
    subtitle: 'WORKER',
    detail: 'تجميع البيانات وحساب المسارات الأقرب (KNN) واختبارات تقاطع المضلعات.',
    icon: 'Activity',
  },
  {
    id: 'interactive-map',
    title: 'واجهة الخرائط التفاعلية',
    subtitle: 'CLIENT',
    detail: 'طبقات المتجهات، والمزامنة اللحظية، والعرض بـ Leaflet وMapbox.',
    icon: 'MapPin',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'innerheal-academy',
    period: '06/2026 — 08/2026',
    role: 'مطوّر Backend (عمل حر / Freelance)',
    organization: 'منصة تقييم InnerHeal Academy',
    location: 'عن بُعد',
    category: 'work',
    summary:
      'تطوير نظام Backend متكامل وقابل للتوسع لتحليل استبيانات وتقييمات المستخدمين النفسية وتوليد الرؤى والتقارير بصيغة PDF آلياً بالذكاء الاصطناعي.',
    highlights: [
      'بناء واجهات RESTful APIs وتكامل Groq AI لتوليد تقارير التقييم المؤتمتة.',
      'نشر النظامين (الواجهة والخادم) إلى بيئة الإنتاج على Hostinger وحل مشاكل توافق المكتبات.',
      'المنصة منشورة وتعمل مباشرة على نطاق innerheal.live.',
    ],
    skills: ['Node.js', 'Express', 'Groq AI', 'REST APIs', 'PDF Generation', 'Hostinger'],
  },
  {
    id: 'iti-genai-intern',
    period: '01/2026 — 07/2026',
    role: 'تطوير الواجهات وتطبيقات الموبايل مع تكامل الذكاء الاصطناعي التوليدي',
    organization: 'معهد تكنولوجيا المعلومات (ITI)',
    location: 'أسوان، مصر',
    category: 'education',
    summary:
      'برنامج تدريبي مكثف واحترافي يغطي تطوير واجهات الويب وتطبيقات الموبايل متعددة المنصات والدمج مع نماذج الذكاء الاصطناعي التوليدي.',
    highlights: [
      'تطوير تطبيقات ويب وموبايل وسطح مكتب باستخدام React وReact Native وElectron.',
      'قيادة المعمارية الخلفية وتصميم مسار الـ AI لمشروع التخرج: منصة ذكية لتحليل المستندات بـ LangChain.',
    ],
    skills: ['React', 'React Native', 'Electron', 'LangChain', 'Node.js', 'Gen AI'],
  },
  {
    id: 'iti-fundamentals',
    period: '07/2025',
    role: 'مسار تطوير البرمجيات — أساسيات الويب',
    organization: 'معهد تكنولوجيا المعلومات (ITI)',
    location: 'أسوان، مصر',
    category: 'education',
    summary:
      'مسار هندسي مكثف في علوم الحاسب وأساسيات هندسة وتطوير الويب.',
    highlights: [
      'أساسيات قوية في C# والبرمجة كائنية التوجه (OOP) وهياكل البيانات والخوارزميات وSQL.',
      'تطوير مهارات عملية في Git وHTML وCSS وJavaScript وPHP.',
    ],
    skills: ['C#', 'OOP', 'Data Structures & Algorithms', 'SQL', 'Git', 'PHP'],
  },
  {
    id: 'aswan-university',
    period: '2020 — 2024',
    role: 'ليسانس آداب — قسم نظم المعلومات الجغرافية (GIS)',
    organization: 'جامعة أسوان',
    location: 'أسوان، مصر',
    category: 'education',
    summary:
      'دراسة أكاديمية متخصصة في نظم المعلومات الجغرافية (GIS)، والتحليل المكاني، ونمذجة قواعد البيانات الجغرافية، والخرائط الرقمية.',
    highlights: [
      'قواعد البيانات المكانية واستعلامات PostGIS وفهرسة GiST.',
      'نظم الإسقاط الجغرافي وتحويلات EPSG والتحليل الطوبولوجي والاستشعار عن بعد.',
      'تطبيقات خرائط الويب التفاعلية بـ Leaflet وتصميم خطوط معالجة البيانات المكانية.',
    ],
    skills: ['GIS', 'Spatial SQL', 'PostGIS', 'Cartography', 'Leaflet', 'ArcGIS', 'QGIS'],
  },
];


export const GITHUB_REPOS = [
  {
    id: 'portfolio',
    name: 'portfolio',
    description: 'موقع البورتفوليو الشخصي لمطور Full Stack مبني بـ React وTypeScript وVite.',
    language: 'TypeScript',
    url: 'https://github.com/Mohamedali22710/portfolio',
  },
  {
    id: 'insighto',
    name: 'InsightO',
    description: 'منصة تقييم وتحليلات 360° بالذكاء الاصطناعي مع LangChain وRAG.',
    language: 'TypeScript',
    url: 'https://github.com/3mrNour/InsightO',
  },
  {
    id: 'github-profile',
    name: 'مستودعات Mohamedali22710',
    description: 'واجهات برمجية Backend وأنظمة إدارة التوصيل ومشاريع Full Stack.',
    language: 'TypeScript / Node.js',
    url: 'https://github.com/Mohamedali22710',
  },
];
