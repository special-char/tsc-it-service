import React from "react";
import "./styles.css";
import Iceberg from "../../../public/icons/iceberg.svg";
import Vision from "../../../public/icons/vision.svg";
import Rise from "../../../public/icons/rise.svg";
import Sitemark from "../../../public/icons/sitemark.svg";
import Pinpoint from "../../../public/icons/pinpoint.svg";

const PageHeader = () => {
  return (
    <div className="pageheader">
      <div className="pageheader_wrapper  mt-10 flex relative px-[4%] justify-center">
        <div className="container relative z-[1] mx-auto flex flex-col flex-wrap flex-shrink flex-grow basis-[0%] max-w-[1200]">
          <div className="content flex flex-col">
            <div className="header max-w-2xl mx-auto text-center gap-7 flex flex-col">
              <h3 className="text-5xl md:text-7xl lg:text-8xl">
                We are blessed to work with leading brands.
              </h3>
              <a className="text-lg">View Our Work</a>
            </div>
            {/* <div className="brands">
              <Iceberg fill="black" />
              <Vision fill="black" />
              <Rise fill="black" />
              <Sitemark fill="black" />
              <Pinpoint fill="black" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
