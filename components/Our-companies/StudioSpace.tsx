// "use client";

// import {
//   Camera,
//   Mic2,
//   Clapperboard,
//   Users,
//   ParkingSquare,
//   Wifi,
//   ArrowRight,
// } from "lucide-react";

// /**
//  * HH Studio Space — standalone section for /companies
//  *
//  * Rebuilt to match the existing 01 (Studios) section layout exactly:
//  * two-column header (headline left / description + circle-arrow CTA right),
//  * then a hairline-bordered 3-col grid, icon-first cards with a short
//  * yellow underline rule before the title.
//  *
//  * PLACEHOLDER CONTENT: room names, capacities, and specs below are
//  * placeholders -- swap in the real studio details before this ships.
//  */

// const studioSpaces = [
//   {
//     id: "01",
//     title: "Cyclorama Studio",
//     desc: "Seamless white cyc wall for product, fashion, and green-screen work.",
//     Icon: Camera,
//   },
//   {
//     id: "02",
//     title: "Podcast & VO Booth",
//     desc: "Acoustically treated room for podcasts, voiceover, and interviews.",
//     Icon: Mic2,
//   },
//   {
//     id: "03",
//     title: "Green Screen Room",
//     desc: "Full chroma-key setup for compositing and virtual backgrounds.",
//     Icon: Clapperboard,
//   },
//   {
//     id: "04",
//     title: "Up to 12 Crew",
//     desc: "Room to bring your full crew -- talent, camera, lighting, and sound.",
//     Icon: Users,
//   },
//   {
//     id: "05",
//     title: "On-Site Parking",
//     desc: "Loading access and parking for vans and equipment trucks.",
//     Icon: ParkingSquare,
//   },
//   {
//     id: "06",
//     title: "Fibre & Backup Power",
//     desc: "Reliable internet and power so shoots don't stop for outages.",
//     Icon: Wifi,
//   },
// ];

// const COLS = 3;

// export default function StudioSpace() {
//   return (
//     <section className="bg-[#1A1A1A] px-6 sm:px-10 lg:px-16 py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl">
//         {/* Header: two-column, matches 01 Studios layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
//           <div>
//             <p className="text-xs font-bold tracking-[0.2em] text-white/40 mb-6">
//               05 / <span className="text-[#F5C400]">HH STUDIO SPACE</span>
//             </p>
//             <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
//               Need a space
//               <br />
//               to shoot?{" "}
//               <span
//                 className="text-[#F5C400]"
//                 style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
//               >
//                 Come use ours.
//               </span>
//             </h2>
//           </div>

//           <div className="flex flex-col justify-end">
//             <p className="text-white/60 text-lg leading-relaxed mb-8">
//               Beyond gear, Hand Held Media Studios opens its own production
//               space to independent filmmakers, brands, and creators -- book by
//               the hour or the day, fully equipped and ready to shoot.
//             </p>
//             <a
//               href="/contact"
//               className="inline-flex items-center gap-4 group w-fit"
//             >
//               <span className="w-12 h-12 rounded-full border border-[#F5C400] flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-black transition-colors">
//                 <ArrowRight className="w-5 h-5" strokeWidth={2} />
//               </span>
//               <span className="font-bold text-white text-sm">
//                 Book the Studio
//               </span>
//             </a>
//           </div>
//         </div>

//         {/* Card grid: hairline dividers, no rounded corners -- matches 01 Studios grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
//           {studioSpaces.map(({ id, title, desc, Icon }, i) => {
//             const isRightEdge = (i + 1) % COLS === 0;
//             const isBottomRow = i >= studioSpaces.length - COLS;
//             return (
//               <div
//                 key={id}
//                 className={[
//                   "p-10 border-white/10",
//                   isRightEdge ? "" : "border-r",
//                   isBottomRow ? "" : "border-b",
//                 ].join(" ")}
//               >
//                 <p className="text-xs font-medium text-white/30 mb-6">{id}</p>
//                 <Icon
//                   className="w-8 h-8 text-[#F5C400] mb-6"
//                   strokeWidth={1.5}
//                 />
//                 <span className="block w-8 h-px bg-[#F5C400] mb-4" />
//                 <h3 className="font-display text-xl font-bold text-white mb-2">
//                   {title}
//                 </h3>
//                 <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   Camera,
//   Mic2,
//   Clapperboard,
//   Users,
//   ParkingSquare,
//   Wifi,
//   ArrowRight,
// } from "lucide-react";

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

