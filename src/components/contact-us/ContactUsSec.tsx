import React from "react";
import { emailIcon, locationIcon, phoneIcon } from "@/assets";
import ContactInfoItem from "./ContactInfoItem";
import ContactUsForm from "./ContactUsForm";

const ContactUsSec = () => {
  return (
    <>
      <section id="contactUsSec" className="bg-accent3">
        <div className="max-w-8xl mx-auto px-4 pt-12 pb-16 flex flex-col gap-12 md:px-8 md:pt-16 md:pb-20 lg:flex-row lg:pb-24 xl:px-12 xl:pt-24 xl:pb-32">
          <div className="space-y-6 lg:w-1/2 sm:space-y-8 lg:space-y-10 lg:pt-12 xl:space-y-16 xl:pt-12">
            <div className="space-y-5 lg:space-y-7 xl:space-y-10">
              <h2 className="text-black text-3xl max-w-[20ch] font-bold capitalize sm:text-4xl lg:text-5xl xl:text-6xl">
                Get Answers, Start Your Journey <span className="text-accent1">Today</span>
              </h2>
              <p className="font-medium max-w-[25ch] text-lg sm:text-xl lg:text-2xl xl:text-3xl">
                Get expert help for smarter, smoother decisions today.
              </p>
            </div>
            <ul className="space-y-4 md:space-y-6 lg:space-y-7">
              <ContactInfoItem
                icon={emailIcon}
                alt="Email"
                text="solutions@VisiblePaths.com"
              />
              <ContactInfoItem
                icon={phoneIcon}
                alt="Phone"
                text="(617) 798-2566"
              />
              <ContactInfoItem
                icon={locationIcon}
                alt="Location"
                text={
                  <>
                    44 Portland St, FL 4<br />
                    Worcester, MA, 01608
                  </>
                }
              />
            </ul>
          </div>
          <ContactUsForm />
        </div>
      </section>
    </>
  );
};

export default ContactUsSec;
