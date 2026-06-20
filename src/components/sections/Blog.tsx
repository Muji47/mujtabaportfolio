"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { SiNextdotjs, SiNodedotjs, SiReact, SiTypescript } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { blogPosts } from "@/lib/data";

const CATEGORY_META: Record<string, { icon: IconType; color: string; bg: string; border: string }> = {
  "Next.js":    { icon: SiNextdotjs,  color: "#ffffff", bg: "bg-white/5",        border: "border-white/10"         },
  "Node.js":    { icon: SiNodedotjs,  color: "#539e43", bg: "bg-green-500/10",    border: "border-green-500/20"     },
  "React":      { icon: SiReact,      color: "#61dafb", bg: "bg-cyan-500/10",     border: "border-cyan-500/20"      },
  "TypeScript": { icon: SiTypescript, color: "#3178c6", bg: "bg-blue-500/10",     border: "border-blue-500/20"      },
};

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container">
        <SectionHeader
          badge="Latest Articles"
          title="From the"
          highlight="Blog"
          description="Sharing knowledge and insights about modern web development"
        />

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {blogPosts.map((post, idx) => {
            const meta = CATEGORY_META[post.category];
            const CatIcon = meta?.icon ?? SiReact;
            return (
              <AnimatedSection key={post.id} direction="up" delay={idx * 0.09}>
                <motion.article
                  whileHover={{ y: -5 }}
                  className="group bg-white/[0.02] rounded-2xl overflow-hidden border border-white/[0.06] hover:border-indigo-500/30 transition-all h-full flex flex-col cursor-pointer"
                >
                  {/* Thumbnail */}
                  <div className="relative h-36 bg-gradient-to-br from-[#0c0c1e] to-[#10102a] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    {/* Big icon as illustration */}
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{ background: `${meta?.color}14`, border: `1px solid ${meta?.color}30` }}
                    >
                      <CatIcon size={28} color={meta?.color ?? "#818cf8"} />
                    </motion.div>

                    {/* Category badge */}
                    <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium border ${meta?.bg ?? "bg-indigo-500/10"} ${meta?.border ?? "border-indigo-500/20"}`}
                      style={{ color: meta?.color ?? "#818cf8" }}
                    >
                      <CatIcon size={10} />
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-600 text-[11px] mb-2.5">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-white font-semibold text-sm mb-2 leading-snug group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-1.5 mt-4 text-indigo-400 text-xs font-medium group-hover:gap-2.5 transition-all">
                      Read more
                      <FaArrowRight size={9} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection direction="up" delay={0.3} className="text-center mt-10">
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-white/[0.03] border border-white/[0.08] text-gray-300 text-sm font-medium hover:border-indigo-500/30 hover:text-white transition-all cursor-pointer"
          >
            View All Articles
            <FaArrowRight size={11} />
          </motion.button>
        </AnimatedSection>
      </div>
    </section>
  );
}
