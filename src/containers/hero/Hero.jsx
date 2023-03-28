import HeroPage from "@/components/HeroPage/HeroPage";
import { getHomeHeaderData } from "@/lib/getHomeHeaderData";
import React from "react";

const Hero = async () => {
  const data = await getHomeHeaderData();

  return <HeroPage data={data} />;
};

export default Hero;
