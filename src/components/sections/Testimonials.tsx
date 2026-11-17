"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 md:py-36 relative overflow-hidden bg-[#09090b]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          badge="Social Proof"
          title="Client &amp; Partner"
          highlight="Endorsements"
          description="Direct feedback from founders, product leads, and project stakeholders."
        />

        {/* ── Testimonials 3-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <AnimatedSection key={t.id} direction="up" delay={idx * 0.1}>
              <div className="h-full rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-2xl">
                
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <FaStar key={i} size={13} />
                      ))}
                    </div>
                    <FaQuoteLeft size={16} className="text-zinc-700" />
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-normal">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-800/80">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-white/10 flex items-center justify-center text-white font-bold text-xs tracking-tight flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{t.name}</h4>
                    <p className="text-xs text-zinc-400 truncate">{t.role} · {t.company}</p>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
