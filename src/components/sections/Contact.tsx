"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaEnvelope, FaLinkedin, FaGithub, FaCopy, FaCheck, FaArrowRight, FaClock } from "react-icons/fa";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { profileLinks } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(2, "Please select an engagement type"),
  message: z.string().min(10, "Please provide a brief message"),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const copyEmail = () => {
    navigator.clipboard.writeText(profileLinks.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    console.log("Contact submission:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-28 md:py-36 relative overflow-hidden bg-[#09090b]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-6xl mx-auto">
        <SectionHeader
          badge="Direct Inquiry"
          title="Start a Project or"
          highlight="Partner Together"
          description="Have an upcoming build, need agency overflow capacity, or want to discuss a custom web application? Reach out directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── Left Column: Direct Contact Info (Span 5) ── */}
          <AnimatedSection direction="up" delay={0.1} className="lg:col-span-5 space-y-6">
            
            {/* Quick Email Copy Card with Generous Padding */}
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 shadow-2xl">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                Primary Contact
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Email</h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Direct inbox access for RFP documents, project specs, and white-label discovery calls.
              </p>

              <button
                onClick={copyEmail}
                className="w-full flex items-center justify-between px-5 py-3.5 rounded-2xl border border-zinc-800 bg-zinc-950/80 text-zinc-200 text-xs sm:text-sm font-mono hover:border-zinc-700 hover:text-white transition-all cursor-pointer group shadow-inner"
              >
                <div className="flex items-center gap-3 truncate">
                  <FaEnvelope className="text-emerald-400 flex-shrink-0" size={14} />
                  <span className="truncate">{profileLinks.email}</span>
                </div>
                {copied ? (
                  <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-sans font-semibold">
                    <FaCheck size={11} /> Copied
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-xs text-zinc-400 font-sans group-hover:text-zinc-200">
                    <FaCopy size={11} /> Copy
                  </span>
                )}
              </button>
            </div>

            {/* Social Channels with Generous Padding */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl hover:border-zinc-700 transition-all group shadow-xl"
              >
                <div className="w-10 h-10 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <FaLinkedin size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">LinkedIn</div>
                  <div className="text-[11px] text-zinc-400">Direct Message</div>
                </div>
              </a>

              <a
                href={profileLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl hover:border-zinc-700 transition-all group shadow-xl"
              >
                <div className="w-10 h-10 rounded-2xl bg-zinc-800/80 border border-zinc-700/60 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                  <FaGithub size={16} />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">GitHub</div>
                  <div className="text-[11px] text-zinc-400">Repositories</div>
                </div>
              </a>
            </div>

            {/* Response Time Guarantee Pill Card */}
            <div className="flex items-center gap-3.5 p-5 rounded-3xl border border-emerald-500/20 bg-emerald-950/20 text-emerald-300 text-xs shadow-xl">
              <FaClock size={16} className="text-emerald-400 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white">Rapid Response Standard:</span> Fast reply turnaround during Australian (AEST) &amp; international business hours.
              </div>
            </div>

          </AnimatedSection>

          {/* ── Right Column: Clean Inquiry Form (Span 7) ── */}
          <AnimatedSection direction="up" delay={0.15} className="lg:col-span-7">
            <div className="rounded-3xl border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-xl p-8 sm:p-10 shadow-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Project Inquiry
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-8">
                Fill in the details below and I’ll get back to you with timeline and estimate feasibility.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/30 text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <FaCheck size={18} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Message Dispatched</h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                    Thank you for reaching out. I’ll review your project details and follow up within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Your Name / Company
                    </label>
                    <input
                      {...register("name")}
                      placeholder="e.g. Alex Morgan · Apex Digital"
                      className="w-full px-5 py-3.5 rounded-2xl border border-zinc-800 bg-zinc-950/80 text-white placeholder-zinc-500 text-sm focus:border-zinc-500 outline-none transition-all"
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-400 mt-1.5">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-2">
                        Work Email
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="alex@company.com"
                        className="w-full px-5 py-3.5 rounded-2xl border border-zinc-800 bg-zinc-950/80 text-white placeholder-zinc-500 text-sm focus:border-zinc-500 outline-none transition-all"
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-400 mt-1.5">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-2">
                        Engagement Scope
                      </label>
                      <select
                        {...register("projectType")}
                        className="w-full px-5 py-3.5 rounded-2xl border border-zinc-800 bg-zinc-950/80 text-white text-sm focus:border-zinc-500 outline-none transition-all"
                      >
                        <option value="Agency White-Label Capacity">Agency White-Label Capacity</option>
                        <option value="Direct Web Application Build">Direct Web Application Build</option>
                        <option value="Interactive Calculator / Funnel">Interactive Calculator / Funnel</option>
                        <option value="Performance & Speed Rebuild">Performance &amp; Speed Rebuild</option>
                      </select>
                      {errors.projectType && (
                        <p className="text-xs text-rose-400 mt-1.5">{errors.projectType.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2">
                      Project Overview &amp; Timeline
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Tell me about your Figma designs, stack requirements, or client deliverables..."
                      className="w-full px-5 py-3.5 rounded-2xl border border-zinc-800 bg-zinc-950/80 text-white placeholder-zinc-500 text-sm focus:border-zinc-500 outline-none transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-400 mt-1.5">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button with Generous Padding */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-50"
                  >
                    <span>{loading ? "Sending..." : "Submit Project Inquiry"}</span>
                    <FaArrowRight size={11} />
                  </button>

                </form>
              )}

            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
}
