import Image from "next/image";

export default function Section2() {
  return (
    <section className="w-full bg-[#00723c] py-20 md:py-24 px-5 md:px-10">
      <div className="max-w-[1064px] mx-auto flex flex-col items-center gap-16 md:gap-20">
        {/* Headline */}
        <h2 className="text-white font-semibold text-2xl md:text-4xl lg:text-[54px] leading-snug tracking-tight text-center max-w-[848px]">
          Discover the sweet benefits of{" "}
          <em className="font-normal italic">Sucress</em>{" "}
          with Andrew Lessman!
        </h2>

        {/* Video placeholder */}
        <div className="w-full aspect-[1064/642] bg-[#006434] rounded-3xl flex items-center justify-center group cursor-pointer hover:bg-[#005a2e] transition-colors duration-300">
          <button
            className="relative w-24 h-24 md:w-32 md:h-32 lg:w-[135px] lg:h-[135px] group-hover:scale-110 transition-transform duration-300"
            aria-label="Play video"
          >
            <Image
              src="/images/play-button.png"
              alt="Play video"
              fill
              className="object-contain"
            />
          </button>
        </div>

        {/* Signature + attribution */}
        <div className="flex flex-col items-center gap-4 md:gap-6 text-center">
          {/* Signature image group */}
          <div className="relative h-20 w-[380px] md:h-24 md:w-[480px]">
            <Image
              src="/images/sig3.png"
              alt=""
              width={57}
              height={90}
              className="absolute left-0 top-0 object-contain"
              aria-hidden="true"
            />
            <Image
              src="/images/sig2.png"
              alt=""
              width={167}
              height={71}
              className="absolute left-[50px] top-[22px] object-contain"
              aria-hidden="true"
            />
            <Image
              src="/images/sig1.png"
              alt=""
              width={258}
              height={88}
              className="absolute right-0 top-[5px] object-contain"
              aria-hidden="true"
            />
          </div>

          <p className="text-white text-base md:text-lg lg:text-xl">
            <strong className="font-semibold">— Andrew Lessman,</strong>{" "}
            <span className="font-normal">ProCaps Founder</span>
          </p>
        </div>
      </div>
    </section>
  );
}
