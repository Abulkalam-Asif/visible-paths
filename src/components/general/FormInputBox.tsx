import React from "react";

type FormInputBoxProps = {
  label: string;
  value: string;
  name: string;
  type: string;
  idHtmlFor: string;
  inputHandler: (name: string, value: string) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error: string | undefined;
};

const FormInputBox = ({
  label,
  value,
  name,
  type,
  idHtmlFor,
  inputHandler = () => {},
  placeholder = "",
  className = "",
  required = true,
  error,
}: FormInputBoxProps) => {
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    inputHandler(name, e.target.value);
  };

  return (
    <>
      <div className={`${className} flex flex-col gap-2.5`}>
        <label htmlFor={idHtmlFor} className="font-bold text-[#333333]">
          {label} {required && <span className="text-accent1">*</span>}
        </label>
        {type === "text" || type === "email" || type === "tel" ? (
          <input
            type={type}
            id={idHtmlFor}
            value={value}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={onChangeHandler}
            className="p-4 text-sm border border-black/50 rounded font-medium"
          />
        ) : type === "textarea" ? (
          <textarea
            id={idHtmlFor}
            value={value}
            name={name}
            required={required}
            placeholder={placeholder}
            onChange={onChangeHandler}
            rows={4}
            className="p-4 text-sm border border-black/50 rounded font-medium"
          />
        ) : null}
        {error && (
          <p className="text-red-500 text-sm">
            <span>{error}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default FormInputBox;
