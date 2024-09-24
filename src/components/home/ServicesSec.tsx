import {
  service1Img,
  service2Img,
  service3Img,
  service4Img,
  service5Img,
  service6Img,
  service7Img,
} from "@/assets";
import React from "react";
import Service from "./Service";

const servicesData = [
  {
    hMain: "Welcome to VisiblePaths",
    hSub: "Revolutionizing the Car Buying Experience",
    image: service1Img,
  },
  {
    hMain: "Personalized Onboarding",
    hSub: "Start with Your Financial Profile",
    image: service2Img,
  },
  {
    hMain: "Explore Financing Options",
    hSub: "Navigate Financing with Confidence",
    image: service3Img,
  },
  {
    hMain: "Select Your Car",
    hSub: "Find the Perfect Car within Your Budget",
    image: service4Img,
  },
  {
    hMain: "Compare Rates",
    hSub: "Simplify Insurance Shopping",
    image: service5Img,
  },
  {
    hMain: "Receive Personalized Offer Letters",
    hSub: "Unlock Exclusive Offers Tailored to You",
    image: service6Img,
  },
  {
    hMain: "Complete Your Transaction",
    hSub: "Drive Off in Your New Car",
    image: service7Img,
  },
];

const ServicesSec = () => {
  return (
    <>
      <section className="bg-accent3">
        <div className="max-w-8xl mx-auto px-4 pb-12 md:px-8 md:pb-16 xl:px-12 xl:pb-24">
          <div className="flex flex-col items-center gap-2 mb-6 sm:gap-4 sm:mb-10 md:mb-14 lg:gap-6 xl:mb-16 xl:gap-8">
            <h2 className="text-center text-white bg-accent1 rounded-lg px-4 py-2 text-2xl font-semibold capitalize gap-1 max-w-[30ch] sm:text-3xl sm:px-8 sm:py-3 lg:text-4xl lg:px-10 lg:py-4 xl:text-5xl xl:gap-3">
              How the App Works
            </h2>
            <h2 className="text-center text-black text-2xl font-bold gap-1 max-w-[30ch] sm:text-3xl lg:text-4xl xl:text-5xl xl:gap-3">
              Simplify Car Buying, Financing, and Insurance Decisions
              Effortlessly.
            </h2>
          </div>
          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {servicesData.map((service, index) => (
              <Service
                key={index}
                {...service}
                index={index}
                imageOnLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSec;
