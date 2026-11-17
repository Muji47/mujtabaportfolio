"use client";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { profileLinks } from "@/lib/data";
import { smoothScrollTo } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-zinc-800/80 bg-[#09090b] py-16 relative overflow-hidden">
      <div className="section-container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-white font-bold text-xs">
                MT
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Muhammad Mujtaba Tahir
              </span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              Full-Stack Web Engineer &amp; Agency White-Label Partner. Engineering sub-second Next.js applications and high-converting funnels.
            </p>
          </div>

          {/* Social Links with Generous Padding */}
          <div className="flex items-center gap-3">
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href={`mailto:${profileLinks.email}`}
              aria-label="Send direct email"
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
            >
              <FaEnvelope size={14} />
            </a>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/60 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all cursor-pointer"
            >
              <FaArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} Muhammad Mujtaba Tahir. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for New Projects &amp; White-Label Capacity</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
