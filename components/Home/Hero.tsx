// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number>(0);

//   useEffect(() => {
//     const timer = setTimeout(() => setMounted(true), 150);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const context = canvas.getContext("2d");
//     if (!context) return;
//     const ctx = context;
//     let W = 0,
//       H = 0,
//       t = 0;

//     const resize = () => {
//       W = canvas.width = canvas.offsetWidth;
//       H = canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     type Dot = { lat: number; lng: number; africa: boolean };
//     const LAND: Dot[] = [];
//     const rand = (min: number, max: number) =>
//       Math.random() * (max - min) + min;
//     const deg = (d: number) => (d * Math.PI) / 180;

//     for (let i = 0; i < 280; i++)
//       LAND.push({
//         lat: deg(rand(-35, 37)),
//         lng: deg(rand(-18, 52)),
//         africa: true,
//       });
//     for (let i = 0; i < 110; i++)
//       LAND.push({
//         lat: deg(rand(36, 71)),
//         lng: deg(rand(-10, 40)),
//         africa: false,
//       });
//     for (let i = 0; i < 160; i++)
//       LAND.push({
//         lat: deg(rand(15, 72)),
//         lng: deg(rand(-168, -52)),
//         africa: false,
//       });
//     for (let i = 0; i < 110; i++)
//       LAND.push({
//         lat: deg(rand(-55, 12)),
//         lng: deg(rand(-82, -34)),
//         africa: false,
//       });
//     for (let i = 0; i < 240; i++)
//       LAND.push({
//         lat: deg(rand(1, 75)),
//         lng: deg(rand(26, 145)),
//         africa: false,
//       });
//     for (let i = 0; i < 70; i++)
//       LAND.push({
//         lat: deg(rand(-45, -10)),
//         lng: deg(rand(114, 180)),
//         africa: false,
//       });

//     type Particle = {
//       x: number;
//       y: number;
//       vx: number;
//       vy: number;
//       r: number;
//       a: number;
//       gold: boolean;
//     };
//     const PTS: Particle[] = Array.from({ length: 60 }, () => ({
//       x: Math.random(),
//       y: Math.random(),
//       vx: (Math.random() - 0.5) * 0.00025,
//       vy: (Math.random() - 0.5) * 0.00025,
//       r: Math.random() * 1.3 + 0.3,
//       a: Math.random() * 0.35 + 0.06,
//       gold: Math.random() < 0.28,
//     }));

//     function project(
//       lat: number,
//       lng: number,
//       rotY: number,
//       cx: number,
//       cy: number,
//       R: number,
//     ) {
//       const x2 = Math.cos(lat) * Math.sin(lng - rotY);
//       const y2 = Math.sin(lat);
//       const z2 = Math.cos(lat) * Math.cos(lng - rotY);
//       if (z2 < 0) return null;
//       return { px: cx + R * x2, py: cy - R * y2, z: z2 };
//     }

//     function draw() {
//       t += 0.0016;
//       ctx.clearRect(0, 0, W, H);

//       const g1 = ctx.createRadialGradient(
//         W * 0.15,
//         H * 0.48,
//         0,
//         W * 0.15,
//         H * 0.48,
//         W * 0.42,
//       );
//       g1.addColorStop(0, "rgba(245,196,0,0.075)");
//       g1.addColorStop(1, "transparent");
//       ctx.fillStyle = g1;
//       ctx.fillRect(0, 0, W, H);

//       const R = Math.min(W, H) * 0.4;
//       const cx = W * 0.72;
//       const cy = H * 0.5;

//       const g2 = ctx.createRadialGradient(cx, cy, R * 0.3, cx, cy, R * 1.1);
//       g2.addColorStop(0, "rgba(245,196,0,0.03)");
//       g2.addColorStop(1, "transparent");
//       ctx.fillStyle = g2;
//       ctx.fillRect(0, 0, W, H);

//       ctx.beginPath();
//       ctx.arc(cx, cy, R, 0, Math.PI * 2);
//       ctx.strokeStyle = "rgba(245,196,0,0.055)";
//       ctx.lineWidth = 1;
//       ctx.stroke();

//       ctx.strokeStyle = "rgba(255,255,255,0.022)";
//       ctx.lineWidth = 0.5;
//       for (let la = -60; la <= 60; la += 30) {
//         ctx.beginPath();
//         let first = true;
//         for (let lo = -180; lo <= 180; lo += 3) {
//           const p = project(deg(la), deg(lo), t, cx, cy, R);
//           if (!p) {
//             first = true;
//             continue;
//           }
//           first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
//           first = false;
//         }
//         ctx.stroke();
//       }

//       for (let lo = -180; lo <= 180; lo += 30) {
//         ctx.beginPath();
//         let first = true;
//         for (let la = -90; la <= 90; la += 3) {
//           const p = project(deg(la), deg(lo), t, cx, cy, R);
//           if (!p) {
//             first = true;
//             continue;
//           }
//           first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
//           first = false;
//         }
//         ctx.stroke();
//       }

//       LAND.forEach((d) => {
//         const p = project(d.lat, d.lng, t, cx, cy, R);
//         if (!p) return;
//         const fade = 0.35 + p.z * 0.65;
//         ctx.beginPath();
//         ctx.arc(p.px, p.py, d.africa ? 2.4 : 1.5, 0, Math.PI * 2);
//         ctx.fillStyle = d.africa
//           ? `rgba(245,196,0,${(fade * 0.8).toFixed(3)})`
//           : `rgba(255,255,255,${(fade * 0.22).toFixed(3)})`;
//         ctx.fill();
//       });

//       const pulse = 0.5 + 0.5 * Math.sin(t * 2.5);
//       const afCx = cx + R * Math.cos(deg(2)) * Math.sin(deg(20) - t);
//       const afCy = cy - R * Math.sin(deg(2));
//       const ag = ctx.createRadialGradient(afCx, afCy, 0, afCx, afCy, R * 0.38);
//       ag.addColorStop(0, `rgba(245,196,0,${(0.04 + pulse * 0.04).toFixed(3)})`);
//       ag.addColorStop(1, "transparent");
//       ctx.fillStyle = ag;
//       ctx.fillRect(0, 0, W, H);

//       const scanY = ((t * 55) % (H + 40)) - 20;
//       const sg = ctx.createLinearGradient(0, scanY, 0, scanY + 40);
//       sg.addColorStop(0, "transparent");
//       sg.addColorStop(0.5, "rgba(245,196,0,0.016)");
//       sg.addColorStop(1, "transparent");
//       ctx.fillStyle = sg;
//       ctx.fillRect(0, scanY, W, 40);

//       PTS.forEach((p) => {
//         p.x = (p.x + p.vx + 1) % 1;
//         p.y = (p.y + p.vy + 1) % 1;
//         const px = p.x * W * 0.52;
//         const py = p.y * H;
//         ctx.beginPath();
//         ctx.arc(px, py, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.gold
//           ? `rgba(245,196,0,${p.a})`
//           : `rgba(255,255,255,${p.a * 0.5})`;
//         ctx.fill();
//       });

//       rafRef.current = requestAnimationFrame(draw);
//     }

//     rafRef.current = requestAnimationFrame(draw);
//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
//       <canvas
//         ref={canvasRef}
//         aria-hidden="true"
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         style={{ zIndex: 1 }}
//       />

//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           zIndex: 2,
//           opacity: 0.16,
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "200px 200px",
//         }}
//       />

