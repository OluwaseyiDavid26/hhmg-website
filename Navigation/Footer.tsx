// import Link from "next/link";
// import Image from "next/image";

// const quickLinks = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Our Companies", href: "/companies" },
//   { label: "Restored", href: "/restored" },
//   { label: "Work With Us", href: "/work-with-us" },
//   { label: "Contact", href: "/contact" },
// ];

// const subsidiaryLinks = [
//   { label: "HH Media Studios", href: "/companies#studios" },
//   { label: "HH Media Rentals", href: "/companies#rentals" },
//   { label: "HH Creators Platform", href: "/companies#creators" },
//   { label: "HH Media & Production Co.", href: "/companies#production" },
// ];

// const socialLinks = [
//   {
//     label: "Instagram",
//     href: "#",
//     icon: (
//       <svg
//         className="w-5 h-5"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={1.5}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M6.75 3h10.5A3.75 3.75 0 0121 6.75v10.5A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V6.75A3.75 3.75 0 016.75 3z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
//         />
//         <circle cx="17" cy="7" r="0.75" fill="currentColor" />
//       </svg>
//     ),
//   },
//   {
//     label: "X / Twitter",
//     href: "#",
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//       </svg>
//     ),
//   },
//   {
//     label: "YouTube",
//     href: "#",
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//       </svg>
//     ),
//   },
//   {
//     label: "LinkedIn",
//     href: "#",
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//       </svg>
//     ),
//   },
//   {
//     label: "TikTok",
//     href: "#",
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
//       </svg>
//     ),
//   },
// ];

// export default function Footer() {
//   return (
//     <footer className="bg-[#111111] border-t border-white/10">
//       {/* Main footer content */}
//       <div className="max-w-6xl mx-auto px-6 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//           {/* Col 1 — Brand */}
//           <div className="lg:col-span-1">
//             <Link href="/" className="inline-flex items-center mb-5">
//               <Image
//                 src="/icon-name-white.png"
//                 alt="Hand Held Media Group"
//                 width={180}
//                 height={40}
//                 className="h-11 w-auto object-contain"
//                 priority
//               />
//             </Link>

//             <p className="text-white/40 text-sm leading-relaxed mb-8">
//               Building the infrastructure for African storytelling.
//             </p>

//             <div className="flex items-center gap-4">
//               {socialLinks.map((social) => (
//                 <Link
//                   key={social.label}
//                   href={social.href}
//                   aria-label={social.label}
//                   className="text-white/30 hover:text-[#F5C400] transition-colors duration-200"
//                 >
//                   {social.icon}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Col 2 — Quick links */}
//           <div>
//             <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
//               Navigation
//             </h4>
//             <ul className="flex flex-col gap-3">
//               {quickLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-white/40 text-sm hover:text-white transition-colors duration-200"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Col 3 — Subsidiaries */}
//           <div>
//             <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
//               Our Companies
//             </h4>
//             <ul className="flex flex-col gap-3">
//               {subsidiaryLinks.map((link) => (
//                 <li key={link.label}>
//                   <Link
//                     href={link.href}
//                     className="text-white/40 text-sm hover:text-[#F5C400] transition-colors duration-200"
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Col 4 — Contact info */}
//           <div>
//             <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
//               Get in Touch
//             </h4>

//             <ul className="flex flex-col gap-4 mb-8">
//               <li className="flex items-start gap-3">
//                 <svg
//                   className="w-4 h-4 text-[#F5C400] mt-0.5 flex-shrink-0"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={1.5}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                   />
//                 </svg>
//                 <span className="text-white/40 text-sm leading-relaxed">
//                   Lagos &amp; Abuja,
//                   <br />
//                   Nigeria
//                 </span>
//               </li>

//               <li className="flex items-start gap-3">
//                 <svg
//                   className="w-4 h-4 text-[#F5C400] mt-0.5 flex-shrink-0"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={1.5}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                   />
//                 </svg>
//                 <span className="text-white/40 text-sm">hello@hhmg.africa</span>
//               </li>
//             </ul>

//             <Link
//               href="/contact"
//               className="inline-flex items-center gap-2 bg-[#F5C400] text-[#1A1A1A] text-xs font-bold px-5 py-2.5 rounded-md hover:bg-[#e6b800] transition-colors duration-200"
//             >
//               Send a Message
//               <svg
//                 className="w-3 h-3"
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
//       </div>

//       {/* Bottom bar */}
//       <div className="border-t border-white/[0.06]">
//         <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
//           <p className="text-white/25 text-xs">
//             © 2026 Hand Held Media Group. All rights reserved.
//           </p>
//           <div className="flex items-center gap-1">
//             <div className="w-4 h-[1px] bg-[#F5C400]/40" />
//             <p className="text-white/20 text-xs px-2">Lagos, Nigeria</p>
//             <div className="w-4 h-[1px] bg-[#F5C400]/40" />
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Companies", href: "/companies" },
  { label: "Restored", href: "/restored" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Contact", href: "/contact" },
];

const subsidiaryLinks = [
  { label: "HH Media Studios", href: "/companies#studios" },
  { label: "HH Media Rentals", href: "/companies#rentals" },
  { label: "HH Creators Platform", href: "/companies#creators" },
  { label: "HH Media & Production Co.", href: "/companies#production" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
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
          d="M6.75 3h10.5A3.75 3.75 0 0121 6.75v10.5A3.75 3.75 0 0117.25 21H6.75A3.75 3.75 0 013 17.25V6.75A3.75 3.75 0 016.75 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        />
        <circle cx="17" cy="7" r="0.75" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/10">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/icon-name-white.png"
                alt="Hand Held Media Group"
                width={180}
                height={40}
                className="h-11 w-auto object-contain"
                priority
              />
            </Link>

            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Building the infrastructure for African storytelling.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-white/30 hover:text-[#F5C400] transition-colors duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick links */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Subsidiaries */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Our Companies
            </h4>
            <ul className="flex flex-col gap-3">
              {subsidiaryLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-[#F5C400] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact info */}
          <div>
            <h4 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-6">
              Get in Touch
            </h4>

            <ul className="flex flex-col gap-4 mb-8">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#F5C400] mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-white/40 text-sm leading-relaxed">
                  Lagos &amp; Abuja,
                  <br />
                  Nigeria
                </span>
              </li>

              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-[#F5C400] mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:hello@hheldmedia.com"
                  className="text-white/40 text-sm hover:text-[#F5C400] transition-colors duration-200"
                >
                  hello@hheldmedia.com
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F5C400] text-[#1A1A1A] text-xs font-bold px-5 py-2.5 rounded-md hover:bg-[#e6b800] transition-colors duration-200"
            >
              Send a Message
              <svg
                className="w-3 h-3"
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
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            © 2026 Hand Held Media Group. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-4 h-[1px] bg-[#F5C400]/40" />
            <p className="text-white/20 text-xs px-2">Lagos, Nigeria</p>
            <div className="w-4 h-[1px] bg-[#F5C400]/40" />
          </div>
        </div>
      </div>
    </footer>
  );
}
