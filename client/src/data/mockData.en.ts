import { Project, SkillCategory, ExperienceItem, StatItem, CapabilityItem } from '../types';

/**
 * ENGLISH DATA
 * Source of truth: Mohamed Ali's CV and authentic project repositories.
 */

export const PERSONAL_INFO = {
  name: 'Mohamed Ali',
  fullName: 'Mohamed Ali Abd El Hakeim',
  title: 'Full Stack Developer',
  headline: 'Full Stack Developer Building Scalable Backend & Modern Web Systems',
  status: 'Available for Backend / Full-Stack Opportunities',
  location: 'Cairo, Egypt',
  email: 'moh74amedali@gmail.com',
  phone: '01140562085',
  github: 'https://github.com/Mohamedali22710',
  linkedin: 'https://www.linkedin.com/in/mohamedali74/',
  whatsapp: 'https://wa.me/201140562085',
  summary:
    'Full Stack Developer skilled in JavaScript, TypeScript, React, and Node.js, with solid REST API and database experience (MongoDB, PostgreSQL, MySQL). Comfortable writing clean, maintainable code and debugging production issues with a strong background in GIS spatial systems.',
};

export const STATS: StatItem[] = [
  {
    id: 'projects-showcased',
    label: 'Featured Projects',
    value: 5,
    suffix: '+',
    description: 'Production systems, AI platforms, and GIS architectures',
  },
  {
    id: 'years',
    label: 'Years Experience',
    value: 2,
    suffix: '+',
    description: 'Practical backend and full-stack engineering',
  },
  {
    id: 'technologies',
    label: 'Core Technologies',
    value: 12,
    suffix: '+',
    description: 'Node.js, TypeScript, React, PostGIS, MongoDB, Docker',
  },
  {
    id: 'clean-code',
    label: 'Commitment to Clean Code',
    value: 100,
    suffix: '%',
    description: 'Modular, validated, and maintainable by default',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'mersal-delivery',
    slug: 'mersal-delivery',
    title: 'Mersal Delivery Management System',
    category: 'Full Stack',
    tagline: 'Logistics API & Dispatch Management for Shipments and Driver Tracking',
    overview:
      'A comprehensive delivery and shipping management system engineered for logistics operations. Customers submit shipment requests via a public validated portal, dispatchers manage and assign orders through an admin dashboard, and couriers track and advance shipments in real time via a dedicated mobile app.',
    problem:
      'Logistics operations were previously recorded manually and coordinated through chaotic phone calls. There was zero centralized tracking for shipment lifecycle, assigned couriers, or real-time dispatch bottlenecks.',
    solution:
      'Engineered an end-to-end event-driven dispatch platform with strict role-based access control, an 8-state shipment lifecycle workflow (pending → assigned → in-transit → delivered), and dedicated driver endpoints.',
    architecture: [
      'React + Tailwind CSS responsive administrative dashboard and public tracking portal',
      'Node.js + Express REST API with JWT authentication and strict Role-Based Access Control (Admin vs. Driver)',
      'MongoDB schemas with Mongoose for shipments, fleet couriers, and dispatch audit logs',
      'React Native mobile application for couriers with real-time status updates',
    ],
    keyFeatures: [
      'Public shipment intake portal with robust client and server validation',
      'Real-time shipment tracking with an 8-stage state machine workflow',
      'Courier fleet management (register, assign, reassign, and track availability)',
      'Admin telemetry metrics: total volume, active deliveries, success rate, and exceptions',
      'Secure JWT authentication with granular RBAC permissions',
      'Bilingual interface built natively for Arabic logistics workflows',
    ],
    stack: ['Node.js', 'Express', 'React', 'MongoDB', 'JWT', 'RBAC', 'React Native', 'Tailwind CSS'],
    challenges:
      'Ensuring offline resilience and seamless courier synchronization between mobile network drops during field deliveries.',
    learnings:
      'Clear domain boundary modeling and robust state machines eliminate shipment status race conditions and simplify courier state management.',
    githubUrl: 'https://github.com/Mohamedali22710',
    metrics: '2 Roles (Admin, Driver) // 8-State Lifecycle // Dedicated Driver App',
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
    title: 'InsightO — AI-Powered 360° Evaluation Platform',
    category: 'Full Stack',
    tagline: 'Multi-Model AI Evaluation Platform for Academic & Organizational Analytics',
    overview:
      'A production-grade evaluation platform that unifies qualitative feedback with quantitative assessments into automated institutional intelligence reports. Profiles students, instructors, and departments while generating actionable AI growth roadmaps.',
    problem:
      'Educational institutions gather massive volumes of survey feedback and academic submissions but struggle with manual grading, siloed data, and an inability to detect systemic curriculum deficiencies.',
    solution:
      'Engineered a unified evaluation ecosystem featuring dynamic question-and-answer builders, an automated AI answer grading engine, and resilient multi-provider LLM orchestration with token budget protection.',
    architecture: [
      'React 19 + TypeScript + Vite modern SPA with Redux Toolkit, Zustand, and Shadcn/UI',
      'Modular Express + TypeScript API adhering to strict separation of concerns',
      'MongoDB with aggregation pipelines and Atlas Vector Search for semantic RAG retrieval',
      'LangChain orchestration layer integrating Groq API, OpenAI, and local LLM fallbacks',
    ],
    keyFeatures: [
      'Dynamic Q&A form builder for constructing complex multi-section evaluation surveys',
      'AI answer analysis engine producing strengths/weaknesses breakdowns and growth plans',
      'Per-user token usage quotas with automated feature-level access blocking when limits are met',
      'Multi-tier LLM fallback pipeline preventing service interruptions during provider rate-limits',
      'Granular Role-Based Access Control for Admins, Department Heads, Instructors, and Students',
      'Automated PDF analytics reporting and executive institutional summaries',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'LangChain', 'Groq API', 'Tailwind CSS'],
    challenges:
      'Handling high-concurrency automated grading requests while strictly enforcing token quotas without blocking the Node.js event loop.',
    learnings:
      'Abstracting LLM providers behind a centralized factory pattern provides predictable retry semantics, cost control, and seamless failovers.',
    githubUrl: 'https://github.com/3mrNour/InsightO',
    liveUrl: 'https://youtu.be/8bQ2izNfzR4',
    metrics: '3-Tier AI Fallback // 4 RBAC Roles // Semantic Vector Search',
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
    title: 'AI ChatGPT Clone & Streaming Backend',
    category: 'Backend',
    tagline: 'Scalable Streaming Backend Architecture with OpenAI API Integration',
    overview:
      'A high-performance backend system replicating core ChatGPT conversational capabilities with Server-Sent Events (SSE) token streaming, modular prompt orchestrators, and resilient error recovery.',
    problem:
      'Building responsive AI conversation interfaces requires low-latency token streaming, connection keep-alives, and strict budget and timeout management to prevent runaway requests.',
    solution:
      'Engineered a clean, modular Express service streaming chunks in real time, supporting conversational context memory, and enforcing token rate-limits and payload validation.',
    architecture: [
      'Node.js + Express backend service with clean separation of controllers, services, and middlewares',
      'OpenAI API integration leveraging streaming completions and SSE protocol',
      'Context window memory manager preserving session turns within token limits',
      'Middleware rate limiting, API token protection, and centralized error handling',
    ],
    keyFeatures: [
      'Real-time token streaming via Server-Sent Events with sub-50ms initial response time',
      'Conversational context buffer managing multi-turn dialogue within model boundaries',
      'Granular error boundary handling OpenAI rate limits and network degradation',
      'RESTful endpoints for chat history retrieval, session termination, and prompt tuning',
    ],
    stack: ['Node.js', 'Express', 'OpenAI API', 'REST APIs', 'SSE', 'JavaScript'],
    challenges:
      'Gracefully managing client disconnections mid-stream to immediately terminate upstream API calls and save token costs.',
    learnings:
      'Streaming architectures require close coordination between HTTP connection events and upstream socket cancellation to prevent memory and credit leaks.',
    githubUrl: 'https://github.com/Mohamedali22710',
    metrics: 'SSE Streaming // Context Memory Buffer // Token Budget Guards',
    featured: true,
    order: 3,
    images: [],
  },
  {
    id: 'book-app',
    slug: 'book-app',
    title: 'BookApp — Mobile Book Discovery & Management',
    category: 'Other',
    tagline: 'Cross-Platform Mobile Application for Book Curation & Reading Tracking',
    overview:
      'A cross-platform mobile application developed with React Native for discovering, organizing, and tracking reading collections on both iOS and Android devices.',
    problem:
      'Readers need an intuitive, fast, and responsive tool to curate personal libraries, track reading status, and discover new titles without unnecessary clutter.',
    solution:
      'Built a native-performance mobile app with fluid navigation, reactive state management, and seamless REST API integrations.',
    architecture: [
      'React Native single codebase targeting Android and iOS platforms',
      'React Navigation library with stack and tab navigation patterns',
      'Centralized client state management handling library persistence and cached results',
      'Asynchronous REST API service layer with search debouncing and pagination',
    ],
    keyFeatures: [
      'Cross-platform fluid UI optimized for both phone and tablet form factors',
      'Instant search and genre filtering with debounced API queries',
      'Personal reading lists: Want to Read, Currently Reading, and Completed',
      'Detailed book preview modal with metadata, author bios, and cover art',
    ],
    stack: ['React Native', 'JavaScript', 'React Navigation', 'REST APIs', 'AsyncStorage'],
    challenges:
      'Ensuring consistent navigation animations and touch response across varied Android device specifications.',
    learnings:
      'Structuring reusable native UI components and optimizing image caching significantly boosts mobile perceived performance.',
    githubUrl: 'https://github.com/Mohamedali22710',
    metrics: 'iOS & Android // Single Codebase // Offline Cache',
    featured: false,
    order: 4,
    images: [],
  },
  {
    id: 'coffee-store',
    slug: 'coffee-store',
    title: 'Coffee & Artisanal E-Commerce Store',
    category: 'Full Stack',
    tagline: 'Responsive E-Commerce Platform with Dynamic Cart & Filter Engine',
    overview:
      'A responsive e-commerce web application featuring dynamic catalog navigation, live cart computation, category and price filtering, and streamlined order checkout.',
    problem:
      'Modern online storefronts need frictionless product filtering and instant shopping cart responsiveness without page reloads or lagging UI transitions.',
    solution:
      'Developed a component-driven e-commerce platform with dynamic cart state, responsive grid layouts, and modular CSS styling.',
    architecture: [
      'Modular frontend built with semantic HTML5, CSS3, JavaScript, and Tailwind CSS',
      'Dynamic shopping cart engine with quantity manipulation and live price tallying',
      'Client-side multi-parameter filter engine (category, roast type, price thresholds)',
    ],
    keyFeatures: [
      'Dynamic product showcase with high-resolution imagery and roast profiles',
      'Interactive shopping cart drawer with instant quantity updates and total calculation',
      'Real-time category and price range filtering with instant reflow',
      'Responsive design adapting cleanly from mobile smartphones to ultra-wide displays',
    ],
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI'],
    challenges:
      'Maintaining synchronization between catalog stock state and cart quantities across sessions.',
    learnings:
      'Writing predictable state reducers for cart operations makes client-side e-commerce reliable and testable.',
    githubUrl: 'https://github.com/Mohamedali22710',
    metrics: 'Dynamic Cart // Responsive UI // Multi-Filter Engine',
    featured: false,
    order: 5,
    images: ['/Image/project/coffe store/Screenshot 2026-11-02 201059.png'],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & APIs',
    icon: 'Server',
    description: 'Server runtimes, RESTful APIs, and application architecture',
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
    title: 'Frontend & Mobile',
    icon: 'Layout',
    description: 'Modern reactive web interfaces and cross-platform apps',
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
    title: 'Databases & Storage',
    icon: 'Database',
    description: 'Relational schemas, NoSQL document stores, and vector search',
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
    title: 'Spatial Systems & GIS',
    icon: 'MapPin',
    description: 'Geospatial algorithms, spatial indexing, and web mapping',
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
    title: 'AI & LLM Integration',
    icon: 'Cpu',
    description: 'Orchestration, RAG pipelines, and automated reporting',
    skills: [
      { name: 'LangChain.js', level: 'Working Knowledge' },
      { name: 'Groq API', level: 'Advanced' },
      { name: 'OpenAI API', level: 'Working Knowledge' },
      { name: 'RAG Pipelines', level: 'Working Knowledge' },
    ],
  },
  {
    id: 'devops',
    title: 'DevOps & Tooling',
    icon: 'GitBranch',
    description: 'Version control, containers, and deployment workflows',
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
    title: 'Understand',
    eyebrow: 'PROBLEM FIRST',
    description:
      'Deconstruct business requirements, map domain entities, and establish clear API contracts and data flow boundaries before writing code.',
    deliverable: 'Domain Modeling · OpenAPI / Swagger · Entity Schemas',
  },
  {
    step: '02',
    title: 'Architect',
    eyebrow: 'DESIGN BEFORE CODE',
    description:
      'Design modular services, select optimal storage engines (PostgreSQL, MongoDB, Redis), configure connection pooling, and establish security boundaries.',
    deliverable: 'System Topology · DB Selection · Threat Modeling',
  },
  {
    step: '03',
    title: 'Build',
    eyebrow: 'CLEAN & MODULAR',
    description:
      'Implement clean, strictly-typed logic with deterministic validation, graceful degradation patterns, and structured observability.',
    deliverable: 'Type-Safe Code · Unit & Integration Tests · Structured Logging',
  },
  {
    step: '04',
    title: 'Improve & Scale',
    eyebrow: 'HARDEN & SHIP',
    description:
      'Containerize via Docker, configure CI/CD automation, monitor live latency telemetry, and iteratively profile and optimize bottlenecks.',
    deliverable: 'Docker & CI/CD · Telemetry & APM · Query Optimization',
  },
];

