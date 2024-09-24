import { ourVisionImg } from "@/assets";
import Image from "next/image";

const OurVisionSec = () => {
  return (
    <>
      <section className="bg-black text-white">
        <div
          className={`max-w-8xl mx-auto w-full flex flex-col px-4 pt-12 mt-12 md:px-8 md:pt-16 md:mt-16 md:flex-row-reverse md:items-center md:gap-8 lg:gap-16 xl:px-12 xl:pt-24 xl:mt-24`}>
          <div className="w-full md:w-1/2">
            {/* Heading to display heading only on mobile */}
            <h2 className="text-center font-bold mb-6 text-2xl sm:text-3xl md:hidden">
              Our Vision
            </h2>

            <div className="w-full relative">
              <Image
                src={ourVisionImg}
                alt={"Our Vision"}
                width={500}
                height={500}
                className="w-full h-auto relative z-[1]"
              />
            </div>
          </div>
          <div className="w-full max-w-5xl mx-auto mt-6 md:flex md:flex-col md:items-start md:justify-center md:gap-4 md:w-1/2 xl:gap-8">
            {/* Div to display heading only on desktop */}
            <div className="hidden md:block">
              <h2 className="font-bold text-3xl tracking-widest-2 lg:text-4xl xl:text-5xl">
                Our Vision
              </h2>
            </div>
            <p className="text-justify text-lg leading-normal lg:text-xl lg:leading-normal xl:text-2.5xl xl:leading-normal">
              We envision a world where financial literacy is the norm, not the
              exception. By equipping individuals with the right tools,
              VisiblePaths aims to revolutionize the car-buying experience,
              making it transparent, efficient, and empowering for all.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurVisionSec;
