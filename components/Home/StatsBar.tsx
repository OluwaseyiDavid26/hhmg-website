// const stats = [
//   {
//     value: "4",
//     label: "Subsidiaries",
//     description: "Covering the full media ecosystem",
//   },
//   {
//     value: "2",
//     label: "Locations",
//     description: "Lagos & Abuja",
//   },
//   {
//     value: "2026",
//     label: "Year Founded",
//     description: "Built from the ground up",
//   },
//   {
//     value: "1+",
//     label: "Productions",
//     description: "And growing",
//   },
// ];

// export default function StatsBar() {
//   return (
//     <section className="bg-[#111111] border-y border-white/10 py-20 px-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Section label */}
//         <div className="flex justify-center mb-16">
//           <div className="inline-flex items-center gap-3">
//             <div className="w-8 h-[2px] bg-[#F5C400]" />
//             <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
//               By the Numbers
//             </span>
//             <div className="w-8 h-[2px] bg-[#F5C400]" />
//           </div>
//         </div>

//         {/* Stats grid */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center px-8 py-6 group"
//             >
//               {/* Value */}
//               <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-3 group-hover:text-[#F5C400] transition-colors duration-300">
//                 {stat.value}
//               </span>

//               {/* Label */}
//               <span className="text-white text-sm font-semibold uppercase tracking-widest mb-2">
//                 {stat.label}
//               </span>

//               {/* Divider */}
//               <div className="w-6 h-[1px] bg-[#F5C400]/40 mb-3" />

//               {/* Description */}
//               <span className="text-white/40 text-xs leading-relaxed">
//                 {stat.description}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Bottom note */}
//         <p className="text-center text-white/20 text-xs mt-16 tracking-wide">
//           Numbers updated as the Group grows — last updated June 2026
//         </p>
//       </div>
//     </section>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

const stats = [
  {
    numericValue: 4,
    suffix: "",
    label: "Subsidiaries",
    description: "Covering the full media ecosystem",
  },
  {
    numericValue: 2,
    suffix: "",
    label: "Locations",
    description: "Lagos & Abuja",
  },
  {
    numericValue: 2026,
    suffix: "",
    label: "Year Founded",
    description: "Built from the ground up",
  },
  {
    numericValue: 1,
    suffix: "+",
    label: "Productions",
    description: "And growing",
  },
];

function StatItem({
  stat,
  index,
  inView,
}: {
  stat: (typeof stats)[0];
  index: number;
  inView: boolean;
}) {
  const startDelay = 300 + index * 180;
  const [shouldCount, setShouldCount] = useState(false);

  useEffect(() => {
    if (!inView) return;
    const timer = setTimeout(() => setShouldCount(true), startDelay);
    return () => clearTimeout(timer);
  }, [inView, startDelay]);

  const count = useCountUp(stat.numericValue, 1800, shouldCount);

  return (
    <div
      className="flex flex-col items-center text-center px-8 py-6 group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 1s ease ${startDelay}ms, transform 1s ease ${startDelay}ms`,
      }}
    >
      {/* Value — counts up */}
      <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-3 group-hover:text-[#F5C400] transition-colors duration-500">
        {shouldCount ? count : 0}
        {stat.suffix}
      </span>

      {/* Label */}
      <span
        className="text-white text-sm font-semibold uppercase tracking-widest mb-2"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.8s ease ${startDelay + 400}ms`,
        }}
      >
        {stat.label}
      </span>

      {/* Divider — grows in */}
      <div
        className="h-[1px] bg-[#F5C400]/40 mb-3"
        style={{
          width: inView ? "24px" : "0px",
          transition: `width 0.8s ease ${startDelay + 500}ms`,
        }}
      />

      {/* Description */}
      <span
        className="text-white/40 text-xs leading-relaxed"
        style={{
          opacity: inView ? 1 : 0,
          transition: `opacity 0.8s ease ${startDelay + 600}ms`,
        }}
      >
        {stat.description}
      </span>
    </div>
  );
}

export default function StatsBar() {
  const { ref, inView } = useInView(0.3);

  return (
    <section
      className="bg-[#111111] border-y border-white/10 py-20 px-6"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div
          className="flex justify-center mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 1s ease 0.1s, transform 1s ease 0.1s",
          }}
        >
          <div className="inline-flex items-center gap-3">
            <div
              className="h-[2px] bg-[#F5C400]"
              style={{
                width: inView ? "32px" : "0px",
                transition: "width 0.9s ease 0.2s",
              }}
            />
            <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
              By the Numbers
            </span>
            <div
              className="h-[2px] bg-[#F5C400]"
              style={{
                width: inView ? "32px" : "0px",
                transition: "width 0.9s ease 0.2s",
              }}
            />
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} inView={inView} />
          ))}
        </div>

        {/* Bottom note */}
        <p
          className="text-center text-white/20 text-xs mt-16 tracking-wide"
          style={{
            opacity: inView ? 1 : 0,
            transition: "opacity 1s ease 1.8s",
          }}
        >
          Numbers updated as the Group grows — last updated June 2026
        </p>
      </div>
    </section>
  );
}
