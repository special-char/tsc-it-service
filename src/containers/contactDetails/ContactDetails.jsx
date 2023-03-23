import React from "react";
import Location from "../location/Location";

const ContactDetails = () => {
  return (
    <>
      <div className="px-container min-h-screen relative z-[1] flex flex-col xl:flex-row gap-7 xl:justify-between xl:items-center pt-32">
        <h1 className="text-9xl lg:text-[110px] xl:text-[170px]">Contact</h1>
        <div className="flex flex-col items-start justify-center gap-10">
          <p className="text-gray text-2xl font-sans ">
            We'd love to hear from you.
          </p>

          <button className="btn">View All Work</button>
        </div>
      </div>
      <Location />
    </>
  );
};

export default ContactDetails;
