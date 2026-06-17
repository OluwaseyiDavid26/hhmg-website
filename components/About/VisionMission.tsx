import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  return (
    <section className="bg-[#1A1A1A] py-28 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#F5C400] mb-14">
          Vision &amp; Mission
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Vision Box */}
          <div className="border border-white/10 p-10 flex flex-col gap-6">
            <Eye className="text-[#F5C400]" size={32} strokeWidth={1.5} />
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
                Our Vision
              </p>
              <p className="text-white text-lg leading-relaxed">
                To ensure edifying African stories are told authentically,
                powerfully, and on our own terms.
              </p>
            </div>
          </div>

          {/* Mission Box */}
          <div className="border border-white/10 p-10 flex flex-col gap-6">
            <Target className="text-[#F5C400]" size={32} strokeWidth={1.5} />
            <div>
              <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/30 mb-4">
                Our Mission
              </p>
              <p className="text-white text-lg leading-relaxed">
                To build the creative infrastructure that enables African
                storytellers to produce, own, and share stories that are
                edifying, authentic, and theirs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
