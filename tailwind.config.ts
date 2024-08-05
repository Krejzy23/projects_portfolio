import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = { 
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-text": "linear-gradient(165deg, #0093E9 0%, #80D0C7 100%)",
      },
      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: { [key: string]: any }) => void }) {
      addUtilities({
        '.bg-secondary-color': {
          'background-image': 'linear-gradient(165deg, #0093E9 0%, #80D0C7 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-stroker-1' : {
          '-webkit-text-stroke-width': '0.5px',
        },
        '.text-stroke-custom': {
          '-webkit-text-stroke-color': '#A3A3A3',
        },
      });
    },
  ],
};

export default config;