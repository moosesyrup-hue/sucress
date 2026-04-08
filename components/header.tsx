"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm w-full">
      {/* Outer padding matches all content sections exactly */}
      <div className="px-5 md:px-10 lg:px-20">
        <div className="max-w-[1440px] mx-auto">
          {/* Desktop nav */}
          <div className="hidden md:grid grid-cols-3 items-center py-2.5">
            <p className="font-medium italic text-[#00723c] text-sm lg:text-[15px] tracking-tight capitalize">
              Non-Caloric Sweetener
            </p>
            <div className="flex justify-center">
              <Link href="/">
                <div className="relative h-[72px] w-[180px] lg:h-[80px] lg:w-[200px]">
                  <Image
                    src="/images/logo.png"
                    alt="Sucress logo"
                    fill
                    sizes="200px"
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>
            <div className="flex justify-end">
              <a
                href="#free-offer"
                className="inline-flex items-center justify-center h-[46px] px-8 border border-[#00723c] rounded-full text-[#00723c] font-medium text-sm lg:text-[15px] whitespace-nowrap hover:bg-[#00723c] hover:text-white transition-colors duration-200"
              >
                Free 2-Week Supply
              </a>
            </div>
          </div>

          {/* Divider line — matches Figma */}
          <div className="hidden md:block h-px bg-[#00723c]/10" />

          {/* Mobile nav */}
          <div className="flex md:hidden items-center justify-between py-3">
            <Link href="/">
              <div className="relative h-[54px] w-[136px]">
                <Image
                  src="/images/logo.png"
                  alt="Sucress logo"
                  fill
                  sizes="136px"
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <button
              className="flex flex-col gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`block w-6 h-0.5 bg-[#00723c] transition-transform duration-200 origin-center ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#00723c] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-[#00723c] transition-transform duration-200 origin-center ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>

          {menuOpen && (
            <div className="md:hidden pb-5 flex flex-col gap-3 border-t border-[#00723c]/10 pt-4">
              <p className="font-medium italic text-[#00723c] text-sm text-center">
                Non-Caloric Sweetener
              </p>
              <a
                href="#free-offer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center h-11 px-6 border border-[#00723c] rounded-full text-[#00723c] font-medium text-sm hover:bg-[#00723c] hover:text-white transition-colors duration-200"
              >
                Get Your Free Supply
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
