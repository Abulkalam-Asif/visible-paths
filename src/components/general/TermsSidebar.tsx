"use client";
import React from "react";

type TermsSidebarProps = {
  children: React.ReactNode;
};

const TermsSidebar = ({ children }: TermsSidebarProps) => {
  return (
    <>
      <aside className={`hidden md:block w-1/3 bg-white min-w-64`}>
        <h3 className="text-3xl font-bold mb-8 lg:text-4xl lg:mb-10 xl:text-5xl">
          Table of Contents
        </h3>
        {children}
      </aside>
    </>
  );
};

export default TermsSidebar;
