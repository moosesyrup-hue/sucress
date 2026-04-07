import Image from "next/image";
import Link from "next/link";

export default function Section4() {
  return (
    <section className="w-full bg-[#fdf9f5] px-5 md:px-10 lg:px-[190px] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 md:gap-16">
        {/* Headline */}
        <h2 className="font-semibold text-center tracking-tight leading-tight max-w-[848px] text-2xl md:text-4xl lg:text-[54px]">
          <span className="text-[#7dc45e]">Sweet Success.</span>
          <br />
          <span className="text-[#00723c]">
            How Glycine transformed{" "}
            <em className="font-normal italic">Sucress</em> into a perfect
            sweetener!
          </span>
        </h2>

        {/* Image */}
        <div className="relative w-full aspect-[1064/475] rounded-2xl overflow-hidden">
          <Image
            src="/images/section4.jpg"
            alt="Glycine amino acid — the secret behind Sucress"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Copy block */}
        <div className="flex flex-col items-center gap-10 md:gap-12 max-w-[780px] text-center">
          {/* Sucre + Success equation */}
          <div className="flex items-center gap-3 md:gap-4 flex-wrap justify-center">
            <p className="font-bold text-[#00723c] text-2xl md:text-3xl lg:text-[40px] tracking-tight">
              Sucre + Success =
            </p>
            <div className="relative h-12 md:h-14 w-[110px] md:w-[130px]">
              <Image
                src="/images/logo.png"
                alt="Sucress"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <p className="font-normal text-[#00723c] text-base md:text-lg lg:text-xl leading-relaxed">
            Sucre is the French word for sugar and if you combine it with the
            word success, you end up with{" "}
            <strong className="font-bold">Sucress</strong>!
          </p>

          <div className="w-full h-px bg-[#00723c]/20" />

          <p className="font-normal text-[#00723c] text-base md:text-lg lg:text-xl leading-relaxed tracking-tight">
            The perfectly balanced sweetness of{" "}
            <strong className="font-semibold">Sucress</strong> starts with
            glycine — Mother Nature&apos;s sweetest amino acid. Glycine is a
            building block of protein given its name almost 200 years ago
            precisely because of its remarkably sweet taste. Today, we know that
            glycine also supports healthy blood sugar balance making it truly the
            most perfect natural sweetener. We then add just a trace of our most
            concentrated stevia leaf extract to create nature&apos;s most
            delicious, healthy and unique natural sweetener and sugar substitute.
          </p>

          {/* Comparison screenshot */}
          <div className="relative w-full max-w-[751px] aspect-[751/476] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/section4-comparison.png"
              alt="Sucress ingredient comparison chart versus other sugar substitutes"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </div>

          {/* CTA */}
          <Link
            href="#free-offer"
            className="inline-flex items-center justify-center h-14 px-10 bg-[#97e674] rounded-full text-[#064326] font-semibold text-base md:text-lg hover:bg-[#7dc45e] transition-colors duration-200 shadow-sm"
          >
            Get a FREE Month Supply of Sucress!
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
