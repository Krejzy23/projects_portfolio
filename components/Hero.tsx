"use client";

import React from "react";
import { HeroParallax } from "./ui/HeroParallax";
import { products } from "@/data";
import ThemeSwitch from "./ThemeSwitch";

const Hero = () => {
  return (
    <div className="max-w-7xl relative mx-auto px-2 w-full left-0 top-0">
      <div className="flex flex-col">
        <div>
          <ThemeSwitch />
        </div>
        <HeroParallax products={products} />
      </div>
    </div>
  );
};

export default Hero;
