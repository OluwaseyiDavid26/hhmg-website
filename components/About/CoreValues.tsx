// import { Award, Unlock, Users, Fingerprint, ShieldCheck } from "lucide-react";

// const values = [
//   {
//     name: "Excellence",
//     descriptor: "We hold every frame to the highest standard.",
//     icon: Award,
//   },
//   {
//     name: "Access",
//     descriptor: "Great equipment and great opportunity should not be gatekept.",
//     icon: Unlock,
//   },
//   {
//     name: "Community",
//     descriptor:
//       "The creators we serve are not clients — they are collaborators.",
//     icon: Users,
//   },
//   {
//     name: "Authenticity",
//     descriptor: "African stories told by Africans, on African terms.",
//     icon: Fingerprint,
//   },
//   {
//     name: "Integrity",
//     descriptor: "We build businesses we are proud to stand behind.",
//     icon: ShieldCheck,
//   },
// ];

// export default function CoreValues() {
//   return (
//     <section className="bg-[#1A1A1A] py-28">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section label */}
//         <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
//           Core Values
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
//           {/* LEFT — Cinematic statement, sticky */}
//           <div className="lg:sticky lg:top-28">
//             <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white">
//               What we stand for.{" "}
//               <span className="text-white/30">Every single day.</span>
//             </h2>
//             <p className="text-white/40 text-base leading-relaxed mt-8">
//               These are not aspirational slogans. They are the operating
//               principles behind every decision we make as a group.
//             </p>
//           </div>

//           {/* RIGHT — Values list */}
//           <div className="flex flex-col divide-y divide-white/10">
//             {values.map(({ name, descriptor, icon: Icon }) => (
//               <div key={name} className="py-8 flex items-start gap-6">
//                 {/* Icon */}
//                 <Icon
//                   className="text-[#F5C400] flex-shrink-0 mt-1"
//                   size={22}
//                   strokeWidth={1.5}
//                 />

//                 {/* Content */}
//                 <div>
//                   <p className="text-white font-bold text-lg mb-1">{name}</p>
//                   <p className="text-white/50 text-base leading-relaxed">
//                     {descriptor}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion, useInView, useScroll, useTransform } from "framer-motion";
// import { useRef, useState } from "react";
// import { Award, Unlock, Users, Fingerprint, ShieldCheck } from "lucide-react";

// const values = [
//   {
//     name: "Excellence",
//     descriptor: "We hold every frame to the highest standard.",
//     icon: Award,
//     gradient: "from-[#F5C400]/20 to-transparent",
//   },
//   {
//     name: "Access",
//     descriptor: "Great equipment and great opportunity should not be gatekept.",
//     icon: Unlock,
//     gradient: "from-blue-500/20 to-transparent",
//   },
//   {
//     name: "Community",
//     descriptor:
//       "The creators we serve are not clients — they are collaborators.",
//     icon: Users,
//     gradient: "from-green-500/20 to-transparent",
//   },
//   {
//     name: "Authenticity",
//     descriptor: "African stories told by Africans, on African terms.",
//     icon: Fingerprint,
//     gradient: "from-purple-500/20 to-transparent",
//   },
//   {
//     name: "Integrity",
//     descriptor: "We build businesses we are proud to stand behind.",
//     icon: ShieldCheck,
//     gradient: "from-rose-500/20 to-transparent",
//   },
// ];

// export default function CoreValues() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.15 });
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Scroll progress for sticky section
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start start", "end end"],
//   });

//   const leftY = useTransform(scrollYProgress, [0, 1], [0, -50]);
//   const leftOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0.3]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.12,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -30 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.65, 0, 0.35, 1],
//       },
//     },
//   };

//   const iconVariants = {
//     hidden: { scale: 0, rotate: -180 },
//     visible: {
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//         delay: 0.2,
//       },
//     },
//     hover: {
//       scale: 1.2,
//       rotate: [0, -10, 10, -5, 0],
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
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
//         delay: 0.1,
//       },
//     },
//   };

//   // Floating decorative circles
//   const circles = Array.from({ length: 3 }, (_, i) => ({
//     id: i,
//     size: Math.random() * 300 + 100,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     duration: Math.random() * 20 + 15,
//     delay: Math.random() * 5,
//   }));

//   return (
//     <motion.section
//       ref={sectionRef}
//       initial={{ opacity: 0 }}
//       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-[#1A1A1A] py-28 relative overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 pointer-events-none">
//         {circles.map((circle) => (
//           <motion.div
//             key={circle.id}
//             className="absolute rounded-full border border-[#F5C400]/5"
//             style={{
//               width: circle.size,
//               height: circle.size,
//               left: `${circle.x}%`,
//               top: `${circle.y}%`,
//             }}
//             animate={{
//               x: [0, 30, -20, 0],
//               y: [0, -20, 30, 0],
//               rotate: [0, 90, 180, 360],
//               opacity: [0.03, 0.06, 0.03],
//             }}
//             transition={{
//               duration: circle.duration,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: circle.delay,
//             }}
//           />
//         ))}

