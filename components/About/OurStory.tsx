// export default function OurStory() {
//   return (
//     <section className="bg-[#1A1A1A] py-28 border-b border-white/10">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section label */}
//         <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
//           Our Story
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
//           {/* LEFT — large cinematic statement */}
//           <div className="lg:sticky lg:top-28">
//             <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tighter text-white">
//               Africa is full of stories.{" "}
//               <span className="text-white/30">
//                 We build what it takes to tell them.
//               </span>
//             </h2>

//             {/* Yellow accent rule */}
//             <div className="mt-10 w-12 h-[3px] bg-[#F5C400]" />
//           </div>

//           {/* RIGHT — exact copy from brief */}
//           <div className="space-y-6 text-white/60 text-base sm:text-[1.05rem] leading-[1.85]">
//             <p>
//               Hand Held Media Group was founded on a simple observation: Africa
//               is full of stories — but the infrastructure to tell those stories
//               professionally, at scale, and on African terms has always been
//               fragmented.
//             </p>
//             <p>
//               We set out to change that. Not by doing one thing well, but by
//               building a group of companies that together make great African
//               content not just possible —{" "}
//               <span className="text-white font-semibold">but inevitable.</span>
//             </p>
//             <p>
//               From studios to equipment to creator platforms to original IP,
//               Hand Held Media Group is the infrastructure behind the stories.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function OurStory() {
//   return (
//     <section className="bg-[#1A1A1A] py-24 px-6">
//       <div className="max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
//           {/* Left — label */}
//           <div className="lg:col-span-4">
//             <div className="inline-flex items-center gap-3 mb-6">
//               <div className="w-8 h-[1px] bg-[#F5C400]" />
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                 Our Story
//               </span>
//             </div>

//             <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight">
//               Where It All
//               <br />
//               Began.
//             </h2>

//             <div className="hidden lg:block w-[1px] h-24 bg-gradient-to-b from-[#F5C400]/40 to-transparent mt-10" />
//           </div>

//           {/* Right — exact brief copy */}
//           <div className="lg:col-span-8 flex flex-col gap-8">
//             <p className="text-white/70 text-base sm:text-lg leading-relaxed">
//               Hand Held Media Group was founded on a simple observation:
//             </p>

//             <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed">
//               Africa is full of stories — but the infrastructure to tell those
//               stories professionally, at scale, and on African terms has always
//               been fragmented.
//             </p>

//             <p className="text-white/70 text-base sm:text-lg leading-relaxed">
//               We set out to change that. Not by doing one thing well, but by
//               building a group of companies that together make great African
//               content not just possible —{" "}
//               <span className="text-white font-semibold">but inevitable.</span>
//             </p>

//             <p className="text-white/70 text-base sm:text-lg leading-relaxed">
//               From studios to equipment to creator platforms to original IP,
//               Hand Held Media Group is the infrastructure behind the stories.
//             </p>

//             {/* Closing accent line */}
//             <div className="flex items-center gap-4 pt-4">
//               <div className="w-10 h-[2px] bg-[#F5C400]" />
//               <span className="text-white/20 text-xs tracking-widest uppercase">
//                 Hand Held Media Group · 2026
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Section divider */}
//         <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef, useEffect, useState } from "react";

// export default function OurStory() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Track mouse for parallax effect
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       const rect = sectionRef.current?.getBoundingClientRect();
//       if (rect) {
//         const x = (e.clientX - rect.left) / rect.width - 0.5;
//         const y = (e.clientY - rect.top) / rect.height - 0.5;
//         setMousePosition({ x, y });
//       }
//     };

//     const section = sectionRef.current;
//     if (section) {
//       section.addEventListener("mousemove", handleMouseMove);
//       return () => section.removeEventListener("mousemove", handleMouseMove);
//     }
//   }, []);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.65, 0, 0.35, 1],
//       },
//     },
//   };

