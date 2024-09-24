import Image, { StaticImageData } from "next/image";
import React from "react";

type WhyChooseAndAdvCardProps = {
  icon: StaticImageData;
  title: string;
  description: string;
  type: "why-choose" | "advantage";
};

const WhyChooseAndAdvCard = ({
  icon,
  title,
  description,
  type,
}: WhyChooseAndAdvCardProps) => {
  return (
    <>
      <div
        className={`flex flex-col items-center gap-6 px-6 py-10 rounded-lg ${
          type === "why-choose"
            ? "border border-accent1 shadow-[0px_0px_10px_6px_rgba(0,0,0,0.1)]"
            : ""
        } lg:py-12 lg:gap-8 xl:gap-10`}>
        <div className="w-20 h-20 flex items-center justify-center rounded-full lg:w-28 lg:h-28 xl:w-32 xl:h-32">
          <Image
            src={icon}
            width={60}
            height={60}
            alt={title}
            className="text-white w-full h-auto"
          />
        </div>
        <div className="text-center space-y-2 md:space-y-4 lg:space-y-6 xl:space-y-8">
          <h4 className="text-1.5xl font-bold md:text-2xl xl:text-2.5xl">
            {title}
          </h4>
          <p className="lg:text-lg">{description}</p>
        </div>
      </div>
    </>
  );
};

export default WhyChooseAndAdvCard;
