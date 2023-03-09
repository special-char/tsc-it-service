import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Test from "@/components/Button";
import ServiceCard from "@/components/serviceCard/ServiceCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h2>Hello World</h2>
      <h6>Hello World</h6>
      <p></p>

      <p className="small"></p>
      <p className="large"></p>

      <div className="grid grid-cols-3 gap-10">
        <ServiceCard
          title="Graphic Design"
          desc="Lorem ipsum dolor sit amet consectetur."
          icon={require("../../public/images/graphicDesignerIcon.png")}
        />
        <ServiceCard
          title="Development"
          desc="Lorem test dolor sit amet consectetur."
          icon={require("../../public/images/developerIcon.png")}
        />
        <ServiceCard img={require("../../public/images/developerImage.jpeg")} />
      </div>
    </div>
  );
}
