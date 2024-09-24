import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

type ContactInputProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  inputHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  error: string | undefined;
};

const ContactInput = ({
  name,
  type,
  placeholder,
  value,
  inputHandler,
  error,
}: ContactInputProps) => {
  return (
    <>
      <div>
        {type === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            className="block w-full py-3 px-4 text-lg bg-white rounded-md lg:text-xl xl:py-4 xl:px-6 xl:text-2xl"
            onChange={inputHandler}
            rows={4}
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            className="block w-full py-3 px-4 text-lg bg-white rounded-md lg:text-xl xl:py-4 xl:px-6 xl:text-2xl"
            onChange={inputHandler}
          />
        )}
        {error && (
          <p className="text-white text-sm mt-2 lg:text-base xl:text-lg">
            <FaExclamationCircle className="inline mr-2" />
            <span>{error}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default ContactInput;
