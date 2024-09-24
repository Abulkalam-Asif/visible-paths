import { logoShortRedImg, solutionsImg } from "@/assets";
import GeneralHeroSec from "@/components/general/GeneralHeroSec";
import CtaSec from "@/components/solutions/CtaSec";
import RevolutionizingSec from "@/components/solutions/RevolutionizingSec";
import TheAdvantageSec from "@/components/solutions/TheAdvantageSec";
import WhyChooseSec from "@/components/solutions/WhyChooseSec";
import React from "react";
// import base64Imgs from "@/../public/json/base64.json";

const Solutions = () => {
  return (
    <>
      <GeneralHeroSec
        image={solutionsImg}
        title="Solutions"
        scrollToId="solutionsSec"
        // lowResPlaceholder={base64Imgs.solutions}
        lowResPlaceholder={logoShortRedImg}
        headingPosition="top-2/3"
      />
      <WhyChooseSec />
      <RevolutionizingSec />
      <TheAdvantageSec />
      <CtaSec />
    </>
  );
};

export default Solutions;