// /* ── Ambient particle canvas ── */
// function BgCanvas({ active }: { active: boolean }) {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number>(0);

//   useEffect(() => {
//     if (!active) return;

//     const canvasElement = canvasRef.current;
//     if (canvasElement == null) return;

//     const parent = canvasElement.parentElement;
//     if (!parent) return;

//     const context = canvasElement.getContext("2d");
//     if (!context) return;

//     let globalT = 0;
//     const resize = () => {
//       const width = parent.clientWidth || parent.offsetWidth;
//       const height = parent.clientHeight || parent.offsetHeight;

//       if (!width || !height) return;

//       canvasElement.width = width;
//       canvasElement.height = height;
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
//     const particles: Particle[] = Array.from({ length: 28 }, () => {
//       const width = canvasElement.width || 1;
//       const height = canvasElement.height || 1;

//       return {
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: (Math.random() - 0.5) * 0.12,
//         vy: (Math.random() - 0.5) * 0.12,
//         r: Math.random() * 1.1 + 0.3,
//         a: Math.random() * 0.2 + 0.04,
//         gold: Math.random() < 0.35,
//       };
//     });

//     function draw() {
//       globalT += 0.01;
//       const W = canvasElement.width;
//       const H = canvasElement.height;

//       if (!W || !H) return;

//       context.clearRect(0, 0, W, H);

//       const pulse = 0.5 + 0.5 * Math.sin(globalT * 0.4);
//       const gx = W * 0.85;
//       const gy = H * 0.15;
//       const g = context.createRadialGradient(gx, gy, 0, gx, gy, 340);
//       g.addColorStop(0, `rgba(245,196,0,${(0.05 + pulse * 0.02).toFixed(3)})`);
//       g.addColorStop(1, "transparent");
//       context.fillStyle = g;
//       context.fillRect(0, 0, W, H);

//       particles.forEach((p) => {
//         p.x = (p.x + p.vx + W) % W;
//         p.y = (p.y + p.vy + H) % H;
//         context.beginPath();
//         context.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         context.fillStyle = p.gold
//           ? `rgba(245,196,0,${p.a})`
//           : `rgba(255,255,255,${p.a * 0.4})`;
//         context.fill();
//       });

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

// /* ── Icon wrapper: subtle glow + lift on hover ── */
// function CardIcon({
//   Icon,
//   hovered,
// }: {
//   Icon: typeof Camera;
//   hovered: boolean;
// }) {
//   return (
//     <div
//       className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 transition-all duration-300"
//       style={{
//         background: hovered ? "rgba(245,196,0,0.16)" : "rgba(245,196,0,0.07)",
//         transform: hovered ? "translateY(-2px)" : "translateY(0)",
//       }}
//     >
//       <Icon
//         className="w-6 h-6 transition-colors duration-300"
//         style={{ color: hovered ? "#F5C400" : "rgba(245,196,0,0.75)" }}
//         strokeWidth={1.5}
//       />
//     </div>
//   );
// }

// const studioSpaces = [
//   {
//     id: "01",
//     title: "Cyclorama Studio",
//     desc: "Seamless white cyc wall for product, fashion, and green-screen work.",
//     Icon: Camera,
//   },
//   {
//     id: "02",
//     title: "Podcast & VO Booth",
//     desc: "Acoustically treated room for podcasts, voiceover, and interviews.",
//     Icon: Mic2,
//   },
//   {
//     id: "03",
//     title: "Green Screen Room",
//     desc: "Full chroma-key setup for compositing and virtual backgrounds.",
//     Icon: Clapperboard,
//   },
//   {
//     id: "04",
//     title: "Up to 12 Crew",
//     desc: "Room to bring your full crew -- talent, camera, lighting, and sound.",
//     Icon: Users,
//   },
//   {
//     id: "05",
//     title: "On-Site Parking",
//     desc: "Loading access and parking for vans and equipment trucks.",
//     Icon: ParkingSquare,
//   },
//   {
//     id: "06",
//     title: "Fibre & Backup Power",
//     desc: "Reliable internet and power so shoots don't stop for outages.",
//     Icon: Wifi,
//   },
// ];

