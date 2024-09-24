import { theAdv1Icon, theAdv2Icon, theAdv3Icon } from "@/assets";
import React from "react";
import WhyChooseAndAdvCard from "./WhyChooseAndAdvCard";

const theAdvantagesData = [
  {
    icon: theAdv1Icon,
    title: "AI-Powered Personalization",
    description:
      "We offer unmatched personalized financial advice in the car-buying space, tailored to your financial situation.",
  },
  {
    icon: theAdv2Icon,
    title: "Multilingual Accessibility",
    description:
      "VisiblePaths makes car buying easy for non-English speakers, an underserved audience in the market.",
  },
  {
    icon: theAdv3Icon,
    title: "Transparency",
    description:
      "From credit score impact on interest rates to detailed financing options, we give you the transparency needed to make informed decisions.",
  },
];

const TheAdvantageSec = () => {
  return (
    <>
      <section className="bg-black text-white">
        <div className="max-w-8xl mx-auto px-4 py-16 md:px-8 lg:py-20 xl:px-12 xl:py-24">
          <div className="flex flex-col gap-4 items-center text-center lg:gap-6">
            <h2 className="text-2xl font-bold capitalize sm:text-3xl lg:text-4xl xl:text-5xl">
              The VisiblePaths Advantage
            </h2>
            <p className="max-w-[60ch] sm:text-lg lg:text-xl xl:text-2xl">
              Seamless, personalized car-buying guidance with AI-driven
              insights, multilingual support, and complete financial
              transparency at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {theAdvantagesData.map((card, index) => (
              <WhyChooseAndAdvCard key={index} {...card} type="advantage" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TheAdvantageSec;