export const BACKEND_CAPABILITIES: CapabilityItem[] = [
  {
    id: 'api-architecture',
    title: 'API Architecture & Modular Design',
    tagline: 'Predictable and consistent endpoints',
    description:
      'Designing REST APIs with clear resource boundaries, Zod validation, error handling, and consistent response structures.',
    iconName: 'Network',
    highlights: ['Zod validation', 'Centralized error handling', 'Modular routes'],
  },
  {
    id: 'database-design',
    title: 'Database Design & Spatial Queries',
    tagline: 'Schemas that fit the domain',
    description:
      'Modeling relational data in PostgreSQL, documents in MongoDB, and executing sub-20ms spatial queries with PostGIS R-Trees.',
    iconName: 'Database',
    highlights: ['Relational & NoSQL modeling', 'PostGIS GiST indexing', 'Atlas Vector Search'],
  },
  {
    id: 'auth',
    title: 'Authentication & Security Guardrails',
    tagline: 'Role-based access & quota protection',
    description:
      'JWT authentication with role-based access control (Admin, Courier, Instructor, Student) alongside token budget guards on AI endpoints.',
    iconName: 'ShieldAlert',
    highlights: ['JWT & Refresh tokens', 'Granular RBAC', 'Token rate limiting'],
  },
  {
    id: 'ai-integration',
    title: 'AI & LLM Orchestration',
    tagline: 'Resilient multi-model pipelines',
    description:
      'Building production RAG pipelines, multi-tier provider fallbacks, and automated assessment report engines using LangChain and Groq.',
    iconName: 'Cpu',
    highlights: ['Multi-provider fallback', 'Groq & OpenAI APIs', 'RAG ingestion'],
  },
];

