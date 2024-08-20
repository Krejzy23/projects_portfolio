"use client";

import React from "react";
import  Feature  from "./ui/TextHover";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { cn } from "@/lib/utils";
import { items } from "./ui/Review"; // Import items from the Review file
import { features } from "@/data";

const Discover = () => {
  return (
    <section id="discover" className="relative">
      <div className="max-w-5xl relative mx-auto md:py-10 px-4 w-full mt-10 left-0 top-0 tracking-wider">
        <h1 className="text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white ">
          Contact Me and let's talk about{" "}
          <span className="bg-secondary-color font-bold text-stroker-1">
            Collaboration
          </span>
        </h1>
        <p className="dark:text-neutral-400 text-md md:text-lg lg:text-xl xl:text-2xl max-w-7xl mx-auto mt-2 mb-10">
          I create beautiful, cutting-edge products using the latest
          technologies and frameworks. Explore my website and applications to
          discover tools that can make your daily life much easier!
        </p>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
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
      </div>
    </section>
  );
};

export default Discover;
