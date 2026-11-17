"use client";

import { motion } from "framer-motion";
import {
  FaLayerGroup, FaBolt, FaCubes, FaMobileAlt,
  FaCheckCircle, FaArrowRight,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeader from "@/components/ui/SectionHeader";

const highlights = [
  {
    icon: FaLayerGroup,
    color: "#818cf8",
    bg: "bg-indigo-500/10 border-indigo-500/20",
    label: "Full Stack Development",
    desc: "End-to-end web solutions",
  },
  {
    icon: FaBolt,
    color: "#fbbf24",
    bg: "bg-amber-500/10 border-amber-500/20",
    label: "Performance Optimization",
    desc: "Fast, scalable apps",
  },
  {
    icon: FaCubes,
    color: "#34d399",
    bg: "bg-emerald-500/10 border-emerald-500/20",
    label: "Clean Architecture",
    desc: "Maintainable codebase",
  },
  {
    icon: FaMobileAlt,
    color: "#60a5fa",
    bg: "bg-blue-500/10 border-blue-500/20",
    label: "Responsive Design",
    desc: "All devices, pixel-perfect",
  },
];

const facts = [
  { label: "Core Stack", value: "Next.js 16, React 19, TypeScript" },
  { label: "Backend & DB", value: "Node.js, PostgreSQL, REST APIs" },
  { label: "Performance", value: "95+ Lighthouse, Sub-second TTFB" },
  { label: "Agency Ready", value: "White-label & overflow capacity" },
  { label: "Turnaround", value: "Rapid sprints (48h - 14 days)" },
  { label: "Communication", value: "Fluent English, async & real-time" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          badge="Engineering & Capabilities"
          title="Full-Stack"
          highlight="Partner"
          description="High-performance web architecture, robust Next.js systems, and dedicated agency capacity."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Left: visual card ── */}
          <AnimatedSection direction="left">
            <div className="space-y-4">
              {/* Profile card */}
              <div className="relative bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-600/8 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/8 rounded-full blur-3xl" />

                <div className="relative text-center py-4">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-indigo-800 flex items-center justify-center text-white font-black text-2xl shadow-xl shadow-indigo-500/25 ring-1 ring-white/20 mb-4 tracking-wider">
                    MT
                  </div>
                  <h3 className="text-white text-lg font-bold">Muhammad Mujtaba Tahir</h3>
                  <p className="gradient-text font-semibold text-sm mt-1">Full-Stack Engineer &amp; Agency Partner</p>
                  <div className="flex items-center justify-center gap-2 mt-2.5 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400/90 font-medium">Available for New Projects &amp; White-Label</span>
                  </div>
                </div>

                {/* Code snippet */}
                <div className="relative mt-3 bg-black/40 rounded-xl p-4 font-mono text-[12px] border border-white/[0.08]">
                  <div className="flex items-center justify-between mb-3 border-b border-white/[0.06] pb-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-gray-500 text-[11px]">engineer.config.ts</span>
                  </div>
                  <div className="space-y-1 text-left text-[11.5px]">
                    <p><span className="text-blue-400">export const</span> <span className="text-indigo-300">partner</span> <span className="text-gray-500">= {"{"}</span></p>
                    <p className="pl-4"><span className="text-purple-400">specialization</span><span className="text-gray-500">:</span> <span className="text-emerald-300">&quot;Full-Stack Next.js 16 &amp; React 19&quot;</span><span className="text-gray-500">,</span></p>
                    <p className="pl-4"><span className="text-purple-400">delivery</span><span className="text-gray-500">:</span> <span className="text-cyan-300">&quot;95+ Lighthouse • Sub-Second TTFB&quot;</span><span className="text-gray-500">,</span></p>
                    <p className="pl-4"><span className="text-purple-400">whiteLabelReady</span><span className="text-gray-500">:</span> <span className="text-emerald-400">true</span><span className="text-gray-500">,</span></p>
                    <p className="pl-4"><span className="text-purple-400">contractType</span><span className="text-gray-500">:</span> [<span className="text-amber-300">&quot;Agency Overflow&quot;</span><span className="text-gray-500">,</span> <span className="text-amber-300">&quot;Direct Build&quot;</span>]</p>
                    <p><span className="text-gray-500">{"}"}</span></p>
                  </div>
                </div>
              </div>

              {/* Highlight grid */}
              <div className="grid grid-cols-2 gap-3">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -3 }}
                      transition={{ delay: 0.08 * i }}
                      viewport={{ once: true }}
                      className={`rounded-xl p-4 border ${item.bg} transition-all cursor-default`}
                    >
                      <Icon size={18} color={item.color} className="mb-2" />
                      <p className="text-white text-xs font-semibold leading-tight">{item.label}</p>
                      <p className="text-gray-500 text-[11px] mt-0.5">{item.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* ── Right: text ── */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white leading-snug">
                Full-Stack Engineer with a Focus on{" "}
                <span className="gradient-text">Measurable Business Impact</span>
              </h3>

              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  I specialize in{" "}
                  <span className="text-indigo-400 font-medium">React 19</span>,{" "}
                  <span className="text-purple-400 font-medium">Next.js 16 (App Router)</span>,{" "}
                  <span className="text-cyan-400 font-medium">TypeScript</span>, and{" "}
                  <span className="text-indigo-300 font-medium">Node.js</span> — engineering
                  high-converting, responsive web applications with sub-second page loads and zero layout shift.
                </p>
                <p>
                  Whether serving as an external engineering partner for digital marketing agencies needing white-label development capacity, or building custom interactive platforms directly for high-ticket businesses, I bring rigorous code standards and reliable milestone delivery.
                </p>
                <p>
                  From complex interactive calculators and state-driven funnels to headless integrations and enterprise PostgreSQL backends, I own the full engineering lifecycle from Figma to production.
                </p>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.02] border border-white/[0.05]"
                  >
                    <FaCheckCircle size={12} className="text-indigo-400 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-gray-600 text-[11px]">{f.label}</p>
                      <p className="text-gray-200 text-xs font-medium truncate">{f.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:from-indigo-500 hover:to-purple-500 transition-all"
              >
                Download Resume
                <FaArrowRight size={12} />
              </motion.a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
