/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#0b1120",
          steel: "#1f2937",
          rust: "#ea580c",
          ember: "#f97316",
          sand: "#fbbf24",
        },
      },
      fontFamily: {
        sans: ["'Urbanist'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-orange": "0 15px 45px rgba(234, 88, 12, 0.25)",
      },
    },
  },
  plugins: [],
};

