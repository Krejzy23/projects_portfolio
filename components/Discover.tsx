"use client";

import React from "react";
import Feature from "./ui/TextHover";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { cn } from "@/lib/utils";
import { items } from "./ui/Review";
import { features } from "@/data";

const Discover = () => {
  return (
    <section id="discover" className="relative">
      <div className="max-w-5xl relative md:py-10 mx-auto dark:bg-black bg-white dark:bg-grid-white/[0.15] bg-grid-black/[0.1] px-2 w-full left-0 top-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex tracking-wider justify-center items-center h-[20rem] flex-col px-4">
          <h1 className="text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white ">
          "Let's Connect and{" "}
            <span className="text-center bg-secondary-color font-bold text-stroker-1">
              Collaborate"
            </span>
          </h1>
          <p className="dark:text-neutral-400 mt-2 text-md md:text-lg lg:text-xl xl:text-2xl max-w-2xl mx-auto">
            I create beautiful, cutting-edge products using the latest
            technologies and frameworks. Explore my website and applications to
            discover tools that can make your daily life much easier!
          </p>
        </div>
      </div>
      <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
        {items &&
          items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={cn("[&>p:text-lg]", item.className)}
              icon={item.icon}
            />
          ))}
      </BentoGrid>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Discover;
