import { reason1Icon, reason2Icon, reason3Icon, reason4Icon } from "@/assets";
import React from "react";
import WhyVisiblePathItem from "./WhyVisiblePathItem";

const whyVisiblePathData = [
  {
    icon: reason1Icon,
    title: "Comprehensive Car Simulations",
    description: "Choose, finance, and insure your car with confidence.",
  },
  {
    icon: reason2Icon,
    title: "Multilingual Support",
    description:
      "Accessible to non-English speaking users, making the car-buying process easy for everyone.",
  },
  {
    icon: reason3Icon,
    title: "AI-Powered Guidance",
    description:
      "Our smart platform offers tailored recommendations and helps you make better financial decisions",
  },
  {
    icon: reason4Icon,
    title: "Impact Analysis",
    description:
      "See how your credit score influences interest rates, loan terms, and insurance premiums.",
  },
];

const WhyVisiblePathSec = () => {
  return (
    <section className="bg-white">
      <div className="max-w-8xl mx-auto px-4 pt-16 md:px-8 md:pt-20 lg:pt-24 xl:px-12 xl:pt-28">
        <div className="flex flex-col items-center text-center gap-2 mb-8 md:gap-4 xl:gap-6 md:mb-12 lg:mb-16">
          <h2 className="flex flex-col items-center text-black text-2xl font-bold capitalize gap-1 sm:text-3xl lg:text-4xl xl:text-5xl xl:gap-3">
            Why VisiblePaths?
          </h2>
          <p className="font-medium text-[#444444] sm:text-lg lg:text-xl xl:text-2xl">
            Imagine a platform that bridges the language barrier and takes the
            guesswork out of adulting.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 mt-16 md:grid-cols-2 lg:gap-y-20 lg:mt-24 xl:gap-y-24 xl:mt-28">
          {whyVisiblePathData.map((dataItem, index) => (
            <WhyVisiblePathItem key={index} {...dataItem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyVisiblePathSec;
