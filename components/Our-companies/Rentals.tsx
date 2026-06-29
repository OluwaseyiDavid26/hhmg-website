// import Link from "next/link";

// const equipment = [
//   {
//     number: "01",
//     name: "Cinema & DSLR Cameras",
//     detail: "From indie shoots to full commercial productions",
//     tag: "Primary Capture",
//     icon: (
//       <svg
//         className="w-7 h-7"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"
//         />
//       </svg>
//     ),
//   },
//   {
//     number: "02",
//     name: "Lenses",
//     detail: "Prime, zoom, anamorphic — every focal length covered",
//     tag: "Optics",
//     icon: (
//       <svg
//         className="w-7 h-7"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <circle cx="12" cy="12" r="9" strokeLinecap="round" />
//         <circle cx="12" cy="12" r="4" strokeLinecap="round" />
//         <line x1="12" y1="3" x2="12" y2="6" strokeLinecap="round" />
//         <line x1="12" y1="18" x2="12" y2="21" strokeLinecap="round" />
//         <line x1="3" y1="12" x2="6" y2="12" strokeLinecap="round" />
//         <line x1="18" y1="12" x2="21" y2="12" strokeLinecap="round" />
//       </svg>
//     ),
//   },
//   {
//     number: "03",
//     name: "Lighting Kits",
//     detail: "LED panels, HMIs, tungsten, modifiers and stands",
//     tag: "Illumination",
//     icon: (
//       <svg
//         className="w-7 h-7"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
//         />
//       </svg>
//     ),
//   },
//   {
//     number: "04",
//     name: "Audio & Sound Equipment",
//     detail: "Shotgun mics, recorders, wireless, boom poles",
//     tag: "Sound",
//     icon: (
//       <svg
//         className="w-7 h-7"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
//         />
//       </svg>
//     ),
//   },
//   {
//     number: "05",
//     name: "Grip & Support",
//     detail: "Tripods, sliders, gimbals, rigging, dollies",
//     tag: "Rigging",
//     icon: (
//       <svg
//         className="w-7 h-7"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
//         />
//       </svg>
//     ),
//   },
//   {
//     number: "06",
//     name: "Accessories & Batteries",
//     detail: "V-mount, media cards, monitors, cables and more",
//     tag: "Essentials",
//     icon: (
//       <svg
//         className="w-7 h-7"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M21 10.5h.375a.375.375 0 01.375.375v2.25a.375.375 0 01-.375.375H21m-3.75 0h-1.5m1.5 0a2.25 2.25 0 002.25-2.25V9a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9v6.75a2.25 2.25 0 002.25 2.25h11.25"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function Rentals() {
//   return (
//     <section
//       id="rentals"
//       className="relative bg-[#0D0D0D] py-28 px-6 scroll-mt-20 overflow-hidden"
//     >
//       {/* Background watermark */}
//       <div
//         className="absolute left-0 top-1/2 -translate-y-1/2 font-black text-white/[0.015] leading-none select-none pointer-events-none tracking-tighter hidden lg:block"
//         style={{ fontSize: "16vw" }}
//         aria-hidden="true"
//       >
//         RENTALS
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* ── HEADER ── */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
//           <div className="max-w-xl">
//             <div className="inline-flex items-center gap-3 mb-7">
//               <span className="text-white/20 text-[10px] font-mono tracking-widest">
//                 02 /
//               </span>
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
//                 HH Media Rentals
//               </span>
//             </div>

//             <h2 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-black text-white leading-[0.95] tracking-tight mb-6">
//               The right gear
//               <br />
//               <span
//                 className="text-[#F5C400]"
//                 style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
//               >
//                 changes
//                 <br />
//                 everything.
//               </span>
//             </h2>

//             <p className="text-white/50 text-base leading-relaxed">
//               Hand Held Media Rentals gives independent filmmakers, production
//               companies, and content creators access to professional-grade
//               camera, lighting, and audio equipment — without the overhead of
//               ownership
//             </p>
//           </div>

