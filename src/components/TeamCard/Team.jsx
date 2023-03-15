import React from "react";

const TeamCard = ({ img, name, post }) => {
  return (
    <div>
      <div className="container flex flex-col gap-5">
        <div>
          <img className="aspect-auto w-[278px]" src={img} />
        </div>
        <div>
          <h4> {name}</h4>
          <p className="text-lightGray">{post}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
