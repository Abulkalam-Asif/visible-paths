import { makingUsDiffImg, ourMissionImg } from "@/assets";
import Image from "next/image";

const MakingUsDiffSec = () => {
  return (
    <>
      <section>
        <div
          className={`max-w-8xl mx-auto w-full flex flex-col px-4 pt-12 md:px-8 md:pt-16 md:flex-row md:items-center md:gap-8 lg:gap-16 xl:px-12 xl:pt-24`}>
          <div className="w-full md:w-2/5">
            {/* Heading to display heading only on mobile */}
            <h2 className="text-center font-bold mb-6 text-2xl sm:text-3xl md:hidden">
              What Makes Us Different?
            </h2>

            <div className="w-full relative">
              <Image
                src={makingUsDiffImg}
                alt={"A woman interacting with a touch screen"}
                width={500}
                height={500}
                className="w-full h-auto relative z-[1] rounded-2xl"
              />
            </div>
          </div>
          <div className="w-full max-w-5xl mx-auto mt-6 md:flex md:flex-col md:items-start md:justify-center md:gap-4 md:w-3/5 xl:gap-8">
            {/* heading to display heading only on desktop */}
            <h2 className="hidden md:block font-bold text-3xl tracking-widest-2 lg:text-4xl xl:text-5xl">
              What Makes Us Different?
            </h2>
            <div className="space-y-4 text-justify text-lg leading-normal lg:text-xl lg:leading-normal xl:text-2.5xl xl:leading-normal xl:space-y-6">
              <p>
                VisiblePaths goes beyond the typical car-buying platforms by
                providing <b>personalised simulations</b> and real-time insights
                based on your unique financial profile. Our{" "}
                <b>AI-driven platform</b> acts as your personal advisor, guiding
                you through the entire process—from{" "}
                <b>selecting your dream car</b> to securing the right financing
                and insurance options. We eliminate the guesswork by offering
                you a complete understanding of how each decision affects your
                financial future.
              </p>
              <p>
                Whether you&apos;re a first-time car buyer or someone looking for
                better <b>financing options</b>, VisiblePaths gives you the
                clarity and confidence to move forward.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakingUsDiffSec;
