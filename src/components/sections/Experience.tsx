"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaBriefcase } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 md:py-36 relative overflow-hidden bg-[#09090b]">
      {/* Background Subtle Mesh */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-5xl mx-auto">
        <SectionHeader
          badge="Track Record"
          title="Professional Journey &amp;"
          highlight="Experience"
          description="A history of reliable software delivery, high-performance web systems, and technical partnerships."
        />

        {/* ── Experience Timeline ── */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const isCurrent = idx === 0;

            return (
              <AnimatedSection key={exp.id} direction="up" delay={idx * 0.1}>
                <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 sm:p-10 hover:border-zinc-700 transition-all shadow-2xl">
                  
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800/80 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {exp.role}
                        </span>
                        {isCurrent && (
                          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Active Partner
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400">
                        <span className="font-semibold text-zinc-200">{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <FaMapMarkerAlt size={11} className="text-emerald-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-950/70 text-zinc-300 text-xs font-mono font-medium self-start sm:self-auto">
                      <FaCalendarAlt size={11} className="text-zinc-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3 mb-8">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <FaCheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={12} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills with Generous Padding */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/80">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3.5 py-1.5 rounded-xl border border-zinc-800 bg-zinc-950/80 text-zinc-300 text-xs font-mono font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              </AnimatedSection>
            );
          })}
        </div>

      </div>
    </section>
  );
}
