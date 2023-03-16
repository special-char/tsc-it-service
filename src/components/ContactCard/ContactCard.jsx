import React from "react";

const ContactCard = ({ city, address, btnText }) => {
  return (
    <div>
      <div className="flex flex-col gap-6 aspect-ratio-[3/4] w-80 p-5">
        <div>
          <h1 className="text-2xl"> {city} </h1>
          <p className="text-dimGray py-3">{address}</p>
        </div>
        <div>
          <button className="btn">{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
