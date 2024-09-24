import { joinThePathImg } from "@/assets";
import Image from "next/image";

const JoinThePathSec = () => {
  return (
    <>
      <section className="bg-black text-white">
        <div
          className={`max-w-8xl mx-auto w-full flex flex-col px-4 pt-12 pb-12 md:px-8 md:pb-16 md:flex-row md:items-center md:gap-8 lg:gap-16 xl:px-12 xl:pt-16 xl:pb-24`}>
          <div className="w-full md:w-1/2">
            {/* Heading to display heading only on mobile */}
            <h2 className="text-center font-bold mb-6 text-2xl sm:text-3xl md:hidden">
              Join the Path to Better Decisions
            </h2>

            <div className="w-full relative">
              <Image
                src={joinThePathImg}
                alt={"a group of people"}
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
                Join the Path to Better Decisions
              </h2>
            </div>
            <p className="text-justify text-lg leading-normal lg:text-xl lg:leading-normal xl:text-2.5xl xl:leading-normal">
              At VisiblePaths, we don&apos;t just provide a platform—we create
              opportunities for financial growth and stability. Whether you&apos;re
              just starting your car-buying journey or exploring new insurance
              options, VisiblePaths is here to help. Let us guide you on the
              path to smarter, more confident decisions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default JoinThePathSec;
