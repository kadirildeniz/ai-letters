import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarketingSlider from "./components/MarketingSlider";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <MarketingSlider />
      <Content />
    </div>
  );
}
