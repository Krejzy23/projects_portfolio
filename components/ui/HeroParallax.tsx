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
  link: string;
  thumbnail: string;
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
      className="lg:h-[350vh] md:h-[295vh] h-[265vh] py-72 overflow-hidden antialiased relative flex flex-col self-auto [perspective:500px] md:py-32 lg:py-10 xl:py-2[transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row-reverse space-x-reverse mb-5 space-x-5 lg:space-x-20 md:mb-10 md:space-x-10 lg:mb-20 ">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-5 space-x-5 md:mb-10 md:space-x-10 lg:mb-20 lg:space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse mb-5 space-x-5 space-x-reverse md:mb-10 md:space-x-10 lg:space-x-20">
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
    <div className="max-w-7xl tracking-wider relative mx-auto py-10 md:py-20 px-4 w-full left-0 top-0">
      <h1 className="dark:text-white  text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-semibold text-stroker-1">
        The Ultimate <br />
        <span className="bg-secondary-color font-bold">Projects</span> review
        page
      </h1>
      <p className="max-w-2xl text-base text-md md:text-2xl xl:text-3xl mt-8 dark:text-neutral-200">
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
      className="group/product h-64 w-[15rem] md:h-[20rem] md:w-[20rem] lg:h-96 lg:w-[25rem] xl:h-[30rem] xl:w-[35rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
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
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
