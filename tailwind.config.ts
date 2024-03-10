import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      generalSans: ["General Sans", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
});
export default config;
