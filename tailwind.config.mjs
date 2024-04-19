/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: "true",
        padding: "1rem",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      aria: {
        current: 'current="page"',
      },
      colors: {
        bkg: "#fff",
        muted: "#F6EBDA",
        accent1: "#FFBD7F",
        accent2: "#A0583C",
        dark2: "#835E4C",
        dark1: "#2F2105",
        text: "#000",
      },
    },
  },
  plugins: [],
};
