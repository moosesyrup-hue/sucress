"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

const TRUST_POINTS = [
  "No credit card required — ever",
  "No subscription or commitment",
  "Free shipping, no handling fees",
  "Limit one per household",
];

const US_STATES = [
  ["AL", "Alabama"], ["AK", "Alaska"], ["AZ", "Arizona"], ["AR", "Arkansas"],
  ["CA", "California"], ["CO", "Colorado"], ["CT", "Connecticut"], ["DE", "Delaware"],
  ["DC", "D.C."], ["FL", "Florida"], ["GA", "Georgia"], ["HI", "Hawaii"],
  ["ID", "Idaho"], ["IL", "Illinois"], ["IN", "Indiana"], ["IA", "Iowa"],
  ["KS", "Kansas"], ["KY", "Kentucky"], ["LA", "Louisiana"], ["ME", "Maine"],
  ["MD", "Maryland"], ["MA", "Massachusetts"], ["MI", "Michigan"], ["MN", "Minnesota"],
  ["MS", "Mississippi"], ["MO", "Missouri"], ["MT", "Montana"], ["NE", "Nebraska"],
  ["NV", "Nevada"], ["NH", "New Hampshire"], ["NJ", "New Jersey"], ["NM", "New Mexico"],
  ["NY", "New York"], ["NC", "North Carolina"], ["ND", "North Dakota"], ["OH", "Ohio"],
  ["OK", "Oklahoma"], ["OR", "Oregon"], ["PA", "Pennsylvania"], ["RI", "Rhode Island"],
  ["SC", "South Carolina"], ["SD", "South Dakota"], ["TN", "Tennessee"], ["TX", "Texas"],
  ["UT", "Utah"], ["VT", "Vermont"], ["VA", "Virginia"], ["WA", "Washington"],
  ["WV", "West Virginia"], ["WI", "Wisconsin"], ["WY", "Wyoming"],
];

const inputClass = "h-12 px-4 rounded-xl border-2 border-[#00723c]/15 text-[#00723c] placeholder:text-[#00723c]/30 text-base focus:outline-none focus:border-[#97e674] transition-colors bg-[#fafdf8] w-full";
const labelClass = "text-[#00723c] font-semibold text-xs uppercase tracking-wider";

