"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/lib/data";

const AVATAR_STYLES = [
  { gradient: "from-indigo-500 to-purple-600",  ring: "ring-indigo-500/30",  accent: "#818cf8" },
  { gradient: "from-amber-400  to-orange-500",  ring: "ring-amber-500/30",   accent: "#fbbf24" },
  { gradient: "from-emerald-400 to-teal-500",   ring: "ring-emerald-500/30", accent: "#34d399" },
  { gradient: "from-pink-500   to-rose-600",    ring: "ring-pink-500/30",    accent: "#f472b6" },
];

const PROJECT_LINKS: Record<string, string> = {
  "Adala – adala.com.kw":           "https://adala.com.kw/",
  "Burewala Rice Mills":             "https://www.burewalaricemills.com/",
  "Healing Hands – healinghands.pk": "https://www.healinghands.pk/",
};

const SLIDE_VARIANTS = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0, scale: 0.97 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit:  (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0, scale: 0.97 }),
};

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = testimonials.length;

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent((idx + total) % total);
  };

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  /* Auto-advance every 5 s */
  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  });

  const t = testimonials[current];
  const style = AVATAR_STYLES[current % AVATAR_STYLES.length];
  const liveLink = PROJECT_LINKS[t.company];
  const companyLabel = t.company.split(" –")[0];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-indigo-600/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          badge="Client Reviews"
          title="What Clients"
          highlight="Say"
          description="Real feedback from clients I've worked with"
        />

        <div className="max-w-4xl mx-auto">

          {/* ── Main slider card ── */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="relative">

              {/* Nav buttons */}
              <button
                onClick={prev}
                className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all cursor-pointer"
              >
                <FaChevronLeft size={13} />
              </button>
              <button
                onClick={next}
                className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all cursor-pointer"
              >
                <FaChevronRight size={13} />
              </button>

              {/* Card */}
              <div className="overflow-hidden rounded-2xl">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={SLIDE_VARIANTS}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-white/[0.025] border border-white/[0.07] rounded-2xl overflow-hidden"
                  >
                    {/* Colour top bar */}
                    <div
                      className="h-1 w-full"
                      style={{ background: `linear-gradient(90deg, ${style.accent}, transparent)` }}
                    />

                    <div className="p-7 sm:p-10">
                      <div className="flex flex-col sm:flex-row gap-8 items-start">

                        {/* Left: avatar + client info */}
                        <div className="flex-shrink-0 flex flex-row sm:flex-col items-center sm:items-center gap-4 sm:gap-3 sm:w-36 sm:text-center">
                          {/* Avatar */}
                          <div className="relative">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${style.gradient} flex items-center justify-center text-white text-xl font-black shadow-xl ring-4 ${style.ring}`}>
                              {t.avatar}
                            </div>
                            {/* Verified tick */}
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0c0c18] flex items-center justify-center">
                              <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>

                          {/* Name + role */}
                          <div>
                            <p className="text-white font-bold text-base leading-tight">{t.name}</p>
                            <p className="text-gray-500 text-xs mt-0.5">{t.role}</p>

                            {/* Project link */}
                            {liveLink ? (
                              <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-2 px-2.5 py-1 rounded-lg text-[11px] font-medium border transition-colors hover:bg-indigo-500/15"
                                style={{
                                  background: `${style.accent}12`,
                                  borderColor: `${style.accent}30`,
                                  color: style.accent,
                                }}
                              >
                                {companyLabel}
                                <FaExternalLinkAlt size={8} />
                              </a>
                            ) : (
                              <span
                                className="inline-block mt-2 px-2.5 py-1 rounded-lg text-[11px] font-medium border"
                                style={{
                                  background: `${style.accent}12`,
                                  borderColor: `${style.accent}30`,
                                  color: style.accent,
                                }}
                              >
                                {companyLabel}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right: quote + stars */}
                        <div className="flex-1 relative">
                          {/* Background giant quote */}
                          <ImQuotesLeft
                            className="absolute -top-2 -left-1 opacity-[0.04] pointer-events-none"
                            style={{ fontSize: "120px", color: style.accent }}
                          />

                          {/* Stars */}
                          <div className="flex gap-1 mb-4">
                            {[...Array(t.rating)].map((_, i) => (
                              <FaStar key={i} size={15} className="text-amber-400" />
                            ))}
                          </div>

                          {/* Review text */}
                          <p className="text-gray-200 text-base sm:text-lg leading-relaxed relative z-10 font-light">
                            &ldquo;{t.content}&rdquo;
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </AnimatedSection>

          {/* ── Dot + thumbnail navigation ── */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonials.map((item, idx) => {
                const s = AVATAR_STYLES[idx % AVATAR_STYLES.length];
                const isActive = idx === current;
                return (
                  <motion.button
                    key={item.id}
                    onClick={() => go(idx)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-xl border transition-all cursor-pointer ${
                      isActive
                        ? "border-opacity-50 bg-white/[0.04]"
                        : "border-white/[0.05] bg-transparent hover:bg-white/[0.03]"
                    }`}
                    style={isActive ? { borderColor: `${s.accent}50` } : {}}
                  >
                    {/* Mini avatar */}
                    <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0`}>
                      {item.avatar}
                    </div>
                    {/* Name — only on active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          className="text-xs text-white font-medium overflow-hidden whitespace-nowrap"
                        >
                          {item.name}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* ── Progress bar ── */}
          <AnimatedSection direction="up" delay={0.25}>
            <div className="flex gap-1.5 justify-center mt-4">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => go(idx)}
                  className="cursor-pointer"
                >
                  <motion.div
                    className="h-0.5 rounded-full"
                    animate={{
                      width: idx === current ? 28 : 8,
                      background: idx === current
                        ? AVATAR_STYLES[current % AVATAR_STYLES.length].accent
                        : "rgba(255,255,255,0.12)",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* ── Summary strip ── */}
          <AnimatedSection direction="up" delay={0.3} className="mt-10">
            <div className="grid grid-cols-3 divide-x divide-white/[0.05] bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
              {[
                { value: "5.0", label: "Avg. Rating",          stars: true },
                { value: "95%", label: "Client Satisfaction",  sub: "Across all projects" },
                { value: "4",   label: "Verified Reviews",     sub: "Real clients" },
              ].map((item) => (
                <div key={item.label} className="py-5 px-4 text-center">
                  <div className="text-2xl sm:text-3xl font-black gradient-text leading-none mb-1.5">
                    {item.value}
                  </div>
                  {item.stars ? (
                    <div className="flex justify-center gap-0.5 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={9} className="text-amber-400" />
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-600 text-[11px] mb-1">{item.sub}</p>
                  )}
                  <p className="text-gray-500 text-xs font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