// const COLS = 3;

// export default function StudioSpace() {
//   const { ref, inView } = useInView(0.1);
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);

//   return (
//     <>
//       <style>{`
//         @keyframes studioZoomInLeft {
//           from { opacity: 0; transform: translateX(-70px) scale(0.94); }
//           to   { opacity: 1; transform: translateX(0) scale(1); }
//         }
//         @keyframes studioZoomInLeftDelay {
//           from { opacity: 0; transform: translateX(-40px) scale(0.96); }
//           to   { opacity: 1; transform: translateX(0) scale(1); }
//         }
//         @keyframes studioCardUp {
//           from { opacity: 0; transform: translateY(28px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes studioCtaPulse {
//           0%,100% { box-shadow: 0 0 0 0 rgba(245,196,0,0); }
//           50%     { box-shadow: 0 0 18px 2px rgba(245,196,0,0.18); }
//         }
//       `}</style>

//       <section
//         ref={ref as React.RefObject<HTMLElement>}
//         className="relative bg-[#1A1A1A] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"
//       >
//         <BgCanvas active={inView} />

//         {/* film-grain noise overlay, same technique as Creators Platform */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             zIndex: 1,
//             opacity: 0.08,
//             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
//             backgroundSize: "160px 160px",
//           }}
//         />

//         <div className="relative mx-auto max-w-7xl" style={{ zIndex: 10 }}>
//           {/* Header: two-column, matches 01 Studios layout, zoom-in reveal */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
//             <div
//               style={{
//                 opacity: inView ? 1 : 0,
//                 animation: inView
//                   ? "studioZoomInLeft 0.9s cubic-bezier(0.16,1,0.3,1) both"
//                   : "none",
//               }}
//             >
//               <p className="text-xs font-bold tracking-[0.2em] text-white/40 mb-6">
//                 05 / <span className="text-[#F5C400]">HH STUDIO SPACE</span>
//               </p>
//               <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
//                 Need a space
//                 <br />
//                 to shoot?{" "}
//                 <span
//                   className="text-[#F5C400]"
//                   style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
//                 >
//                   Come use ours.
//                 </span>
//               </h2>
//             </div>

//             <div
//               className="flex flex-col justify-end"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 animation: inView
//                   ? "studioZoomInLeftDelay 0.9s cubic-bezier(0.16,1,0.3,1) 0.15s both"
//                   : "none",
//               }}
//             >
//               <p className="text-white/60 text-lg leading-relaxed mb-8">
//                 Beyond gear, Hand Held Media Studios opens its own production
//                 space to independent filmmakers, brands, and creators -- book by
//                 the hour or the day, fully equipped and ready to shoot.
//               </p>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-4 group w-fit rounded-full"
//                 style={{ animation: "studioCtaPulse 3s ease-in-out infinite" }}
//               >
//                 <span className="w-12 h-12 rounded-full border border-[#F5C400] flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-black transition-colors duration-300">
//                   <ArrowRight
//                     className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
//                     strokeWidth={2}
//                   />
//                 </span>
//                 <span className="font-bold text-white text-sm">
//                   Book the Studio
//                 </span>
//               </a>
//             </div>
//           </div>

