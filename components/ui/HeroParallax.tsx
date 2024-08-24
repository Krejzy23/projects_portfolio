"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Product = {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
  iconLists: string[];
};

type HeroParallaxProps = {
  products: Product[];
};

export const HeroParallax = ({ products }: HeroParallaxProps) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="lg:h-[320vh] md:h-[285vh] h-[265vh] py-80 overflow-hidden antialiased relative flex flex-col self-auto [perspective:700px] md:py-52 lg:py-32 xl:py-2 [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse mb-5 space-x-5 lg:space-x-10 md:mb-10 md:space-x-5 lg:mb-10 ">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-5 space-x-5 md:mb-10 md:space-x-5 lg:mb-10 lg:space-x-10 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse mb-5 space-x-5 space-x-reverse md:mb-10 md:space-x-5 lg:space-x-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl tracking-widest relative mx-auto py-20 md:py-24 lg:py-28 xl:py-32 px-4 w-full left-0 top-0">
      <h1 className="dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold ">
        The Ultimate <br />
        <span className="bg-secondary-color text-stroker-1 font-bold">
          Projects
        </span>{" "}
        review page
      </h1>
      <p className="max-w-2xl text-base md:text-xl xl:text-3xl mt-6 dark:text-neutral-200 font-medium ">
        "Explore innovative projects crafted with the latest technologies and
        frameworks. These works embody a dedication to excellence and creativity
        in development and design."
      </p>
    </div>
  );
};

type ProductCardProps = {
  product: Product;
  translate: MotionValue<number>;
};

export const ProductCard = ({ product, translate }: ProductCardProps) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product h-52 w-52 md:h-72 md:w-72 lg:h-96 lg:w-96 xl:h-[26rem] xl:w-[26rem] relative flex-shrink-0 hover:shadow-2xl"
    >
      <Link
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0"
        />
      </Link>
      <div className="relative inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-black bg-grid-neutral-400/[0.08] pointer-events-none">
        <div className="flex flex-col items-center justify-center">
          <h2 className="flex justify-center items-center opacity-0 group-hover/product:opacity-100 mt-2 text-stroker-1 bg-secondary-color font-medium text-xl md:text-2xl lg:text-3xl">
            {product.title}
          </h2>
          <p className="flex justify-start items-center opacity-0 group-hover/product:opacity-100 px-2 text-neutral-400 mt-2 font-light text-sm md:text-md lg:text-xl md:py-12">
            {product.description}
          </p>
          <div className="flex items-center">
            {product.iconLists.map((icon, index) => (
              <div
                className="flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 border border-white/[0.2] rounded-full bg-black"
                key={index}
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <Image src={icon} alt="icon" width={40} height={40} className="p-2" />
              </div>
            ))}
          </div>
          <div className="absolute w-full bottom-0 left-0">
            <div className="flex border-t border-neutral-400 justify-start px-2 py-2 items-center">
              <div className="flex flex-row items-center justify-center w-6 h-6 md:w-8 md:h-8 mt-2 lg:w-12 lg:h-12 rounded-full border-[1px] border-neutral-400">
                <Image
                  src={"/images/arrow.svg"}
                  alt={"arrow"}
                  width={100}
                  height={100}
                  className="w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6 object-contain"
                />
              </div>
              <p className="px-2 text-neutral-400 text-sm md:text-md lg:text-lg xl:text-2xl">
                Check Live Site{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
