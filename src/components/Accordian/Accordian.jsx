"use client";

import clsx from "clsx";
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
      <div className="flex justify-start  flex-col ">
        <button
          onClick={toggleView}
          className="flex flex-col text-start gap-5 border-b-2  border-b-lightGray w-full"
        >
          <div className="flex justify-around items-center gap-6 ">
            {direction === "open" ? <Add   /> : <Remove />}
            <p className="text-lg my-4 lg:text-2xl  ">
              {faqs?.attributes?.question}
            </p>
          </div>
        </button>
        <div className={clsx(
          "text-lg my-4 z-40 inset-0 bg-white ease-in-out duration-700 transition-all " , {
            isOpen :"transition-all ease-out duration-[1s] scale-[1.4] "
          }) 
 } >
        {isOpen && <p className="">{faqs?.attributes?.answer}</p>}
      </div>
      </div>
      
    </>
  );
};

export default Accordian;
