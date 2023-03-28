import React from "react";

const ContactCard = ({ city, address, btnText }) => {
  return (
    <div className="flex flex-col gap-8 items-start pr-24">
      <h1 className="text-2xl"> {city} </h1>
      <p className="text-dimGray flex flex-wrap text-lg">{address}</p>

      <button className="btn">{btnText}</button>
    </div>
  );
};

export default ContactCard;
