import React from "react";

const HeroPage = (data) => {
  const homeHeaderData = data?.data?.data?.homeHeader?.data;

  return (
    <div className="px-container flex flex-col xl:flex-row gap-10 min-h-screen pt-32">
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
      </div>
    </div>
  );
};

export default HeroPage;
