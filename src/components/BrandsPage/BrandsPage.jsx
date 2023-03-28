import Image from "next/image";
import React from "react";

const brands = [
  {
    id: 1,
    src: "../../../public/icons/iceberg.svg",
    alt: "iceberg",
  },
  {
    id: 2,
    src: "../../../public/icons/vision.svg",
    alt: "vision",
  },
  {
    id: 3,
    src: "../../../public/icons/rise.svg",
    alt: "rise",
  },
  {
    id: 4,
    src: "../../../public/icons/sitemark.svg",
    alt: "sitemark",
  },
  {
    id: 5,
    src: "../../../public/icons/pinpoint.svg",
    alt: "pinpoint",
  },
];

const BrandsPage = (data) => {
  const brandData = data?.data?.data?.brand?.data;
  console.log("BrandsPage data:", brandData?.attributes?.images?.data);

  return (
    <div className="page">
      <div className="container relative z-[1] mx-auto my-32 flex flex-col flex-wrap flex-shrink flex-grow basis-[0%] max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl w-full">
        <div className="heading flex flex-col text-center mx-auto gap-10 mt-10">
          <h3 className="text-4xl lg:text-8xl xl:text-9xl flex justify-center">
            {brandData?.attributes?.heading}
          </h3>
          <a className=" justify-center after:left-[500px] hover:after:w-[13%] text-lg cursor-pointer relative block pb-1 after:w-0 after:absolute after:h-[1px] after:bottom-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]">
            {brandData?.attributes?.link?.text}
          </a>
        </div>
        <div className="brands grid grid-rows-3 grid-cols-2 place-items-center md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-5">
          {/* <Iceberg className="w-32 h-32" />
        <Vision className="w-32 h-32" />
        <Rise className="w-32 h-32" />
        <Sitemark className="w-32 h-32" />
        <Pinpoint className="w-32 h-32" /> */}
          {brandData?.attributes?.images?.data.map((x) => (
            <Image key={x.id} {...x} className="w-32 h-32" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsPage;
