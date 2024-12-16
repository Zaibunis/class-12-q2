import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Project from "./components/project";
import Work from "./components/work";
import Taskey from "./components/taskey";
import Sponser from "./components/sponser";
import Footer from "./components/footer";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Project />
    <Work />
    <Taskey />
    <Sponser/>
    <Footer />
   </div>
  );
}
