import React from "react";
import "./style.css";
import Review from "../Review/Review";
import Author from "../Author/Author";

const TestimonialCard = () => {
  return (
    <div className="slide">
      <div className="slide_content">
        <div className="client_wrapper">
          <Review />
          <p className="quote_text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
            laudantium.
          </p>
          <Author />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
