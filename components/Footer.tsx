import React from "react";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="-mt-40">
        <div className="h-[10rem] w-full dark:bg-grid-small-white/[0.5] bg-grid-small-black/[0.3] relative flex items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex items-center md:gap-3 gap-6">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Social"
                  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg bg-opacity-75 rounded-lg border border-neutral-500 transition-transform duration-200 transform hover:scale-125"
                >
                  <img 
                    src={info.img} 
                    alt="icons" 
                    width={20} 
                    height={20} 
                    className="transition-filter duration-300 hover:filter hover:invert hover:grayscale hover:brightness-150"
                  />
                </a>
              ))}
            </div>
            <p className="mt-5 md:text-base text-sm md:font-normal font-light">
              Copyright © 2024 Aleš Krejzl
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
