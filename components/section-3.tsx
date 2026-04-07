import Image from "next/image";
import Link from "next/link";

export default function Section3() {
  return (
    <section className="w-full bg-white px-5 md:px-10 lg:px-[190px] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 md:gap-16">
        {/* Headline + sub */}
        <div className="flex flex-col items-center gap-6 md:gap-8 text-center max-w-[850px]">
          <h2 className="text-[#00723c] font-semibold text-2xl md:text-4xl lg:text-[54px] leading-tight tracking-tight">
            Taste the difference with{" "}
            <em className="font-normal italic">Sucress.</em>
          </h2>
          <p className="text-[#00723c] font-medium text-lg md:text-xl lg:text-[30px] leading-snug tracking-tight">
            Did you know that virtually ALL sugar substitutes contain sugar
            and/or carbs?{" "}
            <strong className="font-bold">
              Not <em className="italic">Sucress.</em>
            </strong>
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full aspect-[1064/500] rounded-2xl overflow-hidden">
          <Image
            src="/images/section3.jpg"
            alt="Comparison of Sucress versus other sugar substitutes"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Copy + CTA */}
        <div className="flex flex-col items-center gap-10 max-w-[800px] text-center">
          <p className="font-normal text-[#00723c] text-base md:text-lg lg:text-xl leading-relaxed">
            Our amino-acid based, non-GMO stevia leaf sweetener contains NO
            HIDDEN SUGAR. Each packet delivers the sweetness of approximately
            two teaspoons of sugar, plus the healthy blood sugar support of the
            amino acid glycine.
          </p>
          <Link
            href="#free-offer"
            className="inline-flex items-center justify-center h-14 px-10 bg-[#97e674] rounded-full text-[#064326] font-semibold text-base md:text-lg hover:bg-[#7dc45e] transition-colors duration-200 shadow-sm"
          >
            Get a FREE Month Supply of Sucress!
          </Link>
        </div>
      </div>
    </section>
  );
}
