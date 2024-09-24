import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowTopRight } from "react-icons/cg";
import { FaArrowCircleRight } from "react-icons/fa";

type PricingPlanProps = {
  icon: StaticImageData;
  title: string;
  price: string;
  per: string;
  description: string;
  features: string[];
  index: number;
  isHighlighted: boolean;
};

const PricingPlan = ({
  icon,
  title,
  price,
  per,
  description,
  features,
  index,
  isHighlighted,
}: PricingPlanProps) => {
  return (
    <>
      <div
        className={`flex flex-col gap-4 border border-accent1 rounded-2xl shadow-pricing p-6 text-white ${
          isHighlighted
            ? "bg-accent1 lg:scale-115 lg:z-[1]"
            : "bg-black lg:scale-95"
        } md:p-8 lg:w-full lg:p-4 lg:gap-4 xl:p-6`}>
        <div className="flex items-center justify-between">
          <div
            className={`relative w-20 h-20 flex items-center justify-center rounded-full md:w-24 md:h-24 lg:w-16 lg:h-16 xl:w-20 xl:h-20`}>
            <Image
              src={icon}
              alt={title}
              width={64}
              height={64}
              className="w-full h-auto"
            />
          </div>
          {isHighlighted && (
            <span className="font-bold text-1.5xl">(2-5 Members)</span>
          )}
        </div>
        <h3
          className={`text-xl font-bold uppercase bg-white text-accent1 px-4 py-1 w-fit rounded-full text-center md:text-2xl md:px-6 md:py-2 lg:w-full lg:text-base lg:px-2 lg:py-1 xl:text-xl`}>
          {title}
        </h3>
        <p>
          <span className="font-bold text-2xl md:text-3xl lg:text-xl xl:text-2xl">
            {price}
          </span>
          <span className={`text-white font-medium md:text-xl lg:text-base`}>
            {" "}
            {per}
          </span>
        </p>
        <p className="md:text-lg lg:text-base">{description}</p>
        <div className="space-y-2 md:text-lg md:space-y-4 lg:text-sm lg:space-y-2">
          <p className="font-bold">Unlock These Benefits:</p>
          <ul className="space-y-2 md:space-y-3 lg:space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <FaArrowCircleRight
                  className={`text-white w-5 min-w-5 mt-1 h-auto`}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 mt-4 flex items-end lg:mt-2">
          <Link
            href="/pricing"
            className={`w-full flex items-center justify-center px-2 py-2 rounded-full gap-2 bg-white text-accent1 text-lg font-bold md:text-1.5xl md:py-3 md:px-4 lg:text-lg lg:py-2 lg:px-3 xl:text-xl`}>
            <span>Get Started Now!</span>
            <CgArrowTopRight className="w-5 h-auto" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
