import React from "react";
import Location from "../location/Location";

const ContactDetails = () => {
  return (
    <div>
      <div className="contact">
        <div className="contact_wrapper flex relative px-[5%] justify-center">
          <div className="container relative z-[1] mx-auto flex flex-col my-7 gap-10 flex-wrap flex-shrink flex-grow basis-[0%] max-w-[1200]">
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
    </div>
  );
};

export default ContactDetails;
