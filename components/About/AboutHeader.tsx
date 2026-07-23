// "use client";

// import { motion, Variants } from "framer-motion";

// const headlineWords = ["We", "Are", "Hand", "Held", "Media", "Group."];

// const metaItems = [
//   { label: "Founded", value: "2026" },
//   { label: "Headquarters", value: "Lagos, Nigeria" },
//   { label: "Secondary Office", value: "Abuja, Nigeria" },
//   { label: "Subsidiaries", value: "4 Companies" },
// ];

// export default function AboutHeader() {
//   const wordVariants: Variants = {
//     hidden: { opacity: 0, y: 80, skewY: 5 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       skewY: 0,
//       transition: {
//         duration: 1.0,
//         delay: 0.1 + i * 0.12,
//         ease: "easeInOut",
//       },
//     }),
//   };

//   const fadeUp: Variants = {
//     hidden: { opacity: 0, y: 32 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.9,
//         delay: i * 0.12,
//         ease: "easeInOut",
//       },
//     }),
//   };

//   return (
//     <section className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden">
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

//         {/* Yellow glow top left — fades in */}
//         <motion.div
//           className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-[#F5C400] blur-[100px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.06 }}
//           transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
//         />

//         {/* Yellow glow bottom right */}
//         <motion.div
//           className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-[#F5C400] blur-[120px]"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 0.03 }}
//           transition={{ duration: 3, delay: 0.6, ease: "easeInOut" }}
//         />

//         {/* Bottom fade */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />

//         {/* Corner marks */}
//         <motion.div
//           className="absolute top-8 left-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1.6 }}
//         >
//           <div className="w-6 h-[1px] bg-white/20" />
//           <div className="w-[1px] h-6 bg-white/20" />
//         </motion.div>
//         <motion.div
//           className="absolute bottom-8 right-8 flex flex-col items-end"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1.6 }}
//         >
//           <div className="w-[1px] h-6 bg-white/20 ml-auto" />
//           <div className="w-6 h-[1px] bg-white/20" />
//         </motion.div>
//       </div>

//       {/* ── CONTENT ── */}
//       <div className="relative z-10 max-w-5xl mx-auto">
//         {/* Breadcrumb */}

//         {/* Eyebrow */}
//         <motion.div
//           className="inline-flex items-center gap-3 mb-8"
//           initial={{ opacity: 0, x: -24 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.9, delay: 0.2, ease: "easeInOut" }}
//         >
//           <motion.div
//             className="h-[1px] bg-[#F5C400]"
//             initial={{ width: 0 }}
//             animate={{ width: 32 }}
//             transition={{ duration: 0.8, delay: 0.35, ease: "easeInOut" }}
//           />
//           <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//             About Us
//           </span>
//         </motion.div>

//         {/* Headline — word by word skew reveal */}
//         <div className="mb-6 overflow-visible">
//           {/* <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight flex flex-wrap gap-x-4 max-w-3xl"> */}
//           <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight flex flex-wrap gap-x-4 max-w-3xl">
//             {headlineWords.map((word, i) => {
//               const isAccent = word === "Media" || word === "Group.";
//               return (
//                 <motion.span
//                   key={i}
//                   custom={i}
//                   variants={wordVariants}
//                   initial="hidden"
//                   animate="visible"
//                   className="inline-block"
//                   style={
//                     isAccent
//                       ? {
//                           color: "#F5C400",
//                           textShadow: "0 0 80px rgba(245,196,0,0.2)",
//                         }
//                       : {}
//                   }
//                 >
//                   {word}
//                 </motion.span>
//               );
//             })}
//           </h1>
//         </div>

//         {/* Sub-headline */}
//         <motion.p
//           className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mb-16"
//           initial={{ opacity: 0, y: 28 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
//         >
//           A holding company for African media — building from the ground up.
//         </motion.p>

