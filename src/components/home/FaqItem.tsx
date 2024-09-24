import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

type FaqItemProps = {
  question: string;
  answer: string;
  isActive: boolean;
  index: number;
  toggleFaq: () => void;
};

const FaqItem = ({
  question,
  answer,
  isActive,
  toggleFaq,
  index,
}: FaqItemProps) => {
  return (
    <>
      <li
        className={`${
          isActive
            ? "bg-[#F7F7F7]/10 rounded-tr-2.5xl rounded-bl-2.5xl"
            : "border-b-[0.5px] border-b-[#F7F7F7]/80"
        }`}>
        <button
          onClick={toggleFaq}
          className="relative w-full text-start px-4 py-4">
          <p className="mr-6 leading-none font-semibold md:text-lg md:leading-none xl:text-xl xl:leading-none">{`${
            index + 1
          }. ${question}`}</p>
          <span className="absolute right-4 top-6 xl:top-6 xl:right-5">
            {isActive ? (
              <FaMinus className="w-4 h-auto md:w-5 text-accent1" />
            ) : (
              <FaPlus className="w-4 h-auto md:w-5 text-accent1" />
            )}
          </span>
          <div
            className={`grid ${
              isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            } transition-grid-rows duration-300`}>
            <div className="overflow-hidden">
              <p className="pt-3 xl:text-lg">{answer}</p>
            </div>
          </div>
        </button>
      </li>
    </>
  );
};

export default FaqItem;
