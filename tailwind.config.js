/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-picture": "url('/fmzbg.webp')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        finalsred: "#d21f3c",
      },
    },
  },
  plugins: [],
};
