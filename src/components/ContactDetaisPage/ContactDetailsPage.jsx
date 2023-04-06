import React from "react";
import Rocket from '/public/icons/rocket.svg'

const ContactDetailsPage = (data) => {
  const contactHeaderData = data?.data?.data?.bannerHeader?.data?.attributes;

  return (
    <div className="px-container min-h-screen relative z-[1] flex flex-col xl:flex-row gap-7 xl:justify-between xl:items-center pt-32">
      <h1 className="text-9xl lg:text-[110px] xl:text-[170px]">
        {contactHeaderData?.bannerHeader[0]?.title}
      </h1>
      <div className="flex flex-col items-start justify-center gap-10 relative">
        <p className="text-gray text-2xl font-sans ">
          {contactHeaderData?.bannerHeader[0]?.description}
        </p>

        <button
          className="btn"
          href={contactHeaderData?.bannerHeader[0]?.button?.url}
        >
          {contactHeaderData?.bannerHeader[0]?.button?.text}
        </button>
        <Rocket className="svg w-28 h-16 absolute right-0 lg:bottom-0 hidden md:block"/>
      </div>
    </div>
  );
};

export default ContactDetailsPage;
