import React from "react";

type H3Props = { text: string; className?: string };

const H3 = ({ text, className = "" }: H3Props) => {
  return (
    <>
      <h3
        className={`${className} text-xl font-bold text-accent1 md:text-2xl lg:text-2.5xl xl:text-3xl`}>
        {text}
      </h3>
    </>
  );
};

export default H3;
