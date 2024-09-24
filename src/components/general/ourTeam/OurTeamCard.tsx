import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

type OurTeamCardProps = {
  name: string;
  position: string;
  image: StaticImageData;
  intro: string;
  linkedInUrl: string;
};

const OurTeamCard = ({
  name,
  position,
  image,
  intro,
  linkedInUrl,
}: OurTeamCardProps) => {
  return (
    <>
      <div
        className={`w-full shadow-team-card rounded-xl overflow-hidden flex flex-col items-center sm:w-1/2 lg:w-1/3`}>
        <Image
          src={image}
          alt={name}
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
        <div className="p-5 pb-7 rounded-xl rounded-t-none border-t-0 border border-accent1">
          <div className="space-y-2">
            <h3 className="text-2.5xl font-bold">{name}</h3>
            <p className="text-lg font-medium text-accent1">{position}</p>
          </div>
          <p className="text-black font-medium text-lg mt-4 lg:text-xl">
            {intro}
          </p>
          <div className="flex mt-6">
            <Link
              href={linkedInUrl}
              target="_blank"
              className="bg-accent1 p-1.5 rounded-full">
              <FaLinkedinIn
                size={16}
                className="w-4 h-auto text-white lg:w-5"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeamCard;
