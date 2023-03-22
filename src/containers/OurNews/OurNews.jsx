import React from "react";

const OurNews = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-28 xl:gap-40 xxl:gap-48 lg:min-h-screen pb-10">
      <div className="right_content flex flex-col justify-center">
        <h1 className="text-9xl lg:text-[120px] xl:text-[170px] xl:-mb-10">
          Our
        </h1>
        <h1 className=" text-9xl text-gray lg:text-[120px] xl:text-[170px]">
          News
        </h1>
      </div>
      <div className="left_content flex flex-col justify-center gap-12">
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
