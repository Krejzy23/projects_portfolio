"use client";

import React from "react";
import { HeroParallax } from "./ui/HeroParallax";
import { products } from "@/data";
import ThemeSwitch from "./ThemeSwitch";

const Hero = () => {
  return (
    <div className="max-w-7xl relative mx-auto w-full left-0 top-0 ">
      <div className="flex flex-col mt-2 z-10">
        <div className="flex flex-row items-center justify-between ">
          <h1 className="font-semibold text-lg lg:text-2xl">
            AK
            <span className="bg-secondary-color font-bold text-stroker-1">Web</span>
            Dev
          </h1>
          <ThemeSwitch />
        </div>
        <HeroParallax products={products} />
      </div>
    </div>
  );
};

export default Hero;
