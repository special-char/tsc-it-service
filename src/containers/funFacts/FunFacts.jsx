import React from "react";
// import FunFact from "../../../public/images/FunFacts.jpg";
const FunFacts = () => {
  return (
    <div className="flex flex-col lg:flex-row my-10 justify-between w-full">
      {" "}
      <img
        src="https://assets.website-files.com/6315d6de2357050021f26e96/6317511da3f8cf2ff69330b3_photo-3-p-1080.jpg"
        className="aspect-auto w-[700px] lg:w-[500px]"
        alt="fun_facts"
      />
      <div className="flex flex-col gap-4 justify-center pr-12">
        <h3 className="text-8xl">Fun Facts</h3>

        <h3 className="text-8xl">
          7 <span className="text-4xl text-gray ">Members</span>
        </h3>
        <h3 className="text-8xl">
          340+ <span className="text-4xl text-gray">Project Done</span>{" "}
        </h3>
        <h3 className="text-8xl">
          99% <span className="text-4xl text-gray"> Top Feedback</span>
        </h3>
        <h3 className="text-8xl">
          4<span className="text-4xl text-gray"> Global Offices</span>
        </h3>

        <div>
          <button className="btn">Join Us</button>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
