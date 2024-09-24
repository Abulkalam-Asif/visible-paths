import React from "react";

type RequestDemoOfferProps = {
  title: string;
  description: string;
};

const RequestDemoOffer = ({ title, description }: RequestDemoOfferProps) => {
  return (
    <>
      <div className="sm:text-lg lg:text-xl xl:text-2xl">
        <h3 className="text-accent1 font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default RequestDemoOffer;
