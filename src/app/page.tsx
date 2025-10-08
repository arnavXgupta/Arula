// import Image from "next/image";
'use client';
import Header from "@/components/Header";
import Hero from "../components/Hero";
import Features from "@/components/Features";
import Contact from "@/components/Contact";
import Partner from "@/components/Partner";
import Faq from "@/components/Faqs";
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
        <Features />
        <Faq />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
