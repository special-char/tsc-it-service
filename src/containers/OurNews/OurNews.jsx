import React from "react";

const OurNews = () => {
  return (
    <div className="grid grid-rows-2 gap-7 lg:grid-cols-2 lg:grid-rows-1 lg:gap-60">
      <div className="right_content">
        <h1 className="text-9xl lg:text-[170px]">
          Our <br /> <span className="text-gray"> News </span>
        </h1>
      </div>
      <div className="left_content grid grid-row content-center gap-7">
        <p className="text-dimGray text-xxl">
          We share our thoughts on design. We design awesome things.
        </p>
        <div>
          <button className="btn">Work With Us</button>
        </div>
      </div>
    </div>
  );
};

export default OurNews;
