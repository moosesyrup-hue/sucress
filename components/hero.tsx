import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 pt-14 md:pt-20 pb-10 md:pb-16 text-center">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-6 md:gap-8">
        {/* Headline */}
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="font-bold text-[#00723c] tracking-tight leading-[1.05] text-[42px] sm:text-[56px] md:text-[66px] lg:text-[74px]">
            The only sugar replacement that&apos;s{" "}
            <em className="font-bold italic text-[#7dc45e] not-italic" style={{ fontStyle: "italic" }}>
              truly
            </em>{" "}
            sugar-free.
          </h1>
          <p className="font-medium text-[#00723c] text-base md:text-xl lg:text-2xl tracking-tight">
            100% Sugar-Free &nbsp;•&nbsp; 100% Guilt-Free &nbsp;•&nbsp; 100% Free-Free
          </p>
        </div>

        {/* CTA */}
        <Link
          href="#free-offer"
          className="inline-flex items-center justify-center h-14 px-10 bg-[#97e674] rounded-full text-[#064326] font-semibold text-base md:text-lg hover:bg-[#7dc45e] transition-colors duration-200 shadow-sm hover:shadow-md active:scale-[0.98] transition-transform"
        >
          Click here to try Sucress for FREE!
        </Link>
      </div>
    </section>
  );
}