//       <div
//         className="absolute pointer-events-none"
//         style={{
//           zIndex: 3,
//           top: "-10%",
//           left: "-5%",
//           width: "55%",
//           height: "70%",
//           background:
//             "radial-gradient(ellipse at top left, rgba(245,196,0,0.08) 0%, rgba(245,196,0,0.02) 40%, transparent 70%)",
//           filter: "blur(40px)",
//           opacity: mounted ? 1 : 0,
//           transition: "opacity 3s ease",
//         }}
//       />

//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           zIndex: 4,
//           background:
//             "radial-gradient(ellipse at 40% 50%, transparent 20%, rgba(0,0,0,0.5) 65%, rgba(0,0,0,0.88) 100%)",
//         }}
//       />

//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           zIndex: 5,
//           opacity: 0.022,
//           backgroundImage:
//             "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)",
//           backgroundSize: "100% 4px",
//         }}
//       />

//       <div
//         className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
//         style={{
//           zIndex: 6,
//           background: "linear-gradient(to top, #1A1A1A, transparent)",
//         }}
//       />

//       {/* CONTENT */}
//       <div
//         className="relative max-w-5xl mx-auto px-6 text-center"
//         style={{ zIndex: 10 }}
//       >
//         <h1
//           className="font-display font-black text-white leading-[1.05] tracking-[-0.02em] mb-8"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transform: mounted
//               ? "translateY(0) scale(1)"
//               : "translateY(28px) scale(1.04)",
//             filter: mounted ? "blur(0px)" : "blur(10px)",
//             transition:
//               "opacity 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s, filter 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s",
//           }}
//         >
//           {/* LINE 1 */}
//           <span className="flex items-end justify-center flex-wrap leading-none">
//             {/* ── Africa A + "frica" locked together — never splits ── */}
//             <span className="inline-flex items-end whitespace-nowrap">
//               <span
//                 className="inline-flex items-end flex-shrink-0"
//                 aria-label="A"
//                 style={{ marginRight: "-0.01em", marginBottom: "0.01em" }}
//               >
//                 <Image
//                   src="/IMG-20260627-WA0036 copy copy.png"
//                   alt=""
//                   aria-hidden="true"
//                   width={96}
//                   height={117}
//                   priority
//                   className="object-contain object-bottom"
//                   style={{
//                     /* smaller on mobile so A+frica fits on one line */
//                     width: "clamp(36px, 7.2vw, 92px)",
//                     height: "auto",
//                     mixBlendMode: "screen",
//                     display: "block",
//                   }}
//                 />
//               </span>
//               <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
//                 frica
//               </span>
//             </span>

//             {/* "Has Stories" can wrap on its own line on very small screens */}
//             <span className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px]">
//               &nbsp;Has Stories
//             </span>
//           </span>

//           {/* LINE 2 — gold */}
//           <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[90px] mt-1">
//             the World{" "}
//             <em
//               className="not-italic"
//               style={{
//                 color: "#F5C400",
//                 textShadow: "0 0 80px rgba(245,196,0,0.28)",
//               }}
//             >
//               Needs to Hear.
//             </em>
//           </span>
//         </h1>

//         {/* Secondary tagline */}
//         <p
//           className="text-white/30 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 uppercase"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transform: mounted ? "translateY(0)" : "translateY(16px)",
//             transition: "opacity 1.1s ease 1.3s, transform 1.1s ease 1.3s",
//           }}
//         >
//           We Build What It Takes to Tell Them.
//         </p>

//         {/* Divider */}
//         <div
//           className="flex items-center justify-center gap-4 mb-8"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1s ease 1.65s",
//           }}
//         >
//           <div
//             className="h-[1px] bg-white/10"
//             style={{
//               width: mounted ? "64px" : "0px",
//               transition: "width 1s ease 1.65s",
//             }}
//           />
//           <div className="w-1 h-1 rounded-full bg-[#F5C400]/60" />
//           <div
//             className="h-[1px] bg-white/10"
//             style={{
//               width: mounted ? "64px" : "0px",
//               transition: "width 1s ease 1.65s",
//             }}
//           />
//         </div>

//         {/* Sub-copy */}
//         <p
//           className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transform: mounted ? "translateY(0)" : "translateY(12px)",
//             transition: "opacity 1.1s ease 1.9s, transform 1.1s ease 1.9s",
//           }}
//         >
//           Hand Held Media Group is a Lagos and Abuja-based media holding company
//           — equipping creators, producing original content, and building the
//           infrastructure for African storytelling at its finest.
//         </p>

//         {/* CTAs */}
//         <div
//           className="flex flex-col sm:flex-row items-center justify-center gap-4"
//           style={{
//             opacity: mounted ? 1 : 0,
//             transform: mounted ? "translateY(0)" : "translateY(12px)",
//             transition: "opacity 1.1s ease 2.15s, transform 1.1s ease 2.15s",
//           }}
//         >
//           <Link
//             href="/companies"
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-9 py-4 rounded-sm hover:bg-[#e6b800] transition-all duration-200 tracking-wide uppercase"
//           >
//             Explore Our Work
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2.5}
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
//             className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm font-medium px-9 py-4 rounded-sm hover:border-white/30 hover:text-white transition-all duration-200 tracking-wide uppercase"
//           >
//             Work With Us
//           </Link>
//         </div>
//       </div>

//       {/* Corner frame marks */}
//       <div
//         className="absolute top-8 left-8 pointer-events-none"
//         style={{
//           zIndex: 10,
//           opacity: mounted ? 1 : 0,
//           transition: "opacity 1.2s ease 2.6s",
//         }}
//       >
//         <div className="w-6 h-[1px] bg-white/20" />
//         <div className="w-[1px] h-6 bg-white/20" />
//       </div>
//       <div
//         className="absolute top-8 right-8 pointer-events-none flex flex-col items-end"
//         style={{
//           zIndex: 10,
//           opacity: mounted ? 1 : 0,
//           transition: "opacity 1.2s ease 2.6s",
//         }}
//       >
//         <div className="w-6 h-[1px] bg-white/20" />
//         <div className="w-[1px] h-6 bg-white/20 ml-auto" />
//       </div>
//       <div
//         className="absolute bottom-8 left-8 pointer-events-none flex flex-col justify-end"
//         style={{
//           zIndex: 10,
//           opacity: mounted ? 1 : 0,
//           transition: "opacity 1.2s ease 2.6s",
//         }}
//       >
//         <div className="w-[1px] h-6 bg-white/20" />
//         <div className="w-6 h-[1px] bg-white/20" />
//       </div>
//       <div
//         className="absolute bottom-8 right-8 pointer-events-none flex flex-col items-end justify-end"
//         style={{
//           zIndex: 10,
//           opacity: mounted ? 1 : 0,
//           transition: "opacity 1.2s ease 2.6s",
//         }}
//       >
//         <div className="w-[1px] h-6 bg-white/20 ml-auto" />
//         <div className="w-6 h-[1px] bg-white/20" />
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// /* ── Globe canvas ── */
// function GlobeCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number>(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const parent = canvas.parentElement;
//     if (!parent) return;
//     const ctx = canvas.getContext("2d")!;

//     const dpr = Math.min(window.devicePixelRatio || 1, 2);
//     let t = 0;

//     const resize = () => {
//       canvas.width = parent.offsetWidth * dpr;
//       canvas.height = parent.offsetHeight * dpr;
//       canvas.style.width = `${parent.offsetWidth}px`;
//       canvas.style.height = `${parent.offsetHeight}px`;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const deg = (d: number) => (d * Math.PI) / 180;
//     const rand = (a: number, b: number) => Math.random() * (b - a) + a;