//           {/* Right — 3 spec pills stacked */}
//           <div className="flex flex-col gap-3 lg:items-end flex-shrink-0">
//             {[
//               { value: "Flexible", sub: "Rental Periods" },
//               { value: "Maintained", sub: "Gear Always Ready" },
//               { value: "Real", sub: "Support On Hand" },
//             ].map((item) => (
//               <div
//                 key={item.sub}
//                 className="flex items-center gap-4 border-l-2 border-[#F5C400]/30 pl-4"
//               >
//                 <span className="text-white font-black text-sm">
//                   {item.value}
//                 </span>
//                 <span className="text-white/30 text-xs">{item.sub}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ── EQUIPMENT CATALOGUE GRID ── */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {equipment.map((item) => (
//             <div
//               key={item.name}
//               className="group relative flex flex-col bg-white/[0.03] rounded-2xl overflow-hidden border border-white/[0.07] hover:border-[#F5C400]/25 transition-all duration-500"
//             >
//               {/* Top — icon area */}
//               <div className="relative flex items-center justify-center h-36 bg-white/[0.02] border-b border-white/[0.06] group-hover:bg-[#F5C400]/[0.04] transition-colors duration-500">
//                 {/* Number — top left */}
//                 <span className="absolute top-4 left-5 text-white/10 text-xs font-mono group-hover:text-[#F5C400]/30 transition-colors duration-300">
//                   {item.number}
//                 </span>

//                 {/* Tag — top right */}
//                 <span className="absolute top-4 right-5 text-white/15 text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-[#F5C400]/40 transition-colors duration-300">
//                   {item.tag}
//                 </span>

//                 {/* Icon — centred, large */}
//                 <div className="text-white/20 group-hover:text-[#F5C400]/70 transition-all duration-500 group-hover:scale-110 transform">
//                   {item.icon}
//                 </div>
//               </div>

//               {/* Bottom — text content */}
//               <div className="flex flex-col gap-2 p-6">
//                 <h3 className="text-white text-base font-bold leading-snug tracking-tight group-hover:text-white transition-colors duration-300">
//                   {item.name}
//                 </h3>
//                 <p className="text-white/35 text-xs leading-relaxed group-hover:text-white/55 transition-colors duration-300">
//                   {item.detail}
//                 </p>
//               </div>

//               {/* Bottom accent line — grows on hover */}
//               <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F5C400] group-hover:w-full transition-all duration-500" />
//             </div>
//           ))}
//         </div>

//         {/* ── CTAs ── */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-12">
//           <Link
//             href="/contact"
//             className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-8 py-4 rounded-sm hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02] uppercase tracking-wide"
//           >
//             Browse Equipment Catalogue
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
//             href="/contact"
//             className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 text-sm font-semibold px-8 py-4 rounded-sm hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-all duration-200 uppercase tracking-wide"
//           >
//             Request a Quote
//           </Link>
//         </div>

//         {/* Section divider */}
//         <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
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

/* ── 3D projection helper ── */
function project3D(
  x: number,
  y: number,
  z: number,
  rx: number,
  ry: number,
  cx: number,
  cy: number,
  fov: number,
) {
  const y2 = y * Math.cos(rx) - z * Math.sin(rx);
  const z2 = y * Math.sin(rx) + z * Math.cos(rx);
  const x2 = x * Math.cos(ry) + z2 * Math.sin(ry);
  const z3 = -x * Math.sin(ry) + z2 * Math.cos(ry);
  const scale = fov / (fov + z3 + 300);
  return { px: cx + x2 * scale, py: cy + y2 * scale };
}

function makeCube(size: number): [number, number, number][] {
  const h = size / 2;
  return [
    [-h, -h, -h],
    [h, -h, -h],
    [h, h, -h],
    [-h, h, -h],
    [-h, -h, h],
    [h, -h, h],
    [h, h, h],
    [-h, h, h],
  ];
}

const CUBE_EDGES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 0],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 4],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
];

