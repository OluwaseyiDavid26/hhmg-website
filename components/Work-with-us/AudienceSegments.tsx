// "use client";

// import Link from "next/link";
// import { motion, Variants } from "framer-motion";

// const SEGMENTS = [
//   {
//     id: "brands",
//     index: "01",
//     tag: "HH Media Studios",
//     title: "For Brands & Organisations",
//     copy: "Need video, photography, or branded content? HH Media Studios is your production partner.",
//     cta: "Start a Project",
//     href: "/contact?type=production",
//   },
//   {
//     id: "filmmakers",
//     index: "02",
//     tag: "HH Media Rentals",
//     title: "For Filmmakers & Productions",
//     copy: "Looking for professional equipment without the cost of ownership? HH Media Rentals has your kit.",
//     cta: "Browse Equipment",
//     href: "/companies/rentals",
//   },
//   {
//     id: "creators",
//     index: "03",
//     tag: "HH Creators Platform",
//     title: "For Content Creators",
//     copy: "Ready to level up? Join the HH Creators Platform for training, community, and opportunities.",
//     cta: "Join the Platform",
//     href: "/companies/creators-platform",
//   },
//   {
//     id: "investors",
//     index: "04",
//     tag: "Hand Held Media Group",
//     title: "For Investors & Partners",
//     copy: "Interested in the HHMG opportunity? We are open to strategic partnerships and investor conversations.",
//     cta: "Request a Pitch Deck",
//     href: "/contact?type=investment",
//   },
// ];

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//     },
//   },
// };

// const cardVariants: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     scale: 0.97,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 25,
//       duration: 0.5,
//     },
//   },
// };

// export default function AudienceSegments() {
//   return (
//     <section className="bg-[#1A1A1A] py-20 sm:py-24 px-6">
//       <motion.div
//         className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//       >
//         {SEGMENTS.map((segment) => (
//           <motion.div
//             key={segment.id}
//             id={segment.id}
//             variants={cardVariants}
//             whileHover={{
//               y: -6,
//               scale: 1.01,
//               borderColor: "rgba(245, 196, 0, 0.3)",
//               backgroundColor: "rgba(255, 255, 255, 0.03)",
//               transition: {
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 20,
//               },
//             }}
//             className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-9 scroll-mt-28"
//           >
//             <div className="flex items-start justify-between mb-6">
//               <motion.span
//                 initial={{ opacity: 0, x: -10 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-[#F5C400] text-[11px] font-semibold tracking-[0.2em] uppercase"
//               >
//                 {segment.tag}
//               </motion.span>
//               <motion.span
//                 whileHover={{ scale: 1.1, opacity: 0.5 }}
//                 className="text-white/20 text-sm font-semibold tabular-nums"
//               >
//                 {segment.index}
//               </motion.span>
//             </div>

//             <motion.h3
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3"
//             >
//               {segment.title}
//             </motion.h3>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.15 }}
//               className="text-white/60 text-sm sm:text-base leading-relaxed mb-8"
//             >
//               {segment.copy}
//             </motion.p>

//             <motion.div
//               whileHover={{ x: 6 }}
//               transition={{ type: "spring", stiffness: 400 }}
//             >
//               <Link
//                 href={segment.href}
//                 className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold transition-colors duration-200 hover:text-white"
//               >
//                 {segment.cta}
//                 <motion.svg
//                   className="w-4 h-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                   aria-hidden="true"
//                   whileHover={{ x: 4 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </motion.svg>
//               </Link>
//             </motion.div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// function useInView(threshold = 0.1) {
//   const ref = useRef<HTMLElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// /* ── Background: four converging signal paths from corners to center ── */
// function BgCanvas({ active }: { active: boolean }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number>(0);

//   useEffect(() => {
//     if (!active) return;
//     const cv = canvasRef.current;
//     if (!cv) return;
//     const parent = cv.parentElement;
//     if (!parent) return;
//     const ctx = cv.getContext("2d");
//     if (!ctx) return;

