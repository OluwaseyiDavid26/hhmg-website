import Hero from "@/components/Home/Hero";
import WhoWeAre from "@/components/Home/WhoWeAre";
import SubsidiaryCards from "@/components/Home/SubsidiaryCards";
// import StatsBar from "@/components/Home/StatsBar";
// import CTAStrip from "@/components/Home/CTAStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <SubsidiaryCards />
      {/* <StatsBar />
      <CTAStrip /> */}
    </>
  );
}
