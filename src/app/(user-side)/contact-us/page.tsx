import { contactUsImg, logoShortRedImg } from "@/assets";
import ContactUsSec from "@/components/contact-us/ContactUsSec";
import GeneralHeroSec from "@/components/general/GeneralHeroSec";
import FaqsSec from "@/components/general/FaqsSec";
import React from "react";
// import base64Imgs from "@/../public/json/base64.json";

const ContactUs = () => {
  return (
    <>
      <GeneralHeroSec
        image={contactUsImg}
        title="Contact Us"
        scrollToId="contactUsSec"
        // lowResPlaceholder={base64Imgs.contactUs}
        lowResPlaceholder={logoShortRedImg}
      />
      <ContactUsSec />
      <FaqsSec />
    </>
  );
};

export default ContactUs;
