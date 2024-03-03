/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				black1: "#202020",
				black2: "#2c2c2c",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
