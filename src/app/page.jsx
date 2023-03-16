import Banner from "@/containers/banner/Banner";
import Footer from "@/containers/footer/Footer";
import Header from "@/containers/Header/Header";
import Hero from "@/containers/hero/Hero";
import PageHeader from "@/containers/pageHeader/PageHeader";
import Services from "@/containers/services/Services";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PageHeader />
      <Services />
      <Banner />

      {/* <Testimonial /> */}
      <Footer />
    </>
  );
}
