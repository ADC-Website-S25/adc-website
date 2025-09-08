export default function AppDevHacks() {
  return (
    <section aria-labelledby="appdevhacks-heading" className="w-full">
      <h1
        id="appdevhacks-heading"
        className="mt-24 mb-8 text-center text-5xl font-bold text-[#0083FF]"
      >
        App Dev Hacks
      </h1>

      <div className="flex justify-center">
        <a
          href="" // TODO: add link to external site
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg transition-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#A855F7] shadow-[0_0_15px_rgba(168,85,247,0.6)]"
        >
          <span className="rounded-lg bg-white px-5 py-2 font-semibold text-black">
            Explore App Dev Hacks
          </span>
        </a>
      </div>
    </section>
  );
}