//     type Dot = { lat: number; lng: number; africa: boolean };
//     const LAND: Dot[] = [];
//     for (let i = 0; i < 300; i++)
//       LAND.push({
//         lat: deg(rand(-35, 37)),
//         lng: deg(rand(-18, 52)),
//         africa: true,
//       });
//     for (let i = 0; i < 90; i++)
//       LAND.push({
//         lat: deg(rand(36, 71)),
//         lng: deg(rand(-10, 40)),
//         africa: false,
//       });
//     for (let i = 0; i < 140; i++)
//       LAND.push({
//         lat: deg(rand(-55, 72)),
//         lng: deg(rand(-168, -34)),
//         africa: false,
//       });
//     for (let i = 0; i < 200; i++)
//       LAND.push({
//         lat: deg(rand(1, 75)),
//         lng: deg(rand(26, 145)),
//         africa: false,
//       });
//     for (let i = 0; i < 60; i++)
//       LAND.push({
//         lat: deg(rand(-45, -10)),
//         lng: deg(rand(114, 180)),
//         africa: false,
//       });

//     function project(
//       lat: number,
//       lng: number,
//       rotY: number,
//       cx: number,
//       cy: number,
//       R: number,
//     ) {
//       const x2 = Math.cos(lat) * Math.sin(lng - rotY);
//       const y2 = Math.sin(lat);
//       const z2 = Math.cos(lat) * Math.cos(lng - rotY);
//       if (z2 < 0) return null;
//       return { px: cx + R * x2, py: cy - R * y2, z: z2 };
//     }

//     function draw() {
//       t += 0.005;
//       const W = canvas.width / dpr;
//       const H = canvas.height / dpr;
//       const cx = W / 2,
//         cy = H / 2;
//       const R = Math.min(W, H) * 0.38;

//       ctx.clearRect(0, 0, W, H);

//       /* Glow */
//       const pulse = 0.5 + 0.5 * Math.sin(t * 1.2);
//       const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.5);
//       g.addColorStop(0, `rgba(245,196,0,${(0.06 + pulse * 0.04).toFixed(3)})`);
//       g.addColorStop(1, "transparent");
//       ctx.fillStyle = g;
//       ctx.fillRect(0, 0, W, H);

//       /* Africa center glow */
//       const afG = ctx.createRadialGradient(
//         cx + R * 0.08,
//         cy + R * 0.04,
//         0,
//         cx + R * 0.08,
//         cy + R * 0.04,
//         R * 0.55,
//       );
//       afG.addColorStop(
//         0,
//         `rgba(245,196,0,${(0.045 + pulse * 0.03).toFixed(3)})`,
//       );
//       afG.addColorStop(1, "transparent");
//       ctx.fillStyle = afG;
//       ctx.fillRect(0, 0, W, H);

//       /* Globe edge */
//       ctx.beginPath();
//       ctx.arc(cx, cy, R, 0, Math.PI * 2);
//       ctx.strokeStyle = "rgba(245,196,0,0.07)";
//       ctx.lineWidth = 1;
//       ctx.stroke();

//       /* Grid */
//       ctx.lineWidth = 0.5;
//       for (let la = -60; la <= 60; la += 30) {
//         ctx.beginPath();
//         ctx.strokeStyle = "rgba(255,255,255,0.04)";
//         let first = true;
//         for (let lo = -180; lo <= 180; lo += 3) {
//           const p = project(deg(la), deg(lo), t, cx, cy, R);
//           if (!p) {
//             first = true;
//             continue;
//           }
//           first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
//           first = false;
//         }
//         ctx.stroke();
//       }
//       for (let lo = -180; lo <= 180; lo += 30) {
//         ctx.beginPath();
//         ctx.strokeStyle = "rgba(255,255,255,0.04)";
//         let first = true;
//         for (let la = -90; la <= 90; la += 3) {
//           const p = project(deg(la), deg(lo), t, cx, cy, R);
//           if (!p) {
//             first = true;
//             continue;
//           }
//           first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
//           first = false;
//         }
//         ctx.stroke();
//       }

//       /* Land dots */
//       LAND.forEach((d) => {
//         const p = project(d.lat, d.lng, t, cx, cy, R);
//         if (!p) return;
//         const fade = 0.35 + p.z * 0.65;
//         ctx.beginPath();
//         ctx.arc(p.px, p.py, d.africa ? 2.8 : 1.4, 0, Math.PI * 2);
//         ctx.fillStyle = d.africa
//           ? `rgba(245,196,0,${(fade * 0.9).toFixed(3)})`
//           : `rgba(255,255,255,${(fade * 0.2).toFixed(3)})`;
//         ctx.fill();
//       });

//       /* Africa center pulse */
//       const afPulse = 0.5 + 0.5 * Math.sin(t * 2.5);
//       const afCenter = project(deg(1), deg(20), t, cx, cy, R);
//       if (afCenter) {
//         ctx.beginPath();
//         ctx.arc(afCenter.px, afCenter.py, 4 + afPulse * 3, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(245,196,0,${(0.15 + afPulse * 0.2).toFixed(3)})`;
//         ctx.fill();
//         ctx.beginPath();
//         ctx.arc(afCenter.px, afCenter.py, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(245,196,0,0.9)";
//         ctx.fill();
//       }

//       rafRef.current = requestAnimationFrame(draw);
//     }

//     rafRef.current = requestAnimationFrame(draw);
//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       aria-hidden="true"
//       className="absolute inset-0 w-full h-full pointer-events-none"
//     />
//   );
// }

