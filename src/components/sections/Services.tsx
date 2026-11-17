"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight, FaShieldAlt, FaLaptopCode, FaBolt } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data";
import { smoothScrollTo } from "@/lib/utils";

const SERVICE_META: Record<number, { icon: React.ElementType; badge: string }> = {
  1: { icon: FaShieldAlt, badge: "Most Popular for Agencies" },
  2: { icon: FaLaptopCode, badge: "Full-Cycle Engineering" },
  3: { icon: FaBolt, badge: "High-ROI Conversion" },
  4: { icon: FaBolt, badge: "Performance Guarantee" },
};

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36 relative overflow-hidden bg-[#09090b]">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          badge="Engagement Models"
          title="How We Can"
          highlight="Work Together"
          description="Transparent, reliable engineering capacity tailored for digital agencies and high-ticket service businesses."
        />

        {/* ── Services Cards Grid ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, idx) => {
            const meta = SERVICE_META[service.id] || { icon: FaLaptopCode, badge: "Custom Engineering" };
            const Icon = meta.icon;

            return (
              <AnimatedSection key={service.id} direction="up" delay={idx * 0.1}>
                <div className="h-full rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 hover:border-zinc-700 transition-all flex flex-col justify-between shadow-2xl group">
                  
                  {/* Top Header */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-white group-hover:border-emerald-500/40 transition-colors">
                        <Icon size={18} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 text-[11px] font-medium">
                        {meta.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features List with Generous Spacing */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <FaCheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={12} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tactile Button with Generous Padding */}
                  <button
                    onClick={() => smoothScrollTo("#contact")}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-zinc-800 bg-zinc-950/80 text-zinc-200 text-xs font-semibold hover:bg-white hover:text-zinc-950 hover:border-white transition-all cursor-pointer shadow-sm group/btn"
                  >
                    <span>Inquire About This Service</span>
                    <FaArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* ── Direct Agency Capacity Callout Banner ── */}
        <AnimatedSection direction="up" delay={0.25} className="mt-16">
          <div className="rounded-3xl border border-zinc-800/80 bg-gradient-to-r from-zinc-900/60 via-zinc-950/80 to-zinc-900/60 backdrop-blur-2xl p-8 sm:p-12 text-center shadow-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              Need immediate white-label development capacity?
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-normal">
              Whether you need to clear an overflowing client backlog or launch an interactive calculator funnel, I integrate seamlessly into your workflow.
            </p>
            <button
              onClick={() => smoothScrollTo("#contact")}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-zinc-950 font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 cursor-pointer"
            >
              <span>Discuss Agency Partnership</span>
              <FaArrowRight size={11} />
            </button>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
