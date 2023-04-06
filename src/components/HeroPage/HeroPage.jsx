import React from "react";
import Rocket from '/public/icons/rocket.svg'


const HeroPage = (data) => {
  const homeHeaderData = data?.data?.data?.homeHeader?.data;
  // console.log(homeHeaderData?.attributes?.homeHeader?.button?.url);

  return (
    <div className="px-container flex flex-col xl:flex-row gap-16 min-h-screen pt-32 relative">
      <div className="flex flex-col items-start justify-center">
        <h2 className="text-9xl font-sans lg:text-[110px] 2xl:text-[140px]">
          {homeHeaderData?.attributes?.homeHeader?.heading1}
        </h2>
        <h2 className="text-9xl font-sans text-gray lg:text-[110px] 2xl:text-[140px]">
          {homeHeaderData?.attributes?.homeHeader?.heading2}
        </h2>
        <h2 className="text-9xl font-sans lg:text-[110px] 2xl:text-[140px]">
          {homeHeaderData?.attributes?.homeHeader?.heading3}
        </h2>
      </div>

      <div className="content relative flex flex-col flex-wrap gap-7 overflow-hidden items-start justify-center">
        <p className="text-3xl text-dimGray leading-10">
          {homeHeaderData?.attributes?.homeHeader?.description}
        </p>
        <button
          className="btn"
          href={homeHeaderData?.attributes?.homeHeader?.button?.url}
        >
          {homeHeaderData?.attributes?.homeHeader?.button?.btnTxt}
        </button>
      <Rocket className="svg w-28 h-16 absolute right-0 lg:top-56 xl:top-[405px] hidden md:block"/>
      </div>
    </div>
  );
};

export default HeroPage;
