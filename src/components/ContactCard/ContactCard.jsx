import React from "react";

const ContactCard = ({ city, address, btnText }) => {
  return (
    <div>
      <div className="flex flex-col gap-6 py-5 md:px-5 shadow-lg">
        <div>
          <h1 className="text-2xl"> {city} </h1>
          <p className="text-dimGray py-3 text-lg">{address}</p>
        </div>
        <div>
          <button className="btn">{btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
