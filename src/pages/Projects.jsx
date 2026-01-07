import React, { useState } from "react";

const projects = [
  {
    title: "Apex AutoShine",
    description: "A professional car detailing service website built with React, Tailwind CSS, and a clean booking experience.",
    link: "https://apex-auto-shine.vercel.app/",
    type: "web",
  },
  {
    title: "Ithemba Store",
    description: "A modern e-commerce store built with React and Tailwind. Still under development — deployment coming soon.",
    link: null, // Not deployed yet
    type: "coming-soon",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    link: "https://Silulami-Mayaphi.github.io/Portfolio-Website",
    type: "web",
  },
  {
    title: "Task Manager App",
    description: "A productivity app to manage tasks efficiently.",
    link: "https://doday-nine.vercel.app/",
    type: "web",
  },
  {
    title: "E-commerce Store",
    description: "Online store with shopping cart and payment integration.",
    link: "https://Silulami-Mayaphi.github.io/ecommerce-store",
    type: "web",
  },
  {
    title: "Sales Analysis Dashboard",
    description: "Superstore Sales Analysis (2014-2017) in PDF format.",
    link: process.env.PUBLIC_URL + "/Superstore_Dashboard_2014-2017.pdf",
    type: "pdf",
  },
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  const nextProject = () =>
    setSelectedIndex((prev) => (prev + 1) % projects.length);

  const prevProject = () =>
    setSelectedIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neonBlack text-black dark:text-neonWhite transition-colors duration-500 px-4 md:px-20 py-20">

      <h1 className="text-4xl font-bold text-center mb-12 text-black dark:text-cyan animate-fadeUp delay-200">
        My Projects
      </h1>

      {/* Project Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#001f3f] p-6 rounded-lg shadow-lg hover:shadow-neon-cyan-soft dark:hover:shadow-neon-magenta-soft transform hover:-translate-y-2 transition duration-300 animate-scaleUp"
            style={{ animationDelay: `${0.2 + index * 0.2}s` }}
          >
            <h2 className="text-2xl font-semibold mb-2 text-black dark:text-cyan">
              {project.title}
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <button
              onClick={() => setSelectedIndex(index)}
              className="px-4 py-2 bg-cyan dark:bg-magenta text-black dark:text-neonBlack rounded font-semibold hover:brightness-110 transition"
            >
              View Project
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
          <div className="bg-white dark:bg-[#001f3f] p-6 rounded-lg max-w-4xl w-full relative h-[80vh] overflow-hidden transition-colors duration-500">

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-2 right-2 text-gray-500 dark:text-neonWhite font-bold text-xl z-50"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-2 text-black dark:text-cyan">
              {selectedProject.title}
            </h2>

            <p className="mb-4 text-gray-700 dark:text-gray-300">
              {selectedProject.description}
            </p>

            {/* If project is "Coming Soon", show message instead of iframe */}
            {selectedProject.type === "coming-soon" ? (
              <div className="w-full h-[70%] flex items-center justify-center text-xl text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded">
                🚧 Deployment Coming Soon 🚧
              </div>
            ) : (
              <iframe
                src={selectedProject.link}
                className="w-full h-[70%] border border-gray-300 dark:border-gray-700 rounded transition-colors duration-500"
                title={selectedProject.title}
              />
            )}

            {/* Modal Controls */}
            <div className="flex justify-between mt-4">
              <button
                onClick={prevProject}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-neonWhite rounded hover:brightness-110 transition"
              >
                ← Previous
              </button>

              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan dark:bg-magenta text-black dark:text-neonBlack rounded hover:brightness-110 transition"
                >
                  Open in New Tab
                </a>
              )}

              <button
                onClick={nextProject}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-neonWhite rounded hover:brightness-110 transition"
              >
                Next →
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