export default function FreeOfferForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "",
    address: "", city: "", state: "", zip: "",
    password: "", confirmPassword: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="free-offer" className="w-full bg-[#00723c] relative overflow-hidden">
      {/* Subtle radial glow at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(151,230,116,0.13) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative w-full px-5 md:px-10 lg:px-20 py-20 md:py-28">
        <div className="max-w-[1440px] mx-auto">

          {/* items-stretch so both columns are the same height */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.68fr] gap-10 lg:gap-16 items-stretch">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              className="flex flex-col gap-7 h-full"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.75, ease }}
            >
              {/* Headline + sub */}
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-white text-[28px] md:text-[36px] lg:text-[42px] leading-tight tracking-[-0.02em]">
                  Claim Your Free
                  <br />
                  14-Packet Supply
                </h2>
                <p className="text-white/65 text-[15px] md:text-[16px] leading-relaxed max-w-[380px]">
                  Try the only sugar replacement that&apos;s truly sugar-free —
                  glycine and non-GMO stevia, nothing else.
                </p>
              </div>

              {/* Trust list */}
              <ul className="flex flex-col gap-2.5">
                {TRUST_POINTS.map((point, i) => (
                  <motion.li
                    key={point}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, ease, delay: 0.15 + i * 0.07 }}
                  >
                    <span className="flex shrink-0 items-center justify-center w-[22px] h-[22px] rounded-full bg-[#97e674]">
                      <svg width="11" height="9" viewBox="0 0 11 9" fill="none" aria-hidden="true">
                        <path d="M1 4.5L4 7.5L10 1" stroke="#064326" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-white/80 text-[14px] md:text-[15px]">{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Image — flex-1 + min-h-0 fills remaining column height exactly */}
              <motion.div
                className="relative flex-1 min-h-0 rounded-2xl overflow-hidden"
                style={{ minHeight: "200px" }}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
              >
                <Image
                  src="/images/hero-center-coffee.png"
                  alt="Hand pouring Sucress into a green coffee cup"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
                {/* Subtle bottom vignette for polish */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,114,60,0.18) 0%, transparent 40%)" }}
                  aria-hidden="true"
                />
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN: Form ── */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.75, ease, delay: 0.08 }}
            >
              {submitted ? (
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-10 md:p-14 text-center flex flex-col gap-4 items-center h-full justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#97e674] flex items-center justify-center">
                    <svg width="28" height="24" viewBox="0 0 28 24" fill="none" aria-hidden="true">
                      <path d="M2 12L10 20L26 2" stroke="#064326" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-white font-bold text-2xl md:text-3xl">You&apos;re on the list!</h3>
                  <p className="text-white/70 text-base md:text-lg leading-relaxed">
                    Your free supply is on its way. We&apos;ll send a shipping confirmation within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 md:p-10 flex flex-col gap-5 h-full">

                  <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-[#00723c] text-xl md:text-2xl tracking-tight">Where should we ship it?</h3>
                    <p className="text-[#00723c]/55 text-sm">US addresses only. One per household.</p>
                  </div>

                  {/* Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="firstName" className={labelClass}>First Name</label>
                      <input id="firstName" name="firstName" type="text" required value={form.firstName} onChange={handleChange} placeholder="Jane" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lastName" className={labelClass}>Last Name</label>
                      <input id="lastName" name="lastName" type="text" required value={form.lastName} onChange={handleChange} placeholder="Doe" className={inputClass} />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className={labelClass}>Email Address</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@example.com" className={inputClass} />
                  </div>

                  {/* Address */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="address" className={labelClass}>Street Address</label>
                    <input id="address" name="address" type="text" required value={form.address} onChange={handleChange} placeholder="123 Main Street" className={inputClass} />
                  </div>

                  {/* City / State / ZIP */}
                  <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-2 flex flex-col gap-1.5">
                      <label htmlFor="city" className={labelClass}>City</label>
                      <input id="city" name="city" type="text" required value={form.city} onChange={handleChange} placeholder="Las Vegas" className={inputClass} />
                    </div>
                    <div className="col-span-2 flex flex-col gap-1.5">
                      <label htmlFor="state" className={labelClass}>State</label>
                      <div className="relative">
                        <select
                          id="state" name="state" required value={form.state} onChange={handleChange}
                          className="h-12 pl-4 pr-10 rounded-xl border-2 border-[#00723c]/15 text-[#00723c] text-base focus:outline-none focus:border-[#97e674] transition-colors bg-[#fafdf8] w-full appearance-none"
                        >
                          <option value="" disabled>State</option>
                          {US_STATES.map(([abbr, name]) => (
                            <option key={abbr} value={abbr}>{abbr} — {name}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true">
                            <path d="M1 1L7 7L13 1" stroke="#00723c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-1.5">
                      <label htmlFor="zip" className={labelClass}>ZIP</label>
                      <input id="zip" name="zip" type="text" required inputMode="numeric" pattern="[0-9]{5}" value={form.zip} onChange={handleChange} placeholder="89101" className={inputClass} />
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center gap-3 pt-1">
                    <div className="flex-1 h-px bg-[#00723c]/10" />
                    <span className="text-[#00723c] font-semibold text-xs uppercase tracking-wider whitespace-nowrap">Create Your Account</span>
                    <div className="flex-1 h-px bg-[#00723c]/10" />
                  </div>

                  <p className="text-[#00723c]/50 text-sm leading-relaxed -mt-1">
                    Track your shipment and reorder with one click. Your email above will be your username.
                  </p>

                  {/* Password */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="password" className={labelClass}>Password</label>
                      <input id="password" name="password" type="password" required value={form.password} onChange={handleChange} placeholder="Min. 8 characters" minLength={8} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="confirmPassword" className={labelClass}>Confirm Password</label>
                      <input id="confirmPassword" name="confirmPassword" type="password" required value={form.confirmPassword} onChange={handleChange} placeholder="Repeat password" minLength={8} className={inputClass} />
                    </div>
                  </div>

                  {/* Spacer pushes button to bottom */}
                  <div className="flex-1" />

                  <button
                    type="submit"
                    className="h-14 w-full bg-[#97e674] rounded-full text-[#064326] font-bold text-base md:text-lg hover:bg-[#7dc45e] active:scale-[0.98] transition-all duration-150 tracking-tight"
                  >
                    Send My Free Supply →
                  </button>

                  <p className="text-center text-[#00723c]/40 text-xs leading-relaxed">
                    By submitting, you agree to our{" "}
                    <Link href="#" className="underline underline-offset-2 hover:text-[#00723c]/65 transition-colors">Privacy Policy</Link>{" "}
                    and{" "}
                    <Link href="#" className="underline underline-offset-2 hover:text-[#00723c]/65 transition-colors">Terms of Service</Link>.
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
