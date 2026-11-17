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
      setScrolled(window.scrollY > 30);
      const sections = [...navLinks].map((l) => l.href.replace("#", ""));
      for (const s of sections.reverse()) {
        const el = document.getElementById(s);
        if (el && el.getBoundingClientRect().top <= 160) {
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
      {/* ── FLOATING ISLAND NAV (Linear / Vercel style) ── */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border transition-all duration-300 shadow-2xl ${
            scrolled
              ? "bg-zinc-950/90 border-white/10 backdrop-blur-2xl shadow-black/80 ring-1 ring-white/5"
              : "bg-zinc-950/70 border-white/[0.08] backdrop-blur-xl shadow-black/40"
          }`}
        >
          {/* Brand Logo */}
          <button
            onClick={() => handleNav("#home")}
            className="flex items-center gap-3 cursor-pointer group text-left"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/10 flex items-center justify-center text-white font-bold text-xs tracking-tight group-hover:border-emerald-500/50 transition-colors">
              MT
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-[13px] font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                Mujtaba Tahir
              </span>
              <span className="text-[10px] text-zinc-400 font-medium tracking-wider uppercase mt-0.5">
                Full-Stack Partner
              </span>
            </div>
          </button>

          {/* Desktop Nav Items with Generous Pill Padding */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.slice(0, 5).map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
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
          <div className="flex items-center gap-2.5">
            {/* Social Link: GitHub */}
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hidden lg:flex w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-all cursor-pointer"
            >
              <FaGithub size={14} />
            </a>

            {/* Social Link: LinkedIn */}
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hidden lg:flex w-9 h-9 rounded-full border border-white/10 bg-white/[0.03] items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <FaLinkedin size={14} />
            </a>

            {/* Tactile Primary CTA Pill */}
            <button
              onClick={() => handleNav("#contact")}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-all shadow-md shadow-white/5 cursor-pointer"
            >
              <span>Get in Touch</span>
              <FaArrowRight size={10} className="text-zinc-900" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden w-9 h-9 rounded-full border border-white/10 bg-white/[0.05] flex items-center justify-center text-zinc-300 hover:text-white cursor-pointer"
            >
              {mobileOpen ? <FaTimes size={13} /> : <FaBars size={13} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* ── MOBILE NAV DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-50 p-6 rounded-3xl bg-zinc-950/95 border border-white/15 backdrop-blur-3xl shadow-2xl flex flex-col gap-3 md:hidden"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Navigation
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <FaTimes size={14} />
              </button>
            </div>

            <div className="flex flex-col gap-1 py-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors text-left"
                >
                  <span>{link.label}</span>
                  <FaArrowRight size={11} className="text-zinc-600" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex gap-3">
              <button
                onClick={() => handleNav("#contact")}
                className="w-full py-3 rounded-2xl bg-white text-zinc-950 font-bold text-xs text-center"
              >
                Start a Project
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
