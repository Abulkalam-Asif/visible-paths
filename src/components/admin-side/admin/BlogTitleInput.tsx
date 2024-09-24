import React from "react";

type BlogTitleInputProps = {
  value: string;
  index: number;
  inputHandler: (index: number, value: string) => void;
};

const BlogTitleInput = ({ index, value, inputHandler }: BlogTitleInputProps) => {
  return (
    <>
      <input
        type="text"
        placeholder="Title"
        value={value}
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block px-4 py-2"
        onChange={e => inputHandler(index, e.target.value)}
      />
    </>
  );
};

export default BlogTitleInput;
