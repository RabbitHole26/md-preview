import plugin from "tailwindcss/plugin"

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
      },
      colors: {
        'theme-light': 'rgba(250,247,245,1)',
        'theme-dark': 'rgba(23,18,18,1)',
        'font-dark': 'rgba(202,201,201,1)',
      },
      backgroundImage: {
        'radial-gradient-theme-light': 'radial-gradient(rgba(250,247,245,1) 50%, rgba(250,247,245,0) 100%)',
        'radial-gradient-theme-dark': 'radial-gradient(rgba(23,18,18,1) 50%, rgba(23,18,18,0) 100%)',
      },
    },
  },
  plugins: [
    require("daisyui"),
    // https://github.com/tailwindlabs/tailwindcss/discussions/1739
    plugin(({ addVariant }) => {
      // Hover media queries
      addVariant("has-hover", "@media (hover: hover) and (pointer: fine)") // ! Only mouse pointer will trigger this media query. Media query (hover: hover) triggers hover on Android devices because they support keyboard and mouse (this includes mobile phones).
      addVariant("no-hover", "@media (hover: none)")
      // Applied on hover if supported, never applied otherwise
      addVariant("hover-never", "@media (hover: hover) { &:hover }")
      addVariant("group-hover-never", "@media (hover: hover) { :merge(.group):hover & }")
      addVariant("peer-hover-never", "@media (hover: hover) { :merge(.peer):hover & }")
      // Applied on hover if supported, always applied otherwise
      addVariant("hover-always", ["@media (hover: hover) { &:hover }", "@media (hover: none)"])
      addVariant("group-hover-always", ["@media (hover: hover) { :merge(.group):hover & }", "@media (hover: none)"])
      addVariant("peer-hover-always", ["@media (hover: hover) { :merge(.peer):hover & }", "@media (hover: none)"])
    }),
  ],
  daisyui: {
    themes: ["cupcake", "lemonade", "halloween", "forest"],
  },
}