// /* ── Slanted image cards ── */
// const CARDS = [
//   {
//     src: "/IMG-20260708-WA0027.jpg",
//     rotate: "-6deg",
//     top: "0px",
//     left: "0px",
//     width: "200px",
//     height: "140px",
//     z: 3,
//     delay: "0s",
//   },
//   {
//     src: "/images/film-set-action-stockcake.jpg",
//     rotate: "5deg",
//     top: "80px",
//     left: "160px",
//     width: "180px",
//     height: "125px",
//     z: 2,
//     delay: "0.1s",
//   },
//   {
//     src: "/images/cinema-camera-mechanics-stockcake.jpg",
//     rotate: "-3deg",
//     top: "20px",
//     left: "310px",
//     width: "190px",
//     height: "130px",
//     z: 1,
//     delay: "0.2s",
//   },
// ];

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 150);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(28px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to   { opacity: 1; }
//         }
//         @keyframes cardIn {
//           from { opacity: 0; transform: rotate(var(--r)) translateY(40px) scale(0.9); }
//           to   { opacity: 1; transform: rotate(var(--r)) translateY(0) scale(1); }
//         }
//       `}</style>

//       <section className="relative min-h-screen bg-[#0D0D0D] overflow-hidden flex items-center justify-center">
//         {/* ── Globe — absolute left ── */}
//         <div
//           className="absolute left-0 top-0 bottom-0 pointer-events-none"
//           style={{
//             width: "42%",
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1.5s ease 0.5s",
//           }}
//           aria-hidden="true"
//         >
//           <GlobeCanvas />

//           {/* Right edge fade so globe blends into center */}
//           <div
//             className="absolute inset-y-0 right-0 w-32 pointer-events-none"
//             style={{
//               background: "linear-gradient(to right, transparent, #0D0D0D)",
//             }}
//           />
//         </div>

//         {/* ── Slanted image cards — absolute right ── */}
//         <div
//           className="absolute right-0 top-0 bottom-0 pointer-events-none hidden lg:block"
//           style={{ width: "42%" }}
//           aria-hidden="true"
//         >
//           {/* Left edge fade */}
//           <div
//             className="absolute inset-y-0 left-0 w-40 pointer-events-none"
//             style={{
//               zIndex: 10,
//               background: "linear-gradient(to left, transparent, #0D0D0D)",
//             }}
//           />

//           {/* Cards container */}
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div
//               className="relative"
//               style={{ width: "500px", height: "260px" }}
//             >
//               {CARDS.map((card, i) => (
//                 <div
//                   key={i}
//                   className="absolute rounded-2xl overflow-hidden"
//                   style={
//                     {
//                       top: card.top,
//                       left: card.left,
//                       width: card.width,
//                       height: card.height,
//                       zIndex: card.z,
//                       "--r": card.rotate,
//                       transform: `rotate(${card.rotate})`,
//                       opacity: mounted ? 1 : 0,
//                       animation: mounted
//                         ? `cardIn 0.9s cubic-bezier(0.22,1,0.36,1) ${card.delay} both`
//                         : "none",
//                       boxShadow:
//                         "0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.08)",
//                     } as React.CSSProperties
//                   }
//                 >
//                   <Image
//                     src={card.src}
//                     alt=""
//                     fill
//                     className="object-cover"
//                     style={{ filter: "brightness(0.75)" }}
//                   />
//                   {/* Dark shadow overlay — bottom fade */}
//                   <div
//                     className="absolute inset-0"
//                     style={{
//                       background:
//                         "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)",
//                     }}
//                   />
//                   {/* Subtle gold border glow on hover */}
//                   <div
//                     className="absolute inset-0 rounded-2xl"
//                     style={{
//                       boxShadow: "inset 0 0 0 1.5px rgba(245,196,0,0.15)",
//                     }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Top + bottom vignette on the cards side */}
//           <div
//             className="absolute inset-x-0 top-0 h-32 pointer-events-none"
//             style={{
//               background: "linear-gradient(to bottom, #0D0D0D, transparent)",
//             }}
//           />
//           <div
//             className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
//             style={{
//               background: "linear-gradient(to top, #0D0D0D, transparent)",
//             }}
//           />
//         </div>

//         {/* ── Film grain ── */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             zIndex: 5,
//             opacity: 0.14,
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='1'/%3E%3C/svg%3E")`,
//             backgroundSize: "200px 200px",
//           }}
//         />

//         {/* ── Deep vignette ── */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             zIndex: 6,
//             background:
//               "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.45) 65%, rgba(0,0,0,0.8) 100%)",
//           }}
//         />

//         {/* ── Scan lines ── */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             zIndex: 6,
//             opacity: 0.022,
//             backgroundImage:
//               "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.8) 2px, rgba(255,255,255,0.8) 3px)",
//             backgroundSize: "100% 4px",
//           }}
//         />

//         {/* ── Bottom fade ── */}
//         <div
//           className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
//           style={{
//             zIndex: 7,
//             background: "linear-gradient(to top, #1A1A1A, transparent)",
//           }}
//         />

//         {/* ── CONTENT — stays centered ── */}
//         <div
//           className="relative text-center px-6 max-w-5xl mx-auto"
//           style={{ zIndex: 10 }}
//         >
//           <h1
//             className="font-display font-black text-white leading-[1.05] tracking-[-0.02em] mb-8"
//             style={{
//               fontSize: "clamp(48px, 8vw, 90px)",
//               opacity: mounted ? 1 : 0,
//               transform: mounted
//                 ? "translateY(0) scale(1)"
//                 : "translateY(28px) scale(1.04)",
//               filter: mounted ? "blur(0px)" : "blur(10px)",
//               transition:
//                 "opacity 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s, transform 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s, filter 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s",
//             }}
//           >
//             <span className="flex items-end justify-center flex-wrap leading-none">
//               <span className="inline-flex items-end whitespace-nowrap">
//                 <span
//                   className="inline-flex items-end flex-shrink-0"
//                   aria-label="A"
//                   style={{ marginRight: "-0.01em", marginBottom: "0.01em" }}
//                 >
//                   <Image
//                     src="/IMG-20260627-WA0036 copy copy.png"
//                     alt=""
//                     aria-hidden="true"
//                     width={96}
//                     height={117}
//                     priority
//                     className="object-contain object-bottom"
//                     style={{
//                       width: "clamp(36px, 7.2vw, 92px)",
//                       height: "auto",
//                       mixBlendMode: "screen",
//                       display: "block",
//                     }}
//                   />
//                 </span>
//                 <span>frica Has Stories</span>
//               </span>
//               <span>&nbsp;the World</span>
//             </span>
//             <span
//               className="block mt-1"
//               style={{
//                 color: "#F5C400",
//                 textShadow: "0 0 80px rgba(245,196,0,0.28)",
//               }}
//             >
//               Needs to Hear.
//             </span>
//           </h1>

//           <p
//             className="text-white/30 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 uppercase"
//             style={{
//               opacity: mounted ? 1 : 0,
//               transform: mounted ? "translateY(0)" : "translateY(16px)",
//               transition: "opacity 1.1s ease 1.3s, transform 1.1s ease 1.3s",
//             }}
//           >
//             We Build What It Takes to Tell Them.
//           </p>

//           <div
//             className="flex items-center justify-center gap-4 mb-8"
//             style={{
//               opacity: mounted ? 1 : 0,
//               transition: "opacity 1s ease 1.65s",
//             }}
//           >
//             <div
//               className="h-[1px] bg-white/10"
//               style={{
//                 width: mounted ? "64px" : "0px",
//                 transition: "width 1s ease 1.65s",
//               }}
//             />
//             <div className="w-1 h-1 rounded-full bg-[#F5C400]/60" />
//             <div
//               className="h-[1px] bg-white/10"
//               style={{
//                 width: mounted ? "64px" : "0px",
//                 transition: "width 1s ease 1.65s",
//               }}
//             />
//           </div>

//           <p
//             className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
//             style={{
//               opacity: mounted ? 1 : 0,
//               transform: mounted ? "translateY(0)" : "translateY(12px)",
//               transition: "opacity 1.1s ease 1.9s, transform 1.1s ease 1.9s",
//             }}
//           >
//             Hand Held Media Group is a Lagos and Abuja-based media holding
//             company — equipping creators, producing original content, and
//             building the infrastructure for African storytelling at its finest.
//           </p>

//           <div
//             className="flex flex-col sm:flex-row items-center justify-center gap-4"
//             style={{
//               opacity: mounted ? 1 : 0,
//               transform: mounted ? "translateY(0)" : "translateY(12px)",
//               transition: "opacity 1.1s ease 2.15s, transform 1.1s ease 2.15s",
//             }}
//           >
//             <Link
//               href="/companies"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-9 py-4 rounded-sm hover:bg-[#e6b800] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 tracking-wide uppercase"
//             >
//               Explore Our Work
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </Link>
//             <Link
//               href="/work-with-us"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm font-medium px-9 py-4 rounded-sm hover:border-white/30 hover:text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 tracking-wide uppercase"
//             >
//               Work With Us
//             </Link>
//           </div>
//         </div>

//         {/* ── Corner marks ── */}
//         <div
//           className="absolute top-8 left-8 pointer-events-none"
//           style={{
//             zIndex: 10,
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1.2s ease 2.6s",
//           }}
//         >
//           <div className="w-6 h-[1px] bg-white/20" />
//           <div className="w-[1px] h-6 bg-white/20" />
//         </div>
//         <div
//           className="absolute top-8 right-8 pointer-events-none flex flex-col items-end"
//           style={{
//             zIndex: 10,
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1.2s ease 2.6s",
//           }}
//         >
//           <div className="w-6 h-[1px] bg-white/20" />
//           <div className="w-[1px] h-6 bg-white/20 ml-auto" />
//         </div>
//         <div
//           className="absolute bottom-8 left-8 pointer-events-none flex flex-col justify-end"
//           style={{
//             zIndex: 10,
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1.2s ease 2.6s",
//           }}
//         >
//           <div className="w-[1px] h-6 bg-white/20" />
//           <div className="w-6 h-[1px] bg-white/20" />
//         </div>
//         <div
//           className="absolute bottom-8 right-8 pointer-events-none flex flex-col items-end justify-end"
//           style={{
//             zIndex: 10,
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1.2s ease 2.6s",
//           }}
//         >
//           <div className="w-[1px] h-6 bg-white/20 ml-auto" />
//           <div className="w-6 h-[1px] bg-white/20" />
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";

// /* ── Slanted image cards (right side) ── */
// const CARDS = [
//   {
//     src: "/IMG-20260708-WA0027.jpg",
//     alt: "HHMG production",
//     style: {
//       width: 200,
//       height: 140,
//       top: "8%",
//       right: "2%",
//       rotate: "-5deg",
//       zIndex: 3,
//     },
//   },
//   {
//     src: "/images/film-set-action-stockcake.jpg",
//     alt: "Film set action",
//     style: {
//       width: 180,
//       height: 125,
//       top: "38%",
//       right: "18%",
//       rotate: "4deg",
//       zIndex: 2,
//     },
//   },
//   {
//     src: "/images/cinema-camera-mechanics-stockcake.jpg",
//     alt: "Cinema camera",
//     style: {
//       width: 165,
//       height: 118,
//       top: "62%",
//       right: "3%",
//       rotate: "-3deg",
//       zIndex: 1,
//     },
//   },
// ];

// /* ── Rotating globe canvas (left side) ── */
// function GlobeCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number>(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const canvasEl = canvas;
//     const parent = canvasEl.parentElement;
//     if (!parent) return;
//     const ctx = canvasEl.getContext("2d") as CanvasRenderingContext2D;
//     if (!ctx) return;

//     let t = 0;

//     const resize = () => {
//       canvasEl.width = parent.offsetWidth;
//       canvasEl.height = parent.offsetHeight;
//     };
//     resize();
//     window.addEventListener("resize", resize);

//     const deg = (d: number) => (d * Math.PI) / 180;
//     const rand = (a: number, b: number) => Math.random() * (b - a) + a;

//     type Dot = { lat: number; lng: number; africa: boolean };
//     const LAND: Dot[] = [];

//     for (let i = 0; i < 300; i++)
//       LAND.push({
//         lat: deg(rand(-35, 37)),
//         lng: deg(rand(-18, 52)),
//         africa: true,
//       });
//     for (let i = 0; i < 90; i++)
//       LAND.push({
//         lat: deg(rand(36, 71)),
//         lng: deg(rand(-10, 40)),
//         africa: false,
//       });
//     for (let i = 0; i < 140; i++)
//       LAND.push({
//         lat: deg(rand(-55, 72)),
//         lng: deg(rand(-168, -34)),
//         africa: false,
//       });
//     for (let i = 0; i < 200; i++)
//       LAND.push({
//         lat: deg(rand(1, 75)),
//         lng: deg(rand(26, 145)),
//         africa: false,
//       });
//     for (let i = 0; i < 60; i++)
//       LAND.push({
//         lat: deg(rand(-45, -10)),
//         lng: deg(rand(114, 180)),
//         africa: false,
//       });

//     function project(
//       lat: number,
//       lng: number,
//       rotY: number,
//       cx: number,
//       cy: number,
//       R: number,
//     ) {
//       const x2 = Math.cos(lat) * Math.sin(lng - rotY);
//       const y2 = Math.sin(lat);
//       const z2 = Math.cos(lat) * Math.cos(lng - rotY);
//       if (z2 < 0) return null;
//       return { px: cx + R * x2, py: cy - R * y2, z: z2 };
//     }

//     function draw() {
//       t += 0.005;
//       const W = canvasEl.width,
//         H = canvasEl.height;
//       const cx = W * 0.5,
//         cy = H * 0.5;
//       const R = Math.min(W, H) * 0.38;

//       ctx.clearRect(0, 0, W, H);

//       /* Gold glow behind globe */
//       const pulse = 0.5 + 0.5 * Math.sin(t * 1.2);
//       const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.5);
//       g.addColorStop(0, `rgba(245,196,0,${(0.07 + pulse * 0.04).toFixed(3)})`);
//       g.addColorStop(1, "transparent");
//       ctx.fillStyle = g;
//       ctx.fillRect(0, 0, W, H);

//       /* Africa region extra glow */
//       const afCenterProj = project(deg(1), deg(20), t, cx, cy, R);
//       if (afCenterProj) {
//         const afG = ctx.createRadialGradient(
//           afCenterProj.px,
//           afCenterProj.py,
//           0,
//           afCenterProj.px,
//           afCenterProj.py,
//           R * 0.5,
//         );
//         afG.addColorStop(
//           0,
//           `rgba(245,196,0,${(0.055 + pulse * 0.03).toFixed(3)})`,
//         );
//         afG.addColorStop(1, "transparent");
//         ctx.fillStyle = afG;
//         ctx.fillRect(0, 0, W, H);
//       }

//       /* Globe circle edge */
//       ctx.beginPath();
//       ctx.arc(cx, cy, R, 0, Math.PI * 2);
//       ctx.strokeStyle = "rgba(245,196,0,0.07)";
//       ctx.lineWidth = 1;
//       ctx.stroke();

//       /* Lat grid */
//       ctx.strokeStyle = "rgba(255,255,255,0.035)";
//       ctx.lineWidth = 0.5;
//       for (let la = -60; la <= 60; la += 30) {
//         ctx.beginPath();
//         let first = true;
//         for (let lo = -180; lo <= 180; lo += 3) {
//           const p = project(deg(la), deg(lo), t, cx, cy, R);
//           if (!p) {
//             first = true;
//             continue;
//           }
//           first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
//           first = false;
//         }
//         ctx.stroke();
//       }

//       /* Lng grid */
//       for (let lo = -180; lo <= 180; lo += 30) {
//         ctx.beginPath();
//         let first = true;
//         for (let la = -90; la <= 90; la += 3) {
//           const p = project(deg(la), deg(lo), t, cx, cy, R);
//           if (!p) {
//             first = true;
//             continue;
//           }
//           first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
//           first = false;
//         }
//         ctx.stroke();
//       }

//       /* Land dots */
//       LAND.forEach((d) => {
//         const p = project(d.lat, d.lng, t, cx, cy, R);
//         if (!p) return;
//         const fade = 0.35 + p.z * 0.65;
//         ctx.beginPath();
//         ctx.arc(p.px, p.py, d.africa ? 2.8 : 1.4, 0, Math.PI * 2);
//         ctx.fillStyle = d.africa
//           ? `rgba(245,196,0,${(fade * 0.9).toFixed(3)})`
//           : `rgba(255,255,255,${(fade * 0.18).toFixed(3)})`;
//         ctx.fill();
//       });

//       /* Africa pulsing center dot */
//       const afPulse = 0.5 + 0.5 * Math.sin(t * 2.5);
//       const afDot = project(deg(1), deg(20), t, cx, cy, R);
//       if (afDot) {
//         ctx.beginPath();
//         ctx.arc(afDot.px, afDot.py, 4 + afPulse * 3, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(245,196,0,${(0.15 + afPulse * 0.2).toFixed(3)})`;
//         ctx.fill();
//         ctx.beginPath();
//         ctx.arc(afDot.px, afDot.py, 2, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(245,196,0,0.9)";
//         ctx.fill();
//       }

//       /* Scanline */
//       const scanY = (t * 40) % H;
//       const sg = ctx.createLinearGradient(0, scanY - 12, 0, scanY + 12);
//       sg.addColorStop(0, "transparent");
//       sg.addColorStop(0.5, "rgba(245,196,0,0.018)");
//       sg.addColorStop(1, "transparent");
//       ctx.fillStyle = sg;
//       ctx.fillRect(0, scanY - 12, W, 24);

//       rafRef.current = requestAnimationFrame(draw);
//     }

//     rafRef.current = requestAnimationFrame(draw);
//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       aria-hidden="true"
//       className="absolute inset-0 w-full h-full pointer-events-none"
//     />
//   );
// }

// /* ── Slanted image card ── */
// function TiltedCard({
//   src,
//   alt,
//   width,
//   height,
//   top,
//   right,
//   rotate,
//   zIndex,
//   delay,
// }: {
//   src: string;
//   alt: string;
//   width: number;
//   height: number;
//   top: string;
//   right: string;
//   rotate: string;
//   zIndex: number;
//   delay: number;
// }) {
//   const [hovered, setHovered] = useState(false);
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), delay);
//     return () => clearTimeout(t);
//   }, [delay]);

