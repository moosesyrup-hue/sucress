"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type ModalType = "privacy" | "terms" | "accessibility";

type LegalModalProps = {
  type: ModalType | null;
  onClose: () => void;
};

const CONTENT: Record<ModalType, { title: string; body: React.ReactNode }> = {
  privacy: {
    title: "Privacy Policy",
    body: (
      <div className="legal-body">
        <p className="updated">Last updated: September 16, 2023</p>

        <p>This Privacy Policy applies to ProCaps Laboratories and ProCaps.com. By visiting our site, you accept the terms of this policy. You must be 18 or older to use this site, and you affirm that all information you provide is truthful and accurate.</p>

        <h3>Information We Collect</h3>
        <p>ProCaps collects personal information when you subscribe, make a purchase, request a free sample, or otherwise participate in activities on our site. We do not collect financial information directly — purchases are processed through secure third-party processors. IP addresses are collected but are not linked to your personal information.</p>

        <h3>Cookies & Analytics</h3>
        <p>We use session and persistent cookies, web beacons, and Google Analytics to understand how visitors use our site. You can disable cookies through your browser settings or opt out of Google Analytics via Google's browser add-on.</p>

        <h3>How We Use Your Information</h3>
        <p>Personal information is used to support transactions, provide customer service, improve our website, and comply with legal obligations. We do not sell your personal information to unaffiliated third parties for their marketing purposes without your consent.</p>

        <h3>Data Protection</h3>
        <p>Your information is stored on U.S. servers protected by industry-standard safeguards including firewalls and SSL encryption. While we take reasonable precautions, complete security cannot be guaranteed for any transmission over the internet.</p>

        <h3>Your Rights</h3>
        <p>Residents of California and Colorado may request access to, deletion of, or correction of their personal information by contacting us at the information below.</p>

        <h3>Contact Us</h3>
        <p className="contact-block">
          ProCaps Laboratories<br />
          430 Parkson Road, Henderson, NV 89011<br />
          AskAndrew@ProCapsLabs.com<br />
          1-800-800-1200
        </p>
      </div>
    ),
  },

  terms: {
    title: "Terms of Use",
    body: (
      <div className="legal-body">
        <p className="updated">Last updated: September 16, 2023</p>

        <p>These Terms and Conditions govern your use of ProCaps.com and our products and services. By accessing this site, you agree to be bound by these terms. You must be 18 or older to use this site.</p>

        <h3>Health Disclaimer</h3>
        <p>Information on this site is not intended as a substitute for advice from your physician or other healthcare professional. Statements regarding dietary supplements have not been evaluated by the Food and Drug Administration. Products are not intended to diagnose, treat, cure, or prevent any disease.</p>

        <h3>Product Use</h3>
        <p>Products sold by ProCaps Laboratories are intended for personal use only and not for resale unless expressly authorized. Unauthorized reselling on platforms such as Amazon, eBay, or in physical retail stores is prohibited and may result in account termination and legal action.</p>

        <h3>Intellectual Property</h3>
        <p>All content on this site — including text, images, and trademarks such as PROCAPS® and ANDREW LESSMAN® — is protected by intellectual property law. You may access material for personal, non-commercial purposes only.</p>

        <h3>Limitation of Liability</h3>
        <p>This site is provided "AS IS" without warranties of any kind. ProCaps disclaims liability for any damages arising from use of the site, including damages from viruses or transmission failures.</p>

        <h3>Dispute Resolution</h3>
        <p>Any disputes must be resolved through binding arbitration in Nevada under American Arbitration Association rules. Class action lawsuits are excluded. Nevada state law governs these terms.</p>

        <h3>Contact Us</h3>
        <p className="contact-block">
          AskAndrew@ProCapsLabs.com<br />
          1-800-800-1200<br />
          Monday–Sunday, 6am–6pm PT<br />
          430 Parkson Road, Henderson, NV 89011
        </p>
      </div>
    ),
  },

  accessibility: {
    title: "Accessibility",
    body: (
      <div className="legal-body">
        <p>ProCaps.com is dedicated to ensuring that people with disabilities can access all information on our website. We are guided by the Web Content Accessibility Guidelines, version 2.1, Level AA (WCAG 2.1 AA).</p>

        <h3>Our Commitment</h3>
        <p>We believe every customer deserves equal access to our products and information. Improving accessibility and inclusivity on our website is an ongoing priority, and we are continually working to enhance the experience for all visitors.</p>

        <h3>Third-Party Content</h3>
        <p>Some third-party content embedded on our site may have accessibility limitations outside of our direct control. We encourage you to report any such issues so we can work toward remediation.</p>

        <h3>Feedback & Assistance</h3>
        <p>If you encounter any barriers while accessing our website, or if you need information in an alternative format, please reach out. Include "Disabled Access" in the subject line so we can prioritize your request.</p>

        <h3>Contact Us</h3>
        <p className="contact-block">
          AskAndrew@ProCapsLabs.com<br />
          Subject line: "Disabled Access"<br />
          1-800-800-1200<br />
          430 Parkson Road, Henderson, NV 89011
        </p>
      </div>
    ),
  },
};

