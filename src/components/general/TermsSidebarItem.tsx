"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type TermsSidebarItemProps = {
  text: string;
  scrollToId: string;
  currentTerm: string;
  setCurrentTerm: (id: string) => void;
};

const TermsSidebarItem = ({
  text,
  scrollToId,
  currentTerm,
  setCurrentTerm,
}: TermsSidebarItemProps) => {
  const clickHandler = () => {
    setCurrentTerm(scrollToId);
  };

  return (
    <>
      <Link
        href={`#${scrollToId}`}
        onClick={clickHandler}
        className={`font-bold w-full ${
          currentTerm === scrollToId ? "text-accent1" : "text-black"
        } text-xl lg:text-2xl xl:text-[1.675rem]`}>
        {text}
      </Link>
    </>
  );
};

export default TermsSidebarItem;