//   return (
//     <div
//       className="absolute overflow-hidden rounded-xl border border-white/15"
//       style={{
//         width,
//         height,
//         top,
//         right,
//         zIndex,
//         transform: `rotate(${hovered ? "0deg" : rotate}) scale(${hovered ? 1.06 : 1})`,
//         opacity: mounted ? 1 : 0,
//         transition:
//           "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.8s ease, box-shadow 0.4s ease",
//         boxShadow: hovered
//           ? "0 30px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(245,196,0,0.25)"
//           : "0 20px 50px rgba(0,0,0,0.65)",
//         cursor: "default",
//       }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       {/* Image */}
//       <Image
//         src={src}
//         alt={alt}
//         fill
//         className="object-cover"
//         style={{
//           filter: "brightness(0.75) saturate(0.8)",
//         }}
//       />

//       {/* Gradient shadow overlay — transparent top, dark bottom */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(160deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.55) 100%)",
//         }}
//       />

//       {/* Gold shimmer on hover */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(135deg, rgba(245,196,0,0.08), transparent 60%)",
//           opacity: hovered ? 1 : 0,
//           transition: "opacity 0.4s",
//         }}
//       />

//       {/* Top edge gold line */}
//       <div
//         className="absolute top-0 inset-x-0 h-px"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, rgba(245,196,0,0.5), transparent)",
//           opacity: hovered ? 1 : 0,
//           transition: "opacity 0.4s",
//         }}
//       />
//     </div>
//   );
// }

