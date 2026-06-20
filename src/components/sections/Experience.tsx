"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase, FaMapMarkerAlt, FaCalendarAlt,
  FaGraduationCap, FaCheckCircle,
} from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { experiences } from "@/lib/data";

interface CompanyStyle {
  gradient: string;
  initial: string;
  border: string;
  glow: string;
  tagBg: string;
  tagText: string;
  dotGradient: string;
  dotRing: string;
  labelText: string;
  labelBg: string;
}

const STYLE: Record<string, CompanyStyle> = {
  Alpharages: {
    gradient:  "from-indigo-600 to-purple-600",
    initial:   "A",
    border:    "border-indigo-500/20 hover:border-indigo-500/45",
    glow:      "group-hover:shadow-indigo-500/10",
    tagBg:     "bg-indigo-500/10 border-indigo-500/20",
    tagText:   "text-indigo-300",
    dotGradient: "from-indigo-500 to-purple-500",
    dotRing:   "ring-indigo-500/30",
    labelText: "text-indigo-400",
    labelBg:   "bg-indigo-500/10 border-indigo-500/20",
  },
  Visiomate: {
    gradient:  "from-cyan-500 to-blue-600",
    initial:   "V",
    border:    "border-cyan-500/20 hover:border-cyan-500/45",
    glow:      "group-hover:shadow-cyan-500/10",
    tagBg:     "bg-cyan-500/10 border-cyan-500/20",
    tagText:   "text-cyan-300",
    dotGradient: "from-cyan-500 to-blue-500",
    dotRing:   "ring-cyan-500/30",
    labelText: "text-cyan-400",
    labelBg:   "bg-cyan-500/10 border-cyan-500/20",
  },
};
const DEFAULT_STYLE = STYLE.Alpharages;

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          badge="Work Experience"
          title="My"
          highlight="Journey"
          description="Professional experience building real-world web applications"
        />

        {/* ── Timeline container ── */}
        <div className="relative max-w-5xl mx-auto">

          {/* Centre rail – desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent" />

          {/* ── Experience cards ── */}
          {experiences.map((exp, idx) => {
            const s = STYLE[exp.company] ?? DEFAULT_STYLE;
            const isLeft = idx % 2 === 0;

            return (
              <AnimatedSection
                key={exp.id}
                direction={isLeft ? "left" : "right"}
                delay={0.1 * idx}
              >
                <div className={`relative flex items-start gap-0 mb-8 md:mb-12 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>

                  {/* ── Timeline dot ── */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 * idx }}
                      className={`w-5 h-5 rounded-full bg-gradient-to-br ${s.dotGradient} ring-4 ${s.dotRing} shadow-lg`}
                    />
                  </div>

                  {/* ── Date column (opposite side) ── */}
                  <div className={`hidden md:flex flex-1 ${isLeft ? "justify-end pr-12" : "justify-start pl-12"} pt-7`}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + 0.1 * idx }}
                      className="text-right"
                    >
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${s.labelBg} ${s.labelText}`}>
                        <FaCalendarAlt size={10} />
                        {exp.period}
                      </div>
                      {idx === 0 && (
                        <div className="mt-2 flex items-center justify-end gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-emerald-400 text-[11px] font-medium">Currently here</span>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* ── Card ── */}
                  <div className={`flex-1 md:max-w-[calc(50%-32px)] ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div className={`group relative bg-white/[0.025] rounded-2xl border ${s.border} transition-all duration-300 overflow-hidden hover:shadow-xl ${s.glow}`}>

                      {/* Top accent bar */}
                      <div className={`h-1 w-full bg-gradient-to-r ${s.gradient}`} />

                      <div className="p-5 sm:p-6">
                        {/* Mobile date */}
                        <div className={`md:hidden inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-medium mb-3 ${s.labelBg} ${s.labelText}`}>
                          <FaCalendarAlt size={9} />
                          {exp.period}
                          {idx === 0 && <span className="ml-1 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />}
                        </div>

                        {/* Card header */}
                        <div className="flex items-start gap-4 mb-5">
                          {/* Company logo badge */}
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white font-black text-lg flex-shrink-0 shadow-lg`}>
                            {s.initial}
                          </div>

                          <div className="flex-1 min-w-0">
                            <h3 className="text-white font-bold text-base leading-tight">{exp.role}</h3>
                            <p className={`font-semibold text-sm mt-0.5 ${s.labelText}`}>{exp.company}</p>
                            <div className="flex items-center gap-1 mt-1 text-gray-600 text-[11px]">
                              <FaMapMarkerAlt size={9} />
                              {exp.location}
                            </div>
                          </div>

                          <div className={`hidden sm:flex w-8 h-8 rounded-xl border flex-shrink-0 items-center justify-center ${s.tagBg}`}>
                            <FaBriefcase size={13} className={s.labelText} />
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/[0.05] mb-4" />

                        {/* Responsibilities */}
                        <ul className="space-y-2.5 mb-5">
                          {exp.description.map((item, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -6 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.05 * i }}
                              viewport={{ once: true }}
                              className="flex gap-2.5 text-gray-400 text-[13px] leading-relaxed"
                            >
                              <FaCheckCircle size={11} className={`mt-0.5 flex-shrink-0 ${s.labelText} opacity-70`} />
                              {item}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Tech stack */}
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <span
                              key={t}
                              className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium ${s.tagBg} ${s.tagText}`}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}

          {/* ── Education card – centred ── */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="relative flex justify-center">
              {/* Rail dot */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 -top-2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
                  className="w-5 h-5 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 ring-4 ring-emerald-500/25 shadow-lg"
                />
              </div>

              <div className="w-full md:max-w-md">
                <div className="group relative bg-white/[0.025] rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-emerald-500/8">
                  {/* Top accent */}
                  <div className="h-1 w-full bg-gradient-to-r from-emerald-500 to-teal-500" />

                  <div className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      {/* Icon badge */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <FaGraduationCap size={22} color="#fff" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-white font-bold text-base leading-tight">
                          BS Information Technology
                        </h3>
                        <p className="text-emerald-400 font-semibold text-sm mt-0.5">
                          University of the Punjab
                        </p>
                        <div className="flex items-center gap-1 mt-1 text-gray-600 text-[11px]">
                          <FaCalendarAlt size={9} />
                          2020 – 2024
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-white/[0.05] my-4" />

                    <p className="text-gray-500 text-[13px] leading-relaxed">
                      Studied software engineering, web technologies, databases, and computer
                      networks. Built a strong foundation in full-stack development.
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {["Software Engineering", "Web Technologies", "Databases", "Networking"].map((t) => (
                        <span key={t} className="px-2.5 py-1 rounded-lg bg-emerald-500/8 border border-emerald-500/20 text-emerald-300 text-[11px] font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Timeline end dot */}
          <div className="hidden md:flex justify-center mt-6">
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
        </div>

        {/* Bottom CTA strip */}
        <AnimatedSection direction="up" delay={0.4} className="mt-14">
          <div className="flex items-center justify-center gap-3 text-sm text-gray-500">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/10" />
            <span>Open to new opportunities</span>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              whileHover={{ x: 3 }}
              className="flex items-center gap-1.5 text-indigo-400 font-medium hover:text-indigo-300 transition-colors cursor-pointer"
            >
              Let&apos;s talk <HiArrowRight size={14} />
            </motion.a>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