//         {/* Grid pattern overlay */}
//         <motion.div
//           className="absolute inset-0 opacity-5"
//           style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, #F5C400 1px, transparent 0)`,
//             backgroundSize: "40px 40px",
//           }}
//           animate={{
//             opacity: [0.03, 0.07, 0.03],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         {/* Section label with glow */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="relative inline-block mb-14"
//         >
//           <motion.p
//             className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400]"
//             animate={{
//               letterSpacing: ["0.25em", "0.35em", "0.25em"],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             Core Values
//           </motion.p>
//           <motion.div
//             className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#F5C400]/30"
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           />
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
//           {/* LEFT — Cinematic statement with parallax */}
//           <motion.div
//             className="lg:sticky lg:top-28"
//             style={{
//               y: leftY,
//               opacity: leftOpacity,
//             }}
//           >
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white"
//             >
//               What we stand for.{" "}
//               <motion.span
//                 className="text-white/30 inline-block"
//                 animate={{
//                   opacity: [0.3, 0.5, 0.3],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 Every single day.
//               </motion.span>
//             </motion.h2>

//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               animate={isInView ? { opacity: 1, x: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="text-white/40 text-base leading-relaxed mt-8"
//             >
//               These are not aspirational slogans. They are the operating
//               principles behind every decision we make as a group.
//             </motion.p>

//             {/* Animated decorative line */}
//             <motion.div
//               initial={{ scaleX: 0 }}
//               animate={isInView ? { scaleX: 1 } : {}}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="mt-10 w-16 h-[1px] bg-gradient-to-r from-[#F5C400] to-transparent"
//             />
//           </motion.div>

