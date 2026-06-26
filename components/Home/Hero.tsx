"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* ── LAYER 1 — Base background ── */}
      <div className="absolute inset-0 bg-[#0D0D0D]" />

      {/* ── LAYER 2 — Film grain ── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* ── LAYER 3 — Cinematic light leak top left ── */}
      <div
        className="absolute z-[2] pointer-events-none"
        style={{
          top: "-10%",
          left: "-5%",
          width: "55%",
          height: "70%",
          background:
            "radial-gradient(ellipse at top left, rgba(245,196,0,0.09) 0%, rgba(245,196,0,0.03) 40%, transparent 70%)",
          filter: "blur(40px)",
          opacity: mounted ? 1 : 0,
          transition: "opacity 3s ease",
        }}
      />

      {/* ── LAYER 4 — Deep vignette ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* ── LAYER 5 — Scan lines ── */}
      <div
        className="absolute inset-0 z-[4] opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* ── LAYER 6 — Bottom fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-[5] bg-gradient-to-t from-[#1A1A1A] to-transparent pointer-events-none" />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-3 mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 1s ease 0.2s, transform 1s ease 0.2s",
          }}
        >
          {/* <div className="w-10 h-[1px] bg-[#F5C400]" />
          <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
            Lagos & Abuja · Est. 2026
          </span>
          <div className="w-10 h-[1px] bg-[#F5C400]" /> */}
        </div>

        {/* H1 — focus pull: starts blurred + slightly scaled up, racks into sharp focus */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-black text-white leading-[1.0] tracking-[-0.02em] mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted
              ? "translateY(0) scale(1)"
              : "translateY(28px) scale(1.04)",
            filter: mounted ? "blur(0px)" : "blur(10px)",
            transition:
              "opacity 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s, filter 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s",
          }}
        >
          Africa Has Stories
          <br />
          the World{" "}
          <em
            className="not-italic"
            style={{
              color: "#F5C400",
              textShadow: "0 0 80px rgba(245,196,0,0.25)",
            }}
          >
            Needs to Hear.
          </em>
        </h1>

        {/* Secondary line */}
        <p
          className="text-white/30 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 uppercase"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 1.1s ease 1.3s, transform 1.1s ease 1.3s",
          }}
        >
          We Build What It Takes to Tell Them.
        </p>

        {/* Divider */}
        <div
          className="flex items-center justify-center gap-4 mb-8"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease 1.65s",
          }}
        >
          <div
            className="h-[1px] bg-white/10"
            style={{
              width: mounted ? "64px" : "0px",
              transition: "width 1s ease 1.65s",
            }}
          />
          <div className="w-1 h-1 rounded-full bg-[#F5C400]/60" />
          <div
            className="h-[1px] bg-white/10"
            style={{
              width: mounted ? "64px" : "0px",
              transition: "width 1s ease 1.65s",
            }}
          />
        </div>

        {/* Sub-copy */}
        <p
          className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 1.1s ease 1.9s, transform 1.1s ease 1.9s",
          }}
        >
          Hand Held Media Group is a Lagos and Abuja-based media holding company
          — equipping creators, producing original content, and building the
          infrastructure for African storytelling at its finest.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 1.1s ease 2.15s, transform 1.1s ease 2.15s",
          }}
        >
          <Link
            href="/companies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-9 py-4 rounded-sm hover:bg-[#e6b800] transition-all duration-200 tracking-wide uppercase"
          >
            Explore Our Work
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
            href="/work-with-us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm font-medium px-9 py-4 rounded-sm hover:border-white/30 hover:text-white transition-all duration-200 tracking-wide uppercase"
          >
            Work With Us
          </Link>
        </div>
      </div>

      {/* ── Corner frame marks ── */}
      <div
        className="absolute top-8 left-8 z-10 pointer-events-none"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 2.6s",
        }}
      >
        <div className="w-6 h-[1px] bg-white/20" />
        <div className="w-[1px] h-6 bg-white/20" />
      </div>

      <div
        className="absolute top-8 right-8 z-10 pointer-events-none flex flex-col items-end"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 2.6s",
        }}
      >
        <div className="w-6 h-[1px] bg-white/20" />
        <div className="w-[1px] h-6 bg-white/20 ml-auto" />
      </div>

      <div
        className="absolute bottom-8 left-8 z-10 pointer-events-none flex flex-col justify-end"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 2.6s",
        }}
      >
        <div className="w-[1px] h-6 bg-white/20" />
        <div className="w-6 h-[1px] bg-white/20" />
      </div>

      <div
        className="absolute bottom-8 right-8 z-10 pointer-events-none flex flex-col items-end justify-end"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s ease 2.6s",
        }}
      >
        <div className="w-[1px] h-6 bg-white/20 ml-auto" />
        <div className="w-6 h-[1px] bg-white/20" />
      </div>
    </section>
  );
}

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// // Accurate Africa continent SVG path (viewBox 0 0 400 420)
// const AFRICA_PATH = `M198,8 C210,6 228,10 242,18 C256,26 268,34 278,46
// C288,58 294,68 296,82 C298,96 294,106 298,118 C302,130 314,138 318,152
// C322,166 316,180 310,192 C304,204 296,212 294,228 C292,244 298,258 300,274
// C302,290 298,306 290,320 C282,334 270,344 262,358 C254,372 250,386 244,398
// C238,410 230,418 220,424 C210,430 198,432 188,426 C178,420 172,408 164,398
// C156,388 148,380 140,368 C132,356 126,342 120,328 C114,314 108,300 104,284
// C100,268 98,252 96,236 C94,220 90,206 88,190 C86,174 86,158 88,144
// C90,130 96,118 100,106 C104,94 106,84 112,74 C118,64 126,56 136,50
// C146,44 156,40 168,36 C180,32 190,28 198,8Z`;

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animRef = useRef<number>(0);

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 120);
//     return () => clearTimeout(t);
//   }, []);

