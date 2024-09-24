"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import HeroImgs from "./HeroImgs";
import { hero1Img, hero2Img, hero3Img, logoShortRedImg, mouseIcon } from "@/assets";
import Image from "next/image";
// import base64Imgs from "@/../public/json/base64.json";

const images = [hero1Img, hero2Img, hero3Img];
// const lowResPlaceholder = base64Imgs.home;
const lowResPlaceholder = logoShortRedImg;
const taglines = [
  "Simplify Car Buying with Smart and Personalized Guidance",
  "Your All-in-One Solution for Car Ownership",
  "Seamless Car Buying, Financing and Insurance Solutions",
];

const HeroSec = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false); // Track if the full image has loaded

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative lg:max-h-screen">
        <HeroImgs
          images={images}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
          lowResPlaceholder={lowResPlaceholder}
          isLoaded={isLoaded}
          setIsLoaded={setIsLoaded}
        />
        {isLoaded && (
          <>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full max-w-[60%]">
              {taglines.map((tagline, index) => (
                <div
                  key={index}
                  className={`${
                    index !== 0 ? "absolute top-0 left-0" : ""
                  } text-white w-full max-w-[20ch] rounded-tr-[2em] bg-[#050505]/20 backdrop-blur-md pl-4 pr-1 py-3 transition-opacity duration-300 xs:text-lg sm:text-2xl sm:py-4 md:text-2.5xl md:pl-8 md:pr-0 lg:max-w-[30ch] lg:text-4xl lg:py-6 lg:pl-8 lg:pr-4 xl:pl-12 xl:pr-8 xl:text-5xl ${
                    index !== currentSlide ? "opacity-0" : "opacity-100"
                  }`}>
                  <h1 className={`font-bold xl:leading-tight`}>{tagline}</h1>
                </div>
              ))}
              <Link
                href={"/request-demo"}
                className="flex items-center font-bold gap-2 w-fit text-white bg-accent1 py-1.5 px-3 rounded-md ml-4 mt-6 text-xs sm:text-sm sm:gap-4 sm:mt-8 md:ml-8 md:text-base lg:ml-8 lg:text-xl lg:gap-6 lg:px-6 lg:py-3 xl:text-2xl xl:ml-12 lg:mt-10 xl:gap-8 xl:mt-14">
                <span>Request Demo</span>
                <CgArrowTopRight className="w-3 h-auto sm:w-4 md:w-5 lg:w-6" />
              </Link>
            </div>
            <Link
              href={`#videoSec`}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-2">
              <Image
                src={mouseIcon}
                alt="scroll down"
                width={60}
                height={60}
                className="h-10 w-auto lg:h-12 xl:h-14"
              />
            </Link>
          </>
        )}
      </section>
    </>
  );
};

export default HeroSec;
