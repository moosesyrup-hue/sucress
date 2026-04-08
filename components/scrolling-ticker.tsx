const ITEMS = [
  "No Shipping Fee",
  "No Credit Card Required",
  "No Commitment",
  "100% Sugar-Free",
  "No Shipping Fee",
  "No Credit Card Required",
  "No Commitment",
  "100% Sugar-Free",
];

export default function ScrollingTicker() {
  const sep = <span className="mx-5 md:mx-7 opacity-40">—</span>;

  const content = ITEMS.map((item, i) => (
    <span
      key={i}
      className="shrink-0 font-medium text-[15px] sm:text-[18px] md:text-[22px] lg:text-[26px] tracking-tight text-[#00723c]"
    >
      {item}
      {sep}
    </span>
  ));

  return (
    <section
      className="w-full overflow-hidden pt-0 pb-10 md:pb-14 border-b border-[#00723c]/10"
      aria-label="Product features"
    >
      <div className="flex" aria-hidden="true">
        <div
          className="flex shrink-0 items-center"
          style={{ animation: "marquee 32s linear infinite" }}
        >
          {content}
          {content}
        </div>
      </div>
    </section>
  );
}
