type SponsorSectionProps = {
  title: string;
  color: string;
  logos: string[];
};

function SponsorSection({ title, color, logos }: SponsorSectionProps) {
  const headingId = `sponsor-section-${title
    .toLowerCase()
    .replace(/\s+/g, "-")}`;
  const gradientClassName = `gradient-text-${color}`;
  const hrClassName = `${color}-hr`;

  return (
    <section
      aria-labelledby={headingId}
      className="w-full flex flex-col justify-center items-center"
    >
      <header className="w-[85%] flex items-center justify-center gap-4 my-5">
        <hr className={`${hrClassName} flex-1 h-1 rounded-full border-none`} />
        <h2
          id={headingId}
          className={`font-bold text-4xl sm:text-5xl mx-9 ${gradientClassName}`}
        >
          {title}
        </h2>
        <hr className={`${hrClassName} flex-1 h-1 rounded-full border-none`} />
      </header>
      <div className="w-full flex justify-center items-center">
        <div className="w-full lg:w-[95%] xl:w-[80%] 2xl:w-[65%] flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-20 gap-y-2 sm:gap-y-5">
          {logos.map((src) => {
            const alt = src.split("/").pop()?.split(".")[0] ?? "Sponsor logo";
            return (
              <div
                key={src}
                className="relative w-29 h-18 sm:w-65 sm:h-28 p-2 rounded-2xl flex items-center justify-center bg-white"
              >
                <img
                  src={src}
                  alt={alt}
                  decoding="async"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SponsorSection;
