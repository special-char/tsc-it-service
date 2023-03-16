import React from "react";

const PortfolioCard = ({ src, title, paragraph }) => {
  return (
    <div className="h-auto flex flex-col gap-10 md:gap-7 lg:gap-4 xl:gap-10 p-7 bg-lightGray">
      <div className="image">
        <img className="img aspect-square items-start w-20" src={src} />
      </div>
      <h3 className="text-xl">{title}</h3>
      <p className="text-lg">{paragraph}</p>
      <a href="" className="text-lg">
        Learn More
      </a>
    </div>
  );
};

export default PortfolioCard;
