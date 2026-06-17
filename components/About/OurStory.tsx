export default function OurStory() {
  return (
    <section className="bg-[#1A1A1A] py-28 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
          Our Story
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* LEFT — large cinematic statement */}
          <div className="lg:sticky lg:top-28">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-[1.15] tracking-tighter text-white">
              Africa is full of stories.{" "}
              <span className="text-white/30">
                We build what it takes to tell them.
              </span>
            </h2>

            {/* Yellow accent rule */}
            <div className="mt-10 w-12 h-[3px] bg-[#F5C400]" />
          </div>

          {/* RIGHT — exact copy from brief */}
          <div className="space-y-6 text-white/60 text-base sm:text-[1.05rem] leading-[1.85]">
            <p>
              Hand Held Media Group was founded on a simple observation: Africa
              is full of stories — but the infrastructure to tell those stories
              professionally, at scale, and on African terms has always been
              fragmented.
            </p>
            <p>
              We set out to change that. Not by doing one thing well, but by
              building a group of companies that together make great African
              content not just possible —{" "}
              <span className="text-white font-semibold">but inevitable.</span>
            </p>
            <p>
              From studios to equipment to creator platforms to original IP,
              Hand Held Media Group is the infrastructure behind the stories.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
