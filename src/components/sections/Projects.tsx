"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaGithub, FaExternalLinkAlt, FaArrowRight,
  FaBalanceScale, FaUsers, FaHandHoldingHeart,
  FaLeaf, FaUniversity, FaShoppingCart,
  FaStore, FaWallet,
} from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects } from "@/lib/data";

const CATEGORIES = ["All", "Full Stack", "Frontend"];

interface ProjectVisual {
  icon: IconType;
  iconColor: string;
  gradient: string;
}

const PROJECT_VISUALS: Record<number, ProjectVisual> = {
  1: { icon: FaBalanceScale,    iconColor: "#fbbf24", gradient: "from-amber-900/50 to-yellow-900/40"   },
  2: { icon: FaUsers,           iconColor: "#34d399", gradient: "from-emerald-900/50 to-green-900/40"  },
  3: { icon: FaHandHoldingHeart,iconColor: "#f472b6", gradient: "from-pink-900/50 to-rose-900/40"      },
  4: { icon: FaLeaf,            iconColor: "#86efac", gradient: "from-green-900/50 to-teal-900/40"     },
  5: { icon: FaUniversity,      iconColor: "#818cf8", gradient: "from-indigo-900/50 to-purple-900/40"  },
  6: { icon: FaShoppingCart,    iconColor: "#f472b6", gradient: "from-purple-900/50 to-pink-900/40"    },
  7: { icon: FaStore,           iconColor: "#38bdf8", gradient: "from-cyan-900/50 to-blue-900/40"      },
  8: { icon: FaWallet,          iconColor: "#fbbf24", gradient: "from-amber-900/50 to-orange-900/40"   },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          badge="Featured Work"
          title="My"
          highlight="Projects"
          description="Real-world projects — from SaaS platforms to corporate sites"
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
                className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/[0.03] border border-white/[0.07] text-gray-400 hover:text-white hover:border-indigo-500/25"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-[11px] opacity-60">
                    ({projects.filter(p => p.category === cat).length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((project, idx) => {
              const vis = PROJECT_VISUALS[project.id] ?? PROJECT_VISUALS[5];
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
                >
                  <div className="group bg-white/[0.02] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-indigo-500/30 transition-all card-hover h-full flex flex-col">

                    {/* Thumbnail */}
                    <div className={`relative h-44 bg-gradient-to-br ${vis.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                      <div className="absolute inset-0 grid-bg opacity-20" />

                      {/* Live badge */}
                      {isLive && (
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium z-10">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Live
                        </div>
                      )}

                      {/* Category badge */}
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white text-[11px] font-medium z-10">
                        {project.category}
                      </div>

                      {/* Icon */}
                      <motion.div
                        whileHover={{ scale: 1.12, rotate: 4 }}
                        transition={{ type: "spring", stiffness: 280 }}
                        className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `${vis.iconColor}18`,
                          border: `1px solid ${vis.iconColor}35`,
                        }}
                      >
                        <Icon size={30} color={vis.iconColor} />
                      </motion.div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/65 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-20">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-medium hover:bg-white/20 transition-colors"
                          >
                            <FaGithub size={13} />
                            Code
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600/80 border border-indigo-400/30 text-white text-xs font-medium hover:bg-indigo-500 transition-colors"
                          >
                            <FaExternalLinkAlt size={11} />
                            Live Site
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <h3 className="text-white font-semibold text-[15px] leading-tight">{project.title}</h3>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 text-gray-600 hover:text-indigo-400 transition-colors mt-0.5"
                          >
                            <FaExternalLinkAlt size={12} />
                          </a>
                        )}
                      </div>

                      <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-1.5 mb-4 flex-1">
                        {project.features.slice(0, 6).map((feat) => (
                          <div key={feat} className="flex items-center gap-1.5 text-gray-500 text-[11px]">
                            <span
                              className="w-1 h-1 rounded-full flex-shrink-0"
                              style={{ background: vis.iconColor }}
                            />
                            {feat}
                          </div>
                        ))}
                      </div>

                      {/* Tech + live link */}
                      <div className="flex items-center justify-between gap-2 flex-wrap mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="px-2 py-0.5 rounded-md text-[11px] font-medium border"
                              style={{
                                background: `${vis.iconColor}10`,
                                borderColor: `${vis.iconColor}28`,
                                color: vis.iconColor,
                              }}
                            >
                              {t}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 py-0.5 rounded-md text-[11px] text-gray-600 border border-white/5">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-indigo-400 text-[11px] font-medium hover:text-indigo-300 transition-colors group/link"
                          >
                            View
                            <FaArrowRight size={9} className="transition-transform group-hover/link:translate-x-0.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <AnimatedSection direction="up" delay={0.3} className="text-center mt-12">
          <motion.a
            href="https://github.com/Muji47"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-300 text-sm font-medium hover:border-indigo-500/30 hover:text-white transition-all"
          >
            <FaGithub size={15} />
            View More on GitHub
            <FaArrowRight size={11} />
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
}
