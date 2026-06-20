"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { IconType } from "react-icons";
import {
  SiHtml5, SiCss, SiSass, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiGatsby, SiNodedotjs, SiExpress,
  SiPostgresql, SiMongodb, SiSqlite, SiTailwindcss,
  SiAntdesign, SiMui, SiRedux, SiGit, SiGithub,
  SiPostman, SiVercel,
} from "react-icons/si";
import {
  FaCode, FaServer, FaDatabase, FaPalette, FaSyncAlt,
  FaTools, FaPlug, FaShieldAlt, FaKey, FaExchangeAlt,
} from "react-icons/fa";
import { MdOutlineApi } from "react-icons/md";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { skillCategories } from "@/lib/data";

/* ── Icon registry ──────────────────────────────────────────────── */
const SKILL_ICONS: Record<string, { icon: IconType; color: string }> = {
  html5:        { icon: SiHtml5,            color: "#e34f26" },
  css3:         { icon: SiCss,              color: "#264de4" },
  sass:         { icon: SiSass,             color: "#cc6699" },
  javascript:   { icon: SiJavascript,       color: "#f7df1e" },
  typescript:   { icon: SiTypescript,       color: "#3178c6" },
  react:        { icon: SiReact,            color: "#61dafb" },
  nextjs:       { icon: SiNextdotjs,        color: "#ffffff" },
  gatsby:       { icon: SiGatsby,           color: "#663399" },
  nodejs:       { icon: SiNodedotjs,        color: "#539e43" },
  express:      { icon: SiExpress,          color: "#ffffff" },
  api:          { icon: MdOutlineApi,       color: "#818cf8" },
  auth:         { icon: FaShieldAlt,        color: "#34d399" },
  jwt:          { icon: FaKey,              color: "#fbbf24" },
  integration:  { icon: FaExchangeAlt,      color: "#38bdf8" },
  postgresql:   { icon: SiPostgresql,       color: "#336791" },
  mongodb:      { icon: SiMongodb,          color: "#47a248" },
  sqlite:       { icon: SiSqlite,           color: "#003b57" },
  tailwind:     { icon: SiTailwindcss,      color: "#38bdf8" },
  antd:         { icon: SiAntdesign,        color: "#1890ff" },
  mui:          { icon: SiMui,              color: "#007fff" },
  redux:        { icon: SiRedux,            color: "#764abc" },
  context:      { icon: SiReact,            color: "#61dafb" },
  git:          { icon: SiGit,              color: "#f05032" },
  github:       { icon: SiGithub,           color: "#ffffff" },
  postman:      { icon: SiPostman,          color: "#ff6c37" },
  vscode:       { icon: FaCode,             color: "#007acc" },
  vercel:       { icon: SiVercel,           color: "#ffffff" },
  plug:         { icon: FaPlug,             color: "#818cf8" },
};

const CATEGORY_ICONS: Record<string, { icon: IconType; color: string }> = {
  Frontend:         { icon: FaCode,      color: "#818cf8" },
  Backend:          { icon: FaServer,    color: "#34d399" },
  Databases:        { icon: FaDatabase,  color: "#60a5fa" },
  "UI Frameworks":  { icon: FaPalette,   color: "#f472b6" },
  "State Management": { icon: FaSyncAlt, color: "#fb923c" },
  Tools:            { icon: FaTools,     color: "#a78bfa" },
};

function SkillIcon({ iconKey }: { iconKey: string }) {
  const entry = SKILL_ICONS[iconKey];
  if (!entry) return <FaCode size={14} color="#818cf8" />;
  const Icon = entry.icon;
  return <Icon size={15} color={entry.color} />;
}

function CategoryIcon({ category }: { category: string }) {
  const entry = CATEGORY_ICONS[category];
  if (!entry) return <FaCode size={18} color="#818cf8" />;
  const Icon = entry.icon;
  return <Icon size={18} color={entry.color} />;
}

function SkillBar({ level, inView }: { level: number; inView: boolean }) {
  return (
    <div className="skill-bar mt-2">
      <motion.div
        className="skill-fill"
        initial={{ width: 0 }}
        animate={{ width: inView ? `${level}%` : 0 }}
        transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
      />
    </div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  const filtered = activeCategory
    ? skillCategories.filter((c) => c.category === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          badge="Technical Skills"
          title="My"
          highlight="Expertise"
          description="A comprehensive skill set spanning the full web development stack"
        />

        {/* Filter tabs */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                !activeCategory
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:border-indigo-500/30"
              }`}
            >
              <FaCode size={11} />
              All Skills
            </button>

            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.category;
              const catEntry = CATEGORY_ICONS[cat.category];
              const CatIcon = catEntry?.icon ?? FaCode;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(isActive ? null : cat.category)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                      : "bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white hover:border-indigo-500/30"
                  }`}
                >
                  <CatIcon size={11} color={isActive ? "#fff" : catEntry?.color} />
                  {cat.category}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div ref={ref} className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 py-5">
          {filtered.map((category, catIdx) => (
            <AnimatedSection key={category.category} direction="up" delay={catIdx * 0.08}>
              <div className="bg-white/[0.02] rounded-2xl p-6 border border-white/[0.06] hover:border-indigo-500/30 transition-all card-hover h-full">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.05]">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center">
                    <CategoryIcon category={category.category} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{category.category}</h3>
                    <p className="text-gray-600 text-xs mt-0.5">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2.5">
                          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                            <SkillIcon iconKey={skill.icon} />
                          </div>
                          <span className="text-gray-300 text-[13px] font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-600 text-[11px] font-mono tabular-nums">
                          {skill.level}%
                        </span>
                      </div>
                      <SkillBar level={skill.level} inView={inView} />
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Tech cloud */}
        <AnimatedSection direction="up" delay={0.3} className="mt-16">
          <p className="text-center text-gray-600 text-xs uppercase tracking-widest mb-5">
            Technologies I use daily
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {[
              { label: "Next.js",       iconKey: "nextjs" },
              { label: "React",         iconKey: "react" },
              { label: "TypeScript",    iconKey: "typescript" },
              { label: "Node.js",       iconKey: "nodejs" },
              { label: "Express.js",    iconKey: "express" },
              { label: "PostgreSQL",    iconKey: "postgresql" },
              { label: "MongoDB",       iconKey: "mongodb" },
              { label: "Tailwind CSS",  iconKey: "tailwind" },
              { label: "Redux Toolkit", iconKey: "redux" },
              { label: "Git",           iconKey: "git" },
              { label: "GitHub",        iconKey: "github" },
              { label: "Vercel",        iconKey: "vercel" },
              { label: "VS Code",       iconKey: "vscode" },
              { label: "Postman",       iconKey: "postman" },
            ].map((item, i) => {
              const entry = SKILL_ICONS[item.iconKey];
              const Icon = entry?.icon ?? FaCode;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-2 px-3.5 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl text-gray-300 text-[13px] cursor-default hover:border-indigo-500/30 transition-colors"
                >
                  <Icon size={13} color={entry?.color ?? "#818cf8"} />
                  {item.label}
                </motion.div>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