//   // Canvas: subtle animated background texture + africa watermark
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     const resize = () => {
//       canvas.width = canvas.offsetWidth * window.devicePixelRatio;
//       canvas.height = canvas.offsetHeight * window.devicePixelRatio;
//       ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const W = () => canvas.offsetWidth;
//     const H = () => canvas.offsetHeight;

//     type Dot = {
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       r: number;
//       a: number;
//       gold: boolean;
//     };
//     const dots: Dot[] = Array.from({ length: 70 }, () => ({
//       x: Math.random() * W(),
//       y: Math.random() * H(),
//       vx: (Math.random() - 0.5) * 0.3,
//       vy: (Math.random() - 0.5) * 0.3,
//       r: Math.random() * 1.5 + 0.3,
//       a: Math.random() * 0.45 + 0.08,
//       gold: Math.random() < 0.2,
//     }));

//     let scanY = 0;
//     let time = 0;

//     const tick = () => {
//       const w = W(),
//         h = H();
//       ctx.clearRect(0, 0, w, h);
//       time += 0.007;
//       scanY = (scanY + 0.5) % (h + 40);

//       // ── Large Africa watermark on right side ──
//       const scale = h * 0.0018;
//       const offX = w * 0.58;
//       const offY = h * 0.04;
//       ctx.save();
//       ctx.translate(offX, offY);
//       ctx.scale(scale, scale);
//       const p = new Path2D(AFRICA_PATH);
//       ctx.fillStyle = "rgba(245,196,0,0.022)";
//       ctx.fill(p);
//       ctx.strokeStyle = "rgba(245,196,0,0.065)";
//       ctx.lineWidth = 1.2 / scale;
//       ctx.stroke(p);
//       ctx.restore();

//       // ── Particles ──
//       for (const d of dots) {
//         d.x = (d.x + d.vx + w) % w;
//         d.y = (d.y + d.vy + h) % h;
//         ctx.beginPath();
//         ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
//         ctx.fillStyle = d.gold
//           ? `rgba(245,196,0,${d.a})`
//           : `rgba(255,255,255,${d.a * 0.5})`;
//         ctx.fill();
//       }

//       // ── Connections ──
//       for (let i = 0; i < dots.length; i++) {
//         for (let j = i + 1; j < dots.length; j++) {
//           const dx = dots[i].x - dots[j].x;
//           const dy = dots[i].y - dots[j].y;
//           const dist = Math.hypot(dx, dy);
//           if (dist < 95) {
//             const op = (1 - dist / 95) * 0.06;
//             ctx.beginPath();
//             ctx.moveTo(dots[i].x, dots[i].y);
//             ctx.lineTo(dots[j].x, dots[j].y);
//             ctx.strokeStyle = `rgba(245,196,0,${op})`;
//             ctx.lineWidth = 0.4;
//             ctx.stroke();
//           }
//         }
//       }

//       // ── Scan line ──
//       const sg = ctx.createLinearGradient(0, scanY - 30, 0, scanY + 30);
//       sg.addColorStop(0, "transparent");
//       sg.addColorStop(0.5, "rgba(245,196,0,0.016)");
//       sg.addColorStop(1, "transparent");
//       ctx.fillStyle = sg;
//       ctx.fillRect(0, scanY - 30, w, 60);

//       // ── Gold glow orb bottom ──
//       const pulse = 0.5 + 0.5 * Math.sin(time);
//       const og = ctx.createRadialGradient(
//         w / 2,
//         h * 1.1,
//         0,
//         w / 2,
//         h * 1.1,
//         h * 0.6,
//       );
//       og.addColorStop(0, `rgba(245,196,0,${0.05 + pulse * 0.025})`);
//       og.addColorStop(0.4, `rgba(200,140,0,${0.02 + pulse * 0.01})`);
//       og.addColorStop(1, "transparent");
//       ctx.fillStyle = og;
//       ctx.fillRect(0, 0, w, h);

//       animRef.current = requestAnimationFrame(tick);
//     };

//     const t = setTimeout(() => {
//       animRef.current = requestAnimationFrame(tick);
//     }, 80);
//     return () => {
//       clearTimeout(t);
//       cancelAnimationFrame(animRef.current);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* ── Base bg: dark charcoal matching the image ── */}
//       <div className="absolute inset-0 bg-[#111111]" />

//       {/* ── Subtle fabric/noise texture overlay ── */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           zIndex: 1,
//           opacity: 0.28,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//           backgroundSize: "160px 160px",
//         }}
//       />

//       {/* ── Canvas (particles + africa watermark + scan) ── */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full"
//         style={{ zIndex: 2 }}
//       />

//       {/* ── Vignette ── */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           zIndex: 3,
//           background:
//             "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.45) 70%, rgba(0,0,0,0.82) 100%)",
//         }}
//       />

//       {/* ── Bottom fade ── */}
//       <div
//         className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
//         style={{
//           zIndex: 4,
//           background: "linear-gradient(to top, #111111 0%, transparent 100%)",
//         }}
//       />

//       {/* ── Gold bottom border line ── */}
//       <div
//         className="absolute bottom-0 inset-x-0 h-px pointer-events-none"
//         style={{
//           zIndex: 10,
//           background:
//             "linear-gradient(90deg, transparent 0%, rgba(245,196,0,0.5) 30%, rgba(245,196,0,0.7) 50%, rgba(245,196,0,0.5) 70%, transparent 100%)",
//           opacity: mounted ? 1 : 0,
//           transition: "opacity 2s ease 3s",
//         }}
//       />

//       {/* ── CONTENT ── */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 text-left">
//         {/* ── Eyebrow ── */}
//         <div
//           className="flex items-center gap-3 mb-8"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 0.9s ease 0.3s",
//           }}
//         >
//           <div
//             className="h-px bg-gradient-to-r from-[#F5C400]/60 to-transparent"
//             style={{
//               width: mounted ? "52px" : "0px",
//               transition: "width 1s ease 0.5s",
//             }}
//           />
//           <span className="text-[#F5C400]/65 text-[9px] font-bold tracking-[0.42em] uppercase">
//             Lagos &amp; Abuja · Est. 2026
//           </span>
//         </div>

//         {/*
//           ── HEADLINE LINE 1: [AfricaMap_SVG]frica Has Stories ──
//           The Africa SVG replaces the letter "A"
//         */}
//         <h1
//           className="font-black leading-[1.02] tracking-[-0.02em] mb-0"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transform: mounted
//               ? "translateY(0) scale(1)"
//               : "translateY(30px) scale(1.04)",
//             filter: mounted ? "blur(0px)" : "blur(10px)",
//             transition:
//               "opacity 1.5s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 1.5s cubic-bezier(0.16,1,0.3,1) 0.55s, filter 1.5s cubic-bezier(0.16,1,0.3,1) 0.55s",
//           }}
//         >
//           {/* Line 1 — white: [Map]frica Has Stories */}
//           <span
//             className="flex items-center flex-wrap text-white"
//             style={{ fontSize: "clamp(48px, 8.5vw, 108px)" }}
//           >
//             {/* Africa map SVG as the "A" glyph */}
//             <span
//               className="inline-flex items-center justify-center relative"
//               style={{
//                 width: "clamp(40px, 7vw, 90px)",
//                 height: "clamp(52px, 9.2vw, 117px)",
//                 marginRight: "clamp(1px, 0.3vw, 4px)",
//                 flexShrink: 0,
//               }}
//               aria-hidden="true"
//             >
//               <svg
//                 viewBox="0 0 220 260"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 style={{ width: "100%", height: "100%" }}
//               >
//                 {/* Outer continent */}
//                 <path
//                   d="
//                     M108,6
//                     C118,4 132,7 144,14
//                     C156,21 166,30 174,42
//                     C182,54 186,66 186,80
//                     C186,94 182,104 184,116
//                     C186,128 194,136 196,150
//                     C198,164 194,178 188,192
//                     C182,206 174,216 170,232
//                     C166,248 168,262 162,274
//                     C156,286 146,294 136,300
//                     C126,306 114,308 104,304
//                     C94,300 88,290 80,280
//                     C72,270 64,260 58,248
//                     C52,236 48,222 44,208
//                     C40,194 38,180 36,166
//                     C34,152 30,140 30,126
//                     C30,112 34,100 38,88
//                     C42,76 48,66 56,58
//                     C64,50 74,44 84,38
//                     C94,32 100,24 108,6Z
//                   "
//                   stroke="white"
//                   strokeWidth="5.5"
//                   strokeLinejoin="round"
//                 />
//                 {/* Horn of Africa bump */}
//                 <path
//                   d="M184,116 C192,120 200,118 204,126 C208,134 204,142 196,150"
//                   stroke="white"
//                   strokeWidth="4.5"
//                   strokeLinejoin="round"
//                   fill="none"
//                 />
//                 {/* Madagascar island */}
//                 <ellipse
//                   cx="195"
//                   cy="210"
//                   rx="7"
//                   ry="16"
//                   stroke="white"
//                   strokeWidth="3.5"
//                   fill="none"
//                   transform="rotate(-12, 195, 210)"
//                 />
//                 {/* Small Cape Verde-ish detail top right */}
//                 <circle
//                   cx="175"
//                   cy="52"
//                   r="3.5"
//                   stroke="white"
//                   strokeWidth="2.5"
//                   fill="none"
//                 />
//               </svg>
//             </span>

//             {/* Rest of line 1 */}
//             <span>frica Has Stories</span>
//           </span>

//           {/* Line 2 — gold OUTLINE text: the World Needs to Hear. */}
//           <span
//             className="block"
//             style={{
//               fontSize: "clamp(48px, 8.5vw, 108px)",
//               color: "transparent",
//               WebkitTextStroke: "clamp(1.5px, 0.18vw, 2.5px) #F5C400",
//               textShadow:
//                 "0 0 80px rgba(245,196,0,0.18), 0 0 200px rgba(245,196,0,0.08)",
//               marginTop: "clamp(2px, 0.5vw, 8px)",
//             }}
//           >
//             the World Needs to Hear.
//           </span>
//         </h1>

//         {/* ── Divider ── */}
//         <div
//           className="flex items-center gap-3 mt-8 mb-6"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 0.8s ease 1.6s",
//           }}
//         >
//           <div className="w-10 h-px bg-[#F5C400]/50" />
//           <div className="w-1.5 h-1.5 rounded-full bg-[#F5C400]/60" />
//           <div className="w-10 h-px bg-[#F5C400]/20" />
//         </div>

//         {/* ── Sub-copy ── */}
//         <p
//           className="text-white/45 text-sm sm:text-base max-w-md leading-relaxed mb-10"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transform: mounted ? "translateY(0)" : "translateY(10px)",
//             transition: "opacity 1s ease 2s, transform 1s ease 2s",
//           }}
//         >
//           Hand Held Media Group is a Lagos and Abuja-based media holding company
//           — equipping creators, producing original content, and building the
//           infrastructure for African storytelling at its finest.
//         </p>

//         {/* ── CTAs ── */}
//         <div
//           className="flex flex-col sm:flex-row gap-4"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transform: mounted ? "translateY(0)" : "translateY(8px)",
//             transition: "opacity 1s ease 2.25s, transform 1s ease 2.25s",
//           }}
//         >
//           <Link
//             href="/companies"
//             className="group relative inline-flex items-center gap-2 bg-[#F5C400] text-[#111] font-black text-xs px-9 py-4 uppercase tracking-widest overflow-hidden"
//           >
//             <span
//               className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
//               style={{ transition: "transform 0.5s ease" }}
//             />
//             <span className="relative">Explore Our Work</span>
//             <svg
//               className="relative w-3.5 h-3.5 group-hover:translate-x-1"
//               style={{ transition: "transform 0.2s" }}
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={3}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </Link>

//           <Link
//             href="/work-with-us"
//             className="inline-flex items-center gap-2 border border-white/14 text-white/50 text-xs font-medium px-9 py-4 uppercase tracking-widest hover:border-[#F5C400]/45 hover:text-[#F5C400]/75"
//             style={{ transition: "all 0.25s" }}
//           >
//             Work With Us
//           </Link>
//         </div>

//         {/* ── Scroll hint ── */}
//         <div
//           className="mt-16 flex items-center gap-3"
//           style={{
//             opacity: mounted ? 0.3 : 0,
//             transition: "opacity 1.5s ease 3.2s",
//           }}
//         >
//           <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
//           <span className="text-[8px] tracking-[0.4em] text-white/35 uppercase">
//             Scroll
//           </span>
//         </div>
//       </div>

//       {/* ── Corner marks ── */}
//       <div
//         className="absolute top-7 left-7 z-10 pointer-events-none"
//         style={{
//           opacity: mounted ? 0.28 : 0,
//           transition: "opacity 1.5s ease 2.8s",
//         }}
//       >
//         <div className="w-5 h-px bg-white/60" />
//         <div className="w-px h-5 bg-white/60" />
//       </div>
//       <div
//         className="absolute top-7 right-7 z-10 pointer-events-none flex flex-col items-end"
//         style={{
//           opacity: mounted ? 0.28 : 0,
//           transition: "opacity 1.5s ease 2.85s",
//         }}
//       >
//         <div className="w-5 h-px bg-white/60" />
//         <div className="w-px h-5 bg-white/60 self-end" />
//       </div>
//       <div
//         className="absolute bottom-7 left-7 z-10 pointer-events-none flex flex-col justify-end"
//         style={{
//           opacity: mounted ? 0.28 : 0,
//           transition: "opacity 1.5s ease 2.9s",
//         }}
//       >
//         <div className="w-px h-5 bg-white/60" />
//         <div className="w-5 h-px bg-white/60" />
//       </div>
//       <div
//         className="absolute bottom-7 right-7 z-10 pointer-events-none flex flex-col items-end justify-end"
//         style={{
//           opacity: mounted ? 0.28 : 0,
//           transition: "opacity 1.5s ease 2.95s",
//         }}
//       >
//         <div className="w-px h-5 bg-white/60 self-end" />
//         <div className="w-5 h-px bg-white/60" />
//       </div>
//     </section>
//   );
// }
