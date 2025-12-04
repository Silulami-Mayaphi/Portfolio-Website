/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // <--- important!
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#00fff7",
        magenta: "#ff00f7",
        neonBlack: "#0f0f0f",
        neonWhite: "#e0e0e0",
      },
      boxShadow: {
        "neon-cyan": "0 0 10px #00fff7, 0 0 20px #00fff7, 0 0 40px #00fff7",
        "neon-magenta": "0 0 10px #ff00f7, 0 0 20px #ff00f7, 0 0 40px #ff00f7",
      },
    },
  },
  plugins: [],
};
