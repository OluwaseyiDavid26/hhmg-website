// export default function AboutHeader() {
//   return (
//     <section className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden">
//       {/* Background layers */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Film grain */}
//         <div
//           className="absolute inset-0 opacity-[0.15]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
//             backgroundSize: "200px 200px",
//           }}
//         />
//         {/* Yellow glow */}
//         <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#F5C400] opacity-[0.05] blur-[100px]" />
//         {/* Bottom fade into page */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
//       </div>

//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* Breadcrumb */}
//         <div className="inline-flex items-center gap-2 mb-12">
//           <span className="text-white/25 text-xs tracking-widest uppercase">
//             HHMG
//           </span>
//           <span className="text-white/15 text-xs">/</span>
//           <span className="text-[#F5C400] text-xs tracking-widest uppercase font-semibold">
//             About
//           </span>
//         </div>

//         {/* Headline — exact from brief */}
//         <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-3xl">
//           We Are Hand Held
//           <br />
//           <span
//             className="text-[#F5C400]"
//             style={{ textShadow: "0 0 60px rgba(245,196,0,0.2)" }}
//           >
//             Media Group.
//           </span>
//         </h1>

//         {/* Sub-headline — exact from brief */}
//         <p className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mb-16">
//           A holding company for African media — building from the ground up.
//         </p>

//         {/* Meta row */}
//         <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
//           {[
//             { label: "Founded", value: "2026" },
//             { label: "Headquarters", value: "Lagos, Nigeria" },
//             { label: "Secondary Office", value: "Abuja, Nigeria" },
//             { label: "Subsidiaries", value: "4 Companies" },
//           ].map((item) => (
//             <div key={item.label} className="flex flex-col gap-1">
//               <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
//                 {item.label}
//               </span>
//               <span className="text-white text-sm font-semibold">
//                 {item.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import { motion, Variants } from "framer-motion";

export default function AboutHeader() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants: Variants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.05, 0.08, 0.05],
      x: [0, 30, -20, 0],
      y: [0, -20, 30, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const grainVariants: Variants = {
    animate: {
      opacity: [0.15, 0.08, 0.15],
      scale: [1, 1.02, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.6,
        ease: "easeInOut",
      },
    }),
  };

  const headlineWords = "We Are Hand Held Media Group.".split(" ");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden"
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated film grain */}
        <motion.div
          variants={grainVariants}
          animate="animate"
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* Floating glow - unique floating animation */}
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#F5C400] opacity-[0.05] blur-[100px]"
        />

        {/* Second glow that pulses */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#F5C400] opacity-[0.03] blur-[120px]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto"
      >
        {/* Breadcrumb */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 mb-12"
        >
          <motion.span
            whileHover={{ x: 3 }}
            className="text-white/25 text-xs tracking-widest uppercase cursor-pointer"
          >
            HHMG
          </motion.span>
          <span className="text-white/15 text-xs">/</span>
          <motion.span
            whileHover={{ scale: 1.05, x: 2 }}
            className="text-[#F5C400] text-xs tracking-widest uppercase font-semibold cursor-pointer"
          >
            About
          </motion.span>
        </motion.div>

        {/* Headline with word-by-word reveal */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6 max-w-3xl"
          variants={containerVariants}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block mr-2"
              whileHover={{
                scale: 1.05,
                color: i === 6 ? "#F5C400" : "#FFFFFF",
                transition: { duration: 0.2 },
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Sub-headline with typewriter effect style */}
        <motion.p
          variants={itemVariants}
          className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          A holding company for African media — building from the ground up.
        </motion.p>

        {/* Meta row with stagger */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-white/10 pt-8"
        >
          {[
            { label: "Founded", value: "2026" },
            { label: "Headquarters", value: "Lagos, Nigeria" },
            { label: "Secondary Office", value: "Abuja, Nigeria" },
            { label: "Subsidiaries", value: "4 Companies" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              custom={index}
              className="flex flex-col gap-1 group cursor-default"
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: { duration: 0.2 },
              }}
            >
              {/* Animated underline on hover */}
              <div className="relative">
                <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase group-hover:text-white/40 transition-colors">
                  {item.label}
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-[#F5C400] origin-left"
                />
              </div>
              <span className="text-white text-sm font-semibold group-hover:text-[#F5C400] transition-colors duration-300">
                {item.value}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
