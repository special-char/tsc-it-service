import { Inter } from "next/font/google";
import Header from "@/containers/Header/Header";
import Hero from "@/containers/hero/Hero";
import Footer from "@/containers/footer/Footer";
import PageHeader from "@/containers/pageHeader/PageHeader";
import Banner from "@/containers/banner/Banner";
import styles from "./page.module.css";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import About from "@/containers/about/About";
import Team from "@/containers/team/Team";
import TeamCard from "@/components/TeamCard/Team";
import FAQ from "@/containers/faq/FAQ";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import FunFacts from "@/containers/funFacts/FunFacts";
import ContactDetails from "@/containers/contactDetails/ContactDetails";
import ContactCard from "@/components/ContactCard/ContactCard";
import Location from "@/containers/location/Location";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <About />
      <Team />
      <TeamCard /> */}
      {/* <FAQ /> */}

      <Hero />
      <PageHeader />
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
