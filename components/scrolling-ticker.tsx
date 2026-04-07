const TICKER_ITEMS = [
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
  const separator = <span className="mx-6 md:mx-8 opacity-60">—</span>;

  const content = TICKER_ITEMS.map((item, i) => (
    <span key={i} className="shrink-0 font-medium text-lg md:text-2xl lg:text-[34px] tracking-tight text-[#00723c]">
      {item}
      {separator}
    </span>
  ));

  return (
    <section
      className="w-full overflow-hidden py-12 md:py-16 border-t border-b border-[#00723c]/10"
      aria-label="Product features"
    >
      <div className="flex" aria-hidden="true">
        {/* Duplicate for seamless loop */}
        <div
          className="flex shrink-0 items-center"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {content}
          {content}
        </div>
      </div>
    </section>
  );
}
