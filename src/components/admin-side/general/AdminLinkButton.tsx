"use client";

import Link from "next/link";

type AdminLinkButtonProps = {
  text: string;
  className?: string;
  type?: "submit" | "button" | "reset" | undefined;
  href: string;
  color?: "blue" | "red";
  dataFunctionName?: string | null;
  dataFormId?: string | null;
};

const AdminLinkButton = ({
  text,
  type = "submit",
  className = "",
  href,
  color = "blue",
  dataFunctionName = null,
  dataFormId = null,
}: AdminLinkButtonProps) => {
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
  return (
    <>
      <Link
        href={href}
        type={type}
        {...(dataFunctionName && { "data-function-name": dataFunctionName })}
        {...(dataFormId && { "data-form-id": dataFormId })}
        className={`text-white ${colorStyles} focus:outline-none font-medium rounded-lg px-6 py-2 text-center shadow-md ${className}`}>
        {text}
      </Link>
    </>
  );
};

export default AdminLinkButton;
