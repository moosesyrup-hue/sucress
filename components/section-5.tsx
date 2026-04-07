import Image from "next/image";
import Link from "next/link";

const BENEFITS = [
  { label: "Zero Calories", filled: true },
  { label: "Zero Carbs", filled: true },
  { label: "No Added Sugars", filled: true },
  { label: "Non-GMO Stevia Leaf", filled: false },
  { label: "Gluten Free", filled: false },
];

function CheckIcon({ filled }: { filled: boolean }) {
  return (
    <div className="relative shrink-0 w-7 h-7 md:w-8 md:h-8">
      <Image
        src={filled ? "/images/check-icon.png" : "/images/check-icon2.png"}
        alt=""
        fill
        className="object-contain"
        aria-hidden="true"
      />
    </div>
  );
}

export default function Section5() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-12 md:gap-16">
        {/* Section headline */}
        <h2 className="font-semibold text-[#00723c] text-2xl md:text-4xl lg:text-[54px] leading-tight tracking-tight text-center max-w-[614px]">
          Enjoy the pure natural sweetness of{" "}
          <em className="font-normal italic">Sucress!</em>
        </h2>

        {/* 2-col layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start w-full max-w-[1280px]">
          {/* Left: lifestyle image */}
          <div className="relative w-full lg:flex-1 aspect-[615/820] rounded-3xl overflow-hidden">
            <Image
              src="/images/section5-lifestyle.jpg"
              alt="Enjoying Sucress in everyday life — coffee, tea, baking"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right: content */}
          <div className="flex flex-col gap-8 lg:flex-1 lg:self-center">
            <h3 className="font-semibold text-[#00723c] text-2xl md:text-3xl lg:text-[46px] leading-tight tracking-tight max-w-[540px]">
              The{" "}
              <span className="text-[#7dc45e]">healthier</span>{" "}
              alternative to sugar and sugar substitutes.
            </h3>

            {/* Benefit bullets */}
            <ul className="flex flex-col gap-3">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit.label}
                  className="flex items-center gap-4"
                >
                  <CheckIcon filled={benefit.filled} />
                  <span className="font-normal text-[#00723c] text-lg md:text-xl lg:text-2xl uppercase tracking-wide">
                    {benefit.label}
                  </span>
                </li>
              ))}
            </ul>

            {/* Badge */}
            <div className="relative h-[100px] w-[180px] md:h-[126px] md:w-[225px]">
              <Image
                src="/images/section5-badge.png"
                alt="Certified non-GMO"
                fill
                className="object-contain"
              />
            </div>

            {/* CTA */}
            <Link
              href="#free-offer"
              className="inline-flex items-center justify-center h-14 px-8 bg-[#91e06e] rounded-full text-[#064326] font-semibold text-base md:text-lg hover:bg-[#7dc45e] transition-colors duration-200 shadow-sm self-start"
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
      </div>
    </section>
  );
}
