import { Inter } from "next/font/google";
import Header from "@/containers/Header/Header";
import Hero from "@/containers/hero/Hero";
import Footer from "@/containers/footer/Footer";
import PageHeader from "@/containers/pageHeader/PageHeader";
import Banner from "@/containers/banner/Banner";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Banner /> */}

      {/* <PageHeader /> */}
      {/* <Testimonial /> */}
      <Footer />
    </>
  );
}
