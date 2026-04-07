import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#00723c] px-5 md:px-10 lg:px-20 py-10 md:py-14">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Logo */}
        <div className="relative h-14 w-[140px] md:h-16 md:w-[160px]">
          <Image
            src="/images/logo.png"
            alt="Sucress"
            fill
            className="object-contain brightness-0 invert"
          />
        </div>

        {/* Nav links */}
        <nav
          className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2"
          aria-label="Footer navigation"
        >
          {["Privacy Policy", "Terms of Service", "Contact Us"].map((label) => (
            <Link
              key={label}
              href="#"
              className="text-white/70 text-sm hover:text-white transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-white/50 text-sm text-center md:text-right">
          © {new Date().getFullYear()} Sucress. All rights reserved.
          <br />
          <span className="text-xs">
            These statements have not been evaluated by the Food and Drug
            Administration.
          </span>
        </p>
      </div>
    </footer>
  );
}
