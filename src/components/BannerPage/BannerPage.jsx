import React from "react";
import Play from "../../../public/icons/play_arrow.svg";

const BannerPage = (data) => {
  const bannerData = data?.data?.data?.bannerPage?.data;
  //   console.log("BannerPage data:", bannerData);

  return (
    <div className="banner">
      <div className="container relative z-[1] xl:px-20 my-32max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl flex flex-col flex-wrap w-full">
        <div className="content flex lg:flex-row-reverse flex-wrap flex-col gap-7">
          <div className="image flex-1">
            <img
              className=""
              src={
                bannerData?.attributes?.bannerPage?.image?.data?.attributes?.url
              }
              alt="banner_image"
            />
          </div>
          <div className="paragraph flex flex-1 py-8 lg:py-28 flex-col gap-20 self-center">
            <p className="text-2xl text-gray text-start">
              {bannerData?.attributes?.bannerPage?.description}
            </p>
            <button className="reel relative">
              <img
                className="bg-slateBlue relative rounded-full p-2 w-32 motion-safe:animate-[spin_7s_linear_infinite]"
                src={
                  bannerData?.attributes?.bannerPage?.button?.btnImage?.data
                    ?.attributes?.url
                }
                alt=""
              />
              <Play className="absolute z-[100] left-10 top-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPage;
