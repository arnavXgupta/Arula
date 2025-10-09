// import Image from "next/image";
'use client';
import Header from "@/components/Header";
import Hero from "../components/Hero";
import Partner from "@/components/Partner";
import Stats from "@/components/Stats";
import { Video } from "@/components/video";
import Faq from "@/components/Faqs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div 
      // className="bg-[#FFF0FA]"
      className="bg-white"
      >
        <Header />
        <Hero />
        <Partner />
        <Stats />
        <Video />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
