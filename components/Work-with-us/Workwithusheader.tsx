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
