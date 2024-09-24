import React from "react";
import { FaCircle } from "react-icons/fa";

type LiProps = {
  className?: string;
  text: string | React.ReactNode;
};

const Li = ({ text, className = "" }: LiProps) => {
  return (
    <>
      <li className={`flex items-start gap-2 ${className}`}>
        <FaCircle size={8} className="w-2 mt-2 h-auto min-w-max text-accent1" />
        <span>{text}</span>
      </li>
    </>
  );
};

export default Li;
