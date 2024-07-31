import Discover from "@/components/Discover";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";

const Home =() => {
  return (
    <main className="relative flex flex-col justify-center items-center overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Discover />
      </div>
    </main>
    
  );
}

export default Home;
