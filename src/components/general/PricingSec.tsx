import React from "react";
import PricingPlan from "./PricingPlan";
import { pricingBlackIcon, pricingRedIcon } from "@/assets";

const pricingPlansData = [
  {
    icon: pricingRedIcon,
    title: "BASE MODEL (FREE)",
    price: "$0",
    per: "/month",
    description: "Start your financial journey today",
    features: [
      "Limited access to core tools",
      "Explore essential financial features",
      "Upgrade for complete simulations",
      "Free insights to get started",
      "Perfect for initial exploration",
    ],
    isHighlighted: false,
  },
  {
    icon: pricingRedIcon,
    title: "Joy Ride Plan",
    price: "$1.99",
    per: "/month",
    description: "For the solo adventurer",
    features: [
      "Short-term, full access plan",
      "Explore without long-term commitment",
      "AI-driven financial simulation tools",
      "Perfect for quick financial checkup",
      "Upgrade anytime for extended access",
    ],
    isHighlighted: false,
  },
  {
    icon: pricingBlackIcon,
    title: "Carload Plan (Family)",
    price: "$1.99",
    per: "/12 months",
    description: "For families on the go",
    features: [
      "Comprehensive simulations for all members",
      "Budget-friendly, family access included",
      "AI-driven insights for financial growth",
      "Simulations for car, home, insurance",
      "A full year of uninterrupted access",
    ],
    isHighlighted: true,
  },
  {
    icon: pricingRedIcon,
    title: "Expedition Plan",
    price: "$1.99",
    per: "",
    description: "For a deeper, personalized experience",
    features: [
      "Tailored insights for individual needs",
      "Complete financial journey simulations included",
      "AI guidance for smarter decisions",
      "One-year access to all tools",
      "Personalized reports and analysis features",
    ],
    isHighlighted: false,
  },
];

const PricingSec = () => {
  return (
    <>
      <section className="bg-white">
        <div className="max-w-8xl mx-auto px-4 py-16 md:px-8 md:py-20 lg:px-0 lg:pt-24 lg:pb-32 xl:pt-28 xl:pb-36">
          <div className="flex flex-col items-center text-center gap-2 mb-8 md:gap-4 xl:gap-6 md:mb-12 lg:mb-16">
            <h3 className="text-black capitalize font-medium text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              pricing
            </h3>
            <h2 className="flex flex-col items-center text-black text-2xl font-bold capitalize gap-1 sm:text-3xl lg:text-4xl xl:text-5xl xl:gap-3">
              VisiblePaths Perfect Ride Plans
            </h2>
            <p className="max-w-[60ch] sm:text-lg lg:text-xl xl:text-2xl">
              At VisiblePaths, we offer flexible plans designed to cater to both
              individuals and families, ensuring a seamless car-buying
              experience for everyone.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-0 lg:justify-between lg:relative">
            {pricingPlansData.map((plan, index) => (
              <PricingPlan key={index} index={index} {...plan} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingSec;
