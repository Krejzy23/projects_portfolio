"use client";
import React from "react";
import { LinkPreview } from "./ui/ContactLink";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full -mt-20 dark:bg-black bg-white relative flex items-center justify-center"
    >
      <div className="max-w-5xl relative mx-auto dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] px-2 w-full left-0 top-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex tracking-wider justify-center items-center h-[40rem] flex-col px-4 ">
          <h1 className="text-start text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold dark:text-white">
            Take the little time to Discover my works...
          </h1>
          <p className="dark:text-neutral-400 text-md md:text-lg lg:text-xl xl:text-2xl mx-auto mt-2 mb-10 max-w-2xl">
            Let's create beautiful, cutting-edge products together using the
            latest technologies and frameworks. Explore my{" "}
            <span className="font-semibold">
              <LinkPreview url="https://minimalist-portfolio-navy.vercel.app/">
                portfolio
              </LinkPreview>
            </span>{" "}
            to discover tools that can enhance your{" "}
            <span className="font-semibold">
              <LinkPreview url="https://taskflow-murex.vercel.app/">
                daily life.
              </LinkPreview>
            </span>{" "}
            I'm a web developer open to new opportunities and collaborations.
            Reach out to discuss your projects or just to{" "}
            <span className="font-semibold">
              <LinkPreview url="https://developer-portfolio-green.vercel.app/contact">
                connect!
              </LinkPreview>
            </span>
          </p>
          <p className="dark:text-neutral-400 text-md md:text-lg lg:text-xl xl:text-2xl max-w-2xl mx-auto">
            Visit my GitHub{" "}
            <span className="font-semibold bg-clip-text text-transparent">
              <LinkPreview url="https://github.com/Krejzy23">
                repositories
              </LinkPreview>
            </span>{" "}
            or check all live site deployments on{" "}
            <span className="font-semibold bg-clip-text text-transparent">
              <LinkPreview url="https://vercel.com/krejzy23s-projects">
                Vercel.
              </LinkPreview>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
