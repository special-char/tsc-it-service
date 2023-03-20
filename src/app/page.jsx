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
      <div className="home">
        <div className="container relative z-[1] mx-auto max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex flex-col flex-wrap w-full">
          <Hero />
          <PageHeader />
          <Banner />
          <Services />
          <FunFacts />
          <Blog />
        </div>
      </div>
    </>
  );
}