//           {/* Card grid: hairline dividers, staggered reveal, hover glow icons */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
//             {studioSpaces.map(({ id, title, desc, Icon }, i) => {
//               const isRightEdge = (i + 1) % COLS === 0;
//               const isBottomRow = i >= studioSpaces.length - COLS;
//               const delay = 0.25 + i * 0.1;
//               const hovered = hoveredCard === id;
//               return (
//                 <div
//                   key={id}
//                   onMouseEnter={() => setHoveredCard(id)}
//                   onMouseLeave={() => setHoveredCard(null)}
//                   className={[
//                     "p-10 border-white/10 transition-colors duration-300",
//                     isRightEdge ? "" : "border-r",
//                     isBottomRow ? "" : "border-b",
//                     hovered ? "bg-white/[0.025]" : "",
//                   ].join(" ")}
//                   style={{
//                     opacity: inView ? 1 : 0,
//                     animation: inView
//                       ? `studioCardUp 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s both`
//                       : "none",
//                   }}
//                 >
//                   <p className="text-xs font-medium text-white/30 mb-4">{id}</p>
//                   <CardIcon Icon={Icon} hovered={hovered} />
//                   <span
//                     className="block h-px bg-[#F5C400] mb-4 transition-all duration-300"
//                     style={{ width: hovered ? "2.5rem" : "2rem" }}
//                   />
//                   <h3 className="font-display text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#F5C400]">
//                     {title}
//                   </h3>
//                   <p className="text-white/50 text-sm leading-relaxed">
//                     {desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>

//           {/* animated gradient divider, same technique as Creators Platform */}
//           <div
//             className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
//             style={{
//               transform: inView ? "scaleX(1)" : "scaleX(0)",
//               opacity: inView ? 1 : 0,
//               transition: "transform 1s ease 1.1s, opacity 1s ease 1.1s",
//             }}
//           />
//         </div>
//       </section>
//     </>
//   );
// }

// "use client";

// import { useEffect, useRef, useState } from "react";
// import {
//   Camera,
//   Mic2,
//   Clapperboard,
//   Users,
//   ParkingSquare,
//   Wifi,
//   ArrowRight,
// } from "lucide-react";

// /**
//  * HH Studio Space -- standalone section for /companies
//  *
//  * No canvas / no ctx anywhere -- all animation is CSS + IntersectionObserver.
//  * Same premium feel (scroll-reveal, stagger, ambient glow) as CreatorsPlatform,
//  * but with plain lucide icons instead of hand-drawn canvas icons.
//  *
//  * PLACEHOLDER CONTENT: room names, capacities, and specs below are
//  * placeholders -- swap in the real studio details before this ships.
//  */

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

// const studioSpaces = [
//   {
//     id: "01",
//     title: "Cyclorama Studio",
//     desc: "Seamless white cyc wall for product, fashion, and green-screen work.",
//     Icon: Camera,
//   },
//   {
//     id: "02",
//     title: "Podcast & VO Booth",
//     desc: "Acoustically treated room for podcasts, voiceover, and interviews.",
//     Icon: Mic2,
//   },
//   {
//     id: "03",
//     title: "Green Screen Room",
//     desc: "Full chroma-key setup for compositing and virtual backgrounds.",
//     Icon: Clapperboard,
//   },
//   {
//     id: "04",
//     title: "Up to 12 Crew",
//     desc: "Room to bring your full crew -- talent, camera, lighting, and sound.",
//     Icon: Users,
//   },
//   {
//     id: "05",
//     title: "On-Site Parking",
//     desc: "Loading access and parking for vans and equipment trucks.",
//     Icon: ParkingSquare,
//   },
//   {
//     id: "06",
//     title: "Fibre & Backup Power",
//     desc: "Reliable internet and power so shoots don't stop for outages.",
//     Icon: Wifi,
//   },
// ];

// const COLS = 3;

// export default function StudioSpace() {
//   const { ref, inView } = useInView(0.1);

//   return (
//     <>
//       <style>{`
//         @keyframes studioZoomInLeft {
//           from { opacity: 0; transform: translateX(-90px) scale(0.94); }
//           to   { opacity: 1; transform: translateX(0) scale(1); }
//         }
//         @keyframes studioZoomInLeftDelay {
//           from { opacity: 0; transform: translateX(-60px) scale(0.96); }
//           to   { opacity: 1; transform: translateX(0) scale(1); }
//         }
//         @keyframes studioGlowPulse {
//           0%, 100% { opacity: 0.35; transform: scale(1); }
//           50%      { opacity: 0.55; transform: scale(1.08); }
//         }
//       `}</style>

