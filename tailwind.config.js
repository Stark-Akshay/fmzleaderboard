/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        saira: ["Saira", "sans-serif"],
      },
      backgroundImage: {
        "hero-picture": "url('/fmzbg.webp')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        finalsred: "#d21f3c",
        finalsyellow: "#e8c637",
      },
    },
  },
  plugins: [],
};
