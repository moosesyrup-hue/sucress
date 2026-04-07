import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="w-full px-5 md:px-10 lg:px-20 py-16 md:py-24 flex flex-col items-center gap-8 md:gap-10 text-center">
      {/* Stars */}
      <div className="relative h-10 w-[220px] md:w-[268px] md:h-[50px]">
        <Image
          src="/images/stars.png"
          alt="5 star rating"
          fill
          className="object-contain"
        />
      </div>

      {/* Quote */}
      <blockquote className="max-w-[900px]">
        <p className="font-medium text-[#00723c] text-xl md:text-2xl lg:text-[34px] leading-snug tracking-tight">
          &ldquo;I use Sucress in just about everything — my morning coffee,
          afternoon iced tea, and even homemade salad dressings.&rdquo;
        </p>
      </blockquote>

      {/* Attribution */}
      <p className="text-[#00723c] font-medium text-base md:text-lg tracking-widest uppercase">
        — Jane Doe,{" "}
        <span className="font-normal">Verified Customer</span>
      </p>
    </section>
  );
}
