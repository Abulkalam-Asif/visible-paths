import { logoShortRedImg, pricingImg } from "@/assets";
import FaqsSec from "@/components/general/FaqsSec";
import GeneralHeroSec from "@/components/general/GeneralHeroSec";
import PricingSec from "@/components/general/PricingSec";
// import PlanOptionsSec from "@/components/pricing/PlanOptionsSec";
import React from "react";
// import base64Imgs from "@/../public/json/base64.json";

const Pricing = () => {
  return (
    <>
      <GeneralHeroSec
        image={pricingImg}
        title="Pricing"
        scrollToId="aboutUsSec"
        // lowResPlaceholder={base64Imgs.pricing}
        lowResPlaceholder={logoShortRedImg}
        customHeight="lg:h-[70vh]"
      />

      <PricingSec />
      {/* <PlanOptionsSec /> */}
      <FaqsSec />
    </>
  );
};

export default Pricing;
