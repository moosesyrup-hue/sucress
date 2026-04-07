import Image from "next/image";
import Link from "next/link";

export default function Section6() {
  return (
    <section className="w-full bg-[#fdf9f5] px-5 md:px-10 lg:px-[190px] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 md:gap-16">
        {/* Headline */}
        <h2 className="font-semibold text-[#00723c] text-2xl md:text-4xl lg:text-[54px] leading-tight tracking-tight text-center max-w-[848px]">
          What&apos;s really hiding in those colorful packets?
        </h2>

        {/* Image */}
        <div className="relative w-full aspect-[1064/500] rounded-2xl overflow-hidden">
          <Image
            src="/images/section6.jpg"
            alt="Popular sugar substitute packets revealing hidden sugars and fillers"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Copy + CTA */}
        <div className="flex flex-col items-center gap-10 max-w-[798px] text-center">
          <p className="font-normal text-[#00723c] text-base md:text-lg lg:text-xl leading-relaxed">
            <strong className="font-bold">
              Most sugar substitutes contain hidden sugars or carbs — but
              nowhere more deceptively than in those pretty colored sugar
              replacement packets.
            </strong>
            <br />
            <br />
            <em className="italic">Sucress</em> is different. Just glycine and
            non-GMO stevia leaf extract for clean, simple sweetness without the
            extras you don&apos;t need.
          </p>

          <Link
            href="#free-offer"
            className="inline-flex items-center justify-center h-14 px-10 bg-[#97e674] rounded-full text-[#064326] font-semibold text-base md:text-lg hover:bg-[#7dc45e] transition-colors duration-200 shadow-sm"
          >
            Click here to try Sucress for FREE!
          </Link>

          {/* Fine print */}
          <p className="text-[#00723c] text-base md:text-lg leading-relaxed">
            <strong className="font-bold">Free shipping.</strong>
            <br />
            <strong className="font-bold">No credit card required.</strong>
            <br />
            <span className="font-normal text-sm md:text-base opacity-75">
              Limit one per household.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
