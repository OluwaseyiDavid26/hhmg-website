"use client";

import { motion, Variants } from "framer-motion";

const headlineWords = ["We", "Are", "Hand", "Held", "Media", "Group."];

const metaItems = [
  { label: "Founded", value: "2026" },
  { label: "Headquarters", value: "Lagos, Nigeria" },
  { label: "Secondary Office", value: "Abuja, Nigeria" },
  { label: "Subsidiaries", value: "4 Companies" },
];

export default function AboutHeader() {
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 80, skewY: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 1.0,
        delay: 0.1 + i * 0.12,
        ease: "easeInOut",
      },
    }),
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.12,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <section className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden">
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

        {/* Yellow glow top left — fades in */}
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#F5C400] blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
        />

        {/* Yellow glow bottom right */}
        <motion.div
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#F5C400] blur-[120px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.03 }}
          transition={{ duration: 3, delay: 0.6, ease: "easeInOut" }}
        />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />

        {/* Corner marks */}
        <motion.div
          className="absolute top-8 left-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="w-6 h-[1px] bg-white/20" />
          <div className="w-[1px] h-6 bg-white/20" />
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-8 flex flex-col items-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <div className="w-[1px] h-6 bg-white/20 ml-auto" />
          <div className="w-6 h-[1px] bg-white/20" />
        </motion.div>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Breadcrumb */}

        {/* Eyebrow */}
        <motion.div
          className="inline-flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
        >
          <motion.div
            className="h-[1px] bg-[#F5C400]"
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeInOut" }}
          />
          <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
            About Us
          </span>
        </motion.div>

        {/* Headline — word by word skew reveal */}
        <div className="mb-6 overflow-visible">
          {/* <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight flex flex-wrap gap-x-4 max-w-3xl"> */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight flex flex-wrap gap-x-4 max-w-3xl">
            {headlineWords.map((word, i) => {
              const isAccent = word === "Media" || word === "Group.";
              return (
                <motion.span
                  key={i}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={
                    isAccent
                      ? {
                          color: "#F5C400",
                          textShadow: "0 0 80px rgba(245,196,0,0.2)",
                        }
                      : {}
                  }
                >
                  {word}
                </motion.span>
              );
            })}
          </h1>
        </div>

        {/* Sub-headline */}
        <motion.p
          className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mb-16"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
        >
          A holding company for African media — building from the ground up.
        </motion.p>

        {/* Meta row */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06] rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: "easeInOut" }}
        >
          {metaItems.map((item, i) => (
            <motion.div
              key={item.label}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-2 bg-[#0D0D0D] px-6 py-6 hover:bg-white/[0.03] transition-colors duration-200"
              style={{ animationDelay: `${1.1 + i * 0.1}s` }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
                {item.label}
              </span>
              <span className="text-white text-lg font-black tracking-tight">
                {item.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
