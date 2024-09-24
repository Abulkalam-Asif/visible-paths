import React from "react";

const VideoSec = () => {
  return (
    <>
      <section id="videoSec" className="bg-white">
        <div className="max-w-8xl mx-auto px-4 py-8 md:px-8 xl:px-12 xl:py-10">
          <div className="flex flex-col items-center gap-2 mb-6 md:gap-3 xl:gap-4 xl:mb-8">
            <h3 className="text-black capitalize font-medium text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
              Your Financial Journey, Simplified
            </h3>
            <h2 className="text-center text-black text-2xl font-bold capitalize max-w-[30ch] sm:text-3xl lg:text-4xl xl:text-5xl">
              Watch How VisiblePaths Empowers You with Confidence
            </h2>
          </div>
          <div className="relative pt-[56.25%]">
            <iframe
              src="https://player.vimeo.com/video/1011794543?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden shadow-[0px_0px_40px_14px_rgba(0,0,0,0.2)] bg-video-img bg-no-repeat bg-center bg-contain"
              title="VisiblePaths - Simplify Car Buying"></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </div>
      </section>
    </>
  );
};

export default VideoSec;
