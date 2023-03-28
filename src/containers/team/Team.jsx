import TeamCard from "@/components/TeamCard/TeamCard";
import { getTeamMembersData } from "@/lib/getTeamMembersData";
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

const Team = async () => {
  const data = await getTeamMembersData();
  const teamMembersData = data?.data?.teamMembers?.data[0]?.attributes?.team;
  // console.log(
  //   "getTeamMembersData:",
  //   data?.data?.teamMembers?.data[0]?.attributes?.team
  // );

  return (
    <div className="px-container relative z-[1] mx-auto flex justify-center items-center flex-col my-32 gap-10 flex-wrap min-h-screen">
      <h3 className="flex justify-center text-6xl md:text-7xl lg:text-9xl">
        The Team
      </h3>
      <div className="grid grid-rows-4 gap-4 lg:grid-rows-2 lg:grid-cols-2 xl:grid-cols-4 xl:grid-rows-none">
        {teamMembersData.map((item) => (
          <TeamCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Team;
