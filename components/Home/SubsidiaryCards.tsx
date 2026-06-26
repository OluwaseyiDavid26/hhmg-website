// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";

// function useInView(threshold = 0.15) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setInView(true);
//           observer.disconnect();
//         }
//       },
//       { threshold },
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, [threshold]);

//   return { ref, inView };
// }

// /** Number badge that ticks up from 00 to its target once the card becomes visible. */
// function TickNumber({ target, delay }: { target: number; delay: number }) {
//   const [display, setDisplay] = useState(0);

//   useEffect(() => {
//     const startTimeout = setTimeout(() => {
//       let current = 0;
//       const interval = setInterval(() => {
//         current += 1;
//         setDisplay(current);
//         if (current >= target) clearInterval(interval);
//       }, 70);
//     }, delay * 1000);

//     return () => clearTimeout(startTimeout);
//   }, [target, delay]);

//   return (
//     <span className="absolute top-5 right-5 text-white/10 text-xs font-mono tabular-nums">
//       0{display}
//     </span>
//   );
// }

// const subsidiaries = [
//   {
//     id: "studios",
//     label: "HH Media Studios",
//     tagline: "Production that performs.",
//     description:
//       "Full-service video, audio, and content creation for brands, NGOs, and media organisations. From concept to final cut.",
//     href: "/companies#studios",
//     cta: "View Studios",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
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
//     id: "rentals",
//     label: "HH Media Rentals",
//     tagline: "Equipment that performs.",
//     description:
//       "Professional-grade cameras, lighting, and audio gear for productions of every scale — without the cost of ownership.",
//     href: "/companies#rentals",
//     cta: "Browse Equipment",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "creators",
//     label: "HH Creators Platform",
//     tagline: "Community for the next generation.",
//     description:
//       "A membership platform connecting African content creators with tools, training, industry networks, and monetisation pathways.",
//     href: "/companies#creators",
//     cta: "Join the Platform",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: "production",
//     label: "HH Media & Production Co.",
//     tagline: "Original content. African perspectives.",
//     description:
//       "The Group's original content and IP subsidiary — developing, producing, and distributing television, digital, and branded content.",
//     href: "/companies#production",
//     cta: "Explore Productions",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v1.5m1.5-2.625C19.496 5.004 20 5.508 20 6.129v1.5"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function SubsidiaryCards() {
//   const { ref, inView } = useInView(0.15);

//   return (
//     <section className="bg-[#1A1A1A] py-24 px-6" ref={ref}>
//       <div className="max-w-6xl mx-auto">
//         {/* Section header */}
//         <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
//           <div>
//             {/* Eyebrow */}
//             <div
//               className="inline-flex items-center gap-3 mb-4"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateY(0)" : "translateY(12px)",
//                 transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
//               }}
//             >
//               <div
//                 className="h-[2px] bg-[#F5C400]"
//                 style={{
//                   width: inView ? "32px" : "0px",
//                   transition: "width 0.6s ease 0.1s",
//                 }}
//               />
//               <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
//                 Our Companies
//               </span>
//             </div>

//             {/* Heading */}
//             <h2
//               className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight"
//               style={{
//                 opacity: inView ? 1 : 0,
//                 transform: inView ? "translateY(0)" : "translateY(16px)",
//                 transition:
//                   "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
//               }}
//             >
//               Four Companies.{" "}
//               <span className="text-white/40">One Ecosystem.</span>
//             </h2>
//           </div>

//           {/* View all link */}
//           <Link
//             href="/companies"
//             className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#F5C400] transition-colors duration-200 flex-shrink-0"
//             style={{
//               opacity: inView ? 1 : 0,
//               transition: "opacity 0.8s ease 0.35s",
//             }}
//           >
//             View All Companies
//             <svg
//               className="w-4 h-4"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17 8l4 4m0 0l-4 4m4-4H3"
//               />
//             </svg>
//           </Link>
//         </div>

//         {/* Cards grid — each card rises in with a subtle 3D tilt, like being set down */}
//         <div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
//           style={{ perspective: "1200px" }}
//         >
//           {subsidiaries.map((sub, index) => {
//             const delay = 0.4 + index * 0.13;
//             return (
//               <div
//                 key={sub.id}
//                 className="group relative bg-white/[0.03] border border-white/10 rounded-xl p-6 flex flex-col hover:border-[#F5C400]/40 hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300"
//                 style={{
//                   opacity: inView ? 1 : 0,
//                   transform: inView
//                     ? "translateY(0) rotateX(0deg) scale(1)"
//                     : "translateY(36px) rotateX(8deg) scale(0.96)",
//                   transformOrigin: "bottom center",
//                   transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, border-color 0.3s ease, background-color 0.3s ease`,
//                 }}
//               >
//                 {/* Card number — ticks up from 00 */}
//                 {inView && (
//                   <TickNumber target={index + 1} delay={delay + 0.35} />
//                 )}

