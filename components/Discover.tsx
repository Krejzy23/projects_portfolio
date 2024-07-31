"use client";

import React from "react";
import { Features } from "./ui/TextHover";

const Discover = () => {
  return (
    <section
      id="discover"
      className="relative"
    >
      <div className="max-w-7xl relative mx-auto md:py-40 px-4 w-full left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-semibold dark:text-white">
          Contact Me <br /> and let's talk about{" "}
          <span className="bg-secondary-color font-bold">Collaboration</span>
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          I create beautiful, cutting-edge products using the latest
          technologies and frameworks. Explore my website and applications to
          discover tools that can make your daily life much easier!
        </p>
        <Features />
      </div>
    </section>
  );
};

export default Discover;
