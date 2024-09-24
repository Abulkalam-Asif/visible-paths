import React from "react";

type TermDivProps = {
  children: React.ReactNode;
  id: string;
};

const TermDiv = ({ children, id }: TermDivProps) => {
  return (
    <>
      <div id={id} className="space-y-3 pt-6 pb-2 md:space-y-4 lg:space-y-5">
        {children}
      </div>
    </>
  );
};

export default TermDiv;
