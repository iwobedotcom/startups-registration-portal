import Image from "next/image";
import dynamic from "next/dynamic";

const HomeHero = dynamic(() => import("../../components/home/hero"));

export default function Home() {
  return (
    <main>
      <HomeHero />
    </main>
  );
}