//                 {/* Icon — springs in with overshoot, slightly after the card lands */}
//                 <div
//                   className="w-10 h-10 rounded-lg bg-[#F5C400]/10 text-[#F5C400] flex items-center justify-center mb-5 group-hover:bg-[#F5C400]/20 group-hover:scale-110 transition-colors duration-300"
//                   style={{
//                     opacity: inView ? 1 : 0,
//                     transform: inView ? "scale(1)" : "scale(0.4)",
//                     transition: `opacity 0.45s cubic-bezier(0.34,1.56,0.64,1) ${delay + 0.18}s, transform 0.45s cubic-bezier(0.34,1.56,0.64,1) ${delay + 0.18}s`,
//                   }}
//                 >
//                   <div className="transition-transform duration-300 group-hover:scale-110">
//                     {sub.icon}
//                   </div>
//                 </div>

//                 {/* Label */}
//                 <h3 className="text-white font-semibold text-sm mb-1 leading-snug">
//                   {sub.label}
//                 </h3>

//                 {/* Tagline */}
//                 <p className="text-[#F5C400]/80 text-xs font-medium mb-4">
//                   {sub.tagline}
//                 </p>

//                 {/* Description */}
//                 <p className="text-white/50 text-sm leading-relaxed flex-1 mb-6">
//                   {sub.description}
//                 </p>

//                 {/* CTA */}
//                 <Link
//                   href={sub.href}
//                   className="inline-flex items-center gap-2 text-white/50 text-xs font-semibold group-hover:text-[#F5C400] transition-colors duration-200"
//                 >
//                   {sub.cta}
//                   <svg
//                     className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200"
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

//                 {/* Bottom accent */}
//                 <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-[#F5C400]/0 to-transparent group-hover:via-[#F5C400]/40 transition-all duration-300" />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function TickNumber({ target, delay }: { target: number; delay: number }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      let c = 0;
      const iv = setInterval(() => {
        c += 1;
        setDisplay(c);
        if (c >= target) clearInterval(iv);
      }, 70);
    }, delay * 1000);
    return () => clearTimeout(t);
  }, [target, delay]);
  return (
    <span
      className="absolute bottom-5 right-5 text-[42px] font-black tabular-nums leading-none select-none pointer-events-none"
      style={{
        color: "rgba(255,255,255,0.04)",
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {String(display).padStart(2, "0")}
    </span>
  );
}

const subsidiaries = [
  {
    id: "studios",
    label: "HH Media Studios",
    tagline: "Production that performs.",
    description:
      "Full-service video, audio, and content creation for brands, NGOs, and media organisations. From concept to final cut.",
    href: "/companies#studios",
    cta: "View Studios",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"
        />
      </svg>
    ),
  },
  {
    id: "rentals",
    label: "HH Media Rentals",
    tagline: "Equipment that performs.",
    description:
      "Professional-grade cameras, lighting, and audio gear for productions of every scale — without the cost of ownership.",
    href: "/companies#rentals",
    cta: "Browse Equipment",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
        />
      </svg>
    ),
  },
  {
    id: "creators",
    label: "HH Creators Platform",
    tagline: "Community for the next generation.",
    description:
      "A membership platform connecting African content creators with tools, training, industry networks, and monetisation pathways.",
    href: "/companies#creators",
    cta: "Join the Platform",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    id: "production",
    label: "HH Media & Production Co.",
    tagline: "Original content. African perspectives.",
    description:
      "The Group's original content and IP subsidiary — developing, producing, and distributing television, digital, and branded content.",
    href: "/companies#production",
    cta: "Explore Productions",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v1.5m1.5-2.625C19.496 5.004 20 5.508 20 6.129v1.5"
        />
      </svg>
    ),
  },
];

