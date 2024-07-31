import React from "react";
import { LinkPreview } from "./ui/ContactLink";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
    "
    >
      <div className="max-w-7xl relative mx-auto md:py-40 px-4 w-full left-0 top-0">
        <div className="flex justify-center items-center h-[40rem] flex-col px-4">
          <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-5xl mx-auto mb-10">
            Let's create beautiful, cutting-edge products together using the
            latest technologies and frameworks. Explore my{" "}
            <LinkPreview url="https://minimalist-portfolio-navy.vercel.app/" className="font-semibold">
              portfolio
            </LinkPreview>{" "}
            to discover tools that can enhance your{" "}
            <LinkPreview url="https://developer-portfolio-green.vercel.app/" className="font-bold">
              daily life.
            </LinkPreview>{" "}
            I'm a web developer open to new opportunities and collaborations.
            Reach out to discuss your projects or just to{" "}
            <LinkPreview url="https://taskflow-murex.vercel.app/" className="font-bold">
              connect!
            </LinkPreview>{" "}
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl mx-auto">
            Visit{" "}
            <LinkPreview
              url="https://github.com/Krejzy23"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Aceternity UI
            </LinkPreview>{" "}
            for amazing Tailwind and Framer Motion components.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
