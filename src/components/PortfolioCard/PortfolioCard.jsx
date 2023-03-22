import React from "react";

const PortfolioCard = ({ src, title, paragraph }) => {
  return (
    <div className="flex flex-col gap-7 px-3 justify-center bg-lightGray">
      <div className="image">
        <img className="img aspect-square items-start w-20" src={src} />
      </div>
      <h3 className="text-xl">{title}</h3>
      <p className="text-lg">{paragraph}</p>
      <a className="hover:after:w-[35%] text-lg cursor-pointer relative block pb-1 after:w-0 after:absolute after:h-[1px] after:bottom-0 after:left-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]">
        Learn More
      </a>
    </div>
  );
};

export default PortfolioCard;
