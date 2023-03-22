import { Inter } from "next/font/google";
import Hero from "@/containers/hero/Hero";

import Banner from "@/containers/banner/Banner";
import Services from "@/containers/services/Services";
import Blog from "@/containers/blog/Blog";
import FunFacts from "@/containers/funFacts/FunFacts";
import Carousel from "@/components/Carousel/Carousel";
import PageHeader from "@/containers/pageHeader/PageHeader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <PageHeader />
      <Banner />
      <Services />
      {/* <FunFacts /> */}
      <Blog />
    </>
  );
}
