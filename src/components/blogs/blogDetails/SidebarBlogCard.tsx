import Image from "next/image";
import Link from "next/link";
import React from "react";

type SidebarBlogCardProps = {
  _id: string;
  coverImg: {
    url: string;
    key: string;
  };
  heading: string;
  paragraph: string;
};

const SidebarBlogCard = ({
  _id,
  coverImg,
  heading,
  paragraph,
}: SidebarBlogCardProps) => {
  return (
    <>
      <Link
        href={`/blogs/${_id}`}
        className="grid grid-cols-3 items-center justify-between space-x-4 mb-6 max-w-sm sm:max-w-lg">
        <div className="h-auto">
          <Image
            src={coverImg.url}
            alt={heading}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col-span-2">
          <h4
            className="text-lg font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden sm:text-xl xl:text-1.5xl"
            title={heading}>
            {heading}
          </h4>
          <p className="text-xs text-gray-500 xs:text-sm sm:text-base xl:text-lg">
            {paragraph.length > 80 ? paragraph.slice(0, 80) + "..." : paragraph}
          </p>
        </div>
      </Link>
    </>
  );
};

export default SidebarBlogCard;
