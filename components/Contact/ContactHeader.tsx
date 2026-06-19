export default function ContactHeader() {
  return (
    <section className="relative bg-[#0D0D0D] pt-32 pb-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#F5C400] opacity-[0.05] blur-[100px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A1A1A]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="inline-flex items-center gap-2 mb-12">
          <span className="text-white/25 text-xs tracking-widest uppercase">
            HHMG
          </span>
          <span className="text-white/15 text-xs">/</span>
          <span className="text-[#F5C400] text-xs tracking-widest uppercase font-semibold">
            Contact
          </span>
        </div>

        {/* Eyebrow */}
        {/* <div className="inline-flex items-center gap-3 mb-7">
          <div className="w-8 h-[1px] bg-[#F5C400]" />
          <span className="text-[#F5C400] text-[10px] font-bold tracking-[0.35em] uppercase">
            Let's Talk
          </span>
        </div> */}

        {/* Headline — exact from brief */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6">
          Get in{" "}
          <span
            className="text-[#F5C400]"
            style={{ textShadow: "0 0 60px rgba(245,196,0,0.2)" }}
          >
            Touch.
          </span>
        </h1>

        <p className="text-white/50 text-lg sm:text-xl leading-relaxed max-w-xl">
          Whether you're a brand, filmmaker, creator, or investor — we want to
          hear from you.
        </p>
      </div>
    </section>
  );
}
