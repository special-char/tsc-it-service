import TeamCard from "@/components/TeamCard/Team";
import React from "react";

const Team = () => {
  return (
    <div>
      <h3 className="flex justify-center text-[100px]">The Team</h3>
      <div className="flex flex-row gap-5 justify-center">
        <TeamCard
          img="https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7a53037e871_team-1.jpg"
          name="John Doe"
          post="Co Founder"
        />

        <TeamCard
          img="https://assets.website-files.com/6315d6de2357050021f26e96/631875d3e12953fde067ee80_team-4-p-500.jpeg"
          name="Tim Baker"
          post="Marketing Expert"
        />

        <TeamCard
          img="https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7c38b37e87a_team-2.jpg"
          name="Demi Mason"
          post="Social Media Expert"
        />

        <TeamCard
          img="https://assets.website-files.com/622f2476e95ec7155b37e7b0/622f2476e95ec7571d37e872_team-3.jpg"
          name="Robert Bozo"
          post="Development"
        />
      </div>
    </div>
  );
};

export default Team;
