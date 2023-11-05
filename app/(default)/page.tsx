import dynamic from "next/dynamic";

const HomeHero = dynamic(() => import("../../components/home/hero"));
const HomeNewsletter = dynamic(
  () => import("../../components/home/newsletter")
);

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeNewsletter />
    </main>
  );
}
