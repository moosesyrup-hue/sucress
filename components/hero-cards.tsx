import Image from "next/image";
import Link from "next/link";

export default function HeroCards() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-[1440px] mx-auto">
        {/* Card 1: Free Month Supply */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#91e06e] to-[#b2ff90] flex flex-col items-center justify-center gap-8 p-8 md:p-10 text-center text-[#064326] min-h-[320px] md:min-h-[440px]">
          <div
            className="font-stix font-normal leading-[0.9] tracking-tight text-[#064326]"
            style={{ fontFamily: "var(--font-stix)" }}
          >
            <p className="text-[64px] md:text-[72px] lg:text-[84px] leading-[0.9]">Free</p>
            <p className="text-[64px] md:text-[72px] lg:text-[84px] leading-[0.9]">Month</p>
            <p className="text-[64px] md:text-[72px] lg:text-[84px] leading-[0.9]">Supply!</p>
            <p
              className="text-[30px] md:text-[36px] lg:text-[42px] italic leading-snug mt-2"
              style={{ fontStyle: "italic" }}
            >
              (28 packets)
            </p>
          </div>
          <p className="font-medium text-base md:text-lg text-[#064326] tracking-tight">
            Limit one per household
          </p>
        </div>

        {/* Card 2: Product photo */}
        <div className="relative rounded-3xl overflow-hidden min-h-[320px] md:min-h-[440px]">
          <Image
            src="/images/hero-center.jpg"
            alt="Sucress packets — the perfect sugar-free sweetener"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Card 3: No Credit Card / Subscription / Shipping */}
        <div className="rounded-3xl overflow-hidden bg-[#effae9] flex flex-col items-center justify-center gap-6 p-8 md:p-10 text-center min-h-[320px] md:min-h-[440px]">
          <p className="font-medium text-[#00723c] text-2xl md:text-3xl lg:text-[34px] leading-tight tracking-tight">
            No Credit Card
            <br />
            Required
          </p>
          <div className="w-full h-px bg-[#00723c]/20" />
          <p className="font-medium text-[#00723c] text-2xl md:text-3xl lg:text-[34px] leading-tight tracking-tight">
            No Subscription
            <br />
            or Commitment
          </p>
          <div className="w-full h-px bg-[#00723c]/20" />
          <p className="font-medium text-[#00723c] text-2xl md:text-3xl lg:text-[34px] leading-tight tracking-tight">
            No Shipping
            <br />
            or Handling Fees
          </p>
        </div>
      </div>
    </section>
  );
}
