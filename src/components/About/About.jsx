import React from "react";

const About = (data) => {
  const aboutData = data?.data?.data?.about?.data;
  console.log("About data:", aboutData);
  //   console.log(aboutData);

  return (
    <div className="about">
      <div className="container relative z-[1] mb-20 mx-auto max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl flex flex-col flex-wrap w-full">
        <div className="content flex flex-col gap-20 items-center xl:flex-row">
          <div>
            <img
              className="image aspect-auto w-[600px] lg:w-[500px]"
              src={aboutData?.attributes?.about?.image?.data?.attributes?.url}
              alt="about_image"
            />
          </div>

          <div className="content items-start lg:px-12 flex-1 justify-center flex flex-col gap-10">
            <h2>{aboutData?.attributes?.about?.title}</h2>
            <p className="text-xxl lg:text-3xl text-dimGray">
              {aboutData?.attributes?.about?.description}
            </p>

            <button
              className="btn"
              href={aboutData?.attributes?.about?.button?.url}
            >
              {aboutData?.attributes?.about?.button?.btnTxt}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
