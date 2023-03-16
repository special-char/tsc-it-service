import React from "react";

const About = () => {
  return (
    <div className="main_div flex justify-center">
      <div className="container flex flex-row px-[50px]">
        <div className="flex-1">
          <img
            className="aspect-auto w-[500px]"
            src="https://assets.website-files.com/6315d6de2357050021f26e96/63187ca7418405f870aba348_photo-4-p-1080.jpg"
            alt=""
          />
        </div>

        <div className="div_2 flex-1 items-start justify-center flex flex-col gap-7">
          <h2>About Kofo</h2>
          <p className="text-xxl text-lightGray">
            We are an award-winning branding and web agency committed to
            excellence since forever.
          </p>

          <p className="text-xxl text-lightGray">
            We set the standard of exceptional design creatively, technically,
            sustainably, and ethically so that you can make the extraordinary
            impact impact that you seek.
          </p>

          <button className="btn">View on Designer</button>
        </div>
      </div>
    </div>
  );
};

export default About;
