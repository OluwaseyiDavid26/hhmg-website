// const values = [
//   {
//     name: "Excellence",
//     descriptor: "We hold every frame to the highest standard.",
//     icon: "◆",
//   },
//   {
//     name: "Access",
//     descriptor: "Great equipment and great opportunity should not be gatekept.",
//     icon: "◈",
//   },
//   {
//     name: "Community",
//     descriptor:
//       "The creators we serve are not clients — they are collaborators.",
//     icon: "◉",
//   },
//   {
//     name: "Authenticity",
//     descriptor: "African stories told by Africans, on African terms.",
//     icon: "◎",
//   },
//   {
//     name: "Integrity",
//     descriptor: "We build businesses we are proud to stand behind.",
//     icon: "◇",
//   },
// ];

// export default function CoreValues() {
//   return (
//     <section className="bg-[#1A1A1A] py-28">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section label */}
//         <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
//           Core Values
//         </p>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
//           {/* LEFT — Cinematic statement, sticky */}
//           <div className="lg:sticky lg:top-28">
//             <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white">
//               What we stand for.{" "}
//               <span className="text-white/30">Every single day.</span>
//             </h2>
//             <p className="text-white/40 text-base leading-relaxed mt-8">
//               These are not aspirational slogans. They are the operating
//               principles behind every decision we make as a group.
//             </p>
//           </div>

//           {/* RIGHT — Values list */}
//           <div className="flex flex-col divide-y divide-white/10">
//             {values.map((value) => (
//               <div key={value.name} className="py-8 flex items-start gap-6">
//                 {/* Icon */}
//                 <span className="text-[#F5C400] text-xl mt-1 flex-shrink-0 w-6 text-center">
//                   {value.icon}
//                 </span>

//                 {/* Content */}
//                 <div>
//                   <p className="text-white font-bold text-lg mb-1">
//                     {value.name}
//                   </p>
//                   <p className="text-white/50 text-base leading-relaxed">
//                     {value.descriptor}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Award, Unlock, Users, Fingerprint, ShieldCheck } from "lucide-react";

const values = [
  {
    name: "Excellence",
    descriptor: "We hold every frame to the highest standard.",
    icon: Award,
  },
  {
    name: "Access",
    descriptor: "Great equipment and great opportunity should not be gatekept.",
    icon: Unlock,
  },
  {
    name: "Community",
    descriptor:
      "The creators we serve are not clients — they are collaborators.",
    icon: Users,
  },
  {
    name: "Authenticity",
    descriptor: "African stories told by Africans, on African terms.",
    icon: Fingerprint,
  },
  {
    name: "Integrity",
    descriptor: "We build businesses we are proud to stand behind.",
    icon: ShieldCheck,
  },
];

export default function CoreValues() {
  return (
    <section className="bg-[#1A1A1A] py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
          Core Values
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* LEFT — Cinematic statement, sticky */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tight text-white">
              What we stand for.{" "}
              <span className="text-white/30">Every single day.</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed mt-8">
              These are not aspirational slogans. They are the operating
              principles behind every decision we make as a group.
            </p>
          </div>

          {/* RIGHT — Values list */}
          <div className="flex flex-col divide-y divide-white/10">
            {values.map(({ name, descriptor, icon: Icon }) => (
              <div key={name} className="py-8 flex items-start gap-6">
                {/* Icon */}
                <Icon
                  className="text-[#F5C400] flex-shrink-0 mt-1"
                  size={22}
                  strokeWidth={1.5}
                />

                {/* Content */}
                <div>
                  <p className="text-white font-bold text-lg mb-1">{name}</p>
                  <p className="text-white/50 text-base leading-relaxed">
                    {descriptor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
