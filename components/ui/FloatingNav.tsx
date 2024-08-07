"use client";

import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./MovingBorder";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    imgURL?: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      if (typeof previous === "number") {
        let direction = current - previous;

        if (scrollYProgress.get() < 0.05) {
          setVisible(false);
        } else {
          if (direction < 0) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex items-center justify-center space-x-4 bg-secondary-color max-w-fit md:min-w-fit fixed z-[5000] top-5 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgb(253,253,255)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem, idx) => (
          <Button
            key={`link=${idx}`}
            as={Link}
            href={navItem.link}
            alt={navItem.name}
            className={cn(
              "relative justify-center items-center flex-col space-x-1 hover:bg-opacity-80 bg-white hover:dark:bg-opacity-80 dark:bg-black text-white dark:text-white border-neutral-200 dark:border-slate-800"
            )}
          >
            {navItem.imgURL && (
              <Image
                src={navItem.imgURL}
                alt={`${navItem.name}icon`}
                width={24}
                height={24}
                className="block"
              />
            )}
            <span className="lg:flex lg:text-sm xl:text-md font-light text-white cursor-pointer">
              {navItem.name}
            </span>
          </Button>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};