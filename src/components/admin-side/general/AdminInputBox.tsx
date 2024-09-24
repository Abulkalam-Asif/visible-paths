"use client";

import { FaExclamationCircle } from "react-icons/fa";

type AdminInputBoxProps = {
  label: string;
  idHtmlFor: string;
  type: string;
  name: string;
  value: string;
  placeholder: string;
  inputHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required: boolean;
  disabled?: boolean;
  error?: string | undefined;
  id?: string;
};

const AdminInputBox = ({
  label,
  idHtmlFor,
  type,
  name,
  value,
  placeholder,
  inputHandler,
  required,
  disabled = false,
  error = undefined,
  id,
}: AdminInputBoxProps) => {
  return (
    <>
      <div>
        <label
          htmlFor={idHtmlFor}
          className="block mb-2 font-medium text-gray-900">
          {label}
        </label>
        <input
          type={type}
          name={name}
          onChange={inputHandler}
          id={idHtmlFor}
          className={`bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-6 py-3 ${
            disabled ? "cursor-not-allowed" : ""
          }`}
          placeholder={placeholder}
          value={value}
          required={required}
          disabled={disabled}
        />
        {error && (
          <p className="text-red-500 text-sm mt-2">
            <FaExclamationCircle className="inline mr-2" />
            <span>{error}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default AdminInputBox;
