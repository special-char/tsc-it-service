import React from "react";

const OurNews = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-12 pb-4 lg:min-h-screen">
      <div className="right_content flex pt-12 xl:pt-16">
        <h1 className="text-9xl lg:text-[120px] xl:text-[170px]">
          Our <br /> <span className="text-gray"> News </span>
        </h1>
      </div>
      <div className="left_content flex flex-col gap-8 justify-center pb-10 xl:pl-48">
        <p className="text-dimGray text-xxl">
          We share our thoughts on design. We design awesome things.
        </p>
        <div>
          <button className="btn ">Work With Us</button>
        </div>
      </div>
    </div>
  );
};

export default OurNews;
