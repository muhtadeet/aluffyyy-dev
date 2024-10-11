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
  		generalSans: ["General Sans", "sans-serif"]
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			'color-1': '#FA939F',
  			'color-2': '#5046e6',
  			'color-3': '#FA939F',
  			'color-4': '#FA939F',
  			'color-5': '#5046e6'
  		},
  		animation: {
  			rainbow: 'rainbow var(--speed, 2s) infinite linear'
  		},
  		keyframes: {
  			rainbow: {
  				'0%': {
  					'background-position': '0%'
  				},
  				'100%': {
  					'background-position': '200%'
  				}
  			}
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [nextui(), require("tailwindcss-animate")],
});
export default config;