export default function LegalModal({ type, onClose }: LegalModalProps) {
  const isOpen = type !== null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleKey]);

  const content = type ? CONTENT[type] : null;

  return (
    <>
      <style>{`
        .legal-body {
          font-family: var(--font-inter), system-ui, sans-serif;
          color: #1a1a1a;
        }
        .legal-body p {
          font-size: 15px;
          line-height: 1.75;
          color: #3a3a3a;
          margin-bottom: 1rem;
        }
        .legal-body h3 {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #00723c;
          margin-top: 2rem;
          margin-bottom: 0.5rem;
        }
        .legal-body ul {
          margin-bottom: 1rem;
          padding-left: 1.25rem;
        }
        .legal-body ul li {
          font-size: 15px;
          line-height: 1.75;
          color: #3a3a3a;
          margin-bottom: 0.25rem;
          list-style-type: disc;
        }
        .legal-body .updated {
          font-size: 12px;
          color: #999;
          letter-spacing: 0.02em;
          margin-bottom: 1.5rem;
        }
        .legal-body .contact-block {
          background: #f4faf7;
          border-left: 3px solid #00723c;
          padding: 1rem 1.25rem;
          border-radius: 0 8px 8px 0;
          font-size: 14px;
          line-height: 1.9;
          color: #2a2a2a;
        }
      `}</style>

      <AnimatePresence>
        {isOpen && content && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={onClose}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[201] w-full sm:w-[500px] bg-[#fafaf8] flex flex-col shadow-[-20px_0_60px_rgba(0,0,0,0.18)]"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease }}
              role="dialog"
              aria-modal="true"
              aria-label={content.title}
            >
              {/* Header */}
              <div className="bg-[#00723c] px-7 pt-8 pb-7 shrink-0">
                <p className="text-[#97e674] text-[10px] font-semibold tracking-[0.1em] uppercase mb-2">
                  ProCaps Laboratories
                </p>
                <div className="flex items-start justify-between gap-4">
                  <h2
                    className="text-white text-[26px] leading-tight tracking-[-0.02em]"
                    style={{ fontFamily: "var(--font-stix)" }}
                  >
                    {content.title}
                  </h2>
                  <button
                    onClick={onClose}
                    className="shrink-0 mt-1 w-8 h-8 flex items-center justify-center rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-all duration-150"
                    aria-label="Close"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Thin green accent rule */}
              <div className="h-[3px] bg-gradient-to-r from-[#97e674] via-[#00723c] to-[#00723c] shrink-0" />

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto px-7 py-8 overscroll-contain">
                {content.body}
              </div>

              {/* Footer bar */}
              <div className="shrink-0 border-t border-black/[0.06] px-7 py-4 bg-white flex items-center justify-between">
                <p className="text-[#999] text-[11px]">
                  &copy; {new Date().getFullYear()} ProCaps Laboratories, Inc.
                </p>
                <button
                  onClick={onClose}
                  className="text-[12px] font-medium text-[#00723c] hover:text-[#005a2f] transition-colors duration-150"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
