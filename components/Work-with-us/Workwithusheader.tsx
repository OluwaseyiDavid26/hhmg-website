// "use client";

// const AUDIENCES = [
//   { label: "Brands & Organisations", href: "#brands" },
//   { label: "Filmmakers & Productions", href: "#filmmakers" },
//   { label: "Content Creators", href: "#creators" },
//   { label: "Investors & Partners", href: "#investors" },
// ];

// export default function WorkWithUsHeader() {
//   return (
//     <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
//       <div
//         className="pointer-events-none absolute inset-6 sm:inset-10 border border-white/[0.06] rounded-3xl opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute top-6 left-6 sm:top-10 sm:left-10 w-5 h-5 border-t-2 border-l-2 border-[#F5C400]/50"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-10 w-5 h-5 border-t-2 border-r-2 border-[#F5C400]/50"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-5 h-5 border-b-2 border-l-2 border-[#F5C400]/50"
//         aria-hidden="true"
//       />
//       <span
//         className="pointer-events-none absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-5 h-5 border-b-2 border-r-2 border-[#F5C400]/50"
//         aria-hidden="true"
//       />

//       <div className="relative max-w-4xl mx-auto">
//         <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl mb-6 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_forwards]">
//           Let&rsquo;s Build Something{" "}
//           <span className="text-[#F5C400]">Together.</span>
//         </h1>

//         <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-12 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_0.08s_forwards]">
//           Whether you&rsquo;re a brand, a creator, a broadcaster, or an investor
//           &mdash; there&rsquo;s a way to work with us.
//         </p>

//         <nav
//           aria-label="Audience segments"
//           className="flex flex-wrap gap-3 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_0.16s_forwards]"
//         >
//           {AUDIENCES.map((a) => (
//             <a
//               key={a.label}
//               href={a.href}
//               className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] text-white/55 text-xs sm:text-[13px] font-medium tracking-wide hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-colors duration-200"
//             >
//               {a.label}
//               <svg
//                 className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2.5}
//                 aria-hidden="true"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M17 8l4 4m0 0l-4 4m4-4H3"
//                 />
//               </svg>
//             </a>
//           ))}
//         </nav>
//       </div>

//       <div className="relative mt-20 max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//         @keyframes fadeUp {
//           from {
//             opacity: 0;
//             transform: translateY(0.5rem);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useRef } from "react";

// const AUDIENCES = [
//   { label: "Brands & Organisations", href: "#brands" },
//   { label: "Filmmakers & Productions", href: "#filmmakers" },
//   { label: "Content Creators", href: "#creators" },
//   { label: "Investors & Partners", href: "#investors" },
// ];

// const LINE1 = "Let\u2019s Build Something ";
// const LINE2 = "Together.";
// const SUBTITLE =
//   "Whether you\u2019re a brand, a creator, a broadcaster, or an investor \u2014 there\u2019s a way to work with us.";

// export default function WorkWithUsHeader() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);
//   const twRef = useRef<HTMLSpanElement>(null);
//   const cursorRef = useRef<HTMLSpanElement>(null);
//   const kinRef = useRef<HTMLDivElement>(null);
//   const rafRef = useRef<number>(0);

//   /* ── animated grid background ── */
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const section = sectionRef.current;
//     if (!canvas || !section) return;

//     const sectionEl = section as HTMLElement;
//     const ctx = canvas.getContext("2d")!;
//     let W = 0,
//       H = 0;

//     const COLS = 20,
//       ROWS = 10;

//     type Node = { x: number; y: number; ox: number; oy: number; pulse: number };
//     let nodes: Node[] = [];

