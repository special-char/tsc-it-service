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
        <div className="container relative z-[1] mx-auto max-w-[300px] sm:max-w-[355px] md:max-w-sm lg:max-w-2xl xl:max-w-4xl 2xl:max-w-6xl flex flex-col flex-wrap w-full">
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
