import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navigation/Navbar";
import Navbar from "@/Navigation/Navbar";
import Footer from "@/Navigation/Footer";
// import SplashScreen from "@/components/Splashscreen";
// import SplashScreen from "@/components/Splashscreen";
import SplashScreen from "@/components/SplashScreen";

// const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const display = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Hand Held Media Group — African Media Infrastructure",
  description:
    "Hand Held Media Group is a Lagos-based media holding company offering production services, equipment rental, creator development, and original African content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${display.variable} antialiased bg-[#1A1A1A] text-white`}
      >
        {/* <body className={`${inter.variable} antialiased bg-[#1A1A1A] text-white`}> */}
        <SplashScreen />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
