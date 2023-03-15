import React from "react";
import Add from "../../../public/icons/add.svg";

const Accordian = ({ text }) => {
  return (
    <div>
      <div className="flex justify-center">
        <button className="flex flex-row items-center gap-5">
          <Add />
          <p className="text-xl">{text}</p>
        </button>
      </div>
    </div>
  );
};

export default Accordian;
