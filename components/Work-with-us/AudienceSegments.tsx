import Link from "next/link";

const SEGMENTS = [
  {
    id: "brands",
    index: "01",
    tag: "HH Media Studios",
    title: "For Brands & Organisations",
    copy: "Need video, photography, or branded content? HH Media Studios is your production partner.",
    cta: "Start a Project",
    href: "/contact?type=production",
  },
  {
    id: "filmmakers",
    index: "02",
    tag: "HH Media Rentals",
    title: "For Filmmakers & Productions",
    copy: "Looking for professional equipment without the cost of ownership? HH Media Rentals has your kit.",
    cta: "Browse Equipment",
    href: "/companies/rentals",
  },
  {
    id: "creators",
    index: "03",
    tag: "HH Creators Platform",
    title: "For Content Creators",
    copy: "Ready to level up? Join the HH Creators Platform for training, community, and opportunities.",
    cta: "Join the Platform",
    href: "/companies/creators-platform",
  },
  {
    id: "investors",
    index: "04",
    tag: "Hand Held Media Group",
    title: "For Investors & Partners",
    copy: "Interested in the HHMG opportunity? We are open to strategic partnerships and investor conversations.",
    cta: "Request a Pitch Deck",
    href: "/contact?type=investment",
  },
];

export default function AudienceSegments() {
  return (
    <section className="bg-[#1A1A1A] py-20 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SEGMENTS.map((segment) => (
          <div
            key={segment.id}
            id={segment.id}
            className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-9 transition-colors duration-200 hover:border-[#F5C400]/30 hover:bg-white/[0.03] scroll-mt-28"
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[#F5C400] text-[11px] font-semibold tracking-[0.2em] uppercase">
                {segment.tag}
              </span>
              <span className="text-white/20 text-sm font-semibold tabular-nums">
                {segment.index}
              </span>
            </div>

            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
              {segment.title}
            </h3>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
              {segment.copy}
            </p>

            <Link
              href={segment.href}
              className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold transition-colors duration-200 hover:text-white"
            >
              {segment.cta}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

("use client");

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SEGMENTS = [
  {
    id: "brands",
    index: "01",
    tag: "HH Media Studios",
    title: "For Brands & Organisations",
    copy: "Need video, photography, or branded content? HH Media Studios is your production partner.",
    cta: "Start a Project",
    href: "/contact?type=production",
  },
  {
    id: "filmmakers",
    index: "02",
    tag: "HH Media Rentals",
    title: "For Filmmakers & Productions",
    copy: "Looking for professional equipment without the cost of ownership? HH Media Rentals has your kit.",
    cta: "Browse Equipment",
    href: "/companies/rentals",
  },
  {
    id: "creators",
    index: "03",
    tag: "HH Creators Platform",
    title: "For Content Creators",
    copy: "Ready to level up? Join the HH Creators Platform for training, community, and opportunities.",
    cta: "Join the Platform",
    href: "/companies/creators-platform",
  },
  {
    id: "investors",
    index: "04",
    tag: "Hand Held Media Group",
    title: "For Investors & Partners",
    copy: "Interested in the HHMG opportunity? We are open to strategic partnerships and investor conversations.",
    cta: "Request a Pitch Deck",
    href: "/contact?type=investment",
  },
];

export default function AudienceSegments() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#1A1A1A] py-20 sm:py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SEGMENTS.map((segment, i) => (
          <div
            key={segment.id}
            id={segment.id}
            className={`group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-9 transition-all duration-200 hover:border-[#F5C400]/30 hover:bg-white/[0.03] scroll-mt-28 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionProperty:
                "opacity, transform, border-color, background-color",
              transitionDuration: isVisible
                ? "400ms, 400ms, 200ms, 200ms"
                : "0ms",
              transitionDelay: isVisible ? `${i * 80}ms` : "0ms",
            }}
          >
            <div className="flex items-start justify-between mb-6">
              <span className="text-[#F5C400] text-[11px] font-semibold tracking-[0.2em] uppercase">
                {segment.tag}
              </span>
              <TickIndex
                value={segment.index}
                active={isVisible}
                delay={i * 80 + 150}
              />
            </div>

            <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3">
              {segment.title}
            </h3>

            <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-8">
              {segment.copy}
            </p>

            <Link
              href={segment.href}
              className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold transition-colors duration-200 hover:text-white"
            >
              {segment.cta}
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
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
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Small index badge that "ticks" through 00 -> target number once it becomes active. */
function TickIndex({
  value,
  active,
  delay,
}: {
  value: string;
  active: boolean;
  delay: number;
}) {
  const [display, setDisplay] = useState("00");

  useEffect(() => {
    if (!active) return;

    const target = parseInt(value, 10);
    const timeout = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setDisplay(String(current).padStart(2, "0"));
        if (current >= target) clearInterval(interval);
      }, 45);
    }, delay);

    return () => clearTimeout(timeout);
  }, [active, value, delay]);

  return (
    <span className="text-white/20 text-sm font-semibold tabular-nums">
      {display}
    </span>
  );
}

// "use client";

// import Link from "next/link";
// import { motion } from "framer-motion";

// const SEGMENTS = [
//   {
//     id: "brands",
//     index: "01",
//     tag: "HH Media Studios",
//     title: "For Brands & Organisations",
//     copy: "Need video, photography, or branded content? HH Media Studios is your production partner.",
//     cta: "Start a Project",
//     href: "/contact?type=production",
//   },
//   {
//     id: "filmmakers",
//     index: "02",
//     tag: "HH Media Rentals",
//     title: "For Filmmakers & Productions",
//     copy: "Looking for professional equipment without the cost of ownership? HH Media Rentals has your kit.",
//     cta: "Browse Equipment",
//     href: "/companies/rentals",
//   },
//   {
//     id: "creators",
//     index: "03",
//     tag: "HH Creators Platform",
//     title: "For Content Creators",
//     copy: "Ready to level up? Join the HH Creators Platform for training, community, and opportunities.",
//     cta: "Join the Platform",
//     href: "/companies/creators-platform",
//   },
//   {
//     id: "investors",
//     index: "04",
//     tag: "Hand Held Media Group",
//     title: "For Investors & Partners",
//     copy: "Interested in the HHMG opportunity? We are open to strategic partnerships and investor conversations.",
//     cta: "Request a Pitch Deck",
//     href: "/contact?type=investment",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.1,
//     },
//   },
// };

// const cardVariants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//     scale: 0.97,
//   },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 300,
//       damping: 25,
//       duration: 0.5,
//     },
//   },
// };

// export default function AudienceSegments() {
//   return (
//     <section className="bg-[#1A1A1A] py-20 sm:py-24 px-6">
//       <motion.div
//         className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-50px" }}
//       >
//         {SEGMENTS.map((segment) => (
//           <motion.div
//             key={segment.id}
//             id={segment.id}
//             variants={cardVariants}
//             whileHover={{
//               y: -6,
//               scale: 1.01,
//               borderColor: "rgba(245, 196, 0, 0.3)",
//               backgroundColor: "rgba(255, 255, 255, 0.03)",
//               transition: {
//                 type: "spring",
//                 stiffness: 400,
//                 damping: 20,
//               },
//             }}
//             className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-9 scroll-mt-28"
//           >
//             <div className="flex items-start justify-between mb-6">
//               <motion.span
//                 initial={{ opacity: 0, x: -10 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-[#F5C400] text-[11px] font-semibold tracking-[0.2em] uppercase"
//               >
//                 {segment.tag}
//               </motion.span>
//               <motion.span
//                 whileHover={{ scale: 1.1, opacity: 0.5 }}
//                 className="text-white/20 text-sm font-semibold tabular-nums"
//               >
//                 {segment.index}
//               </motion.span>
//             </div>

//             <motion.h3
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.1 }}
//               className="text-white text-xl sm:text-2xl font-bold tracking-tight mb-3"
//             >
//               {segment.title}
//             </motion.h3>

//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.15 }}
//               className="text-white/60 text-sm sm:text-base leading-relaxed mb-8"
//             >
//               {segment.copy}
//             </motion.p>

//             <motion.div
//               whileHover={{ x: 6 }}
//               transition={{ type: "spring", stiffness: 400 }}
//             >
//               <Link
//                 href={segment.href}
//                 className="inline-flex items-center gap-2 text-[#F5C400] text-sm font-semibold transition-colors duration-200 hover:text-white"
//               >
//                 {segment.cta}
//                 <motion.svg
//                   className="w-4 h-4"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2.5}
//                   aria-hidden="true"
//                   whileHover={{ x: 4 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                   />
//                 </motion.svg>
//               </Link>
//             </motion.div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }
