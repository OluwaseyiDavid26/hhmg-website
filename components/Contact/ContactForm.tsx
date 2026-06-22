// "use client";

// import { useState } from "react";

// const enquiryOptions = [
//   { value: "", label: "Select a topic" },
//   { value: "production", label: "Production Enquiry" },
//   { value: "rental", label: "Equipment Rental" },
//   { value: "creators", label: "Creators Platform" },
//   { value: "investment", label: "Investments & Partnerships" },
//   { value: "press", label: "Media & Press" },
//   { value: "other", label: "Other" },
// ];

// const contactDetails = [
//   {
//     label: "Location",
//     value: "Lagos & Abuja, Nigeria",
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
//           d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//         />
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//         />
//       </svg>
//     ),
//   },
//   {
//     label: "Email",
//     value: "hello@hhmg.africa",
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
//           d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//         />
//       </svg>
//     ),
//   },
// ];

// const socialLinks = [
//   {
//     label: "Instagram",
//     href: "#",
//     icon: (
//       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

// export default function ContactForm() {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     organisation: "",
//     enquiry: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >,
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     if (!form.fullName || !form.email || !form.enquiry || !form.message) return;
//     setLoading(true);
//     await new Promise((r) => setTimeout(r, 1200));
//     setLoading(false);
//     setSubmitted(true);
//   };

//   return (
//     <section className="bg-[#1A1A1A] py-24 px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
//           {/* ── LEFT — Contact details + socials ── */}

