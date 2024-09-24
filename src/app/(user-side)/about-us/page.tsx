import React from "react";
import GeneralHeroSec from "@/components/general/GeneralHeroSec";
import { aboutUsImg, logoShortRedImg } from "@/assets";
import AboutUsSec from "@/components/about-us/AboutUsSec";
import OurMissionSec from "@/components/about-us/OurMissionSec";
import WhyVisiblePathSec from "@/components/about-us/WhyVisiblePathSec";
import MakingUsDiffSec from "@/components/about-us/MakingUsDiffSec";
import OurVisionSec from "@/components/about-us/OurVisionSec";
import JoinThePathSec from "@/components/about-us/JoinThePathSec";
// import base64Imgs from "@/../public/json/base64.json";

const AboutUs = () => {
  return (
    <>
      <GeneralHeroSec
        image={aboutUsImg}
        title="About Us"
        scrollToId="aboutUsSec"
        // lowResPlaceholder={base64Imgs.aboutUs}
        lowResPlaceholder={logoShortRedImg}
      />
      <AboutUsSec />
      <OurMissionSec />
      <WhyVisiblePathSec />
      <MakingUsDiffSec />
      <OurVisionSec />
      <JoinThePathSec />
    </>
  );
};

export default AboutUs;
