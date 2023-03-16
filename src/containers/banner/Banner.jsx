import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner_wrapper mt-10 flex relative h-screen px-[4%] justify-center ">
        <div className="container flex gap-10 flex-col-reverse lg:flex-row mx-auto flex-grow flex-shrink max-w-6xl">
          <div className="content flex">
            <p className="text-xxl text-dimGray my-40 flex ">
              We bring together innovative designers, pixel perfect developers
              and data driven strategy to create a boutique experience at
              enterprise scale.
            </p>
          </div>
          <img
            className="aspect-auto w-[58vw] overflow-hidden"
            src="https://assets.website-files.com/6315d6de2357050021f26e96/63172900c798f906c10618bf_photo-1-p-500.jpg"
            alt="banner_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
