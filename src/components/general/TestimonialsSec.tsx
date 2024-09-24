"use client";
import { testimonialIcon } from "@/assets";
import Image from "next/image";
import React, { useState } from "react";
import { BiCaretLeftCircle, BiCaretRightCircle } from "react-icons/bi";

const testimonialsData = [
  {
    quote:
      "As an immigrant with a family, navigating the car-buying process was incredibly challenging. The language barriers and unfamiliar financial systems made it even harder. If I had VisiblePaths back then, it would have been like having a trusted friend guiding me through every step, helping me avoid the mistakes I made.",
    name: "Mara Avalos",
  },
  {
    quote:
      "After my husband suddenly passed away, I felt overwhelmed with so many financial decisions and the urgency to replace my unreliable vehicle. VisiblePaths would have guided me through that process and given me the peace of mind I needed.",
    name: "Malayah Hensley",
  },
  {
    quote:
      "Back then, I made so many mistakes because I didn't know any better. VisiblePaths would have been a game-changer.",
    name: "Dariel Wright",
  },
];

const TestimonialsSec = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonialsData.length);
  };
  const handlePrev = () => {
    setActiveIndex(
      prev => (prev - 1 + testimonialsData.length) % testimonialsData.length,
    );
  };

  return (
    <>
      <section className="relative before:absolute before:z-0 before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-testimonials-img before:bg-no-repeat before:bg-cover before:bg-center after:absolute after:z-[1] after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-black/80">
        <div className="relative max-w-8xl text-white text-center z-[2] mx-auto px-4 py-20 md:px-8 md:py-28 xl:px-12 xl:py-24">
          <div className="relative">
            {testimonialsData.map((testimonial, index) => (
              <p
                key={index}
                className={`${
                  index === 0
                    ? "relative"
                    : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                } ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                } w-full transition-opacity duration-300 flex justify-center gap-2`}>
                <span className="text-5xl self-start -translate-y-1/3 md:text-6xl">
                  &#x275D;
                </span>
                <span className="max-w-[70ch] md:text-xl xl:text-2xl">
                  {testimonial.quote}
                </span>
                <span className="text-5xl self-end translate-y-1/2 md:text-6xl">
                  &#x275E;
                </span>
              </p>
            ))}
          </div>
          <div className="flex items-center justify-center my-8 md:my-12 xl:my-16">
            <hr className="border-t-2 border-t-white w-1/3" />
            <Image
              src={testimonialIcon}
              alt="Testimonial"
              width={40}
              height={40}
              className="w-10 h-auto xl:w-12"
            />
            <hr className="border-t-2 border-t-white w-1/3" />
          </div>
          <div className="relative">
            {testimonialsData.map((testimonial, index) => (
              <h4
                key={index}
                className={`
                  ${
                    index === 0
                      ? "relative"
                      : "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  }
                  ${
                    index === activeIndex ? "opacity-100" : "opacity-0"
                  } w-full text-3xl font-medium transition-opacity duration-300 md:text-4xl xl:text-5xl`}>
                {testimonial.name}
              </h4>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 md:mt-6 xl:gap-8 xl:mt-10">
            <button onClick={handlePrev}>
              <BiCaretLeftCircle
                size={32}
                className="w-8 h-auto md:w-10 xl:w-12"
              />
            </button>
            <button onClick={handleNext}>
              <BiCaretRightCircle
                size={32}
                className="w-8 h-auto md:w-10 xl:w-12"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSec;
