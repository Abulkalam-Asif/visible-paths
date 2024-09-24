"use client";
import React, { useEffect, useState } from "react";
import AdminButton from "../general/AdminButton";
import AdminMyBlogsSec from "./AdminMyBlogsSec";
import AddEditBlogModal from "./AddEditBlogModal";
import { BlogDataType, AddEditBlogInputType } from "@/types";
import getBlogByIdService from "@/services/blogs/getBlogByIdService";
import ScreenSpinner from "@/components/general/ScreenSpinner";
import { useRouter } from "next/navigation";
import { useAlert } from "@/context/AlertContext";
type AdminClientPageProps = {
  blogs: BlogDataType[];
};

const AdminClientPage = ({ blogs }: AdminClientPageProps) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  const { showAlert } = useAlert();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setBlogToEditDetails(null);
    setModalType("add");
  };

  const [blogToEditDetails, setBlogToEditDetails] =
    useState<AddEditBlogInputType | null>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const editBlogClickHandler = async (id: string) => {
    if (id) {
      setLoading(true);
      const blogData = await getBlogByIdService(id);
      setLoading(false);
      if (blogData.error) {
        showAlert(blogData.error, 'ERROR');
      } else {
        setBlogToEditDetails(blogData.data);
        setModalType("edit");
        openModal();
      }
    }
  };

  const logoutHandler = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "GET",
      });

      if (res.ok) {
        showAlert("Logged out successfully", 'SUCCESS');
        router.push("/");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      showAlert("Error while logging out", 'ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section aria-hidden={isModalOpen}>
        <div className="font-medium max-w-8xl mx-auto px-4 py-8 md:px-8 md:py-20 lg:py-24 xl:px-12">
          <div className="flex items-center justify-between mb-8 lg:mb-12">
            <h1 className="text-2xl font-bold lg:text-4xl">My blogs</h1>
            <div className="space-x-2">
              <AdminButton
                text="Add blog"
                onClick={() => {
                  setModalType("add");
                  openModal();
                }}
              />
              <AdminButton text="logout" onClick={logoutHandler} />
            </div>
          </div>
          {blogs.length === 0 ? (
            <p className="text-lg text-center">
              You have not written any blog yet. Click on the &quot;Add
              blog&quot; button to write your first blog.
            </p>
          ) : (
            <AdminMyBlogsSec blogs={blogs} editHandler={editBlogClickHandler} />
          )}
        </div>
      </section>
      {isModalOpen && (
        <AddEditBlogModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalType={modalType}
          blogToEditDetails={blogToEditDetails}
        />
      )}
      {loading && <ScreenSpinner spinnerClassName="w-20 h-20" />}
    </>
  );
};

export default AdminClientPage;
