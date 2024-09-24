import Image, { StaticImageData } from "next/image";
import React from "react";

type ContactInfoItemProps = {
  icon: StaticImageData;
  alt: string;
  text: string | JSX.Element;
};

const ContactInfoItem = ({ icon, alt, text }: ContactInfoItemProps) => {
  return (
    <>
      <li className="flex items-center gap-4 md:gap-5 lg:gap-7">
        <Image
          src={icon}
          alt={alt}
          width={20}
          height={20}
          className="w-5 h-auto md:w-7 lg:w-8 xl:w-9"
        />
        <span className="font-medium text-lg sm:text-xl lg:text-2xl xl:text-3xl">
          {text}
        </span>
      </li>
    </>
  );
};

export default ContactInfoItem;
