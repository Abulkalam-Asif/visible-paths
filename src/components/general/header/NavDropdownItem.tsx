import Link from "next/link";
import React from "react";

type NavDropdownItemProps = {
  href: string;
  text: string;
};

const NavDropdownItem = ({ href, text }: NavDropdownItemProps) => {
  return (
    <>
      <li>
        <Link
          className="font-medium inline-block text-white capitalize w-full py-2 rounded-md pl-4 lg:px-8 lg:hover:bg-white/10"
          href={href}>
          {text}
        </Link>
      </li>
    </>
  );
};

export default NavDropdownItem;
