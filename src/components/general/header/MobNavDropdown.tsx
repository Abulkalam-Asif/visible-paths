import React from "react";
import NavDropdownItem from "./NavDropdownItem";

type MobNavDropdownProps = {
  isClicked: boolean;
  dropdownItems: {
    text: string;
    href: string;
  }[];
};

const MobNavDropdown = ({ isClicked, dropdownItems }: MobNavDropdownProps) => {
  return (
    <>
      <div
        className={`pl-8 py-0 rounded-none w-full shadow-none grid ${
          isClicked ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } transition-grid-rows duration-200`}>
        <ul className="overflow-hidden grid grid-cols-1">
          {dropdownItems?.map((item, index) => (
            <NavDropdownItem key={index} text={item.text} href={item.href} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobNavDropdown;
