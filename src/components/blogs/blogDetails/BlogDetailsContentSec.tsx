import { BlogDataType, BlogDetailsType } from "@/types";
import React from "react";
import BlogDetailsSec from "./BlogDetailsSec";
import BlogDetailsSidebar from "./BlogDetailsSidebar";

type BlogDetailsContentSecProps = {
  blogDetails: BlogDetailsType | null;
  blogs: BlogDataType[];
};

const BlogDetailsContentSec = ({
  blogDetails,
  blogs,
}: BlogDetailsContentSecProps) => {
  return (
    <>
      <section id="blogDetailsSec" className="bg-white">
        <div className="max-w-8xl mx-auto px-4 py-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-8 md:px-8 lg:py-20 xl:px-12">
          <BlogDetailsSec blogDetails={blogDetails} />
          <BlogDetailsSidebar blogs={blogs} />
        </div>
      </section>
    </>
  );
};

export default BlogDetailsContentSec;
