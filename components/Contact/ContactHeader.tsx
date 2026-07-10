// "use client";

// import { motion, useInView, Variants } from "framer-motion";
// import { useRef } from "react";

// const headlineWords = ["Get", "in", "Touch."];

// export default function ContactHeader() {
//   const ref = useRef<HTMLElement>(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   const containerVariants: Variants = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const wordVariants: Variants = {
//     hidden: { opacity: 0, y: 60, skewY: 4 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       skewY: 0,
//       transition: {
//         duration: 0.9,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { opacity: 0, y: 24 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: "easeInOut" },
//     },
//   };

//   return (
//     <motion.section
//       ref={ref}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={containerVariants}
//       className="relative bg-[#0D0D0D] pt-32 pb-24 px-6 overflow-hidden"
//     >
//       {/* ── BACKGROUND ── */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Film grain */}
//         <div
//           className="absolute inset-0 opacity-[0.15]"
//           style={{
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
//             backgroundSize: "200px 200px",
//           }}
//         />

//         {/* Yellow glow — top right */}
//         <motion.div
//           className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F5C400] blur-[100px]"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 0.06 } : { opacity: 0 }}
//           transition={{ duration: 2, ease: "easeInOut" }}
//         />

//         {/* Yellow glow — bottom left */}
//         <motion.div
//           className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#F5C400] blur-[120px]"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
//           transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
//         />

//         {/* Bottom fade */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />

//         {/* Corner frame marks — top left */}
//         <motion.div
//           className="absolute top-8 left-8"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 1, delay: 1.2 }}
//         >
//           <div className="w-6 h-[1px] bg-white/20" />
//           <div className="w-[1px] h-6 bg-white/20 mt-0" />
//         </motion.div>

//         {/* Corner frame marks — bottom right */}
//         <motion.div
//           className="absolute bottom-8 right-8 flex flex-col items-end"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ duration: 1, delay: 1.2 }}
//         >
//           <div className="w-[1px] h-6 bg-white/20 ml-auto" />
//           <div className="w-6 h-[1px] bg-white/20" />
//         </motion.div>
//       </div>

//       {/* ── CONTENT ── */}
//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* Headline — word by word with skew */}
//         <div className="overflow-hidden mb-6">
//           <motion.h1
//             className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.0] tracking-tight flex flex-wrap gap-x-5"
//             variants={containerVariants}
//           >
//             {headlineWords.map((word, i) => (
//               <motion.span
//                 key={i}
//                 variants={wordVariants}
//                 className="inline-block"
//                 style={
//                   word === "Touch."
//                     ? {
//                         color: "#F5C400",
//                         textShadow: "0 0 80px rgba(245,196,0,0.2)",
//                       }
//                     : {}
//                 }
//               >
//                 {word}
//               </motion.span>
//             ))}
//           </motion.h1>
//         </div>

//         {/* Sub-copy */}
//         <motion.p
//           variants={itemVariants}
//           className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-xl mb-14"
//         >
//           Whether you're a brand, filmmaker, creator, or investor — we want to
//           hear from you.
//         </motion.p>
//       </div>
//     </motion.section>
//   );
// }

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
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 60, skewY: 4 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 0.9, ease: "easeInOut" },
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
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F5C400] blur-[100px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.06 } : { opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-[#F5C400] blur-[120px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.03 } : { opacity: 0 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
        <motion.div
          className="absolute top-8 left-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="w-6 h-[1px] bg-white/20" />
          <div className="w-[1px] h-6 bg-white/20" />
        </motion.div>
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
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Two column layout — text left, video right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — headline + sub */}
          <div>
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

            <motion.p
              variants={itemVariants}
              className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-md"
            >
              Whether you're a brand, filmmaker, creator, or investor — we want
              to hear from you.
            </motion.p>
          </div>

          {/* RIGHT — video */}
          <motion.div
            variants={itemVariants}
            className="relative w-full rounded-2xl overflow-hidden"
            style={{
              aspectRatio: "16/9",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow:
                "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(245,196,0,0.08)",
            }}
          >
            {/* Gold top edge */}
            <div
              className="absolute top-0 inset-x-0 h-[1.5px] z-10"
              style={{
                background:
                  "linear-gradient(90deg,transparent,rgba(245,196,0,0.55),transparent)",
              }}
            />

            {/* Bottom fade */}
            <div
              className="absolute bottom-0 inset-x-0 h-20 z-10 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top,rgba(13,13,13,0.6),transparent)",
              }}
            />

            {/* Corner marks */}
            <div className="absolute top-3 left-3 z-10 pointer-events-none opacity-50">
              <div className="w-4 h-[1px] bg-[#F5C400]" />
              <div className="w-[1px] h-4 bg-[#F5C400]" />
            </div>
            <div className="absolute bottom-3 right-3 z-10 pointer-events-none opacity-50 flex flex-col items-end">
              <div className="w-[1px] h-4 bg-[#F5C400] ml-auto" />
              <div className="w-4 h-[1px] bg-[#F5C400]" />
            </div>

            {/* HHMG stamp */}
            <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
              <span
                className="text-[9px] font-mono tracking-[0.25em] uppercase"
                style={{ color: "rgba(245,196,0,0.45)" }}
              >
                HHMG · Motion
              </span>
            </div>

            <video
              src="/Logo_touch_leads_media_house_202607091542.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: "brightness(0.9)" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
