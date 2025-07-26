import React from "react";
import SponsorSection from "@/components/sections/sponsorsection";
const Sponsors = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full flex-col">
        <h1 className="font-bold text-[70px] text-blue-500 mb-8 text-center">
          Our Sponsors
        </h1>
        <h3 className="text-[24px] text-light text-center">
          These companies are helping drive the future of ADC.
        </h3>
        <div className="w-[90%]">
          <SponsorSection
            title="Gold"
            color="gold"
            logos={[
              "/amazon.svg",
              "/mitre.svg",
              "/ref.svg",
              "/ionq.svg",
              "/usnews.svg",
            ]}
          />
          <SponsorSection
            title="Silver"
            color="silver"
            logos={[
              "/accenture.svg",
              "/secu.svg",
              "/cnational.svg",
              "/bah.svg",
              "/noaa.svg",
            ]}
          />
          <SponsorSection
            title="Bronze"
            color="bronze"
            logos={["/gd.svg", "/nsa.svg"]}
            w="max-w-[470px]"
          />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
