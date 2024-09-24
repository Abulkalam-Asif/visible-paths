"use client";
import Spinner2 from "@/components/general/Spinner2";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

type HeroImgsProps = {
  images: StaticImageData[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
  isLoaded: boolean;
  setIsLoaded: (isLoaded: boolean) => void;
  lowResPlaceholder: StaticImageData;
};

const HeroImgs = ({
  images,
  lowResPlaceholder,
  currentSlide,
  isLoaded,
  setIsLoaded,
  setCurrentSlide,
}: HeroImgsProps) => {
  return (
    <>
      <div className="relative w-full min-h-[25rem] h-[60vh] lg:h-screen lg:overflow-hidden">
        <div
          className={`flex w-full h-full items-center justify-center absolute transition-opacity duration-300 ease-in-out ${
            isLoaded ? "hidden" : "block"
          }`}>
          <Spinner2 className="w-24 h-24" />
          {/* <Image
            src={lowResPlaceholder}
            alt="placeholder"
            width={256}
            height={256}
            className={`w-60 h-60`}
          /> */}
        </div>
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`hero image ${index + 1}`}
            width={1920}
            height={1920}
            priority={true}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? "block" : "hidden"
            }`}
            onLoad={() => setIsLoaded(true)} // Trigger state change when full image loads
          />
        ))}
      </div>
      <div className="absolute top-2/3 -translate-y-1/2 right-4 flex flex-col gap-4 lg:top-1/2 lg:gap-8 md:right-8 xl:gap-10 xl:right-12">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full border-2 border-white cursor-pointer lg:w-6 lg:h-6 lg:border-[3px] xl:w-8 xl:h-8 xl:border-4 ${
              currentSlide === index ? "bg-accent1" : "bg-transparent"
            }`}></div>
        ))}
      </div>
    </>
  );
};

export default HeroImgs;
