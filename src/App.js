// src/App.js
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      {/* The main site wrapper handles light/dark background and text transitions */}
      <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-black dark:text-[#e0e0e0] transition-colors duration-500">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        {/* Floating Theme Toggle */}
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
