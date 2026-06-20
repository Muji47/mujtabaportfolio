"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  description?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-14 md:mb-16">
      <AnimatedSection direction="up">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-indigo-500/25 bg-indigo-500/8 text-indigo-400 mb-5">
          <span className="w-1 h-1 rounded-full bg-indigo-400" />
          {badge}
        </span>
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold text-white leading-tight mb-4">
          {title}{" "}
          <span className="gradient-text">{highlight}</span>
        </h2>
      </AnimatedSection>

      {description && (
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            {description}
          </p>
        </AnimatedSection>
      )}

      {/* Decorative line */}
      <AnimatedSection direction="fade" delay={0.3}>
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-indigo-500/50" />
          <div className="w-2 h-2 rounded-full bg-indigo-500/60" />
          <div className="w-20 h-px bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-indigo-500/50" />
          <div className="w-2 h-2 rounded-full bg-purple-500/60" />
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-500/50" />
        </div>
      </AnimatedSection>
    </div>
  );
}
