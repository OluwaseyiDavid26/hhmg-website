"use client";

import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function ProductionCo() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeInOut" },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 70, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1.1, delay: 0.25, ease: "easeInOut" },
    },
  };

  const metaVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.8 + i * 0.15, ease: "easeInOut" },
    }),
  };

  return (
    <motion.section
      ref={ref}
      id="production"
      className="bg-[#0D0D0D] py-24 px-6 scroll-mt-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* ── LEFT — slides in from left ── */}
          <motion.div variants={leftVariants} className="lg:col-span-5">
            {/* Company label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-white/15 text-xs font-mono">04</span>
              <div className="w-6 h-[1px] bg-white/15" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                HH Media & Production Co.
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              Original stories.{" "}
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 40px rgba(245,196,0,0.2)" }}
              >
                Told right.
              </span>
            </h2>

            <p className="text-white/55 text-base leading-relaxed mb-4">
              Hand Held Media & Production Company is the Group's content and IP
              arm. We develop, produce, and distribute original television,
              digital, and branded content that reflects the richness and
              complexity of African life and experience.
            </p>

            <p className="text-white/55 text-base leading-relaxed mb-10">
              Our flagship production,{" "}
              <span className="text-white font-semibold italic">Restored</span>,
              is currently in production — and it is just the beginning.
            </p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/restored"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-6 py-3.5 rounded-sm hover:bg-[#e6b800] transition-all duration-200 uppercase tracking-wide"
                >
                  Learn More About Restored
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 text-sm font-medium px-6 py-3.5 rounded-sm hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-all duration-200 uppercase tracking-wide"
                >
                  Partner With Us
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Restored card rises up ── */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.p
              className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Current Production
            </motion.p>

            {/* Restored card */}
            <motion.div
              variants={cardVariants}
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
            >
              {/* Card glow */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-[#F5C400] blur-[60px]"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 0.05 } : {}}
                  transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
                />
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent" />
              </div>

              <div className="relative z-10 p-8">
                {/* Status badge */}
                <motion.div
                  className="inline-flex items-center gap-2 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.55, ease: "easeInOut" }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
                  </span>
                  <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.25em] uppercase">
                    Now in Production
                  </span>
                </motion.div>

                {/* Show title */}
                <motion.h3
                  className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 1, delay: 0.65, ease: "easeInOut" }}
                >
                  Restored
                </motion.h3>

                <motion.p
                  className="text-white/35 text-xs font-medium tracking-widest uppercase mb-6"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.75 }}
                >
                  A TV Testimony Series
                </motion.p>

                {/* Divider — grows in */}
                <motion.div
                  className="h-[1px] bg-[#F5C400]/50 mb-6 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.85, ease: "easeInOut" }}
                  style={{ width: 40 }}
                />

                {/* Description */}
                <motion.p
                  className="text-white/55 text-sm leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
                >
                  A television testimony series capturing stories of radical
                  life transformation. Real people. Real change. Cinematic
                  storytelling.
                </motion.p>

                {/* Meta row — each item staggers */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/[0.08]">
                  {[
                    { label: "Format", value: "Television Series" },
                    { label: "Status", value: "In Production" },
                    { label: "Distribution", value: "Coming Soon" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      custom={i}
                      variants={metaVariants}
                    >
                      <p className="text-white/25 text-[10px] tracking-widest uppercase mb-1">
                        {item.label}
                      </p>
                      <p className="text-white text-sm font-semibold">
                        {item.value}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom accent — sweeps in */}
              <motion.div
                className="h-[2px] bg-gradient-to-r from-[#F5C400]/50 via-[#F5C400]/20 to-transparent origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Below card note */}
            <motion.p
              className="text-white/25 text-xs mt-4 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              Distribution details to follow. Visit the{" "}
              <Link
                href="/restored"
                className="text-[#F5C400]/60 hover:text-[#F5C400] transition-colors underline underline-offset-2"
              >
                Restored page
              </Link>{" "}
              for full production details and how to get involved.
            </motion.p>
          </div>
        </div>

        {/* Bottom divider */}
        <motion.div
          className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.4, ease: "easeInOut" }}
        />
      </div>
    </motion.section>
  );
}