//     function resize() {
//       if (!section) return;
//       W = section.offsetWidth;
//       H = section.offsetHeight;
//       // W = section.offsetWidth;
//       // H = section.offsetHeight;
//       canvas!.width = W;
//       canvas!.height = H;
//       const cw = W / COLS,
//         ch = H / ROWS;
//       nodes = [];
//       for (let r = 0; r <= ROWS; r++) {
//         for (let c = 0; c <= COLS; c++) {
//           nodes.push({
//             x: c * cw,
//             y: r * ch,
//             ox: c * cw,
//             oy: r * ch,
//             pulse: Math.random() * Math.PI * 2,
//           });
//         }
//       }
//     }

//     function draw() {
//       ctx.clearRect(0, 0, W, H);

//       nodes.forEach((n) => {
//         n.pulse += 0.012;
//         n.x = n.ox + Math.sin(n.pulse) * 6;
//         n.y = n.oy + Math.cos(n.pulse * 0.8) * 4;
//       });

//       ctx.strokeStyle = "rgba(245,196,0,0.10)";
//       ctx.lineWidth = 0.5;

//       for (let r = 0; r <= ROWS; r++) {
//         for (let c = 0; c < COLS; c++) {
//           const a = nodes[r * (COLS + 1) + c];
//           const b = nodes[r * (COLS + 1) + c + 1];
//           if (!a || !b) continue;
//           ctx.beginPath();
//           ctx.moveTo(a.x, a.y);
//           ctx.lineTo(b.x, b.y);
//           ctx.stroke();
//         }
//       }
//       for (let r = 0; r < ROWS; r++) {
//         for (let c = 0; c <= COLS; c++) {
//           const a = nodes[r * (COLS + 1) + c];
//           const b = nodes[(r + 1) * (COLS + 1) + c];
//           if (!a || !b) continue;
//           ctx.beginPath();
//           ctx.moveTo(a.x, a.y);
//           ctx.lineTo(b.x, b.y);
//           ctx.stroke();
//         }
//       }

//       nodes.forEach((n) => {
//         const glow = (Math.sin(n.pulse * 1.3) + 1) / 2;
//         if (glow > 0.72) {
//           ctx.beginPath();
//           ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(245,196,0,${((glow - 0.72) * 0.85).toFixed(3)})`;
//           ctx.fill();
//         }
//       });

//       rafRef.current = requestAnimationFrame(draw);
//     }

//     resize();
//     draw();
//     window.addEventListener("resize", resize);
//     return () => {
//       cancelAnimationFrame(rafRef.current);
//       window.removeEventListener("resize", resize);
//     };
//   }, []);

//   /* ── kinetic headline + typewriter ── */
//   useEffect(() => {
//     const wrap = kinRef.current;
//     if (!wrap) return;

//     let html = "";
//     let d = 0;
//     for (const c of LINE1) {
//       const ch = c === " " ? "\u00a0" : c;
//       html += `<span style="display:inline-block;opacity:0;transform:translateY(20px);animation:ldrop .45s cubic-bezier(.22,1,.36,1) ${d.toFixed(2)}s forwards">${ch}</span>`;
//       d += 0.032;
//     }
//     html += `<br/><span style="color:#F5C400">`;
//     for (const c of LINE2) {
//       html += `<span style="display:inline-block;opacity:0;transform:translateY(20px);animation:ldrop .45s cubic-bezier(.22,1,.36,1) ${d.toFixed(2)}s forwards">${c}</span>`;
//       d += 0.048;
//     }
//     html += `</span>`;
//     wrap.innerHTML = html;

//     /* typewriter starts after last letter lands */
//     const delay = (d + 0.2) * 1000;
//     let i = 0;
//     let timer: ReturnType<typeof setTimeout>;

//     function type() {
//       const el = twRef.current;
//       if (!el) return;
//       if (i < SUBTITLE.length) {
//         el.textContent += SUBTITLE[i++];
//         timer = setTimeout(type, 26);
//       } else {
//         setTimeout(() => {
//           if (cursorRef.current) cursorRef.current.style.display = "none";
//         }, 1800);
//       }
//     }

//     const start = setTimeout(type, delay);
//     return () => {
//       clearTimeout(start);
//       clearTimeout(timer);
//     };
//   }, []);