//     let t = 0;
//     const resize = () => {
//       cv.width = parent.offsetWidth;
//       cv.height = parent.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     type Particle = {
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       r: number;
//       a: number;
//       gold: boolean;
//     };
//     const particles: Particle[] = Array.from({ length: 32 }, () => ({
//       x: Math.random() * cv.width,
//       y: Math.random() * cv.height,
//       vx: (Math.random() - 0.5) * 0.14,
//       vy: (Math.random() - 0.5) * 0.14,
//       r: Math.random() * 1.1 + 0.3,
//       a: Math.random() * 0.2 + 0.04,
//       gold: Math.random() < 0.28,
//     }));

//     function draw() {
//       t += 0.009;
//       const W = cv.width,
//         H = cv.height;
//       const cx = W / 2,
//         cy = H / 2;
//       ctx.clearRect(0, 0, W, H);

//       /* Center gold glow — where the 4 paths converge */
//       const pulse = 0.5 + 0.5 * Math.sin(t * 0.8);
//       const gC = ctx.createRadialGradient(
//         cx,
//         cy,
//         0,
//         cx,
//         cy,
//         Math.min(W, H) * 0.5,
//       );
//       gC.addColorStop(
//         0,
//         `rgba(245,196,0,${(0.04 + pulse * 0.025).toFixed(3)})`,
//       );
//       gC.addColorStop(1, "transparent");
//       ctx.fillStyle = gC;
//       ctx.fillRect(0, 0, W, H);

//       /* Four corners converging toward center — like 4 audience paths meeting */
//       const corners = [
//         { x: 0, y: 0 },
//         { x: W, y: 0 },
//         { x: 0, y: H },
//         { x: W, y: H },
//       ];

//       corners.forEach((corner, i) => {
//         const travel = (t * 0.12 + i * 0.25) % 1;
//         const px = corner.x + (cx - corner.x) * travel;
//         const py = corner.y + (cy - corner.y) * travel;

//         /* faint static guide line */
//         ctx.strokeStyle = "rgba(245,196,0,0.035)";
//         ctx.lineWidth = 0.6;
//         ctx.beginPath();
//         ctx.moveTo(corner.x, corner.y);
//         ctx.lineTo(cx, cy);
//         ctx.stroke();

//         /* traveling pulse dot along the line */
//         const fade =
//           travel < 0.1 ? travel / 0.1 : travel > 0.85 ? (1 - travel) / 0.15 : 1;
//         ctx.beginPath();
//         ctx.arc(px, py, 2.2, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(245,196,0,${(fade * 0.55).toFixed(3)})`;
//         ctx.fill();

//         /* trailing glow */
//         const gT = ctx.createRadialGradient(px, py, 0, px, py, 18);
//         gT.addColorStop(0, `rgba(245,196,0,${(fade * 0.12).toFixed(3)})`);
//         gT.addColorStop(1, "transparent");
//         ctx.fillStyle = gT;
//         ctx.beginPath();
//         ctx.arc(px, py, 18, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       /* Particles */
//       particles.forEach((p) => {
//         p.x = (p.x + p.vx + W) % W;
//         p.y = (p.y + p.vy + H) % H;
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.gold
//           ? `rgba(245,196,0,${p.a})`
//           : `rgba(255,255,255,${p.a * 0.4})`;
//         ctx.fill();
//       });

//       /* Scanline */
//       const scanY = (t * 26) % H;
//       const sg = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10);
//       sg.addColorStop(0, "transparent");
//       sg.addColorStop(0.5, "rgba(245,196,0,0.012)");
//       sg.addColorStop(1, "transparent");
//       ctx.fillStyle = sg;
//       ctx.fillRect(0, scanY - 10, W, 20);

//       rafRef.current = requestAnimationFrame(draw);
//     }

//     rafRef.current = requestAnimationFrame(draw);
//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("resize", resize);
//     };
//   }, [active]);

//   return (
//     <canvas
//       ref={canvasRef}
//       aria-hidden="true"
//       className="absolute inset-0 w-full h-full pointer-events-none"
//       style={{ zIndex: 0 }}
//     />
//   );
// }

