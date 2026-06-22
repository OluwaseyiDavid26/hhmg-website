// import { Eye, Target } from "lucide-react";

// export default function VisionMission() {
//   return (
//     <section className="bg-[#1A1A1A] py-28 border-b border-white/10">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section label */}
//         <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
//           Vision &amp; Mission
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Vision Box */}
//           <div className="border border-white/10 p-10 flex flex-col gap-6">
//             <Eye className="text-[#F5C400]" size={32} strokeWidth={1.5} />
//             <div>
//               <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
//                 Our Vision
//               </p>
//               <p className="text-white text-lg leading-relaxed">
//                 To ensure edifying African stories are told authentically,
//                 powerfully, and on our own terms.
//               </p>
//             </div>
//           </div>

//           {/* Mission Box */}
//           <div className="border border-white/10 p-10 flex flex-col gap-6">
//             <Target className="text-[#F5C400]" size={32} strokeWidth={1.5} />
//             <div>
//               <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
//                 Our Mission
//               </p>
//               <p className="text-white text-lg leading-relaxed">
//                 To build the creative infrastructure that enables African
//                 storytellers to produce, own, and share stories that are
//                 edifying, authentic, and theirs.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";
// import { motion, useInView } from "framer-motion";
// import { useRef, useState } from "react";
// import { Eye, Target } from "lucide-react";

// export default function VisionMission() {
//   const sectionRef = useRef(null);
//   const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   // Track mouse for 3D tilt effect
//   const handleMouseMove = (e, cardId) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     setMousePosition({ x, y });
//   };

//   const handleMouseLeave = () => {
//     setMousePosition({ x: 0, y: 0 });
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 50,
//       rotateX: -10,
//       scale: 0.95,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
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
//         delay: 0.4,
//       },
//     },
//     float: {
//       y: [0, -8, 0],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const glowVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//       },
//     },
//   };

//   // Particle effects for each card
//   const particles = Array.from({ length: 6 }, (_, i) => ({
//     id: i,
//     angle: (i / 6) * Math.PI * 2,
//     distance: 60 + Math.random() * 40,
//     size: Math.random() * 3 + 1,
//     duration: Math.random() * 4 + 3,
//     delay: Math.random() * 2,
//   }));

//   return (
//     <motion.section
//       ref={sectionRef}
//       initial={{ opacity: 0 }}
//       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//       transition={{ duration: 0.8 }}
//       className="bg-[#1A1A1A] py-28 border-b border-white/10 relative overflow-hidden"
//     >
//       {/* Animated background gradient */}
//       <motion.div
//         className="absolute inset-0 pointer-events-none"
//         animate={{
//           background: [
//             "radial-gradient(ellipse at 20% 50%, rgba(245,196,0,0.03) 0%, transparent 70%)",
//             "radial-gradient(ellipse at 80% 50%, rgba(245,196,0,0.03) 0%, transparent 70%)",
//             "radial-gradient(ellipse at 50% 50%, rgba(245,196,0,0.03) 0%, transparent 70%)",
//           ],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         {/* Section label with reveal */}
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
//             Vision &amp; Mission
//           </motion.p>
//           <motion.div
//             className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#F5C400]/30"
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : {}}
//             transition={{ delay: 0.3, duration: 0.8 }}
//           />
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="grid grid-cols-1 lg:grid-cols-2 gap-8"
//         >
//           {/* Vision Card */}
//           <motion.div
//             variants={cardVariants}
//             className="border border-white/10 p-10 flex flex-col gap-6 relative group cursor-pointer"
//             onMouseMove={(e) => handleMouseMove(e, "vision")}
//             onMouseLeave={handleMouseLeave}
//             onMouseEnter={() => setHoveredCard("vision")}
//             onMouseLeave={() => setHoveredCard(null)}
//             style={{
//               transform:
//                 hoveredCard === "vision"
//                   ? `perspective(800px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg) scale(1.02)`
//                   : "perspective(800px) rotateX(0) rotateY(0) scale(1)",
//               transition: "transform 0.2s cubic-bezier(0.65, 0, 0.35, 1)",
//             }}
//           >
//             {/* Card glow on hover */}
//             <motion.div
//               variants={glowVariants}
//               className="absolute inset-0 bg-gradient-to-br from-[#F5C400]/5 via-transparent to-transparent rounded-lg -z-10"
//               animate={{
//                 opacity: hoveredCard === "vision" ? 1 : 0,
//               }}
//               transition={{ duration: 0.4 }}
//             />

