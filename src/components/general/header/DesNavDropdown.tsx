import React from "react";
import NavDropdownItem from "./NavDropdownItem";

type DesNavDropdownProps = {
  dropdownItems: {
    text: string;
    href: string;
  }[];
};

const DesNavDropdown = ({ dropdownItems }: DesNavDropdownProps) => {
  return (
    <>
      <div
        className={`absolute bottom-0 translate-y-full w-max rounded-xl bg-black shadow-none grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-hover:shadow-dropdown group-hover:shadow-white group-hover:border group-hover:border-white/30 group-hover:px-4 group-hover:py-2 transition-all duration-200`}>
        <ul className="overflow-hidden grid grid-cols-2">
          {dropdownItems?.map((item, index) => (
            <NavDropdownItem key={index} text={item.text} href={item.href} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default DesNavDropdown;
