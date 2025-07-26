type SponsorSectionProps = {
  title: string;
  color: string;
  logos: string[];
  gapX?: string;
  w?: string;
  h?: string;
};

export default function SponsorSection({
  title,
  color,
  logos,
  gapX = "gap-x-20",
  w = "max-w-[400px]", // max width of images
  h = "max-h-[200px]",
}: SponsorSectionProps) {
  return (
    <section className="my-10 w-full">
      <header className="flex items-center justify-center gap-4 my-20">
        <hr className={`${color}-hr flex-1 h-1 rounded-full border-none`} />
        <h2
          style={{ color }}
          className={`font-bold text-[50px] mx-9 gradient-text-${color}`}
        >
          {title}
        </h2>
        <hr className={`${color}-hr flex-1 h-1 rounded-full border-none`} />
      </header>
      <div
        className={`w-full flex flex-wrap justify-center items-center ${gapX} gap-y-20 max-w-400`}
      >
        {logos.map((src, i) => (
          <div key={i} className={`flex items-center justify-center`}>
            <img
              src={src}
              alt={src.split("/").pop()?.split(".")[0]}
              className={`${w} ${h} object-contain`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
