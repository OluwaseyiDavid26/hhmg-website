// "use client";

// import { useEffect, useRef } from "react";
// import Link from "next/link";

// const AFRICA_PATH = `M108,6 C118,4 132,7 144,14 C156,21 166,30 174,42
// C182,54 186,66 186,80 C186,94 182,104 184,116 C186,128 194,136 196,150
// C198,164 194,178 188,192 C182,206 174,216 170,232 C166,248 168,262 162,274
// C156,286 146,294 136,300 C126,306 114,308 104,304 C94,300 88,290 80,280
// C72,270 64,260 58,248 C52,236 48,222 44,208 C40,194 38,180 36,166
// C34,152 30,140 30,126 C30,112 34,100 38,88 C42,76 48,66 56,58
// C64,50 74,44 84,38 C94,32 100,24 108,6Z
// M184,116 C192,120 200,118 204,126 C208,134 204,142 196,150`;

// export default function WhoWeAre() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const hasAnimated = useRef(false);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;

//     const animatables = section.querySelectorAll<HTMLElement>("[data-animate]");
//     const counters = section.querySelectorAll<HTMLElement>("[data-counter]");

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (!entries[0].isIntersecting || hasAnimated.current) return;
//         hasAnimated.current = true;

//         // Stagger fade-up
//         animatables.forEach((el, i) => {
//           const delay = Number(el.dataset.animate || 0) + i * 60;
//           setTimeout(() => {
//             el.style.opacity = "1";
//             el.style.transform = "translateY(0)";
//           }, delay);
//         });

//         // Counter roll-up
//         counters.forEach((el) => {
//           const target = Number(el.dataset.counter);
//           const duration = 900;
//           const start = performance.now();
//           const tick = (now: number) => {
//             const p = Math.min((now - start) / duration, 1);
//             const ease = 1 - Math.pow(1 - p, 3);
//             el.textContent = String(Math.round(ease * target)).padStart(2, "0");
//             if (p < 1) requestAnimationFrame(tick);
//           };
//           requestAnimationFrame(tick);
//         });
//       },
//       { threshold: 0.15 },
//     );

//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#1A1A1A] py-28 px-6 overflow-hidden"
//     >
//       {/* ── BG: slowly rotating Africa outline ── */}
//       <div
//         className="absolute pointer-events-none select-none"
//         style={{
//           right: "-8%",
//           top: "50%",
//           transform: "translateY(-50%)",
//           width: "55%",
//           maxWidth: "680px",
//           opacity: 0.045,
//           animation: "slowSpin 80s linear infinite",
//         }}
//       >
//         <svg
//           viewBox="0 0 220 320"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           style={{ width: "100%", height: "auto" }}
//         >
//           <path
//             d={AFRICA_PATH}
//             stroke="#F5C400"
//             strokeWidth="2.5"
//             strokeLinejoin="round"
//             fill="none"
//           />
//           <ellipse
//             cx="198"
//             cy="215"
//             rx="8"
//             ry="18"
//             stroke="#F5C400"
//             strokeWidth="2"
//             fill="none"
//             transform="rotate(-10 198 215)"
//           />
//         </svg>
//       </div>

//       {/* ── Gold left accent rule ── */}
//       <div
//         className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
//         style={{
//           background:
//             "linear-gradient(to bottom, transparent 5%, #F5C400 30%, #F5C400 70%, transparent 95%)",
//           opacity: 0.25,
//         }}
//       />

//       {/* ── Scan line (CSS animation, one-shot via section entry) ── */}
//       <div
//         className="absolute inset-x-0 pointer-events-none"
//         style={{
//           height: "1px",
//           background:
//             "linear-gradient(90deg, transparent 0%, rgba(245,196,0,0.35) 40%, rgba(245,196,0,0.55) 50%, rgba(245,196,0,0.35) 60%, transparent 100%)",
//           animation: "scanDown 1.8s cubic-bezier(0.4,0,0.6,1) 0.3s both",
//           zIndex: 5,
//         }}
//       />

