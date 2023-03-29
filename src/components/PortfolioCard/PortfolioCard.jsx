import React from "react";

const PortfolioCard = ({ data, src, title, paragraph }) => {
  const portfolios = data;
  return (
    <div className="flex flex-col gap-7 px-3 justify-center bg-lightGray">
      <div className="icon">
        <img
          className="aspect-square items-start w-28"
          src={portfolios?.attributes?.icon?.data?.attributes?.url}
        />
      </div>
      <h3 className="text-2xl">{portfolios?.attributes?.title}</h3>
      <p className="text-lg">{portfolios?.attributes?.description}</p>
      {/* <a
        href={portfolios?.attributes?.link?.url}
        className="hover:after:w-[28%] text-lg cursor-pointer relative block pb-1 after:w-0 after:absolute after:h-[1px] after:bottom-0 after:left-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]"
      >
        {portfolios?.attributes?.link?.text}
      </a> */}
    </div>
  );
};

export default PortfolioCard;
