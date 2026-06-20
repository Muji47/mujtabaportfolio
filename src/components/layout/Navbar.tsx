"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaCode,
  FaBriefcase,
  FaRocket,
  FaTools,
  FaBookOpen,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { navLinks, profileLinks } from "@/lib/data";
import { useTheme } from "@/components/ui/ThemeProvider";
import { smoothScrollTo } from "@/lib/utils";

/* ── Icon map keyed by nav href ────────────────────────────────── */
const NAV_ICONS: Record<string, React.ElementType> = {
  "#home":       FaHome,
  "#about":      FaUser,
  "#skills":     FaCode,
  "#experience": FaBriefcase,
  "#projects":   FaRocket,
  "#services":   FaTools,
  "#blog":       FaBookOpen,
  "#contact":    FaEnvelope,
};

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme }      = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 56);
      const sections = [...navLinks].map((l) => l.href.replace("#", ""));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    smoothScrollTo(href);
  };

  return (
    <>
      {/* ───────────────────────── DESKTOP NAV ───────────────────────── */}
      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#08080f]/90 backdrop-blur-2xl border-b border-white/[0.05] shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">

            {/* ── Logo ─────────────────────────────────────────────── */}
            <motion.button
              onClick={() => handleNav("#home")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity shadow-lg shadow-indigo-500/30" />
                <div className="relative flex items-center justify-center h-full text-white font-black text-sm tracking-tight">
                  MT
                </div>
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-[13px] font-bold text-white tracking-tight">
                  Mujtaba<span className="text-indigo-400">Tahir</span>
                </span>
                <span className="text-[10px] text-gray-500 tracking-widest uppercase">
                  Full Stack Dev
                </span>
              </div>
            </motion.button>

            {/* ── Center nav ───────────────────────────────────────── */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center rounded-2xl border border-white/[0.06] bg-white/[0.02] px-1.5 py-1 gap-0.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  const Icon = NAV_ICONS[link.href] ?? FaCode;
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNav(link.href)}
                      className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[12.5px] font-medium transition-colors duration-150 cursor-pointer whitespace-nowrap ${
                        isActive ? "text-white" : "text-gray-500 hover:text-gray-200"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="navActive"
                          className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/90 to-purple-600/90 shadow-lg shadow-indigo-600/20"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      )}
                      <Icon
                        size={11}
                        className={`relative z-10 transition-colors ${isActive ? "text-indigo-200" : "text-gray-600 group-hover:text-gray-400"}`}
                      />
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  );
                })}
              </div>
            </nav>

            {/* ── Right actions ────────────────────────────────────── */}
            <div className="flex items-center gap-2">

              {/* GitHub */}
              <motion.a
                href={profileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="hidden sm:flex w-9 h-9 rounded-xl border border-white/[0.07] bg-white/[0.03] items-center justify-center text-gray-400 hover:text-white hover:border-white/15 transition-all"
                aria-label="GitHub"
              >
                <FaGithub size={15} />
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="hidden sm:flex w-9 h-9 rounded-xl border border-white/[0.07] bg-white/[0.03] items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-400/20 transition-all"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={14} />
              </motion.a>

              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="w-9 h-9 rounded-xl border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-gray-400 hover:text-amber-300 hover:border-amber-400/20 transition-all"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <FaSun size={13} /> : <FaMoon size={13} />}
              </motion.button>

              {/* Resume */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-indigo-500/25 bg-indigo-500/8 text-indigo-300 text-[12.5px] font-medium hover:bg-indigo-500/15 hover:border-indigo-400/40 transition-all"
              >
                <FaDownload size={10} />
                Resume
              </motion.a>

              {/* Hire Me */}
              <motion.button
                onClick={() => handleNav("#contact")}
                whileHover={{ scale: 1.04, y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[12.5px] font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:from-indigo-500 hover:to-purple-500 transition-all cursor-pointer"
              >
                <MdWork size={14} />
                Hire Me
              </motion.button>

              {/* Mobile hamburger */}
              <motion.button
                onClick={() => setMobileOpen(true)}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden w-9 h-9 rounded-xl border border-white/[0.07] bg-white/[0.03] flex items-center justify-center text-gray-300 hover:text-white hover:border-white/15 transition-all"
                aria-label="Open menu"
              >
                <HiMenuAlt3 size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ───────────────────────── MOBILE DRAWER ─────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden"
            />

            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[288px] bg-[#0c0c18] border-l border-white/[0.06] lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.05]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-indigo-500/30">
                    MT
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-[13px] font-bold text-white">
                      Mujtaba<span className="text-indigo-400">Tahir</span>
                    </span>
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest">
                      Full Stack Dev
                    </span>
                  </div>
                </div>
                <motion.button
                  onClick={() => setMobileOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <FaTimes size={12} />
                </motion.button>
              </div>

              {/* Section label */}
              <p className="px-5 pt-4 pb-2 text-[10px] font-semibold text-gray-600 uppercase tracking-widest">
                Navigation
              </p>

              {/* Nav links */}
              <div className="flex-1 px-3 pb-3 space-y-0.5 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  const Icon = NAV_ICONS[link.href] ?? FaCode;
                  return (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.035 }}
                      onClick={() => handleNav(link.href)}
                      className={`w-full text-left flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer group ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-600/25 to-purple-600/10 text-white border border-indigo-500/30"
                          : "text-gray-400 hover:text-white hover:bg-white/[0.04] border border-transparent"
                      }`}
                    >
                      {/* Icon pill */}
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all ${
                          isActive
                            ? "bg-indigo-500/30 text-indigo-300"
                            : "bg-white/[0.04] text-gray-600 group-hover:bg-white/[0.07] group-hover:text-gray-300"
                        }`}
                      >
                        <Icon size={12} />
                      </div>

                      {/* Label */}
                      <span className="flex-1">{link.label}</span>

                      {/* Active dot */}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                      )}

                      {/* Index number */}
                      <span className={`text-[10px] font-mono flex-shrink-0 ${isActive ? "text-indigo-400/60" : "text-gray-700"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Drawer CTAs */}
              <div className="px-3 pb-6 pt-3 border-t border-white/[0.05] space-y-2">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-indigo-500/25 bg-indigo-500/8 text-indigo-300 text-sm font-medium hover:bg-indigo-500/15 transition-all"
                >
                  <FaDownload size={11} />
                  Download Resume
                </a>
                <button
                  onClick={() => handleNav("#contact")}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 cursor-pointer hover:from-indigo-500 hover:to-purple-500 transition-all"
                >
                  <MdWork size={13} />
                  Hire Me
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
