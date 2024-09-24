import { BlogDataType } from "@/types";
import React from "react";
import AdminBlogCard from "./AdminBlogCard";

type AdminMyBlogsSecProps = {
  blogs: BlogDataType[];
  editHandler: (id: string) => void;
};

const AdminMyBlogsSec = ({ blogs, editHandler }: AdminMyBlogsSecProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-6">
        {blogs.map(blog => (
          <AdminBlogCard key={blog._id} {...blog} editHandler={editHandler} />
        ))}
      </div>
    </>
  );
};

export default AdminMyBlogsSec;
