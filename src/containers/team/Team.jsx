import TeamCard from "@/components/TeamCard/TeamCard";
import React from "react";

const team = [
  {
    id: 1,
    src: "https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7a53037e871_team-1.jpg",
    name: "John Doe",
    post: "Co Founder",
  },
  {
    id: 2,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/631875d3e12953fde067ee80_team-4-p-500.jpeg",
    name: "John Doe",
    post: "Co Founder",
  },
  {
    id: 3,
    src: "https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7c38b37e87a_team-2.jpg",
    name: "John Doe",
    post: "Co Founder",
  },
  {
    id: 4,
    src: "https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7571d37e872_team-3.jpg",
    name: "John Doe",
    post: "Co Founder",
  },
];

const Team = () => {
  return (
    <div className="team">
      <div className="container relative z-[1] mx-auto flex flex-col my-20 gap-10 flex-wrap flex-shrink flex-grow basis-[0%] max-w-6xl w-full">
        <h3 className="flex justify-center text-4xl md:text-7xl lg:text-9xl">
          The Team
        </h3>
        <div className="grid grid-rows-4 gap-4 lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-4 xl:grid-rows-none">
          {team.map((item) => (
            <TeamCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
