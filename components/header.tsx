"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm w-full border-b border-[#00723c]/10">
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex items-center justify-between py-3 md:py-2">
          {/* Left: tagline (hidden on mobile) */}
          <p className="hidden md:block font-medium italic text-[#00723c] text-sm lg:text-base tracking-tight capitalize shrink-0">
            Non-Caloric Sweetener
          </p>

          {/* Center: logo */}
          <Link href="/" className="flex items-center mx-auto md:mx-0">
            <div className="relative h-[60px] md:h-[72px] w-[150px] md:w-[180px]">
              <Image
                src="/images/logo.png"
                alt="Sucress logo"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </Link>

          {/* Right: CTA (hidden on mobile) */}
          <Link
            href="#free-offer"
            className="hidden md:flex items-center justify-center h-[46px] px-7 border border-[#00723c] rounded-full text-[#00723c] font-medium text-sm lg:text-base whitespace-nowrap hover:bg-[#00723c] hover:text-white transition-colors duration-200 shrink-0"
          >
            Free Month Supply
          </Link>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[#00723c] transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#00723c] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#00723c] transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 border-t border-[#00723c]/10 pt-3">
            <p className="font-medium italic text-[#00723c] text-sm text-center">
              Non-Caloric Sweetener
            </p>
            <Link
              href="#free-offer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center h-11 px-6 border border-[#00723c] rounded-full text-[#00723c] font-medium text-sm hover:bg-[#00723c] hover:text-white transition-colors duration-200"
            >
              Get Your Free Supply
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