//         {/* Meta row */}
//         <motion.div
//           className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06] rounded-2xl overflow-hidden"
//           initial={{ opacity: 0, y: 24 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 1.05, ease: "easeInOut" }}
//         >
//           {metaItems.map((item, i) => (
//             <motion.div
//               key={item.label}
//               custom={i}
//               variants={fadeUp}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-col gap-2 bg-[#0D0D0D] px-6 py-6 hover:bg-white/[0.03] transition-colors duration-200"
//               style={{ animationDelay: `${1.1 + i * 0.1}s` }}
//               whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
//             >
//               <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
//                 {item.label}
//               </span>
//               <span className="text-white text-lg font-black tracking-tight">
//                 {item.value}
//               </span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const headlineWords = ["We", "Are", "Hand", "Held", "Media", "Group."];

const metaItems = [
  { label: "Founded", value: "2026" },
  { label: "Headquarters", value: "Lagos, Nigeria" },
  { label: "Secondary Office", value: "Abuja, Nigeria" },
  { label: "Subsidiaries", value: "4 Companies" },
];

const BG_IMAGES = [
  "/images/cinematic-crew-silhouettes-stockcake.jpg",
  "/images/film-set-action-stockcake.jpg",
];

/* ── Auto-crossfading background images ── */
function CrossfadeBg() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((c) => (c + 1) % BG_IMAGES.length);
        setNext((n) => (n + 1) % BG_IMAGES.length);
        setFading(false);
      }, 1800); // crossfade duration
    }, 6000); // how long each image shows

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Current image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: fading ? 0 : 0.1,
          transition: "opacity 1.8s ease-in-out",
        }}
      >
        <Image
          src={BG_IMAGES[current]}
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-center"
          style={{
            mixBlendMode: "luminosity",
            filter: "grayscale(100%)",
          }}
        />
      </div>

      {/* Next image — fades in as current fades out */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: fading ? 0.1 : 0,
          transition: "opacity 1.8s ease-in-out",
        }}
      >
        <Image
          src={BG_IMAGES[next]}
          alt=""
          aria-hidden="true"
          fill
          className="object-cover object-center"
          style={{
            mixBlendMode: "luminosity",
            filter: "grayscale(100%)",
          }}
        />
      </div>
    </>
  );
}

