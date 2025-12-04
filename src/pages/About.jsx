// src/pages/About.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import profilePic from "../assets/profile.jpg";

const skills = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "HTML & CSS",
  "Node.js",
  "Git & GitHub",
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neonBlack text-black dark:text-neonWhite transition-colors duration-500 px-4 md:px-20 py-20">
      
      <h1 className="text-4xl font-bold text-center mb-12 animate-fadeUp delay-200">
        About Me
      </h1>

      {/* BIO SECTION */}
      <section className="flex flex-col md:flex-row items-center mb-16 max-w-4xl mx-auto gap-8">
        <img
          src={profilePic}
          alt="Silulami Mayaphi"
          className="w-48 h-48 rounded-full shadow-neon-cyan dark:shadow-neon-magenta transition transform hover:scale-105"
        />
        <p className="text-gray-700 dark:text-gray-300 text-lg text-center md:text-left animate-fadeUp delay-400">
          Hi, I'm Silulami Simphiwe Mayaphi, a front-end developer passionate
          about building interactive, responsive, and visually appealing web
          applications. I also enjoy exploring data and extracting actionable
          insights to inform smarter decisions.
        </p>
      </section>

      {/* DOWNLOAD CV BUTTON + SOCIALS */}
      <div className="flex flex-col items-center gap-6 mb-16 animate-fadeUp delay-500">

        {/* Download CV */}
        <a
          href="/CV.pdf"
          download
          className="px-6 py-3 bg-cyan dark:bg-magenta text-black dark:text-neonBlack 
          font-semibold rounded-lg shadow-neon-cyan dark:shadow-neon-magenta 
          hover:brightness-110 hover:scale-105 transition"
        >
          Download CV
        </a>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-3xl">
          <a
            href="https://github.com/Silulami-Mayaphi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-neonWhite hover:text-cyan dark:hover:text-magenta transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/silulami-mayaphi-1790662b8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-neonWhite hover:text-cyan dark:hover:text-magenta transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/silulami.mayaphi_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-neonWhite hover:text-cyan dark:hover:text-magenta transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-neonWhite hover:text-cyan dark:hover:text-magenta transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* SKILLS SECTION */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 animate-fadeUp delay-600">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#001f3f] p-4 rounded-lg 
              shadow-neon-cyan dark:shadow-neon-magenta 
              hover:shadow-neon-cyan-soft dark:hover:shadow-neon-magenta-soft 
              transition transform hover:-translate-y-1 animate-scaleUp"
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
