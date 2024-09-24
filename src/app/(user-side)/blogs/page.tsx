import BlogsHeroSec from "@/components/blogs/BlogsHeroSec";
import React from "react";
import BlogsSec from "@/components/blogs/BlogsSec";
import getAllBlogs from "@/database/blogs/getAllBlogs";

const Blogs = async () => {
  const blogs = await getAllBlogs();
  return (
    <>
      <BlogsHeroSec
        title="Blogs"
        scrollToId="blogsSec"
        customHeight="lg:h-[70vh]"
      />
      <BlogsSec blogsData={blogs} />
    </>
  );
};

export default Blogs;
