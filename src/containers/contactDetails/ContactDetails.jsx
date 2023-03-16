import React from "react";

const ContactDetails = () => {
  return (
    <div>
      <div className="flex gap-32 justify-center">
        <h1 className="font-sans text-[150px]">Contact</h1>
        <div className="flex flex-col justify-center gap-3 ">
          <p className="text-gray text-2xl my-5 font-sans ">
            We'd love to hear from you.
          </p>
          <div>
            <button className="btn">View All Work</button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div><h1>London</h1>
          <p></p></div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
