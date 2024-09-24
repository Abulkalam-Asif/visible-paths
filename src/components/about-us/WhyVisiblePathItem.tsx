import Image, { StaticImageData } from "next/image";
import React from "react";

type WhyVisiblePathItemProps = {
  icon: StaticImageData;
  title: string;
  description: string;
};

const WhyVisiblePathItem = ({
  icon,
  title,
  description,
}: WhyVisiblePathItemProps) => {
  return (
    <>
      <div className="relative flex flex-col items-center text-center border-2 border-accent1 rounded-tr-3xl rounded-bl-3xl px-8 pb-8 pt-14 shadow-[0px_0px_10px_6px_rgba(0,0,0,0.1)] lg:pt-20 lg:pb-14 lg:rounded-tr-[2.5rem] lg:rounded-bl-[2.5rem] xl:pt-24 xl:rounded-tr-[3rem] xl:rounded-bl-[3rem]">
        <div className="absolute top-0 -translate-y-1/2 bg-accent1 w-20 h-20 flex items-center justify-center rounded-full lg:w-28 lg:h-28 xl:w-36 xl:h-36">
          <Image
            src={icon}
            width={60}
            height={60}
            alt={title}
            className="text-white w-10 h-auto lg:w-14 xl:w-16"
          />
        </div>
        <h4 className="text-xl font-bold sm:text-2xl xl:text-3xl">{title}</h4>
        <p className="mt-2 font-medium sm:text-lg xl:text-xl">{description}</p>
      </div>
    </>
  );
};

export default WhyVisiblePathItem;
