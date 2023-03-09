import React from "react";
import "./serviceCard.css";
import Image from "next/image";

const ServiceCard = ({ title, desc, icon, img }) => {
  return (
    <div className="serviceCard">
      {img ? (
        <Image src={img} alt="picture" fill />
      ) : (
        <div>
          {icon && <Image src={icon} alt="Icon" height={55} width={55} />}
          <h3>{title}</h3>
          <p>{desc}</p>
          <a href="">Learn More</a>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
