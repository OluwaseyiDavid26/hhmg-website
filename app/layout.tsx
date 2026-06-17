import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/Navigation/Navbar";
import Navbar from "@/Navigation/Navbar";
import Footer from "@/Navigation/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

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
      <body className={`${inter.variable} antialiased bg-[#1A1A1A] text-white`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
