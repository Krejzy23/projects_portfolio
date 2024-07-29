import Hero from "@/components/Hero";
import Image from "next/image";

const Home =() => {
  return (
    <main className="relative flex flex-col justify-center items-center  overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
    
  );
}

export default Home;