/* ── Animated canvas: orbs + particles + scanline ── */
function BgCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;

    const canvasEl = canvas;
    let t = 0;
    const resize = () => {
      canvasEl.width = parent.offsetWidth;
      canvasEl.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      gold: boolean;
    };
    const pts: P[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvasEl.width,
      y: Math.random() * canvasEl.height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random() * 0.25 + 0.05,
      gold: Math.random() < 0.25,
    }));

    function draw() {
      t += 0.01;
      const W = canvasEl.width,
        H = canvasEl.height;
      ctx.clearRect(0, 0, W, H);

      const pulse = 0.5 + 0.5 * Math.sin(t * 0.5);

      const g1 = ctx.createRadialGradient(
        W * 0.08,
        H * 0.1,
        0,
        W * 0.08,
        H * 0.1,
        W * 0.5,
      );
      g1.addColorStop(
        0,
        `rgba(245,196,0,${(0.055 + pulse * 0.03).toFixed(3)})`,
      );
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(
        W * 0.9,
        H * 0.9,
        0,
        W * 0.9,
        H * 0.9,
        W * 0.4,
      );
      g2.addColorStop(
        0,
        `rgba(245,196,0,${(0.03 + pulse * 0.015).toFixed(3)})`,
      );
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      const spacing = 36;
      const offset = (t * 4) % spacing;
      ctx.strokeStyle = "rgba(245,196,0,0.038)";
      ctx.lineWidth = 0.5;
      for (let y = offset - spacing; y < H + spacing; y += spacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      pts.forEach((p) => {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(245,196,0,${p.a})`
          : `rgba(255,255,255,${p.a * 0.4})`;
        ctx.fill();
      });

      const scanY = (t * 30) % H;
      const sg = ctx.createLinearGradient(0, scanY - 12, 0, scanY + 12);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(245,196,0,0.016)");
      sg.addColorStop(1, "transparent");
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 12, W, 24);

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

export default function AboutHeader() {
  return (
    <>
      <style>{`
        @keyframes wordReveal {
          from { opacity: 0; transform: translateY(80px) skewY(5deg); }
          to   { opacity: 1; transform: translateY(0) skewY(0deg); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 32px; }
        }
        @keyframes lineGrowRule {
          from { width: 0; }
          to   { width: 120px; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>

      <section className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden">
        {/* ── Crossfading background images ── */}
        <CrossfadeBg />

        {/* ── Canvas: orbs, particles, scanline ── */}
        <BgCanvas />

        {/* ── Film grain ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 2,
            opacity: 0.14,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* ── Vignette ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 3,
            background:
              "radial-gradient(ellipse at 30% 40%, transparent 20%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.9) 100%)",
          }}
        />

        {/* ── Bottom fade ── */}
        <div
          className="absolute bottom-0 inset-x-0 h-40 pointer-events-none"
          style={{
            zIndex: 4,
            background: "linear-gradient(to top, #1A1A1A, transparent)",
          }}
        />

        {/* ── Corner marks ── */}
        <div
          className="absolute top-8 left-8 pointer-events-none"
          style={{ zIndex: 10, animation: "fadeIn 1s ease 1.6s both" }}
        >
          <div className="w-6 h-px bg-white/20" />
          <div className="w-px h-6 bg-white/20" />
        </div>
        <div
          className="absolute bottom-8 right-8 pointer-events-none flex flex-col items-end"
          style={{ zIndex: 10, animation: "fadeIn 1s ease 1.6s both" }}
        >
          <div className="w-px h-6 bg-white/20 ml-auto" />
          <div className="w-6 h-px bg-white/20" />
        </div>

        {/* ── Content ── */}
        <div className="relative max-w-5xl mx-auto" style={{ zIndex: 10 }}>
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-3 mb-8"
            style={{ animation: "slideRight 0.9s ease 0.2s both" }}
          >
            <div
              style={{
                height: "1px",
                background: "#F5C400",
                animation: "lineGrow 0.8s ease 0.35s both",
              }}
            />
            <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
              About Us
            </span>
          </div>

          {/* Headline */}
          <div
            className="mb-4 overflow-visible"
            style={{ perspective: "800px" }}
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight flex flex-wrap gap-x-4 max-w-3xl">
              {headlineWords.map((word, i) => {
                const isAccent = word === "Media" || word === "Group.";
                return (
                  <span
                    key={i}
                    className="inline-block"
                    style={{
                      animation: `wordReveal 1s cubic-bezier(0.22,1,0.36,1) ${0.1 + i * 0.12}s both`,
                      color: isAccent ? "#F5C400" : "#ffffff",
                      textShadow: isAccent
                        ? "0 0 80px rgba(245,196,0,0.2)"
                        : "none",
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </h1>
          </div>

          {/* Gold rule */}
          <div
            style={{
              height: "1.5px",
              background: "linear-gradient(90deg, #F5C400, rgba(245,196,0,0))",
              marginBottom: "20px",
              animation: "lineGrowRule 1s ease 0.9s both",
            }}
          />

          {/* Sub-headline */}
          <p
            className="text-white/55 text-lg sm:text-xl leading-relaxed max-w-2xl mb-16"
            style={{ animation: "fadeUp 1s ease 0.9s both" }}
          >
            A company for African media building from the ground up.
          </p>

          {/* Meta grid */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden"
            style={{ animation: "fadeUp 0.9s ease 1.05s both" }}
          >
            {metaItems.map((item, i) => (
              <div
                key={item.label}
                className="flex flex-col gap-2 bg-[#0D0D0D] px-6 py-6 hover:bg-white/[0.03] hover:scale-[1.02] transition-all duration-200"
                style={{ animation: `fadeUp 0.7s ease ${1.1 + i * 0.1}s both` }}
              >
                <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
                  {item.label}
                </span>
                <span className="text-white text-lg font-black tracking-tight">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
