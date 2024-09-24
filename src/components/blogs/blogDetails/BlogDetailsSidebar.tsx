"use client";
import React from "react";
import SidebarBlogCard from "./SidebarBlogCard";
import SidebarBlogsSearch from "./SidebarBlogsSearch";
import { BlogDataType } from "@/types";

type BlogDetailsSidebarProps = {
  blogs: BlogDataType[];
};

const BlogDetailsSidebar = ({ blogs }: BlogDetailsSidebarProps) => {
  return (
    <>
      <aside className="lg:col-span-2">
        <SidebarBlogsSearch />
        <div>
          <h3 className="text-black font-bold text-2xl mb-8 lg:text-4xl">
            Latest blogs
          </h3>
          <div>
            {blogs.map((blog, index) => (
              <SidebarBlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

export default BlogDetailsSidebar;