// const SEGMENTS = [
//   {
//     id: "brands",
//     index: "01",
//     tag: "HH Media Studios",
//     title: "For Brands & Organisations",
//     copy: "Need video, photography, or branded content? HH Media Studios is your production partner.",
//     cta: "Start a Project",
//     href: "/contact?type=production",
//   },
//   {
//     id: "filmmakers",
//     index: "02",
//     tag: "HH Media Rentals",
//     title: "For Filmmakers & Productions",
//     copy: "Looking for professional equipment without the cost of ownership? HH Media Rentals has your kit.",
//     cta: "Browse Equipment",
//     href: "/companies/rentals",
//   },
//   {
//     id: "creators",
//     index: "03",
//     tag: "HH Creators Platform",
//     title: "For Content Creators",
//     copy: "Ready to level up? Join the HH Creators Platform for training, community, and opportunities.",
//     cta: "Join the Platform",
//     href: "/companies/creators-platform",
//   },
//   {
//     id: "investors",
//     index: "04",
//     tag: "Hand Held Media Group",
//     title: "For Investors & Partners",
//     copy: "Interested in the HHMG opportunity? We are open to strategic partnerships and investor conversations.",
//     cta: "Request a Pitch Deck",
//     href: "/contact?type=investment",
//   },
// ];

// function SegmentCard({
//   segment,
//   index,
//   inView,
// }: {
//   segment: (typeof SEGMENTS)[number];
//   index: number;
//   inView: boolean;
// }) {
//   const [hovered, setHovered] = useState(false);
//   const delay = 0.15 + index * 0.13;

//   return (
//     <div
//       id={segment.id}
//       className="group relative rounded-2xl p-8 sm:p-9 scroll-mt-28 overflow-hidden"
//       style={{
//         border: `1px solid ${hovered ? "rgba(245,196,0,0.3)" : "rgba(255,255,255,0.08)"}`,
//         background: hovered
//           ? "rgba(255,255,255,0.03)"
//           : "rgba(255,255,255,0.02)",
//         opacity: inView ? 1 : 0,
//         transform: inView
//           ? hovered
//             ? "translateY(-6px) scale(1.01)"
//             : "translateY(0) scale(1)"
//           : "translateY(40px) scale(0.97)",
//         transition: inView
//           ? "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, background 0.3s"
//           : `opacity 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}s`,
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Corner accent that draws in on hover */}
//       <span
//         className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
//         style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}
//       >
//         <span className="absolute top-0 left-0 w-4 h-px bg-[#F5C400]/50" />
//         <span className="absolute top-0 left-0 w-px h-4 bg-[#F5C400]/50" />
//       </span>
//       <span
//         className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
//         style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}
//       >
//         <span className="absolute bottom-0 right-0 w-4 h-px bg-[#F5C400]/50" />
//         <span className="absolute bottom-0 right-0 w-px h-4 bg-[#F5C400]/50" />
//       </span>

//       <div className="flex items-start justify-between mb-6">
//         <span
//           className="text-[#F5C400] text-[11px] font-semibold tracking-[0.2em] uppercase"
//           style={{
//             opacity: inView ? 1 : 0,
//             transform: inView ? "translateX(0)" : "translateX(-10px)",
//             transition: `opacity 0.5s ease ${delay + 0.15}s, transform 0.5s ease ${delay + 0.15}s`,
//           }}
//         >
//           {segment.tag}
//         </span>
//         <span
//           className="text-white/20 text-sm font-semibold tabular-nums"
//           style={{
//             transform: hovered ? "scale(1.1)" : "scale(1)",
//             opacity: hovered ? 0.5 : 0.2,
//             transition: "transform 0.25s, opacity 0.25s",
//           }}
//         >
//           {segment.index}
//         </span>
//       </div>

//       <h3
//         className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3"
//         style={{
//           opacity: inView ? 1 : 0,
//           transition: `opacity 0.6s ease ${delay + 0.1}s`,
//         }}
//       >
//         {segment.title}
//       </h3>

//       <p
//         className="text-white/60 text-sm sm:text-base leading-relaxed mb-8"
//         style={{
//           opacity: inView ? 1 : 0,
//           transition: `opacity 0.6s ease ${delay + 0.18}s`,
//         }}
//       >
//         {segment.copy}
//       </p>

//       <div
//         style={{
//           transform: hovered ? "translateX(6px)" : "translateX(0)",
//           transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
//         }}
//       >
//         <Link
//           href={segment.href}
//           className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold transition-colors duration-200 hover:text-white"
//         >
//           {segment.cta}
//           <svg
//             className="w-4 h-4"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2.5}
//             aria-hidden="true"
//             style={{
//               transform: hovered ? "translateX(4px)" : "translateX(0)",
//               transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
//             }}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M17 8l4 4m0 0l-4 4m4-4H3"
//             />
//           </svg>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default function AudienceSegments() {
//   const { ref, inView } = useInView(0.1);

