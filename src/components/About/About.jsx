import Image from "next/image";
import React from "react";
import Rocket from '/public/icons/rocket.svg'

const About = (data) => {
  const aboutData = data?.data?.data?.about?.data;

  return (
    <div className="px-container min-h-screen flex flex-col lg:flex-row items-center justify-between gap-20 pt-32">
      <div className="flex-1 lg:aspect-square  relative w-full">
        <Image
          className=""
          src={aboutData?.attributes?.about?.image?.data?.attributes?.url}
          alt="about_image"
          fill
        />
      </div>

      <div className="flex-1 flex flex-col gap-10 items-start relative">
        <h2>{aboutData?.attributes?.about?.title}</h2>
        <p className="text-xl xl:text-3xl text-dimGray">
          {aboutData?.attributes?.about?.description}
        </p>

        <button
          className="btn"
          href={aboutData?.attributes?.about?.button?.url}
        >
          {aboutData?.attributes?.about?.button?.btnTxt}
        </button>
        <Rocket className="svg w-28 h-16 absolute right-0 lg:bottom-0 xl:top-[370px] hidden md:block"/>
      </div>
    </div>
  );
};

export default About;
