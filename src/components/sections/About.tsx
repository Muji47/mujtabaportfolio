"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaDownload, FaCode, FaBolt, FaShieldAlt } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { smoothScrollTo } from "@/lib/utils";

const facts = [
  { label: "Core Specialization", value: "Next.js 16, React 19, TypeScript" },
  { label: "Backend & Systems", value: "Node.js, PostgreSQL, REST APIs" },
  { label: "Performance Standard", value: "95+ Lighthouse · Sub-Second TTFB" },
  { label: "Agency Delivery", value: "White-label & overflow capacity" },
  { label: "Sprint Speed", value: "Rapid delivery (48h - 10 days)" },
  { label: "Communication", value: "Fluent English, real-time & async" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden bg-[#09090b]">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Background & Principles"
          title="Full-Stack Engineer &amp;"
          highlight="Technical Partner"
          description="Who I am, how I engineer software, and why agencies and high-ticket service companies trust me with their development backlog."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* ── Left Column: Profile & Config Card (Span 5) ── */}
          <AnimatedSection direction="up" delay={0.1} className="lg:col-span-5">
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              {/* Profile Monogram & Title */}
              <div className="text-center py-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/15 flex items-center justify-center text-white font-black text-xl sm:text-2xl shadow-xl mb-4">
                  MT
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Muhammad Mujtaba Tahir
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                  Full-Stack Engineer &amp; Agency Partner
                </p>
                <div className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Q2 Projects</span>
                </div>
              </div>

              {/* Code Configuration Snippet */}
              <div className="rounded-2xl border border-white/10 bg-zinc-950/90 p-4 font-mono text-[11px] sm:text-xs text-zinc-300 space-y-1 shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/[0.06] text-zinc-500 text-[10px]">
                  <span>engineer.config.ts</span>
                  <span>status: ready</span>
                </div>
                <p><span className="text-purple-400">const</span> <span className="text-emerald-400">partner</span> = &#123;</p>
                <p className="pl-4"><span className="text-zinc-400">stack:</span> [<span className="text-amber-300">&quot;Next.js 16&quot;</span>, <span className="text-amber-300">&quot;React 19&quot;</span>],</p>
                <p className="pl-4"><span className="text-zinc-400">performance:</span> <span className="text-cyan-300">&quot;95+ Core Web Vitals&quot;</span>,</p>
                <p className="pl-4"><span className="text-zinc-400">whiteLabel:</span> <span className="text-emerald-400">true</span>,</p>
                <p className="pl-4"><span className="text-zinc-400">timezoneOverlap:</span> <span className="text-amber-300">&quot;AEST / Global&quot;</span></p>
                <p>&#125;;</p>
              </div>

            </div>
          </AnimatedSection>

          {/* ── Right Column: Narrative & Fact Badges (Span 7) ── */}
          <AnimatedSection direction="up" delay={0.15} className="lg:col-span-7 space-y-6">
            
            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Turning complex client requirements into fast, revenue-generating software.
              </h3>
              <p>
                I specialize in <span className="text-white font-semibold">React 19</span>, <span className="text-white font-semibold">Next.js 16 (App Router)</span>, <span className="text-white font-semibold">TypeScript</span>, and <span className="text-white font-semibold">Node.js</span>. I bridge the gap between high-end Figma design and bulletproof production code.
              </p>
              <p className="text-zinc-400">
                For digital marketing agencies, I act as an external technical engine—taking on overflow client builds, custom quote calculators, and performance overhauls without adding full-time payroll overhead. For direct trade and high-ticket service companies, I build conversion-engineered web platforms that turn mobile clicks into booked calls.
              </p>
            </div>

            {/* Quick Fact Grid with Generous Padding */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {facts.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl"
                >
                  <FaCheckCircle className="text-emerald-400 flex-shrink-0" size={13} />
                  <div className="min-w-0">
                    <div className="text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider font-mono">
                      {f.label}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-white truncate mt-0.5">
                      {f.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => smoothScrollTo("#projects")}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-md shadow-white/5 cursor-pointer"
              >
                <span>Explore Flagship Projects</span>
                <FaArrowRight size={10} />
              </button>

              <button
                onClick={() => smoothScrollTo("#contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 font-medium text-xs sm:text-sm hover:border-zinc-700 hover:text-white transition-all cursor-pointer"
              >
                <span>Partner With Me</span>
              </button>
            </div>

          </AnimatedSection>

        </div>

      </div>
    </section>
  );
}
