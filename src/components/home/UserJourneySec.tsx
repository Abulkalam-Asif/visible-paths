import { userJourneyImg } from "@/assets";
import Image from "next/image";
import React from "react";

const UserJourneySec = () => {
  return (
    <>
      <section className="bg-accent3">
        <div className="w-full py-12 md:py-16 xl:py-24">
          <div className="flex flex-col items-center gap-2 mb-10 md:gap-4 xl:gap-6 md:mb-16 xl:mb-20">
            <h2 className="text-center text-white bg-accent1 rounded-lg px-4 py-2 text-2xl font-bold capitalize gap-1 max-w-[30ch] sm:text-3xl sm:px-8 sm:py-3 lg:text-4xl lg:px-10 lg:py-4 xl:text-5xl xl:gap-3">
              User Journey
            </h2>
          </div>
          <div className="w-full h-auto rounded-2xl overflow-hidden">
            <Image
              src={userJourneyImg}
              alt="user journey"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserJourneySec;
