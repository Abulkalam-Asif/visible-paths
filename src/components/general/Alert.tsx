"use client";
import { useAlert } from "@/context/AlertContext";
import { closeIcon } from "@/assets";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";
import { BiSolidError } from "react-icons/bi";

type AlertProps = {
  type: string;
  message: string;
  hideAlert: () => void;
};

const Alert = ({ type, message, hideAlert }: AlertProps) => {
  return (
    <div
      className={`fixed z-50 top-4 right-4 px-4 max-w-[calc(100%-2rem)] bg-white border-2 border-accent-1-base text-lg shadow-xl rounded-lg flex items-center overflow-hidden`}>
      <span className="p-2">
        {type === "SUCCESS" && (
          <FaCheck size={16} className="w-4 h-auto min-w-4" />
        )}
        {type === "WARNING" && (
          <RiErrorWarningFill size={16} className="w-4 h-auto min-w-4" />
        )}
        {type === "INFO" && (
          <FaInfoCircle size={16} className="w-4 h-auto min-w-4" />
        )}
        {type === "ERROR" && (
          <BiSolidError size={16} className="w-4 h-auto min-w-4" />
        )}
      </span>
      <div className="pt-2 pb-3 text-center">{message}</div>
      <button className="p-2 text-center ml-4" onClick={hideAlert}>
        <Image
          src={closeIcon}
          alt="close"
          width={16}
          height={16}
          className="w-4 h-auto min-w-4"
        />
      </button>
      <div
        className={`${
          type === "SUCCESS"
            ? "bg-green-500"
            : type === "ERROR"
            ? "bg-red-500"
            : type === "WARNING"
            ? "bg-yellow-500"
            : "bg-blue-500"
        } h-1.5 absolute bottom-0 left-0 right-0 animate-alert`}></div>
    </div>
  );
};

export default Alert;
