import { whyChoose1Icon, whyChoose2Icon, whyChoose3Icon } from "@/assets";
import React from "react";
import WhyChooseAndAdvCard from "./WhyChooseAndAdvCard";

const whyChooseCardsData = [
  {
    icon: whyChoose1Icon,
    title: "AI-Driven Personalization",
    description:
      "Our intelligent system evaluates your financial personality, credit score, and preferences to offer customized advice. Whether optimizing loan terms or finding the right insurance plan, our platform adapts in real time to meet your needs.",
  },
  {
    icon: whyChoose2Icon,
    title: "Comprehensive Car-Buying Simulations",
    description:
      "VisiblePaths provides a 360-degree car-buying experience. We simulate everything from car selection to financing and insurance, showing how each decision impacts your budget and long-term financial goals.",
  },
  {
    icon: whyChoose3Icon,
    title: "Multilingual Support",
    description:
      "Car buying should be accessible to everyone, regardless of language. VisiblePaths offers multilingual capabilities, making it easier for non-English-speaking consumers to navigate the car-buying process.",
  },
];

const WhyChooseSec = () => {
  return (
    <>
      <section id="solutionsSec">
        <div className="max-w-8xl mx-auto px-4 py-16 md:px-8 lg:py-20 xl:px-12 xl:py-24">
          <div className="flex flex-col gap-4 items-center text-center lg:gap-6">
            <h2 className="text-2xl font-bold capitalize sm:text-3xl lg:text-4xl xl:text-5xl">
              Why Choose VisiblePaths?
            </h2>
            <p className="max-w-[60ch] sm:text-lg lg:text-xl xl:text-2xl">
              In a crowded market of car-buying tools, VisiblePaths stands out.
              We offer more than just car listings and financing calculators—our
              platform delivers personalized insights and multilingual support,
              giving you a complete, tailored experience. Here&apos;s why
              we&apos;re different:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-y-8 gap-x-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseCardsData.map((card, index) => (
              <WhyChooseAndAdvCard key={index} {...card} type="why-choose" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseSec;
