import React from "react";
// import FunFact from "../../../public/images/FunFacts.jpg";
const FunFacts = () => {
  return (
    <div className="flex mx-60 my-20 justify-between items-center">
      {" "}
      <img
        src="https://assets.website-files.com/6315d6de2357050021f26e96/6317511da3f8cf2ff69330b3_photo-3-p-1080.jpg"
        className="aspect-auto w-[500px]"
        alt=""
      />
      <div className="flex flex-col  gap-3 justify-end">
        <div>
          <h3 className="text-8xl font-sans">Fun Facts</h3>
        </div>
        <div>
          <h3 className="text-8xl font-sans">
            7 <span className="text-4xl font-sans text-gray ">Members</span>
          </h3>
          <h3 className="text-8xl font-sans">
            340+{" "}
            <span className="text-4xl text-gray font-sans">Project Done</span>{" "}
          </h3>
          <h3 className="text-8xl font-sans">
            99%{" "}
            <span className="text-4xl text-gray font-sans"> Top Feedback</span>
          </h3>
          <h3 className="text-8xl font-sans">
            4
            <span className="text-4xl text-gray font-sans">
              {" "}
              Global Offices
            </span>
          </h3>
        </div>
        <div>
          <button className="bg-gainsboro font-sans text-dimGray py-4 px-6 rounded-[10px] hover:text-white">
            Join Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
