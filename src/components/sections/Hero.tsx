"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaCode, FaCheckCircle, FaBolt } from "react-icons/fa";
import { profileLinks, typingTexts } from "@/lib/data";
import { smoothScrollTo } from "@/lib/utils";

const typingSequence = typingTexts.flatMap((text) => [text, 2200]);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#070a12] text-white pt-24 pb-16 border-b border-slate-900"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Value Proposition & Copy ── */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">

            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-semibold tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for Contracts & Agency White-Label Projects
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]"
            >
              Building Sub-Second,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Full-Stack Web Systems
              </span>{" "}
              That Scale.
            </motion.h1>

            {/* Dynamic Typing Sub-headline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex items-center gap-2 justify-center lg:justify-start h-8 text-slate-300 text-base sm:text-lg font-medium"
            >
              <span className="text-slate-400">Specializing in:</span>
              <TypeAnimation
                sequence={typingSequence}
                wrapper="span"
                speed={55}
                deletionSpeed={75}
                repeat={Infinity}
                className="font-bold text-emerald-400"
                cursor
              />
            </motion.div>

            {/* Executive Bio */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            >
              Hi, I&apos;m <strong>Muhammad Mujtaba Tahir</strong>. I partner with digital agencies and scaling brands to turn complex Figma designs into high-converting, production-grade Next.js web applications, custom interactive calculators, and full-stack API architectures.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-2"
            >
              <button
                onClick={() => smoothScrollTo("#projects")}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 transition-all duration-150 cursor-pointer"
              >
                Explore Production Builds
                <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => smoothScrollTo("#services")}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-150 cursor-pointer"
              >
                Agency Services
              </button>

              <a
                href={`mailto:${profileLinks.email}`}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-emerald-400 font-medium text-sm transition-all cursor-pointer"
              >
                <FaEnvelope size={13} />
                Get in Touch
              </a>
            </motion.div>

            {/* Trust Proof Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400 font-medium border-t border-slate-800/80"
            >
              <span className="flex items-center gap-1.5 text-slate-300">
                <FaCheckCircle className="text-emerald-400 text-sm" /> 98/100 Core Web Vitals
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <FaCheckCircle className="text-emerald-400 text-sm" /> 1:1 Pixel-Perfect Figma Handoff
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <FaCheckCircle className="text-emerald-400 text-sm" /> Complete White-Label Discretion
              </span>
            </motion.div>

          </div>

          {/* ── RIGHT: Sleek Interactive Production Terminal ── */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-md mx-auto lg:max-w-none"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-indigo-500/20 rounded-3xl blur-xl" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-slate-950/90 border border-slate-800 shadow-2xl p-5 sm:p-6 backdrop-blur-xl">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">mujtaba.engine.ts</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2 py-0.5 rounded-full">
                    ● PRODUCTION READY
                  </span>
                </div>

                {/* Code Body */}
                <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300">
                  <p className="text-slate-500">// Technical Web Engineering Partner</p>
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-emerald-400">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-amber-300">&quot;Muhammad Mujtaba Tahir&quot;</span>,
                  </p>
                  <p className="pl-4">
                    coreStack: [<span className="text-cyan-300">&quot;Next.js 16&quot;</span>,{" "}
                    <span className="text-cyan-300">&quot;React 19&quot;</span>,{" "}
                    <span className="text-cyan-300">&quot;TypeScript&quot;</span>,{" "}
                    <span className="text-cyan-300">&quot;Node.js&quot;</span>],
                  </p>
                  <p className="pl-4">
                    database: [<span className="text-cyan-300">&quot;PostgreSQL&quot;</span>,{" "}
                    <span className="text-cyan-300">&quot;MongoDB&quot;</span>],
                  </p>
                  <p className="pl-4">
                    whiteLabelPartnership: <span className="text-emerald-400">true</span>,
                  </p>
                  <p className="pl-4">
                    performanceGuarantee: <span className="text-amber-300">&quot;95+ Lighthouse Score&quot;</span>,
                  </p>
                  <p>&#125;;</p>
                </div>

                {/* Live Performance Metric Callouts */}
                <div className="mt-5 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-3">
                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block">Performance</span>
                    <span className="text-lg font-black text-emerald-400 flex items-center gap-1">
                      <FaBolt size={13} /> 99 / 100
                    </span>
                    <span className="text-[10px] text-slate-500 block">Google Lighthouse</span>
                  </div>

                  <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 block">Edge Delivery</span>
                    <span className="text-lg font-black text-cyan-400 flex items-center gap-1">
                      <FaCode size={13} /> &lt; 0.3s
                    </span>
                    <span className="text-[10px] text-slate-500 block">Sub-Second Mobile</span>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="mt-4 pt-3 text-center">
                  <div className="flex items-center justify-center gap-4 text-xs">
                    <a
                      href={profileLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white flex items-center gap-1.5 transition"
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                    <span className="text-slate-700">•</span>
                    <a
                      href={profileLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white flex items-center gap-1.5 transition"
                    >
                      <FaLinkedin size={14} /> LinkedIn
                    </a>
                    <span className="text-slate-700">•</span>
                    <a
                      href={`mailto:${profileLinks.email}`}
                      className="text-emerald-400 hover:underline flex items-center gap-1.5 transition"
                    >
                      <FaEnvelope size={12} /> Email Me
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
