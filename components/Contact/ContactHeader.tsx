"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const headlineWords = ["Get", "in", "Touch."];

export default function ContactHeader() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 60, skewY: 4 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="relative bg-[#0D0D0D] pt-32 pb-24 px-6 overflow-hidden"
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Yellow glow — top right */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F5C400] blur-[100px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.06 } : { opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Yellow glow — bottom left */}
        <motion.div
          className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#F5C400] blur-[120px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />

        {/* Corner frame marks — top left */}
        <motion.div
          className="absolute top-8 left-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-6 h-[1px] bg-white/20" />
          <div className="w-[1px] h-6 bg-white/20 mt-0" />
        </motion.div>

        {/* Corner frame marks — bottom right */}
        <motion.div
          className="absolute bottom-8 right-8 flex flex-col items-end"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-[1px] h-6 bg-white/20 ml-auto" />
          <div className="w-6 h-[1px] bg-white/20" />
        </motion.div>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        {/* <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-12"
        >
          <span className="text-white/25 text-xs tracking-widest uppercase">
            HHMG
          </span>
          <span className="text-white/15 text-xs">/</span>
          <span className="text-[#F5C400] text-xs tracking-widest uppercase font-semibold">
            Contact
          </span>
        </motion.div> */}

        {/* Headline — word by word with skew */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.0] tracking-tight flex flex-wrap gap-x-5"
            variants={containerVariants}
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block"
                style={
                  word === "Touch."
                    ? {
                        color: "#F5C400",
                        textShadow: "0 0 80px rgba(245,196,0,0.2)",
                      }
                    : {}
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Sub-copy */}
        <motion.p
          variants={itemVariants}
          className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-xl mb-14"
        >
          Whether you're a brand, filmmaker, creator, or investor — we want to
          hear from you.
        </motion.p>
      </div>
    </motion.section>
  );
}
