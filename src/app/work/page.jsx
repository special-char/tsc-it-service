import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";
import React from "react";
import "./style.css";

const Work = () => {
  return (
    <div className="section">
      <div className="hedding">
        <h3>
          We worry about the details so you don't have to. When you work with
          our web agency, you can be certain that your website meets every
          standard.
        </h3>
      </div>
      <div className="container">
        <PortfolioCard
          img={
            "https://assets.website-files.com/6315d6de2357050021f26e96/6317426cb417e779ec15be2b_icons8-school-director-256%20(2).png"
          }
          text="Graphic Design"
        />

        <PortfolioCard
          img={
            "https://assets.website-files.com/6315d6de2357050021f26e96/63174377e79d9d53b1e0ea02_icons8-laptop-and-phone-256%20(1).png"
          }
          text="Development"
        />
        <img
          className="person"
          src="https://assets.website-files.com/6315d6de2357050021f26e96/631743540533da71eeb889f3_photo-2-p-500.jpg"
        />
      </div>
    </div>
  );
};

export default Work;
