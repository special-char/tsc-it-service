import About from "@/components/About/About";
import { getAboutData } from "@/lib/getAboutData";
import React from "react";

const AboutScreen = async () => {
  const data = await getAboutData();

  return <About data={data} />;
};

export default AboutScreen;