//       <section
//         ref={ref as React.RefObject<HTMLElement>}
//         className="relative bg-[#1A1A1A] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden"
//       >
//         {/* Ambient glow -- pure CSS, no canvas */}
//         <div
//           aria-hidden="true"
//           className="pointer-events-none absolute -top-24 right-[-10%] w-[480px] h-[480px] rounded-full blur-[120px]"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(245,196,0,0.16) 0%, transparent 70%)",
//             animation: "studioGlowPulse 6s ease-in-out infinite",
//           }}
//         />

//         <div className="relative mx-auto max-w-7xl" style={{ zIndex: 10 }}>
//           {/* Header */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
//             <div
//               style={{
//                 opacity: inView ? 1 : 0,
//                 animation: inView
//                   ? "studioZoomInLeft 1s cubic-bezier(0.16,1,0.3,1) both"
//                   : "none",
//               }}
//             >
//               <p className="text-xs font-bold tracking-[0.2em] text-white/40 mb-6">
//                 05 / <span className="text-[#F5C400]">HH STUDIO SPACE</span>
//               </p>
//               <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
//                 Need a space
//                 <br />
//                 to shoot?{" "}
//                 <span
//                   className="text-[#F5C400]"
//                   style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
//                 >
//                   Come use ours.
//                 </span>
//               </h2>
//             </div>

//             <div
//               className="flex flex-col justify-end"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 animation: inView
//                   ? "studioZoomInLeftDelay 1s cubic-bezier(0.16,1,0.3,1) 0.15s both"
//                   : "none",
//               }}
//             >
//               <p className="text-white/60 text-lg leading-relaxed mb-8">
//                 Beyond gear, Hand Held Media Studios opens its own production
//                 space to independent filmmakers, brands, and creators -- book by
//                 the hour or the day, fully equipped and ready to shoot.
//               </p>
//               <a
//                 href="/contact"
//                 className="inline-flex items-center gap-4 group w-fit"
//               >
//                 <span className="w-12 h-12 rounded-full border border-[#F5C400] flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-black transition-colors duration-300">
//                   <ArrowRight className="w-5 h-5" strokeWidth={2} />
//                 </span>
//                 <span className="font-bold text-white text-sm">
//                   Book the Studio
//                 </span>
//               </a>
//             </div>
//           </div>

//           {/* Card grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
//             {studioSpaces.map(({ id, title, desc, Icon }, i) => {
//               const isRightEdge = (i + 1) % COLS === 0;
//               const isBottomRow = i >= studioSpaces.length - COLS;
//               const delay = 0.35 + i * 0.1;
//               return (
//                 <div
//                   key={id}
//                   className={[
//                     "group p-10 border-white/10 transition-colors duration-300 hover:bg-white/[0.03]",
//                     isRightEdge ? "" : "border-r",
//                     isBottomRow ? "" : "border-b",
//                   ].join(" ")}
//                   style={{
//                     opacity: inView ? 1 : 0,
//                     transform: inView ? "translateY(0)" : "translateY(24px)",
//                     transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s, background-color 0.3s ease`,
//                   }}
//                 >
//                   <p className="text-xs font-medium text-white/30 mb-6">{id}</p>

//                   <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#F5C400]/8 border border-[#F5C400]/15 transition-all duration-300 group-hover:bg-[#F5C400]/16 group-hover:border-[#F5C400]/30 group-hover:-translate-y-0.5">
//                     <Icon
//                       className="w-5 h-5 text-[#F5C400]"
//                       strokeWidth={1.75}
//                     />
//                   </div>

//                   <span className="block w-8 h-px bg-[#F5C400] mb-4 transition-all duration-300 group-hover:w-12" />

//                   <h3 className="font-display text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#F5C400]">
//                     {title}
//                   </h3>
//                   <p className="text-white/50 text-sm leading-relaxed">
//                     {desc}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { motion, type Variants } from "framer-motion";
import {
  Camera,
  Mic2,
  Clapperboard,
  Users,
  Car,
  Zap,
  ArrowRight,
} from "lucide-react";

