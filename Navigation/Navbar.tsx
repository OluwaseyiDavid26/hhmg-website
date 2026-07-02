"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Our Companies",
    href: "/companies",
    dropdown: [
      { label: "HH Media Studios", href: "/companies#studios" },
      { label: "HH Media Rentals", href: "/companies#rentals" },
      { label: "HH Creators Platform", href: "/companies#creators" },
      { label: "HH Production Co.", href: "/companies#production" },
    ],
  },
  { label: "Restored", href: "/restored" },
  { label: "Work With Us", href: "/work-with-us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle anchor navigation — goes to page then scrolls to section
  const handleAnchorClick = (href: string) => {
    setDropdownOpen(false);
    setMenuOpen(false);

    const [path, hash] = href.split("#");

    if (window.location.pathname === path) {
      // Already on the page — just scroll
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Navigate to page then scroll after load
      router.push(href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1A1A1A] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon-black-yellow.png"
            alt="Hand Held Media Group"
            width={48}
            height={48}
            className="w-11 h-11 object-contain"
            priority
          />
          {/* <Image
            src="/icon-black-yellow.png"
            alt="Hand Held Media Group"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
            priority
          /> */}
          {/* <span className="text-white font-semibold text-sm tracking-wide hidden sm:block">
            Hand Held Media Group
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-white/80 hover:text-white text-sm transition-colors flex items-center gap-1"
                >
                  {link.label}
                  <svg
                    className={`w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#111111] border border-white/10 rounded-lg overflow-hidden shadow-xl">
                    {/* Link to full companies page */}
                    <Link
                      href="/companies"
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-3 text-xs text-white/40 hover:text-white/70 hover:bg-white/5 transition-colors border-b border-white/10 font-medium tracking-widest uppercase"
                    >
                      All Companies
                    </Link>
                    {link.dropdown.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleAnchorClick(item.href)}
                        className="w-full text-left block px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center bg-[#F5C400] text-[#1A1A1A] text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#e6b800] transition-colors"
          >
            Get in Touch
          </Link>

          <button
            className="lg:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#111111] border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 text-white/80 hover:text-white text-sm border-b border-white/5 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
              {link.dropdown && (
                <div className="pl-4 flex flex-col gap-0">
                  {link.dropdown.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleAnchorClick(item.href)}
                      className="w-full text-left block py-2 text-white/50 hover:text-white/80 text-xs transition-colors"
                    >
                      — {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-3 inline-flex justify-center bg-[#F5C400] text-[#1A1A1A] text-sm font-semibold px-4 py-3 rounded-md hover:bg-[#e6b800] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
