// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neonBlack text-black dark:text-neonWhite py-6 text-center shadow-neon-cyan dark:shadow-neon-magenta transition-colors duration-500">
      © {new Date().getFullYear()} Silulami. All rights reserved.
    </footer>
  );
};

export default Footer;
