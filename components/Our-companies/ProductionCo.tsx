// "use client";

// import Link from "next/link";
// import { motion, useInView, Variants } from "framer-motion";
// import { useRef } from "react";

// export default function ProductionCo() {
//   const ref = useRef<HTMLElement>(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   const leftVariants: Variants = {
//     hidden: { opacity: 0, x: -70 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 1.1, ease: "easeInOut" },
//     },
//   };

//   const cardVariants: Variants = {
//     hidden: { opacity: 0, y: 70, scale: 0.97 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { duration: 1.1, delay: 0.25, ease: "easeInOut" },
//     },
//   };

//   const metaVariants: Variants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, delay: 0.8 + i * 0.15, ease: "easeInOut" },
//     }),
//   };

//   return (
//     <motion.section
//       ref={ref}
//       id="production"
//       className="bg-[#0D0D0D] py-24 px-6 scroll-mt-20"
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//     >
//       <div className="max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
//           {/* ── LEFT — slides in from left ── */}
//           <motion.div variants={leftVariants} className="lg:col-span-5">
//             {/* Company label */}
//             <div className="inline-flex items-center gap-3 mb-6">
//               <span className="text-white/15 text-xs font-mono">04</span>
//               <div className="w-6 h-[1px] bg-white/15" />
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                 HH Media & Production Co.
//               </span>
//             </div>

//             {/* Headline */}
//             <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
//               Original stories.{" "}
//               <span
//                 className="text-[#F5C400]"
//                 style={{ textShadow: "0 0 40px rgba(245,196,0,0.2)" }}
//               >
//                 Told right.
//               </span>
//             </h2>

//             <p className="text-white/55 text-base leading-relaxed mb-4">
//               Hand Held Media & Production Company is the Group's content and IP
//               arm. We develop, produce, and distribute original television,
//               digital, and branded content that reflects the richness and
//               complexity of African life and experience.
//             </p>

//             <p className="text-white/55 text-base leading-relaxed mb-10">
//               Our flagship production,{" "}
//               <span className="text-white font-semibold italic">Restored</span>,
//               is currently in production — and it is just the beginning.
//             </p>

//             {/* CTAs */}
//             <motion.div
//               className="flex flex-col sm:flex-row gap-3"
//               initial={{ opacity: 0, y: 24 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.9, delay: 0.5, ease: "easeInOut" }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 <Link
//                   href="/restored"
//                   className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-6 py-3.5 rounded-sm hover:bg-[#e6b800] transition-all duration-200 uppercase tracking-wide"
//                 >
//                   Learn More About Restored
//                   <svg
//                     className="w-4 h-4"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2.5}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </Link>
//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.03 }}
//                 whileTap={{ scale: 0.97 }}
//               >
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 text-sm font-medium px-6 py-3.5 rounded-sm hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-all duration-200 uppercase tracking-wide"
//                 >
//                   Partner With Us
//                 </Link>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           {/* ── RIGHT — Restored card rises up ── */}
//           <div className="lg:col-span-7 flex flex-col justify-center">
//             <motion.p
//               className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.8, delay: 0.3 }}
//             >
//               Current Production
//             </motion.p>

//             {/* Restored card */}
//             <motion.div
//               variants={cardVariants}
//               className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
//             >
//               {/* Card glow */}
//               <div className="absolute inset-0 pointer-events-none">
//                 <motion.div
//                   className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-[#F5C400] blur-[60px]"
//                   initial={{ opacity: 0 }}
//                   animate={isInView ? { opacity: 0.05 } : {}}
//                   transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
//                 />
//                 <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent" />
//               </div>

//               <div className="relative z-10 p-8">
//                 {/* Status badge */}
//                 <motion.div
//                   className="inline-flex items-center gap-2 mb-6"
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={isInView ? { opacity: 1, x: 0 } : {}}
//                   transition={{ duration: 0.8, delay: 0.55, ease: "easeInOut" }}
//                 >
//                   <span className="relative flex h-2 w-2">
//                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-75" />
//                     <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
//                   </span>
//                   <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.25em] uppercase">
//                     Now in Production
//                   </span>
//                 </motion.div>

//                 {/* Show title */}
//                 <motion.h3
//                   className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-2"
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 1, delay: 0.65, ease: "easeInOut" }}
//                 >
//                   Restored
//                 </motion.h3>

//                 <motion.p
//                   className="text-white/35 text-xs font-medium tracking-widest uppercase mb-6"
//                   initial={{ opacity: 0 }}
//                   animate={isInView ? { opacity: 1 } : {}}
//                   transition={{ duration: 0.8, delay: 0.75 }}
//                 >
//                   A TV Testimony Series
//                 </motion.p>

