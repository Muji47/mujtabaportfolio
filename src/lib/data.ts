import type {
  Project,
  SkillCategory,
  Experience,
  Service,
  Testimonial,
  BlogPost,
  Stat,
  NavLink,
} from "@/types";

export const profileLinks = {
  github: "https://github.com/Muji47",
  linkedin: "https://www.linkedin.com/in/m-mujtaba-tahir-139316243",
  email: "mujtabach577@gmail.com",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Stack", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const typingTexts = [
  "Full-Stack Next.js Applications",
  "High-Performance React Systems",
  "Figma to Pixel-Perfect Code",
  "Custom Interactive Calculators & Funnels",
  "Scalable Node.js & PostgreSQL APIs",
];

export const stats: Stat[] = [
  { id: 1, value: 15, suffix: "+", label: "Production Web Systems Shipped", icon: "calendar" },
  { id: 2, value: 99, suffix: "%", label: "Client Satisfaction & Delivery", icon: "rocket" },
  { id: 3, value: 98, suffix: "/100", label: "Avg Google Lighthouse Score", icon: "code" },
  { id: 4, value: 100, suffix: "%", label: "On-Time Milestone Delivery", icon: "star" },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Architecture",
    icon: "⚡",
    skills: [
      { name: "Next.js (App Router)", icon: "nextjs", level: 95 },
      { name: "React 19", icon: "react", level: 95 },
      { name: "TypeScript", icon: "typescript", level: 92 },
      { name: "Tailwind CSS v4", icon: "tailwind", level: 96 },
      { name: "Framer Motion", icon: "framer", level: 88 },
      { name: "State Management (Redux/Context)", icon: "redux", level: 90 },
    ],
  },
  {
    category: "Backend & Systems",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "nodejs", level: 90 },
      { name: "Express.js", icon: "express", level: 88 },
      { name: "REST & Server Actions", icon: "api", level: 92 },
      { name: "JWT & Secure Auth", icon: "auth", level: 90 },
      { name: "API Architecture & Webhooks", icon: "integration", level: 90 },
    ],
  },
  {
    category: "Databases & Storage",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", level: 88 },
      { name: "MongoDB", icon: "mongodb", level: 85 },
      { name: "Prisma ORM", icon: "prisma", level: 85 },
      { name: "Redis Caching", icon: "redis", level: 80 },
    ],
  },
  {
    category: "Deployment & Quality",
    icon: "🚀",
    skills: [
      { name: "Vercel Edge Deployment", icon: "vercel", level: 95 },
      { name: "Core Web Vitals Optimization", icon: "speed", level: 95 },
      { name: "Git & CI/CD Workflows", icon: "git", level: 92 },
      { name: "Docker Containerization", icon: "docker", level: 78 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "VoltSolar Australia – Clean Energy Lead Engine",
    description:
      "A high-performance conversion engine engineered for the Australian solar market. Features real-time quarterly bill calculation, dynamic system sizing, Federal STC rebate estimation, and sub-second edge rendering on mobile.",
    features: [
      "Sub-Second Mobile Load Times",
      "Interactive Solar ROI Calculator",
      "Dynamic STC Rebate Math",
      "Multi-Step Lead Modal",
      "Australian Compliance & Licensing UI",
      "98/100 Google Lighthouse Score",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel Edge"],
    image: "/projects/voltsolar.svg",
    live: "https://au-solar-showcase.vercel.app",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "StaffedUp – Enterprise Hiring & ATS SaaS",
    description:
      "An applicant tracking and hiring platform featuring AI candidate SmartMatch scoring, video interview pipelines, multi-location job boards, and automated employee onboarding.",
    features: [
      "AI SmartMatch Scoring",
      "Applicant Tracking Pipeline",
      "Video Interview System",
      "Multi-Location Job Sourcing",
      "Digital Document Onboarding",
      "Automated Candidate Workflows",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs"],
    image: "/projects/staffedup.svg",
    live: "https://staffedup.com/",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Adala – Legal Consultation Platform",
    description:
      "A legal technology platform operating in Kuwait with complete Arabic RTL support, attorney directory, case management, and encrypted online consultation booking.",
    features: [
      "Full RTL Arabic Support",
      "Lawyer Directory & Ratings",
      "Case Management Dashboard",
      "Encrypted Document Uploads",
      "Real-Time Booking Engine",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    image: "/projects/adala.svg",
    live: "https://adala.com.kw/",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Healing Hands – Specialized Healthcare Clinic Portal",
    description:
      "A clinical physiotherapy platform engineered for high-intent patient acquisition, practitioner scheduling, treatment showcase, and local SEO ranking.",
    features: [
      "Instant Appointment Booking",
      "Practitioner Profiles",
      "Patient Testimonial Verification",
      "HIPAA/Privacy Compliant Intake",
      "Local Search Optimization",
    ],
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "REST APIs"],
    image: "/projects/healinghands.svg",
    live: "https://www.healinghands.pk/",
    category: "Frontend",
  },
  {
    id: 5,
    title: "Burewala Rice Mills – Global Export Platform",
    description:
      "An international export portal showcasing milling infrastructure, international ISO/HACCP certifications, product specifications, and global bulk inquiry capture.",
    features: [
      "Global Export Inquiry Pipeline",
      "Product Specification Showcase",
      "Certification Compliance Display",
      "High-Res Media Optimization",
    ],
    tech: ["React", "Tailwind CSS", "Node.js"],
    image: "/projects/burewala.svg",
    live: "https://www.burewalaricemills.com/",
    category: "Frontend",
  },
  {
    id: 6,
    title: "University Role-Based Management System",
    description:
      "An enterprise academic management portal with multi-tier role-based access control (RBAC) supporting thousands of students, faculty grading, and administration workflows.",
    features: [
      "Multi-Tier RBAC Security",
      "Course & Exam Administration",
      "Student Grade Portals",
      "Secure Audit Logs",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL"],
    image: "/projects/university-portal.svg",
    category: "Full Stack",
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Agency White-Label Development",
    description:
      "On-demand development partner for design and SEO agencies. Hand over your Figma designs and receive production-ready, pixel-perfect Next.js web applications that match your specifications 1:1.",
    icon: "🤝",
    features: [
      "Figma to pixel-perfect Next.js 16 / React 19",
      "Clean TypeScript & modular architecture",
      "Strict milestone delivery & zero overhead",
      "White-label client confidentiality guarantee",
    ],
  },
  {
    id: 2,
    title: "Full-Stack Web Engineering",
    description:
      "Complete web application development from scratch: frontend UI, backend server architecture, relational/NoSQL databases, authenticated customer dashboards, and third-party API integrations.",
    icon: "💻",
    features: [
      "Scalable Node.js & PostgreSQL APIs",
      "Role-based authentication & secure state",
      "Automated testing & CI/CD deployment",
      "High-reliability backend infrastructure",
    ],
  },
  {
    id: 3,
    title: "Interactive Calculators & Lead Funnels",
    description:
      "Custom interactive widgets (solar ROI calculators, pricing estimators, dynamic step-forms) engineered to engage mobile visitors and double online quote conversions.",
    icon: "⚡",
    features: [
      "Real-time financial & incentive calculations",
      "Mobile-first responsive UX with sticky CTAs",
      "Direct CRM / Email / Webhook integrations",
      "Instant feedback with zero layout shifts",
    ],
  },
  {
    id: 4,
    title: "Core Web Vitals & Speed Optimization",
    description:
      "Transforming slow, bloated WordPress sites or lagging apps into sub-second web platforms that score 95+ on Google PageSpeed and reduce paid ad bounce rates.",
    icon: "🚀",
    features: [
      "95+ Google PageSpeed & Lighthouse guarantee",
      "Sub-second TTFB & Edge CDN caching",
      "Elimination of render-blocking assets",
      "Maximized Google Ads Quality Score",
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Full-Stack & Next.js Engineer",
    company: "Alpharages",
    period: "2024 – Present",
    location: "Global & Australia (Remote)",
    description: [
      "Partnered with digital marketing agencies and high-ticket service businesses to build conversion-engineered Next.js platforms.",
      "Engineered full-stack interactive lead funnels, financial calculators (STC solar rebate math), and multi-step inquiry systems.",
      "Delivered pixel-perfect Figma translations with strict 95+ Google Lighthouse scores and sub-second TTFB.",
      "Managed headless CMS integrations, RESTful APIs, and database migrations with zero downtime.",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Visiomate",
    period: "Sep 2023 – 2024",
    location: "Islamabad, Pakistan",
    description: [
      "Built scalable web applications, RESTful microservices, and role-based authentication systems.",
      "Developed interactive dashboards with real-time analytics using React, Node.js, and PostgreSQL.",
      "Optimized database queries and server-side caching, reducing response times by 40%.",
    ],
    tech: ["React", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Shariq Ali",
    role: "Product Lead",
    company: "StaffedUp SaaS",
    content:
      "Mujtaba delivered our applicant tracking platform with exceptional attention to detail. The candidate scoring workflows and backend integrations ran flawlessly on launch day.",
    avatar: "SA",
    rating: 5,
  },
  {
    id: 2,
    name: "Ahmad Al-Sabah",
    role: "Managing Director",
    company: "Adala Legal Platform",
    content:
      "Handling bi-directional RTL Arabic alongside an online legal booking system is complex. Mujtaba executed the architecture cleanly, hitting every milestone on time.",
    avatar: "AS",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Farhan K.",
    role: "Clinical Director",
    company: "Healing Hands Healthcare",
    content:
      "Our clinic's direct booking rate increased significantly after Mujtaba modernized our web platform. Fast, clean, and zero downtime.",
    avatar: "FK",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Why Modern Next.js Replaces Bloated WordPress for High-Converting Trades",
    excerpt:
      "How moving from 8-second Apache PHP servers to Next.js Edge pre-rendering cuts mobile ad bounce rates by over 50%.",
    date: "Nov 2026",
    readTime: "4 min read",
    category: "Performance",
    image: "/images/blog-1.jpg",
    slug: "nextjs-vs-wordpress-lead-conversion",
  },
  {
    id: 2,
    title: "Engineering Interactive Quote Calculators in React 19",
    excerpt:
      "Why interactive sliders and real-time ROI math capture 3x more qualified customer phone numbers than static contact forms.",
    date: "Oct 2026",
    readTime: "5 min read",
    category: "Conversion Engineering",
    image: "/images/blog-2.jpg",
    slug: "engineering-interactive-calculators",
  },
];