//       <style>{`
//         @keyframes slowSpin {
//           from { transform: translateY(-50%) rotate(0deg); }
//           to   { transform: translateY(-50%) rotate(360deg); }
//         }
//         @keyframes scanDown {
//           from { top: 0%; opacity: 0; }
//           10%  { opacity: 1; }
//           90%  { opacity: 1; }
//           to   { top: 100%; opacity: 0; }
//         }
//         [data-animate] {
//           opacity: 0;
//           transform: translateY(22px);
//           transition: opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1);
//         }
//       `}</style>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* ── TOP: eyebrow + headline + copy ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end mb-20">
//           {/* Left */}
//           <div className="lg:col-span-5">
//             <div
//               className="inline-flex items-center gap-3 mb-7"
//               data-animate="0"
//             >
//               <div className="w-8 h-px bg-[#F5C400]" />
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
//                 Who We Are
//               </span>
//             </div>

//             <h2
//               className="font-display text-5xl sm:text-6xl font-black text-white leading-[1.05] tracking-tight"
//               data-animate="80"
//             >
//               One Group.{" "}
//               <span
//                 className="relative inline-block"
//                 style={{
//                   color: "transparent",
//                   WebkitTextStroke: "1.5px #F5C400",
//                 }}
//               >
//                 Four Companies.
//               </span>{" "}
//               <br />
//               One Mission.
//             </h2>
//           </div>

//           {/* Right */}
//           <div className="lg:col-span-7 flex flex-col gap-6 lg:pb-1">
//             <p
//               className="text-white/60 text-base sm:text-lg leading-relaxed"
//               data-animate="160"
//             >
//               Hand Held Media Group brings together four focused subsidiaries
//               under one roof: production, equipment, creator development, and
//               original IP.
//             </p>
//             <p
//               className="text-white/60 text-base sm:text-lg leading-relaxed"
//               data-animate="220"
//             >
//               We exist to close the gap between the stories Africa wants to tell
//               and the resources needed to tell them well.
//             </p>
//             <Link
//               href="/about"
//               className="group inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold w-fit mt-2"
//               data-animate="280"
//               style={{ transition: "gap 0.2s" }}
//             >
//               Our Full Story
//               <svg
//                 className="w-4 h-4 group-hover:translate-x-1"
//                 style={{ transition: "transform 0.2s" }}
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
//           </div>
//         </div>

//         {/* ── Divider ── */}
//         <div className="mt-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const AFRICA_D = `M108,6 C118,4 132,7 144,14 C156,21 166,30 174,42
C182,54 186,66 186,80 C186,94 182,104 184,116 C186,128 194,136 196,150
C198,164 194,178 188,192 C182,206 174,216 170,232 C166,248 168,262 162,274
C156,286 146,294 136,300 C126,306 114,308 104,304 C94,300 88,290 80,280
C72,270 64,260 58,248 C52,236 48,222 44,208 C40,194 38,180 36,166
C34,152 30,140 30,126 C30,112 34,100 38,88 C42,76 48,66 56,58
C64,50 74,44 84,38 C94,32 100,24 108,6Z`;

/* ── Animated background canvas ── */
function BgCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const canvas = cv;
    const parent = canvas.parentElement!;
    const ctx = canvas.getContext("2d")!;
    let rot = 0;

    const resize = () => {
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Particles */
    type P = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
      gold: boolean;
    };
    const pts: P[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.3 + 0.3,
      a: Math.random() * 0.3 + 0.06,
      gold: Math.random() < 0.25,
    }));

    function drawAfrica(
      scale: number,
      cx: number,
      cy: number,
      angle: number,
      strokeAlpha: number,
      strokeW: number,
    ) {
      const W = canvas.width,
        H = canvas.height;
      ctx.save();
      ctx.translate(cx * W, cy * H);
      ctx.rotate(angle);
      ctx.scale(scale * (W / 680), scale * (H / 500));
      ctx.translate(-108, -155);
      const path = new Path2D(AFRICA_D);
      ctx.strokeStyle = `rgba(245,196,0,${strokeAlpha})`;
      ctx.lineWidth = strokeW / scale;
      ctx.lineJoin = "round";
      ctx.stroke(path);
      ctx.restore();
    }

    function draw() {
      rot += 0.0018;
      const W = canvas.width,
        H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      /* Gold orb — right */
      const pulse = 0.5 + 0.5 * Math.sin(rot * 1.2);
      const g = ctx.createRadialGradient(
        W * 0.78,
        H * 0.5,
        0,
        W * 0.78,
        H * 0.5,
        W * 0.42,
      );
      g.addColorStop(
        0,
        `rgba(245,196,0,${(0.055 + pulse * 0.035).toFixed(3)})`,
      );
      g.addColorStop(1, "transparent");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      /* Top-left gold bleed */
      const g2 = ctx.createRadialGradient(
        W * 0.05,
        H * 0.1,
        0,
        W * 0.05,
        H * 0.1,
        W * 0.3,
      );
      g2.addColorStop(
        0,
        `rgba(245,196,0,${(0.03 + pulse * 0.015).toFixed(3)})`,
      );
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);

      /* Two Africa outlines rotating at different speeds */
      drawAfrica(2.4, 0.72, 0.5, rot, 0.072, 2.2);
      drawAfrica(3.5, 0.68, 0.5, -rot * 0.38, 0.028, 1.8);

      /* Particles */
      pts.forEach((p) => {
        p.x = (p.x + p.vx + W) % W;
        p.y = (p.y + p.vy + H) % H;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(245,196,0,${p.a})`
          : `rgba(255,255,255,${p.a * 0.45})`;
        ctx.fill();
      });

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

