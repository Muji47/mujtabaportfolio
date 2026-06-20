"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { profileLinks } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: profileLinks.email,
    href: `mailto:${profileLinks.email}`,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Muji47",
    href: profileLinks.github,
    color: "text-gray-300",
    bg: "bg-white/5 border-white/10",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/m-mujtaba-tahir-139316243",
    href: profileLinks.linkedin,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Pakistan 🇵🇰",
    href: null,
    color: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setLoading(false);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl glass border ${
      hasError
        ? "border-red-500/50 focus:border-red-500"
        : "border-indigo-500/20 focus:border-indigo-500/60"
    } text-white placeholder-gray-500 text-sm outline-none transition-colors bg-transparent`;

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative">
        <SectionHeader
          badge="Get In Touch"
          title="Contact"
          highlight="Me"
          description="Have a project in mind? Let's discuss and build something great together."
        />

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Contact info */}
          <AnimatedSection direction="left" className="lg:col-span-2">
            <div className="space-y-4">
              <div>
                <h3 className="text-white text-xl font-bold mb-2">
                  Let&apos;s work together
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I&apos;m always open to discussing new opportunities, interesting
                  projects, or just having a conversation about web development.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div
                      className={`flex items-center gap-4 p-4 rounded-xl border ${item.bg} hover:border-opacity-60 transition-all`}
                    >
                      <div className={`${item.color} flex-shrink-0`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs">{item.label}</p>
                        <p className={`${item.color} text-sm font-medium`}>
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 4 }}
                      className="block"
                    >
                      {content}
                    </motion.a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Availability badge */}
              <div className="flex items-center gap-3 p-4 rounded-xl glass border border-green-500/20">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Available for Work</p>
                  <p className="text-gray-400 text-xs">
                    Open to full-time and freelance projects
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right - Contact form */}
          <AnimatedSection direction="right" delay={0.2} className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 md:p-8 border border-indigo-500/20">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-white text-xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Thank you for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-400 text-xs font-medium block mb-1.5">
                        Your Name *
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Muhammad Ali"
                        className={inputClass(!!errors.name)}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-gray-400 text-xs font-medium block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="ali@example.com"
                        className={inputClass(!!errors.email)}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs font-medium block mb-1.5">
                      Subject *
                    </label>
                    <input
                      {...register("subject")}
                      placeholder="Project Discussion"
                      className={inputClass(!!errors.subject)}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-gray-400 text-xs font-medium block mb-1.5">
                      Message *
                    </label>
                    <textarea
                      {...register("message")}
                      placeholder="Tell me about your project, goals, and timeline..."
                      rows={5}
                      className={`${inputClass(!!errors.message)} resize-none`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all glow disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message ✉️</>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
