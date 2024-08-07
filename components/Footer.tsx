import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="max-w-7xl">
      <div className="">
        <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="flex flex-col justify-between items-center">
            <h1 className="">FOOTER</h1>
            <p className="md:text-base text-sm md:font-normal font-light">
              Copyright © 2024 Aleš Krejzl
            </p>
            <div className="flex md:flex-row">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-transform duration-200 transform hover:scale-110 hover:bg-purple"
                >
                  <img src={info.img} alt="icons" width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
