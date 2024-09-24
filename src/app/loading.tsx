import { loadingGif } from "@/assets";
import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
        <Image
          src={loadingGif}
          alt="loading"
          width={120}
          height={120}
          unoptimized={true}
        />
      </div>
    </>
  );
};

export default Loading;
