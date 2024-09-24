import React from "react";
import BlogsHeroSec from "@/components/blogs/BlogsHeroSec";
import BlogDetailsContentSec from "@/components/blogs/blogDetails/BlogDetailsContentSec";
import getBlogById from "@/database/blogs/getBlogById";
import getAllBlogs from "@/database/blogs/getAllBlogs";

type BlogDetailsProps = {
  params: {
    id: string;
  };
};

const BlogDetails = async ({ params }: BlogDetailsProps) => {
  const blogId = params.id;
  const blogDetails = await getBlogById(blogId);

  const blogs = await getAllBlogs();

  return (
    <>
      <BlogsHeroSec
        title="Blogs"
        scrollToId="blogDetailsSec"
        customHeight="lg:h-[70vh]"
      />
      <BlogDetailsContentSec blogDetails={blogDetails} blogs={blogs} />
    </>
  );
};

export default BlogDetails;