// export default function Hero() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setMounted(true), 150);
//     return () => clearTimeout(t);
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes fadeBlur {
//           from { opacity: 0; filter: blur(10px); transform: translateY(28px) scale(1.04); }
//           to   { opacity: 1; filter: blur(0px);  transform: translateY(0) scale(1); }
//         }
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(16px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes widthGrow {
//           from { width: 0; }
//           to   { width: 64px; }
//         }
//       `}</style>

//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
//         {/* ── LEFT: Globe — absolutely positioned ── */}
//         <div
//           className="absolute left-0 top-0 bottom-0 pointer-events-none"
//           style={{ width: "42%", zIndex: 1 }}
//         >
//           <GlobeCanvas />

//           {/* Right-side fade so globe blends into center */}
//           <div
//             className="absolute inset-y-0 right-0 w-32 pointer-events-none"
//             style={{
//               background: "linear-gradient(to right, transparent, #0D0D0D)",
//             }}
//           />
//         </div>

//         {/* ── RIGHT: Slanted image cards ── */}
//         <div
//           className="absolute top-0 right-0 bottom-0 pointer-events-none hidden lg:block"
//           style={{ width: "32%", zIndex: 2 }}
//         >
//           {CARDS.map((card, i) => (
//             <TiltedCard
//               key={i}
//               src={card.src}
//               alt={card.alt}
//               width={card.style.width}
//               height={card.style.height}
//               top={card.style.top}
//               right={card.style.right}
//               rotate={card.style.rotate}
//               zIndex={card.style.zIndex}
//               delay={600 + i * 200}
//             />
//           ))}

//           {/* Left-side fade so cards blend into center */}
//           <div
//             className="absolute inset-y-0 left-0 w-24 pointer-events-none"
//             style={{
//               background: "linear-gradient(to left, transparent, #0D0D0D)",
//               zIndex: 10,
//             }}
//           />
//         </div>

//         {/* ── Film grain ── */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             zIndex: 3,
//             opacity: 0.14,
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
//             backgroundSize: "200px 200px",
//           }}
//         />

//         {/* ── Deep vignette ── */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             zIndex: 4,
//             background:
//               "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.85) 100%)",
//           }}
//         />

//         {/* ── Bottom fade ── */}
//         <div
//           className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
//           style={{
//             zIndex: 5,
//             background: "linear-gradient(to top, #1A1A1A, transparent)",
//           }}
//         />

//         {/* ── Corner marks ── */}
//         <div
//           className="absolute top-8 left-8 pointer-events-none"
//           style={{
//             zIndex: 10,
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1.2s ease 2.6s",
//           }}
//         >
//           <div className="w-6 h-px bg-white/20" />
//           <div className="w-px h-6 bg-white/20" />
//         </div>
//         <div
//           className="absolute top-8 right-8 pointer-events-none flex flex-col items-end"
//           style={{
//             zIndex: 10,
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1.2s ease 2.6s",
//           }}
//         >
//           <div className="w-6 h-px bg-white/20" />
//           <div className="w-px h-6 bg-white/20 ml-auto" />
//         </div>
//         <div
//           className="absolute bottom-8 left-8 pointer-events-none flex flex-col justify-end"
//           style={{
//             zIndex: 10,
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1.2s ease 2.6s",
//           }}
//         >
//           <div className="w-px h-6 bg-white/20" />
//           <div className="w-6 h-px bg-white/20" />
//         </div>
//         <div
//           className="absolute bottom-8 right-8 pointer-events-none flex flex-col items-end justify-end"
//           style={{
//             zIndex: 10,
//             opacity: mounted ? 1 : 0,
//             transition: "opacity 1.2s ease 2.6s",
//           }}
//         >
//           <div className="w-px h-6 bg-white/20 ml-auto" />
//           <div className="w-6 h-px bg-white/20" />
//         </div>

//         {/* ── CENTER: Content ── */}
//         <div
//           className="relative text-center px-6 max-w-5xl mx-auto"
//           style={{ zIndex: 10 }}
//         >
//           {/* H1 */}
//           <h1
//             className="font-display font-black text-white leading-[1.05] tracking-[-0.02em] mb-8"
//             style={{
//               fontSize: "clamp(48px, 8vw, 90px)",
//               animation: mounted
//                 ? "fadeBlur 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s both"
//                 : "none",
//               opacity: mounted ? undefined : 0,
//             }}
//           >
//             {/* Africa A + frica */}
//             <span className="flex items-end justify-center flex-wrap leading-none">
//               <span className="inline-flex items-end whitespace-nowrap">
//                 <span
//                   className="inline-flex items-end flex-shrink-0"
//                   aria-label="A"
//                   style={{ marginRight: "-0.01em", marginBottom: "0.01em" }}
//                 >
//                   <img
//                     src="/IMG-20260627-WA0036 copy copy.png"
//                     alt=""
//                     aria-hidden="true"
//                     style={{
//                       width: "clamp(36px, 7.2vw, 92px)",
//                       height: "auto",
//                       mixBlendMode: "screen",
//                       display: "block",
//                     }}
//                   />
//                 </span>
//                 <span>frica Has Stories</span>
//               </span>
//               <span>&nbsp;the World</span>
//             </span>
//             <em
//               className="not-italic block"
//               style={{
//                 color: "#F5C400",
//                 textShadow: "0 0 80px rgba(245,196,0,0.28)",
//               }}
//             >
//               Needs to Hear.
//             </em>
//           </h1>

//           {/* Tagline */}
//           <p
//             className="text-white/30 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-6 uppercase"
//             style={{
//               animation: mounted ? "fadeUp 1.1s ease 1.3s both" : "none",
//               opacity: mounted ? undefined : 0,
//             }}
//           >
//             We Build What It Takes to Tell Them.
//           </p>

//           {/* Divider */}
//           <div
//             className="flex items-center justify-center gap-4 mb-8"
//             style={{
//               opacity: mounted ? 1 : 0,
//               transition: "opacity 1s ease 1.65s",
//             }}
//           >
//             <div
//               className="h-px bg-white/10"
//               style={{
//                 width: mounted ? "64px" : "0px",
//                 transition: "width 1s ease 1.65s",
//               }}
//             />
//             <div className="w-1 h-1 rounded-full bg-[#F5C400]/60" />
//             <div
//               className="h-px bg-white/10"
//               style={{
//                 width: mounted ? "64px" : "0px",
//                 transition: "width 1s ease 1.65s",
//               }}
//             />
//           </div>

//           {/* Sub-copy */}
//           <p
//             className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
//             style={{
//               animation: mounted ? "fadeUp 1.1s ease 1.9s both" : "none",
//               opacity: mounted ? undefined : 0,
//             }}
//           >
//             Hand Held Media Group is a Lagos and Abuja-based media holding
//             company — equipping creators, producing original content, and
//             building the infrastructure for African storytelling at its finest.
//           </p>

//           {/* CTAs */}
//           <div
//             className="flex flex-col sm:flex-row items-center justify-center gap-4"
//             style={{
//               animation: mounted ? "fadeUp 1.1s ease 2.15s both" : "none",
//               opacity: mounted ? undefined : 0,
//             }}
//           >
//             <Link
//               href="/companies"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-9 py-4 rounded-sm hover:bg-[#e6b800] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 tracking-wide uppercase"
//             >
//               Explore Our Work
//               <svg
//                 className="w-4 h-4"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </Link>
//             <Link
//               href="/work-with-us"
//               className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm font-medium px-9 py-4 rounded-sm hover:border-white/30 hover:text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 tracking-wide uppercase"
//             >
//               Work With Us
//             </Link>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    src: "/IMG-20260708-WA0027.jpg",
    alt: "HHMG production",
    width: 200,
    height: 140,
    top: "8%",
    right: "2%",
    rotate: "-5deg",
    zIndex: 3,
  },
  {
    src: "/images/film-set-action-stockcake.jpg",
    alt: "Film set action",
    width: 180,
    height: 125,
    top: "38%",
    right: "18%",
    rotate: "4deg",
    zIndex: 2,
  },
  {
    src: "/images/cinema-camera-mechanics-stockcake.jpg",
    alt: "Cinema camera",
    width: 165,
    height: 118,
    top: "62%",
    right: "3%",
    rotate: "-3deg",
    zIndex: 1,
  },
];

/* ── Globe canvas — centered, Africa highlighted ── */
function GlobeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const canvasEl = canvas;
    let t = 0;

    const resize = () => {
      canvasEl.width = parent.offsetWidth;
      canvasEl.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const deg = (d: number) => (d * Math.PI) / 180;
    const rand = (a: number, b: number) => Math.random() * (b - a) + a;

    type Dot = { lat: number; lng: number; africa: boolean };
    const LAND: Dot[] = [];
    for (let i = 0; i < 300; i++)
      LAND.push({
        lat: deg(rand(-35, 37)),
        lng: deg(rand(-18, 52)),
        africa: true,
      });
    for (let i = 0; i < 90; i++)
      LAND.push({
        lat: deg(rand(36, 71)),
        lng: deg(rand(-10, 40)),
        africa: false,
      });
    for (let i = 0; i < 140; i++)
      LAND.push({
        lat: deg(rand(-55, 72)),
        lng: deg(rand(-168, -34)),
        africa: false,
      });
    for (let i = 0; i < 200; i++)
      LAND.push({
        lat: deg(rand(1, 75)),
        lng: deg(rand(26, 145)),
        africa: false,
      });
    for (let i = 0; i < 60; i++)
      LAND.push({
        lat: deg(rand(-45, -10)),
        lng: deg(rand(114, 180)),
        africa: false,
      });

    function project(
      lat: number,
      lng: number,
      rotY: number,
      cx: number,
      cy: number,
      R: number,
    ) {
      const x2 = Math.cos(lat) * Math.sin(lng - rotY);
      const y2 = Math.sin(lat);
      const z2 = Math.cos(lat) * Math.cos(lng - rotY);
      if (z2 < 0) return null;
      return { px: cx + R * x2, py: cy - R * y2, z: z2 };
    }

    function draw() {
      if (!canvas || !ctx) return;
      t += 0.005;
      const W = canvas.width,
        H = canvas.height;
      const cx = W * 0.5,
        cy = H * 0.5;
      const R = Math.min(W, H) * 0.32;

      ctx.clearRect(0, 0, W, H);

      const pulse = 0.5 + 0.5 * Math.sin(t * 1.2);

      /* Gold glow */
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.5);
      g.addColorStop(0, `rgba(245,196,0,${(0.07 + pulse * 0.04).toFixed(3)})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      /* Africa region glow */
      const afDotPos = project(deg(1), deg(20), t, cx, cy, R);
      if (afDotPos) {
        const afG = ctx.createRadialGradient(
          afDotPos.px,
          afDotPos.py,
          0,
          afDotPos.px,
          afDotPos.py,
          R * 0.5,
        );
        afG.addColorStop(
          0,
          `rgba(245,196,0,${(0.055 + pulse * 0.03).toFixed(3)})`,
        );
        afG.addColorStop(1, "transparent");
        ctx.fillStyle = afG;
        ctx.fillRect(0, 0, W, H);
      }

      /* Globe edge */
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(245,196,0,0.07)";
      ctx.lineWidth = 1;
      ctx.stroke();

      /* Lat grid */
      ctx.strokeStyle = "rgba(255,255,255,0.035)";
      ctx.lineWidth = 0.5;
      for (let la = -60; la <= 60; la += 30) {
        ctx.beginPath();
        let first = true;
        for (let lo = -180; lo <= 180; lo += 3) {
          const p = project(deg(la), deg(lo), t, cx, cy, R);
          if (!p) {
            first = true;
            continue;
          }
          first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
          first = false;
        }
        ctx.stroke();
      }

      /* Lng grid */
      for (let lo = -180; lo <= 180; lo += 30) {
        ctx.beginPath();
        let first = true;
        for (let la = -90; la <= 90; la += 3) {
          const p = project(deg(la), deg(lo), t, cx, cy, R);
          if (!p) {
            first = true;
            continue;
          }
          first ? ctx.moveTo(p.px, p.py) : ctx.lineTo(p.px, p.py);
          first = false;
        }
        ctx.stroke();
      }

      /* Dots */
      LAND.forEach((d) => {
        const p = project(d.lat, d.lng, t, cx, cy, R);
        if (!p) return;
        const fade = 0.35 + p.z * 0.65;
        ctx.beginPath();
        ctx.arc(p.px, p.py, d.africa ? 2.6 : 1.3, 0, Math.PI * 2);
        ctx.fillStyle = d.africa
          ? `rgba(245,196,0,${(fade * 0.9).toFixed(3)})`
          : `rgba(255,255,255,${(fade * 0.18).toFixed(3)})`;
        ctx.fill();
      });

      /* Africa pulse dot */
      if (afDotPos) {
        const afPulse = 0.5 + 0.5 * Math.sin(t * 2.5);
        ctx.beginPath();
        ctx.arc(afDotPos.px, afDotPos.py, 4 + afPulse * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,196,0,${(0.15 + afPulse * 0.2).toFixed(3)})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(afDotPos.px, afDotPos.py, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(245,196,0,0.9)";
        ctx.fill();
      }

      /* Scanline */
      const scanY = (t * 40) % H;
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
    />
  );
}

/* ── Tilted image card ── */
function TiltedCard({
  src,
  alt,
  width,
  height,
  top,
  right,
  rotate,
  zIndex,
  delay,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  top: string;
  right: string;
  rotate: string;
  zIndex: number;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      className="absolute overflow-hidden rounded-xl border border-white/15"
      style={{
        width,
        height,
        top,
        right,
        zIndex,
        opacity: visible ? 1 : 0,
        transform: `rotate(${hovered ? "0deg" : rotate}) scale(${hovered ? 1.06 : 1})`,
        transition:
          "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.9s ease, box-shadow 0.4s ease",
        boxShadow: hovered
          ? "0 30px 70px rgba(0,0,0,0.7), 0 0 0 1px rgba(245,196,0,0.28)"
          : "0 20px 55px rgba(0,0,0,0.65)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{ filter: "brightness(0.72) saturate(0.8)" }}
      />

      {/* Shadow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.58) 100%)",
        }}
      />

      {/* Gold shimmer on hover */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(245,196,0,0.09), transparent 60%)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />

      {/* Top gold line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(245,196,0,0.55), transparent)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeBlur {
          from { opacity:0; filter:blur(10px); transform:translateY(28px) scale(1.04); }
          to   { opacity:1; filter:blur(0);   transform:translateY(0) scale(1); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
        {/* ── Globe — full width centered behind everything ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <GlobeCanvas />
        </div>

        {/* ── Tilted cards — right side, visible on all screens ── */}
        <div
          className="absolute top-0 right-0 bottom-0 pointer-events-none"
          style={{ width: "clamp(130px, 28vw, 360px)", zIndex: 2 }}
        >
          {CARDS.map((card, i) => (
            <TiltedCard
              key={i}
              src={card.src}
              alt={card.alt}
              width={card.width}
              height={card.height}
              top={card.top}
              right={card.right}
              rotate={card.rotate}
              zIndex={card.zIndex}
              delay={700 + i * 220}
            />
          ))}
          {/* Left fade so cards blend into center */}
          <div
            className="absolute inset-y-0 left-0 w-10 sm:w-20 pointer-events-none"
            style={{
              background: "linear-gradient(to left, transparent, #0D0D0D)",
              zIndex: 10,
            }}
          />
        </div>

        {/* ── Film grain ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 3,
            opacity: 0.14,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        {/* ── Vignette ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 4,
            background:
              "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.45) 58%, rgba(0,0,0,0.88) 100%)",
          }}
        />

        {/* ── Bottom fade ── */}
        <div
          className="absolute bottom-0 inset-x-0 h-48 pointer-events-none"
          style={{
            zIndex: 5,
            background: "linear-gradient(to top, #1A1A1A, transparent)",
          }}
        />

        {/* ── Corner marks ── */}
        <div
          className="absolute top-8 left-8 pointer-events-none"
          style={{
            zIndex: 10,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 2.6s",
          }}
        >
          <div className="w-6 h-px bg-white/20" />
          <div className="w-px h-6 bg-white/20" />
        </div>
        <div
          className="absolute top-8 right-8 pointer-events-none flex flex-col items-end"
          style={{
            zIndex: 10,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 2.6s",
          }}
        >
          <div className="w-6 h-px bg-white/20" />
          <div className="w-px h-6 bg-white/20 ml-auto" />
        </div>
        <div
          className="absolute bottom-8 left-8 pointer-events-none flex flex-col justify-end"
          style={{
            zIndex: 10,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 2.6s",
          }}
        >
          <div className="w-px h-6 bg-white/20" />
          <div className="w-6 h-px bg-white/20" />
        </div>
        <div
          className="absolute bottom-8 right-8 pointer-events-none flex flex-col items-end justify-end"
          style={{
            zIndex: 10,
            opacity: mounted ? 1 : 0,
            transition: "opacity 1.2s ease 2.6s",
          }}
        >
          <div className="w-px h-6 bg-white/20 ml-auto" />
          <div className="w-6 h-px bg-white/20" />
        </div>

        {/* ── CENTER CONTENT ── */}
        <div
          className="relative text-center px-6 max-w-5xl mx-auto"
          style={{ zIndex: 10 }}
        >
          <h1
            className="font-display font-black text-white leading-[1.05] tracking-[-0.02em] mb-8"
            style={{
              fontSize: "clamp(40px, 8vw, 90px)",
              animation: mounted
                ? "fadeBlur 1.4s cubic-bezier(0.16,1,0.3,1) 0.55s both"
                : "none",
              opacity: mounted ? undefined : 0,
            }}
          >
            <span className="flex items-end justify-center flex-wrap leading-none">
              <span className="inline-flex items-end whitespace-nowrap">
                <span
                  className="inline-flex items-end flex-shrink-0"
                  aria-label="A"
                  style={{ marginRight: "-0.01em", marginBottom: "0.01em" }}
                >
                  <img
                    src="/IMG-20260627-WA0036 copy copy.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: "clamp(34px, 7.2vw, 90px)",
                      height: "auto",
                      mixBlendMode: "screen",
                      display: "block",
                    }}
                  />
                </span>
                <span>frica Has Stories</span>
              </span>
              <span>&nbsp;the World</span>
            </span>
            <em
              className="not-italic block"
              style={{
                color: "#F5C400",
                textShadow: "0 0 80px rgba(245,196,0,0.28)",
              }}
            >
              Needs to Hear.
            </em>
          </h1>

          <p
            className="text-white/30 text-base sm:text-xl md:text-2xl font-light tracking-wide mb-6 uppercase"
            style={{
              animation: mounted ? "fadeUp 1.1s ease 1.3s both" : "none",
              opacity: mounted ? undefined : 0,
            }}
          >
            We Build What It Takes to Tell Them.
          </p>

          <div
            className="flex items-center justify-center gap-4 mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transition: "opacity 1s ease 1.65s",
            }}
          >
            <div
              className="h-px bg-white/10"
              style={{
                width: mounted ? "64px" : "0px",
                transition: "width 1s ease 1.65s",
              }}
            />
            <div className="w-1 h-1 rounded-full bg-[#F5C400]/60" />
            <div
              className="h-px bg-white/10"
              style={{
                width: mounted ? "64px" : "0px",
                transition: "width 1s ease 1.65s",
              }}
            />
          </div>

          <p
            className="text-white/50 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed mb-12"
            style={{
              animation: mounted ? "fadeUp 1.1s ease 1.9s both" : "none",
              opacity: mounted ? undefined : 0,
            }}
          >
            Hand Held Media Group is a Lagos and Abuja-based media holding
            company — equipping creators, producing original content, and
            building the infrastructure for African storytelling at its finest.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{
              animation: mounted ? "fadeUp 1.1s ease 2.15s both" : "none",
              opacity: mounted ? undefined : 0,
            }}
          >
            <Link
              href="/companies"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-9 py-4 rounded-sm hover:bg-[#e6b800] hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 tracking-wide uppercase"
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
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 text-sm font-medium px-9 py-4 rounded-sm hover:border-white/30 hover:text-white hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 tracking-wide uppercase"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
