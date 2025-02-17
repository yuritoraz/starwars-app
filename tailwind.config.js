const {heroui} = require('@heroui/theme');
/** @type {import('tailwindcss').Config} */

const { Poller_One, Julius_Sans_One } = require('next/font/google');
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/skeleton.js"
  ],
	theme: {
		container: {
			center: true,
			padding: "15px",
		},
		screens: {
			sm: "488px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
		fontFamily: {
			inter: ['Inter', ...fontFamily.sans],
			julius: ['Julius Sans One', ...fontFamily.sans],
		},
		extend: {

			colors: {
				primary: '#09090a',
				accent: {
					DEFAULT: '#17C4EC',
					hover: '#183A57',
				}
			},

			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
  plugins: [require("tailwindcss-animate"),heroui()],
};
