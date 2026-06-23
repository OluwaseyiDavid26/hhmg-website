// import Link from "next/link";

// const services = [
//   {
//     number: "01",
//     name: "Video Production",
//     detail: "Corporate · Documentary · Advertising",
//   },
//   {
//     number: "02",
//     name: "Audio Production & Podcast Recording",
//     detail: "Studio-grade sound for every format",
//   },
//   {
//     number: "03",
//     name: "Photography",
//     detail: "Commercial · Editorial · Event",
//   },
//   {
//     number: "04",
//     name: "Post-Production & Editing",
//     detail: "Colour · Cut · Sound Design · Delivery",
//   },
//   {
//     number: "05",
//     name: "Motion Graphics & Animation",
//     detail: "2D · 3D · Title Sequences · Brand Motion",
//   },
//   {
//     number: "06",
//     name: "Live Event Coverage",
//     detail: "Multi-camera · Live Streaming · Highlights",
//   },
// ];

// export default function Studios() {
//   return (
//     <section
//       id="studios"
//       className="relative bg-[#1A1A1A] py-28 px-6 scroll-mt-20 overflow-hidden"
//     >
//       {/* Background watermark */}
//       <div
//         className="absolute right-0 top-1/2 -translate-y-1/2 font-black text-white/[0.018] leading-none select-none pointer-events-none tracking-tighter hidden lg:block"
//         style={{ fontSize: "18vw" }}
//         aria-hidden="true"
//       >
//         STUDIOS
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* ── HEADER ROW ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
//           {/* Left — label + headline */}
//           <div>
//             <div className="inline-flex items-center gap-3 mb-7">
//               <span className="text-white/20 text-[10px] font-mono tracking-widest">
//                 01 /
//               </span>
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
//                 HH Media Studios
//               </span>
//             </div>

//             <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-black text-white leading-[0.95] tracking-tight">
//               We make things
//               <br />
//               look and sound
//               <br />
//               <span
//                 className="text-[#F5C400]"
//                 style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
//               >
//                 extraordinary.
//               </span>
//             </h2>
//           </div>

//           {/* Right — copy + CTA */}
//           <div className="flex flex-col gap-5 lg:pb-1">
//             <p className="text-white/50 text-base leading-relaxed">
//               HHMG's full-service production arm — delivering end-to-end video,
//               audio, and content creation for brands, nonprofits, government
//               agencies, and media organisations.
//             </p>
//             <p className="text-white/50 text-base leading-relaxed">
//               From concept to final cut, we are with you every step of the way.
//             </p>

//             <Link
//               href="/contact"
//               className="group inline-flex items-center gap-3 w-fit mt-2"
//             >
//               <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#F5C400]/40 bg-[#F5C400]/10 group-hover:bg-[#F5C400] transition-all duration-300 flex-shrink-0">
//                 <svg
//                   className="w-4 h-4 text-[#F5C400] group-hover:text-[#1A1A1A] transition-colors duration-300"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </span>
//               <span className="text-white text-sm font-semibold group-hover:text-[#F5C400] transition-colors duration-300">
//                 Book a Production Consultation
//               </span>
//             </Link>
//           </div>
//         </div>

//         {/* ── SERVICES GRID ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
//           {services.map((service, index) => (
//             <div
//               key={service.name}
//               className="group relative bg-[#1A1A1A] p-8 flex flex-col gap-6 hover:bg-[#1f1f1f] transition-colors duration-300"
//             >
//               {/* Top row — number + hover arrow */}
//               <div className="flex items-center justify-between">
//                 <span className="text-white/15 text-xs font-mono group-hover:text-[#F5C400]/50 transition-colors duration-300">
//                   {service.number}
//                 </span>
//                 <svg
//                   className="w-4 h-4 text-white/0 group-hover:text-[#F5C400]/50 transition-all duration-300 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
//                   />
//                 </svg>
//               </div>

//               {/* Yellow accent line — grows on hover */}
//               <div className="w-6 h-[2px] bg-[#F5C400]/30 group-hover:w-12 group-hover:bg-[#F5C400] transition-all duration-500" />

