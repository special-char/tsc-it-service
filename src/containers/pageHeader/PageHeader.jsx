import React from "react";
import Iceberg from "../../../public/icons/iceberg.svg";
import Vision from "../../../public/icons/vision.svg";
import Rise from "../../../public/icons/rise.svg";
import Sitemark from "../../../public/icons/sitemark.svg";
import Pinpoint from "../../../public/icons/pinpoint.svg";

const PageHeader = () => {
  return (
    <div className="page">
      <div className="container relative z-[1] mx-auto flex flex-col flex-wrap flex-shrink flex-grow basis-[0%] max-w-[1200]">
        <div className="heading flex flex-col text-center mx-auto gap-10 mt-10">
          <h3 className="text-8xl flex justify-center">
            We are blessed to work with leading brands.
          </h3>
          <a className="text-lg flex justify-center">View Our Work</a>
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
  );
};

export default PageHeader;