//   const quoteVariants = {
//     hidden: { opacity: 0, scale: 0.95, y: 30 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         duration: 0.9,
//         ease: [0.65, 0, 0.35, 1],
//         delay: 0.4,
//       },
//     },
//   };

//   const lineVariants = {
//     hidden: { scaleX: 0, opacity: 0 },
//     visible: {
//       scaleX: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         ease: "easeInOut",
//         delay: 0.6,
//       },
//     },
//   };

//   // Floating particles effect
//   const particles = Array.from({ length: 8 }, (_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     size: Math.random() * 4 + 2,
//     duration: Math.random() * 10 + 10,
//     delay: Math.random() * 5,
//   }));

//   return (
//     <motion.section
//       ref={sectionRef}
//       initial={{ opacity: 0 }}
//       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-[#1A1A1A] py-24 px-6 relative overflow-hidden"
//     >
//       {/* Floating particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {particles.map((particle) => (
//           <motion.div
//             key={particle.id}
//             className="absolute rounded-full bg-[#F5C400]"
//             style={{
//               width: particle.size,
//               height: particle.size,
//               left: `${particle.x}%`,
//               top: `${particle.y}%`,
//               opacity: 0.1,
//             }}
//             animate={{
//               y: [-20, 20, -20],
//               x: [-10, 10, -10],
//               opacity: [0.05, 0.15, 0.05],
//             }}
//             transition={{
//               duration: particle.duration,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: particle.delay,
//             }}
//           />
//         ))}
//       </div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         className="max-w-5xl mx-auto relative z-10"
//       >
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
//           {/* Left — label with parallax */}
//           <motion.div
//             variants={itemVariants}
//             className="lg:col-span-4"
//             style={{
//               transform: isInView
//                 ? `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
//                 : "none",
//               transition: "transform 0.3s cubic-bezier(0.65, 0, 0.35, 1)",
//             }}
//           >
//             {/* Animated label with pulse */}
//             <motion.div
//               variants={itemVariants}
//               className="inline-flex items-center gap-3 mb-6 group cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//             >
//               <motion.div
//                 className="w-8 h-[1px] bg-[#F5C400]"
//                 animate={{
//                   width: ["32px", "48px", "32px"],
//                   transition: {
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//               />
//               <motion.span
//                 className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase"
//                 animate={{
//                   letterSpacing: ["0.35em", "0.45em", "0.35em"],
//                   transition: {
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//               >
//                 Our Story
//               </motion.span>
//             </motion.div>

//             {/* Heading with character reveal */}
//             <motion.h2
//               variants={itemVariants}
//               className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight"
//             >
//               {"Where It All Began.".split(" ").map((word, i) => (
//                 <motion.span
//                   key={i}
//                   className="inline-block mr-2"
//                   initial={{ opacity: 0, y: 30, rotateX: -30 }}
//                   animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
//                   transition={{
//                     delay: i * 0.08 + 0.3,
//                     duration: 0.6,
//                     ease: [0.65, 0, 0.35, 1],
//                   }}
//                   whileHover={{
//                     scale: 1.05,
//                     color: "#F5C400",
//                     transition: { duration: 0.2 },
//                   }}
//                 >
//                   {word}
//                 </motion.span>
//               ))}
//             </motion.h2>

//             {/* Animated gradient line */}
//             <motion.div
//               variants={lineVariants}
//               className="hidden lg:block w-[1px] h-24 bg-gradient-to-b from-[#F5C400]/40 to-transparent mt-10"
//             />
//           </motion.div>

//           {/* Right — content with staggered reveal */}
//           <motion.div
//             variants={containerVariants}
//             className="lg:col-span-8 flex flex-col gap-8"
//           >
//             {/* First paragraph with typewriter effect */}
//             <motion.p
//               variants={itemVariants}
//               className="text-white/70 text-base sm:text-lg leading-relaxed relative"
//             >
//               <motion.span
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : {}}
//                 transition={{ delay: 0.4, duration: 0.8 }}
//               >
//                 Hand Held Media Group was founded on a simple observation:
//               </motion.span>

