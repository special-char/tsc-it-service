import { Inter } from "next/font/google";
import Hero from "@/containers/hero/Hero";
import PageHeader from "@/containers/pageHeader/PageHeader";
import Banner from "@/containers/banner/Banner";
import Services from "@/containers/services/Services";
import Blog from "@/containers/blog/Blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <About />
      <Team />
      <TeamCard /> */}
      {/* <FAQ /> */}

      <Hero />
      {/* <PageHeader /> */}
      <Services />
      <Blog />
      <Banner />

      {/* <Testimonial /> */}

      {/* <TestimonialCard /> */}

      {/* <PageHeader /> */}
      {/* <Banner /> */}
      {/* <FunFacts /> */}
      {/* <ContactDetails /> */}
      {/* <Location /> */}
    </>
  );
}
