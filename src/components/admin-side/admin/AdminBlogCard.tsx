"use client";
import { BlogDataType } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import AdminLinkButton from "../general/AdminLinkButton";
import AdminButton from "../general/AdminButton";
import { placeholderImg } from "@/assets";
import ScreenSpinner from "@/components/general/ScreenSpinner";
import revalidateMyPath from "@/actions/revalidateMyPath";
import { useAlert } from "@/context/AlertContext";


type AdminBlogCardProps = {
  editHandler: (id: string) => void;
  coverImg: {
    url: string;
    key: string;
  };
  _id: string;
  createdAt: Date;
  heading: string;
  paragraph: string;
};

const AdminBlogCard = ({
  _id,
  createdAt,
  heading,
  coverImg,
  paragraph,
  editHandler,
}: AdminBlogCardProps) => {
  
  const [loading, setLoading] = useState(false);
  const { showAlert } = useAlert();
  const deleteHandler = async () => {
    setLoading(true);
    const response = await fetch(`/api/blogs/${_id}`, {
      method: "DELETE",
    });
    setLoading(false);
    const responseJson = await response.json();
    await revalidateMyPath("/admin");
    await revalidateMyPath("/blogs");
    if (response.ok) {
      showAlert(responseJson.message, 'SUCCESS');
    } else {
      showAlert(responseJson.message, 'ERROR');
    }
  };

  return (
    <>
      <article className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-[0px_0px_4.55px_1.52px_rgba(0,0,0,0.2)]">
        <div className="relative h-64 w-full">
          <Image
            src={coverImg.url || placeholderImg}
            alt={heading}
            width={300}
            height={200}
            className="w-full h-full object-cover"
          />

          <span className="absolute bottom-2 left-4 text-xs bg-accent1 text-white font-medium px-2 py-1">
            {new Date(createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="w-full flex flex-col gap-2.5 p-6">
          <h3
            className="text-2xl font-bold w-full whitespace-nowrap text-ellipsis overflow-hidden"
            title={heading}>
            {heading}
          </h3>
          <p className="text-lg">
            {paragraph?.length > 120
              ? paragraph.slice(0, 120) + "..."
              : paragraph}
          </p>
          <div className="flex items-center gap-2 mt-2">
            <AdminLinkButton text="Details" href={`/blogs/${_id}`} />
            <AdminButton text="Edit" onClick={() => editHandler(_id)} />
            <AdminButton text="Delete" onClick={deleteHandler} />
          </div>
        </div>
      </article>
      {loading && <ScreenSpinner spinnerClassName="w-20 h-20" />}
    </>
  );
};

export default AdminBlogCard;
