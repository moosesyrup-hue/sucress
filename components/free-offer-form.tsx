"use client";

import Image from "next/image";
import { useState } from "react";

export default function FreeOfferForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="free-offer"
      className="w-full bg-[#00723c] px-5 md:px-10 lg:px-20 py-16 md:py-24"
    >
      <div className="max-w-[720px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        {/* Logo */}
        <div className="relative h-16 md:h-20 w-[160px] md:w-[200px]">
          <Image
            src="/images/logo.png"
            alt="Sucress"
            fill
            className="object-contain brightness-0 invert"
          />
        </div>

        {/* Heading */}
        <div className="text-center">
          <h2 className="font-bold text-white text-2xl md:text-4xl lg:text-[46px] leading-tight tracking-tight">
            Claim Your FREE 28-Packet Supply
          </h2>
          <p className="mt-3 text-white/80 text-base md:text-lg">
            No credit card. No subscription. Free shipping. Limit one per household.
          </p>
        </div>

        {submitted ? (
          <div className="w-full bg-white/10 rounded-3xl p-8 md:p-12 text-center">
            <p className="text-white font-semibold text-xl md:text-2xl leading-snug">
              🎉 You&apos;re in! Check your inbox — your free supply is on its way.
            </p>
            <p className="mt-3 text-white/80 text-base">
              We&apos;ll reach out with shipping confirmation within 1–2 business days.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white rounded-3xl p-6 md:p-10 flex flex-col gap-5"
          >
            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="firstName"
                  className="text-[#00723c] font-medium text-sm"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Jane"
                  className="h-12 px-4 rounded-xl border border-[#00723c]/20 text-[#00723c] placeholder:text-[#00723c]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#97e674] focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="lastName"
                  className="text-[#00723c] font-medium text-sm"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="h-12 px-4 rounded-xl border border-[#00723c]/20 text-[#00723c] placeholder:text-[#00723c]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#97e674] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-[#00723c] font-medium text-sm"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className="h-12 px-4 rounded-xl border border-[#00723c]/20 text-[#00723c] placeholder:text-[#00723c]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#97e674] focus:border-transparent transition"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="address"
                className="text-[#00723c] font-medium text-sm"
              >
                Street Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                value={form.address}
                onChange={handleChange}
                placeholder="123 Main Street"
                className="h-12 px-4 rounded-xl border border-[#00723c]/20 text-[#00723c] placeholder:text-[#00723c]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#97e674] focus:border-transparent transition"
              />
            </div>

            {/* City / State / Zip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                <label
                  htmlFor="city"
                  className="text-[#00723c] font-medium text-sm"
                >
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Las Vegas"
                  className="h-12 px-4 rounded-xl border border-[#00723c]/20 text-[#00723c] placeholder:text-[#00723c]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#97e674] focus:border-transparent transition"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="state"
                  className="text-[#00723c] font-medium text-sm"
                >
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  required
                  maxLength={2}
                  value={form.state}
                  onChange={handleChange}
                  placeholder="NV"
                  className="h-12 px-4 rounded-xl border border-[#00723c]/20 text-[#00723c] placeholder:text-[#00723c]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#97e674] focus:border-transparent transition uppercase"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="zip"
                  className="text-[#00723c] font-medium text-sm"
                >
                  ZIP Code
                </label>
                <input
                  id="zip"
                  name="zip"
                  type="text"
                  required
                  pattern="[0-9]{5}"
                  value={form.zip}
                  onChange={handleChange}
                  placeholder="89101"
                  className="h-12 px-4 rounded-xl border border-[#00723c]/20 text-[#00723c] placeholder:text-[#00723c]/40 text-base focus:outline-none focus:ring-2 focus:ring-[#97e674] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 h-14 w-full bg-[#97e674] rounded-full text-[#064326] font-bold text-base md:text-lg hover:bg-[#7dc45e] transition-colors duration-200 shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              Send My Free Supply →
            </button>

            <p className="text-center text-[#00723c]/60 text-xs leading-relaxed">
              By submitting, you agree to our{" "}
              <a href="#" className="underline hover:text-[#00723c] transition-colors">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-[#00723c] transition-colors">
                Terms of Service
              </a>
              . Limit one per household. US shipping addresses only.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