/* ── Background canvas ── */
function BgCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = canvasRef.current!;
    if (!cv) return;
    const parent = cv.parentElement;
    if (!parent) return;
    const ctx = cv.getContext("2d")!;

    let t = 0;
    const resize = () => {
      cv.width = parent.offsetWidth;
      cv.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const cubes = [
      {
        size: 220,
        cx: 0.72,
        cy: 0.5,
        rx: 0.3,
        ry: 0.1,
        speed: 0.006,
        alpha: 0.06,
      },
      {
        size: 140,
        cx: 0.78,
        cy: 0.28,
        rx: 0.5,
        ry: 0.2,
        speed: 0.009,
        alpha: 0.04,
      },
      {
        size: 90,
        cx: 0.65,
        cy: 0.72,
        rx: 0.2,
        ry: 0.4,
        speed: 0.012,
        alpha: 0.035,
      },
    ];

    function draw() {
      t += 0.008;
      const W = cv.width,
        H = cv.height;
      ctx.clearRect(0, 0, W, H);

      /* Gold orb */
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.6);
      const g = ctx.createRadialGradient(
        W * 0.75,
        H * 0.5,
        0,
        W * 0.75,
        H * 0.5,
        W * 0.45,
      );
      g.addColorStop(0, `rgba(245,196,0,${(0.04 + pulse * 0.025).toFixed(3)})`);
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      /* 3D rotating wireframe cubes */
      cubes.forEach((c) => {
        const pts = makeCube(c.size);
        const rx = c.rx + t * c.speed * 1.3;
        const ry = c.ry + t * c.speed;
        ctx.strokeStyle = `rgba(245,196,0,${c.alpha})`;
        ctx.lineWidth = 0.7;
        CUBE_EDGES.forEach(([a, b]) => {
          const [ax, ay, az] = pts[a];
          const [bx, by, bz] = pts[b];
          const pa = project3D(ax, ay, az, rx, ry, W * c.cx, H * c.cy, 400);
          const pb = project3D(bx, by, bz, rx, ry, W * c.cx, H * c.cy, 400);
          ctx.beginPath();
          ctx.moveTo(pa.px, pa.py);
          ctx.lineTo(pb.px, pb.py);
          ctx.stroke();
        });
      });

      /* Scanline */
      const scanY = (t * 28) % H;
      const sg = ctx.createLinearGradient(0, scanY - 12, 0, scanY + 12);
      sg.addColorStop(0, "transparent");
      sg.addColorStop(0.5, "rgba(245,196,0,0.015)");
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
      style={{ zIndex: 0 }}
    />
  );
}

/* ── Icon draw functions ── */
type IconType = "camera" | "lens" | "light" | "mic" | "grip" | "battery";

type RoundRectCanvasRenderingContext2D = CanvasRenderingContext2D & {
  roundRect(x: number, y: number, w: number, h: number, r: number | number[]): void;
};

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  (ctx as RoundRectCanvasRenderingContext2D).roundRect(x, y, w, h, r);
}

function drawCamera(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.9 : 0.5;
  ctx.clearRect(0, 0, 52, 52);
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  roundRect(ctx, 4, 16, 30, 20, 3);
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a * 0.2})`;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(19, 26, 7, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(19, 26, 3.5, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${a * 0.4})`;
  ctx.fill();
  const p = 0.5 + 0.5 * Math.sin(t * 3);
  ctx.fillStyle = `rgba(245,196,0,${a * (0.5 + p * 0.5)})`;
  ctx.beginPath();
  ctx.moveTo(38, 20);
  ctx.lineTo(48, 26);
  ctx.lineTo(38, 32);
  ctx.closePath();
  ctx.fill();
  ctx.beginPath();
  ctx.arc(40, 12, 3, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${p * a})`;
  ctx.fill();
}

function drawLens(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.9 : 0.5;
  ctx.clearRect(0, 0, 52, 52);
  const cx = 26,
    cy = 26;
  [18, 12, 7].forEach((r, i) => {
    ctx.beginPath();
    ctx.arc(
      cx,
      cy,
      r,
      t * (1 + i * 0.4),
      t * (1 + i * 0.4) + Math.PI * (h ? 1.7 : 1.2),
    );
    ctx.strokeStyle = `rgba(245,196,0,${a * (0.5 + i * 0.1)})`;
    ctx.lineWidth = h ? 1.4 : 0.7;
    ctx.stroke();
  });
  ctx.beginPath();
  ctx.arc(cx, cy, 3, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${a})`;
  ctx.fill();
  ctx.strokeStyle = `rgba(245,196,0,${a * 0.3})`;
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  ctx.moveTo(cx - 18, cy);
  ctx.lineTo(cx + 18, cy);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, cy - 18);
  ctx.lineTo(cx, cy + 18);
  ctx.stroke();
}

