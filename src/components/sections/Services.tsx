"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaLayerGroup, FaCode, FaServer, FaDatabase,
  FaExchangeAlt, FaChartBar, FaBolt, FaArrowRight,
} from "react-icons/fa";
import { SiNextdotjs, SiNodedotjs } from "react-icons/si";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { services } from "@/lib/data";
import { smoothScrollTo } from "@/lib/utils";

/* Map service id → icon + accent colour */
const SERVICE_ICONS: Record<number, { icon: IconType; color: string; bg: string }> = {
  1: { icon: FaLayerGroup,   color: "#818cf8", bg: "bg-indigo-500/10 border-indigo-500/20" },
  2: { icon: FaCode,         color: "#38bdf8", bg: "bg-cyan-500/10   border-cyan-500/20"   },
  3: { icon: FaServer,       color: "#34d399", bg: "bg-emerald-500/10 border-emerald-500/20" },
  4: { icon: SiNextdotjs,    color: "#ffffff", bg: "bg-white/5       border-white/10"       },
  5: { icon: SiNodedotjs,    color: "#539e43", bg: "bg-green-500/10  border-green-500/20"  },
  6: { icon: FaDatabase,     color: "#60a5fa", bg: "bg-blue-500/10   border-blue-500/20"   },
  7: { icon: FaExchangeAlt,  color: "#f472b6", bg: "bg-pink-500/10   border-pink-500/20"   },
  8: { icon: FaBolt,         color: "#fbbf24", bg: "bg-amber-500/10  border-amber-500/20"  },
  9: { icon: FaChartBar,     color: "#a78bfa", bg: "bg-purple-500/10 border-purple-500/20" },
};

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative">
        <SectionHeader
          badge="What I Do"
          title="My"
          highlight="Services"
          description="Comprehensive web development services tailored to your needs"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, idx) => {
            const iconData = SERVICE_ICONS[service.id];
            const Icon = iconData?.icon ?? FaCode;
            return (
              <AnimatedSection key={service.id} direction="up" delay={idx * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group bg-white/[0.02] rounded-2xl p-5 border border-white/[0.06] hover:border-indigo-500/30 transition-all h-full flex flex-col"
                >
                  {/* Icon */}
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${iconData?.bg ?? "bg-indigo-500/10 border-indigo-500/20"} transition-colors group-hover:scale-105`}>
                    <Icon size={19} color={iconData?.color ?? "#818cf8"} />
                  </div>

                  <h3 className="text-white font-semibold text-[15px] mb-1.5 group-hover:text-indigo-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-gray-500 text-xs">
                        <span className="w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => smoothScrollTo("#contact")}
                    className="flex items-center gap-1.5 text-indigo-400 text-xs font-medium hover:text-indigo-300 transition-colors group/btn cursor-pointer mt-auto"
                  >
                    Get Started
                    <FaArrowRight size={9} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA banner */}
        <AnimatedSection direction="up" delay={0.3} className="mt-14">
          <div className="bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-indigo-600/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Have a project in mind?</h3>
            <p className="text-gray-400 text-sm mb-6">Let&apos;s collaborate and build something amazing together.</p>
            <motion.button
              onClick={() => smoothScrollTo("#contact")}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500 transition-all cursor-pointer"
            >
              Start a Project
              <FaArrowRight size={12} />
            </motion.button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
