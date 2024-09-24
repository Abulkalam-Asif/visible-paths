import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <>
      <div className="flex flex-col justify-center relative z-0 py-6 px-6 text-white bg-accent1 sm:px-10 sm:py-8 lg:w-1/2 xl:px-20 xl:py-16">
        <div className="relative z-[1] flex flex-col gap-2 md:gap-4">
          <h3 className="capitalize font-medium text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
            Contact Sales
          </h3>
          <h2 className="max-w-[15ch] text-2xl font-bold capitalize gap-1 sm:text-3xl lg:text-4xl xl:text-5xl">
            Get in Touch with Our Sales Team
          </h2>
          <p className="text-xs xs:text-sm md:text-base lg:text-lg xl:text-xl">
            Ready to Transform Your Customer Experience? Let&apos;s Connect.
          </p>
        </div>
        <ul className="relative space-y-3 mt-6 z-[1] md:text-lg md:space-y-5 md:mt-8 lg:text-xl lg:space-y-7 lg:mt-10 xl:text-2xl">
          <li className="flex items-center gap-4 md:gap-5 lg:gap-7">
            <FaPhone className="-scale-x-100 w-5 h-auto md:w-7 lg:w-8 xl:w-10" />
            <span>(617) 798-2566</span>
          </li>
          <li className="flex items-center gap-4 md:gap-5 lg:gap-7">
            <FaEnvelope className="w-5 h-auto md:w-7 lg:w-8 xl:w-10" />
            <span>solutions@VisiblePaths.com</span>
          </li>
          <li className="flex items-center gap-4 md:gap-5 lg:gap-7">
            <FaLocationDot className="w-5 h-auto md:w-7 lg:w-8 xl:w-10" />
            <span>
              44 Portland St, FL 4<br />
              Worcester, MA, 01608
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