//             {/* Floating particles */}
//             {hoveredCard === "vision" &&
//               particles.map((particle) => (
//                 <motion.div
//                   key={particle.id}
//                   className="absolute w-1 h-1 rounded-full bg-[#F5C400]"
//                   style={{
//                     left: "50%",
//                     top: "50%",
//                     width: particle.size,
//                     height: particle.size,
//                   }}
//                   initial={{ opacity: 0, x: 0, y: 0 }}
//                   animate={{
//                     opacity: [0, 1, 0],
//                     x: Math.cos(particle.angle) * particle.distance,
//                     y: Math.sin(particle.angle) * particle.distance,
//                   }}
//                   transition={{
//                     duration: particle.duration,
//                     repeat: Infinity,
//                     delay: particle.delay,
//                     ease: "easeOut",
//                   }}
//                 />
//               ))}

//             {/* Animated Icon */}
//             <motion.div
//               variants={iconVariants}
//               initial="hidden"
//               animate={isInView ? ["visible", "float"] : "hidden"}
//             >
//               <Eye
//                 className="text-[#F5C400] transition-colors duration-300"
//                 size={32}
//                 strokeWidth={1.5}
//               />
//             </motion.div>

//             <div>
//               <motion.p
//                 className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4"
//                 animate={{
//                   color:
//                     hoveredCard === "vision"
//                       ? "rgba(245,196,0,0.6)"
//                       : "rgba(255,255,255,0.3)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 Our Vision
//               </motion.p>
//               <motion.p
//                 className="text-white text-lg leading-relaxed"
//                 animate={{
//                   color:
//                     hoveredCard === "vision"
//                       ? "#FFFFFF"
//                       : "rgba(255,255,255,0.8)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 To ensure edifying African stories are told authentically,
//                 powerfully, and on our own terms.
//               </motion.p>

//               {/* Animated decorative line */}
//               <motion.div
//                 className="h-[1px] bg-[#F5C400]/20 mt-6"
//                 initial={{ width: 0 }}
//                 animate={{
//                   width: hoveredCard === "vision" ? "40%" : "20%",
//                   opacity: hoveredCard === "vision" ? 0.6 : 0.2,
//                 }}
//                 transition={{ duration: 0.4 }}
//               />
//             </div>

//             {/* Corner accents */}
//             <motion.div
//               className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F5C400]/10"
//               animate={{
//                 opacity: hoveredCard === "vision" ? 0.4 : 0.1,
//                 scale: hoveredCard === "vision" ? 1.1 : 1,
//               }}
//               transition={{ duration: 0.3 }}
//             />
//             <motion.div
//               className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F5C400]/10"
//               animate={{
//                 opacity: hoveredCard === "vision" ? 0.4 : 0.1,
//                 scale: hoveredCard === "vision" ? 1.1 : 1,
//               }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>

//           {/* Mission Card */}
//           <motion.div
//             variants={cardVariants}
//             className="border border-white/10 p-10 flex flex-col gap-6 relative group cursor-pointer"
//             onMouseMove={(e) => handleMouseMove(e, "mission")}
//             onMouseLeave={handleMouseLeave}
//             onMouseEnter={() => setHoveredCard("mission")}
//             onMouseLeave={() => setHoveredCard(null)}
//             style={{
//               transform:
//                 hoveredCard === "mission"
//                   ? `perspective(800px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg) scale(1.02)`
//                   : "perspective(800px) rotateX(0) rotateY(0) scale(1)",
//               transition: "transform 0.2s cubic-bezier(0.65, 0, 0.35, 1)",
//             }}
//           >
//             {/* Card glow on hover */}
//             <motion.div
//               variants={glowVariants}
//               className="absolute inset-0 bg-gradient-to-br from-[#F5C400]/5 via-transparent to-transparent rounded-lg -z-10"
//               animate={{
//                 opacity: hoveredCard === "mission" ? 1 : 0,
//               }}
//               transition={{ duration: 0.4 }}
//             />

