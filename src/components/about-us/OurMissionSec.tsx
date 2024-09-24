import { ourMissionImg } from "@/assets";
import Image from "next/image";

const OurMissionSec = () => {
  return (
    <>
      <section>
        <div
          className={`max-w-8xl mx-auto w-full flex flex-col px-4 pt-12 md:px-8 md:pt-16 md:flex-row-reverse md:items-center md:gap-8 lg:gap-16 xl:px-12 xl:pt-24`}>
          <div className="w-full md:w-2/5">
            {/* Heading to display heading only on mobile */}
            <h2 className="text-center font-bold mb-6 text-2xl sm:text-3xl md:hidden">
              Our Mission
            </h2>

            <div className="w-full relative">
              <Image
                src={ourMissionImg}
                alt={"A man and a woman interacting with a touch screen"}
                width={500}
                height={500}
                className="w-full h-auto relative z-[1] rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-5xl mx-auto mt-6 md:flex md:flex-col md:items-start md:justify-center md:gap-4 md:w-3/5 xl:gap-8">
            {/* heading to display heading only on desktop */}
            <h2 className="hidden md:block font-bold text-3xl tracking-widest-2 lg:text-4xl xl:text-5xl">
              Our Mission
            </h2>
            <p className="text-justify text-lg leading-normal lg:text-xl lg:leading-normal xl:text-2.5xl xl:leading-normal">
              At VisiblePaths, our mission is to empower individuals of all
              backgrounds by transforming the way they approach car ownership.
              Through our AI-powered platform, we offer a seamless, multilingual
              experience that combines car selection, financing advice, and
              insurance options—all in one place. We help you explore the impact
              of your credit score on car financing, understand your loan terms,
              and compare insurance rates to make the best possible decision for
              your lifestyle and budget.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMissionSec;