//                 {/* Divider — grows in */}
//                 <motion.div
//                   className="h-[1px] bg-[#F5C400]/50 mb-6 origin-left"
//                   initial={{ scaleX: 0 }}
//                   animate={isInView ? { scaleX: 1 } : {}}
//                   transition={{ duration: 0.8, delay: 0.85, ease: "easeInOut" }}
//                   style={{ width: 40 }}
//                 />

//                 {/* Description */}
//                 <motion.p
//                   className="text-white/55 text-sm leading-relaxed mb-8"
//                   initial={{ opacity: 0, y: 16 }}
//                   animate={isInView ? { opacity: 1, y: 0 } : {}}
//                   transition={{ duration: 0.8, delay: 0.9, ease: "easeInOut" }}
//                 >
//                   A television testimony series capturing stories of radical
//                   life transformation. Real people. Real change. Cinematic
//                   storytelling.
//                 </motion.p>

//                 {/* Meta row — each item staggers */}
//                 <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/[0.08]">
//                   {[
//                     { label: "Format", value: "Television Series" },
//                     { label: "Status", value: "In Production" },
//                     { label: "Distribution", value: "Coming Soon" },
//                   ].map((item, i) => (
//                     <motion.div
//                       key={item.label}
//                       custom={i}
//                       variants={metaVariants}
//                     >
//                       <p className="text-white/25 text-[10px] tracking-widest uppercase mb-1">
//                         {item.label}
//                       </p>
//                       <p className="text-white text-sm font-semibold">
//                         {item.value}
//                       </p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>

//               {/* Bottom accent — sweeps in */}
//               <motion.div
//                 className="h-[2px] bg-gradient-to-r from-[#F5C400]/50 via-[#F5C400]/20 to-transparent origin-left"
//                 initial={{ scaleX: 0 }}
//                 animate={isInView ? { scaleX: 1 } : {}}
//                 transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut" }}
//               />
//             </motion.div>

//             {/* Below card note */}
//             <motion.p
//               className="text-white/25 text-xs mt-4 leading-relaxed"
//               initial={{ opacity: 0 }}
//               animate={isInView ? { opacity: 1 } : {}}
//               transition={{ duration: 0.8, delay: 1.3 }}
//             >
//               Distribution details to follow. Visit the{" "}
//               <Link
//                 href="/restored"
//                 className="text-[#F5C400]/60 hover:text-[#F5C400] transition-colors underline underline-offset-2"
//               >
//                 Restored page
//               </Link>{" "}
//               for full production details and how to get involved.
//             </motion.p>
//           </div>
//         </div>

//         {/* Bottom divider */}
//         <motion.div
//           className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
//           initial={{ scaleX: 0, opacity: 0 }}
//           animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
//           transition={{ duration: 1.2, delay: 1.4, ease: "easeInOut" }}
//         />
//       </div>
//     </motion.section>
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

