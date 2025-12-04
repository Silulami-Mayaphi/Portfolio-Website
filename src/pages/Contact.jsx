// src/pages/Contact.jsx
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been submitted.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
   <div className="min-h-screen bg-gray-100 dark:bg-neonBlack text-black dark:text-neonWhite transition-colors duration-500 px-4 md:px-20 py-20">
  <h1 className="text-4xl font-bold text-center mb-12 text-black dark:text-cyan animate-fadeUp">
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white dark:bg-[#001f3f] p-8 rounded-lg shadow-lg animate-scaleUp transition-colors duration-500"
        style={{ animationDelay: "0.3s" }}
      >
        {/* Name Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Silulami Simphiwe"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan dark:focus:ring-magenta transition transform hover:scale-105"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nextsphereventures@gmail.com"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan dark:focus:ring-magenta transition transform hover:scale-105"
            required
          />
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your message..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan dark:focus:ring-magenta transition transform hover:scale-105"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-cyan dark:bg-magenta text-black dark:text-[#0f0f0f] font-semibold py-3 rounded-lg hover:brightness-110 transform hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