//           <div className="lg:col-span-4 flex flex-col gap-10">
//             {/* Contact details */}
//             <div>
//               <p className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
//                 Contact Details
//               </p>
//               <div className="flex flex-col gap-6">
//                 {/* Location */}
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-lg bg-[#F5C400]/10 border border-[#F5C400]/15 flex items-center justify-center text-[#F5C400]/70 flex-shrink-0">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={1.5}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
//                       />
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-1">
//                       Location
//                     </p>
//                     <p className="text-white text-sm font-semibold">
//                       Lagos & Abuja, Nigeria
//                     </p>
//                   </div>
//                 </div>

//                 {/* Email — mailto link */}
//                 <div className="flex items-start gap-4">
//                   <div className="w-10 h-10 rounded-lg bg-[#F5C400]/10 border border-[#F5C400]/15 flex items-center justify-center text-[#F5C400]/70 flex-shrink-0">
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={1.5}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
//                       />
//                     </svg>
//                   </div>
//                   <div>
//                     <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-1">
//                       Email
//                     </p>
//                     <a
//                       href="mailto:hello@hhmg.africa"
//                       className="text-white text-sm font-semibold hover:text-[#F5C400] transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-[#F5C400]/50"
//                     >
//                       hello@hhmg.africa
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Social media — icon grid */}
//             <div>
//               <p className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
//                 Follow Us
//               </p>
//               <div className="flex flex-row gap-3">
//                 {socialLinks.map((social) => (
//                   <a
//                     key={social.label}
//                     href={social.href}
//                     aria-label={social.label}
//                     className="w-11 h-11 rounded-xl border border-white/[0.10] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-[#F5C400] hover:border-[#F5C400]/30 hover:bg-[#F5C400]/[0.06] transition-all duration-200"
//                   >
//                     {social.icon}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ── RIGHT — Form ── */}
//           <div className="lg:col-span-8">
//             {submitted ? (
//               <div className="flex flex-col items-start gap-6 py-16">
//                 <div className="w-14 h-14 rounded-full bg-[#F5C400]/10 border border-[#F5C400]/30 flex items-center justify-center">
//                   <svg
//                     className="w-6 h-6 text-[#F5C400]"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M4.5 12.75l6 6 9-13.5"
//                     />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-white text-2xl font-black tracking-tight mb-2">
//                     Message Sent.
//                   </h3>
//                   <p className="text-white/50 text-base leading-relaxed">
//                     Thank you for reaching out. A member of the HHMG team will
//                     be in touch with you shortly.
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => {
//                     setSubmitted(false);
//                     setForm({
//                       fullName: "",
//                       email: "",
//                       organisation: "",
//                       enquiry: "",
//                       message: "",
//                     });
//                   }}
//                   className="text-[#F5C400] text-sm font-semibold hover:underline underline-offset-4 transition-all"
//                 >
//                   Send another message
//                 </button>
//               </div>
//             ) : (
//               <div className="flex flex-col gap-5">
//                 {/* Row 1 — Full Name + Email */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="flex flex-col gap-2">
//                     <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
//                       Full Name <span className="text-[#F5C400]">*</span>
//                     </label>
//                     <input
//                       type="text"
//                       name="fullName"
//                       value={form.fullName}
//                       onChange={handleChange}
//                       placeholder="Your full name"
//                       className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200"
//                     />
//                   </div>
//                   <div className="flex flex-col gap-2">
//                     <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
//                       Email Address <span className="text-[#F5C400]">*</span>
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       placeholder="you@example.com"
//                       className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200"
//                     />
//                   </div>
//                 </div>

//                 {/* Row 2 — Organisation */}
//                 <div className="flex flex-col gap-2">
//                   <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
//                     Organisation / Company{" "}
//                     <span className="text-white/20 font-normal normal-case tracking-normal ml-1">
//                       (optional)
//                     </span>
//                   </label>
//                   <input
//                     type="text"
//                     name="organisation"
//                     value={form.organisation}
//                     onChange={handleChange}
//                     placeholder="Your company or organisation"
//                     className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200"
//                   />
//                 </div>

//                 {/* Row 3 — Dropdown */}
//                 <div className="flex flex-col gap-2">
//                   <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
//                     What are you reaching out about?{" "}
//                     <span className="text-[#F5C400]">*</span>
//                   </label>
//                   <div className="relative">
//                     <select
//                       name="enquiry"
//                       value={form.enquiry}
//                       onChange={handleChange}
//                       className="w-full appearance-none bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200 cursor-pointer pr-10"
//                       style={{
//                         color: form.enquiry ? "white" : "rgba(255,255,255,0.2)",
//                       }}
//                     >
//                       {enquiryOptions.map((opt) => (
//                         <option
//                           key={opt.value}
//                           value={opt.value}
//                           disabled={opt.value === ""}
//                           style={{ backgroundColor: "#1A1A1A", color: "white" }}
//                         >
//                           {opt.label}
//                         </option>
//                       ))}
//                     </select>
//                     <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
//                       <svg
//                         className="w-4 h-4"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Row 4 — Message */}
//                 <div className="flex flex-col gap-2">
//                   <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
//                     Message <span className="text-[#F5C400]">*</span>
//                   </label>
//                   <textarea
//                     name="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     rows={6}
//                     placeholder="Tell us what you have in mind..."
//                     className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200 resize-none leading-relaxed"
//                   />
//                 </div>

//                 {/* Submit row */}
//                 <div className="flex items-center justify-between gap-4 pt-2">
//                   {/* <p className="text-white/20 text-xs">
//                     Fields marked <span className="text-[#F5C400]">*</span> are
//                     required
//                   </p> */}
//                   <button
//                     onClick={handleSubmit}
//                     disabled={loading}
//                     className="inline-flex items-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-8 py-4 rounded-sm hover:bg-[#e6b800] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 hover:scale-[1.02] uppercase tracking-wide"
//                   >
//                     {loading ? (
//                       <>
//                         <svg
//                           className="w-4 h-4 animate-spin"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           />
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
//                           />
//                         </svg>
//                         Sending...
//                       </>
//                     ) : (
//                       <>
//                         Send Message
//                         <svg
//                           className="w-4 h-4"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           strokeWidth={2.5}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M17 8l4 4m0 0l-4 4m4-4H3"
//                           />
//                         </svg>
//                       </>
//                     )}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const enquiryOptions = [
  { value: "", label: "Select a topic" },
  { value: "production", label: "Production Enquiry" },
  { value: "rental", label: "Equipment Rental" },
  { value: "creators", label: "Creators Platform" },
  { value: "investment", label: "Investments & Partnerships" },
  { value: "press", label: "Media & Press" },
  { value: "other", label: "Other" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    organisation: "",
    enquiry: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.fullName || !form.email || !form.enquiry || !form.message) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const leftVariants: Variants = {
    hidden: { opacity: 0, x: -32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeInOut" },
    },
  };

  const rightVariants: Variants = {
    hidden: { opacity: 0, x: 32 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeInOut", delay: 0.15 },
    },
  };

  return (
    <section className="bg-[#1A1A1A] py-24 px-6" ref={ref}>
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* ── LEFT — Contact details + socials ── */}
          <motion.div
            variants={leftVariants}
            className="lg:col-span-4 flex flex-col gap-10"
          >
            {/* Contact details */}
            <div>
              <motion.p
                variants={itemVariants}
                className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6"
              >
                Contact Details
              </motion.p>

              <div className="flex flex-col gap-6">
                {/* Location */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5C400]/10 border border-[#F5C400]/15 flex items-center justify-center text-[#F5C400]/70 flex-shrink-0">
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
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-1">
                      Location
                    </p>
                    <p className="text-white text-sm font-semibold">
                      Lagos & Abuja, Nigeria
                    </p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F5C400]/10 border border-[#F5C400]/15 flex items-center justify-center text-[#F5C400]/70 flex-shrink-0">
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
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@hhmg.africa"
                      className="text-white text-sm font-semibold hover:text-[#F5C400] transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-[#F5C400]/50"
                    >
                      hello@hhmg.africa
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social icons */}
            <motion.div variants={itemVariants}>
              <p className="text-white/25 text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
                Follow Us
              </p>
              <div className="flex flex-row flex-nowrap gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl border border-white/[0.10] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-[#F5C400] hover:border-[#F5C400]/30 hover:bg-[#F5C400]/[0.06] transition-all duration-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.5 + i * 0.08,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.12, transition: { duration: 0.2 } }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT — Form ── */}
          <motion.div variants={rightVariants} className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="flex flex-col items-start gap-6 py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                    delay: 0.2,
                  }}
                  className="w-14 h-14 rounded-full bg-[#F5C400]/10 border border-[#F5C400]/30 flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 text-[#F5C400]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-white text-2xl font-black tracking-tight mb-2">
                    Message Sent.
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed">
                    Thank you for reaching out. A member of the HHMG team will
                    be in touch with you shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      fullName: "",
                      email: "",
                      organisation: "",
                      enquiry: "",
                      message: "",
                    });
                  }}
                  className="text-[#F5C400] text-sm font-semibold hover:underline underline-offset-4 transition-all"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.div
                variants={containerVariants}
                className="flex flex-col gap-5"
              >
                {/* Row 1 — Full Name + Email */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
                      Full Name <span className="text-[#F5C400]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
                      Email Address <span className="text-[#F5C400]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200"
                    />
                  </div>
                </motion.div>

                {/* Row 2 — Organisation */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-2"
                >
                  <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
                    Organisation / Company{" "}
                    <span className="text-white/20 font-normal normal-case tracking-normal ml-1">
                      (optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    placeholder="Your company or organisation"
                    className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200"
                  />
                </motion.div>

                {/* Row 3 — Dropdown */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-2"
                >
                  <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
                    What are you reaching out about?{" "}
                    <span className="text-[#F5C400]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="enquiry"
                      value={form.enquiry}
                      onChange={handleChange}
                      className="w-full appearance-none bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-sm focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200 cursor-pointer pr-10"
                      style={{
                        color: form.enquiry ? "white" : "rgba(255,255,255,0.2)",
                      }}
                    >
                      {enquiryOptions.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          disabled={opt.value === ""}
                          style={{ backgroundColor: "#1A1A1A", color: "white" }}
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.div>

                {/* Row 4 — Message */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-2"
                >
                  <label className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase">
                    Message <span className="text-[#F5C400]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us what you have in mind..."
                    className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-[#F5C400]/40 focus:bg-white/[0.06] transition-all duration-200 resize-none leading-relaxed"
                  />
                </motion.div>

                {/* Submit */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-between gap-4 pt-2"
                >
                  <motion.button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-black text-sm px-8 py-4 rounded-sm hover:bg-[#e6b800] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 uppercase tracking-wide"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg
                          className="w-4 h-4"
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
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
