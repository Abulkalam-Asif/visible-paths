import { faqImg } from "@/assets";
import Image from "next/image";
import React from "react";
import FaqsList from "./FaqsList";

const FaqsSec = () => {
  return (
    <>
      <section className="bg-black text-white">
        <div className="max-w-8xl mx-auto px-4 py-16 md:px-8 md:py-20 lg:py-24 lg:grid lg:grid-cols-5 lg:gap-12 lg:items-start xl:gap-16 xl:px-12 xl:py-28">
          <div className="lg:col-span-3">
            <div className="capitalize text-center mb-3 lg:text-start lg:mb-5">
              <h3 className="text-xl font-medium mb-1 sm:mb-2 sm:text-2xl md:text-3xl xl:text-4xl">
                have questions?
              </h3>
              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl xl:text-5xl">
                we&apos;ve got answers!
              </h2>
            </div>
            <FaqsList />
          </div>
          <div className="hidden lg:col-span-2 lg:block">
            <Image
              src={faqImg}
              alt="cars on road"
              width={1920}
              height={1080}
              className="w-full h-full object-cover`"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqsSec;
