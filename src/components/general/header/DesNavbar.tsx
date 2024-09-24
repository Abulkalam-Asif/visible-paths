import React from "react";
import DesNavitem from "./DesNavitem";
import { NavItemDataType } from "@/types";

type DesNavbarProps = {
  navItemsData: NavItemDataType[];
};

const DesNavbar = ({ navItemsData }: DesNavbarProps) => {
  return (
    <nav className="hidden w-full lg:block">
      <ul className="flex items-center justify-end">
        {navItemsData.map(({ text, href, dropdownItems }, index) => (
          <DesNavitem
            key={index}
            text={text}
            href={href}
            dropdownItems={dropdownItems}
          />
        ))}
      </ul>
    </nav>
  );
};

export default DesNavbar;
