import { aboutUsSecImg } from "@/assets";
import Image from "next/image";

const AboutUsSec = () => {
  return (
    <>
      <section id="aboutUsSec">
        <div
          className={`max-w-8xl mx-auto w-full flex flex-col px-4 pt-12 md:px-8 md:pt-16 md:flex-row md:items-center md:gap-8 lg:gap-16 xl:px-12 xl:pt-24`}>
          <div className="w-full md:w-2/5">
            {/* Heading to display heading only on mobile */}
            <h3 className="text-center font-medium mb-4 text-xl sm:text-2xl md:hidden">
              About VisiblePaths
            </h3>
            <h2 className="text-center font-bold mb-6 text-2xl sm:text-3xl md:hidden">
              Your Guide to Smarter Car Buying Decisions
            </h2>

            <div className="w-full relative">
              <Image
                src={aboutUsSecImg}
                alt={"About VisiblePaths"}
                width={500}
                height={500}
                className="w-full h-auto relative z-[1] rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-5xl mx-auto mt-6 md:flex md:flex-col md:items-start md:justify-center md:gap-4 md:w-3/5 xl:gap-8">
            {/* Div to display heading only on desktop */}
            <div className="hidden md:block">
              <h3 className="font-medium text-2xl mb-4 lg:text-3xl xl:text-4xl xl:mb-2">
                About VisiblePaths
              </h3>
              <h2 className="font-bold text-3xl tracking-widest-2 lg:text-4xl xl:text-5xl">
                Your Guide to Smarter Car Buying Decisions
              </h2>
            </div>
            <div className="space-y-4 text-justify text-lg leading-normal lg:text-xl lg:leading-normal xl:text-2.5xl xl:leading-normal xl:space-y-6">
              <p>
                Welcome to VisiblePaths—an innovative platform designed to
                simplify the complex journey of car buying, financing, and
                insurance for everyone, from first-time buyers to seasoned car
                enthusiasts.
              </p>
              <p>
                At VisiblePaths, we believe everyone deserves the confidence to
                make informed decisions, and we are committed to providing you
                with the tools you need to navigate every step of the car
                ownership process.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSec;
