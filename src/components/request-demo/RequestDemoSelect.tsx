import React from "react";

type RequestDemoSelectProps = {
  label: string;
  value: string;
  name: string;
  options: { label: string; value: string }[];
  inputHandler: (name: string, value: string) => void;
  idHtmlFor: string;
  className?: string;
  required?: boolean;
  error: string | undefined;
};

const RequestDemoSelect = ({
  label,
  value,
  name,
  options,
  inputHandler,
  idHtmlFor,
  className = "",
  required = true,
  error,
}: RequestDemoSelectProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    inputHandler(name, e.target.value);
  };

  return (
    <>
      <div className={`${className} flex flex-col gap-2.5`}>
        <label htmlFor={idHtmlFor} className="font-bold text-[#333333]">
          {label} {required && <span className="text-accent1">*</span>}
        </label>
        <select
          id={idHtmlFor}
          value={value}
          name={name}
          required={required}
          onChange={onChangeHandler}
          className="p-4 text-sm border border-black/50 rounded font-medium">
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-red-500 text-sm">
            <span>{error}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default RequestDemoSelect;
