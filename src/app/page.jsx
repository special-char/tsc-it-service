import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Test from "@/components/Button";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import About from "@/containers/about/About";
import Team from "@/containers/team/Team";
import TeamCard from "@/components/TeamCard/Team";
import FAQ from "@/containers/faq/FAQ";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <About />
      <Team />
      <TeamCard /> */}
      <FAQ />
    </>
  );
}
