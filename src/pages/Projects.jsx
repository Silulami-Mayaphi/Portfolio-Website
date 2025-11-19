// src/pages/Projects.jsx
import React from 'react';

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and Tailwind.",
    link: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Task Manager App",
    description: "A productivity app to manage tasks and deadlines efficiently.",
    link: "https://github.com/yourusername/task-manager",
  },
  {
    title: "E-commerce Store",
    description: "An online store with shopping cart and payment integration.",
    link: "https://github.com/yourusername/ecommerce-store",
  },
  {
    title: "Sales Analysis Dashboard",
    description: "Superstore Sales Analysis (2014-2017) in PDF format.",
    link: "/Superstore_Dashboard_2014-2017.pdf", // note: placed in public folder
  },
];


const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-20 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 animate-fadeUp delay-200">
        My Projects
      </h1>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 animate-scaleUp"
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
