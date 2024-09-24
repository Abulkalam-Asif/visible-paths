import React from "react";

type TermsContainerProps = {
  children: React.ReactNode;
};

const TermsContainer = ({ children }: TermsContainerProps) => {
  return (
    <>
      <section>
        <div className="max-w-8xl relative mx-auto px-4 pt-8 pb-12 md:px-8 md:pt-12 md:pb-16 md:flex md:flex-row md:gap-8 md:items-start lg:pb-20 lg:pt-16 lg:gap-12 xl:px-12 xl:pb-24 xl:pt-20">
          {children}
        </div>
      </section>
    </>
  );
};

export default TermsContainer;
