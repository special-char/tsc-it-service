import React from "react";
import HeaderPage from "@/components/HeaderPage/HeaderPage";
import { getMenuData } from "@/lib/getMenuData";
import { getSocialMediaData } from "@/lib/getSocialMediaData";

const Header = async () => {
  const data = await getMenuData();

  const socialMedia = await getSocialMediaData();

  return <HeaderPage data={data} socialMedia={socialMedia} />;
};

export default Header;
