import dynamic from "next/dynamic";

const HomeHero = dynamic(() => import("../../components/home/hero"));
const HomeAbout = dynamic(() => import("../../components/home/about"));
const HomeHighlight = dynamic(() => import("../../components/home/highlight"));
const HomeFeatures = dynamic(() => import("../../components/home/features"));
const HomeProcess = dynamic(() => import("../../components/home/process"));
const HomePartners = dynamic(() => import("../../components/home/partners"));
const HomeNewsletter = dynamic(
  () => import("../../components/home/newsletter")
);

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeHighlight />
      <HomeFeatures />
      <HomeProcess />
      <HomePartners />
      <HomeNewsletter />
    </main>
  );
}
