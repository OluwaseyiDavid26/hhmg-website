export default function RestoredHeader() {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden px-6 pt-36 pb-20 sm:pt-44 sm:pb-28">
      {/* Spotlight glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[40rem] rounded-full bg-[#F5C400]/[0.08] blur-[120px]"
        aria-hidden="true"
      />

      {/* Vertical spine label */}
      <div
        className="hidden lg:block absolute left-10 top-1/2 -translate-y-1/2 origin-center -rotate-90 text-white/25 text-[11px] font-medium tracking-[0.3em] uppercase whitespace-nowrap"
        aria-hidden="true"
      >
        Hand Held Media &amp; Production Co.
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        {/* In production badge */}
        <div className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-[#F5C400]/25 bg-[#F5C400]/[0.05]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#F5C400] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F5C400]" />
          </span>
          <span className="text-[#F5C400] text-[11px] font-semibold tracking-[0.22em] uppercase">
            Flagship Production
          </span>
        </div>

        <h1 className="font-serif text-6xl sm:text-7xl md:text-[6.5rem] text-white tracking-tight leading-none">
          Restored
        </h1>

        <div className="w-16 h-[2px] bg-[#F5C400] mx-auto mt-7 mb-7" />

        <p className="text-white/55 text-base sm:text-lg tracking-[0.04em] uppercase mb-2">
          A TV Testimony Series
        </p>
        <p className="text-white/85 text-xl sm:text-2xl font-light leading-relaxed">
          Real Lives. Real Transformation. On Screen.
        </p>
      </div>

      {/* Bottom divider */}
      <div className="relative mt-20 h-px max-w-3xl mx-auto bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
