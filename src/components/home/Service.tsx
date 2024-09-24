import Image, { StaticImageData } from "next/image";

type ServiceProps = {
  hMain: string;
  hSub: string;
  index: number;
  image: StaticImageData;
  imageOnLeft: boolean;
};

const Service = ({ hMain, hSub, index, image, imageOnLeft }: ServiceProps) => {
  return (
    <>
      <section
        className={`w-full flex flex-col-reverse ${
          imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
        } md:items-center md:gap-8 lg:gap-12 xl:gap-14`}>
        <div className="w-full">
          <div className="w-full relative">
            <Image
              src={image}
              alt={hMain}
              width={1200}
              height={1200}
              className="w-full h-auto relative z-[1] rounded-2xl"
            />
          </div>
        </div>
        <div
          className={`w-full mx-auto flex flex-col items-center justify-center text-center gap-2 mb-4 md:mb-0 ${
            imageOnLeft
              ? "md:items-start md:text-start"
              : "md:items-end md:text-end"
          } lg:gap-4 xl:gap-6`}>
          <span className="text-2xl text-accent1 font-bold sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
            0{index + 1}
          </span>
          <h3 className="text-2xl font-bold sm:text-3xl md:max-w-[15ch] md:text-balance md:text-4xl lg:text-5xl xl:text-5.5xl">
            {hMain}
          </h3>
          <h4 className="text-xl font-semibold sm:text-2.5xl md:text-3xl md:max-w-[20ch] md:text-balance lg:text-4xl xl:text-5xl">
            {hSub}
          </h4>
        </div>
      </section>
    </>
  );
};

export default Service;
