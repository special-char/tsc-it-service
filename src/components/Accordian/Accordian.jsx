"use client";

import React, { useState } from "react";
import Add from "../../../public/icons/add.svg";
import Remove from "../../../public/icons/remove.svg";

const Accordian = ({ data }) => {
  const faqs = data;

  const [isOpen, setIsOpen] = useState(false);
  const [direction, setdirection] = useState("open");

  const toggleView = () => {
    setIsOpen(!isOpen);
    setdirection(direction === "open" ? "close" : "open");
  };
  return (
    <>
      <div className="flex justify-start border-b-lightGray border-b-2 ">
        <button
          onClick={toggleView}
          className="flex flex-col text-start gap-5 translate-y-0"
        >
          <div className="flex justify-around items-center gap-6">
            {direction === "open" ? <Add /> : <Remove />}
            <p className="text-lg my-4 lg:text-2xl">
              {faqs?.attributes?.question}
            </p>
          </div>
        </button>
      </div>
      <div className="text-lg my-4">
        {isOpen && <p>{faqs?.attributes?.answer}</p>}
      </div>
    </>
  );
};

export default Accordian;
