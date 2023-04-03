import React from "react";

const Author = ({
  img,
  testimonialName,
  companyName
}) => {
  return <div  className="flex gap-5 justify-center items-center">
    <div >
    <img src={img} alt="hero" className="rounded-full h-20 w-auto duration-500"/>
    </div>
    <div>
      <h1>{testimonialName}</h1>
      <p className="text-dimGray">{companyName}</p>
    </div>
  </div>;
};

export default Author;
