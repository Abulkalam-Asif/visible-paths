"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";
import DesNavDropdown from "./DesNavDropdown";
import Link from "next/link";

type DesNavitemProps = {
  text: string;
  className?: string;
  href?: string | null;
  dropdownItems?: {
    text: string;
    href: string;
  }[];
};

const DesNavitem = ({
  text,
  className = "",
  href = null,
  dropdownItems = [],
}: DesNavitemProps) => {
  return (
    <>
      <li
        className={`relative cursor-pointer font-semibold w-auto group ${className}`}>
        {href ? (
          <Link
            href={href}
            className="inline-block text-black capitalize w-full py-4 rounded-md px-6 text-xl xl:text-2xl">
            {text}
          </Link>
        ) : (
          <>
            <span className="flex justify-between items-center gap-2 text-black capitalize w-full py-4 text-xl rounded-md px-6 xl:text-2xl">
              <span>{text}</span>
              <FaChevronDown
                size={16}
                className={`inline-block transition-transform duration-200 group-hover:rotate-180`}
              />
            </span>
            <DesNavDropdown dropdownItems={dropdownItems} />
          </>
        )}
      </li>
    </>
  );
};

export default DesNavitem;
