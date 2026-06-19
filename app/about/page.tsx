import AboutHeader from "@/components/About/AboutHeader";
import OurStory from "@/components/About/OurStory";
import VisionMission from "@/components/About/VisionMission";
import CoreValues from "@/components/About/CoreValues";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hand Held Media Group",
  description:
    "Learn about the mission, vision, and the team behind Hand Held Media Group.",
};

export default function Page() {
  return (
    <div>
      <AboutHeader />
      <OurStory />
      <VisionMission />
      <CoreValues />
    </div>
  );
}
