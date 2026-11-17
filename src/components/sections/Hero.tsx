"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaCopy, FaExternalLinkAlt, FaBolt, FaShieldAlt } from "react-icons/fa";
import { profileLinks } from "@/lib/data";
import { smoothScrollTo } from "@/lib/utils";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profileLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[96vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#09090b] text-white"
    >
      {/* ── Background Subtle Mesh Atmosphere ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-500/10 via-emerald-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="section-container relative z-10 w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center">

          {/* ── 1. Status Pill with Generous Padding & Glowing Beacon ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium tracking-wide shadow-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>Available for Q2 Projects &amp; Agency White-Label Overflow</span>
          </motion.div>

          {/* ── 2. Commanding Headline ── */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.08] max-w-4xl mb-6"
          >
            Full-Stack Web Engineer &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-400">
              Agency Technical Partner
            </span>
          </motion.h1>

          {/* ── 3. Crisp Breathing Subheadline ── */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-normal"
          >
            Engineering sub-second <span className="text-zinc-200 font-medium">Next.js 16</span> web applications, high-converting interactive calculators, and full-stack systems. Built for design agencies needing reliable white-label overflow.
          </motion.p>

          {/* ── 4. Tactile Action Buttons with Generous Padding ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            {/* Primary Action Button */}
            <button
              onClick={() => smoothScrollTo("#projects")}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 cursor-pointer"
            >
              <span>Explore Flagship Builds</span>
              <FaArrowRight size={12} className="text-zinc-900" />
            </button>

            {/* Direct Email Copy Button with Feedback */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 font-medium text-sm hover:border-zinc-700 hover:text-white transition-all cursor-pointer shadow-sm"
            >
              {copied ? (
                <>
                  <FaCheck size={12} className="text-emerald-400" />
                  <span className="text-emerald-300">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <FaCopy size={12} className="text-zinc-400" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>
          </motion.div>

          {/* ── 5. Executive Engineering Showcase Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-3xl rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl text-left"
          >
            {/* Top Terminal Header */}
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700/80" />
                <div className="w-3 h-3 rounded-full bg-zinc-700/80" />
                <div className="w-3 h-3 rounded-full bg-zinc-700/80" />
                <span className="ml-3 text-xs font-mono text-zinc-400">
                  volt-solar-australia.config.ts
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Lighthouse 99/100
              </div>
            </div>

            {/* Metrics Chips Grid with Generous Padding */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-xs text-zinc-400 mb-1">Time to First Byte</div>
                <div className="text-lg font-bold text-white font-mono">&lt; 25ms</div>
              </div>
              <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-xs text-zinc-400 mb-1">Stack Core</div>
                <div className="text-lg font-bold text-white font-mono">Next.js 16</div>
              </div>
              <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-xs text-zinc-400 mb-1">Calculation UX</div>
                <div className="text-lg font-bold text-white font-mono">STC Rebate</div>
              </div>
              <div className="p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-xs text-zinc-400 mb-1">Delivery Standard</div>
                <div className="text-lg font-bold text-white font-mono">White-Label</div>
              </div>
            </div>

            {/* Live Flagship Callout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FaBolt size={14} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">VoltSolar Australia Platform</div>
                  <div className="text-xs text-zinc-400">Interactive Commercial &amp; Residential Energy Calculator</div>
                </div>
              </div>
              <button
                onClick={() => smoothScrollTo("#projects")}
                className="flex items-center gap-2 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer group"
              >
                <span>View Full Case Study</span>
                <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
