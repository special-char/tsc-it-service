import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Test from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  );
}
