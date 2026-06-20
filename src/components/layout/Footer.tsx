"use client";

import { motion } from "framer-motion";
import { navLinks, profileLinks } from "@/lib/data";
import { smoothScrollTo } from "@/lib/utils";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaMapMarkerAlt,
  FaArrowUp,
  FaCode,
} from "react-icons/fa";
import { MdWork } from "react-icons/md";

const socialLinks = [
  {
    icon: FaGithub,
    href: profileLinks.github,
    label: "GitHub",
    color: "#e2e8f0",
  },
  {
    icon: FaLinkedin,
    href: profileLinks.linkedin,
    label: "LinkedIn",
    color: "#0ea5e9",
  },
  {
    icon: FaEnvelope,
    href: `mailto:${profileLinks.email}`,
    label: "Email",
    color: "#f472b6",
  },
];

const contactInfo = [
  {
    icon: FaEnvelope,
    text: profileLinks.email,
    href: `mailto:${profileLinks.email}`,
  },
  {
    icon: FaMapMarkerAlt,
    text: "Pakistan",
    href: null,
  },
  {
    icon: MdWork,
    text: "Open to freelance & full-time",
    href: null,
  },
];

/* Split nav links into two columns */
const navCol1 = navLinks.slice(0, Math.ceil(navLinks.length / 2));
const navCol2 = navLinks.slice(Math.ceil(navLinks.length / 2));

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.05]">
      {/* Top ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-indigo-600/8 blur-[100px]" />
        <div className="absolute top-0 right-1/4 w-64 h-32 bg-purple-600/6 blur-[80px]" />
      </div>

      <div className="section-container relative">
        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-14 pb-10">

          {/* Brand column */}
          <div className="md:col-span-4">
            {/* Logo */}
            <button
              onClick={() => smoothScrollTo("#home")}
              className="group flex items-center gap-2.5 mb-5 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <FaCode size={16} className="text-white" />
              </div>
              <div>
                <span className="text-xl font-black gradient-text tracking-tight">&lt;MMT /&gt;</span>
                <p className="text-[10px] text-gray-600 font-medium -mt-0.5 tracking-widest uppercase">Full Stack Dev</p>
              </div>
            </button>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              Building scalable, high-performance web applications using modern
              frontend and backend technologies. Based in Pakistan, available worldwide.
            </p>

            {/* Social icons */}
            <div className="flex gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-center text-gray-500 transition-all hover:border-white/[0.15]"
                  style={{ "--hover-color": color } as React.CSSProperties}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = color;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 14px ${color}25`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4">
            <h3 className="text-white text-sm font-semibold mb-5 tracking-wide uppercase">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[...navCol1, ...navCol2].map((link) => (
                <button
                  key={link.href}
                  onClick={() => smoothScrollTo(link.href)}
                  className="group flex items-center gap-1.5 text-gray-500 hover:text-indigo-400 text-sm transition-colors text-left cursor-pointer w-fit"
                >
                  <span className="w-1 h-1 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 group-hover:scale-125 transition-all flex-shrink-0" />
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="md:col-span-4">
            <h3 className="text-white text-sm font-semibold mb-5 tracking-wide uppercase">
              Get In Touch
            </h3>
            <div className="space-y-3.5">
              {contactInfo.map(({ icon: Icon, text, href }) =>
                href ? (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-3 text-gray-500 hover:text-indigo-400 transition-colors text-sm group"
                  >
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon size={12} className="text-indigo-400" />
                    </div>
                    {text}
                  </a>
                ) : (
                  <div key={text} className="flex items-center gap-3 text-gray-500 text-sm">
                    <div className="w-7 h-7 rounded-lg bg-white/[0.03] border border-white/[0.07] flex items-center justify-center flex-shrink-0">
                      <Icon size={12} className="text-gray-600" />
                    </div>
                    {text}
                  </div>
                )
              )}

              {/* Availability badge */}
              <div className="mt-1 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/8 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for new projects
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.05] py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs flex items-center gap-1.5">
            © 2026 Muhammad Mujtaba Tahir · Made with{" "}
            <FaHeart className="text-red-500/80" size={10} /> in Pakistan
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-700 text-xs hidden sm:block">
              Built with Next.js · TypeScript · Tailwind CSS
            </span>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 hover:bg-indigo-500/20 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <FaArrowUp size={11} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
