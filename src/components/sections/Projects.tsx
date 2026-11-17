"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaGithub, FaExternalLinkAlt, FaArrowRight,
  FaSun, FaUsers, FaBalanceScale,
  FaHandHoldingHeart, FaLeaf, FaUniversity,
} from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects, profileLinks } from "@/lib/data";

const CATEGORIES = ["All", "Full Stack", "Frontend"];

interface ProjectVisual {
  icon: IconType;
  iconColor: string;
  gradient: string;
}

const PROJECT_VISUALS: Record<number, ProjectVisual> = {
  1: { icon: FaSun,               iconColor: "#f59e0b", gradient: "from-amber-950/60 to-emerald-950/60" },
  2: { icon: FaUsers,             iconColor: "#34d399", gradient: "from-emerald-950/60 to-slate-900/60"  },
  3: { icon: FaBalanceScale,      iconColor: "#818cf8", gradient: "from-indigo-950/60 to-slate-900/60"   },
  4: { icon: FaHandHoldingHeart,  iconColor: "#f472b6", gradient: "from-pink-950/60 to-slate-900/60"     },
  5: { icon: FaLeaf,              iconColor: "#86efac", gradient: "from-teal-950/60 to-slate-900/60"     },
  6: { icon: FaUniversity,        iconColor: "#a78bfa", gradient: "from-purple-950/60 to-slate-900/60"   },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-[#070a12] text-white relative overflow-hidden border-b border-slate-900">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <SectionHeader
          badge="Featured Engineering Work"
          title="Production"
          highlight="Case Studies"
          description="High-performance web applications, interactive conversion funnels, and enterprise systems."
        />

        {/* Filters */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="flex gap-2 justify-center mb-12 flex-wrap">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20"
                    : "bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-[11px] opacity-70">
                    ({projects.filter(p => p.category === cat).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, idx) => {
              const vis = PROJECT_VISUALS[project.id] ?? PROJECT_VISUALS[1];
              const Icon = vis.icon;
              const isLive = !!project.live;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.93, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.93 }}
                  transition={{ duration: 0.28, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <div className="group bg-slate-950/70 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-200 h-full flex flex-col justify-between backdrop-blur-md">

                    <div>
                      {/* Thumbnail & Header Banner */}
                      <div className={`relative h-44 bg-gradient-to-br ${vis.gradient} flex items-center justify-center overflow-hidden flex-shrink-0 border-b border-slate-800/60`}>
                        {/* Live badge */}
                        {isLive && (
                          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-[11px] font-bold z-10">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Live System
                          </div>
                        )}

                        {/* Category badge */}
                        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-slate-950/70 backdrop-blur-sm border border-slate-800 text-slate-300 text-[11px] font-semibold z-10">
                          {project.category}
                        </div>

                        {/* Center Icon */}
                        <div
                          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl"
                          style={{
                            background: `${vis.iconColor}20`,
                            border: `1px solid ${vis.iconColor}40`,
                          }}
                        >
                          <Icon size={30} color={vis.iconColor} />
                        </div>

                        {/* Live Link Overlay */}
                        {project.live && (
                          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-20">
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 text-slate-950 text-xs font-bold hover:bg-emerald-400 transition"
                            >
                              <FaExternalLinkAlt size={10} />
                              Open Live Platform
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="text-white font-extrabold text-base leading-tight group-hover:text-emerald-400 transition">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-slate-400 text-xs leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Features List */}
                        {project.features && (
                          <ul className="space-y-1 mb-5 text-[11px] text-slate-300">
                            {project.features.slice(0, 3).map((f, i) => (
                              <li key={i} className="flex items-center gap-1.5">
                                <span className="text-emerald-400 text-xs">✓</span>
                                <span>{f}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>

                    {/* Tech Tags Bottom Footer */}
                    <div className="p-6 pt-0">
                      <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-[10px] font-mono font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 text-xs mb-3">Have a custom web build or agency overflow project in mind?</p>
          <a
            href={`mailto:${profileLinks.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-emerald-400 hover:text-emerald-300 text-xs font-bold transition"
          >
            <span>Discuss Your Project Scope</span>
            <FaArrowRight size={10} />
          </a>
        </div>

      </div>
    </section>
  );
}
