import React from "react";
import Play from "../../../public/icons/play_arrow.svg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_wrapper mt-10 flex relative px-[4%] justify-center">
        <div className="container relative z-[1] mx-auto flex flex-col flex-wrap max-w-[1200px]">
          <div className="content flex lg:flex-row-reverse flex-wrap flex-col gap-7">
            <div className="image flex-1">
              <img
                className="aspect-auto sm:w-[700px]"
                src="https://assets.website-files.com/6315d6de2357050021f26e96/63172900c798f906c10618bf_photo-1-p-500.jpg"
                alt=""
              />
            </div>
            <div className="paragraph flex flex-1 py-8 lg:py-28 flex-col gap-20 self-center">
              <p className="text-2xl text-gray text-start">
                We bring together innovative designers, pixel perfect developers
                and data driven strategy to create a boutique experience at
                enterprise scale.
              </p>
              <button className="reel relative">
                <img
                  className="bg-black relative rounded-full p-2 aspect-square w-32"
                  src="https://assets.website-files.com/6315d6de2357050021f26e96/63172afabaf3d9640b2e3b00_play-p-500.png"
                  alt=""
                />
                <Play className="absolute z-[100] left-10 top-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
