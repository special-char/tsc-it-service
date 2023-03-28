import React from "react";
import BrandPage from "@/components/BrandPage/BrandPage";
import { getBrandData } from "@/lib/getBrandData";

const PageHeader = async () => {
  const data = await getBrandData();

  return <BrandPage data={data} />;
};

export default PageHeader;