//               {/* Decorative quote marks */}
//               <motion.span
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
//                 transition={{ delay: 0.6, duration: 0.6 }}
//                 className="absolute -left-6 -top-4 text-7xl font-display text-[#F5C400]"
//               >
//                 "
//               </motion.span>
//             </motion.p>

//             {/* Key quote with highlight effect */}
//             <motion.div
//               variants={quoteVariants}
//               className="relative group"
//               whileHover={{ scale: 1.02 }}
//             >
//               {/* Animated background glow */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-[#F5C400]/5 to-transparent rounded-lg -z-10"
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : {}}
//                 transition={{ delay: 0.8, duration: 0.8 }}
//               />

//               <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed pl-4 border-l-2 border-[#F5C400]/30">
//                 Africa is full of stories — but the infrastructure to tell those
//                 stories professionally, at scale, and on African terms has
//                 always been{" "}
//                 <motion.span
//                   className="text-[#F5C400] inline-block"
//                   animate={{
//                     textShadow: isInView
//                       ? [
//                           "0 0 20px rgba(245,196,0,0.1)",
//                           "0 0 40px rgba(245,196,0,0.2)",
//                           "0 0 20px rgba(245,196,0,0.1)",
//                         ]
//                       : "none",
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 >
//                   fragmented.
//                 </motion.span>
//               </p>
//             </motion.div>

//             {/* Third paragraph with slide-in */}
//             <motion.p
//               variants={itemVariants}
//               className="text-white/70 text-base sm:text-lg leading-relaxed"
//               whileHover={{ x: 5 }}
//               transition={{ duration: 0.3 }}
//             >
//               We set out to change that. Not by doing one thing well, but by
//               building a group of companies that together make great African
//               content not just possible —{" "}
//               <motion.span
//                 className="text-white font-semibold inline-block"
//                 animate={{
//                   scale: isInView ? [1, 1.02, 1] : 1,
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 but inevitable.
//               </motion.span>
//             </motion.p>

//             {/* Fourth paragraph with fade */}
//             <motion.p
//               variants={itemVariants}
//               className="text-white/70 text-base sm:text-lg leading-relaxed"
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ delay: 0.9, duration: 0.8 }}
//             >
//               From studios to equipment to creator platforms to original IP,
//               Hand Held Media Group is the infrastructure behind the stories.
//             </motion.p>

//             {/* Closing accent line with rotation effect */}
//             <motion.div
//               variants={itemVariants}
//               className="flex items-center gap-4 pt-4"
//               whileHover={{ x: 10 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.div
//                 className="w-10 h-[2px] bg-[#F5C400]"
//                 animate={{
//                   width: ["40px", "60px", "40px"],
//                   transition: {
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//               />
//               <motion.span
//                 className="text-white/20 text-xs tracking-widest uppercase"
//                 animate={{
//                   opacity: [0.2, 0.4, 0.2],
//                   transition: {
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   },
//                 }}
//               >
//                 Hand Held Media Group · 2026
//               </motion.span>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Section divider with shimmer effect */}
//         <motion.div
//           initial={{ scaleX: 0, opacity: 0 }}
//           animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
//           transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
//           className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden"
//         >
//           {/* Shimmer overlay */}
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5C400]/20 to-transparent"
//             animate={{
//               x: ["-100%", "100%"],
//               transition: {
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//                 delay: 1.5,
//               },
//             }}
//           />
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   );
// }