export default function SubsidiaryCards() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      className="bg-[#1A1A1A] py-24 px-6 relative overflow-hidden"
      ref={ref}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Gold left rule */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 5%, rgba(245,196,0,0.2) 30%, rgba(245,196,0,0.2) 70%, transparent 95%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-3 mb-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
              }}
            >
              <div
                className="h-[2px] bg-[#F5C400]"
                style={{
                  width: inView ? "32px" : "0px",
                  transition: "width 0.7s ease 0.1s",
                }}
              />
              <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
                Our Companies
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
                transition:
                  "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
              }}
            >
              Four Companies.{" "}
              <span
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgba(255,255,255,0.25)",
                }}
              >
                One Ecosystem.
              </span>
            </h2>
          </div>

          {/* View all */}
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#F5C400] flex-shrink-0 group"
            style={{
              opacity: inView ? 1 : 0,
              transition: "opacity 0.8s ease 0.35s, color 0.2s",
            }}
          >
            View All Companies
            <svg
              className="w-4 h-4 group-hover:translate-x-1"
              style={{ transition: "transform 0.2s" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* ── Cards grid ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]"
          style={{ perspective: "1200px" }}
        >
          {subsidiaries.map((sub, i) => {
            const delay = 0.4 + i * 0.12;
            return (
              <div
                key={sub.id}
                className="group relative bg-[#1A1A1A] p-7 flex flex-col overflow-hidden"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? "translateY(0) rotateX(0deg)"
                    : "translateY(40px) rotateX(10deg)",
                  transformOrigin: "bottom center",
                  transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
                }}
              >
                {/* Gold left rule — slides in on hover */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#F5C400]"
                  style={{
                    transform: "scaleY(0)",
                    transformOrigin: "top",
                    transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const p = el.parentElement;
                    if (!p) return;
                    p.addEventListener("mouseenter", () => {
                      el.style.transform = "scaleY(1)";
                    });
                    p.addEventListener("mouseleave", () => {
                      el.style.transform = "scaleY(0)";
                    });
                  }}
                />

                {/* Watermark number — bottom right, huge, ghosted */}
                {inView && <TickNumber target={i + 1} delay={delay + 0.3} />}

                {/* Icon — gold ring, slight spring on hover */}
                <div
                  className="w-11 h-11 rounded-none border border-[#F5C400]/30 text-[#F5C400] flex items-center justify-center mb-6 group-hover:border-[#F5C400]/80 group-hover:bg-[#F5C400]/[0.06]"
                  style={{
                    opacity: inView ? 1 : 0,
                    transform: inView
                      ? "scale(1) translateY(0)"
                      : "scale(0.5) translateY(6px)",
                    transition: `opacity 0.4s cubic-bezier(0.34,1.56,0.64,1) ${delay + 0.2}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${delay + 0.2}s, border-color 0.25s, background 0.25s`,
                  }}
                >
                  <div
                    className="group-hover:scale-110"
                    style={{
                      transition:
                        "transform 0.25s cubic-bezier(0.34,1.56,0.64,1)",
                    }}
                  >
                    {sub.icon}
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-white font-semibold text-sm mb-1.5 leading-snug">
                  {sub.label}
                </h3>

                {/* Tagline */}
                <p className="text-[#F5C400]/70 text-xs font-medium mb-4 tracking-wide">
                  {sub.tagline}
                </p>

                {/* Description */}
                <p className="text-white/45 text-sm leading-relaxed flex-1 mb-7">
                  {sub.description}
                </p>

                {/* CTA */}
                <Link
                  href={sub.href}
                  className="inline-flex items-center gap-2 text-white/35 text-xs font-semibold group-hover:text-[#F5C400]"
                  style={{ transition: "color 0.2s" }}
                >
                  {sub.cta}
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1"
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

                {/* Bottom glow — only visible on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 10%, rgba(245,196,0,0) 50%, transparent 90%)",
                    transition: "background 0.3s",
                  }}
                  ref={(el) => {
                    if (!el) return;
                    const p = el.parentElement;
                    if (!p) return;
                    p.addEventListener("mouseenter", () => {
                      el.style.background =
                        "linear-gradient(90deg, transparent 10%, rgba(245,196,0,0.5) 50%, transparent 90%)";
                    });
                    p.addEventListener("mouseleave", () => {
                      el.style.background =
                        "linear-gradient(90deg, transparent 10%, rgba(245,196,0,0) 50%, transparent 90%)";
                    });
                  }}
                />

                {/* Corner accent top-right */}
                <div
                  className="absolute top-0 right-0 w-6 h-6 pointer-events-none opacity-0 group-hover:opacity-100"
                  style={{ transition: "opacity 0.3s" }}
                >
                  <div className="absolute top-0 right-0 w-4 h-px bg-[#F5C400]/60" />
                  <div className="absolute top-0 right-0 w-px h-4 bg-[#F5C400]/60" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
