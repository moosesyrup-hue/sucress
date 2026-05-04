"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -60px 0px" };

type AddressStatus = "idle" | "claimed";

// ── Demo simulation: household-dedup check ───────────────────────────────────
function mockCheckAddress(zip: string, address: string): Promise<"available" | "claimed"> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(zip === "00000" || address.toLowerCase().includes("123 test")
        ? "claimed" : "available");
    }, 700)
  );
}
// ─────────────────────────────────────────────────────────────────────────────

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

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function FreeOfferForm() {
  const [submitted, setSubmitted] = useState(false);
  const [addressStatus, setAddressStatus] = useState<AddressStatus>("idle");
  const [addressChecking, setAddressChecking] = useState(false);
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanNativeShare(true);
    }
  }, []);

  const [form, setForm] = useState({
    firstName: "", lastName: "",
    email: "", phone: "",
    address: "", city: "", state: "", zip: "",
    hearAbout: "",
    website: "", // honeypot — must remain empty; bots fill it, server rejects
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    if (name === "phone") {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
    if (submitError) setSubmitError("");
  }

  // Address dedup check on ZIP blur — early feedback before submit
  const handleZipBlur = useCallback(async () => {
    if (!form.zip || form.zip.length < 5 || !form.address) return;
    setAddressChecking(true);
    const result = await mockCheckAddress(form.zip, form.address);
    setAddressChecking(false);
    if (result === "claimed") setAddressStatus("claimed");
  }, [form.zip, form.address]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Honeypot — if filled, it's a bot. Silently reject without telling them.
    if (form.website) {
      // eslint-disable-next-line no-console
      console.log("[honeypot] bot detected — silently rejected");
      return;
    }

    const { firstName, lastName, email, phone, address, city, state, zip, hearAbout } = form;

    if (!firstName || !lastName || !email || !phone || !address || !city || !state || !zip || !hearAbout) {
      setSubmitError("Please fill in all fields before continuing.");
      return;
    }
    if (!email.includes("@")) {
      setSubmitError("Please enter a valid email address.");
      return;
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      setSubmitError("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSubmitting(true);

    setAddressChecking(true);
    const addressResult = await mockCheckAddress(zip, address);
    setAddressChecking(false);
    if (addressResult === "claimed") {
      setAddressStatus("claimed");
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setSubmitted(true);
  }, [form]);

  function handleCopyCode() {
    navigator.clipboard.writeText("SUCRESS10").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

  // ── Referral / share helpers ────────────────────────────────────────────────
  const REFERRAL_URL = "https://www.procapslabs.com/sucress";
  const REFERRAL_PITCH = "I just got a free 14-day supply of Sucress — truly sugar-free, only glycine and stevia. They're sending one to every household. Here's the link if you want yours:";

  function handleShareEmail() {
    const subject = encodeURIComponent("Free Sucress packets — thought of you");
    const body = encodeURIComponent(`${REFERRAL_PITCH}\n\n${REFERRAL_URL}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  function handleShareSMS() {
    const body = encodeURIComponent(`${REFERRAL_PITCH} ${REFERRAL_URL}`);
    window.location.href = `sms:?&body=${body}`;
  }

  function handleCopyLink() {
    navigator.clipboard.writeText(REFERRAL_URL).then(() => {
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
    });
  }

  async function handleNativeShare() {
    try {
      await navigator.share({
        title: "Free Sucress packets",
        text: REFERRAL_PITCH,
        url: REFERRAL_URL,
      });
    } catch {
      // user cancelled — no-op
    }
  }

  const isClaimed = addressStatus === "claimed";

  return (
    <section id="free-offer" className="w-full bg-[#00723c] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(151,230,116,0.13) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative w-full px-5 md:px-10 lg:px-20 py-20 md:py-28 pb-0">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.68fr] gap-10 lg:gap-16 items-start">

            {/* ── LEFT COLUMN ── */}
            <motion.div
              className="flex flex-col gap-7"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.75, ease }}
            >
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-white text-[28px] md:text-[36px] lg:text-[42px] leading-tight tracking-[-0.02em]">
                  Claim Your Free
                  <br />
                  14-Packet Supply
                </h2>
                <p className="text-white/65 text-[15px] md:text-[16px] leading-relaxed max-w-[380px]">
                  Try the only sugar replacement that&apos;s truly sugar-free —
                  a clean, effective stevia sugar substitute made with glycine
                  and non-GMO pure stevia extract, nothing else.
                </p>
              </div>

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

              <motion.div
                className="relative hidden lg:block h-[420px]"
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease, delay: 0.1 }}
              >
                <Image
                  src="/images/sucress-packets-coffee.png"
                  alt="Sucress packets next to a cup of coffee"
                  fill
                  unoptimized
                  className="object-contain object-bottom scale-[1.41] translate-y-[14%]"
                  sizes="38vw"
                />
              </motion.div>
            </motion.div>

            {/* ── RIGHT COLUMN ── */}
            <motion.div
              className="w-full flex flex-col"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.75, ease, delay: 0.08 }}
            >
              <AnimatePresence mode="wait" initial={false}>

                {/* ── SUCCESS STATE ── */}
                {submitted && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease }}
                    className="bg-white rounded-3xl p-8 md:p-10 flex flex-col gap-6 flex-1"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#97e674] flex items-center justify-center">
                          <svg width="26" height="22" viewBox="0 0 26 22" fill="none" aria-hidden="true">
                            <path d="M2 11L9 18L24 2" stroke="#064326" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-[#00723c]/50 text-xs font-semibold uppercase tracking-wider mb-0.5">Order Confirmed</p>
                          <h3 className="text-[#00723c] font-bold text-[22px] md:text-[26px] leading-tight tracking-[-0.02em]">
                            You&apos;re all set{form.firstName ? `, ${form.firstName}` : ""}!
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-[#fafdf8] rounded-2xl px-4 py-3 border border-[#00723c]/15">
                        <div className="shrink-0 w-9 h-9 rounded-xl bg-[#00723c]/8 flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M3 8h14M3 8V16a1 1 0 001 1h12a1 1 0 001-1V8M3 8l1.5-5h11L17 8" stroke="#00723c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#00723c] font-semibold text-[13px] leading-tight">14-Packet Sucress Supply</span>
                          <span className="text-[#00723c]/50 text-[12px]">
                            Shipping to {form.city && form.state ? `${form.city}, ${form.state}` : "your address"} · Free standard shipping
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="h-px bg-[#00723c]/8" />

                    <div className="flex flex-col">
                      <p className={`${labelClass} mb-4`}>What happens next</p>
                      {[
                        {
                          icon: <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 4h14a1 1 0 011 1v10a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="#00723c" strokeWidth="1.7"/><path d="M2 6l8 6 8-6" stroke="#00723c" strokeWidth="1.7" strokeLinecap="round"/></svg>,
                          label: "Confirmation email",
                          detail: "Check your inbox — arriving within a few minutes",
                          timing: "Now",
                        },
                        {
                          icon: <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="2" y="7" width="16" height="11" rx="1.5" stroke="#00723c" strokeWidth="1.7"/><path d="M6 7V5a4 4 0 018 0v2" stroke="#00723c" strokeWidth="1.7" strokeLinecap="round"/></svg>,
                          label: "Your order ships",
                          detail: "We'll send a tracking number to your email",
                          timing: "1–2 days",
                        },
                        {
                          icon: <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M3 10l7-7 7 7v8a1 1 0 01-1 1H4a1 1 0 01-1-1v-8z" stroke="#00723c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 19v-6h4v6" stroke="#00723c" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                          label: "Arrives at your door",
                          detail: "Free standard shipping, no signature required",
                          timing: "5–7 days",
                        },
                      ].map((step, i, arr) => (
                        <div key={step.label} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <div className="w-9 h-9 rounded-xl bg-[#fafdf8] border border-[#00723c]/15 flex items-center justify-center shrink-0">
                              {step.icon}
                            </div>
                            {i < arr.length - 1 && (
                              <div className="w-px flex-1 bg-[#00723c]/10 my-1.5" style={{ minHeight: "20px" }} />
                            )}
                          </div>
                          <div className="pb-4 flex-1 flex items-start justify-between gap-2">
                            <div>
                              <p className="text-[#00723c] font-semibold text-[14px] leading-tight">{step.label}</p>
                              <p className="text-[#00723c]/50 text-[12px] mt-0.5 leading-snug">{step.detail}</p>
                            </div>
                            <span className="shrink-0 text-[11px] font-semibold text-[#00723c]/40 bg-[#fafdf8] px-2 py-1 rounded-lg border border-[#00723c]/15 mt-0.5">
                              {step.timing}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="h-px bg-[#00723c]/8" />

                    {/* ── Founder note from Andrew ── */}
                    <button
                      type="button"
                      className="group flex items-start gap-4 bg-[#fafdf8] rounded-2xl p-4 border border-[#00723c]/15 hover:border-[#00723c]/30 transition-colors duration-200 text-left"
                    >
                      <div className="relative shrink-0 w-[96px] aspect-square rounded-xl overflow-hidden">
                        <Image
                          src="/images/video-thumbnail-v2.png"
                          alt="Andrew Lessman"
                          fill
                          unoptimized
                          className="object-cover"
                          sizes="96px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                              <path d="M3 2L11 7L3 12V2Z" fill="#00723c"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 pt-0.5">
                        <p className="text-[#00723c]/40 text-[10px] font-semibold uppercase tracking-wider mb-1">A note from Andrew</p>
                        <p className="text-[#00723c] text-[14px] leading-snug">
                          Thanks for trying Sucress. While you wait, I&apos;d love to share why I made it.
                        </p>
                        <p className="text-[#00723c]/50 text-[11px] mt-1.5 group-hover:text-[#00723c] transition-colors duration-150">
                          Watch (3 min) →
                        </p>
                      </div>
                    </button>

                    <div className="flex items-start gap-3 bg-[#fafdf8] rounded-2xl px-4 py-3.5 border border-[#00723c]/15">
                      <div className="shrink-0 w-9 h-9 rounded-xl bg-[#00723c] flex items-center justify-center mt-0.5">
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                          <circle cx="10" cy="7" r="3.5" stroke="white" strokeWidth="1.7"/>
                          <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="white" strokeWidth="1.7" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-[#00723c] font-semibold text-[13px] leading-tight">Your ProCaps account</p>
                        <p className="text-[#00723c]/50 text-[12px] mt-0.5 leading-snug">Track your order, reorder Sucress, and shop more from Andrew Lessman anytime at ProCapsLabs.com.</p>
                        <a href="https://www.procapslabs.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#00723c] font-semibold text-[12px] mt-2 hover:underline">
                          Go to my account →
                        </a>
                      </div>
                    </div>

                    {/* ── Spread the word / referral ── */}
                    <div className="flex flex-col gap-3.5 rounded-2xl p-5 border-2 border-[#97e674]/40" style={{ background: "linear-gradient(135deg, #effae9 0%, #fafdf8 100%)" }}>
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-9 h-9 rounded-xl bg-[#97e674] flex items-center justify-center">
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M14 5l-4 5-4-5M14 11l-4 5-4-5" stroke="#064326" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 10 10)"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-[#00723c] font-bold text-[14px] leading-tight">Spread the word</p>
                          <p className="text-[#00723c]/60 text-[12px] mt-0.5 leading-snug">Send a friend their free supply too. They get a 14-packet trial — you get our thanks.</p>
                        </div>
                      </div>
                      {canNativeShare ? (
                        <button
                          type="button"
                          onClick={handleNativeShare}
                          className="flex items-center justify-center gap-2 h-12 rounded-xl bg-[#00723c] text-white hover:bg-[#005a2f] active:scale-[0.98] transition-all duration-150 text-[14px] font-semibold tracking-tight"
                        >
                          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M10 2v9M6.5 5.5L10 2l3.5 3.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M4 11v5a2 2 0 002 2h8a2 2 0 002-2v-5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                          </svg>
                          Share with a friend
                        </button>
                      ) : (
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          type="button"
                          onClick={handleShareEmail}
                          className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-white border border-[#00723c]/15 text-[#00723c] hover:border-[#00723c]/35 hover:bg-[#fafdf8] active:scale-[0.97] transition-all duration-150 text-[12px] font-semibold"
                        >
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="#00723c" strokeWidth="1.6"/>
                            <path d="M2.5 6l7.5 5.5L17.5 6" stroke="#00723c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          Email
                        </button>
                        <button
                          type="button"
                          onClick={handleShareSMS}
                          className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-white border border-[#00723c]/15 text-[#00723c] hover:border-[#00723c]/35 hover:bg-[#fafdf8] active:scale-[0.97] transition-all duration-150 text-[12px] font-semibold"
                        >
                          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v7a2 2 0 01-2 2h-3l-3 3v-3H5a2 2 0 01-2-2V5z" stroke="#00723c" strokeWidth="1.6" strokeLinejoin="round"/>
                          </svg>
                          Text
                        </button>
                        <button
                          type="button"
                          onClick={handleCopyLink}
                          className="flex items-center justify-center gap-1.5 h-10 rounded-xl bg-white border border-[#00723c]/15 text-[#00723c] hover:border-[#00723c]/35 hover:bg-[#fafdf8] active:scale-[0.97] transition-all duration-150 text-[12px] font-semibold"
                        >
                          <AnimatePresence mode="wait">
                            {linkCopied ? (
                              <motion.span key="copied" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                  <path d="M2 8L6 12L14 4" stroke="#00723c" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Copied
                              </motion.span>
                            ) : (
                              <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} className="flex items-center gap-1.5">
                                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                  <path d="M8 4l5 5-5 5M3 9h10" stroke="#00723c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 9 9)"/>
                                  <path d="M11 7L7 11M9 5h4v4M5 9v4h4" stroke="#00723c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Copy link
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* ── ADDRESS CLAIMED DENIAL ── */}
                {!submitted && isClaimed && (
                  <motion.div
                    key="claimed"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease }}
                    className="bg-white rounded-3xl p-8 md:p-10 flex flex-col gap-6 flex-1"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#fafdf8] border border-[#00723c]/15 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle cx="12" cy="12" r="9" stroke="#00723c" strokeWidth="1.8"/>
                          <path d="M12 8v4" stroke="#00723c" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="12" cy="15.5" r="0.9" fill="#00723c"/>
                        </svg>
                      </div>

                      <div className="flex flex-col gap-3">
                        <div className="inline-flex items-center gap-2 self-start bg-[#fafdf8] border border-[#00723c]/15 rounded-full px-3 py-1.5">
                          <svg width="12" height="12" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M10 2C7.24 2 5 4.24 5 7c0 4.25 5 11 5 11s5-6.75 5-11c0-2.76-2.24-5-5-5z" stroke="#00723c" strokeWidth="1.7" strokeLinejoin="round"/>
                            <circle cx="10" cy="7" r="1.5" stroke="#00723c" strokeWidth="1.5"/>
                          </svg>
                          <span className="text-[#00723c] text-[12px] font-medium">
                            {form.city && form.state ? `${form.city}, ${form.state}` : "Your address"}
                          </span>
                        </div>
                        <h3 className="text-[#00723c] text-[24px] md:text-[28px] leading-tight tracking-[-0.02em]" style={{ fontFamily: "var(--font-stix)" }}>
                          This address has already<br />
                          <em className="italic font-normal">received a free supply.</em>
                        </h3>
                        <p className="text-[#00723c]/60 text-[15px] leading-relaxed">
                          This offer is limited to one per household. It looks like a free supply was already sent to {form.city && form.state ? `${form.city}, ${form.state}` : "your address"} — we hope you&apos;re loving it.
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-[#00723c]/8" />

                    <div className="flex flex-col gap-3">
                      <p className={labelClass}>Your exclusive 10% off</p>
                      <div className="flex items-stretch gap-3">
                        <div className="flex-1 flex items-center justify-center rounded-2xl border-2 border-dashed border-[#00723c]/25 bg-[#fafdf8] py-4 px-5">
                          <span className="text-[#00723c] text-[22px] md:text-[26px] font-bold tracking-[0.12em]" style={{ fontFamily: "var(--font-stix)" }}>
                            SUCRESS10
                          </span>
                        </div>
                        <button
                          onClick={handleCopyCode}
                          className="shrink-0 flex flex-col items-center justify-center gap-1 w-[72px] rounded-2xl bg-[#00723c] text-white hover:bg-[#005a2f] active:scale-[0.97] transition-all duration-150 text-[11px] font-semibold tracking-wide"
                        >
                          <AnimatePresence mode="wait">
                            {copied ? (
                              <motion.span key="copied" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="flex flex-col items-center gap-1">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M2 8L6 12L14 4" stroke="#97e674" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                Copied!
                              </motion.span>
                            ) : (
                              <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="flex flex-col items-center gap-1">
                                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2" stroke="white" strokeWidth="1.8"/><path d="M13 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" stroke="white" strokeWidth="1.8" strokeLinecap="round"/></svg>
                                Copy
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </button>
                      </div>
                      <p className="text-[#00723c]/40 text-[12px]">Apply at checkout on ProCapsLabs.com</p>
                    </div>

                    <a
                      href="https://www.procapslabs.com/Products/Sucress-Stevia-Non-Caloric-Sweetener/301430/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 h-14 w-full bg-[#97e674] hover:bg-[#7dc45e] text-[#064326] font-bold text-[15px] rounded-full active:scale-[0.98] transition-all duration-150 tracking-tight"
                    >
                      Shop Sucress at ProCapsLabs.com
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2 7H12M8 3L12 7L8 11" stroke="#064326" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-[#00723c]/8" />
                      <span className="text-[#00723c]/40 text-[11px] uppercase tracking-wider font-medium whitespace-nowrap">or reach us directly</span>
                      <div className="flex-1 h-px bg-[#00723c]/8" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <a href="tel:18008001200" className="flex-1 flex sm:flex-col items-center sm:justify-center gap-4 sm:gap-2 px-5 py-3.5 sm:py-5 rounded-2xl bg-white border border-[#00723c]/12 text-[#00723c] hover:bg-[#effae9] hover:border-[#00723c]/25 active:scale-[0.99] transition-all duration-150 group">
                        <span className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-[#effae9] group-hover:bg-[#97e674]/30 transition-colors duration-150">
                          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M13.5 10.5C12.5 10.5 11.5 10.3 10.6 9.9C10.3 9.8 9.9 9.9 9.7 10.1L8.6 11.6C6.5 10.5 4.5 8.6 3.4 6.4L4.9 5.3C5.1 5.1 5.2 4.7 5.1 4.4C4.7 3.5 4.5 2.5 4.5 1.5C4.5 1.2 4.3 1 4 1H1.5C1.2 1 1 1.2 1 1.5C1 8.4 6.6 14 13.5 14C13.8 14 14 13.8 14 13.5V11C14 10.7 13.8 10.5 13.5 10.5Z" fill="#00723c"/></svg>
                        </span>
                        <div className="flex flex-col sm:items-center min-w-0 flex-1 sm:flex-none">
                          <span className="font-semibold text-[14px] leading-tight">Call Us</span>
                          <span className="text-[#00723c]/60 text-[13px] leading-tight">1-800-800-1200</span>
                          <span className="hidden sm:block text-[11px] text-[#00723c]/40 mt-0.5">Mon–Sun, 6am–6pm PT</span>
                        </div>
                        <span className="sm:hidden ml-auto shrink-0 text-[11px] font-medium text-[#00723c]/40 bg-[#f5fbf2] border border-[#00723c]/10 rounded-lg px-2.5 py-1 whitespace-nowrap">Mon–Sun 6am–6pm PT</span>
                      </a>
                      <button type="button" onClick={() => { if (typeof window !== "undefined" && (window as any).Intercom) { (window as any).Intercom("show"); } }} className="flex-1 flex sm:flex-col items-center sm:justify-center gap-4 sm:gap-2 px-5 py-3.5 sm:py-5 w-full rounded-2xl bg-white border border-[#00723c]/12 text-[#00723c] hover:bg-[#effae9] hover:border-[#00723c]/25 active:scale-[0.99] transition-all duration-150 group">
                        <span className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-[#effae9] group-hover:bg-[#97e674]/30 transition-colors duration-150">
                          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M7.5 1C3.9 1 1 3.6 1 6.8C1 8.4 1.7 9.9 2.9 10.9L2.5 13.5L5.3 12.1C6 12.3 6.7 12.5 7.5 12.5C11.1 12.5 14 9.9 14 6.8C14 3.6 11.1 1 7.5 1Z" fill="#00723c"/></svg>
                        </span>
                        <div className="flex flex-col sm:items-center items-start min-w-0 flex-1 sm:flex-none">
                          <span className="font-semibold text-[14px] leading-tight">Live Chat</span>
                          <span className="text-[#00723c]/50 text-[13px] leading-tight">Typically replies instantly</span>
                          <span className="hidden sm:flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#97e674] animate-pulse" />
                            <span className="text-[11px] text-[#00723c]/40 font-medium">Online now</span>
                          </span>
                        </div>
                        <span className="sm:hidden ml-auto shrink-0 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#97e674] animate-pulse" />
                          <span className="text-[11px] font-medium text-[#00723c]/40">Online</span>
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ── FORM STATE ── */}
                {!submitted && !isClaimed && (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="bg-white rounded-3xl p-6 md:p-10 flex flex-col gap-5 flex-1"
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-[#00723c] text-xl md:text-2xl tracking-tight">
                        Where should we ship it?
                      </h3>
                      <p className="text-[#00723c]/55 text-sm">
                        US addresses only. One per household.
                      </p>
                    </div>

                    {/* Honeypot — hidden from real users; bots fill it, submit silently rejects */}
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      value={form.website}
                      onChange={handleChange}
                      style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0, pointerEvents: "none" }}
                    />

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
                      <input
                        id="email" name="email" type="email" required
                        value={form.email} onChange={handleChange}
                        placeholder="jane@example.com"
                        className={inputClass}
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className={labelClass}>Phone Number</label>
                      <input
                        id="phone" name="phone" type="tel" required
                        value={form.phone} onChange={handleChange}
                        placeholder="(555) 555-5555"
                        inputMode="tel"
                        autoComplete="tel"
                        className={inputClass}
                      />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="address" className={labelClass}>Street Address</label>
                      <input id="address" name="address" type="text" required value={form.address} onChange={handleChange} placeholder="123 Main Street" className={inputClass} />
                    </div>

                    {/* City / State / ZIP */}
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="city" className={labelClass}>City</label>
                        <input id="city" name="city" type="text" required value={form.city} onChange={handleChange} placeholder="Las Vegas" className={inputClass} />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="state" className={labelClass}>State</label>
                          <div className="relative">
                            <select id="state" name="state" required value={form.state} onChange={handleChange} className="h-12 pl-4 pr-12 rounded-xl border-2 border-[#00723c]/15 text-[#00723c] text-base focus:outline-none focus:border-[#97e674] transition-colors bg-[#fafdf8] w-full appearance-none">
                              <option value="" disabled>State</option>
                              {US_STATES.map(([abbr, name]) => (
                                <option key={abbr} value={abbr}>{abbr} — {name}</option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                              <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><path d="M1 1L7 7L13 1" stroke="#00723c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label htmlFor="zip" className={labelClass}>ZIP</label>
                          <div className="relative">
                            <input id="zip" name="zip" type="text" required inputMode="numeric" pattern="[0-9]{5}" value={form.zip} onChange={handleChange} onBlur={handleZipBlur} placeholder="89101" className={`${inputClass} ${addressChecking ? "pr-11" : ""}`} />
                            {addressChecking && (
                              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <svg className="animate-spin" width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                  <circle cx="9" cy="9" r="7" stroke="#00723c" strokeOpacity="0.2" strokeWidth="2.5"/>
                                  <path d="M9 2A7 7 0 0 1 16 9" stroke="#00723c" strokeWidth="2.5" strokeLinecap="round"/>
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Where did you hear about us */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="hearAbout" className={labelClass}>Where did you hear about us?</label>
                      <div className="relative">
                        <select
                          id="hearAbout" name="hearAbout" required
                          value={form.hearAbout} onChange={handleChange}
                          className="h-12 pl-4 pr-12 rounded-xl border-2 border-[#00723c]/15 text-[#00723c] text-base focus:outline-none focus:border-[#97e674] transition-colors bg-[#fafdf8] w-full appearance-none"
                        >
                          <option value="" disabled>Select one…</option>
                          <option value="radio">Radio</option>
                          <option value="tv_streaming">TV / Streaming</option>
                          <option value="social_media">Social Media</option>
                          <option value="google">Google</option>
                          <option value="podcast">Podcast</option>
                          <option value="friend">Friend</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" aria-hidden="true"><path d="M1 1L7 7L13 1" stroke="#00723c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1" />

                    {submitError && (
                      <p className="text-red-500 text-[13px] font-medium -mb-2">{submitError}</p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-14 w-full bg-[#97e674] rounded-full text-[#064326] font-bold text-base md:text-lg hover:bg-[#7dc45e] active:scale-[0.98] transition-all duration-150 tracking-tight disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                            <circle cx="9" cy="9" r="7" stroke="#064326" strokeOpacity="0.3" strokeWidth="2.5"/>
                            <path d="M9 2A7 7 0 0 1 16 9" stroke="#064326" strokeWidth="2.5" strokeLinecap="round"/>
                          </svg>
                          Processing your order…
                        </>
                      ) : (
                        "Send My Free Supply →"
                      )}
                    </button>

                    <p className="text-center text-[#00723c]/40 text-xs leading-relaxed">
                      By submitting, you agree to our{" "}
                      <Link href="#" className="underline underline-offset-2 hover:text-[#00723c]/65 transition-colors">Privacy Policy</Link>{" "}
                      and{" "}
                      <Link href="#" className="underline underline-offset-2 hover:text-[#00723c]/65 transition-colors">Terms of Service</Link>.
                    </p>

                    {/* Call or chat */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-[#00723c]/8" />
                      <span className="text-[#00723c]/40 text-[11px] uppercase tracking-wider font-medium whitespace-nowrap">or reach us directly</span>
                      <div className="flex-1 h-px bg-[#00723c]/8" />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      <a href="tel:18008001200" className="flex-1 flex sm:flex-col items-center sm:justify-center gap-4 sm:gap-2 px-5 py-3.5 sm:py-5 rounded-2xl bg-white border border-[#00723c]/12 text-[#00723c] hover:bg-[#effae9] hover:border-[#00723c]/25 active:scale-[0.99] transition-all duration-150 group">
                        <span className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-[#effae9] group-hover:bg-[#97e674]/30 transition-colors duration-150">
                          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M13.5 10.5C12.5 10.5 11.5 10.3 10.6 9.9C10.3 9.8 9.9 9.9 9.7 10.1L8.6 11.6C6.5 10.5 4.5 8.6 3.4 6.4L4.9 5.3C5.1 5.1 5.2 4.7 5.1 4.4C4.7 3.5 4.5 2.5 4.5 1.5C4.5 1.2 4.3 1 4 1H1.5C1.2 1 1 1.2 1 1.5C1 8.4 6.6 14 13.5 14C13.8 14 14 13.8 14 13.5V11C14 10.7 13.8 10.5 13.5 10.5Z" fill="#00723c"/></svg>
                        </span>
                        <div className="flex flex-col sm:items-center min-w-0 flex-1 sm:flex-none">
                          <span className="font-semibold text-[14px] leading-tight">Call to Order</span>
                          <span className="text-[#00723c]/60 text-[13px] leading-tight">1-800-800-1200</span>
                          <span className="hidden sm:block text-[11px] text-[#00723c]/40 mt-0.5">Mon–Sun, 6am–6pm PT</span>
                        </div>
                        <span className="sm:hidden ml-auto shrink-0 text-[11px] font-medium text-[#00723c]/40 bg-[#f5fbf2] border border-[#00723c]/10 rounded-lg px-2.5 py-1 whitespace-nowrap">Mon–Sun 6am–6pm PT</span>
                      </a>
                      <button type="button" onClick={() => { if (typeof window !== "undefined" && (window as any).Intercom) { (window as any).Intercom("show"); } }} className="flex-1 flex sm:flex-col items-center sm:justify-center gap-4 sm:gap-2 px-5 py-3.5 sm:py-5 w-full rounded-2xl bg-white border border-[#00723c]/12 text-[#00723c] hover:bg-[#effae9] hover:border-[#00723c]/25 active:scale-[0.99] transition-all duration-150 group">
                        <span className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-[#effae9] group-hover:bg-[#97e674]/30 transition-colors duration-150">
                          <svg width="16" height="16" viewBox="0 0 15 15" fill="none" aria-hidden="true"><path d="M7.5 1C3.9 1 1 3.6 1 6.8C1 8.4 1.7 9.9 2.9 10.9L2.5 13.5L5.3 12.1C6 12.3 6.7 12.5 7.5 12.5C11.1 12.5 14 9.9 14 6.8C14 3.6 11.1 1 7.5 1Z" fill="#00723c"/></svg>
                        </span>
                        <div className="flex flex-col sm:items-center items-start min-w-0 flex-1 sm:flex-none">
                          <span className="font-semibold text-[14px] leading-tight">Live Chat</span>
                          <span className="text-[#00723c]/50 text-[13px] leading-tight">Typically replies instantly</span>
                          <span className="hidden sm:flex items-center gap-1.5 mt-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#97e674] animate-pulse" />
                            <span className="text-[11px] text-[#00723c]/40 font-medium">Online now</span>
                          </span>
                        </div>
                        <span className="sm:hidden ml-auto shrink-0 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#97e674] animate-pulse" />
                          <span className="text-[11px] font-medium text-[#00723c]/40">Online</span>
                        </span>
                      </button>
                    </div>
                  </motion.form>
                )}

              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