//             {/* Floating particles */}
//             {hoveredCard === "mission" &&
//               particles.map((particle) => (
//                 <motion.div
//                   key={particle.id}
//                   className="absolute w-1 h-1 rounded-full bg-[#F5C400]"
//                   style={{
//                     left: "50%",
//                     top: "50%",
//                     width: particle.size,
//                     height: particle.size,
//                   }}
//                   initial={{ opacity: 0, x: 0, y: 0 }}
//                   animate={{
//                     opacity: [0, 1, 0],
//                     x:
//                       Math.cos(particle.angle + Math.PI / 2) *
//                       particle.distance,
//                     y:
//                       Math.sin(particle.angle + Math.PI / 2) *
//                       particle.distance,
//                   }}
//                   transition={{
//                     duration: particle.duration,
//                     repeat: Infinity,
//                     delay: particle.delay + 1,
//                     ease: "easeOut",
//                   }}
//                 />
//               ))}

//             {/* Animated Icon */}
//             <motion.div
//               variants={iconVariants}
//               initial="hidden"
//               animate={isInView ? ["visible", "float"] : "hidden"}
//               transition={{
//                 delay: 0.2,
//               }}
//             >
//               <Target
//                 className="text-[#F5C400] transition-colors duration-300"
//                 size={32}
//                 strokeWidth={1.5}
//               />
//             </motion.div>

//             <div>
//               <motion.p
//                 className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4"
//                 animate={{
//                   color:
//                     hoveredCard === "mission"
//                       ? "rgba(245,196,0,0.6)"
//                       : "rgba(255,255,255,0.3)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 Our Mission
//               </motion.p>
//               <motion.p
//                 className="text-white text-lg leading-relaxed"
//                 animate={{
//                   color:
//                     hoveredCard === "mission"
//                       ? "#FFFFFF"
//                       : "rgba(255,255,255,0.8)",
//                 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 To build the creative infrastructure that enables African
//                 storytellers to produce, own, and share stories that are
//                 edifying, authentic, and theirs.
//               </motion.p>

//               {/* Animated decorative line */}
//               <motion.div
//                 className="h-[1px] bg-[#F5C400]/20 mt-6"
//                 initial={{ width: 0 }}
//                 animate={{
//                   width: hoveredCard === "mission" ? "40%" : "20%",
//                   opacity: hoveredCard === "mission" ? 0.6 : 0.2,
//                 }}
//                 transition={{ duration: 0.4 }}
//               />
//             </div>

//             {/* Corner accents */}
//             <motion.div
//               className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F5C400]/10"
//               animate={{
//                 opacity: hoveredCard === "mission" ? 0.4 : 0.1,
//                 scale: hoveredCard === "mission" ? 1.1 : 1,
//               }}
//               transition={{ duration: 0.3 }}
//             />
//             <motion.div
//               className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F5C400]/10"
//               animate={{
//                 opacity: hoveredCard === "mission" ? 0.4 : 0.1,
//                 scale: hoveredCard === "mission" ? 1.1 : 1,
//               }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.div>
//         </motion.div>

//         {/* Bottom decorative element */}
//         <motion.div
//           initial={{ scaleX: 0, opacity: 0 }}
//           animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
//           transition={{ delay: 0.8, duration: 1 }}
//           className="mt-16 flex justify-center"
//         >
//           <motion.div
//             className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent"
//             animate={{
//               scaleX: [1, 1.2, 1],
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// }

"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, Target } from "lucide-react";

// Fixed particles outside component — no Math.random during render
const particles = [
  { id: 0, angle: 0, distance: 70, size: 2, duration: 4, delay: 0 },
  { id: 1, angle: 1.05, distance: 85, size: 3, duration: 5, delay: 0.5 },
  { id: 2, angle: 2.09, distance: 65, size: 2, duration: 3.5, delay: 1 },
  { id: 3, angle: 3.14, distance: 90, size: 3, duration: 4.5, delay: 0.3 },
  { id: 4, angle: 4.19, distance: 75, size: 2, duration: 3, delay: 1.5 },
  { id: 5, angle: 5.24, distance: 80, size: 3, duration: 5, delay: 0.8 },
];

