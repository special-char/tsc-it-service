import React from "react";

const About = () => {
  return (
    <div className="mx-20">
      <div className="flex flex-col lg:flex-row">
        <div>
          <img
            className="image aspect-auto sm:w-[600px]"
            src="https://assets.website-files.com/6315d6de2357050021f26e96/63187ca7418405f870aba348_photo-4-p-1080.jpg"
            alt=""
          />
        </div>

        <div className="content items-start lg:px-12 flex-1 justify-center flex flex-col mt-10 gap-10">
          <h2>About Kofo</h2>
          <p className="text-xxl lg:text-3xl text-dimGray">
            We are an award-winning branding and web agency committed to
            excellence since forever.
          </p>

          <p className="text-xxl lg:text-3xl text-dimGray">
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
