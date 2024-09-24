"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { blogsHeroImg, logoShortRedImg, mouseIcon } from "@/assets";
import Spinner2 from "../general/Spinner2";
// import base64Imgs from "@/../public/json/base64.json";

// const lowResPlaceholder = base64Imgs.blogs;
const lowResPlaceholder = logoShortRedImg;

type BlogsHeroSecProps = {
  title: string;
  scrollToId: string;
  customHeight?: string | undefined;
};

const BlogsHeroSec = ({
  title,
  scrollToId,
  customHeight,
}: BlogsHeroSecProps) => {
  const [isLoaded, setIsLoaded] = useState(false); // Track if the full image has loaded

  return (
    <section className="relative lg:max-h-screen">
      <div
        className={`${
          customHeight ? customHeight : "lg:h-screen"
        } relative w-full min-h-[25rem] h-[60vh] lg:overflow-hidden`}>
        {/* Placeholder image */}
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

        {/* Full-size image */}
        <Image
          src={blogsHeroImg}
          alt="a car"
          width={1920}
          height={1920}
          priority={true}
          className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out ${
            isLoaded ? "block" : "hidden"
          }`}
          onLoad={() => setIsLoaded(true)} // Trigger state change when full image loads
        />
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-0 text-white rounded-tr-[1.25em] bg-[#050505]/40 px-4 py-3 text-4xl sm:text-5xl md:text-6xl md:px-8 md:py-4 lg:text-7xl xl:text-7.5xl xl:px-12">
        <h1 className="font-bold xl:leading-tight ">{title}</h1>
      </div>

      {isLoaded && (
        <>
          <Link
            href={`#${scrollToId}`}
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
  );
};

export default BlogsHeroSec;