//               {/* Service name */}
//               <div className="flex-1">
//                 <h3 className="text-white text-lg font-bold leading-snug tracking-tight group-hover:text-white transition-colors duration-300 mb-2">
//                   {service.name}
//                 </h3>
//                 <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/50 transition-colors duration-300">
//                   {service.detail}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Section divider */}
//         <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    number: "01",
    name: "Video Production",
    detail: "Corporate · Documentary · Advertising",
  },
  {
    number: "02",
    name: "Audio Production & Podcast Recording",
    detail: "Studio-grade sound for every format",
  },
  {
    number: "03",
    name: "Photography",
    detail: "Commercial · Editorial · Event",
  },
  {
    number: "04",
    name: "Post-Production & Editing",
    detail: "Colour · Cut · Sound Design · Delivery",
  },
  {
    number: "05",
    name: "Motion Graphics & Animation",
    detail: "2D · 3D · Title Sequences · Brand Motion",
  },
  {
    number: "06",
    name: "Live Event Coverage",
    detail: "Multi-camera · Live Streaming · Highlights",
  },
];

export default function Studios() {
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

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.1, ease: "easeInOut", delay: 0.15 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        delay: 0.3 + i * 0.1,
        ease: "easeInOut",
      },
    }),
  };

  const watermarkVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1.6, delay: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      ref={ref}
      id="studios"
      className="relative bg-[#1A1A1A] py-28 px-6 scroll-mt-20 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background watermark — drifts in from right */}
      <motion.div
        variants={watermarkVariants}
        className="absolute right-0 top-1/2 -translate-y-1/2 font-black text-white/[0.018] leading-none select-none pointer-events-none tracking-tighter hidden lg:block"
        style={{ fontSize: "18vw" }}
        aria-hidden="true"
      >
        STUDIOS
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ── HEADER ROW ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
          {/* Left — slides in from left */}
          <motion.div variants={leftVariants}>
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="text-white/20 text-[10px] font-mono tracking-widest">
                01 /
              </span>
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
                HH Media Studios
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-black text-white leading-[0.95] tracking-tight">
              We make things
              <br />
              look and sound
              <br />
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
              >
                extraordinary.
              </span>
            </h2>
          </motion.div>

          {/* Right — slides in from right */}
          <motion.div
            variants={rightVariants}
            className="flex flex-col gap-5 lg:pb-1"
          >
            <p className="text-white/50 text-base leading-relaxed">
              HHMG's full-service production arm — delivering end-to-end video,
              audio, and content creation for brands, nonprofits, government
              agencies, and media organisations.
            </p>
            <p className="text-white/50 text-base leading-relaxed">
              From concept to final cut, we are with you every step of the way.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 w-fit mt-2"
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#F5C400]/40 bg-[#F5C400]/10 group-hover:bg-[#F5C400] transition-all duration-300 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-[#F5C400] group-hover:text-[#1A1A1A] transition-colors duration-300"
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
              </span>
              <span className="text-white text-sm font-semibold group-hover:text-[#F5C400] transition-colors duration-300">
                Book a Production Consultation
              </span>
            </Link>
          </motion.div>
        </div>

        {/* ── SERVICES GRID — cards rise up one by one ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              custom={index}
              variants={cardVariants}
              className="group relative bg-[#1A1A1A] p-8 flex flex-col gap-6 hover:bg-[#1f1f1f] transition-colors duration-300"
            >
              {/* Top row — number + arrow */}
              <div className="flex items-center justify-between">
                <span className="text-white/15 text-xs font-mono group-hover:text-[#F5C400]/50 transition-colors duration-300">
                  {service.number}
                </span>
                <svg
                  className="w-4 h-4 text-white/0 group-hover:text-[#F5C400]/50 transition-all duration-300 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>

              {/* Yellow accent line */}
              <div className="w-6 h-[2px] bg-[#F5C400]/30 group-hover:w-12 group-hover:bg-[#F5C400] transition-all duration-500" />

              {/* Service name + detail */}
              <div className="flex-1">
                <h3 className="text-white text-lg font-bold leading-snug tracking-tight group-hover:text-white transition-colors duration-300 mb-2">
                  {service.name}
                </h3>
                <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                  {service.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section divider — grows in */}
        <motion.div
          className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
        />
      </div>
    </motion.section>
  );
}
