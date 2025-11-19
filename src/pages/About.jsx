// src/pages/About.jsx
import React from 'react';

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
    <div className="min-h-screen bg-gray-100 px-4 md:px-20 py-20">
      {/* About Header */}
      <h1 className="text-4xl font-bold text-center mb-12 animate-fadeUp delay-200">
        About Me
      </h1>

      {/* Bio Section */}
      <section className="mb-16 text-center max-w-2xl mx-auto">
        <p className="text-gray-700 text-lg mb-4 animate-fadeUp delay-400">
          Hi, I'm Silulami Simphiwe Mayaphi, a front-end developer passionate
          about building clean, interactive, and responsive web applications.
          I love turning ideas into reality using modern web technologies.
        </p>
        <p className="text-gray-700 text-lg animate-fadeUp delay-600">
          My goal is to create intuitive user experiences while continuously
          improving my skills and exploring new tools in the web development
          ecosystem.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 animate-fadeUp delay-800">
          My Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition transform hover:-translate-y-1 animate-scaleUp"
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
