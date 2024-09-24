import { logoShortRedImg, ourTeamImg } from "@/assets";
import GeneralHeroSec from "@/components/general/GeneralHeroSec";
import React from "react";
import TestimonialsSec from "@/components/general/TestimonialsSec";
import OurTeamSec from "@/components/general/ourTeam/OurTeamSec";
// import base64Imgs from "@/../public/json/base64.json";

const ContactUs = () => {
  return (
    <>
      <GeneralHeroSec
        image={ourTeamImg}
        title="Our team"
        scrollToId="ourTeamSec"
        // lowResPlaceholder={base64Imgs.ourTeam}
        lowResPlaceholder={logoShortRedImg}
      />
      <OurTeamSec />
      <TestimonialsSec />
    </>
  );
};

export default ContactUs;
