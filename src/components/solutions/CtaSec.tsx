import Link from "next/link";
import React from "react";

const CtaSec = () => {
  return (
    <>
      <section className="text-white px-4 py-10 md:py-14 md:px-8 lg:py-20 lg:px-12">
        <div className="max-w-8xl relative before:absolute before:z-[-1] before:top-0 before:left-0 before:bottom-0 before:right-0 before:bg-testimonials-img before:bg-no-repeat before:bg-cover before:bg-center after:absolute after:z-0 after:top-0 after:left-0 after:bottom-0 after:right-0 after:bg-black/80 rounded-lg overflow-hidden mx-auto">
          <div className="relative z-[1] w-full px-2 py-8 flex flex-col gap-4 items-center text-center md:px-8 md:py-12 md:gap-6 lg:py-16 lg:gap-8 xl:px-12">
            <h2 className="z-0 text-2.5xl font-bold max-w-[20ch] capitalize sm:text-3xl lg:text-4xl xl:text-5xl">
              Take Control of Your Car Buying{" "}
              <span className="text-accent1">Journey</span>
            </h2>
            <p className="max-w-[60ch] text-sm sm:text-base lg:text-xl xl:text-2xl">
              Experience seamless car buying with VisiblePaths
            </p>
            <div className="flex items-center gap-2 text-white text-sm sm:text-base md:gap-4 lg:gap-6 lg:text-lg">
              <Link
                href={"/contact-us"}
                className="bg-black border border-white rounded-lg px-4 py-2">
                Contact Sales
              </Link>
              <Link
                href={"/request-demo"}
                className="bg-accent1 border border-accent1 rounded-lg px-4 py-2">
                Try VisiblePaths Today
              </Link>
            </div>
            <p className="max-w-[60ch] text-sm sm:text-base lg:text-xl xl:text-2xl">
              14-day trial, no credit card required.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSec;
