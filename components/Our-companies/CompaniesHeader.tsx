"use client";

import { motion, Variants } from "framer-motion";

const companies = [
  { id: "studios", name: "HH Media Studios", href: "#studios" },
  { id: "rentals", name: "HH Media Rentals", href: "#rentals" },
  { id: "creators", name: "HH Creators Platform", href: "#creators" },
  { id: "production", name: "HH Production Co.", href: "#production" },
];

export default function CompaniesHeader() {
  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 80, skewY: 5 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 1.1,
        delay: i * 0.15,
        ease: "easeInOut",
      },
    }),
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        delay: i * 0.1,
        ease: "easeInOut",
      },
    }),
  };

  const headlineWords = ["One", "Ecosystem."];
  const headlineAccent = "Built to Last.";

  return (
    <section className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Glow — fades in slowly */}
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F5C400] blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.06 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
        />

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1A1A] to-transparent" />

        {/* Corner marks — fade in last */}
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

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          className="inline-flex items-center gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
        >
          <span className="text-white/25 text-xs tracking-widest uppercase">
            HHMG
          </span>
          <span className="text-white/15 text-xs">/</span>
          <span className="text-[#F5C400] text-xs tracking-widest uppercase font-semibold">
            Our Companies
          </span>
        </motion.div>

        <div className="max-w-3xl mb-16">
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
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            />
            <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
              Four Companies
            </span>
          </motion.div>

          {/* Headline — word by word with skew */}
          <div className="mb-6 overflow-hidden">
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight flex flex-wrap gap-x-5">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                custom={headlineWords.length}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
                style={{
                  color: "#F5C400",
                  textShadow: "0 0 80px rgba(245,196,0,0.25)",
                }}
              >
                {headlineAccent}
              </motion.span>
            </h1>
          </div>

          {/* Sub-copy */}
          <motion.p
            className="text-white/50 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: "easeInOut" }}
          >
            Each company within Hand Held Media Group was built to solve a
            specific gap in the African media landscape — and together, they
            form a complete infrastructure for storytelling at scale.
          </motion.p>
        </div>

        {/* Company anchor nav pills — stagger in */}
        <div className="flex flex-wrap gap-3">
          {companies.map((company, index) => (
            <motion.a
              key={company.id}
              href={company.href}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="group inline-flex items-center gap-3 border border-white/10 rounded-full px-5 py-2.5 hover:border-[#F5C400]/40 hover:bg-[#F5C400]/[0.04] transition-all duration-300"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="text-white/20 text-[10px] font-mono group-hover:text-[#F5C400]/50 transition-colors">
                0{index + 1}
              </span>
              <span className="text-white/60 text-xs font-medium group-hover:text-white transition-colors">
                {company.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
