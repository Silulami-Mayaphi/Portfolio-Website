// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neonBlack text-black dark:text-neonWhite transition-colors duration-500 flex flex-col">

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-20 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-cyan shadow-neon-cyan dark:shadow-neon-magenta animate-fadeIn delay-200">
          Silulami
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl animate-fadeIn delay-500">
          I build beautiful web experiences and extract insights from data.
          <br />
          Front-End Developer & Aspiring Data Analyst
        </p>
        <Link
          to="/projects"
          className="mt-8 px-6 py-3 bg-cyan dark:bg-magenta text-black dark:text-neonBlack rounded-lg font-semibold hover:brightness-110 transform hover:scale-105 transition animate-fadeIn delay-800"
        >
          View My Work
        </Link>
      </section>

      {/* Call to Action */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          className="px-8 py-4 bg-cyan dark:bg-magenta text-black dark:text-neonBlack font-semibold rounded-lg hover:brightness-110 transition transform hover:scale-105"
          to="/projects"
        >
          View Projects
        </Link>
        <Link
          className="px-8 py-4 border border-cyan dark:border-magenta text-cyan dark:text-magenta font-semibold rounded-lg hover:bg-cyan hover:text-black dark:hover:bg-magenta dark:hover:text-neonBlack transition transform hover:scale-105"
          to="/contact"
        >
          Contact Me
        </Link>
      </div>

      {/* Skills Section */}
      <section className="bg-white dark:bg-[#001f3f] py-20 px-4 md:px-20 mt-16 rounded-lg shadow-neon-cyan dark:shadow-neon-magenta transition-colors duration-500">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-cyan">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-cyan">Front-End Development</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              HTML, CSS, JavaScript, React, TailwindCSS — I craft responsive and interactive web applications.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-cyan">Data Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Python, Excel, SQL, Data Visualization — I explore data and extract actionable insights.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
