import Image from "next/image";
import Link from "next/link";

export default function Section1() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-[190px] py-16 md:py-24">
      <div className="bg-[#effae9] rounded-3xl px-6 md:px-16 lg:px-24 py-16 md:py-24 flex flex-col items-center gap-14 md:gap-16">
        {/* Image */}
        <div className="relative w-full aspect-[1064/500] rounded-2xl overflow-hidden">
          <Image
            src="/images/section1.jpg"
            alt="Sucress packets alongside natural sweetener ingredients"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 80vw"
          />
        </div>

        {/* Copy + Button */}
        <div className="flex flex-col items-center gap-10 md:gap-12 max-w-[840px] text-center">
          <div className="flex flex-col gap-6 md:gap-8">
            <h2 className="text-[#00723c] text-3xl md:text-4xl lg:text-[46px] font-semibold leading-snug tracking-tight">
              <em className="font-normal italic">Sucress</em>{" "}
              is the only sugar replacement that actually replaces all the sugar.
            </h2>
            <p className="font-normal text-[#00723c] text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight">
              Made with glycine—an important amino acid and building block of
              protein—combined with stevia. Sucress delivers clean, balanced
              sweetness without calories, sugar, carbs or compromise.
            </p>
          </div>

          <Link
            href="#free-offer"
            className="inline-flex items-center justify-center h-14 px-10 bg-[#97e674] rounded-full text-[#064326] font-semibold text-base md:text-lg hover:bg-[#7dc45e] transition-colors duration-200 shadow-sm"
          >
            Click here to try Sucress for FREE!
          </Link>
        </div>
      </div>
    </section>
  );
}