//   return (
//     <>
//       <style>{`
//         @keyframes ldrop {
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes blink {
//           0%,100% { opacity: 1; } 50% { opacity: 0; }
//         }
//       `}</style>

//       <section
//         ref={sectionRef}
//         className="relative bg-[#0f0f0f] overflow-hidden px-10 pt-14 pb-12 sm:pt-16 sm:pb-14"
//       >
//         {/* animated grid */}
//         <canvas
//           ref={canvasRef}
//           aria-hidden="true"
//           className="pointer-events-none absolute inset-0 w-full h-full"
//           style={{ opacity: 0.18 }}
//         />

//         {/* wireframe globe motif */}
//         <svg
//           aria-hidden="true"
//           className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2"
//           style={{ opacity: 0.06 }}
//           width="220"
//           height="290"
//           viewBox="0 0 220 290"
//           fill="none"
//         >
//           <path
//             d="M110 14 C72 12 44 28 28 56 C12 84 16 112 28 132
//                C40 152 26 172 32 196 C38 220 56 234 74 242
//                C92 250 102 272 110 275 C118 272 128 250 146 242
//                C164 234 182 220 188 196 C194 172 180 152 192 132
//                C204 112 208 84 192 56 C176 28 148 12 110 14Z"
//             stroke="#F5C400"
//             strokeWidth="1.2"
//           />
//           <path
//             d="M110 14 C95 60 85 90 75 120 C60 135 55 160 50 185
//                C65 205 80 220 95 235 C100 260 110 275 110 275"
//             stroke="#F5C400"
//             strokeWidth="0.6"
//             opacity="0.5"
//           />
//           <path
//             d="M110 14 C125 55 138 82 151 109 C160 128 168 152 176 176
//                C165 200 152 218 139 236 C118 258 110 275 110 275"
//             stroke="#F5C400"
//             strokeWidth="0.6"
//             opacity="0.5"
//           />
//           <ellipse
//             cx="110"
//             cy="145"
//             rx="38"
//             ry="1"
//             stroke="#F5C400"
//             strokeWidth="0.5"
//             opacity="0.35"
//           />
//           <ellipse
//             cx="110"
//             cy="100"
//             rx="25"
//             ry="1"
//             stroke="#F5C400"
//             strokeWidth="0.5"
//             opacity="0.25"
//           />
//           <ellipse
//             cx="110"
//             cy="190"
//             rx="30"
//             ry="1"
//             stroke="#F5C400"
//             strokeWidth="0.5"
//             opacity="0.25"
//           />
//         </svg>

//         {/* gold corner brackets */}
//         {(["tl", "tr", "bl", "br"] as const).map((pos) => (
//           <span
//             key={pos}
//             aria-hidden="true"
//             className="pointer-events-none absolute w-[18px] h-[18px]"
//             style={{
//               top: pos.startsWith("t") ? 18 : "auto",
//               bottom: pos.startsWith("b") ? 18 : "auto",
//               left: pos.endsWith("l") ? 18 : "auto",
//               right: pos.endsWith("r") ? 18 : "auto",
//               borderColor: "#F5C400",
//               borderStyle: "solid",
//               opacity: 0.5,
//               borderWidth:
//                 pos === "tl"
//                   ? "2px 0 0 2px"
//                   : pos === "tr"
//                     ? "2px 2px 0 0"
//                     : pos === "bl"
//                       ? "0 0 2px 2px"
//                       : "0 2px 2px 0",
//             }}
//           />
//         ))}

//         {/* content */}
//         <div className="relative max-w-4xl mx-auto">
//           <p
//             className="mb-5 text-[10px] tracking-[3px] uppercase"
//             style={{ color: "#F5C400", opacity: 0.55 }}
//           >
//             Hand Held Media Group
//           </p>

//           {/* kinetic headline */}
//           <div
//             ref={kinRef}
//             className="font-bold text-white leading-[1.1] mb-5"
//             style={{ fontSize: "clamp(32px,5vw,52px)" }}
//           />

//           {/* typewriter subtitle */}
//           <p
//             className="text-sm leading-relaxed max-w-xl"
//             style={{ color: "rgba(255,255,255,0.42)", minHeight: "44px" }}
//           >
//             <span ref={twRef} />
//             <span
//               ref={cursorRef}
//               style={{
//                 display: "inline-block",
//                 width: "1.5px",
//                 height: "1em",
//                 background: "#F5C400",
//                 verticalAlign: "middle",
//                 marginLeft: "2px",
//                 animation: "blink .65s step-end infinite",
//               }}
//             />
//           </p>

//           {/* audience pills */}
//           <nav
//             aria-label="Audience segments"
//             className="flex flex-wrap gap-2 mt-7"
//           >
//             {AUDIENCES.map((a) => (
//               <a
//                 key={a.label}
//                 href={a.href}
//                 className="group relative inline-flex items-center gap-2 px-4 py-[6px] rounded-full overflow-hidden text-xs font-medium tracking-wide transition-colors duration-200"
//                 style={{
//                   border: "1px solid rgba(255,255,255,0.1)",
//                   color: "rgba(255,255,255,0.45)",
//                 }}
//                 onMouseEnter={(e) => {
//                   (e.currentTarget as HTMLElement).style.color = "#F5C400";
//                   (e.currentTarget as HTMLElement).style.borderColor =
//                     "rgba(245,196,0,0.35)";
//                 }}
//                 onMouseLeave={(e) => {
//                   (e.currentTarget as HTMLElement).style.color =
//                     "rgba(255,255,255,0.45)";
//                   (e.currentTarget as HTMLElement).style.borderColor =
//                     "rgba(255,255,255,0.1)";
//                 }}
//               >
//                 {a.label}
//                 <svg
//                   className="w-3 h-3 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                   aria-hidden="true"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </svg>
//               </a>
//             ))}
//           </nav>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

const AUDIENCES = [
  { label: "Brands & Organisations", href: "#brands" },
  { label: "Filmmakers & Productions", href: "#filmmakers" },
  { label: "Content Creators", href: "#creators" },
  { label: "Investors & Partners", href: "#investors" },
];

export default function WorkWithUsHeader() {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div
        className="pointer-events-none absolute inset-6 sm:inset-10 border border-white/[0.06] rounded-3xl opacity-0 animate-[fadeIn_0.3s_ease-out_forwards]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute top-6 left-6 sm:top-10 sm:left-10 w-5 h-5 border-t-2 border-l-2 border-[#F5C400]/50"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-10 w-5 h-5 border-t-2 border-r-2 border-[#F5C400]/50"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-5 h-5 border-b-2 border-l-2 border-[#F5C400]/50"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-5 h-5 border-b-2 border-r-2 border-[#F5C400]/50"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl mb-6 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_forwards]">
          Let&rsquo;s Build Something{" "}
          <span className="text-[#F5C400]">Together.</span>
        </h1>

        <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-xl mb-12 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_0.08s_forwards]">
          Whether you&rsquo;re a brand, a creator, a broadcaster, or an investor
          &mdash; there&rsquo;s a way to work with us.
        </p>

        <nav
          aria-label="Audience segments"
          className="flex flex-wrap gap-3 opacity-0 translate-y-2 animate-[fadeUp_0.35s_ease-out_0.16s_forwards]"
        >
          {AUDIENCES.map((a) => (
            <a
              key={a.label}
              href={a.href}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] text-white/55 text-xs sm:text-[13px] font-medium tracking-wide hover:border-[#F5C400]/40 hover:text-[#F5C400] transition-colors duration-200"
            >
              {a.label}
              <svg
                className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          ))}
        </nav>
      </div>

      <div className="relative mt-20 max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(0.5rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
