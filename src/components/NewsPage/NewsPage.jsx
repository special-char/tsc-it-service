import React from "react";

const NewsPage = (data) => {
  const newsHeaderData = data?.data?.data?.newsHeader?.data;
  console.log("NewsPage data:", newsHeaderData);

  return (
    <div className="grid grid-rows-2 gap-7 lg:grid-cols-2 lg:grid-rows-1 lg:gap-60">
      <div className="right_content">
        <h1 className="text-9xl lg:text-[170px]">
          {newsHeaderData?.attributes?.NewsHeader?.heading1}
        </h1>
        <h1 className="text-9xl lg:text-[170px] text-gray">
          {newsHeaderData?.attributes?.NewsHeader?.heading2}
        </h1>
      </div>
      <div className="left_content grid grid-row content-center gap-7">
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
      </div>
    </div>
  );
};

export default NewsPage;
