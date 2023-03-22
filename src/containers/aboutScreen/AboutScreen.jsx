import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container relative z-[1] mb-20 mx-auto max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-lg xl:max-w-4xl 2xl:max-w-5xl flex flex-col flex-wrap w-full">
        <div className="content flex flex-col gap-10 2xl:gap-24 xl:flex-row ">
          <div className="flex-1">
            <img
              className="image aspect-auto"
              src="https://assets.website-files.com/6315d6de2357050021f26e96/63187ca7418405f870aba348_photo-4-p-1080.jpg"
              alt=""
            />
          </div>

          <div className="content items-start flex-1 justify-center flex flex-col gap-4 xl:gap-6 2xl:gap-10  pt-10 xl:pt-0">
            <h2>About Kofo</h2>
            <p className="text-xxl xl:text-2xl 2xl:text-4xl text-dimGray">
              We are an award-winning branding and web agency committed to
              excellence since forever.
            </p>

            <p className="text-xxl lg:text-2xl text-dimGray">
              We set the standard of exceptional design creatively, technically,
              sustainably, and ethically so that you can make the extraordinary
              impact impact that you seek.
            </p>

            <button className="btn">View on Designer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
