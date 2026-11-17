"use client";

import { motion } from "framer-motion";
import {
  FaBolt, FaShieldAlt, FaLayerGroup, FaCheckCircle,
  FaMobileAlt, FaDatabase, FaCode, FaRocket
} from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiPostgresql } from "react-icons/si";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";

const CORE_STACK = [
  { name: "Next.js 16 (App Router)", icon: SiNextdotjs, color: "#ffffff" },
  { name: "React 19", icon: SiReact, color: "#38bdf8" },
  { name: "TypeScript", icon: SiTypescript, color: "#60a5fa" },
  { name: "Tailwind CSS v4", icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Node.js & Express", icon: SiNodedotjs, color: "#4ade80" },
  { name: "PostgreSQL & Prisma", icon: SiPostgresql, color: "#818cf8" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 relative overflow-hidden bg-[#09090b]">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          badge="Technical Matrix"
          title="Engineering Architecture &amp;"
          highlight="Stack Capabilities"
          description="How I architect, engineer, and deliver resilient web applications that convert visitors into revenue."
        />

        {/* ── Modern Bento Grid Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Bento Card 1: Core Stack Engine (Span 7) */}
          <AnimatedSection direction="up" delay={0.1} className="md:col-span-7">
            <div className="h-full rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 sm:p-9 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-white mb-6">
                  <FaLayerGroup size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  Modern Full-Stack Core
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Strictly typed frontend architecture paired with resilient server-side rendering, sub-second Edge caching, and automated state management.
                </p>
              </div>

              {/* Stack Pills with Generous Padding */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                {CORE_STACK.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2.5 px-4 py-3 rounded-2xl border border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 transition-colors"
                    >
                      <Icon size={16} style={{ color: item.color }} className="flex-shrink-0" />
                      <span className="text-xs font-semibold text-zinc-200 truncate">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Bento Card 2: Agency White-Label Delivery (Span 5) */}
          <AnimatedSection direction="up" delay={0.15} className="md:col-span-5">
            <div className="h-full rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 sm:p-9 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
                  <FaShieldAlt size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  Agency White-Label Partner
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Plug-and-play development capacity for design, marketing, and SEO agencies across Australia and internationally.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <FaCheckCircle className="text-emerald-400 flex-shrink-0" size={13} />
                  <span>Figma to pixel-perfect Next.js code within 48h - 7d</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <FaCheckCircle className="text-emerald-400 flex-shrink-0" size={13} />
                  <span>Strict NDA &amp; 100% white-label client confidentiality</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-300">
                  <FaCheckCircle className="text-emerald-400 flex-shrink-0" size={13} />
                  <span>Zero in-house management or recruitment overhead</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bento Card 3: Interactive Calculators & Funnels (Span 5) */}
          <AnimatedSection direction="up" delay={0.2} className="md:col-span-5">
            <div className="h-full rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 sm:p-9 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6">
                  <FaBolt size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  Conversion Funnels &amp; Calculators
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Custom interactive widgets engineered to engage mobile visitors and capture qualified client leads before they bounce.
                </p>
              </div>

              <div className="p-4 rounded-2xl border border-white/[0.06] bg-zinc-950/90 text-xs font-mono space-y-2">
                <div className="text-zinc-400 flex justify-between">
                  <span>Interactive ROI Math:</span>
                  <span className="text-emerald-400 font-bold">3.2x Lead Lift</span>
                </div>
                <div className="text-zinc-400 flex justify-between">
                  <span>Mobile Sticky Quote CTAs:</span>
                  <span className="text-zinc-200">1-Tap Dialing</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Bento Card 4: Verified Core Web Vitals (Span 7) */}
          <AnimatedSection direction="up" delay={0.25} className="md:col-span-7">
            <div className="h-full rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 sm:p-9 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-2xl">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6">
                  <FaRocket size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                  Verified 95+ Core Web Vitals
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  Eliminating render-blocking bloat so your paid Google &amp; Meta ad spend converts without bleeding visitors to 8-second load times.
                </p>
              </div>

              {/* Lighthouse Score Matrix with Generous Padding */}
              <div className="grid grid-cols-4 gap-3 pt-2">
                <div className="p-3 sm:p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/30 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">99</div>
                  <div className="text-[10px] sm:text-xs text-zinc-300 font-medium mt-1">Performance</div>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/30 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100</div>
                  <div className="text-[10px] sm:text-xs text-zinc-300 font-medium mt-1">Accessibility</div>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/30 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100</div>
                  <div className="text-[10px] sm:text-xs text-zinc-300 font-medium mt-1">Best Practices</div>
                </div>
                <div className="p-3 sm:p-4 rounded-2xl border border-emerald-500/30 bg-emerald-950/30 text-center">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">100</div>
                  <div className="text-[10px] sm:text-xs text-zinc-300 font-medium mt-1">SEO</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
