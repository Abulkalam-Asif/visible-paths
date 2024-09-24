import React, { useEffect, useState } from "react";
import AdminButton from "../general/AdminButton";
import { BlogContentType } from "@/types";
import { IoTrashSharp } from "react-icons/io5";
import BlogTitleInput from "./BlogTitleInput";
import BlogParagraphInput from "./BlogParagraphInput";
import BlogListInput from "./BlogListInput";

type BlogContentInputProps = {
  value: BlogContentType[];
  inputHandler: (content: BlogContentType[]) => void;
};

const updateContentValue = (
  contentItems: BlogContentType[],
  index: number,
  newValue: any,
) => {
  const updatedItems = [...contentItems];
  updatedItems[index].value = newValue;
  return updatedItems;
};

const BlogContentInput = ({ value, inputHandler }: BlogContentInputProps) => {
  const [contentItems, setContentItems] = useState<BlogContentType[]>(value);

  const handleDeleteContentItem = (index: number) => {
    setContentItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateContentValue = (
    index: number,
    value: string | string[],
  ) => {
    setContentItems(prev => updateContentValue(prev, index, value));
  };

  useEffect(() => {
    inputHandler(contentItems);
  }, [contentItems]);

  return (
    <div>
      {contentItems.map(({ type, value }, index) => (
        <div
          key={index}
          className="flex w-full items-start gap-2 mb-4 bg-gray-100 px-2 py-2 rounded-lg">
          {type === "title" ? (
            <BlogTitleInput
              index={index}
              value={typeof value === "string" ? value : ""}
              inputHandler={handleUpdateContentValue}
            />
          ) : type === "paragraph" ? (
            <BlogParagraphInput
              index={index}
              value={typeof value === "string" ? value : ""}
              inputHandler={handleUpdateContentValue}
            />
          ) : (
            <BlogListInput
              valuesList={typeof value === "object" ? value : []}
              index={index}
              inputHandler={handleUpdateContentValue}
            />
          )}
          <button
            type="button"
            onClick={() => handleDeleteContentItem(index)}
            className="p-1 rounded-lg text-red-500 hover:bg-gray-400">
            <IoTrashSharp className="w-6 h-6" />
          </button>
        </div>
      ))}

      {/* Add new content buttons */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <AdminButton
          type="button"
          text="+ Title"
          size="small"
          className="uppercase"
          onClick={() =>
            setContentItems(prev => [...prev, { type: "title", value: "" }])
          }
        />
        <AdminButton
          type="button"
          text="+ Paragraph"
          size="small"
          className="uppercase"
          onClick={() =>
            setContentItems(prev => [...prev, { type: "paragraph", value: "" }])
          }
        />
        <AdminButton
          type="button"
          text="+ List"
          size="small"
          className="uppercase"
          onClick={() =>
            setContentItems(prev => [...prev, { type: "list", value: [] }])
          }
        />
      </div>
    </div>
  );
};

export default BlogContentInput;
