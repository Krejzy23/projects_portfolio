"use client";

import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "./ui/GeminiEffect"

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"], // Upravený offset pro prodloužení délky zaseku
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 1], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 1], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 1], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 1], [0, 1.2]);

  return (
    <div
      className="h-[100vh] w-full rounded-md relative overflow-clip"
      style={{ overflowY: "auto" }} // Přidáno overflowY auto pro povolení svislého scrollování
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}