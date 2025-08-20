import SponsorSection from "@/components/sections/sponsorsection";
const Sponsors = () => {
  return (
    <section aria-labelledby="sponsors-heading" className="w-full">
      <div className="flex items-center justify-center w-full flex-col">
        <h1
          id="sponsors-heading"
          className="font-bold text-5xl text-[#0083FF] mb-8 text-center"
        >
          Our Sponsors
        </h1>
        <h3 className="max-w-[85%] text-xl text-center">
          These companies are helping drive the future of ADC.
        </h3>
        <div className="w-full">
          <SponsorSection
            title="Gold"
            color="gold"
            logos={[
              "/amazon.svg",
              "/us-news.svg",
              "/ref-institute.svg",
              "/ionq.svg",
              "/mitre.svg",
            ]}
          />
          <SponsorSection
            title="Silver"
            color="silver"
            logos={[
              "/accenture.svg",
              "/secu.svg",
              "/childrens-national.svg",
              "/noaa.svg",
              "/booz-allen.jpg",
            ]}
          />
          <SponsorSection
            title="Bronze"
            color="bronze"
            logos={["/general-dynamics.png", "/nsa.svg"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
