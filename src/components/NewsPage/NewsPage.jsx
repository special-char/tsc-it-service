import React from "react";
import Rocket from '/public/icons/rocket.svg'

const NewsPage = (data) => {
  const newsHeaderData = data?.data?.data?.newsHeader?.data;

  return (
    <div className="px-container min-h-screen pt-32 flex flex-col xl:flex-row justify-center items-center">
      <div className="right_content flex-1">
        <h1 className="text-9xl md:text-[110px]">
          {newsHeaderData?.attributes?.NewsHeader?.heading1}
        </h1>
        <h1 className="text-9xl md:text-[110px] text-gray">
          {newsHeaderData?.attributes?.NewsHeader?.heading2}
        </h1>
      </div>
      <div className="left_content flex-1 -mt-10 flex flex-col gap-7 relative">
        <p className="text-dimGray text-xxl">
          {newsHeaderData?.attributes?.NewsHeader?.description}
        </p>
        <div>
          <button
            className="btn"
            href={newsHeaderData?.attributes?.NewsHeader?.button?.url}
          >
            {newsHeaderData?.attributes?.NewsHeader?.button?.btnTxt}
          </button>
        </div>
        <Rocket className="svg w-28 h-16 absolute right-0 lg:bottom-24 xl:bottom-0 hidden md:block"/>
      </div>
    </div>
  );
};

export default NewsPage;