//           {/* RIGHT — Values list with stagger */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate={isInView ? "visible" : "hidden"}
//             className="flex flex-col divide-y divide-white/10"
//           >
//             {values.map(({ name, descriptor, icon: Icon, gradient }, index) => (
//               <motion.div
//                 key={name}
//                 variants={itemVariants}
//                 className="py-8 flex items-start gap-6 group relative"
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 whileHover={{
//                   x: 10,
//                   transition: { duration: 0.3 },
//                 }}
//               >
//                 {/* Hover background glow */}
//                 <motion.div
//                   className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl -z-10`}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{
//                     opacity: hoveredIndex === index ? 1 : 0,
//                     scale: hoveredIndex === index ? 1 : 0.9,
//                   }}
//                   transition={{ duration: 0.4 }}
//                 />

//                 {/* Animated Icon with spring */}
//                 <motion.div
//                   variants={iconVariants}
//                   initial="hidden"
//                   animate={
//                     isInView
//                       ? hoveredIndex === index
//                         ? ["visible", "hover"]
//                         : "visible"
//                       : "hidden"
//                   }
//                   whileHover="hover"
//                   className="flex-shrink-0"
//                 >
//                   <Icon
//                     className="text-[#F5C400]"
//                     size={22}
//                     strokeWidth={1.5}
//                   />
//                 </motion.div>

//                 {/* Content with animated underline */}
//                 <div className="flex-1">
//                   <div className="relative inline-block">
//                     <motion.p
//                       className="text-white font-bold text-lg mb-1"
//                       animate={{
//                         color: hoveredIndex === index ? "#F5C400" : "#FFFFFF",
//                       }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {name}
//                     </motion.p>
//                     {/* Animated underline on hover */}
//                     <motion.div
//                       className="absolute -bottom-0.5 left-0 h-[2px] bg-[#F5C400]"
//                       initial={{ width: 0 }}
//                       animate={{
//                         width: hoveredIndex === index ? "100%" : 0,
//                       }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </div>
//                   <motion.p
//                     className="text-white/50 text-base leading-relaxed"
//                     animate={{
//                       color:
//                         hoveredIndex === index
//                           ? "rgba(255,255,255,0.7)"
//                           : "rgba(255,255,255,0.5)",
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {descriptor}
//                   </motion.p>

//                   {/* Decorative accent line */}
//                   <motion.div
//                     variants={lineVariants}
//                     className="w-8 h-[1px] bg-[#F5C400]/20 mt-2"
//                     animate={{
//                       width: hoveredIndex === index ? 16 : 8,
//                       opacity: hoveredIndex === index ? 0.6 : 0.2,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />
//                 </div>

//                 {/* Counter badge */}
//                 <motion.span
//                   className="text-white/10 text-xs font-mono"
//                   initial={{ opacity: 0 }}
//                   animate={{
//                     opacity: hoveredIndex === index ? 0.3 : 0.1,
//                     scale: hoveredIndex === index ? 1.2 : 1,
//                   }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {(index + 1).toString().padStart(2, "0")}
//                 </motion.span>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Bottom decorative bar with shimmer */}
//         <motion.div
//           initial={{ scaleX: 0, opacity: 0 }}
//           animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-[#F5C400]/20 to-transparent relative overflow-hidden"
//         >
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent"
//             animate={{
//               x: ["-100%", "100%"],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 1,
//             }}
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState, useMemo } from "react";
import { Award, Unlock, Users, Fingerprint, ShieldCheck } from "lucide-react";

const values = [
  {
    name: "Excellence",
    descriptor: "We hold every frame to the highest standard.",
    icon: Award,
    gradient: "from-[#F5C400]/20 to-transparent",
  },
  {
    name: "Access",
    descriptor: "Great equipment and great opportunity should not be gatekept.",
    icon: Unlock,
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    name: "Community",
    descriptor:
      "The creators we serve are not clients — they are collaborators.",
    icon: Users,
    gradient: "from-green-500/20 to-transparent",
  },
  {
    name: "Authenticity",
    descriptor: "African stories told by Africans, on African terms.",
    icon: Fingerprint,
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    name: "Integrity",
    descriptor: "We build businesses we are proud to stand behind.",
    icon: ShieldCheck,
    gradient: "from-rose-500/20 to-transparent",
  },
];

// Fixed circles outside component — no Math.random during render
const circles = [
  { id: 0, size: 280, x: 10, y: 20, duration: 22, delay: 0 },
  { id: 1, size: 180, x: 70, y: 55, duration: 18, delay: 3 },
  { id: 2, size: 340, x: 40, y: 75, duration: 26, delay: 6 },
];

export default function CoreValues() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2,
      },
    },
    hover: {
      scale: 1.2,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
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
        delay: 0.1,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#0D0D0D] py-28 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {circles.map((circle) => (
          <motion.div
            key={circle.id}
            className="absolute rounded-full border border-[#F5C400]/5"
            style={{
              width: circle.size,
              height: circle.size,
              left: `${circle.x}%`,
              top: `${circle.y}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              rotate: [0, 90, 180, 360],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{
              duration: circle.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: circle.delay,
            }}
          />
        ))}

        {/* Grid pattern */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #F5C400 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
          animate={{ opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-14"
        >
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400]">
            Core Values
          </p>
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#F5C400]/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* LEFT — sticky statement */}
          <div className="lg:sticky lg:top-28">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white"
            >
              What we stand for.{" "}
              <span className="text-white/30">Every single day.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/40 text-base leading-relaxed mt-8"
            >
              These are not aspirational slogans. They are the operating
              principles behind every decision we make as a group.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 w-16 h-[1px] bg-gradient-to-r from-[#F5C400] to-transparent origin-left"
            />
          </div>

          {/* RIGHT — values list */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col divide-y divide-white/10"
          >
            {values.map(({ name, descriptor, icon: Icon, gradient }, index) => (
              <motion.div
                key={name}
                variants={itemVariants}
                className="py-8 flex items-start gap-6 group relative cursor-default"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ x: 10, transition: { duration: 0.3 } }}
              >
                {/* Hover background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl -z-10`}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    scale: hoveredIndex === index ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.4 }}
                />

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  whileHover="hover"
                  className="flex-shrink-0 mt-0.5"
                >
                  <Icon
                    className="text-[#F5C400]"
                    size={22}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Text */}
                <div className="flex-1">
                  <div className="relative inline-block mb-1">
                    <motion.p
                      className="text-white font-bold text-lg"
                      animate={{
                        color: hoveredIndex === index ? "#F5C400" : "#FFFFFF",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {name}
                    </motion.p>
                    <motion.div
                      className="absolute -bottom-0.5 left-0 h-[2px] bg-[#F5C400]"
                      animate={{
                        width: hoveredIndex === index ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  <motion.p
                    className="text-white/50 text-base leading-relaxed"
                    animate={{
                      color:
                        hoveredIndex === index
                          ? "rgba(255,255,255,0.7)"
                          : "rgba(255,255,255,0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {descriptor}
                  </motion.p>

                  <motion.div
                    variants={lineVariants}
                    className="h-[1px] bg-[#F5C400]/20 mt-3 origin-left"
                    animate={{
                      width: hoveredIndex === index ? 16 : 8,
                      opacity: hoveredIndex === index ? 0.6 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Number */}
                <motion.span
                  className="text-white/10 text-xs font-mono flex-shrink-0"
                  animate={{
                    opacity: hoveredIndex === index ? 0.3 : 0.1,
                    scale: hoveredIndex === index ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom shimmer bar */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-[#F5C400]/20 to-transparent relative overflow-hidden origin-left"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F5C400]/40 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
