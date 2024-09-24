import React, { useEffect, useState } from "react";
import { BiXCircle } from "react-icons/bi";
import { BlogContentType, AddEditBlogInputType } from "@/types";
import ImgInput from "./ImgInput";
import Image from "next/image";
import BlogContentInput from "./BlogContentInput";
import { placeholderImg } from "@/assets";
import addBlogToDbService from "@/services/blogs/addBlogToDbService";
import ScreenSpinner from "@/components/general/ScreenSpinner";
import editBlogService from "@/services/blogs/editBlogService";
import revalidateMyPath from "@/actions/revalidateMyPath";
import { useAlert } from "@/context/AlertContext";
type AddEditBlogModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
  modalType: "add" | "edit";
  blogToEditDetails?: AddEditBlogInputType | null;
};

const defaultBlogData: AddEditBlogInputType = {
  _id: "",
  heading: "",
  coverImg: {
    url: "",
    key: "",
  },
  content: [],
};

const AddEditBlogModal = ({
  isModalOpen,
  closeModal,
  modalType = "add",
  blogToEditDetails = null,
}: AddEditBlogModalProps) => {
  const [loading, setLoading] = useState(false);
  const { showAlert } = useAlert();
  const [blogData, setBlogData] = useState<AddEditBlogInputType>(
    blogToEditDetails || defaultBlogData,
  );
  const [coverImgPreview, setCoverImgPreview] = useState<string | null>(null);

  const blogDataInputHandler = (
    key: string,
    value: string | BlogContentType[] | File,
  ) => {
    setBlogData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const coverImageInputHandler = (url: string, key: string) => {
    setBlogData(prev => ({
      ...prev,
      coverImg: { url, key },
    }));
  };

  useEffect(() => {
    if (blogData.coverImg) {
      if (blogData.coverImg instanceof File) {
        setCoverImgPreview(URL.createObjectURL(blogData.coverImg));
      } else {
        setCoverImgPreview(blogData.coverImg.url);
      }
    }
  }, [blogData.coverImg]);

  const addBlogHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await addBlogToDbService(blogData);
    setLoading(false);
    if (response.type === "error") {
      showAlert(response.message, "ERROR");
    } else {
      showAlert(response.message, "SUCCESS");
      await revalidateMyPath("/admin");
      await revalidateMyPath("/blogs");
      setBlogData(defaultBlogData);
      setCoverImgPreview(null);
      closeModal();
    }
  };
  const editBlogHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);
    const response = await editBlogService({
      ...blogData,
    });
    setLoading(false);
    if (response.type === "error") {
      showAlert(response.message, "ERROR");
    } else {
      showAlert(response.message, "SUCCESS");
      await revalidateMyPath("/admin");
      await revalidateMyPath("/blogs");
      setBlogData(defaultBlogData);
      setCoverImgPreview(null);
      closeModal();
    }
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[2] ${
          isModalOpen ? "" : "hidden"
        }`}></div>
      <section className="fixed z-[3] w-full max-w-5xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-xl border-2 px-4 py-6 bg-white md:px-8">
        <div className="absolute top-0 left-0 w-full px-8 bg-white pb-3 pt-4">
          <h2 className="text-center text-2xl font-semibold sm:text-3xl lg:text-4xl">
            {modalType === "add" ? "Add new" : "Edit"} blog
          </h2>
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-1/2 -translate-y-1/2">
            <BiXCircle className="w-7 h-auto sm:w-8 lg:w-10" />
          </button>
        </div>
        <form className="mt-8" onSubmit={e => e.preventDefault()}>
          <div className="max-h-[60vh] overflow-y-auto py-4">
            <div className="mb-4 grid grid-cols-1 gap-4 items-center sm:grid-cols-2">
              <input
                type="text"
                name="heading"
                onChange={e => blogDataInputHandler("heading", e.target.value)}
                id="heading"
                className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full px-6 py-3`}
                placeholder="Blog heading here"
                value={blogData.heading}
              />
              <ImgInput
                file={blogData.coverImg}
                idHtmlFor="coverImg"
                name="coverImg"
                inputHandler={(url, key) => coverImageInputHandler(url, key)}
              />
              {coverImgPreview ? (
                <Image
                  src={coverImgPreview}
                  alt={blogData.heading || "Blog cover image"}
                  width={800}
                  height={800}
                  className="w-auto h-40 mx-auto sm:row-start-1 sm:col-start-2 sm:row-span-2"
                />
              ) : (
                <Image
                  src={placeholderImg}
                  alt="Placeholder image"
                  width={800}
                  height={800}
                  className="w-auto h-40 mx-auto sm:row-start-1 sm:col-start-2 sm:row-span-2"
                />
              )}
            </div>
            <BlogContentInput
              value={blogData.content}
              inputHandler={content => blogDataInputHandler("content", content)}
            />
          </div>
          <button
            type="submit"
            onClick={modalType === "add" ? addBlogHandler : editBlogHandler}
            className="w-full py-2 mt-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700">
            {modalType === "add" ? "Add" : "Update"}
          </button>
        </form>
      </section>
      {loading && <ScreenSpinner spinnerClassName="w-20 h-20" />}
    </>
  );
};

export default AddEditBlogModal;
