import React from "react";
import Iceberg from "../../../public/icons/iceberg.svg";
import Vision from "../../../public/icons/vision.svg";
import Rise from "../../../public/icons/rise.svg";
import Sitemark from "../../../public/icons/sitemark.svg";
import Pinpoint from "../../../public/icons/pinpoint.svg";

const PageHeader = () => {
  return (
    <div className="page">
      <div className="container relative z-[1] mx-auto my-32 flex flex-col flex-wrap flex-shrink flex-grow basis-[0%] max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl w-full">
        <div className="heading flex flex-col text-center mx-auto gap-10 mt-10">
          <h3 className="text-4xl lg:text-8xl xl:text-9xl flex justify-center">
            We are blessed to work with leading brands.
          </h3>
          <a className=" justify-center after:left-[500px] hover:after:w-[13%] text-lg cursor-pointer relative block pb-1 after:w-0 after:absolute after:h-[1px] after:bottom-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]">
            View Our Work
          </a>
        </div>
        <div className="brands grid grid-rows-3 grid-cols-2 place-items-center md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-5">
          <Iceberg className="w-32 h-32" />
          <Vision className="w-32 h-32" />
          <Rise className="w-32 h-32" />
          <Sitemark className="w-32 h-32" />
          <Pinpoint className="w-32 h-32" />
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
