"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaEnvelope } from "react-icons/fa";
import { profileLinks } from "@/lib/data";
import { smoothScrollTo } from "@/lib/utils";
import { typingTexts } from "@/lib/data";

const typingSequence = typingTexts.flatMap((text) => [text, 2200]);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden animated-gradient"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Ambient orbs */}
      <div className="absolute -top-20 left-1/3 w-[500px] h-[500px] bg-indigo-700/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-700/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 -left-20 w-[300px] h-[300px] bg-cyan-700/8 rounded-full blur-[80px] pointer-events-none" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: i % 2 === 0 ? "3px" : "2px",
            height: i % 2 === 0 ? "3px" : "2px",
            left: `${8 + i * 15}%`,
            top: `${15 + (i % 4) * 20}%`,
            background: i % 3 === 0 ? "#6366f1" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4",
          }}
          animate={{ y: [0, -24, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}

      <div className="section-container w-full relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* ── LEFT: text content ── */}
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

            {/* Availability pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/25 bg-emerald-500/8 text-emerald-400 text-sm font-medium mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for new projects
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-indigo-400 text-base font-semibold tracking-wide mb-2"
            >
              Hi, I&apos;m 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.6rem] xl:text-7xl font-extrabold text-white leading-[1.1] mb-4"
            >
              Muhammad{" "}
              <span className="gradient-text">Mujtaba</span>
              <br />
              <span className="text-white/90">Tahir</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex items-center gap-2 justify-center lg:justify-start mb-5 h-9"
            >
              <span className="text-gray-400 text-lg font-medium">I build</span>
              <TypeAnimation
                sequence={typingSequence}
                wrapper="span"
                speed={55}
                deletionSpeed={75}
                repeat={Infinity}
                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
                cursor
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed mb-9 max-w-lg mx-auto lg:mx-0"
            >
              Specializing in{" "}
              <span className="text-indigo-400 font-medium">React</span>,{" "}
              <span className="text-purple-400 font-medium">Next.js</span>,{" "}
              <span className="text-cyan-400 font-medium">Node.js</span> &amp;{" "}
              <span className="text-indigo-300 font-medium">TypeScript</span> — building
              scalable, high-performance web applications with clean architecture.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {/* Primary */}
              <motion.button
                onClick={() => smoothScrollTo("#projects")}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:from-indigo-500 hover:to-purple-500 transition-all cursor-pointer"
              >
                View Projects
                <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
              </motion.button>

              {/* Secondary – resume */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/[0.05] border border-indigo-500/25 text-white text-sm font-semibold hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all cursor-pointer"
              >
                <FaDownload size={12} className="text-indigo-400" />
                Download CV
              </motion.a>

              {/* Ghost – contact */}
              <motion.button
                onClick={() => smoothScrollTo("#contact")}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/10 text-gray-300 text-sm font-semibold hover:border-white/20 hover:text-white transition-all cursor-pointer"
              >
                <FaEnvelope size={12} className="text-indigo-400" />
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex items-center gap-3 justify-center lg:justify-start"
            >
              <span className="text-gray-600 text-xs uppercase tracking-widest">Follow</span>
              <div className="w-8 h-px bg-gray-700" />
              {[
                { icon: FaGithub, href: profileLinks.github, label: "GitHub" },
                { icon: FaLinkedin, href: profileLinks.linkedin, label: "LinkedIn" },
                { icon: FaEnvelope, href: `mailto:${profileLinks.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-500 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/8 transition-all"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: profile visual ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px]">

              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, #6366f1 90deg, #8b5cf6 180deg, #06b6d4 270deg, transparent 360deg)",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
              </motion.div>

              {/* Static inner border */}
              <div className="absolute inset-[10px] rounded-full border border-indigo-500/15" />

              {/* Profile area */}
              <div className="absolute inset-[14px] rounded-full overflow-hidden bg-gradient-to-br from-[#0f0f20] to-[#150d28] flex flex-col items-center justify-center">
                <div className="text-[4.5rem] mb-1">👨‍💻</div>
                <p className="text-[11px] font-semibold tracking-wider text-indigo-300/80 uppercase">
                  Full Stack Dev
                </p>
              </div>

              {/* Floating info chips */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-5 top-6 bg-[#0f0f20] border border-indigo-500/30 rounded-2xl px-3.5 py-2.5 text-xs shadow-xl shadow-black/30"
              >
                <p className="text-indigo-400 font-bold text-sm">2.5+</p>
                <p className="text-gray-500 mt-0.5">Yrs Exp</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 bottom-10 bg-[#0f0f20] border border-purple-500/30 rounded-2xl px-3.5 py-2.5 text-xs shadow-xl shadow-black/30"
              >
                <p className="text-purple-400 font-bold text-sm">8+</p>
                <p className="text-gray-500 mt-0.5">Projects</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 right-10 bg-[#0f0f20] border border-cyan-500/30 rounded-2xl px-3.5 py-2.5 text-xs shadow-xl shadow-black/30"
              >
                <p className="text-cyan-400 font-bold text-sm">15+</p>
                <p className="text-gray-500 mt-0.5">Tech</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="hidden lg:flex flex-col items-center gap-1.5 absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <span className="text-gray-600 text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
          >
            <div className="w-0.5 h-2 bg-indigo-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
