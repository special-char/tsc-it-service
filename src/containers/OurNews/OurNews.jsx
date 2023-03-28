import NewsPage from "@/components/NewsPage/NewsPage";
import { getNewsHeaderData } from "@/lib/getNewsHeaderData";
import React from "react";

const OurNews = async () => {
  const data = await getNewsHeaderData();

  return <NewsPage data={data} />;
};

export default OurNews;
