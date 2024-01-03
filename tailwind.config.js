/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./assets/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],

  theme: {
    extend: {},
  },
};
