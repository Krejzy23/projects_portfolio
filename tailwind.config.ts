import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const addVariablesForColors = ({ addBase, theme }: any) => {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
};

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
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
      strokeWidth: {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
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
        '.text-stroker-1': {
          '-webkit-text-stroke-width': '0.5px',
        },
        '.text-stroke-custom': {
          '-webkit-text-stroke-color': '#A3A3A3',
        },
      });
    },
    addVariablesForColors,
  ],
};

export default config;