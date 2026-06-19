import { Metadata } from "next";
import Workwithusheader from "@/components/Work-with-us/Workwithusheader";
import AudienceSegments from "@/components/Work-with-us/AudienceSegments";

export const metadata: Metadata = {
  title: "Work With Us | Hand Held Media Group",
  description:
    "Whether you're a brand, a filmmaker, a creator, or an investor — there's a way to work with Hand Held Media Group.",
};

export default function Page() {
  return (
    <div>
      <Workwithusheader />
      <AudienceSegments />
    </div>
  );
}
