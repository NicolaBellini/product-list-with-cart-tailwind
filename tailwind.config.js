/** @type {import('tailwindcss').Config} */
export default {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "red-hat-text": ['"Red Hat Text"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
