import { logoShortRedImg, requestDemoImg } from "@/assets";
import GeneralHeroSec from "@/components/general/GeneralHeroSec";
import FaqsSec from "@/components/general/FaqsSec";
import RequestDemoSec from "@/components/request-demo/RequestDemoSec";
import React from "react";
// import base64Imgs from "@/../public/json/base64.json";

const RequestDemo = () => {
  return (
    <>
      <GeneralHeroSec
        image={requestDemoImg}
        title="Request Demo"
        scrollToId="requestDemoSec"
        // lowResPlaceholder={base64Imgs.requestDemo}
        lowResPlaceholder={logoShortRedImg}
      />
      <RequestDemoSec />
      <FaqsSec />
    </>
  );
};

export default RequestDemo;
