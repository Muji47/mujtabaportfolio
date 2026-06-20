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

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const typingTexts = [
  "React.js Developer",
  "Next.js Developer",
  "TypeScript Expert",
  "Node.js Developer",
  "Express.js Developer",
  "Full Stack Developer",
  "Tailwind CSS Expert",
  "PostgreSQL Developer",
  "MongoDB Developer",
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML5", icon: "html5", level: 95 },
      { name: "CSS3", icon: "css3", level: 92 },
      { name: "SCSS", icon: "sass", level: 88 },
      { name: "JavaScript", icon: "javascript", level: 92 },
      { name: "TypeScript", icon: "typescript", level: 88 },
      { name: "React.js", icon: "react", level: 90 },
      { name: "Next.js", icon: "nextjs", level: 88 },
      { name: "Gatsby.js", icon: "gatsby", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Node.js", icon: "nodejs", level: 85 },
      { name: "Express.js", icon: "express", level: 83 },
      { name: "REST APIs", icon: "api", level: 88 },
      { name: "Authentication", icon: "auth", level: 82 },
      { name: "JWT", icon: "jwt", level: 85 },
      { name: "API Integration", icon: "integration", level: 87 },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", level: 82 },
      { name: "MongoDB", icon: "mongodb", level: 80 },
      { name: "SQLite", icon: "sqlite", level: 75 },
    ],
  },
  {
    category: "UI Frameworks",
    icon: "🎭",
    skills: [
      { name: "Tailwind CSS", icon: "tailwind", level: 92 },
      { name: "Ant Design", icon: "antd", level: 80 },
      { name: "Material UI", icon: "mui", level: 78 },
    ],
  },
  {
    category: "State Management",
    icon: "🔄",
    skills: [
      { name: "Redux Toolkit", icon: "redux", level: 82 },
      { name: "Context API", icon: "context", level: 88 },
    ],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: [
      { name: "Git", icon: "git", level: 88 },
      { name: "GitHub", icon: "github", level: 88 },
      { name: "Postman", icon: "postman", level: 85 },
      { name: "VS Code", icon: "vscode", level: 92 },
      { name: "Vercel", icon: "vercel", level: 85 },
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Adala – Legal Platform",
    description:
      "A professional legal services platform for Kuwait with Arabic RTL support, lawyer profiles, case management, and an online consultation booking system.",
    features: [
      "RTL Arabic Support",
      "Lawyer Profiles",
      "Case Management",
      "Online Booking",
      "Document Upload",
      "Multi-Language",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "REST APIs"],
    image: "/projects/adala.svg",
    live: "https://adala.com.kw/",
    category: "Full Stack",
  },
  {
    id: 2,
    title: "StaffedUp – Hiring SaaS",
    description:
      "A full-featured hiring and applicant tracking system (ATS) with AI candidate scoring, video interviews, multi-location hiring, and automated onboarding.",
    features: [
      "Applicant Tracking",
      "AI SmartMatch Scoring",
      "Video Interviews",
      "Multi-Location Hiring",
      "Digital Onboarding",
      "Hiring Automation",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    image: "/projects/staffedup.svg",
    live: "https://staffedup.com/",
    category: "Full Stack",
  },
  {
    id: 3,
    title: "Healing Hands – Clinic",
    description:
      "A modern physiotherapy clinic website with service listings, therapist profiles, appointment booking, patient testimonials, and contact management.",
    features: [
      "Service Showcase",
      "Appointment Booking",
      "Patient Testimonials",
      "Contact Form",
      "Responsive Design",
      "SEO Optimized",
    ],
    tech: ["Next.js", "Tailwind CSS", "REST APIs"],
    image: "/projects/healinghands.svg",
    live: "https://www.healinghands.pk/",
    category: "Frontend",
  },
  {
    id: 4,
    title: "Burewala Rice Mills",
    description:
      "A corporate website for a leading Pakistani rice exporter featuring product catalog, milling process showcase, international certifications, and export inquiry system.",
    features: [
      "Product Catalog",
      "Process Showcase",
      "Export Inquiries",
      "Certification Display",
      "Contact Management",
      "Multi-Language Ready",
    ],
    tech: ["React", "Tailwind CSS", "Node.js"],
    image: "/projects/burewala.svg",
    live: "https://www.burewalaricemills.com/",
    category: "Frontend",
  },
  {
    id: 5,
    title: "University Portal",
    description:
      "A comprehensive university management system with role-based access control, supporting students, faculty, and administrators.",
    features: [
      "Student Management",
      "Faculty Management",
      "Course Management",
      "Role-Based Access",
      "Auth System",
      "Department Mgmt",
    ],
    tech: ["Next.js", "Node.js", "Express.js", "PostgreSQL"],
    image: "/projects/university-portal.svg",
    category: "Full Stack",
  },
  {
    id: 6,
    title: "E-Commerce Platform",
    description:
      "A feature-rich e-commerce platform with complete shopping experience from product browsing to order management.",
    features: [
      "Product Catalog",
      "Shopping Cart",
      "User Authentication",
      "Order Management",
      "Admin Dashboard",
      "Payment Integration",
    ],
    tech: ["Next.js", "Node.js", "MongoDB"],
    image: "/projects/ecommerce.svg",
    category: "Full Stack",
  },
  {
    id: 7,
    title: "Store Management System",
    description:
      "An intelligent store management solution with real-time inventory tracking, sales analytics, and employee management.",
    features: [
      "Inventory Tracking",
      "Sales Reports",
      "Employee Management",
      "Analytics Dashboard",
    ],
    tech: ["React", "Node.js", "PostgreSQL"],
    image: "/projects/store-management.svg",
    category: "Full Stack",
  },
  {
    id: 8,
    title: "Expense Tracker",
    description:
      "A personal finance management app to track expenses, manage budgets, and visualize spending patterns.",
    features: [
      "Expense Management",
      "Budget Tracking",
      "Statistics Dashboard",
    ],
    tech: ["Next.js", "Node.js"],
    image: "/projects/expense-tracker.svg",
    category: "Full Stack",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Alpharages",
    period: "Sep 2025 – Present",
    location: "Pakistan",
    description: [
      "Building scalable web applications using Next.js, Node.js, and TypeScript",
      "Designing and integrating RESTful APIs for client-facing products",
      "Implementing authentication and authorization systems using JWT",
      "Developing reusable, accessible UI component libraries with Tailwind CSS",
      "Managing PostgreSQL and MongoDB databases with optimized queries",
      "Improving application performance and Core Web Vitals scores",
      "Collaborating with cross-functional teams using Git workflows",
    ],
    tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Visiomate",
    period: "Jan 2024 – Aug 2025",
    location: "Pakistan",
    description: [
      "Built responsive, pixel-perfect UIs using React.js and TypeScript from Figma designs",
      "Developed reusable component libraries to accelerate feature delivery",
      "Integrated RESTful APIs and managed frontend state with Redux Toolkit",
      "Improved page load performance and achieved high Lighthouse scores",
      "Implemented dynamic routing, lazy loading, and code-splitting in React",
      "Collaborated closely with designers and backend engineers in agile sprints",
    ],
    tech: ["React.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "REST APIs"],
  },
];

export const services: Service[] = [
  {
    id: 1,
    title: "Full Stack Development",
    description:
      "End-to-end web application development from database design to polished frontend interfaces.",
    icon: "🚀",
    features: [
      "Complete web solutions",
      "Scalable architecture",
      "API integration",
    ],
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Pixel-perfect, responsive UIs with modern frameworks and animations.",
    icon: "🎨",
    features: ["React & Next.js", "Responsive design", "Performance optimized"],
  },
  {
    id: 3,
    title: "Backend Development",
    description:
      "Robust, secure server-side solutions with clean API architecture.",
    icon: "⚙️",
    features: ["Node.js & Express", "RESTful APIs", "Authentication systems"],
  },
  {
    id: 4,
    title: "Next.js Development",
    description:
      "High-performance Next.js applications with SSR, SSG, and App Router.",
    icon: "▲",
    features: ["App Router", "SSR & SSG", "SEO optimized"],
  },
  {
    id: 5,
    title: "Node.js API Development",
    description:
      "Scalable RESTful APIs and microservices with Node.js and Express.",
    icon: "🔗",
    features: ["REST API design", "Middleware setup", "Error handling"],
  },
  {
    id: 6,
    title: "Database Design",
    description: "Efficient database schemas and query optimization for SQL and NoSQL.",
    icon: "🗄️",
    features: ["PostgreSQL", "MongoDB", "Query optimization"],
  },
  {
    id: 7,
    title: "REST API Integration",
    description:
      "Seamless third-party API integrations and webhook implementations.",
    icon: "🔌",
    features: ["Third-party APIs", "Webhooks", "API documentation"],
  },
  {
    id: 8,
    title: "Website Optimization",
    description:
      "Performance auditing and optimization for faster load times and better scores.",
    icon: "⚡",
    features: [
      "Core Web Vitals",
      "Bundle optimization",
      "Caching strategies",
    ],
  },
  {
    id: 9,
    title: "Dashboard Development",
    description:
      "Feature-rich admin dashboards and analytics panels with real-time data.",
    icon: "📊",
    features: ["Data visualization", "Real-time updates", "Admin panels"],
  },
];

export const stats: Stat[] = [
  { id: 1, value: 2.5, suffix: "+", label: "Years Experience", icon: "📅" },
  { id: 2, value: 8, suffix: "+", label: "Projects Completed", icon: "🚀" },
  { id: 3, value: 15, suffix: "+", label: "Technologies Used", icon: "⚡" },
  { id: 4, value: 95, suffix: "%", label: "Client Satisfaction", icon: "⭐" },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Shariq",
    role: "Client",
    company: "University Portal",
    content:
      "Mujtaba built our university portal from scratch and delivered exactly what we needed. The role-based access control, student and faculty management — everything works flawlessly. His code is clean and well-structured. Highly recommended!",
    avatar: "SH",
    rating: 5,
  },
  {
    id: 2,
    name: "Yasir",
    role: "Client",
    company: "Adala – adala.com.kw",
    content:
      "We needed a bilingual legal platform with Arabic RTL support and Mujtaba delivered beyond our expectations. The site is fast, professional, and works perfectly across all devices. Great communication throughout the project.",
    avatar: "YS",
    rating: 5,
  },
  {
    id: 3,
    name: "Ali",
    role: "Client",
    company: "Burewala Rice Mills",
    content:
      "Our corporate website looks absolutely professional. Mujtaba understood our brand and created a site that showcases our products and export capabilities perfectly. The design is clean and loads very fast.",
    avatar: "AL",
    rating: 5,
  },
  {
    id: 4,
    name: "Umar",
    role: "Client",
    company: "Healing Hands – healinghands.pk",
    content:
      "The clinic website Mujtaba built for us has transformed how patients find and contact us. The service pages, appointment section, and testimonials all look amazing. We've seen a big increase in online inquiries since launch.",
    avatar: "UM",
    rating: 5,
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Next.js 15 Best Practices",
    excerpt:
      "Explore the latest features and best practices for building production-ready applications with Next.js 15 App Router.",
    category: "Next.js",
    readTime: "8 min read",
    date: "Jun 10, 2026",
    image: "/blog/nextjs.svg",
    slug: "nextjs-15-best-practices",
  },
  {
    id: 2,
    title: "Node.js API Development Guide",
    excerpt:
      "A comprehensive guide to building scalable, secure RESTful APIs with Node.js and Express.js from scratch.",
    category: "Node.js",
    readTime: "10 min read",
    date: "May 25, 2026",
    image: "/blog/nodejs.svg",
    slug: "nodejs-api-development",
  },
  {
    id: 3,
    title: "React Performance Optimization",
    excerpt:
      "Master React performance optimization techniques including memoization, lazy loading, and bundle splitting.",
    category: "React",
    readTime: "7 min read",
    date: "May 12, 2026",
    image: "/blog/react.svg",
    slug: "react-performance-optimization",
  },
  {
    id: 4,
    title: "TypeScript Tips & Tricks",
    excerpt:
      "Level up your TypeScript skills with advanced types, utility types, and patterns used by senior developers.",
    category: "TypeScript",
    readTime: "6 min read",
    date: "Apr 30, 2026",
    image: "/blog/typescript.svg",
    slug: "typescript-tips-and-tricks",
  },
];
