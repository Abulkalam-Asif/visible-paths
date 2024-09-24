import { placeholderImg } from "@/assets";
import { BlogDataType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CgArrowTopRight } from "react-icons/cg";

type BlogCardProps = BlogDataType;

const BlogCard = ({
  _id,
  createdAt,
  heading,
  coverImg,
  paragraph,
}: BlogCardProps) => {
  return (
    <>
      <article  className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-[0px_0px_4.55px_1.52px_rgba(0,0,0,0.2)]">
        <div className="relative h-64 w-full">
          <Image
            src={coverImg.url || placeholderImg}
            alt={heading}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />

          <span className="absolute bottom-2 left-4 text-xs bg-accent1 text-white font-medium px-2 py-1">
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="w-full flex flex-col gap-2.5 p-6">
          <h3
            className="text-2xl font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden"
            title={heading}>
            {heading}
          </h3>
          <p className="text-lg">
            {paragraph.length > 120
              ? paragraph.slice(0, 120) + "..."
              : paragraph}
          </p>
          <Link
            href={`/blogs/${_id}`}
            className="flex items-center font-bold w-fit text-white bg-accent1 rounded-md mt-2 text-lg gap-3 px-5 py-3">
            <span>Read More</span>
            <CgArrowTopRight className="w-6 h-auto" />
          </Link>
        </div>
      </article>
    </>
  );
};

export default BlogCard;