/**
 * HH Studio Space -- standalone section for /companies
 *
 * Uses framer-motion (already a project dependency) instead of hand-rolled
 * IntersectionObserver + inline keyframes, so scroll-reveal actually fires
 * reliably and matches the animation feel used elsewhere on the site.
 *
 * PLACEHOLDER CONTENT: room names, capacities, and specs below are
 * placeholders -- swap in the real studio details before this ships.
 */

const studioSpaces = [
  {
    id: "01",
    title: "Cyclorama Studio",
    desc: "Seamless white cyc wall for product, fashion, and green-screen work.",
    Icon: Camera,
  },
  {
    id: "02",
    title: "Podcast & VO Booth",
    desc: "Acoustically treated room for podcasts, voiceover, and interviews.",
    Icon: Mic2,
  },
  {
    id: "03",
    title: "Green Screen Room",
    desc: "Full chroma-key setup for compositing and virtual backgrounds.",
    Icon: Clapperboard,
  },
  {
    id: "04",
    title: "Up to 12 Crew",
    desc: "Room to bring your full crew -- talent, camera, lighting, and sound.",
    Icon: Users,
  },
  {
    id: "05",
    title: "On-Site Parking",
    desc: "Loading access and parking for vans and equipment trucks.",
    Icon: Car,
  },
  {
    id: "06",
    title: "Fibre & Backup Power",
    desc: "Reliable internet and power so shoots don't stop for outages.",
    Icon: Zap,
  },
];

const COLS = 3;

const EASE = [0.16, 1, 0.3, 1] as const;

const headerLeft: Variants = {
  hidden: { opacity: 0, x: -70, scale: 0.95 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE },
  },
};

const headerRight: Variants = {
  hidden: { opacity: 0, x: -50, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: EASE, delay: 0.15 },
  },
};

const gridContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export default function StudioSpace() {
  return (
    <section className="relative bg-[#1A1A1A] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] w-[480px] h-[480px] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(245,196,0,0.18) 0%, transparent 70%)",
        }}
        animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-7xl" style={{ zIndex: 10 }}>
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20">
          <motion.div
            variants={headerLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-xs font-bold tracking-[0.2em] text-white/40 mb-6">
              05 / <span className="text-[#F5C400]">HH STUDIO SPACE</span>
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tight">
              Need a space
              <br />
              to shoot?{" "}
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
              >
                Come use ours.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-col justify-end"
            variants={headerRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Beyond gear, Hand Held Media Studios opens its own production
              space to independent filmmakers, brands, and creators -- book by
              the hour or the day, fully equipped and ready to shoot.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-4 group w-fit"
            >
              <span className="w-12 h-12 rounded-full border border-[#F5C400] flex items-center justify-center text-[#F5C400] group-hover:bg-[#F5C400] group-hover:text-black transition-colors duration-300">
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </span>
              <span className="font-bold text-white text-sm">
                Book the Studio
              </span>
            </a>
          </motion.div>
        </div>

        {/* Card grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10"
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {studioSpaces.map(({ id, title, desc, Icon }, i) => {
            const isRightEdge = (i + 1) % COLS === 0;
            const isBottomRow = i >= studioSpaces.length - COLS;
            return (
              <motion.div
                key={id}
                variants={cardItem}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={[
                  "group p-10 border-white/10 hover:bg-white/[0.03] transition-colors duration-300",
                  isRightEdge ? "" : "border-r",
                  isBottomRow ? "" : "border-b",
                ].join(" ")}
              >
                <p className="text-xs font-medium text-white/30 mb-6">{id}</p>

                <motion.div
                  whileHover={{ scale: 1.08, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-[#F5C400]/8 border border-[#F5C400]/15 group-hover:bg-[#F5C400]/16 group-hover:border-[#F5C400]/30 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5 text-[#F5C400]" strokeWidth={1.75} />
                </motion.div>

                <span className="block w-8 h-px bg-[#F5C400] mb-4 transition-all duration-300 group-hover:w-12" />

                <h3 className="font-display text-xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-[#F5C400]">
                  {title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
