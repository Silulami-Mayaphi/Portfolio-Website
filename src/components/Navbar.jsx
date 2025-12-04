// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gray-100 dark:bg-neonBlack shadow-neon-cyan dark:shadow-neon-magenta transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-black dark:text-cyan">
          Silulami
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-black dark:text-neonWhite font-semibold hover:text-cyan dark:hover:text-magenta transition 
                ${location.pathname === link.path ? "underline decoration-cyan dark:decoration-magenta underline-offset-4" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <FiX className="text-2xl text-black dark:text-neonWhite" />
            ) : (
              <FiMenu className="text-2xl text-black dark:text-neonWhite" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-gray-100 dark:bg-neonBlack transition-colors duration-500">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block text-black dark:text-neonWhite font-semibold hover:text-cyan dark:hover:text-magenta transition 
                ${location.pathname === link.path ? "underline decoration-cyan dark:decoration-magenta underline-offset-4" : ""}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Desktop Theme Toggle */}
      <div className="hidden md:flex absolute right-6 top-4">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
