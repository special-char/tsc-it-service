import BannerPage from "@/components/BannerPage/BannerPage";
import { getBannerData } from "@/lib/getBannerData";
import React from "react";

const Banner = async () => {
  const data = await getBannerData();

  return <BannerPage data={data} />;
};

export default Banner;