"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Fixed particles outside component — no Math.random during render
const particles = [
  { id: 0, x: 15, y: 20, size: 3, duration: 14, delay: 0 },
  { id: 1, x: 75, y: 10, size: 5, duration: 18, delay: 2 },
  { id: 2, x: 40, y: 60, size: 2, duration: 12, delay: 1 },
  { id: 3, x: 85, y: 45, size: 4, duration: 20, delay: 4 },
  { id: 4, x: 25, y: 80, size: 3, duration: 16, delay: 3 },
  { id: 5, x: 60, y: 30, size: 2, duration: 22, delay: 5 },
  { id: 6, x: 90, y: 70, size: 5, duration: 15, delay: 1.5 },
  { id: 7, x: 50, y: 90, size: 3, duration: 19, delay: 2.5 },
];

export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    section.addEventListener("mousemove", handleMouseMove);
    return () => section.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const quoteVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeInOut",
        delay: 0.4,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        delay: 0.6,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1A1A1A] py-24 px-6 relative overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-[#F5C400]"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              opacity: 0.1,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — label with parallax */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4"
            style={{
              transform: isInView
                ? `translate(${mousePosition.x * -10}px, ${mousePosition.y * -10}px)`
                : "none",
              transition: "transform 0.3s ease",
            }}
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="h-[1px] bg-[#F5C400]"
                animate={{ width: ["32px", "48px", "32px"] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                Our Story
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-black text-white leading-tight tracking-tight"
            >
              {"Where It All Began.".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block mr-2"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    delay: i * 0.08 + 0.3,
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    color: "#F5C400",
                    transition: { duration: 0.2 },
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.div
              variants={lineVariants}
              className="hidden lg:block w-[1px] h-24 bg-gradient-to-b from-[#F5C400]/40 to-transparent mt-10"
            />
          </motion.div>

          {/* Right — content */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-8 flex flex-col gap-8"
          >
            {/* Para 1 */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-base sm:text-lg leading-relaxed relative"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Hand Held Media Group was founded on a simple observation:
              </motion.span>

              {/* Decorative quote mark */}
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -left-6 -top-4 text-7xl font-display text-[#F5C400] pointer-events-none"
              >
                &ldquo;
              </motion.span>
            </motion.p>

            {/* Key quote */}
            <motion.div
              variants={quoteVariants}
              className="relative group"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#F5C400]/5 to-transparent rounded-lg -z-10"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
              <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed pl-4 border-l-2 border-[#F5C400]/30">
                Africa is full of stories — but the infrastructure to tell those
                stories professionally, at scale, and on African terms has
                always been{" "}
                <motion.span
                  className="text-[#F5C400] inline-block"
                  animate={
                    isInView
                      ? {
                          textShadow: [
                            "0 0 20px rgba(245,196,0,0.1)",
                            "0 0 40px rgba(245,196,0,0.3)",
                            "0 0 20px rgba(245,196,0,0.1)",
                          ],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  fragmented.
                </motion.span>
              </p>
            </motion.div>

            {/* Para 3 */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-base sm:text-lg leading-relaxed"
            >
              We set out to change that. Not by doing one thing well, but by
              building a group of companies that together make great African
              content not just possible —{" "}
              <motion.span
                className="text-white font-semibold inline-block"
                animate={isInView ? { scale: [1, 1.02, 1] } : {}}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                but inevitable.
              </motion.span>
            </motion.p>

            {/* Para 4 */}
            <motion.p
              variants={itemVariants}
              className="text-white/70 text-base sm:text-lg leading-relaxed"
            >
              From studios to equipment to creator platforms to original IP,
              Hand Held Media Group is the infrastructure behind the stories.
            </motion.p>

            {/* Closing accent */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 pt-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="h-[2px] bg-[#F5C400]"
                animate={{ width: ["40px", "60px", "40px"] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.span
                className="text-white/20 text-xs tracking-widest uppercase"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Hand Held Media Group · 2026
              </motion.span>
            </motion.div>
          </motion.div>
        </div>

        {/* Section divider with shimmer */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 1, ease: "easeInOut" }}
          className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent relative overflow-hidden origin-left"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5C400]/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
