"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb,
  SiPrisma, SiRedis, SiVercel, SiGit, SiDocker,
  SiPostman, SiFramer
} from "react-icons/si";
import { FaBolt, FaServer, FaDatabase, FaRocket } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { skillCategories } from "@/lib/data";

const TECH_ICONS: Record<string, { icon: any; color: string }> = {
  nextjs:      { icon: SiNextdotjs,    color: "#ffffff" },
  react:       { icon: SiReact,        color: "#61dafb" },
  typescript:  { icon: SiTypescript,   color: "#3178c6" },
  tailwind:    { icon: SiTailwindcss,  color: "#38bdf8" },
  framer:      { icon: SiFramer,       color: "#f43f5e" },
  redux:       { icon: SiReact,        color: "#764abc" },
  nodejs:      { icon: SiNodedotjs,    color: "#539e43" },
  express:     { icon: SiExpress,      color: "#ffffff" },
  api:         { icon: FaBolt,         color: "#fbbf24" },
  auth:        { icon: FaBolt,         color: "#34d399" },
  integration: { icon: FaBolt,         color: "#38bdf8" },
  postgresql:  { icon: SiPostgresql,   color: "#336791" },
  mongodb:     { icon: SiMongodb,      color: "#47a248" },
  prisma:      { icon: SiPrisma,       color: "#ffffff" },
  redis:       { icon: SiRedis,        color: "#dc2626" },
  vercel:      { icon: SiVercel,       color: "#ffffff" },
  speed:       { icon: FaBolt,         color: "#10b981" },
  git:         { icon: SiGit,          color: "#f05032" },
  docker:      { icon: SiDocker,       color: "#2496ed" },
};

const CATEGORY_ICONS: Record<string, any> = {
  "Frontend Architecture": FaBolt,
  "Backend & Systems": FaServer,
  "Databases & Storage": FaDatabase,
  "Deployment & Quality": FaRocket,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? skillCategories.filter((c) => c.category === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="py-24 bg-[#090d16] text-white relative overflow-hidden border-b border-slate-900">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeader
          badge="Production Capabilities"
          title="Technical"
          highlight="Stack & Architecture"
          description="Enterprise-grade tools and frameworks I use to build scalable, sub-second web applications."
        />

        {/* Filter tabs */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                !activeCategory
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              All Domains
            </button>

            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.category;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(isActive ? null : cat.category)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                      : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((cat, idx) => {
            const CatIcon = CATEGORY_ICONS[cat.category] || FaBolt;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-6 sm:p-7 backdrop-blur-md hover:border-slate-700 transition duration-200"
              >
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-800/80 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-emerald-400">
                    <CatIcon size={18} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-white">{cat.category}</h3>
                    <p className="text-[11px] text-slate-400">Core Production Frameworks & Tools</p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="grid grid-cols-2 gap-3">
                  {cat.skills.map((skill) => {
                    const iconMeta = TECH_ICONS[skill.icon];
                    const IconComponent = iconMeta?.icon || FaBolt;
                    return (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/40 hover:bg-slate-900 transition"
                      >
                        <div className="text-base flex-shrink-0" style={{ color: iconMeta?.color || "#10b981" }}>
                          <IconComponent />
                        </div>
                        <span className="text-xs font-semibold text-slate-200 truncate">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
            <span className="text-emerald-400">✓</span>
            <span>Clean modular code, zero console errors, full TypeScript type-safety, and strict ESLint hygiene.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
