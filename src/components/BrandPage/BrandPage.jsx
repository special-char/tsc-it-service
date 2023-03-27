import Image from "next/image";
import React from "react";

const BrandPage = (data) => {
  const brandData = data?.data?.data?.brand?.data;
  console.log("BrandsPage data:", brandData?.attributes?.images?.data);

  return (
    <div className="px-container z-[1] flex flex-col justify-center pb-20 flex-wrap min-h-screen">
      <div className="heading flex flex-col text-center mx-auto gap-10 mt-10">
        <h3 className="text-4xl lg:text-8xl xl:text-9xl flex justify-center">
          {brandData?.attributes?.heading}
        </h3>
        <a className=" justify-center after:left-0 hover:after:w-[100%] text-lg cursor-pointer relative block pb-1 after:w-0 after:absolute after:h-[1px] after:bottom-0 after:bg-dimGray after:ease-in-out after:duration-[0.7s]">
          {brandData?.attributes?.link?.text}
        </a>
      </div>
      <div className="brands pt-12 grid grid-rows-3 grid-cols-2 place-items-center md:grid-rows-2 md:grid-cols-3 lg:grid-rows-1 lg:grid-cols-5">
        {brandData?.attributes?.images?.data.map((x, index) => (
          <Image
            key={index}
            src={x?.attributes?.url}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
