"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import MobNavDropdown from "./MobNavDropdown";
import Link from "next/link";

type MobNavitemProps = {
  text: string;
  className?: string;
  href?: string | null;
  hideNavbar: () => void;
  dropdownItems?: {
    text: string;
    href: string;
  }[];
};

const MobNavitem = ({
  text,
  className = "",
  href = null,
  dropdownItems = [],
  hideNavbar,
}: MobNavitemProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleIsClicked = () => {
    setIsClicked(prevState => !prevState);
  };
  return (
    <>
      <li
        className={`relative w-full cursor-pointer ${className}`}
        onClick={handleIsClicked}>
        {href ? (
          <Link
            onClick={hideNavbar}
            href={href}
            className="inline-block text-white font-medium capitalize w-full py-2 px-6">
            {text}
          </Link>
        ) : (
          <>
            <span className="flex justify-between items-center gap-2 text-white font-medium capitalize w-full py-2 px-6 ">
              <span>{text}</span>
              <FaChevronDown
                size={12}
                className={`inline-block transition-transform duration-200 ${
                  isClicked ? "rotate-180" : "rotate-0"
                }`}
              />
            </span>
            <MobNavDropdown
              isClicked={isClicked}
              dropdownItems={dropdownItems}
            />
          </>
        )}
      </li>
    </>
  );
};

export default MobNavitem;
