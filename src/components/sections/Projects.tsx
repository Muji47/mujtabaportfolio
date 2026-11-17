"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaBolt, FaShieldAlt, FaChartLine, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects } from "@/lib/data";

const CATEGORIES = ["All Systems", "Commercial Trade", "SaaS & Web App", "Enterprise System"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Systems");

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All Systems") return true;
    if (activeCategory === "Commercial Trade") return p.category === "Commercial Trade";
    if (activeCategory === "SaaS & Web App") return p.category === "SaaS Platform";
    if (activeCategory === "Enterprise System") return p.category === "Full Stack" || p.category === "Enterprise System";
    return true;
  });

  return (
    <section id="projects" className="py-28 md:py-36 relative overflow-hidden bg-[#09090b]">
      {/* Subtle Ambient Lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          badge="Production Case Studies"
          title="Flagship"
          highlight="Engineering Builds"
          description="High-converting web applications, custom interactive calculators, and scalable full-stack architectures delivered to production."
        />

        {/* ── Category Filter Pills with Generous Padding ── */}
        <AnimatedSection direction="up" delay={0.15}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-white text-zinc-950 shadow-lg shadow-white/5"
                      : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* ── Projects Grid ── */}
        <div className="space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isVoltSolar = project.id === 1;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 sm:p-10 hover:border-zinc-700 transition-all duration-300 shadow-2xl overflow-hidden group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left: Project Details & Value Metrics */}
                    <div className="lg:col-span-7 space-y-6">

                      {/* Header Badges with Generous Padding */}
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Production Proven
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/60 text-zinc-300 text-xs font-medium">
                          {project.category}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mt-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Key Engineering Features */}
                      <div className="space-y-2.5 pt-2">
                        {project.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                            <FaCheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={13} />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Pills with Generous Padding */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3.5 py-1.5 rounded-xl border border-zinc-800 bg-zinc-950/70 text-zinc-300 text-xs font-mono font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons with Generous Padding */}
                      <div className="flex flex-wrap items-center gap-3.5 pt-4">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-all shadow-md shadow-white/5 cursor-pointer"
                          >
                            <span>Launch Live Platform</span>
                            <FaExternalLinkAlt size={10} />
                          </a>
                        )}

                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 font-medium text-xs hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
                          >
                            <FaGithub size={12} />
                            <span>Source Architecture</span>
                          </a>
                        )}
                      </div>

                    </div>

                    {/* Right: Visual System Blueprint Card */}
                    <div className="lg:col-span-5">
                      <div className="rounded-2xl border border-white/10 bg-zinc-950/90 p-6 sm:p-7 space-y-5 relative overflow-hidden shadow-2xl">
                        {/* Top Bar */}
                        <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                          <span className="text-xs font-mono text-zinc-400">spec.output.verified</span>
                          <span className="text-xs font-mono font-semibold text-emerald-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            Pass 100%
                          </span>
                        </div>

                        {/* Highlight Metrics */}
                        {isVoltSolar ? (
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20">
                              <div className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                                Sub-Second Edge Delivery
                              </div>
                              <div className="text-2xl font-black text-white font-mono mt-1">
                                0.026s TTFB
                              </div>
                              <div className="text-xs text-zinc-400 mt-1">
                                490x faster than legacy Australian installer sites (12.92s average)
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                <div className="text-[11px] text-zinc-400">Rebate Engine</div>
                                <div className="text-sm font-bold text-white mt-0.5">Clean Energy STC</div>
                              </div>
                              <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                <div className="text-[11px] text-zinc-400">Mobile Conversion</div>
                                <div className="text-sm font-bold text-white mt-0.5">Sticky 1-Tap CTA</div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                              <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
                                System Throughput
                              </div>
                              <div className="text-2xl font-black text-white font-mono mt-1">
                                99.9% Uptime
                              </div>
                              <div className="text-xs text-zinc-400 mt-1">
                                Fully typed TypeScript endpoints with automated schema validation
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                <div className="text-[11px] text-zinc-400">Security</div>
                                <div className="text-sm font-bold text-white mt-0.5">Role-Based Auth</div>
                              </div>
                              <div className="p-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                                <div className="text-[11px] text-zinc-400">Database</div>
                                <div className="text-sm font-bold text-white mt-0.5">PostgreSQL / Prisma</div>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="text-[11px] font-mono text-zinc-400 text-center pt-2">
                          Production Ready · Full Figma &amp; API Mapping
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