/* ── Background: film reel sprockets + light beams + particles ── */
function BgCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const cv = canvasRef.current;
    if (!cv) return;
    const canvas = cv;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let t = 0;
    const resize = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
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
    const particles: Particle[] = Array.from({ length: 38 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.22 + 0.04,
      gold: Math.random() < 0.3,
    }));

    function draw() {
      if (!ctx) return;
      t += 0.01;
      const W = canvas.width,
        H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      /* Gold orb — left behind headline */
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.5);
      const g1 = ctx.createRadialGradient(
        W * 0.12,
        H * 0.35,
        0,
        W * 0.12,
        H * 0.35,
        W * 0.35,
      );
      g1.addColorStop(
        0,
        `rgba(245,196,0,${(0.045 + pulse * 0.025).toFixed(3)})`,
      );
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      /* Gold orb — right behind card */
      const g2 = ctx.createRadialGradient(
        W * 0.82,
        H * 0.5,
        0,
        W * 0.82,
        H * 0.5,
        W * 0.4,
      );
      g2.addColorStop(
        0,
        `rgba(245,196,0,${(0.035 + pulse * 0.02).toFixed(3)})`,
      );
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      /* Rotating film reel — large, faint, right side */
      const reelCx = W * 0.88,
        reelCy = H * 0.3,
        reelR = Math.min(W, H) * 0.22;
      ctx.save();
      ctx.translate(reelCx, reelCy);
      ctx.rotate(t * 0.15);
      ctx.strokeStyle = "rgba(245,196,0,0.05)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, reelR, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, reelR * 0.7, 0, Math.PI * 2);
      ctx.stroke();
      // sprocket holes around reel
      for (let i = 0; i < 8; i++) {
        const a2 = (i / 8) * Math.PI * 2;
        const sx = Math.cos(a2) * reelR * 0.85;
        const sy = Math.sin(a2) * reelR * 0.85;
        ctx.beginPath();
        ctx.arc(sx, sy, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,196,0,0.045)";
        ctx.fill();
      }
      ctx.restore();

      /* Light beams from bottom left, like a projector */
      const beamCx = W * 0.08,
        beamCy = H * 1.1;
      [-0.25, -0.1, 0.05, 0.2].forEach((angle, i) => {
        const beamAlpha = 0.025 + pulse * 0.012;
        ctx.save();
        ctx.translate(beamCx, beamCy);
        ctx.rotate(angle);
        const bg = ctx.createLinearGradient(0, 0, 0, -H * 1.2);
        bg.addColorStop(0, `rgba(245,196,0,${beamAlpha.toFixed(3)})`);
        bg.addColorStop(1, "transparent");
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.moveTo(-30, 0);
        ctx.lineTo(30, 0);
        ctx.lineTo(8, -H * 1.2);
        ctx.lineTo(-8, -H * 1.2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
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
      const scanY = (t * 24) % H;
      const sg = ctx.createLinearGradient(0, scanY - 10, 0, scanY + 10);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(245,196,0,0.014)");
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

export default function ProductionCo() {
  const { ref, inView } = useInView(0.1);

  return (
    <>
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-70px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes riseScale {
          from { opacity: 0; transform: translateY(70px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleXIn {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes cardGlowPulse {
          0%,100% { opacity: 0.04; }
          50%     { opacity: 0.08; }
        }
        @keyframes letterDrop {
          from { opacity: 0; transform: translateY(36px) rotateX(35deg); }
          to   { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        .letter-drop {
          display: inline-block;
          opacity: 0;
        }
      `}</style>

      <section
        ref={ref as React.RefObject<HTMLElement>}
        id="production"
        className="relative bg-[#0D0D0D] py-24 px-6 scroll-mt-20 overflow-hidden"
      >
        {/* Animated background */}
        <BgCanvas active={inView} />

        {/* Noise */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            opacity: 0.09,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        <div className="relative max-w-5xl mx-auto" style={{ zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* ── LEFT — slides in from left ── */}
            <div
              className="lg:col-span-5"
              style={{
                opacity: inView ? 1 : 0,
                animation: inView
                  ? "slideInLeft 1.1s cubic-bezier(0.16,1,0.3,1) both"
                  : "none",
              }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="text-white/15 text-xs font-mono">04</span>
                <div className="w-6 h-px bg-white/15" />
                <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                  HH Media &amp; Production Co.
                </span>
              </div>

              {/* Headline — letters drop with 3D flip */}
              <h2
                className="font-display text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6"
                style={{ perspective: "700px" }}
              >
                {"Original stories. ".split("").map((c, i) => (
                  <span
                    key={i}
                    className="letter-drop"
                    style={{
                      animation: inView
                        ? `letterDrop 0.5s cubic-bezier(0.22,1,0.36,1) ${0.25 + i * 0.018}s both`
                        : "none",
                    }}
                  >
                    {c === " " ? "\u00a0" : c}
                  </span>
                ))}
                <span
                  style={{
                    color: "#F5C400",
                    textShadow: "0 0 40px rgba(245,196,0,0.2)",
                  }}
                >
                  {"Told right.".split("").map((c, i) => (
                    <span
                      key={i}
                      className="letter-drop"
                      style={{
                        animation: inView
                          ? `letterDrop 0.5s cubic-bezier(0.22,1,0.36,1) ${0.6 + i * 0.018}s both`
                          : "none",
                      }}
                    >
                      {c === " " ? "\u00a0" : c}
                    </span>
                  ))}
                </span>
              </h2>

              <p
                className="text-white/55 text-base leading-relaxed mb-4"
                style={{
                  opacity: inView ? 1 : 0,
                  animation: inView ? "fadeUp 0.8s ease 1s both" : "none",
                }}
              >
                Hand Held Media &amp; Production Company is the Group&rsquo;s
                content and IP arm. We develop, produce, and distribute original
                television, digital, and branded content that reflects the
                richness and complexity of African life and experience.
              </p>

              <p
                className="text-white/55 text-base leading-relaxed mb-10"
                style={{
                  opacity: inView ? 1 : 0,
                  animation: inView ? "fadeUp 0.8s ease 1.15s both" : "none",
                }}
              >
                Our flagship production,{" "}
                <span className="text-white font-semibold italic">
                  Restored
                </span>
                , is currently in production — and it is just the beginning.
              </p>

              {/* CTAs */}
              <div
                className="flex flex-col sm:flex-row gap-3"
                style={{
                  opacity: inView ? 1 : 0,
                  animation: inView ? "fadeUp 0.9s ease 1.3s both" : "none",
                }}
              >
                <Link
                  href="/restored"
                  className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-6 py-3.5 rounded-sm hover:bg-[#e6b800] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 uppercase tracking-wide"
                >
                  Learn More About Restored
                  <svg
                    className="w-4 h-4"
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
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 text-sm font-medium px-6 py-3.5 rounded-sm hover:border-[#F5C400]/40 hover:text-[#F5C400] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 uppercase tracking-wide"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* ── RIGHT — Restored card rises up ── */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <p
                className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
                style={{
                  opacity: inView ? 1 : 0,
                  animation: inView ? "fadeIn 0.8s ease 0.3s both" : "none",
                }}
              >
                Current Production
              </p>

              {/* Restored card */}
              <div
                className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]"
                style={{
                  opacity: inView ? 1 : 0,
                  animation: inView
                    ? "riseScale 1.1s cubic-bezier(0.22,1,0.36,1) 0.25s both"
                    : "none",
                }}
              >
                {/* Card glow */}
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-[#F5C400] blur-[60px]"
                    style={{
                      animation: inView
                        ? "cardGlowPulse 4s ease-in-out 1s infinite"
                        : "none",
                      opacity: 0,
                    }}
                  />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent" />
                </div>

                <div className="relative z-10 p-8">
                  {/* Status badge */}
                  <div
                    className="inline-flex items-center gap-2 mb-6"
                    style={{
                      opacity: inView ? 1 : 0,
                      animation: inView
                        ? "fadeUp 0.8s ease 0.55s both"
                        : "none",
                    }}
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
                    </span>
                    <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.25em] uppercase">
                      Now in Production
                    </span>
                  </div>

                  {/* Show title */}
                  <h3
                    className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-2"
                    style={{
                      opacity: inView ? 1 : 0,
                      animation: inView ? "fadeUp 1s ease 0.65s both" : "none",
                    }}
                  >
                    Restored
                  </h3>

                  <p
                    className="text-white/35 text-xs font-medium tracking-widest uppercase mb-6"
                    style={{
                      opacity: inView ? 1 : 0,
                      animation: inView
                        ? "fadeIn 0.8s ease 0.75s both"
                        : "none",
                    }}
                  >
                    A TV Testimony Series
                  </p>

                  {/* Divider */}
                  <div
                    className="h-px bg-[#F5C400]/50 mb-6 origin-left"
                    style={{
                      width: 40,
                      transform: "scaleX(0)",
                      animation: inView
                        ? "scaleXIn 0.8s ease 0.85s both"
                        : "none",
                    }}
                  />

                  {/* Description */}
                  <p
                    className="text-white/55 text-sm leading-relaxed mb-8"
                    style={{
                      opacity: inView ? 1 : 0,
                      animation: inView ? "fadeUp 0.8s ease 0.9s both" : "none",
                    }}
                  >
                    A television testimony series capturing stories of radical
                    life transformation. Real people. Real change. Cinematic
                    storytelling.
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-wrap gap-x-8 gap-y-3 pt-6 border-t border-white/[0.08]">
                    {[
                      { label: "Format", value: "Television Series" },
                      { label: "Status", value: "In Production" },
                      { label: "Distribution", value: "Coming Soon" },
                    ].map((item, i) => (
                      <div
                        key={item.label}
                        style={{
                          opacity: inView ? 1 : 0,
                          transform: inView
                            ? "translateY(0)"
                            : "translateY(20px)",
                          transition: `opacity 0.7s ease ${0.8 + i * 0.15}s, transform 0.7s ease ${0.8 + i * 0.15}s`,
                        }}
                      >
                        <p className="text-white/25 text-[10px] tracking-widest uppercase mb-1">
                          {item.label}
                        </p>
                        <p className="text-white text-sm font-semibold">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className="h-[2px] bg-gradient-to-r from-[#F5C400]/50 via-[#F5C400]/20 to-transparent origin-left"
                  style={{
                    transform: "scaleX(0)",
                    animation: inView ? "scaleXIn 1.2s ease 1.0s both" : "none",
                  }}
                />
              </div>

              {/* Below card note */}
              <p
                className="text-white/25 text-xs mt-4 leading-relaxed"
                style={{
                  opacity: inView ? 1 : 0,
                  animation: inView ? "fadeIn 0.8s ease 1.3s both" : "none",
                }}
              >
                Distribution details to follow. Visit the{" "}
                <Link
                  href="/restored"
                  className="text-[#F5C400]/60 hover:text-[#F5C400] transition-colors underline underline-offset-2"
                >
                  Restored page
                </Link>{" "}
                for full production details and how to get involved.
              </p>
            </div>
          </div>

          {/* Bottom divider */}
          <div
            className="mt-24 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
            style={{
              transform: inView ? "scaleX(1)" : "scaleX(0)",
              opacity: inView ? 1 : 0,
              transition: "transform 1.2s ease 1.4s, opacity 1.2s ease 1.4s",
            }}
          />
        </div>
      </section>
    </>
  );
}
