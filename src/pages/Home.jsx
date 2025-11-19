// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 md:px-20 py-20">
  <h1 className="text-5xl md:text-6xl font-bold text-gray-800 animate-fadeIn delay-200">
    Silulami
  </h1>
  <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-2xl animate-fadeIn delay-500">
    I build beautiful web experiences and extract insights from data.
    <br />
    Front-End Developer & Aspiring Data Analyst
  </p>
  <a
    href="#projects"
    className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition duration-300 animate-fadeIn delay-800"
  >
    View My Work
  </a>
</section>


        {/* Call to Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </Link>
        </div>
      

      {/* Skills / About Section */}
      <section className="bg-white py-20 px-4 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Front-End Development</h3>
            <p className="text-gray-600 text-center">
              HTML, CSS, JavaScript, React, TailwindCSS — I craft responsive and
              interactive web applications.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p className="text-gray-600 text-center">
              Python, Excel, SQL, Data Visualization — I explore data and extract
              actionable insights.
            </p>
          </div>
        </div>
      </section>

      {/* Optional Footer */}
      <footer className="bg-gray-100 py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Silulami. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
