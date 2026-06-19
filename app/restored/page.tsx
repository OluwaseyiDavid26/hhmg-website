import { Metadata } from "next";
import Restoredheader from "@/components/Restored/Restoredheader";
import Abouttheshow from "@/components/Restored/Abouttheshow";

export const metadata: Metadata = {
  title: "Restored | Hand Held Media Group",
  description:
    "Learn about the mission, vision, and the team behind Hand Held Media Group.",
};

export default function Page() {
  return (
    <div>
      <Restoredheader />
      <Abouttheshow />
    </div>
  );
}
