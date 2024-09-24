import { BlogDetailsType } from "@/types";
import Image from "next/image";
import React from "react";
import BlogShareBtns from "./BlogShareBtns";

type BlogDetailsSecProps = {
  blogDetails: BlogDetailsType | null;
};
const BlogDetailsSec = ({ blogDetails }: BlogDetailsSecProps) => {
  return (
    <>
      {blogDetails === null ? (
        <p className="text-2xl text-center">No blog found</p>
      ) : (
        <article className="lg:col-span-3">
          <div className="relative w-full h-auto mb-4 sm:mb-6 lg:mb-8">
            <Image
              src={blogDetails.coverImg.url}
              alt={blogDetails.heading}
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-0 -translate-y-full left-0 text-xs bg-accent1 text-white font-medium px-2 py-1 xs:text-sm sm:text-base sm:py-2 sm:px-4 md:text-lg lg:text-xl lg:py-2.5 lg:px-6 xl:text-2xl">
              {new Date(blogDetails.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-4 sm:text-3xl sm:mb-6 lg:text-4xl lg:mb-8">
            <span>{blogDetails.heading}</span>
          </h1>
          {blogDetails.content.map((content, index) => {
            if (content.type === "title") {
              return (
                <h2
                  key={index}
                  className="text-xl font-bold mb-2 sm:text-2xl sm:mb-3 lg:mb-4 lg:text-3xl">
                  {content.value}
                </h2>
              );
            } else if (content.type === "paragraph") {
              return (
                <p key={index} className="mb-4 sm:text-lg sm:mb-6 lg:mb-8">
                  {content.value}
                </p>
              );
            } else if (content.type === "list") {
              return (
                <ol
                  key={index}
                  className="list-decimal list-inside pl-4 mb-4 space-y-2 sm:text-lg sm:mb-6 lg:mb-8">
                  {Array.isArray(content.value) &&
                    content.value.map((li, index) => <li key={index}>{li}</li>)}
                </ol>
              );
            }
            return null;
          })}
          <BlogShareBtns title={blogDetails.heading} />
          <hr className="mt-4 border-b border-b-black/50" />
        </article>
      )}
    </>
  );
};

export default BlogDetailsSec;
