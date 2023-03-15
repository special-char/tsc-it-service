import React from "react";
import "./style.css";

const PortfolioCard = ({ img, text }) => {
  return (
    <div className="maindiv">
      <img className=" img" src={img} />
      <p className="text">{text}</p>
      <p className="lorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <a href="" className="learn">
        Learn More
      </a>
    </div>
  );
};

export default PortfolioCard;