type CardId = "vision" | "mission" | null;

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<CardId>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setHoveredCard(null);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
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
        delay: 0.4,
      },
    },
  };

  const glowVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const cards = [
    {
      id: "vision" as CardId,
      label: "Our Vision",
      icon: Eye,
      copy: "To ensure edifying African stories are told authentically, powerfully, and on our own terms.",
    },
    {
      id: "mission" as CardId,
      label: "Our Mission",
      icon: Target,
      copy: "To build the creative infrastructure that enables African storytellers to produce, own, and share stories that are edifying, authentic, and theirs.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-[#1A1A1A] py-28 border-b border-white/10 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(ellipse at 20% 50%, rgba(245,196,0,0.03) 0%, transparent 70%)",
            "radial-gradient(ellipse at 80% 50%, rgba(245,196,0,0.03) 0%, transparent 70%)",
            "radial-gradient(ellipse at 50% 50%, rgba(245,196,0,0.03) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-14"
        >
          <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400]">
            Vision &amp; Mission
          </p>
          <motion.div
            className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#F5C400]/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === card.id;

            return (
              <motion.div
                key={card.id}
                variants={cardVariants}
                className="border border-white/10 p-10 flex flex-col gap-6 relative group cursor-pointer"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: isHovered
                    ? `perspective(800px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * 8}deg) scale(1.02)`
                    : "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
                  transition: "transform 0.2s ease",
                }}
              >
                {/* Hover glow */}
                <motion.div
                  variants={glowVariants}
                  className="absolute inset-0 bg-gradient-to-br from-[#F5C400]/5 via-transparent to-transparent rounded-lg -z-10"
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Floating particles on hover */}
                {isHovered &&
                  particles.map((particle) => (
                    <motion.div
                      key={particle.id}
                      className="absolute rounded-full bg-[#F5C400] pointer-events-none"
                      style={{
                        left: "50%",
                        top: "50%",
                        width: particle.size,
                        height: particle.size,
                      }}
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      animate={{
                        opacity: [0, 1, 0],
                        x: Math.cos(particle.angle) * particle.distance,
                        y: Math.sin(particle.angle) * particle.distance,
                      }}
                      transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeOut",
                      }}
                    />
                  ))}

                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  animate={
                    isInView
                      ? {
                          scale: 1,
                          rotate: 0,
                          y: [0, -8, 0],
                        }
                      : { scale: 0, rotate: -180 }
                  }
                  transition={{
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    scale: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.4,
                    },
                    rotate: {
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.4,
                    },
                  }}
                >
                  <Icon
                    className="text-[#F5C400]"
                    size={32}
                    strokeWidth={1.5}
                  />
                </motion.div>

                <div>
                  {/* Card label */}
                  <motion.p
                    className="text-[11px] font-bold tracking-[0.25em] uppercase mb-4"
                    animate={{
                      color: isHovered
                        ? "rgba(245,196,0,0.6)"
                        : "rgba(255,255,255,0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.label}
                  </motion.p>

                  {/* Card copy */}
                  <motion.p
                    className="text-white text-lg leading-relaxed"
                    animate={{
                      color: isHovered ? "#FFFFFF" : "rgba(255,255,255,0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {card.copy}
                  </motion.p>

                  {/* Animated underline */}
                  <motion.div
                    className="h-[1px] bg-[#F5C400]/20 mt-6"
                    animate={{
                      width: isHovered ? "40%" : "20%",
                      opacity: isHovered ? 0.6 : 0.2,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Corner accents */}
                <motion.div
                  className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F5C400]/10"
                  animate={{
                    opacity: isHovered ? 0.4 : 0.1,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F5C400]/10"
                  animate={{
                    opacity: isHovered ? 0.4 : 0.1,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent"
            animate={{ scaleX: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
