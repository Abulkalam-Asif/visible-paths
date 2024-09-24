import React from "react";
import OurTeamCards from "./OurTeamCards";

const OurTeamSec = () => {
  return (
    <>
      <section id="ourTeamSec" className="text-black bg-white">
        <div className="max-w-8xl mx-auto px-4 py-16 md:px-8 md:py-20 xl:px-12">
          <div className="flex flex-col items-center text-center gap-2 mb-8 md:gap-4 xl:gap-6 md:mb-12">
            <h3 className="text-xl font-medium sm:text-2xl md:text-3xl xl:text-4xl">
              Our Experts
            </h3>
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl xl:text-5xl">
              Meet the Minds Behind VisiblePaths
            </h2>
            <p className="max-w-[60ch] font-medium text-[#444444] mx-auto sm:text-lg lg:text-xl xl:text-2xl">
              Passionate Innovators Dedicated to Shaping Your Financial Journey
            </p>
          </div>
          <OurTeamCards />
        </div>
      </section>
    </>
  );
};

export default OurTeamSec;
