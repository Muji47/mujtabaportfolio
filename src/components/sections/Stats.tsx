"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaCalendarCheck, FaRocket, FaCode, FaStar } from "react-icons/fa";
import { stats } from "@/lib/data";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { IconType } from "react-icons";

const STAT_ICONS: Record<number, { icon: IconType; color: string; bg: string }> = {
  1: { icon: FaCalendarCheck, color: "#818cf8", bg: "bg-indigo-500/10 border-indigo-500/20" },
  2: { icon: FaRocket,        color: "#f472b6", bg: "bg-pink-500/10   border-pink-500/20"   },
  3: { icon: FaCode,          color: "#38bdf8", bg: "bg-cyan-500/10   border-cyan-500/20"   },
  4: { icon: FaStar,          color: "#fbbf24", bg: "bg-amber-500/10  border-amber-500/20"  },
};

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 });

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/20 via-purple-950/15 to-indigo-950/20" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="section-container relative" ref={ref}>
        <AnimatedSection direction="up" className="text-center mb-12">
          <p className="text-gray-600 text-xs uppercase tracking-[0.25em]">Numbers That Speak</p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const iconData = STAT_ICONS[stat.id];
            const Icon = iconData?.icon ?? FaCode;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: idx * 0.1, duration: 0.55 }}
              >
                <div className={`relative bg-white/[0.02] rounded-2xl p-6 border ${iconData?.bg ?? "border-white/[0.06]"} text-center overflow-hidden group hover:border-opacity-60 transition-all card-hover`}>
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Icon */}
                  <div className={`w-11 h-11 mx-auto rounded-xl border flex items-center justify-center mb-4 ${iconData?.bg ?? "bg-indigo-500/10 border-indigo-500/20"}`}>
                    <Icon size={18} color={iconData?.color ?? "#818cf8"} />
                  </div>

                  {/* Counter */}
                  <div className="text-3xl md:text-4xl font-black gradient-text leading-none mb-1">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.2}
                        delay={idx * 0.18}
                        suffix={stat.suffix}
                        decimals={stat.value % 1 !== 0 ? 1 : 0}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>

                  <p className="text-gray-500 text-xs font-medium mt-1">{stat.label}</p>

                  {/* Bottom accent */}
                  <div
                    className="absolute bottom-0 inset-x-0 h-0.5 rounded-b-2xl opacity-60"
                    style={{ background: `linear-gradient(90deg, transparent, ${iconData?.color ?? "#6366f1"}, transparent)` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
