import React from "react";

const ContactCard = ({ data, city, address, btnText }) => {
  const locationData = data;
  console.log("locationData:", data);
  return (
    <div className="flex flex-col gap-8 py-5 px-5 items-start pr-24 shadow-xl">
      <h1 className="text-2xl"> {locationData?.country} </h1>
      <div className="text-dimGray text-lg">
        {locationData?.line1} <br /> {locationData?.line2} <br />{" "}
        {locationData?.city} {locationData?.state} {locationData?.pincode}
      </div>

      <a
        className="btn cursor-pointer"
        href="https://www.google.co.in/maps/place/Ganesh+Glory+11/@23.1141762,72.5380681,17z/data=!3m1!4b1!4m5!3m4!1s0x395e8340ebe5d7cb:0x4b3ffb517276bef6!8m2!3d23.1141762!4d72.5402568"
      >
        Find on map{" "}
      </a>
    </div>
  );
};

export default ContactCard;
