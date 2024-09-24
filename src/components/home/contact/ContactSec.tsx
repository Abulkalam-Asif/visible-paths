import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSec = () => {
  return (
    <>
      <section className="bg-black">
        <div className="max-w-8xl mx-auto px-4 py-16 flex flex-col gap-8 md:px-8 md:py-20 lg:flex-row lg:justify-between lg:gap-16 lg:py-24 xl:px-12 xl:py-28 xl:gap-28">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default ContactSec;
