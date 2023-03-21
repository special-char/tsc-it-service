import React from "react";
import Location from "../location/Location";

const ContactDetails = () => {
  return (
    <div>
      <div className="contact">
        <div className="container relative z-[1] mx-auto max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl flex flex-col my-7 gap-10 flex-wrap flex-shrink flex-grow basis-[0%] w-full">
          <div className="flex flex-col lg:flex-row lg:justify-around gap-5 ">
            <h1 className="text-9xl lg:text-[100px]">Contact</h1>
            <div className="flex flex-col justify-center gap-7">
              <p className="text-gray text-2xl font-sans ">
                We'd love to hear from you.
              </p>
              <div>
                <button className="btn">View All Work</button>
              </div>
            </div>
          </div>
          <Location />
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
