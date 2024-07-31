"use client"
import React from "react";
import { LinkPreview } from "./ui/ContactLink";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl relative mx-auto px-4 w-full left-0 top-0">
        <div className="flex tracking-wider justify-center items-center h-[40rem] flex-col px-4">
          <h1 className="text-2xl md:text-4xl font-semibold dark:text-white ">
            Take the little time to Discover my works...
          </h1>
          <p className="dark:text-neutral-400 text-xl md:text-3xl max-w-5xl mx-auto mt-2 mb-10">
            Let's create beautiful, cutting-edge products together using the
            latest technologies and frameworks. Explore my{" "}
            <span className="font-semibold">
              <LinkPreview url="https://minimalist-portfolio-navy.vercel.app/">
                portfolio
              </LinkPreview>
            </span>{" "}
            to discover tools that can enhance your{" "}
            <span className="font-bold">
              <LinkPreview url="https://taskflow-murex.vercel.app/">
                daily life.
              </LinkPreview>
            </span>{" "}
            I'm a web developer open to new opportunities and collaborations.
            Reach out to discuss your projects or just to{" "}
            <span className="font-bold">
              <LinkPreview url="https://developer-portfolio-green.vercel.app/contact">
                connect!
              </LinkPreview>
            </span>
          </p>
          <p className="dark:text-neutral-400 text-xl md:text-3xl max-w-2xl mx-auto">
            Visit my GitHub{" "}
            <span className="font-bold bg-clip-text text-transparent">
              <LinkPreview url="https://github.com/Krejzy23">
                repositories
              </LinkPreview>
            </span>{" "}
            or check all live site deployments on{" "}
            <span className="font-bold bg-clip-text text-transparent">
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
