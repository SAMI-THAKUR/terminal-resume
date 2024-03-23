/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgmain: "#0d1117",
        banner: "#56b6c2",
        link: "#c678dd",
        text: "#98c379",
      },
      fontFamily: {
        tech: ["Roboto Mono", "monospace"],
        fett: ["Monofett", "monospace"],
      },
    },
  },
  plugins: [],
};