export const GIS_PIPELINE_STEPS = [
  {
    id: 'gis-data',
    title: 'GIS Data Source',
    subtitle: 'RAW INGEST',
    detail: 'Shapefiles, GeoTIFFs, GPS feeds, and raw spatial survey datasets.',
    icon: 'HardDrive',
  },
  {
    id: 'backend-api',
    title: 'Backend API (GeoJSON)',
    subtitle: 'REST / SSE',
    detail: 'Validation, schema normalization, and streaming GeoJSON payloads.',
    icon: 'Cpu',
  },
  {
    id: 'spatial-db',
    title: 'Spatial DB (PostGIS)',
    subtitle: 'INDEXED',
    detail: 'GiST R-Trees, coordinate transformations, and spatial bounding box queries.',
    icon: 'Database',
  },
  {
    id: 'processing',
    title: 'Processing / Clustering',
    subtitle: 'WORKER',
    detail: 'Spatial clustering, nearest-neighbor routing, and topology intersection tests.',
    icon: 'Activity',
  },
  {
    id: 'interactive-map',
    title: 'Interactive Map UI',
    subtitle: 'CLIENT',
    detail: 'Vector overlays, synchronized telemetry, and rendering via Leaflet / Mapbox.',
    icon: 'MapPin',
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'innerheal-academy',
    period: '06/2026 — 08/2026',
    role: 'Backend Developer (Freelance)',
    organization: 'InnerHeal Academy Assessment Platform',
    location: 'Remote',
    category: 'work',
    summary:
      'Developed a scalable AI-powered backend system to analyze user psychological assessments and generate automated insights and PDF reports.',
    highlights: [
      'Built RESTful APIs and integrated Groq AI for automated assessment report generation.',
      'Deployed both backend and frontend to production on Hostinger, resolving production environment library compatibility.',
      'Production system accessible live at innerheal.live.',
    ],
    skills: ['Node.js', 'Express', 'Groq AI', 'REST APIs', 'PDF Generation', 'Hostinger'],
  },
  {
    id: 'iti-genai-intern',
    period: '01/2026 — 07/2026',
    role: 'Front-End & Mobile Dev with Gen AI Integration',
    organization: 'Information Technology Institute (ITI)',
    location: 'Aswan, Egypt',
    category: 'education',
    summary:
      'Intensive professional training program covering modern front-end, cross-platform mobile development, and generative AI integrations.',
    highlights: [
      'Developed web and cross-platform applications across React, React Native, and Electron.',
      'Led backend architecture and AI pipeline design for capstone project: a multi-platform document intelligence platform with LangChain.',
    ],
    skills: ['React', 'React Native', 'Electron', 'LangChain', 'Node.js', 'Gen AI'],
  },
  {
    id: 'iti-fundamentals',
    period: '07/2025',
    role: 'Software Development Track — Web Fundamentals',
    organization: 'Information Technology Institute (ITI)',
    location: 'Aswan, Egypt',
    category: 'education',
    summary:
      'Rigorous computer science and web engineering track establishing foundational programming and software engineering principles.',
    highlights: [
      'Solid foundations in C#, Object-Oriented Programming (OOP), Data Structures & Algorithms, and SQL.',
      'Developed practical web fundamental skills in Git, HTML, CSS, JavaScript, and PHP.',
    ],
    skills: ['C#', 'OOP', 'Data Structures & Algorithms', 'SQL', 'Git', 'PHP'],
  },
  {
    id: 'aswan-university',
    period: '2020 — 2024',
    role: 'Bachelor of Arts, GIS Department',
    organization: 'Aswan University',
    location: 'Aswan, Egypt',
    category: 'education',
    summary:
      'Academic specialization in Geographic Information Systems (GIS), spatial analysis, cartographic science, and spatial database modeling.',
    highlights: [
      'Spatial Database Systems, PostGIS spatial queries, and GiST indexing concepts.',
      'Geodetic datums, EPSG coordinate transformations, topological analysis, and remote sensing.',
      'Web mapping implementations with Leaflet and spatial data pipeline design.',
    ],
    skills: ['GIS', 'Spatial SQL', 'PostGIS', 'Cartography', 'Leaflet', 'ArcGIS', 'QGIS'],
  },
];


export const GITHUB_REPOS = [
  {
    id: 'portfolio',
    name: 'portfolio',
    description: 'Personal full-stack developer portfolio built with React, TypeScript, and Vite.',
    language: 'TypeScript',
    url: 'https://github.com/Mohamedali22710/portfolio',
  },
  {
    id: 'insighto',
    name: 'InsightO',
    description: 'AI-powered 360° evaluation and analytics platform with LangChain and RAG.',
    language: 'TypeScript',
    url: 'https://github.com/3mrNour/InsightO',
  },
  {
    id: 'github-profile',
    name: 'Mohamedali22710 Repositories',
    description: 'Backend APIs, delivery management systems, and full-stack repositories.',
    language: 'TypeScript / Node.js',
    url: 'https://github.com/Mohamedali22710',
  },
];