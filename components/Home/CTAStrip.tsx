import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="bg-[#1A1A1A] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#111111]">
          {/* Background accents */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Yellow glow left */}
            <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-[#F5C400] opacity-[0.07] blur-[80px]" />
            {/* Yellow glow right */}
            <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#F5C400] opacity-[0.05] blur-[80px]" />
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5C400]/50 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 px-10 sm:px-16 py-16">
            {/* Left — text */}
            <div className="text-center lg:text-left max-w-xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-6 h-[2px] bg-[#F5C400]" />
                <span className="text-[#F5C400] text-xs font-semibold tracking-[0.25em] uppercase">
                  Let's Work Together
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                Ready to Create{" "}
                <span className="text-[#F5C400]">Something?</span>
              </h2>

              {/* Sub-copy */}
              <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                Whether you need a production partner, a camera kit, or a
                platform to grow — we have what you need.
              </p>
            </div>

            {/* Right — CTAs */}
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 flex-shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F5C400] text-[#1A1A1A] font-bold text-sm px-8 py-4 rounded-md hover:bg-[#e6b800] transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
              >
                Get in Touch
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
              </Link>

              <Link
                href="/work-with-us"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white text-sm font-medium px-8 py-4 rounded-md hover:border-[#F5C400]/50 hover:text-[#F5C400] transition-all duration-200 whitespace-nowrap"
              >
                See How We Work
              </Link>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F5C400]/30 to-transparent" />
        </div>

        {/* Below card — quick links */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { label: "HH Media Studios", href: "/companies#studios" },
            { label: "HH Media Rentals", href: "/companies#rentals" },
            { label: "HH Creators Platform", href: "/companies#creators" },
            { label: "HH Production Co.", href: "/companies#production" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/30 text-xs hover:text-white/60 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