//   return (
//     <section
//       ref={ref as React.RefObject<HTMLElement>}
//       className="relative bg-[#1A1A1A] py-20 sm:py-24 px-6 overflow-hidden"
//     >
//       {/* Converging signal background */}
//       <BgCanvas active={inView} />

//       {/* Noise */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           zIndex: 1,
//           opacity: 0.08,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//           backgroundSize: "160px 160px",
//         }}
//       />

//       <div
//         className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
//         style={{ zIndex: 10 }}
//       >
//         {SEGMENTS.map((segment, i) => (
//           <SegmentCard
//             key={segment.id}
//             segment={segment}
//             index={i}
//             inView={inView}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ── Background: four converging signal paths from corners to center ── */
function BgCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const cv = canvasRef.current;
    if (!cv) return;
    const parent = cv.parentElement;
    if (!parent) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let t = 0;
    const resize = () => {
      cv.width = parent.offsetWidth;
      cv.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      gold: boolean;
    };
    const particles: Particle[] = Array.from({ length: 32 }, () => ({
      x: Math.random() * cv.width,
      y: Math.random() * cv.height,
      vx: (Math.random() - 0.5) * 0.14,
      vy: (Math.random() - 0.5) * 0.14,
      r: Math.random() * 1.1 + 0.3,
      a: Math.random() * 0.2 + 0.04,
      gold: Math.random() < 0.28,
    }));

    function draw() {
      // Check if cv and ctx still exist before drawing
      if (!cv || !ctx) return;

      t += 0.009;
      const W = cv.width,
        H = cv.height;
      const cx = W / 2,
        cy = H / 2;
      ctx.clearRect(0, 0, W, H);

      /* Center gold glow — where the 4 paths converge */
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.8);
      const gC = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.min(W, H) * 0.5,
      );
      gC.addColorStop(
        0,
        `rgba(245,196,0,${(0.04 + pulse * 0.025).toFixed(3)})`,
      );
      gC.addColorStop(1, "transparent");
      ctx.fillStyle = gC;
      ctx.fillRect(0, 0, W, H);

      /* Four corners converging toward center — like 4 audience paths meeting */
      const corners = [
        { x: 0, y: 0 },
        { x: W, y: 0 },
        { x: 0, y: H },
        { x: W, y: H },
      ];

      corners.forEach((corner, i) => {
        const travel = (t * 0.12 + i * 0.25) % 1;
        const px = corner.x + (cx - corner.x) * travel;
        const py = corner.y + (cy - corner.y) * travel;

        /* faint static guide line */
        ctx.strokeStyle = "rgba(245,196,0,0.035)";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(corner.x, corner.y);
        ctx.lineTo(cx, cy);
        ctx.stroke();

        /* traveling pulse dot along the line */
        const fade =
          travel < 0.1 ? travel / 0.1 : travel > 0.85 ? (1 - travel) / 0.15 : 1;
        ctx.beginPath();
        ctx.arc(px, py, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,196,0,${(fade * 0.55).toFixed(3)})`;
        ctx.fill();

        /* trailing glow */
        const gT = ctx.createRadialGradient(px, py, 0, px, py, 18);
        gT.addColorStop(0, `rgba(245,196,0,${(fade * 0.12).toFixed(3)})`);
        gT.addColorStop(1, "transparent");
        ctx.fillStyle = gT;
        ctx.beginPath();
        ctx.arc(px, py, 18, 0, Math.PI * 2);
        ctx.fill();
      });

      /* Particles */
      particles.forEach((p) => {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(245,196,0,${p.a})`
          : `rgba(255,255,255,${p.a * 0.4})`;
        ctx.fill();
      });

      /* Scanline */
      const scanY = (t * 26) % H;
      const sg = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(245,196,0,0.012)");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 10, W, 20);

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