function drawLight(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.9 : 0.5;
  ctx.clearRect(0, 0, 52, 52);
  const cx = 26,
    cy = 20;
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.arc(cx, cy, 8, 0, Math.PI * 2);
  ctx.stroke();
  const pulse = 0.5 + 0.5 * Math.sin(t * 2);
  ctx.beginPath();
  ctx.arc(cx, cy, 8, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(245,196,0,${a * 0.3 + pulse * a * 0.2})`;
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(cx, cy + 8);
  ctx.lineTo(cx, cy + 14);
  ctx.moveTo(cx - 5, cy + 14);
  ctx.lineTo(cx + 5, cy + 14);
  ctx.stroke();
  for (let r = 0; r < 6; r++) {
    const angle = (r / 6) * Math.PI * 2 + t * 0.5;
    const r1 = 11,
      r2 = h ? 16 : 13;
    ctx.strokeStyle = `rgba(245,196,0,${a * (0.3 + pulse * 0.2)})`;
    ctx.lineWidth = 0.7;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1);
    ctx.lineTo(cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2);
    ctx.stroke();
  }
}

function drawMic(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.9 : 0.5;
  ctx.clearRect(0, 0, 52, 52);
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  roundRect(ctx, 20, 6, 12, 18, 6);
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a * 0.2})`;
  ctx.fill();
  ctx.beginPath();
  ctx.arc(26, 24, 10, -Math.PI, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(26, 34);
  ctx.lineTo(26, 42);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(20, 42);
  ctx.lineTo(32, 42);
  ctx.stroke();
  [3, 5, 8, 5, 3].forEach((bh, i) => {
    const wave = Math.sin(t * 4 + i * 0.8) * (h ? 3 : 1);
    const hh = bh + wave;
    ctx.fillStyle = `rgba(245,196,0,${a * 0.5})`;
    ctx.beginPath();
    roundRect(ctx, 36 + i * 2.5, 26 - hh / 2, 2, hh, 1);
    ctx.fill();
  });
}

function drawGrip(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.9 : 0.5;
  ctx.clearRect(0, 0, 52, 52);
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.moveTo(26, 10);
  ctx.lineTo(14, 42);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(26, 10);
  ctx.lineTo(26, 42);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(26, 10);
  ctx.lineTo(38, 42);
  ctx.stroke();
  ctx.save();
  ctx.translate(26, 10);
  ctx.rotate(Math.sin(t * 0.8) * 0.06);
  ctx.fillStyle = `rgba(245,196,0,${a * 0.3})`;
  ctx.beginPath();
  roundRect(ctx, -8, -7, 16, 10, 2);
  ctx.fill();
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  roundRect(ctx, -8, -7, 16, 10, 2);
  ctx.stroke();
  ctx.restore();
  ctx.strokeStyle = `rgba(245,196,0,${a * 0.5})`;
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  ctx.moveTo(18, 28);
  ctx.lineTo(34, 28);
  ctx.stroke();
}

function drawBattery(ctx: CanvasRenderingContext2D, t: number, h: boolean) {
  const a = h ? 0.9 : 0.5;
  ctx.clearRect(0, 0, 52, 52);
  ctx.strokeStyle = `rgba(245,196,0,${a})`;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  roundRect(ctx, 6, 18, 34, 16, 3);
  ctx.stroke();
  ctx.fillStyle = `rgba(245,196,0,${a * 0.15})`;
  ctx.fill();
  ctx.beginPath();
  roundRect(ctx, 40, 22, 5, 8, 2);
  ctx.stroke();
  const pulse = 0.5 + 0.5 * Math.sin(t * 1.5);
  const fillW = (h ? 28 : 20) + pulse * (h ? 4 : 2);
  ctx.fillStyle = `rgba(245,196,0,${a * (0.4 + pulse * 0.2)})`;
  ctx.beginPath();
  roundRect(ctx, 8, 20, fillW, 12, 2);
  ctx.fill();
  ctx.fillStyle = `rgba(0,0,0,${a * 0.8})`;
  ctx.font = `bold ${h ? 13 : 11}px sans-serif`;
  ctx.fillText("⚡", 20, 31);
  ctx.strokeStyle = `rgba(245,196,0,${a * 0.5})`;
  ctx.lineWidth = 0.8;
  ctx.beginPath();
  roundRect(ctx, 14, 38, 24, 8, 2);
  ctx.stroke();
}

const DRAW_FNS: Record<
  IconType,
  (ctx: CanvasRenderingContext2D, t: number, h: boolean) => void
> = {
  camera: drawCamera,
  lens: drawLens,
  light: drawLight,
  mic: drawMic,
  grip: drawGrip,
  battery: drawBattery,
};

/* ── Equipment card ── */
function EquipmentCard({
  number,
  name,
  detail,
  tag,
  type,
  inView,
  delay,
}: {
  number: string;
  name: string;
  detail: string;
  tag: string;
  type: IconType;
  inView: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const loop = () => {
      tRef.current += hovered ? 0.022 : 0.01;
      DRAW_FNS[type](ctx, tRef.current, hovered);
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [type, hovered]);

  return (
    <div
      className="group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-500"
      style={{
        background: "rgba(255,255,255,0.03)",
        borderColor: hovered
          ? "rgba(245,196,0,0.28)"
          : "rgba(255,255,255,0.07)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s, border-color 0.4s`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon area */}
      <div
        className="relative flex items-center justify-center h-36 border-b transition-colors duration-500"
        style={{
          background: hovered
            ? "rgba(245,196,0,0.04)"
            : "rgba(255,255,255,0.02)",
          borderColor: "rgba(255,255,255,0.06)",
        }}
      >
        <span
          className="absolute top-3 left-4 text-[9px] font-mono transition-colors duration-300"
          style={{
            color: hovered ? "rgba(245,196,0,0.4)" : "rgba(255,255,255,0.1)",
          }}
        >
          {number}
        </span>
        <span
          className="absolute top-3 right-4 text-[8px] font-bold tracking-[0.18em] uppercase transition-colors duration-300"
          style={{
            color: hovered ? "rgba(245,196,0,0.45)" : "rgba(255,255,255,0.12)",
          }}
        >
          {tag}
        </span>

        <canvas
          ref={canvasRef}
          width={52}
          height={52}
          aria-hidden="true"
          style={{ display: "block", width: 52, height: 52 }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2 p-6 flex-1">
        <h3 className="text-white text-sm font-bold leading-snug tracking-tight">
          {name}
        </h3>
        <p
          className="text-xs leading-relaxed transition-colors duration-300"
          style={{
            color: hovered
              ? "rgba(255,255,255,0.55)"
              : "rgba(255,255,255,0.35)",
          }}
        >
          {detail}
        </p>
      </div>

      {/* Bottom gold bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#F5C400] transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%" }}
      />
    </div>
  );
}

const equipment = [
  {
    number: "01",
    name: "Cinema & DSLR Cameras",
    detail: "From indie shoots to full commercial productions",
    tag: "Primary Capture",
    type: "camera" as IconType,
  },
  {
    number: "02",
    name: "Lenses",
    detail: "Prime, zoom, anamorphic — every focal length covered",
    tag: "Optics",
    type: "lens" as IconType,
  },
  {
    number: "03",
    name: "Lighting Kits",
    detail: "LED panels, HMIs, tungsten, modifiers and stands",
    tag: "Illumination",
    type: "light" as IconType,
  },
  {
    number: "04",
    name: "Audio & Sound Equipment",
    detail: "Shotgun mics, recorders, wireless, boom poles",
    tag: "Sound",
    type: "mic" as IconType,
  },
  {
    number: "05",
    name: "Grip & Support",
    detail: "Tripods, sliders, gimbals, rigging, dollies",
    tag: "Rigging",
    type: "grip" as IconType,
  },
  {
    number: "06",
    name: "Accessories & Batteries",
    detail: "V-mount, media cards, monitors, cables and more",
    tag: "Essentials",
    type: "battery" as IconType,
  },
];

export default function Rentals() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="rentals"
      className="relative bg-[#0D0D0D] py-28 px-6 scroll-mt-20 overflow-hidden"
    >
      {/* 3D animated background */}
      <BgCanvas />

      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          opacity: 0.1,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Watermark */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-black text-white/[0.015] leading-none select-none pointer-events-none tracking-tighter hidden lg:block"
        style={{
          fontSize: "16vw",
          zIndex: 1,
          opacity: inView ? 1 : 0,
          transform: inView
            ? "translateY(-50%) translateX(0)"
            : "translateY(-50%) translateX(-40px)",
          transition: "opacity 1.6s ease 0.2s, transform 1.6s ease 0.2s",
        }}
        aria-hidden="true"
      >
        RENTALS
      </div>

      <div className="relative max-w-6xl mx-auto" style={{ zIndex: 2 }}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
          <div
            className="max-w-xl"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(-60px)",
              transition: "opacity 1.1s ease, transform 1.1s ease",
            }}
          >
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="text-white/20 text-[10px] font-mono tracking-widest">
                02 /
              </span>
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
                HH Media Rentals
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-[64px] font-black text-white leading-[0.95] tracking-tight mb-6">
              The right gear
              <br />
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
              >
                changes
                <br />
                everything.
              </span>
            </h2>

            <p className="text-white/50 text-base leading-relaxed">
              Hand Held Media Rentals gives independent filmmakers, production
              companies, and content creators access to professional-grade
              camera, lighting, and audio equipment — without the overhead of
              ownership.
            </p>
          </div>

          {/* Spec pills */}
          <div
            className="flex flex-col gap-3 lg:items-end flex-shrink-0"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(60px)",
              transition: "opacity 1.1s ease 0.15s, transform 1.1s ease 0.15s",
            }}
          >
            {[
              { value: "Flexible", sub: "Rental Periods" },
              { value: "Maintained", sub: "Gear Always Ready" },
              { value: "Real", sub: "Support On Hand" },
            ].map((item) => (
              <div
                key={item.sub}
                className="flex items-center gap-4 border-l-2 border-[#F5C400]/30 pl-4"
              >
                <span className="text-white font-black text-sm">
                  {item.value}
                </span>
                <span className="text-white/30 text-xs">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {equipment.map((item, i) => (
            <EquipmentCard
              key={item.number}
              number={item.number}
              name={item.name}
              detail={item.detail}
              tag={item.tag}
              type={item.type}
              inView={inView}
              delay={0.3 + i * 0.1}
            />
          ))}
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 mt-12"
          style={{
            opacity: inView ? 1 : 0,
            transition: `opacity 0.8s ease 1s`,
          }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-8 py-4 rounded-sm overflow-hidden uppercase tracking-wide hover:bg-[#e6b800] transition-colors duration-200"
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              style={{ transition: "transform 0.55s ease" }}
            />
            <span className="relative">Browse Equipment Catalogue</span>
            <svg
              className="relative w-4 h-4"
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
            className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/60 text-sm font-semibold px-8 py-4 rounded-sm hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-all duration-200 uppercase tracking-wide"
          >
            Request a Quote
          </Link>
        </div>

        {/* Divider */}
        <div
          className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-left"
          style={{
            transform: inView ? "scaleX(1)" : "scaleX(0)",
            opacity: inView ? 1 : 0,
            transition: "transform 1.2s ease 1.2s, opacity 1.2s ease 1.2s",
          }}
        />
      </div>
    </section>
  );
}
