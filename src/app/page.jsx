import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Test from "@/components/Button";
import ServiceCard from "@/components/ServiceCard/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import FunFacts from "@/containers/funFacts/FunFacts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <TestimonialCard /> */}
      <FunFacts />
    </>
  );
}