/* ── Typewriter hook ── */
function useTypewriter(trigger: boolean) {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    const words = [
      "Four Companies.",
      // "One Vision.",
      // "One Ecosystem.",
      "Four Companies.",
    ];
    let wi = 0,
      ci = 0,
      deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    function type() {
      const word = words[wi];
      if (!deleting) {
        ci++;
        setText(word.slice(0, ci));
        if (ci === word.length) {
          if (wi === words.length - 1) {
            setDone(true);
            return;
          }
          deleting = true;
          timer = setTimeout(type, 1400);
          return;
        }
        timer = setTimeout(type, 75);
      } else {
        ci--;
        setText(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          wi++;
          timer = setTimeout(type, 300);
          return;
        }
        timer = setTimeout(type, 40);
      }
    }

    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, [trigger]);

  return { text, done };
}

/* ── Counter roll-up ── */
function Counter({
  target,
  delay,
  trigger,
}: {
  target: number;
  delay: number;
  trigger: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const t = setTimeout(() => {
      let c = 0;
      const iv = setInterval(() => {
        c++;
        setVal(c);
        if (c >= target) clearInterval(iv);
      }, 80);
    }, delay);
    return () => clearTimeout(t);
  }, [trigger, target, delay]);

  return <>{String(val).padStart(2, "0")}</>;
}

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const { text: twText, done: twDone } = useTypewriter(inView);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes scanDown {
          from { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.8; }
          to { top: 100%; opacity: 0; }
        }
        @keyframes flipUp3d {
          from { opacity: 0; transform: translateY(32px) rotateX(28deg); }
          to   { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 28px; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0; }
        }
        .flip-line {
          display: block;
          transform-origin: bottom center;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-[#111] py-28 px-6 overflow-hidden"
      >
        {/* Animated BG */}
        <BgCanvas />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            opacity: 0.12,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        {/* Gold left rule */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
          style={{
            zIndex: 2,
            background:
              "linear-gradient(to bottom, transparent 5%, rgba(245,196,0,0.28) 30%, rgba(245,196,0,0.28) 70%, transparent 95%)",
          }}
        />

        {/* Scanline sweep on entry */}
        {inView && (
          <div
            className="absolute inset-x-0 pointer-events-none"
            aria-hidden="true"
            style={{
              zIndex: 3,
              height: "1.5px",
              background:
                "linear-gradient(90deg, transparent 0%, rgba(245,196,0,0.4) 35%, rgba(245,196,0,0.7) 50%, rgba(245,196,0,0.4) 65%, transparent 100%)",
              animation: "scanDown 2s cubic-bezier(0.4,0,0.6,1) 0.1s both",
              top: 0,
            }}
          />
        )}

        {/* Content */}
        <div className="relative max-w-6xl mx-auto" style={{ zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* ── LEFT: headline ── */}
            <div className="lg:col-span-5" style={{ perspective: "900px" }}>
              {/* Eyebrow */}
              <div
                className="inline-flex items-center gap-3 mb-7"
                style={{
                  opacity: inView ? 1 : 0,
                  animation: inView
                    ? "fadeSlideUp 0.7s ease 0.4s both"
                    : "none",
                }}
              >
                <div
                  style={{
                    height: "2px",
                    background: "#F5C400",
                    animation: inView ? "lineGrow 0.8s ease 0.5s both" : "none",
                    width: inView ? undefined : "0px",
                  }}
                />
                <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                  Who We Are
                </span>
              </div>

              {/* 3D flip-in headline */}
              <h2
                className="font-display font-black text-white leading-[1.05] tracking-tight mb-0"
                style={{ fontSize: "clamp(36px, 5.5vw, 58px)" }}
              >
                {/* Line 1 */}
                <span
                  className="flip-line"
                  style={{
                    animation: inView
                      ? "flipUp3d 0.7s cubic-bezier(0.22,1,0.36,1) 0.7s both"
                      : "none",
                    opacity: inView ? undefined : 0,
                  }}
                >
                  One Group.
                </span>

                {/* Line 2 — typewriter */}
                <span
                  className="flip-line"
                  style={{
                    animation: inView
                      ? "flipUp3d 0.7s cubic-bezier(0.22,1,0.36,1) 0.9s both"
                      : "none",
                    opacity: inView ? undefined : 0,
                  }}
                >
                  {/* <span style={{ marginRight: "0.25em" }}>One</span> */}
                  <span
                    style={{
                      color: "transparent",
                      WebkitTextStroke: "1.5px #F5C400",
                    }}
                  >
                    {twText}
                  </span>
                  {!twDone && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "2px",
                        height: "0.82em",
                        background: "#F5C400",
                        verticalAlign: "middle",
                        marginLeft: "3px",
                        animation: "blink 0.6s step-end infinite",
                      }}
                    />
                  )}
                </span>

                {/* Line 3 */}
                <span
                  className="flip-line"
                  style={{
                    animation: inView
                      ? "flipUp3d 0.7s cubic-bezier(0.22,1,0.36,1) 1.1s both"
                      : "none",
                    opacity: inView ? undefined : 0,
                  }}
                >
                  One Mission.
                </span>
              </h2>

              {/* Stats row */}
              <div
                className="flex items-center gap-8 mt-10"
                style={{
                  animation: inView
                    ? "fadeSlideUp 0.7s ease 2.2s both"
                    : "none",
                  opacity: inView ? undefined : 0,
                }}
              >
                {[
                  { label: "Companies", target: 4, delay: 2300 },
                  { label: "Cities", target: 2, delay: 2450 },
                  { label: "Productions", target: 12, delay: 2600 },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-8">
                    {i > 0 && <div className="w-px h-8 bg-white/10" />}
                    <div className="flex flex-col gap-1">
                      <span
                        className="font-black leading-none tabular-nums"
                        style={{
                          fontSize: "clamp(22px,3vw,30px)",
                          color: "#F5C400",
                        }}
                      >
                        <Counter
                          target={s.target}
                          delay={s.delay}
                          trigger={inView}
                        />
                      </span>
                      <span className="text-[10px] text-white/35 tracking-[0.18em] uppercase">
                        {s.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: body copy ── */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <p
                className="text-white/58 text-base sm:text-lg leading-relaxed"
                style={{
                  animation: inView
                    ? "fadeSlideUp 0.75s ease 1.5s both"
                    : "none",
                  opacity: inView ? undefined : 0,
                }}
              >
                Hand Held Media Group brings together four focused subsidiaries
                under one roof: production, equipment, creator development, and
                original IP.
              </p>

              <p
                className="text-white/58 text-base sm:text-lg leading-relaxed"
                style={{
                  animation: inView
                    ? "fadeSlideUp 0.75s ease 1.7s both"
                    : "none",
                  opacity: inView ? undefined : 0,
                }}
              >
                We exist to close the gap between the stories Africa wants to
                tell and the resources needed to tell them well.
              </p>

              {/* Divider line */}
              <div
                className="h-px"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(245,196,0,0.25), transparent)",
                  animation: inView
                    ? "fadeSlideUp 0.7s ease 1.9s both"
                    : "none",
                  opacity: inView ? undefined : 0,
                  width: inView ? "100%" : "0%",
                  transition: "width 1s ease 1.9s",
                }}
              />

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold w-fit"
                style={{
                  animation: inView ? "fadeSlideUp 0.7s ease 2s both" : "none",
                  opacity: inView ? undefined : 0,
                }}
              >
                Our Full Story
                <svg
                  className="w-4 h-4 group-hover:translate-x-1"
                  style={{ transition: "transform 0.2s" }}
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
            </div>
          </div>

          {/* Bottom divider */}
          <div
            className="mt-20 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
            }}
          />
        </div>
      </section>
    </>
  );
}
