"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DesNavbar from "./DesNavbar";
import Link from "next/link";
import { FaBars, FaX } from "react-icons/fa6";
import { logoRedImg } from "@/assets";
import MobNavbar from "./MobNavbar";

const navItemsData = [
  {
    text: "about",
    href: "/about-us",
  },
  {
    text: "solutions",
    href: "/solutions",
  },
  // {
  //   text: "pricing",
  //   href: "/pricing",
  // },
  {
    text: "blogs",
    href: "/blogs",
  },
];
const Header = () => {
  const [isMobNavbarOut, setIsMobNavbarOut] = useState(false);

  const toggleNavbar = () => {
    setIsMobNavbarOut(prevState => !prevState);
  };
  const hideNavbar = () => {
    setIsMobNavbarOut(false);
  };

  useEffect(() => {
    if (isMobNavbarOut) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isMobNavbarOut]);

  return (
    <>
      <header
        className={`absolute top-0 left-0 right-0 w-full z-[5] transition-colors duration-300`}>
        <div className="mx-auto flex items-center gap-x-4 py-4 px-4 md:px-8 lg:gap-x-8 xl:px-12">
          <div className="w-full lg:max-w-[30%]">
            <Link href={"/"}>
              <Image
                src={logoRedImg}
                width={500}
                height={500}
                className="h-10 w-auto sm:h-12 lg:h-16 xl:h-[84px]"
                priority
                alt="Logo"
              />
            </Link>
          </div>
          <DesNavbar navItemsData={navItemsData} />
          <div className="hidden lg:flex lg:gap-4">
            <button className="text-accent1 w-max font-medium bg-transparent py-2 px-4 text-xl rounded-md border-2 border-accent1 xl:text-2xl">
              Login
            </button>
            <Link
              href={"/request-demo"}
              className="text-white w-max font-medium bg-accent1 py-2 px-4 text-xl rounded-md border-2 border-accent1 xl:text-2xl">
              Request Demo
            </Link>
          </div>
          <div className="block ml-auto lg:hidden">
            <button className="p-1" onClick={toggleNavbar}>
              {isMobNavbarOut ? (
                <FaX size={32} className="text-black w-8 h-auto" />
              ) : (
                <FaBars size={32} className="text-black w-8 h-auto" />
              )}
            </button>
          </div>
        </div>
      </header>
      <MobNavbar
        isMobNavbarOut={isMobNavbarOut}
        navItemsData={navItemsData}
        hideNavbar={hideNavbar}
      />
    </>
  );
};

export default Header;
