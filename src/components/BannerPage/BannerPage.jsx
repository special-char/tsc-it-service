import Image from "next/image";
import React from "react";
import Play from "../../../public/icons/play_arrow.svg";

const BannerPage = (data) => {
  const bannerData = data?.data?.data?.bannerPage?.data?.attributes;
  console.log(
    "BannerPage data:",
    bannerData?.bannerPage?.image?.data?.attributes?.url
  );

  return (
    <div className="px-container items-center flex xl:flex-row-reverse pb-20 flex-col gap-10 min-h-screen">
      <img
        className="aspect-auto w-96 flex-1"
        src={bannerData?.bannerPage?.image?.data?.attributes?.url}
        alt="banner_image"
      />

      <div className="paragraph flex flex-1 flex-col gap-10 xl:gap-20 justify-center">
        <p className="text-2xl text-gray text-start">
          {bannerData?.bannerPage?.description}
        </p>
        <button className="reel relative flex justify-center xl:justify-start">
          <img
            className="bg-slateBlue relative rounded-full p-2 w-32 motion-safe:animate-[spin_7s_linear_infinite]"
            src={
              bannerData?.bannerPage?.button?.btnImage?.data?.attributes?.url
            }
            alt="video_image"
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

export default BannerPage;