const SEGMENTS = [
  {
    id: "brands",
    index: "01",
    tag: "HH Media Studios",
    title: "For Brands & Organisations",
    copy: "Need video, photography, or branded content? HH Media Studios is your production partner.",
    cta: "Start a Project",
    href: "/contact?type=production",
  },
  {
    id: "filmmakers",
    index: "02",
    tag: "HH Media Rentals",
    title: "For Filmmakers & Productions",
    copy: "Looking for professional equipment without the cost of ownership? HH Media Rentals has your kit.",
    cta: "Browse Equipment",
    href: "/companies/rentals",
  },
  {
    id: "creators",
    index: "03",
    tag: "HH Creators Platform",
    title: "For Content Creators",
    copy: "Ready to level up? Join the HH Creators Platform for training, community, and opportunities.",
    cta: "Join the Platform",
    href: "/companies/creators-platform",
  },
  {
    id: "investors",
    index: "04",
    tag: "Hand Held Media Group",
    title: "For Investors & Partners",
    copy: "Interested in the HHMG opportunity? We are open to strategic partnerships and investor conversations.",
    cta: "Request a Pitch Deck",
    href: "/contact?type=investment",
  },
];

function SegmentCard({
  segment,
  index,
  inView,
}: {
  segment: (typeof SEGMENTS)[number];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const delay = 0.15 + index * 0.13;

  return (
    <div
      id={segment.id}
      className="group relative rounded-2xl p-8 sm:p-9 scroll-mt-28 overflow-hidden"
      style={{
        border: `1px solid ${hovered ? "rgba(245,196,0,0.3)" : "rgba(255,255,255,0.08)"}`,
        background: hovered
          ? "rgba(255,255,255,0.03)"
          : "rgba(255,255,255,0.02)",
        opacity: inView ? 1 : 0,
        transform: inView
          ? hovered
            ? "translateY(-6px) scale(1.01)"
            : "translateY(0) scale(1)"
          : "translateY(40px) scale(0.97)",
        transition: inView
          ? "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s, background 0.3s"
          : `opacity 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner accent that draws in on hover */}
      <span
        className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <span className="absolute top-0 left-0 w-4 h-px bg-[#F5C400]/50" />
        <span className="absolute top-0 left-0 w-px h-4 bg-[#F5C400]/50" />
      </span>
      <span
        className="absolute bottom-0 right-0 w-6 h-6 pointer-events-none"
        style={{ opacity: hovered ? 1 : 0, transition: "opacity 0.3s" }}
      >
        <span className="absolute bottom-0 right-0 w-4 h-px bg-[#F5C400]/50" />
        <span className="absolute bottom-0 right-0 w-px h-4 bg-[#F5C400]/50" />
      </span>

      <div className="flex items-start justify-between mb-6">
        <span
          className="text-[#F5C400] text-[11px] font-semibold tracking-[0.2em] uppercase"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-10px)",
            transition: `opacity 0.5s ease ${delay + 0.15}s, transform 0.5s ease ${delay + 0.15}s`,
          }}
        >
          {segment.tag}
        </span>
        <span
          className="text-white/20 text-sm font-semibold tabular-nums"
          style={{
            transform: hovered ? "scale(1.1)" : "scale(1)",
            opacity: hovered ? 0.5 : 0.2,
            transition: "transform 0.25s, opacity 0.25s",
          }}
        >
          {segment.index}
        </span>
      </div>

      <h3
        className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.6s ease ${delay + 0.1}s`,
        }}
      >
        {segment.title}
      </h3>

      <p
        className="text-white/60 text-sm sm:text-base leading-relaxed mb-8"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.6s ease ${delay + 0.18}s`,
        }}
      >
        {segment.copy}
      </p>

      <div
        style={{
          transform: hovered ? "translateX(6px)" : "translateX(0)",
          transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
        }}
      >
        <Link
          href={segment.href}
          className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold transition-colors duration-200 hover:text-white"
        >
          {segment.cta}
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
            style={{
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function AudienceSegments() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative bg-[#1A1A1A] py-20 sm:py-24 px-6 overflow-hidden"
    >
      {/* Converging signal background */}
      <BgCanvas active={inView} />

      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      <div
        className="relative max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
        style={{ zIndex: 10 }}
      >
        {SEGMENTS.map((segment, i) => (
          <SegmentCard
            key={segment.id}
            segment={segment}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
}
