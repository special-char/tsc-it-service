import React from "react";
import Iceberg from "../../../public/icons/iceberg.svg";
import Vision from "../../../public/icons/vision.svg";
import Rise from "../../../public/icons/rise.svg";
import Sitemark from "../../../public/icons/sitemark.svg";
import Pinpoint from "../../../public/icons/pinpoint.svg";
import BrandsPage from "@/components/BrandsPage/BrandsPage";
import { getBrandData } from "@/lib/getBrandData";

const PageHeader = async () => {
  const data = await getBrandData();

  return <BrandsPage data={data} />;
};

export default PageHeader;
