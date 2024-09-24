import React from "react";

type BlogParagraphInputProps = {
  value: string;
  index: number;

  inputHandler: (index: number, value: string) => void;
};

const BlogParagraphInput = ({
  index,
  value,
  inputHandler,
}: BlogParagraphInputProps) => {
  return (
    <>
      <textarea
        placeholder="Paragraph"
        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-4 py-2"
        value={value}
        onChange={e => inputHandler(index, e.target.value)}
      />
    </>
  );
};

export default BlogParagraphInput;
