export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  category: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tech: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  slug: string;
}

export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
}
