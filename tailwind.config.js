/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ! extend existing breakpoint classes with custom ones
      screens: {
        '330px-custom': '330px',
        '400px-custom': '400px',
      }
    },
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: ["cupcake", "lemonade", "halloween", "forest"],
  },
}