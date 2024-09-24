"use client";
type AdminButtonProps = {
  text: string;
  className?: string;
  type?: "submit" | "button" | "reset" | undefined;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void | Promise<void>;
  disabled?: boolean;
  color?: "blue" | "red";
  dataFunctionName?: string | null;
  dataFormId?: string | null;
  size?: "small" | "medium" | "large";
};

const AdminButton = ({
  text,
  type = "submit",
  className = "",
  onClick,
  disabled = false,
  color = "blue",
  dataFunctionName = null,
  dataFormId = null,
  size = "medium",
}: AdminButtonProps) => {
  let colorStyles = "";
  switch (color) {
    case "blue":
      colorStyles =
        "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300";
      break;
    case "red":
      colorStyles =
        "bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300";
      break;
    default:
      colorStyles =
        "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300";
  }
  let sizeStyles = "";
  switch (size) {
    case "small":
      sizeStyles = "px-4 py-1.5";
      break;
    case "medium":
      sizeStyles = "px-6 py-2";
      break;
    case "large":
      sizeStyles = "px-8 py-3 text-lg";
      break;
    default:
      sizeStyles = "px-6 py-2";
  }

  return (
    <>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        {...(dataFunctionName && { "data-function-name": dataFunctionName })}
        {...(dataFormId && { "data-form-id": dataFormId })}
        className={`text-white ${colorStyles} ${sizeStyles} focus:outline-none font-semibold rounded-lg text-center shadow-md ${className}`}>
        {text}
      </button>
    </>
  );
};

export default AdminButton;
