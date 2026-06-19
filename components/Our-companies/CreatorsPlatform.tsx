import Link from "next/link";

const benefits = [
  {
    name: "Training Resources & Workshops",
    detail: "Structured learning for every stage of the creative journey.",
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
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    name: "Industry Networking & Collaboration",
    detail: "Connect with fellow creators, industry professionals, and brands.",
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
    name: "Discounted Equipment Rentals",
    detail: "Members get exclusive rates via HH Media Rentals.",
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
          d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
    ),
  },
  {
    name: "Monetisation & Brand Partnerships",
    detail: "Pathways to earn — through brand deals, licensing, and more.",
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
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
  },
  {
    name: "Community Forums & Peer Support",
    detail: "A space to share, learn, and grow alongside other creators.",
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
          d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
        />
      </svg>
    ),
  },
];

export default function CreatorsPlatform() {
  return (
    <section id="creators" className="bg-[#1A1A1A] py-24 px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left — company identity */}
          <div className="lg:col-span-5">
            {/* Company number + label */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="text-white/15 text-xs font-mono">03</span>
              <div className="w-6 h-[1px] bg-white/15" />
              <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
                HH Creators Platform
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-6">
              Built for the creator who is{" "}
              <span
                className="text-[#F5C400]"
                style={{ textShadow: "0 0 40px rgba(245,196,0,0.2)" }}
              >
                serious about their craft.
              </span>
            </h2>

            {/* Body copy — exact from brief */}
            <p className="text-white/55 text-base leading-relaxed mb-4">
              The Hand Held Creators Platform is a membership community for
              African content creators at every stage of their journey. We
              provide tools, training, access to industry networks, and pathways
              to monetise your work.
            </p>

            <p className="text-white/55 text-base leading-relaxed mb-10">
              Whether you are just starting or already building your audience —
              there is a place for you here.
            </p>

            {/* Coming Soon CTA */}
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-sm px-6 py-4 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
                </span>
                <span className="text-white font-black text-sm tracking-[0.15em] uppercase">
                  Coming Soon
                </span>
              </div>

              <p className="text-white/30 text-xs leading-relaxed max-w-xs">
                The platform is currently in development. Stay tuned for the
                official launch.
              </p>
            </div>
          </div>

          {/* Right — benefits list */}
          <div className="lg:col-span-7">
            <p className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Platform Benefits
            </p>

            <div className="flex flex-col divide-y divide-white/[0.06]">
              {benefits.map((benefit) => (
                <div
                  key={benefit.name}
                  className="group flex items-start gap-5 py-5 hover:bg-white/[0.02] transition-colors duration-300 rounded-lg px-3 -mx-3"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-[#F5C400]/10 text-[#F5C400]/60 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F5C400]/20 group-hover:text-[#F5C400] transition-all duration-300 mt-0.5">
                    {benefit.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <p className="text-white text-sm font-semibold mb-1 group-hover:text-[#F5C400] transition-colors duration-300">
                      {benefit.name}
                    </p>
                    <p className="text-white/40 text-xs leading-relaxed">
                      {benefit.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Phase 2 note */}
            <div className="mt-8 bg-[#F5C400]/[0.04] border border-[#F5C400]/15 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#F5C400]/60 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                <p className="text-white/35 text-xs leading-relaxed">
                  The Creators Platform will expand into a full sub-site and
                  portal in Phase 2. The main site has been designed with this
                  in mind.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </section>
  );
}

// const benefits = [
//   {
//     number: "01",
//     name: "Training Resources & Workshops",
//     detail: "Structured learning for every stage of the creative journey.",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
//         />
//       </svg>
//     ),
//   },
//   {
//     number: "02",
//     name: "Industry Networking & Collaboration",
//     detail: "Connect with fellow creators, industry professionals, and brands.",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
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
//     number: "03",
//     name: "Discounted Equipment Rentals",
//     detail: "Members get exclusive rates via HH Media Rentals.",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     number: "04",
//     name: "Monetisation & Brand Partnerships",
//     detail: "Pathways to earn through brand deals, licensing, and more.",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
//         />
//       </svg>
//     ),
//   },
//   {
//     number: "05",
//     name: "Community Forums & Peer Support",
//     detail: "A space to share, learn, and grow alongside other creators.",
//     icon: (
//       <svg
//         className="w-6 h-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
//         />
//       </svg>
//     ),
//   },
// ];

// export default function CreatorsPlatform() {
//   return (
//     <section
//       id="creators"
//       className="relative bg-[#1A1A1A] py-28 px-6 scroll-mt-20 overflow-hidden"
//     >
//       {/* Background — soft yellow pulse top right */}
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#F5C400] opacity-[0.04] blur-[120px] pointer-events-none" />

//       <div className="relative z-10 max-w-6xl mx-auto">
//         {/* ── HEADER ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 items-end">
//           <div>
//             <div className="inline-flex items-center gap-3 mb-7">
//               <span className="text-white/20 text-[10px] font-mono tracking-widest">
//                 03 /
//               </span>
//               <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.3em] uppercase">
//                 HH Creators Platform
//               </span>
//             </div>

//             <h2 className="text-5xl sm:text-6xl lg:text-[64px] font-black text-white leading-[0.95] tracking-tight">
//               Built for the
//               <br />
//               creator who is
//               <br />
//               <span
//                 className="text-[#F5C400]"
//                 style={{ textShadow: "0 0 80px rgba(245,196,0,0.15)" }}
//               >
//                 serious.
//               </span>
//             </h2>
//           </div>

//           <div className="flex flex-col gap-6 lg:pb-1">
//             <p className="text-white/50 text-base leading-relaxed">
//               A membership community for African content creators at every stage
//               of their journey — tools, training, industry networks, and
//               pathways to monetise your work.
//             </p>

//             <p className="text-white/50 text-base leading-relaxed">
//               Whether you are just starting or already building your audience —
//               there is a place for you here.
//             </p>

//             {/* Coming Soon badge */}
//             <div className="flex flex-col gap-3 mt-2">
//               <div className="inline-flex items-center gap-3 w-fit border border-[#F5C400]/20 rounded-full px-5 py-2.5 bg-[#F5C400]/[0.04]">
//                 <span className="relative flex h-2 w-2 flex-shrink-0">
//                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-75" />
//                   <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
//                 </span>
//                 <span className="text-[#F5C400] text-xs font-black tracking-[0.2em] uppercase">
//                   Coming Soon
//                 </span>
//               </div>
//               <p className="text-white/25 text-xs leading-relaxed max-w-xs">
//                 Platform currently in development. Launching Phase 2.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* ── BENEFITS — asymmetric feature layout ── */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
//           {/* Large feature — first benefit spans 5 cols */}
//           <div className="lg:col-span-5 group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-6 hover:border-[#F5C400]/25 hover:bg-white/[0.05] transition-all duration-500">
//             <div className="flex items-start justify-between">
//               <div className="w-14 h-14 rounded-xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400]/60 group-hover:text-[#F5C400] group-hover:bg-[#F5C400]/20 transition-all duration-500">
//                 {benefits[0].icon}
//               </div>
//               <span className="text-white/10 text-xs font-mono group-hover:text-[#F5C400]/30 transition-colors duration-300">
//                 {benefits[0].number}
//               </span>
//             </div>
//             <div>
//               <h3 className="text-white text-xl font-bold leading-snug tracking-tight mb-3 group-hover:text-white transition-colors duration-300">
//                 {benefits[0].name}
//               </h3>
//               <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">
//                 {benefits[0].detail}
//               </p>
//             </div>
//             <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F5C400] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
//           </div>

//           {/* Right column — benefits 2 + 3 stacked */}
//           <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {benefits.slice(1, 3).map((benefit) => (
//               <div
//                 key={benefit.name}
//                 className="group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-[#F5C400]/25 hover:bg-white/[0.05] transition-all duration-500"
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="w-12 h-12 rounded-xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400]/60 group-hover:text-[#F5C400] group-hover:bg-[#F5C400]/20 transition-all duration-500">
//                     {benefit.icon}
//                   </div>
//                   <span className="text-white/10 text-xs font-mono group-hover:text-[#F5C400]/30 transition-colors duration-300">
//                     {benefit.number}
//                   </span>
//                 </div>
//                 <div>
//                   <h3 className="text-white text-base font-bold leading-snug tracking-tight mb-2">
//                     {benefit.name}
//                   </h3>
//                   <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/60 transition-colors duration-300">
//                     {benefit.detail}
//                   </p>
//                 </div>
//                 <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F5C400] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
//               </div>
//             ))}
//           </div>

//           {/* Bottom row — benefits 4 + 5 full width */}
//           {benefits.slice(3).map((benefit) => (
//             <div
//               key={benefit.name}
//               className="lg:col-span-4 group relative bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-5 hover:border-[#F5C400]/25 hover:bg-white/[0.05] transition-all duration-500"
//             >
//               <div className="flex items-start justify-between">
//                 <div className="w-12 h-12 rounded-xl bg-[#F5C400]/10 border border-[#F5C400]/20 flex items-center justify-center text-[#F5C400]/60 group-hover:text-[#F5C400] group-hover:bg-[#F5C400]/20 transition-all duration-500">
//                   {benefit.icon}
//                 </div>
//                 <span className="text-white/10 text-xs font-mono group-hover:text-[#F5C400]/30 transition-colors duration-300">
//                   {benefit.number}
//                 </span>
//               </div>
//               <div>
//                 <h3 className="text-white text-base font-bold leading-snug tracking-tight mb-2">
//                   {benefit.name}
//                 </h3>
//                 <p className="text-white/40 text-xs leading-relaxed group-hover:text-white/60 transition-colors duration-300">
//                   {benefit.detail}
//                 </p>
//               </div>
//               <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#F5C400] group-hover:w-full transition-all duration-500 rounded-b-2xl" />
//             </div>
//           ))}
//         </div>

//         {/* Phase 2 note */}
//         <div className="mt-8 flex items-start gap-3 border border-[#F5C400]/10 rounded-xl p-5 bg-[#F5C400]/[0.02]">
//           <svg
//             className="w-4 h-4 text-[#F5C400]/40 mt-0.5 flex-shrink-0"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={1.5}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
//             />
//           </svg>
//           <p className="text-white/30 text-xs leading-relaxed">
//             The Creators Platform will expand into a full sub-site and portal in
//             Phase 2. The main site has been designed with this in mind.
//           </p>
//         </div>

//         {/* Section divider */}
//         <div className="mt-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//       </div>
//     </section>
//   );
// }
