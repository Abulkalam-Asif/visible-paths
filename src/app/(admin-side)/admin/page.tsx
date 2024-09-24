import AdminClientPage from "@/components/admin-side/admin/AdminClientPage";
import getAllBlogs from "@/database/blogs/getAllBlogs";
import React from "react";

const Admin = async () => {
  const blogs = await getAllBlogs();

  return (
    <>
      <AdminClientPage blogs={blogs} />
    </>
  );
};

export default Admin;
