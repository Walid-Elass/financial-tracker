/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        custom: "0 0px 8px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
