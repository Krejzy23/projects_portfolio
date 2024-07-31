import React from "react";
import { LinkPreview } from "./ui/ContactLink";

const Contact = () => {
  return (
    <section
      id="contact"
      className="
    "
    >
      <div className="max-w-7xl relative mx-auto px-4 w-full left-0 top-0">
        <div className="flex tracking-wider justify-center items-center h-[40rem] flex-col px-4">
          <h1 className="text-2xl md:text-4xl font-semibold dark:text-white ">
            Take the little time to Discover my works...
          </h1>
          <div className="text-xl md:text-3xl max-w-5xl mx-auto mt-2 mb-10 dark:text-neutral-400">
            <p>
              Let's create beautiful, cutting-edge products together using the
              latest technologies and frameworks. Explore my{" "}
              <LinkPreview
                url="https://minimalist-portfolio-navy.vercel.app/"
                className="font-semibold"
              >
                portfolio
              </LinkPreview>{" "}
              to discover tools that can enhance your{" "}
              <LinkPreview
                url="https://taskflow-murex.vercel.app/"
                className="font-bold"
              >
                daily life.
              </LinkPreview>{" "}
              I'm a web developer open to new opportunities and collaborations.
              Reach out to discuss your projects or just to{" "}
              <LinkPreview
                url="https://developer-portfolio-green.vercel.app/contact"
                className="font-bold"
              >
                connect!
              </LinkPreview>
            </p>
          </div>
          <div className="dark:text-neutral-400 text-xl md:text-3xl max-w-2xl mx-auto">
            <p>
              Visit my GitHub{" "}
              <LinkPreview
                url="https://github.com/Krejzy23"
                className="font-bold bg-clip-text text-transparent"
              >
                repositories
              </LinkPreview>{" "}
              or check all live site deployments on{" "}
              <LinkPreview
                url="https://vercel.com/krejzy23s-projects"
                className="font-bold bg-clip-text text-transparent"
              >
                Vercel.
              </LinkPreview>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;