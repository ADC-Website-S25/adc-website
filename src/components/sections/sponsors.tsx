import SponsorSection from "@/components/sections/sponsorsection";
const Sponsors = () => {
  return (
    <section id="sponsors" aria-labelledby="sponsors-heading" className="w-full mt-32 scroll-mt-32">
      <div className="flex items-center justify-center w-full flex-col">
        <h1
          id="sponsors-heading"
          className="font-bold text-5xl text-[#0083FF] mb-8 text-center"
        >
          Our Sponsors
        </h1>
        <h3 className="max-w-[85%] text-xl text-center">
          These companies are helping drive the future of ADC
        </h3>
        <div className="w-full">
          <SponsorSection
            title="Gold"
            color="gold"
            logos={[
              "/images/logos/amazon.svg",
              "/images/logos/us-news.svg",
              "/images/logos/ref-institute.svg",
              "/images/logos/ionq.svg",
              "/images/logos/mitre.svg",
            ]}
          />
          <SponsorSection
            title="Silver"
            color="silver"
            logos={[
              "/images/logos/accenture.svg",
              "/images/logos/secu.svg",
              "/images/logos/childrens-national.svg",
              "/images/logos/noaa.svg",
              "/images/logos/booz-allen.png",
            ]}
          />
          <SponsorSection
            title="Bronze"
            color="bronze"
            logos={["/images/logos/general-dynamics.png", "/images/logos/nsa.svg"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
