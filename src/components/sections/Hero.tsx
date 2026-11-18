"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheck, FaCopy, FaBolt } from "react-icons/fa";
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
      className="relative min-h-[85vh] sm:min-h-[92vh] flex flex-col justify-start sm:justify-center pt-28 sm:pt-40 md:pt-44 pb-16 sm:pb-24 overflow-hidden bg-[#09090b] text-white"
    >
      {/* ── Background Subtle Mesh Atmosphere ── */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[700px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-indigo-500/10 via-emerald-500/10 to-purple-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="section-container relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">

          {/* ── 1. Status Pill with Generous Padding & Glowing Beacon ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-[11px] sm:text-xs font-medium tracking-wide shadow-sm mb-6 sm:mb-8"
          >
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="truncate">Available for Q2 Projects &amp; Agency White-Label</span>
          </motion.div>

          {/* ── 2. Commanding Headline ── */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12] sm:leading-[1.08] max-w-4xl mb-4 sm:mb-6"
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
            className="text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal px-2"
          >
            Engineering sub-second <span className="text-zinc-200 font-medium">Next.js 16</span> web applications, high-converting interactive calculators, and full-stack systems. Built for design agencies needing reliable white-label overflow.
          </motion.p>

          {/* ── 4. Tactile Action Buttons with Generous Padding ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mb-12 sm:mb-16"
          >
            {/* Primary Action Button */}
            <button
              onClick={() => smoothScrollTo("#projects")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 cursor-pointer"
            >
              <span>Explore Flagship Builds</span>
              <FaArrowRight size={11} className="text-zinc-900" />
            </button>

            {/* Direct Email Copy Button with Feedback */}
            <button
              onClick={copyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-300 font-medium text-xs sm:text-sm hover:border-zinc-700 hover:text-white transition-all cursor-pointer shadow-sm"
            >
              {copied ? (
                <>
                  <FaCheck size={11} className="text-emerald-400" />
                  <span className="text-emerald-300">Email Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <FaCopy size={11} className="text-zinc-400" />
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
            className="w-full max-w-3xl rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-2xl p-5 sm:p-8 shadow-2xl text-left"
          >
            {/* Top Terminal Header */}
            <div className="flex items-center justify-between gap-2 pb-4 sm:pb-5 border-b border-white/[0.08] mb-5 sm:mb-6">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700/80 flex-shrink-0" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700/80 flex-shrink-0" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-700/80 flex-shrink-0" />
                <span className="ml-2 sm:ml-3 text-[11px] sm:text-xs font-mono text-zinc-400 truncate">
                  volt-solar-australia.config.ts
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] sm:text-xs font-mono flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Lighthouse 99/100
              </div>
            </div>

            {/* Metrics Chips Grid with Generous Padding */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              <div className="p-3 sm:p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-[10px] sm:text-xs text-zinc-400 mb-0.5 sm:mb-1">Time to First Byte</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">&lt; 25ms</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-[10px] sm:text-xs text-zinc-400 mb-0.5 sm:mb-1">Stack Core</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">Next.js 16</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-[10px] sm:text-xs text-zinc-400 mb-0.5 sm:mb-1">Calculation UX</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">STC Rebate</div>
              </div>
              <div className="p-3 sm:p-4 rounded-2xl border border-white/[0.06] bg-white/[0.02]">
                <div className="text-[10px] sm:text-xs text-zinc-400 mb-0.5 sm:mb-1">Delivery Standard</div>
                <div className="text-base sm:text-lg font-bold text-white font-mono">White-Label</div>
              </div>
            </div>

            {/* Live Flagship Callout */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <FaBolt size={14} />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-semibold text-white">VoltSolar Australia Platform</div>
                  <div className="text-[11px] sm:text-xs text-zinc-400">Interactive Commercial &amp; Residential Energy Calculator</div>
                </div>
              </div>
              <button
                onClick={() => smoothScrollTo("#projects")}
                className="flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors cursor-pointer group self-end sm:self-auto"
              >
                <span>View Case Study</span>
                <FaArrowRight size={9} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
