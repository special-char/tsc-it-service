"use client";

import React, { useState } from "react";
import Add from "../../../public/icons/add.svg";
import Remove from "../../../public/icons/remove.svg";

const Accordian = ({ text, paragraph }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [direction, setdirection] = useState("open");

  const toggleView = () => {
    setIsOpen(!isOpen);
    setdirection(direction === "open" ? "close" : "open");
  };
  return (
    <div className="w-full my-4 ">
      <div className="flex justify-start border-b-lightGray border-b-2 ">
        <button
          onClick={toggleView}
          className="flex flex-col text-start  gap-5"
        >
          <div className="flex items-center gap-3">
            {direction === "open" ? <Add /> : <Remove />}
            <p className="text-xxl my-4 lg:text-3xl">{text}</p>
          </div>
        </button>
      </div>
      <div className="text-lg my-4">{isOpen && <p>{paragraph}</p>}</div>
    </div>
  );
};

export default Accordian;
