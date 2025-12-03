// src/components/ThemeToggle.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 rounded-full
        bg-cyan dark:bg-magenta
        text-black dark:text-neonBlack
        shadow-neon-cyan dark:shadow-neon-magenta
        hover:brightness-110
        flex items-center justify-center
        transition transform hover:scale-110
      "
      aria-label="Toggle Theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeToggle;
