import { BlogDataType } from "@/types";
import React from "react";
import BlogCard from "./BlogCard";

type BlogsSecProps = {
  blogsData: BlogDataType[] | null;
};

const BlogsSec = ({ blogsData }: BlogsSecProps) => {
  return (
    <>
      <section id="blogsSec" className="bg-white">
        <div className="max-w-8xl mx-auto px-4 py-16 md:px-8 md:py-16 lg:py-20 xl:px-12 xl:py-24">
          <div className="flex flex-col items-center text-center gap-2 mb-8 md:gap-4 xl:gap-6 md:mb-12 lg:mb-16">
            <h3 className="text-black capitalize font-medium text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              our blogs
            </h3>
            <h2 className="flex flex-col items-center text-black text-2xl font-bold capitalize gap-1 sm:text-3xl lg:text-4xl xl:text-5xl xl:gap-3">
              See our latest blogs
            </h2>
          </div>
          {blogsData?.length === 0 ? (
            <h3 className="text-center text-2xl font-semibold text-black">
              No blogs available
            </h3>
          ) : (
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
              {blogsData?.map((blog, index) => (
                <BlogCard key={index} {...blog} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogsSec;
