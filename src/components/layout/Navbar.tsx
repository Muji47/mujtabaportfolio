"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import { navLinks, profileLinks } from "@/lib/data";
import { smoothScrollTo } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);
      const sections = [...navLinks].map((l) => l.href.replace("#", ""));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= 180) {
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
      {/* ── FLOATING ISLAND NAV ── */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 py-2 sm:px-6 sm:py-3 rounded-full border transition-all duration-300 shadow-2xl max-w-4xl w-full ${
            scrolled
              ? "bg-zinc-950/95 border-white/10 backdrop-blur-2xl shadow-black/80 ring-1 ring-white/5"
              : "bg-zinc-950/80 border-white/[0.08] backdrop-blur-xl shadow-black/50"
          }`}
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group text-left flex-shrink-0"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/15 flex items-center justify-center text-white font-black text-xs tracking-tight group-hover:border-emerald-500/50 transition-colors">
              MT
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-xs sm:text-[13px] font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                Mujtaba Tahir
              </span>
              <span className="hidden sm:inline-block text-[10px] text-zinc-400 font-medium tracking-wider uppercase mt-0.5">
                Full-Stack Partner
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navPillActive"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/10 shadow-inner"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Social Links on Desktop */}
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden lg:flex w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              <FaGithub size={13} />
            </a>

            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hidden lg:flex w-8 h-8 rounded-full border border-white/10 bg-white/[0.03] items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <FaLinkedin size={13} />
            </a>

            {/* Desktop CTA Pill */}
            <button
              onClick={() => handleNav("#contact")}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all shadow-md shadow-white/5 cursor-pointer"
            >
              <span>Get in Touch</span>
              <FaArrowRight size={9} className="text-zinc-900" />
            </button>

            {/* Mobile Menu Button - Sleek & Compact */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.06] text-zinc-200 hover:text-white hover:bg-white/[0.1] transition-all cursor-pointer text-xs font-medium"
            >
              {mobileOpen ? (
                <>
                  <FaTimes size={12} />
                  <span>Close</span>
                </>
              ) : (
                <>
                  <FaBars size={12} />
                  <span>Menu</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </header>

      {/* ── MOBILE NAV DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-3 z-50 p-6 rounded-3xl bg-zinc-950/98 border border-white/15 backdrop-blur-3xl shadow-2xl flex flex-col gap-3 md:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Navigation
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-zinc-400 hover:text-white p-1"
              >
                <FaTimes size={13} />
              </button>
            </div>

            <div className="flex flex-col gap-1 py-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors text-left"
                >
                  <span>{link.label}</span>
                  <FaArrowRight size={10} className="text-zinc-600" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => handleNav("#contact")}
                className="w-full py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs text-center shadow-lg cursor-pointer"
              >
                Get in Touch / Start a Project
              </button>
              <div className="flex justify-center gap-4 pt-2">
                <a
                  href={profileLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5"
                >
                  <FaGithub size={13} /> GitHub
                </a>
                <span className="text-zinc-700">•</span>
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-zinc-400 hover:text-emerald-400 flex items-center gap-1.5"
                >
                  <FaLinkedin size={13} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
