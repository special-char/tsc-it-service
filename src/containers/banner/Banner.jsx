import React from "react";
import Play from "../../../public/icons/play_arrow.svg";

const Banner = () => {
  return (
    <div className="px-container items-center flex xl:flex-row-reverse pb-20 flex-col gap-10 min-h-screen">
      <img
        className="flex-1"
        src="https://assets.website-files.com/6315d6de2357050021f26e96/63172900c798f906c10618bf_photo-1-p-500.jpg"
        alt="banner_image"
      />

      <div className="paragraph flex flex-1 flex-col gap-10 xl:gap-20 justify-center">
        <p className="text-2xl text-gray text-start">
          We bring together innovative designers, pixel perfect developers and
          data driven strategy to create a boutique experience at enterprise
          scale.
        </p>
        <button className="reel relative flex justify-center xl:justify-start">
          <img
            className="bg-slateBlue relative rounded-full p-2 w-32 motion-safe:animate-[spin_7s_linear_infinite]"
            src="https://assets.website-files.com/6315d6de2357050021f26e96/63172afabaf3d9640b2e3b00_play-p-500.png"
            alt=""
          />
          <Play
            className="absolute z-[100] xl:left-10
          left-50 top-10"
          />
        </button>
      </div>
    </div>
  );
};

export default Banner;
