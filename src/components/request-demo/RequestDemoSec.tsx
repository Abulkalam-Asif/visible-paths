import React from "react";
import RequestDemoForm from "./RequestDemoForm";
import RequestDemoOffer from "./RequestDemoOffer";

const RequestDemoSec = () => {
  return (
    <>
      <section id="requestDemoSec" className="bg-accent3">
        <div className="max-w-8xl mx-auto px-4 pt-12 pb-16 flex flex-col gap-12 md:px-8 md:pt-16 md:pb-20 lg:flex-row lg:pb-24 xl:px-12 xl:pt-24 xl:pb-32">
          <div className="space-y-4 lg:w-2/5 sm:space-y-4 lg:space-y-6 lg:pt-12 xl:space-y-8 xl:pt-12">
            <div className="space-y-3 lg:space-y-5 xl:space-y-6">
              <h2 className="text-black text-2xl max-w-[20ch] font-bold capitalize sm:text-3xl lg:text-4xl xl:text-5xl">
                Experience the Future of Financial{" "}
                <span className="text-accent1">Decisions</span>
              </h2>
              <p className="sm:text-lg lg:text-xl xl:text-2xl">
                AI-Powered Platform for Seamless Credit, Financing, and
                Insurance
              </p>
            </div>
            <div className="space-y-3 lg:space-y-5 xl:space-y-6">
              <RequestDemoOffer
                title="See It in Action:"
                description="Get a personalized demo for simplified financial decision-making."
              />
              <RequestDemoOffer
                title="Tailored to You:"
                description="Customizable tools for individuals, businesses, and institutions."
              />
              <RequestDemoOffer
                title="Start Confidently:"
                description="Make informed choices with AI-driven insights and personalized recommendations."
              />
            </div>
          </div>
          <RequestDemoForm />
        </div>
      </section>
    </>
  );
};

export default RequestDemoSec;
