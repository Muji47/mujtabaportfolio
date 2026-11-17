"use client";

import AnimatedSection from "./AnimatedSection";

interface SectionHeaderProps {
  badge: string;
  title: string;
  highlight: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = "center",
}: SectionHeaderProps) {
  const isLeft = align === "left";

  return (
    <div className={`mb-14 md:mb-20 ${isLeft ? "text-left" : "text-center max-w-3xl mx-auto"}`}>
      {/* Sleek Pill Badge with Generous Padding */}
      <AnimatedSection direction="up">
        <div className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-medium tracking-wide border border-zinc-800 bg-zinc-900/90 text-zinc-300 shadow-inner mb-4`}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          <span>{badge}</span>
        </div>
      </AnimatedSection>

      {/* Main Title */}
      <AnimatedSection direction="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-300 to-zinc-400">
            {highlight}
          </span>
        </h2>
      </AnimatedSection>

      {/* Subtitle Description */}
      {description && (
        <AnimatedSection direction="up" delay={0.15}>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-normal">
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
