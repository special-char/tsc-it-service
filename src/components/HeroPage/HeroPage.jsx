import React from "react";

const HeroPage = (data) => {
  const homeHeaderData = data?.data?.data?.homeHeader?.data;

  return (
    <div className="px-container flex gap-10 min-h-screen items-center">
      <div className="flex flex-col justify-start">
        <h3 className="text-9xl lg:text-[110px] 2xl:text-[140px]">
          {homeHeaderData?.attributes?.homeHeader?.heading1}
        </h3>
        <h3 className="text-9xl text-gray lg:text-[110px] 2xl:text-[140px]">
          {homeHeaderData?.attributes?.homeHeader?.heading2}
        </h3>
        <h3 className="text-9xl  lg:text-[110px] 2xl:text-[140px]">
          {homeHeaderData?.attributes?.homeHeader?.heading3}
        </h3>
      </div>
      <div className="left_content flex justify-between 2xl:mt-16 flex-col">
        <div className="content relative flex flex-col flex-wrap gap-7 overflow-hidden items-start justify-end">
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
    </div>
  );
};

export default HeroPage;
