/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "base-100": "#151730",
        "base-200": "#2d2c56",
        primary: "#d7d8eb",
      },
    },
  },
  plugins: [],
};
