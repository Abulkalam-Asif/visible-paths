import React from "react";
import MobNavitem from "./MobNavitem";
import { NavItemDataType } from "@/types";
import Link from "next/link";

type MobNavbarProps = {
  isMobNavbarOut: boolean;
  navItemsData: NavItemDataType[];
  hideNavbar: () => void;
};

const MobNavbar = ({
  isMobNavbarOut,
  navItemsData,
  hideNavbar,
}: MobNavbarProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 backdrop-blur-[2px] z-[3] ${
          isMobNavbarOut ? "" : "hidden"
        }`}
        onClick={hideNavbar}></div>
      <nav
        className={`block lg:hidden shadow-3xl backdrop-blur-sm bg-black/40 fixed max-h-screen w-full ${
          isMobNavbarOut ? "top-0" : "-top-full"
        } transition-top duration-300 left-0 right-0 z-[4] pt-20 pb-8 overflow-y-auto`}>
        <ul className="flex flex-col items-start">
          {navItemsData.map(({ text, href, dropdownItems }, index) => (
            <MobNavitem
              key={index}
              text={text}
              href={href}
              dropdownItems={dropdownItems}
              hideNavbar={hideNavbar}
            />
          ))}
        </ul>
        <div className="flex flex-col gap-3 px-4 mt-4">
          {/* PENDING */}
          <button className="text-white w-max font-medium bg-transparent border-2 border-white py-2 px-6 rounded-md">
            Login
          </button>
          <Link
            onClick={hideNavbar}
            href={"/request-demo"}
            className="text-white w-max font-medium bg-accent1 py-2 px-6 rounded-md border-2 border-accent1">
            Request Demo
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobNavbar;
