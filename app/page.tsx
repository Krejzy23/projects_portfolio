"use client"

import Contact from "@/components/Contact";
import Discover from "@/components/Discover";
import Footer from "@/components/Footer";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffect";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";


const Home =() => {
  return (
    <main className="relative flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 bg-white dark:bg-black">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Discover />
        <Contact />
        <GoogleGeminiEffectDemo />
        <Footer />
      </div>
    </main>
    
  );
}

export default Home;
