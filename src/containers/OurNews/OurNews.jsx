import React from "react";

const OurNews = () => {
  return (
    <div className="main_div">
      <div className="wrapper">
        <div className="container flex flex-col gap-4 xl:grid grid-cols-2 grid-rows-1 ">
          <div>
            <h1 className="text-[55px] xl:text-[170px]">Our</h1>
            <p className="text-[55px] text-[#8f8f8f] xl:text-[170px]">News</p>
          </div>
          <div className="xl:pt-[60px]">
            <p className="text-[#747474] text-[22px] mb-[50px] ">
              We share our thoughts on design. We design awesome things.
            </p>
            <button className="btn">Work With Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNews;
